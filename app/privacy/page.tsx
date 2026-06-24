import { generateMeta } from "@/lib";
import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import { ShieldCheck, EyeOff, WifiOff } from "lucide-react";

export const metadata = generateMeta({
  title: "Privacy Policy"
});

const PRIVACY_MARQUEE_ITEMS = [
  "Your answers never leave your browser.",
  "No accounts. No records. No trace.",
  "We built it this way on purpose.",
  "Honest reflection deserves honest privacy.",
  "Nothing stored. Nothing transmitted. Nothing seen.",
  "Privacy isn't a policy here. It's the architecture.",
];

const COMMITMENTS = [
  {
    number: "01",
    statement: "We don't collect your data.",
    body: [
      "Love Wired does not collect, store, or transmit personal data of any kind. There are no accounts, no sign-ups, no forms that send information anywhere. Your name, email address, and identity are never asked for. We have no use for them.",
      "This isn't just policy. It's how the tool is built. There is no server receiving your answers. There is no database storing your results. We genuinely cannot see what you choose. That's by design, not by accident.",
    ],
  },
  {
    number: "02",
    statement: "Your answers live only in your tab.",
    body: [
      "When you complete an assessment, your answers and results are held temporarily in your browser's session storage, a private, local space that exists only for the duration of your current tab. The moment you close the tab or navigate away, that data is gone.",
      "Nothing is written to a cookie. Nothing is sent to a third party. Nothing persists between sessions. If you take the same assessment twice, the second run has no memory of the first.",
    ],
  },
  {
    number: "03",
    statement: "No tracking. No analytics. No watching.",
    body: [
      "Love Wired does not use analytics platforms, advertising trackers, or third-party scripts that monitor your behaviour. There are no tracking cookies. There is no pixel. We don't know how many people took a particular assessment, how long they spent on it, or what their results were.",
      "A tool designed to help people reflect honestly on their most personal patterns shouldn't be watching them while they do it.",
    ],
  },
  {
    number: "04",
    statement: "One third party: our host.",
    body: [
      "Love Wired is hosted on Vercel. As with any web host, Vercel may log standard server-level data such as IP addresses and request timestamps as part of normal infrastructure operation. This is separate from application-level data and is governed by Vercel's privacy policy (vercel.com/legal/privacy-policy).",
      "No other third-party services are integrated into Love Wired.",
    ],
  },
  {
    number: "05",
    statement: "You control everything. We control nothing.",
    body: [
      "Because we hold no personal data about you, there is nothing for us to delete, export, or correct on your behalf. You have full and immediate control over everything associated with your use of Love Wired. It lives in your browser and disappears when you're done.",
      "If you have questions about this policy, reach us at charlesblackwoodofficial@gmail.com.",
    ],
  },
  {
    number: "06",
    statement: "If anything changes, you'll know.",
    body: [
      "If anything here changes, we'll update this page and revise the date below. We don't anticipate significant changes. The core principle of not collecting your data isn't going anywhere.",
    ],
    date: "Last updated: June 2026.",
  },
];

const TRUST_PILLARS = [
  { icon: ShieldCheck, label: "Nothing collected" },
  { icon: EyeOff,     label: "Invisible to us"   },
  { icon: WifiOff,    label: "No tracking"        },
];

export default function PrivacyPage() {
  return (
    <main id="main-content" className="lc-priv-page">

      {/* ── Header ── */}
      <header className="lc-priv-header">
        <p className="lc-priv-eyebrow">PRIVACY</p>
        <h1 className="lc-priv-h1">Your answers are yours.</h1>
        <p className="lc-priv-sub">
          What you share here stays here. This page explains exactly what that means.
        </p>

        {/* Trust pillars */}
        <div className="lc-priv-pillars" aria-label="Privacy at a glance">
          {TRUST_PILLARS.map(({ icon: Icon, label }) => (
            <div key={label} className="lc-priv-pillar">
              <Icon
                size={22}
                strokeWidth={1.5}
                className="lc-priv-pillar-icon"
                aria-hidden="true"
              />
              <span className="lc-priv-pillar-label">{label}</span>
            </div>
          ))}
        </div>
      </header>

      <Marquee items={PRIVACY_MARQUEE_ITEMS} />

      {/* ── Gold rule ── */}
      <div className="lc-priv-rule" aria-hidden="true" />

      {/* ── Commitments ── */}
      <ol className="lc-priv-list" aria-label="Privacy commitments">
        {COMMITMENTS.map((c) => (
          <li key={c.number} className="lc-priv-item">

            {/* Number + statement row */}
            <div className="lc-priv-item-head">
              <span className="lc-priv-num" aria-hidden="true">{c.number}</span>
              <p className="lc-priv-statement">{c.statement}</p>
            </div>

            {/* Prose */}
            <div className="lc-priv-body">
              {c.body.map((para, i) => (
                <p key={i} className="lc-priv-para">{para}</p>
              ))}
              {c.date && (
                <p className="lc-priv-date">{c.date}</p>
              )}
            </div>

          </li>
        ))}
      </ol>

      {/* ── Botanical divider ── */}
      <div className="lc-priv-botanical" aria-hidden="true">
        <Image
          src="/botanical-divider.png"
          alt=""
          width={260}
          height={40}
          style={{ opacity: 0.3 }}
        />
      </div>

      {/* ── Disclaimer ── */}
      <p className="lc-priv-disclaimer">
        Love Wired holds nothing about you. Your data belongs to you
        because we were never in a position to take it.
      </p>
    </main>
  );
}