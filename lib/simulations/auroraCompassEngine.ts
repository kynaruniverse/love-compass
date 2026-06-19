export function mountAuroraCompass(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let animId: number;
  let startTime: number | null = null;

  function resize() {
    if (!canvas || !ctx) return;
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener("resize", resize);

  const ribbons = [
    { phase: 0,   speed: 0.18, color: "rgba(201,161,74,",  amp: 0.10, freq: 0.9, yBase: 0.38, opacity: 0.07 },
    { phase: 2.1, speed: 0.12, color: "rgba(158,59,78,",   amp: 0.08, freq: 0.6, yBase: 0.58, opacity: 0.06 },
    { phase: 4.2, speed: 0.22, color: "rgba(201,161,74,",  amp: 0.06, freq: 1.1, yBase: 0.72, opacity: 0.05 },
    { phase: 1.0, speed: 0.09, color: "rgba(201,161,74,",  amp: 0.07, freq: 0.5, yBase: 0.22, opacity: 0.04 },
  ];

  function drawAurora(w: number, h: number, t: number) {
    ribbons.forEach((r) => {
      const gradient = ctx!.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0,   r.color + "0)");
      gradient.addColorStop(0.25, r.color + r.opacity + ")");
      gradient.addColorStop(0.75, r.color + r.opacity + ")");
      gradient.addColorStop(1,   r.color + "0)");
      const yCenter = h * r.yBase;
      const thickness = h * 0.07;
      ctx!.beginPath();
      for (let x = 0; x <= w; x += 6) {
        const wave = Math.sin(x * r.freq * 0.004 + t * r.speed + r.phase) * h * r.amp;
        const y = yCenter + wave;
        if (x === 0) ctx!.moveTo(x, y - thickness / 2);
        else ctx!.lineTo(x, y - thickness / 2);
      }
      for (let x = w; x >= 0; x -= 6) {
        const wave = Math.sin(x * r.freq * 0.004 + t * r.speed + r.phase) * h * r.amp;
        const y = yCenter + wave;
        ctx!.lineTo(x, y + thickness / 2);
      }
      ctx!.closePath();
      ctx!.fillStyle = gradient;
      ctx!.fill();
    });
  }

  function drawCompassRose(cx: number, cy: number, radius: number, angle: number) {
    const c = ctx!;
    const glowGrad = c.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 1.3);
    glowGrad.addColorStop(0, "rgba(201,161,74,0.08)");
    glowGrad.addColorStop(1, "rgba(201,161,74,0)");
    c.beginPath();
    c.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
    c.fillStyle = glowGrad;
    c.fill();
    c.beginPath();
    c.arc(cx, cy, radius, 0, Math.PI * 2);
    c.strokeStyle = "rgba(201,161,74,0.25)";
    c.lineWidth = 0.8;
    c.stroke();
    c.beginPath();
    c.arc(cx, cy, radius * 0.55, 0, Math.PI * 2);
    c.strokeStyle = "rgba(201,161,74,0.15)";
    c.lineWidth = 0.6;
    c.stroke();
    c.save();
    c.translate(cx, cy);
    c.rotate(angle);
    for (let i = 0; i < 8; i++) {
      c.save();
      c.rotate((i * Math.PI) / 4);
      const isPrimary = i % 2 === 0;
      const tipLen = isPrimary ? radius * 0.9 : radius * 0.65;
      const baseW  = isPrimary ? radius * 0.13 : radius * 0.08;
      c.beginPath();
      c.moveTo(0, -tipLen);
      c.quadraticCurveTo(baseW,  -radius * 0.3, 0, 0);
      c.quadraticCurveTo(-baseW, -radius * 0.3, 0, -tipLen);
      c.fillStyle = isPrimary ? "rgba(201,161,74,0.7)" : "rgba(201,161,74,0.35)";
      c.fill();
      c.beginPath();
      c.moveTo(0, tipLen);
      c.quadraticCurveTo(baseW,  radius * 0.3, 0, 0);
      c.quadraticCurveTo(-baseW, radius * 0.3, 0, tipLen);
      c.fillStyle = isPrimary ? "rgba(201,161,74,0.3)" : "rgba(201,161,74,0.15)";
      c.fill();
      c.restore();
    }
    const jewel = c.createRadialGradient(0, 0, 0, 0, 0, radius * 0.12);
    jewel.addColorStop(0,   "rgba(255,240,200,0.9)");
    jewel.addColorStop(0.5, "rgba(201,161,74,0.7)");
    jewel.addColorStop(1,   "rgba(201,161,74,0.1)");
    c.beginPath();
    c.arc(0, 0, radius * 0.12, 0, Math.PI * 2);
    c.fillStyle = jewel;
    c.fill();
    for (let i = 0; i < 32; i++) {
      const tickAngle = (i * Math.PI * 2) / 32;
      const isMajor = i % 4 === 0;
      const r1 = radius * (isMajor ? 1.05 : 1.02);
      const r2 = radius * (isMajor ? 1.14 : 1.08);
      c.beginPath();
      c.moveTo(Math.cos(tickAngle) * r1, Math.sin(tickAngle) * r1);
      c.lineTo(Math.cos(tickAngle) * r2, Math.sin(tickAngle) * r2);
      c.strokeStyle = isMajor ? "rgba(201,161,74,0.5)" : "rgba(201,161,74,0.2)";
      c.lineWidth = isMajor ? 1.2 : 0.6;
      c.stroke();
    }
    c.restore();
  }

  const particles: { x: number; y: number; r: number; speed: number; phase: number; opacity: number }[] = [];
  for (let i = 0; i < 28; i++) {
    particles.push({
      x:       Math.random(),
      y:       Math.random(),
      r:       Math.random() * 1.4 + 0.3,
      speed:   Math.random() * 0.025 + 0.008,
      phase:   Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.35 + 0.08,
    });
  }

  function drawParticles(w: number, h: number, t: number) {
    particles.forEach((p) => {
      const drift = Math.sin(t * 0.15 + p.phase) * 0.015;
      const px = (p.x + drift) * w;
      const py = ((p.y - t * p.speed * 0.01) % 1 + 1) % 1 * h;
      ctx!.beginPath();
      ctx!.arc(px, py, p.r, 0, Math.PI * 2);
      ctx!.fillStyle = `rgba(201,161,74,${p.opacity})`;
      ctx!.fill();
    });
  }

  function draw(timestamp: number) {
    if (startTime === null) startTime = timestamp;
    const t = (timestamp - startTime) / 1000;
    const w = canvas!.offsetWidth;
    const h = canvas!.offsetHeight;
    ctx!.clearRect(0, 0, canvas!.offsetWidth, canvas!.offsetHeight);
    drawAurora(w, h, t);
    drawParticles(w, h, t);
    const isNarrow = w < 640;
    const cx     = isNarrow ? w * 0.5  : w * 0.72;
    const cy     = isNarrow ? h * 0.42 : h * 0.5;
    const radius = Math.min(w, h) * (isNarrow ? 0.28 : 0.3);
    const slowAngle = t * 0.08;
    drawCompassRose(cx, cy, radius, slowAngle);
    animId = requestAnimationFrame(draw);
  }

  animId = requestAnimationFrame(draw);

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", resize);
  };
}