"use client";

import { useEffect, useRef, useState } from "react";

// ── Particle canvas (shared with About) ──────────────────────────────────────

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

// ── Accordion item ────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string | React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] overflow-hidden shadow-sm">
      <div className="absolute inset-0 paper-texture opacity-[0.25] pointer-events-none" />
      <button
        onClick={() => setOpen(o => !o)}
        className="relative w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="font-serif font-semibold text-[var(--primary)] leading-snug group-hover:opacity-80 transition-opacity">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border border-[var(--border-soft)] flex items-center justify-center text-[var(--accent)] text-lg font-light transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="relative overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "600px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-5 text-sm leading-relaxed opacity-75">
          {a}
        </div>
      </div>
    </div>
  );
}

// ── FAQ data ──────────────────────────────────────────────────────────────────

const faqs: { category: string; items: { q: string; a: string | React.ReactNode }[] }[] = [
  {
    category: "About the assessments",
    items: [
      {
        q: "Is this scientifically validated?",
        a: "No — and honestly, let's be real about what that question even means. Science is exceptional at measuring observable, repeatable phenomena. Love is neither. No lab has ever successfully bottled what makes one person feel completely seen by a partner and completely invisible with another. Love is subjective, personal, and stubbornly individual — and any tool that claims to have scientifically cracked it is selling you something. What Love Compass does is give you a structured mirror. The frameworks it draws on are grounded in decades of relationship research, but the real validation isn't clinical — it's whether the results make you think, recognise yourself, and understand something you didn't before. That's the only measure that matters here."
      },
      {
        q: "What's the difference between the receiving and giving tests?",
        a: "The receiving tests are about what you need — how you feel most loved and desired, and what a partner needs to give you for you to feel truly seen. The giving tests are about what you naturally offer — how you express love and desire without even thinking about it, and which kind of partner will feel most loved by exactly that. Most people have taken tests like this before and only ever seen half the picture. Taking both sides is where it gets genuinely interesting."
      },
      {
        q: "How long does each assessment take?",
        a: "5 to 10 minutes for most. The Full Profile tests run a little longer. But honestly — the time it takes is the least interesting thing about it. Sit with each question properly rather than clicking through on autopilot. The answers you give quickly are often the least true ones."
      },
      {
        q: "Should I answer based on how I am, or how I want to be?",
        a: "How you actually are. Every time. It's tempting to answer as the version of yourself you're working toward — the more secure, more generous, more emotionally available one. But that person doesn't need the results. You do. The most useful thing you can bring to this is honesty, even when the honest answer is a little uncomfortable to admit."
      },
      {
        q: "Can I take the tests more than once?",
        a: "As many times as you like. Nothing is saved between sessions, so each time is a clean slate. People often find their results shift after a significant relationship, a period of therapy, or simply a few years of living differently. Who you are in relationships at 25 and at 35 can be genuinely different people — it's worth checking in."
      },
    ]
  },
  {
    category: "Understanding your results",
    items: [
      {
        q: "Why do I have multiple top results instead of one clear answer?",
        a: "Because you're not one thing — and any tool that tells you otherwise is oversimplifying you for its own convenience. Human beings are layered. Relational preferences are almost always a blend, and your profile mix is usually more accurate and more interesting than a single tidy label. If two categories are close, that's not a flaw in the results. That's the results being honest about you."
      },
      {
        q: "My result doesn't feel accurate — what should I do?",
        a: "First, honest question: did you answer as you actually are, or as you wish you were? That gap is where most inaccurate results come from. If you're genuinely confident your answers were honest and it still feels off — sit with it a little longer before dismissing it. Sometimes the results that feel wrong are the most revealing ones. If after all that it still doesn't fit, try the Full Profile test. It casts a wider net and often gives a more complete picture."
      },
      {
        q: "What does the percentage next to each category mean?",
        a: "It shows how consistently that dimension showed up across your answers, measured against the maximum it could possibly score. Think of it less as a grade and more as a signal strength. A high percentage means that category came through loudly and repeatedly. A lower one doesn't mean it's absent just quieter. And for the avoidance of doubt: none of these numbers are a rating of how loveable or desirable you are. That's not what we're measuring."
      },
      {
        q: "What does the secondary flavour in my result mean?",
        a: "It's the dimension that came in second — close enough to matter, strong enough to shape how your primary type actually shows up in real life. Two people can share the same primary archetype and feel completely different to love or be loved by, because their secondary flavours are different. It's where the nuance lives. Pay attention to it."
      },
      {
        q: "Can my results change over time?",
        a: "Yes — and if they don't, that might be worth examining in itself. The people we are in relationships evolve. Attachment patterns shift. Old wounds heal or deepen. A result at 22 coming out of your first serious relationship and a result at 35 after a decade of genuinely knowing yourself can look almost nothing alike, and both can be completely accurate for who you were at that moment. This isn't a one-time test. Think of it more like a check-in."
      },
    ]
  },
  {
    category: "Privacy & data",
    items: [
      {
        q: "Is my data stored anywhere?",
        a: "No. Your answers live only in your browser session and disappear the moment you close the tab. Nothing is sent to a server. Nothing sits in a database. No account, no tracking, no aggregate data collection. We genuinely cannot see your answers — and that's by design, not just policy."
      },
      {
        q: "Do I need to create an account?",
        a: "No account, no sign-up, no email required. You open the assessment, you take it, you get your results. That's it. We think that's how it should be."
      },
      {
        q: "Is Love Compass free?",
        a: "Every assessment is completely free. No paywalls, no premium results, no 'unlock your full profile' gates. What you see is what you get."
      },
    ]
  },
  {
    category: "Using results in relationships",
    items: [
      {
        q: "Should I share my results with my partner?",
        a: "If you're in a relationship — yes, and sooner rather than later. Sharing results opens conversations that most couples spend years dancing around. Seeing where your giving and receiving profiles align, and where they don't, gives you something real and concrete to work with instead of another vague argument about feeling misunderstood. Just go in treating it as a starting point, not a verdict on either of you."
      },
      {
        q: "My partner's giving profile doesn't match my receiving profile — is that a problem?",
        a: "It's one of the most common things we see — and no, it's not a death sentence for the relationship. Most couples have meaningful mismatch between how they give and receive love. The difference between couples who struggle with it and couples who don't is almost always the same thing: awareness. You can't bridge a gap you haven't named. Now you've named it."
      },
      {
        q: "Can I use this to find a compatible partner?",
        a: "Not yet — Love Compass is currently a self-reflection tool, not a matching platform. But here's the thing: most people go looking for a partner before they've done this work, which is a bit like shopping without knowing what you actually need. Taking both your receiving and giving assessments gives you a genuinely clear picture of what you're looking for and what you bring. That clarity is more useful than any algorithm."
      },
    ]
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  return (
    <>
      <ParticleCanvas />

      <main className="relative z-10 max-w-3xl mx-auto px-5 py-16 space-y-12">

        {/* Header */}
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 stamp-badge text-xs font-medium text-[var(--accent)]">
            FAQ
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[var(--primary)]">
            Common questions
          </h1>
          <p className="text-lg opacity-70 leading-relaxed max-w-xl">
            Everything you might want to know about how Love Compass works,
            what your results mean, and how to use them.
          </p>
        </div>

        {/* FAQ sections */}
        {faqs.map(section => (
          <div key={section.category} className="space-y-3">
            <h2 className="font-serif text-lg font-semibold text-[var(--accent)] tracking-wide">
              {section.category}
            </h2>
            <div className="space-y-2">
              {section.items.map(item => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="relative rounded-3xl border border-[var(--primary-soft)] bg-[var(--primary-soft)] p-7 text-center space-y-3 overflow-hidden">
          <div className="absolute inset-0 paper-texture opacity-[0.25] pointer-events-none" />
          <div className="relative">
            <p className="font-serif text-lg font-semibold text-[var(--primary)]">
              Still have a question?
            </p>
            <p className="text-sm opacity-60 mt-1">
              The best way to understand your results is to take an assessment and
              sit with what comes up. There's no wrong place to start.
            </p>
            <a
              href="/assessments"
              className="inline-block mt-4 px-5 py-2.5 rounded-2xl bg-[var(--primary)] text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
              Take an Assessment →
            </a>
          </div>
        </div>

        <p className="text-xs opacity-40 text-center leading-relaxed pb-4">
          Love Compass is a self-reflection tool, not a clinical or psychological assessment.
        </p>

      </main>
    </>
  );
}