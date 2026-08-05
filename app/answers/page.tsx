import type { Metadata } from "next";
import Link from "next/link";
import { FAQ_CATS, FAQ_TOTAL, faqSlug } from "../faq-data";

const SG = "var(--font-space-grotesk), sans-serif";
const JB = "var(--font-jetbrains-mono), monospace";
const GOLD = "#D4A853";
const CAL = "https://calendly.com/v-karasov-pm/30min";
const WA =
  "https://wa.me/karvitalii?text=Hi%20Vitalii%2C%20I%20saw%20your%20site%20and%20want%20to%20talk%20about%20my%20operations.";

export const metadata: Metadata = {
  title: "AI automation for contractors — 34 straight answers on cost, scope, risk and timeline",
  description:
    "Every question owners actually ask before building private AI operations systems: cost and ROI, scope, risk and data handling, team impact, timeline, ownership and working arrangements.",
  alternates: { canonical: "/answers" },
  openGraph: {
    title: "AI automation for contractors — 34 straight answers on cost, scope, risk and timeline",
    description:
      "Cost, ROI, risk, data handling, timeline and ownership — answered in full for owner-led design-build, remodeling and specialty contractor companies.",
    url: "/answers",
    type: "article",
  },
};

// FAQPage structured data so individual answers are eligible for search results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATS.flatMap((cat) =>
    cat.qs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  ),
};

export default function AnswersPage() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid #1E1E1E" }}>
        <nav className="fd-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link href="/" style={{ display: "flex", alignItems: "baseline", gap: 10, color: "#EDEDED" }}>
            <span style={{ fontWeight: 700, letterSpacing: "0.12em", fontSize: 13, fontFamily: SG }}>KARASOV <span style={{ color: GOLD }}>SYSTEMS</span></span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <Link href="/" className="fd-hide ks-navlink" style={{ color: "#8A8A8A", fontSize: 13 }}>← Back to site</Link>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="ks-navcta" style={{ border: "1px solid rgba(212,168,83,0.5)", color: GOLD, fontWeight: 600, fontSize: 13, padding: "9px 18px", borderRadius: 6, fontFamily: SG }}>Book a call</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Intro */}
        <section style={{ borderTop: "1px solid rgba(212,168,83,0.4)" }}>
          <div className="fd-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 32px 40px", boxSizing: "border-box" }}>
            <p style={{ margin: "0 0 10px", fontFamily: JB, fontSize: 12, color: "#A98A47", letterSpacing: "0.2em" }}>STRAIGHT ANSWERS</p>
            <h1 style={{ margin: "0 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "#EDEDED", maxWidth: 820, textWrap: "balance" }}>Every question owners actually ask.</h1>
            <p style={{ margin: "0 0 40px", fontSize: 16, color: "#9A9A9A", lineHeight: 1.7, maxWidth: 720 }}>{FAQ_TOTAL} answers across {FAQ_CATS.length} chapters — money, scope, risk, data handling, your team, timeline, how I work and the practical details. Every answer is on this page in full. Link straight to any one of them.</p>

            {/* Chapter index */}
            <nav aria-label="Chapters" style={{ borderTop: "1px solid #1E1E1E" }}>
              {FAQ_CATS.map((cat, ci) => (
                <a
                  key={cat.label}
                  href={`#${faqSlug(cat.label)}`}
                  className="ks-caserow"
                  style={{ display: "flex", alignItems: "baseline", gap: 16, padding: "14px 4px", borderBottom: "1px solid #1E1E1E", textDecoration: "none" }}
                >
                  <span style={{ fontFamily: JB, fontSize: 12, color: "#555555", width: 26, flexShrink: 0, letterSpacing: "0.08em" }}>{String(ci + 1).padStart(2, "0")}</span>
                  <span style={{ fontFamily: SG, fontWeight: 600, fontSize: 16, color: "#EDEDED", letterSpacing: "0.01em", flex: 1 }}>{cat.label}</span>
                  <span style={{ fontFamily: JB, fontSize: 11, color: "#666666", flexShrink: 0 }}>{cat.qs.length}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Chapters */}
        {FAQ_CATS.map((cat, ci) => (
          <section
            key={cat.label}
            id={faqSlug(cat.label)}
            style={{ borderTop: "1px solid rgba(212,168,83,0.4)", background: ci % 2 === 1 ? "#0C0C0C" : undefined, scrollMarginTop: 70 }}
          >
            <div className="fd-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 32px", boxSizing: "border-box" }}>
              <div className="fd-2col" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 48, alignItems: "start" }}>
                <div className="fd-faq-intro" style={{ position: "sticky", top: 96 }}>
                  <p style={{ margin: "0 0 10px", fontFamily: JB, fontSize: 12, color: "#A98A47", letterSpacing: "0.2em" }}>{String(ci + 1).padStart(2, "0")} — CHAPTER</p>
                  <h2 style={{ margin: 0, fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.5rem, 2.6vw, 2rem)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "#EDEDED" }}>{cat.label}</h2>
                </div>

                <div>
                  {cat.qs.map((f, qi) => (
                    <article
                      key={f.q}
                      id={faqSlug(f.q)}
                      style={{ borderTop: qi === 0 ? "1px solid #1E1E1E" : undefined, borderBottom: "1px solid #1E1E1E", padding: "22px 0", scrollMarginTop: 80 }}
                    >
                      <h3 style={{ margin: "0 0 10px", fontFamily: SG, fontWeight: 600, fontSize: 17, lineHeight: 1.35, color: "#EDEDED", letterSpacing: "-0.01em" }}>
                        <a href={`#${faqSlug(f.q)}`} className="ks-faq-anchor" style={{ color: "inherit", textDecoration: "none" }}>
                          {f.q}
                          <span aria-hidden="true" className="ks-faq-hash" style={{ color: "#8A6F3A", fontFamily: JB, fontSize: 14, marginLeft: 8 }}>#</span>
                        </a>
                      </h3>
                      <p style={{ margin: 0, color: "#9A9A9A", fontSize: 14.5, lineHeight: 1.75, maxWidth: 700 }}>{f.a}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section style={{ borderTop: "1px solid rgba(212,168,83,0.4)", background: "#0C0C0C" }}>
          <div className="fd-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 32px", boxSizing: "border-box" }}>
            <h2 style={{ margin: "0 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "#EDEDED", maxWidth: 700 }}>Question that isn’t answered here?</h2>
            <p style={{ margin: "0 0 32px", fontSize: 16, color: "#9A9A9A", lineHeight: 1.7, maxWidth: 560 }}>Send it over. You’ll get a direct answer — even if the answer is that I’m not the right fit.</p>
            <div className="fd-wrap" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="ks-btn-gold" style={{ background: GOLD, color: "#0A0A0A", fontWeight: 600, padding: "16px 32px", borderRadius: 8, fontSize: 15, fontFamily: SG }}>💬 Describe your bottleneck</a>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="ks-btn-outline" style={{ background: "#1E1B12", border: "1px solid rgba(212,168,83,0.5)", color: "#E8C46A", fontWeight: 600, padding: "16px 32px", borderRadius: 8, fontSize: 15, fontFamily: SG }}>📅 Book a 30-min call</a>
            </div>
            <p style={{ margin: 0, fontSize: 14, color: "#777777" }}>
              <Link href="/" className="ks-gold" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 4 }}>← Back to karasov.co</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
