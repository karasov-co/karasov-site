// Shared page chrome for the long-form routes (/about, /services/*, /case-studies/*).
// Extracted from /about so the design system lives in one place instead of being
// copied per page. No "use client": these are plain presentational components, so
// they work in both the server routes and the client-rendered homepage.
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export const SG = "var(--font-space-grotesk), sans-serif";
export const IN = "var(--font-inter), sans-serif";
export const JB = "var(--font-jetbrains-mono), monospace";
export const GOLD = "#D4A853";
export const CAL = "https://calendly.com/v-karasov-pm/30min";
export const WA =
  "https://wa.me/karvitalii?text=Hi%20Vitalii%2C%20I%20saw%20your%20site%20and%20want%20to%20talk%20about%20my%20operations.";
export const EMAIL = "vitalii@karasov.co";

export const GOLD_RULE = { borderTop: "1px solid rgba(212,168,83,0.4)" };
export const WRAP: CSSProperties = {
  maxWidth: 1240,
  margin: "0 auto",
  padding: "52px 32px",
  boxSizing: "border-box",
};

export const prose: CSSProperties = {
  margin: "0 0 18px",
  fontSize: 15.5,
  color: "#9A9A9A",
  lineHeight: 1.8,
  maxWidth: 700,
};
export const strong: CSSProperties = { color: "#EDEDED", fontWeight: 600 };
export const eyebrow: CSSProperties = {
  margin: "0 0 10px",
  fontFamily: JB,
  fontSize: 12,
  color: "#A98A47",
  letterSpacing: "0.2em",
};

export function SiteHeader() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid #1E1E1E" }}>
      <nav className="fd-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <Link href="/" style={{ display: "flex", alignItems: "baseline", gap: 10, color: "#EDEDED" }}>
          <span style={{ fontWeight: 700, letterSpacing: "0.12em", fontSize: 13, fontFamily: SG }}>KARASOV <span style={{ color: GOLD }}>SYSTEMS</span></span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <Link href="/" className="fd-hide ks-navlink" style={{ color: "#8A8A8A", fontSize: 13 }}>← Back to site</Link>
          <Link href="/services/ai-automation-for-contractors" className="fd-hide ks-navlink" style={{ color: "#8A8A8A", fontSize: 13 }}>Services</Link>
          <Link href="/answers" className="fd-hide ks-navlink" style={{ color: "#8A8A8A", fontSize: 13 }}>Answers</Link>
          <Link href="/about" className="fd-hide ks-navlink" style={{ color: "#8A8A8A", fontSize: 13 }}>About</Link>
          <Link href="/verified" className="fd-hide ks-navlink" style={{ color: "#8A8A8A", fontSize: 13 }}>Verified</Link>
          <a href={CAL} target="_blank" rel="noopener noreferrer" className="ks-navcta" style={{ border: "1px solid rgba(212,168,83,0.5)", color: GOLD, fontWeight: 600, fontSize: 13, padding: "9px 18px", borderRadius: 6, fontFamily: SG }}>Book a call</a>
        </div>
      </nav>
    </header>
  );
}

