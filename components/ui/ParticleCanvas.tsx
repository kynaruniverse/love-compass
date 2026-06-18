"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: "heart" | "dot";
  wobble: number;
  wobbleSpeed: number;
  layer: 1 | 2 | 3;
  color: "plum" | "gold";
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio ?? 1;
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    function spawnParticle(i: number): Particle {
      // Distribute evenly across three depth layers
      const layer = ((i % 3) + 1) as 1 | 2 | 3;
      // Layer 1 = foreground (larger, faster)
      // Layer 2 = midground
      // Layer 3 = background (smaller, slower)
      const layerScale = layer === 1 ? 1 : layer === 2 ? 0.65 : 0.38;
      const speedScale = layer === 1 ? 1 : layer === 2 ? 0.6 : 0.3;
      const color: "plum" | "gold" = layer === 2
        ? "gold"
        : "plum";

      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3 * speedScale,
        vy: (-Math.random() * 0.4 - 0.1) * speedScale,
        size: (Math.random() * 7 + 3) * layerScale,
        opacity: layer === 1
          ? Math.random() * 0.14 + 0.05
          : layer === 2
            ? Math.random() * 0.18 + 0.06
            : Math.random() * 0.1 + 0.03,
        type: Math.random() > 0.45 ? "heart" : "dot",
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: (Math.random() * 0.012 + 0.004) * speedScale,
        layer,
        color,
      };
    }

    function drawHeart(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: "plum" | "gold"
    ) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size / 10, size / 10);
      ctx.beginPath();
      ctx.moveTo(0, -3);
      ctx.bezierCurveTo(0, -6, -5, -6, -5, -2);
      ctx.bezierCurveTo(-5, 1, 0, 5, 0, 7);
      ctx.bezierCurveTo(0, 5, 5, 1, 5, -2);
      ctx.bezierCurveTo(5, -6, 0, -6, 0, -3);
      ctx.closePath();

      // Radial gradient for 3D volume
      const grad = ctx.createRadialGradient(-1, -2, 0, 0, 0, 8);
      if (color === "plum") {
        grad.addColorStop(0, "rgba(160,110,190,1)");
        grad.addColorStop(0.5, "rgba(158,59,78,0.85)");
        grad.addColorStop(1, "rgba(50,20,70,0.6)");
      } else {
        grad.addColorStop(0, "rgba(245,225,153,1)");
        grad.addColorStop(0.5, "rgba(201,161,74,0.85)");
        grad.addColorStop(1, "rgba(138,101,32,0.5)");
      }
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }

    function drawDot(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: "plum" | "gold"
    ) {
      const r = size * 0.35;
      const grad = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
      if (color === "plum") {
        grad.addColorStop(0, "rgba(160,110,190,1)");
        grad.addColorStop(1, "rgba(158,59,78,0.4)");
      } else {
        grad.addColorStop(0, "rgba(245,225,153,1)");
        grad.addColorStop(1, "rgba(201,161,74,0.3)");
      }
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    function init() {
      resize();
      particles = Array.from({ length: 55 }, (_, i) => spawnParticle(i));
    }

    function tick() {
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw back to front (layer 3 → 1)
      for (const layer of [3, 2, 1] as const) {
        for (const p of particles) {
          if (p.layer !== layer) continue;

          p.wobble += p.wobbleSpeed;
          p.x += p.vx + Math.sin(p.wobble) * 0.25;
          p.y += p.vy;

          if (p.y < -20) {
            p.y = window.innerHeight + 20;
            p.x = Math.random() * window.innerWidth;
          }

          ctx!.save();
          ctx!.globalAlpha = p.opacity;

          if (p.type === "heart") {
            drawHeart(ctx!, p.x, p.y, p.size, p.color);
          } else {
            drawDot(ctx!, p.x, p.y, p.size, p.color);
          }

          ctx!.restore();
        }
      }

      animId = requestAnimationFrame(tick);
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    init();
    tick();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}