"use client";

import { useEffect, useRef } from "react";

interface Drop {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
  color: string;
}

export default function InkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = ["#6b2d6b", "#9b4f9b", "#3d1a4f", "#c9a14a", "#4a1a6b"];
    const drops: Drop[] = [];
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnDrop = () => {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 0,
        maxRadius: 80 + Math.random() * 180,
        alpha: 0.18 + Math.random() * 0.18,
        speed: 0.4 + Math.random() * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    // Seed initial drops
    for (let i = 0; i < 6; i++) spawnDrop();
    const interval = setInterval(spawnDrop, 1800);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        const progress = d.radius / d.maxRadius;
        const currentAlpha = d.alpha * (1 - progress * 0.7);

        const grad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.radius);
        grad.addColorStop(0, d.color + Math.round(currentAlpha * 255).toString(16).padStart(2, "0"));
        grad.addColorStop(0.5, d.color + Math.round(currentAlpha * 0.5 * 255).toString(16).padStart(2, "0"));
        grad.addColorStop(1, d.color + "00");

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        d.radius += d.speed;
        if (d.radius >= d.maxRadius) drops.splice(i, 1);
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}