export function PageHero({
  eyebrow: eb,
  title,
  lead,
  meta,
}: {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <section style={GOLD_RULE}>
      <div className="fd-pad" style={{ ...WRAP, padding: "60px 32px 48px" }}>
        <p style={eyebrow}>{eb}</p>
        <h1 style={{ margin: "0 0 24px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "#EDEDED", maxWidth: 860, textWrap: "balance" }}>{title}</h1>
        {meta}
        <p style={{ margin: 0, fontSize: 17, color: "#C9C9C9", lineHeight: 1.7, maxWidth: 760 }}>{lead}</p>
      </div>
    </section>
  );
}

export function Section({
  n,
  title,
  children,
  alt = false,
}: {
  n: string;
  title: string;
  children: ReactNode;
  alt?: boolean;
}) {
  return (
    <section style={{ ...GOLD_RULE, background: alt ? "#0C0C0C" : undefined }}>
      <div className="fd-pad" style={WRAP}>
        <div className="fd-2col" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 48, alignItems: "start" }}>
          <div className="fd-faq-intro" style={{ position: "sticky", top: 96 }}>
            <p style={eyebrow}>{n}</p>
            <h2 style={{ margin: 0, fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", letterSpacing: "-0.02em", lineHeight: 1.15, color: "#EDEDED" }}>{title}</h2>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul style={{ margin: "0 0 6px", padding: 0, listStyle: "none", maxWidth: 700 }}>
      {items.map((it, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: 12,
            padding: "11px 0",
            borderTop: i === 0 ? "1px solid #1E1E1E" : undefined,
            borderBottom: "1px solid #1E1E1E",
            fontSize: 14.5,
            color: "#9A9A9A",
            lineHeight: 1.7,
          }}
        >
          <span aria-hidden="true" style={{ color: "#8A6F3A", fontFamily: JB, fontSize: 12, flexShrink: 0, lineHeight: 1.9 }}>
            ▸
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

// A labelled paragraph: bold lead-in, then body. The repeating unit in the
// long-form service pages.
export function Point({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p style={prose}>
      <span style={strong}>{label}</span> {children}
    </p>
  );
}

export function GoldLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  const style: CSSProperties = { color: GOLD, textDecoration: "underline", textUnderlineOffset: 3 };
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="ks-gold" style={style}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="ks-gold" style={style}>
      {children}
    </Link>
  );
}

// Closing block. Every page ends by inviting the reader to describe a problem
// by email rather than pushing a call booking.
export function EmailCta({
  title,
  children,
  links,
}: {
  title: string;
  children: ReactNode;
  links?: ReactNode;
}) {
  return (
    <section style={{ ...GOLD_RULE, background: "#0C0C0C" }}>
      <div className="fd-pad" style={{ ...WRAP, padding: "60px 32px" }}>
        <h2 style={{ margin: "0 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", lineHeight: 1.15, color: "#EDEDED", maxWidth: 760 }}>{title}</h2>
        <p style={{ margin: "0 0 28px", fontSize: 16, color: "#9A9A9A", lineHeight: 1.75, maxWidth: 640 }}>{children}</p>
        <p style={{ margin: "0 0 24px" }}>
          <a
            href={`mailto:${EMAIL}`}
            className="ks-btn-gold"
            style={{ display: "inline-block", background: GOLD, color: "#0A0A0A", fontWeight: 600, padding: "16px 32px", borderRadius: 8, fontSize: 15, fontFamily: SG }}
          >
            {EMAIL}
          </a>
        </p>
        {links && <p style={{ margin: 0, fontSize: 14, color: "#777777", lineHeight: 1.9 }}>{links}</p>}
      </div>
    </section>
  );
}

// Upwork profile URL. Typed as string rather than inferred as a literal so
// the empty-string check below stays valid: set it to "" and the
// "Verify these reviews" line stops rendering.
export const UPWORK_PROFILE_URL: string =
  "https://www.upwork.com/freelancers/~01af851972931ea5c2?mp_source=share";

const TESTIMONIALS: { quote: string; meta: string }[] = [
  {
    quote:
      "Vitalii has deep knowledge on configuration of Claude. Vitalii provided valuable insights into how to structure our prompts and provided very nice suggestions on how to improve our code. We’d hire him again in the future!",
    meta: "Claude API integration · May 2026",
  },
  {
    quote:
      "Vitalii delivered the test task on time and to a high standard. Communication was clear and prompt throughout. We’ll be reaching out for future freelance projects. Recommended.",
    meta: "Automation engineering · May 2026",
  },
];

export function Testimonials({ alt = false }: { alt?: boolean }) {
  return (
    <section style={{ ...GOLD_RULE, background: alt ? "#0C0C0C" : undefined }}>
      <div className="fd-pad" style={WRAP}>
        <p style={eyebrow}>WHAT CLIENTS SAY</p>
        <h2 style={{ margin: "0 0 36px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)", letterSpacing: "-0.02em", lineHeight: 1.15, color: "#EDEDED", maxWidth: 760 }}>Reviewed by the people who hired me.</h2>

        <div className="fd-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#1E1E1E", border: "1px solid #1E1E1E", borderRadius: 12, overflow: "hidden" }}>
          {TESTIMONIALS.map((t) => (
            <figure key={t.meta} style={{ margin: 0, background: "#0E0E0E", padding: "28px 30px" }}>
              <blockquote style={{ margin: "0 0 18px", fontSize: 15, color: "#C9C9C9", lineHeight: 1.75 }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption style={{ fontFamily: JB, fontSize: 11, color: "#777777", letterSpacing: "0.06em" }}>
                <span aria-hidden="true" style={{ color: GOLD, letterSpacing: "0.1em" }}>★★★★★</span>
                <span style={{ color: "#A98A47" }}> 5.0</span> · {t.meta}
              </figcaption>
            </figure>
          ))}
        </div>

        <p style={{ margin: "24px 0 0", fontSize: 14.5, color: "#9A9A9A", lineHeight: 1.75, maxWidth: 700 }}>
          Clients independently endorsed the same five qualities:{" "}
          <span style={strong}>reliable · committed to quality · solution oriented · clear communicator · detail oriented.</span>
        </p>

        <p style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.9 }}>
          {UPWORK_PROFILE_URL !== "" && (
            <>
              <GoldLink href={UPWORK_PROFILE_URL} external>
                Verify these reviews →
              </GoldLink>
              {" · "}
            </>
          )}
          <GoldLink href="/verified">Every verifiable source, linked at origin →</GoldLink>
        </p>
      </div>
    </section>
  );
}
