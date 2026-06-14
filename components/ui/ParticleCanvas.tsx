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
      canvas!.width = window.innerWidth;
      canvas!.height = document.documentElement.scrollHeight;
    }

    function spawnParticle(): Particle {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * document.documentElement.scrollHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        size: Math.random() * 7 + 3,
        opacity: Math.random() * 0.18 + 0.04,
        type: Math.random() > 0.45 ? "heart" : "dot",
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.012 + 0.004,
      };
    }

    function drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
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
      ctx.restore();
    }

    function init() {
      resize();
      particles = Array.from({ length: 55 }, spawnParticle);
    }

    function tick() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const p of particles) {
        p.wobble += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobble) * 0.25;
        p.y += p.vy;
        if (p.y < -20) {
          p.y = canvas!.height + 20;
          p.x = Math.random() * canvas!.width;
        }
        ctx!.save();
        ctx!.globalAlpha = p.opacity;
        ctx!.fillStyle = "#5e3a73";
        if (p.type === "heart") {
          drawHeart(ctx!, p.x, p.y, p.size);
          ctx!.fill();
        } else {
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.size * 0.35, 0, Math.PI * 2);
          ctx!.fill();
        }
        ctx!.restore();
      }
      animId = requestAnimationFrame(tick);
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    init();
    tick();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
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