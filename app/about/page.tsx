"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// ── Particle canvas ──────────────────────────────────────────────────────────

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

function ParticleCanvas() {
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

    init();
    tick();

    const onResize = () => { resize(); };
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

// ── Section card ─────────────────────────────────────────────────────────────

function Section({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      className={`relative rounded-3xl border overflow-hidden shadow-sm p-7 sm:p-9 ${
        accent
          ? "border-[var(--accent)] bg-[var(--accent-soft)]"
          : "border-[var(--border-soft)] bg-[var(--surface)]"
      }`}
    >
      <div className="absolute inset-0 paper-texture opacity-[0.3] pointer-events-none" />
      <div className="relative space-y-4">{children}</div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl font-bold text-[var(--primary)] leading-snug">
      {children}
    </h2>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <ParticleCanvas />

      <main className="relative z-10 max-w-3xl mx-auto px-5 py-16 space-y-8">

        {/* Hero heading */}
        <div className="space-y-3 pb-2">
          <span className="inline-block px-3 py-1 stamp-badge text-xs font-medium text-[var(--accent)]">
            About
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)]">
            Understanding how you love
          </h1>
          <p className="text-lg opacity-70 leading-relaxed max-w-xl">
            Most people spend years in relationships not quite understanding themselves.
            Love Compass exists to change that.
          </p>
        </div>

        {/* What it is */}
        <Section>
          <SectionHeading>What is Love Compass?</SectionHeading>
          <p className="opacity-80 leading-relaxed">
            Love Compass does two things most relationship tools don't bother to
            separate: it tells you how you need to receive love, and how you actually
            give it. That distinction sounds small. It isn't.
          </p>
          <p className="opacity-80 leading-relaxed">
            Most relationship tools stay at the surface. Shared interests, attraction,
            timing — as if relationships fail because people didn't like the same films.
            Love Compass goes somewhere more honest. It maps your relational patterns
            across eight dimensions and gives you a profile built on your real patterns,
            not your aspirational ones.
          </p>
          <p className="opacity-80 leading-relaxed">
            The output isn't a label to put in your dating app bio. It's a map — and a
            genuinely useful one. Most people find it uncomfortable and illuminating in
            roughly equal measure.
          </p>
        </Section>

        {/* What you can do */}
        <Section>
          <SectionHeading>What can you do here?</SectionHeading>
          <p className="opacity-80 leading-relaxed">
            There are six assessments, each designed to surface a different dimension
            of your relational self. You can take one, or take them all.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-1">
            {[
              {
                label: "Love Preference Test",
                tag: "Receiving",
                desc: "Discover how you feel most loved — which expressions of care land deepest for you.",
              },
              {
                label: "How You Love",
                tag: "Giving",
                desc: "Understand how you naturally express love — and who will feel most loved by what you give.",
              },
              {
                label: "Intimacy Style Test",
                tag: "Receiving",
                desc: "Explore how you experience desire and physical connection — what makes you feel truly wanted.",
              },
              {
                label: "How You Desire",
                tag: "Giving",
                desc: "Understand how you express desire — how you naturally show attraction and build intimacy.",
              },
              {
                label: "Full Profile Test",
                tag: "Receiving",
                desc: "A combined love and intimacy assessment giving you your most complete receiving profile.",
              },
              {
                label: "Full Expression Profile",
                tag: "Giving",
                desc: "Your complete giving picture — love and desire combined into one unified expression profile.",
              },
            ].map(item => (
              <div
                key={item.label}
                className="relative rounded-2xl border border-[var(--border-soft)] bg-[var(--background)] p-4 space-y-1.5 overflow-hidden"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif font-semibold text-sm text-[var(--primary)]">
                    {item.label}
                  </span>
                  <span
                    className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.tag === "Giving"
                        ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "bg-[var(--primary-soft)] text-[var(--primary)]"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs opacity-60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm opacity-60 leading-relaxed pt-1">
            Each assessment takes 5–10 minutes. Your answers never leave your browser —
            nothing is stored, nothing is transmitted.
          </p>
          <div className="pt-1">
            <Link
              href="/assessments"
              className="inline-block px-5 py-2.5 rounded-2xl bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
              Browse Assessments →
            </Link>
          </div>
        </Section>

        {/* Love & intimacy — the editorial section */}
        <Section accent>
          <SectionHeading>On love, intimacy, and why they matter</SectionHeading>
          <p className="opacity-85 leading-relaxed">
            Love and intimacy are two of the most overused words in the English language
            and two of the least examined. We treat them as feelings — things that arrive
            and either stick or don't. That framing is responsible for more unnecessary
            pain than most people realise.
          </p>
          <p className="opacity-85 leading-relaxed">
            Love is a practice. A discipline, even. It's the repeated, deliberate act of
            making someone feel like they matter — in the specific way they receive it,
            not the way you prefer to deliver it. The mismatch is almost universal:
            people love others the way they want to be loved themselves. Which sounds
            generous, and often isn't felt that way at all.
          </p>
          <p className="opacity-85 leading-relaxed">
            Intimacy is the other half. It's being completely known and not flinched at.
            Physical intimacy is just that same impulse expressed without words. The
            problem is that emotional and physical closeness develop on different
            timelines, and most couples have never had an honest conversation about
            either one.
          </p>
          <p className="opacity-85 leading-relaxed">
            Understanding your own patterns isn't navel-gazing. It's table stakes for
            being a decent partner. Love Compass won't fix your relationship — but it
            will remove the excuse of not knowing yourself.
          </p>
        </Section>

        {/* Philosophy */}
        <Section>
          <SectionHeading>Our philosophy</SectionHeading>
          <p className="opacity-80 leading-relaxed">
            Self-knowledge is the most underrated relationship skill. Not communication
            frameworks, not compatibility algorithms — actual, honest clarity about what
            you need, what you bring, and where those two things don't yet meet.
          </p>
          <p className="opacity-80 leading-relaxed">
            Love Compass doesn't tell you who to be with. It doesn't score you. It gives
            you a profile — specific to you, built from your answers — and trusts you
            to use it.
          </p>
          <p className="opacity-80 leading-relaxed">
            Clarity first. Everything else follows.
          </p>
        </Section>

        {/* Disclaimer note */}
        <p className="text-xs opacity-40 text-center leading-relaxed pb-4">
          Love Compass is a self-reflection tool, not a clinical or psychological
          assessment. Results reflect patterns and preferences, not fixed traits.
        </p>

      </main>
    </>
  );
}
