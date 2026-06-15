"use client";

import { useEffect, useRef } from "react";

export default function CompassCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    resize();
    window.addEventListener("resize", resize);

    // Aurora ribbons
    const ribbons = [
      { phase: 0, speed: 0.0008, color: "rgba(201,161,74,", amp: 0.18, freq: 1.1, yBase: 0.35 },
      { phase: 1.2, speed: 0.0006, color: "rgba(126,87,150,", amp: 0.14, freq: 0.9, yBase: 0.55 },
      { phase: 2.4, speed: 0.001, color: "rgba(201,161,74,", amp: 0.10, freq: 1.4, yBase: 0.70 },
      { phase: 3.6, speed: 0.0007, color: "rgba(180,130,220,", amp: 0.12, freq: 0.7, yBase: 0.25 },
    ];

    function drawAurora(w: number, h: number) {
      ribbons.forEach((r) => {
        const gradient = ctx!.createLinearGradient(0, 0, w, 0);
        gradient.addColorStop(0, r.color + "0)");
        gradient.addColorStop(0.3, r.color + "0.18)");
        gradient.addColorStop(0.7, r.color + "0.22)");
        gradient.addColorStop(1, r.color + "0)");

        ctx!.beginPath();
        const yCenter = h * r.yBase;
        const thickness = h * 0.09;

        for (let x = 0; x <= w; x += 4) {
          const wave = Math.sin(x * r.freq * 0.005 + t * r.speed * 1000 + r.phase) * h * r.amp;
          const y = yCenter + wave;
          if (x === 0) ctx!.moveTo(x, y - thickness / 2);
          else ctx!.lineTo(x, y - thickness / 2);
        }
        for (let x = w; x >= 0; x -= 4) {
          const wave = Math.sin(x * r.freq * 0.005 + t * r.speed * 1000 + r.phase) * h * r.amp;
          const y = yCenter + wave;
          ctx!.lineTo(x, y + thickness / 2);
        }
        ctx!.closePath();
        ctx!.fillStyle = gradient;
        ctx!.fill();
      });
    }

    // Compass rose
    function drawCompassRose(cx: number, cy: number, radius: number, angle: number) {
      const c = ctx!;

      // Outer glow ring
      const glowGrad = c.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 1.3);
      glowGrad.addColorStop(0, "rgba(201,161,74,0.08)");
      glowGrad.addColorStop(1, "rgba(201,161,74,0)");
      c.beginPath();
      c.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
      c.fillStyle = glowGrad;
      c.fill();

      // Outer circle
      c.beginPath();
      c.arc(cx, cy, radius, 0, Math.PI * 2);
      c.strokeStyle = "rgba(201,161,74,0.25)";
      c.lineWidth = 0.8;
      c.stroke();

      // Inner circle
      c.beginPath();
      c.arc(cx, cy, radius * 0.55, 0, Math.PI * 2);
      c.strokeStyle = "rgba(201,161,74,0.15)";
      c.lineWidth = 0.6;
      c.stroke();

      c.save();
      c.translate(cx, cy);
      c.rotate(angle);

      // 8 cardinal points
      for (let i = 0; i < 8; i++) {
        c.save();
        c.rotate((i * Math.PI) / 4);

        const isPrimary = i % 2 === 0;
        const tipLen = isPrimary ? radius * 0.9 : radius * 0.65;
        const baseW = isPrimary ? radius * 0.13 : radius * 0.08;

        // Light petal
        c.beginPath();
        c.moveTo(0, -tipLen);
        c.quadraticCurveTo(baseW, -radius * 0.3, 0, 0);
        c.quadraticCurveTo(-baseW, -radius * 0.3, 0, -tipLen);
        c.fillStyle = isPrimary
          ? "rgba(201,161,74,0.7)"
          : "rgba(201,161,74,0.35)";
        c.fill();

        // Dark petal
        c.beginPath();
        c.moveTo(0, tipLen);
        c.quadraticCurveTo(baseW, radius * 0.3, 0, 0);
        c.quadraticCurveTo(-baseW, radius * 0.3, 0, tipLen);
        c.fillStyle = isPrimary
          ? "rgba(201,161,74,0.3)"
          : "rgba(201,161,74,0.15)";
        c.fill();

        c.restore();
      }

      // Center jewel
      const jewel = c.createRadialGradient(0, 0, 0, 0, 0, radius * 0.12);
      jewel.addColorStop(0, "rgba(255,240,200,0.9)");
      jewel.addColorStop(0.5, "rgba(201,161,74,0.7)");
      jewel.addColorStop(1, "rgba(201,161,74,0.1)");
      c.beginPath();
      c.arc(0, 0, radius * 0.12, 0, Math.PI * 2);
      c.fillStyle = jewel;
      c.fill();

      // Tick marks around outer ring
      for (let i = 0; i < 32; i++) {
        const tickAngle = (i * Math.PI * 2) / 32;
        const isMajor = i % 4 === 0;
        const r1 = radius * (isMajor ? 1.05 : 1.02);
        const r2 = radius * (isMajor ? 1.14 : 1.08);
        c.beginPath();
        c.moveTo(Math.cos(tickAngle) * r1, Math.sin(tickAngle) * r1);
        c.lineTo(Math.cos(tickAngle) * r2, Math.sin(tickAngle) * r2);
        c.strokeStyle = isMajor
          ? "rgba(201,161,74,0.5)"
          : "rgba(201,161,74,0.2)";
        c.lineWidth = isMajor ? 1.2 : 0.6;
        c.stroke();
      }

      c.restore();
    }

    // Floating particles
    const particles: { x: number; y: number; r: number; speed: number; phase: number; opacity: number }[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.8 + 0.4,
        speed: Math.random() * 0.00015 + 0.00005,
        phase: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    function drawParticles(w: number, h: number) {
      particles.forEach((p) => {
        const drift = Math.sin(t * p.speed * 1000 + p.phase) * 0.02;
        const px = (p.x + drift) * w;
        const py = ((p.y - t * p.speed * 0.3) % 1 + 1) % 1 * h;
        ctx!.beginPath();
        ctx!.arc(px, py, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(201,161,74,${p.opacity})`;
        ctx!.fill();
      });
    }

    function draw(timestamp: number) {
      t = timestamp;
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;

      ctx!.clearRect(0, 0, w, h);

      // Background
      const bg = ctx!.createLinearGradient(0, 0, w * 0.3, h);
      bg.addColorStop(0, "#1a0a2e");
      bg.addColorStop(0.5, "#120820");
      bg.addColorStop(1, "#0d0618");
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, w, h);

      drawAurora(w, h);
      drawParticles(w, h);

      // Compass rose — right-side on desktop, centered on mobile
      const isNarrow = w < 640;
      const cx = isNarrow ? w * 0.5 : w * 0.72;
      const cy = isNarrow ? h * 0.42 : h * 0.5;
      const radius = Math.min(w, h) * (isNarrow ? 0.28 : 0.3);
      const slowAngle = timestamp * 0.00008;
      drawCompassRose(cx, cy, radius, slowAngle);

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
      aria-hidden="true"
    />
  );
}
