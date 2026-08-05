import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

const SG = "var(--font-space-grotesk), sans-serif";
const JB = "var(--font-jetbrains-mono), monospace";
const GOLD = "#D4A853";
const CAL = "https://calendly.com/v-karasov-pm/30min";
const WA =
  "https://wa.me/karvitalii?text=Hi%20Vitalii%2C%20I%20saw%20your%20site%20and%20want%20to%20talk%20about%20my%20operations.";
const EMAIL = "vitalii@karasov.co";

export const metadata: Metadata = {
  title:
    "About Vitalii Karasov — AI operations engineer for construction and design-build companies",
  description:
    "Five years of operations and project management before AI. Legally accountable for personal data of 2,000+ people with zero audit findings. PRINCE2, MA Project Management, three degrees. Production systems for US contractors.",
  alternates: { canonical: "/about" },
  openGraph: {
    title:
      "About Vitalii Karasov — AI operations engineer for construction and design-build companies",
    description:
      "Five years of operations and project management before AI. Legally accountable for personal data of 2,000+ people with zero audit findings. PRINCE2, MA Project Management, three degrees.",
    url: "/about",
    type: "profile",
  },
};

// Same @id as the Person node in layout.tsx: one entity, described more fully here.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://karasov.co/#person",
  name: "Vitalii Karasov",
  jobTitle: "AI operations engineer",
  description:
    "Builds private AI operations systems for construction, design-build and remodeling companies. Former crisis-response operations manager accountable for personal data of 2,000+ people with zero audit findings.",
  // `url` stays the canonical entity URL (same value layout.tsx emits) so the two
  // nodes merge without contradicting each other; the bio page is declared with
  // mainEntityOfPage, which is the property that actually means "page about this".
  url: "https://karasov.co",
  mainEntityOfPage: "https://karasov.co/about",
  email: EMAIL,
  knowsLanguage: ["en", "uk", "pl", "ru"],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Uczelnia Łazarskiego",
      sameAs: "https://www.lazarski.pl/",
      description: "MA, Project Management (2021-2024)",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Drahomanov National Pedagogical University",
      description: "MA, Pedagogy and Philosophy (2020-2022)",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Taras Shevchenko National University of Kyiv",
      sameAs: "https://knu.ua/en",
      description: "BA, European Studies and Civilization (2016-2020)",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "PRINCE2 Foundation",
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: "AXELOS Global Best Practice" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Practical Application of Generative AI for Project Managers",
      recognizedBy: { "@type": "Organization", name: "Project Management Institute" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Security of Personal Data Processing and Risk of Violation of Rights and Freedoms (RODO/GDPR)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Digital Marketing Analytics",
      recognizedBy: {
        "@type": "Organization",
        name: "University of Illinois Urbana-Champaign",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Introduction to Communication Science",
      recognizedBy: { "@type": "Organization", name: "University of Amsterdam" },
    },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "AI operations engineer",
    occupationalCategory: "15-1252.00",
    skills:
      "AI workflow automation, retrieval-augmented generation, speech-to-text pipelines, field operations systems, project knowledge retrieval, API integration, data governance",
  },
  worksFor: { "@id": "https://karasov.co/#service" },
  sameAs: [
    "https://github.com/karasov-co",
    "https://www.linkedin.com/in/vitaliikarasov/",
    "https://sentinel-audit.co",
  ],
};

const prose = {
  margin: "0 0 18px",
  fontSize: 15.5,
  color: "#9A9A9A",
  lineHeight: 1.8,
  maxWidth: 700,
};
const strong = { color: "#EDEDED", fontWeight: 600 };

function Section({
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
    <section
      style={{
        borderTop: "1px solid rgba(212,168,83,0.4)",
        background: alt ? "#0C0C0C" : undefined,
      }}
    >
      <div
        className="fd-pad"
        style={{ maxWidth: 1240, margin: "0 auto", padding: "52px 32px", boxSizing: "border-box" }}
      >
        <div
          className="fd-2col"
          style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 48, alignItems: "start" }}
        >
          <div className="fd-faq-intro" style={{ position: "sticky", top: 96 }}>
            <p style={{ margin: "0 0 10px", fontFamily: JB, fontSize: 12, color: "#A98A47", letterSpacing: "0.2em" }}>
              {n}
            </p>
            <h2
              style={{
                margin: 0,
                fontFamily: SG,
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                color: "#EDEDED",
              }}
            >
              {title}
            </h2>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

function Bullets({ items }: { items: ReactNode[] }) {
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

export default function AboutPage() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid #1E1E1E" }}>
        <nav className="fd-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link href="/" style={{ display: "flex", alignItems: "baseline", gap: 10, color: "#EDEDED" }}>
            <span style={{ fontWeight: 700, letterSpacing: "0.12em", fontSize: 13, fontFamily: SG }}>KARASOV <span style={{ color: GOLD }}>SYSTEMS</span></span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <Link href="/" className="fd-hide ks-navlink" style={{ color: "#8A8A8A", fontSize: 13 }}>← Back to site</Link>
            <Link href="/answers" className="fd-hide ks-navlink" style={{ color: "#8A8A8A", fontSize: 13 }}>Answers</Link>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="ks-navcta" style={{ border: "1px solid rgba(212,168,83,0.5)", color: GOLD, fontWeight: 600, fontSize: 13, padding: "9px 18px", borderRadius: 6, fontFamily: SG }}>Book a call</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section style={{ borderTop: "1px solid rgba(212,168,83,0.4)" }}>
          <div className="fd-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 32px 48px", boxSizing: "border-box" }}>
            <p style={{ margin: "0 0 10px", fontFamily: JB, fontSize: 12, color: "#A98A47", letterSpacing: "0.2em" }}>ABOUT</p>
            <h1 style={{ margin: "0 0 24px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "#EDEDED", maxWidth: 820, textWrap: "balance" }}>About Vitalii Karasov</h1>
            <p style={{ margin: 0, fontSize: 17, color: "#C9C9C9", lineHeight: 1.7, maxWidth: 760 }}>I build private AI operations systems for owner-led construction, design-build and remodeling companies — and I come to that work from five years of running operations where a mistake had consequences.</p>
          </div>
        </section>

        <Section n="01 — THE SHORT VERSION" title="What I bring to the work" alt>
          <p style={prose}>Five years of operations and project management before I wrote a line of production AI. A crisis-response operations role where I was legally accountable for the personal data of 2,000+ people. An EdTech platform taken from zero to launch across three regions. Three degrees, PRINCE2, and four working languages.</p>
          <p style={{ ...prose, margin: 0 }}>I now design and deliver AI operations systems end to end: workflow discovery, architecture, implementation, deployment, documentation, handoff. Source code, credentials and documentation go to the client.</p>
        </Section>

        <Section n="02 — DATA" title="Why my clients’ data is not a risk">
          <p style={prose}>From 2022 to 2023 I managed crisis-response operations at SOS Children’s Villages Poland during the Ukraine emergency. I was responsible for a 1.5M+ PLN portfolio, coordination with 2,000+ international entities, and — the part that matters here — the personal data of people whose safety depended on the records being correct.</p>
          <p style={prose}>I built the data governance and audit framework for that operation. Across every UN and EU audit: <span style={strong}>zero non-compliance findings.</span> Processing errors dropped 95%. I am certified in personal data processing and risk to rights and freedoms under RODO/GDPR.</p>
          <p style={{ ...prose, margin: 0 }}>That is why every system I build is designed around traceability first: every output cites its source, every decision leaves an audit trail, data stays in the client’s own infrastructure, and a human stays in the loop wherever the stakes require one. It is not a feature I added because clients ask about security — it is how I was trained to work.</p>
        </Section>

        <Section n="03 — DELIVERY" title="Why the project won’t stall halfway" alt>
          <p style={prose}>Most owners I speak to have been burned once: a developer disappeared, or delivered something nobody could maintain.</p>
          <p style={{ ...prose, margin: "0 0 20px" }}>I run delivery as a project manager, because that is what I was for five years:</p>
          <Bullets
            items={[
              <><span style={strong}>MA, Project Management</span> — Uczelnia Łazarskiego, Warsaw</>,
              <><span style={strong}>PRINCE2 Foundation</span> — AXELOS</>,
              <><span style={strong}>Practical Application of Generative AI for Project Managers</span> — Project Management Institute</>,
            ]}
          />
          <p style={{ ...prose, margin: "20px 0 0" }}>Fixed scope, one bottleneck at a time, defined phases, written handoff. You receive source code, credentials and documentation. If you want to take the system in-house or hand it to another engineer, you can — that is the intended end state, not a threat.</p>
        </Section>

        <Section n="04 — BACKGROUND" title="Why I understand the business, not just the code">
          <p style={prose}><span style={strong}>Imperium Academy (2023–2025) — Product Manager.</span> Launched an EdTech platform 0→1: LMS architecture aligned to SCORM/xAPI for enterprise integration, GA4 and behavioural analytics to rebuild student onboarding (+15% retention), multi-market expansion across the US, EU and Asia with GDPR and COPPA compliance in every region, and SOPs for distributed teams that cut new-team-member onboarding time by 40%.</p>
          <p style={prose}><span style={strong}>Human Gambit Media (2025–2026) — AI Lead &amp; Product Manager.</span> Applied AI product development from requirements and architecture through delivery: LLM-API workflows, retrieval pipelines, internal tools for research and decision support, and reusable development and deployment workflows. The media side reached an audience of 750,000+ — long-form analytical work on history, institutions and how complex systems fail.</p>
          <p style={{ ...prose, margin: 0 }}>I have sat on the business side of the table. When you describe an operational problem, I am not translating it into technology I already wanted to build.</p>
        </Section>

        <Section n="05 — EDUCATION" title="Three degrees" alt>
          <Bullets
            items={[
              <><span style={strong}>MA, Project Management</span> — Uczelnia Łazarskiego, Warsaw (2021–2024)</>,
              <><span style={strong}>MA, Pedagogy and Philosophy</span> — Drahomanov National Pedagogical University (2020–2022)</>,
              <><span style={strong}>BA, European Studies / Civilization</span> — Taras Shevchenko National University of Kyiv (2016–2020)</>,
            ]}
          />
          <p style={{ ...prose, margin: "20px 0 0" }}>The philosophy is not decoration. Systems that have to justify their own output — citing evidence, exposing reasoning, surviving review by someone who disagrees — are epistemology before they are engineering.</p>
        </Section>

        <Section n="06 — CERTIFICATIONS" title="Credentials">
          <Bullets
            items={[
              "PRINCE2 Foundation — AXELOS (2023)",
              "Practical Application of Generative AI for Project Managers — Project Management Institute (2026)",
              "Security of Personal Data Processing and Risk of Violation of Rights and Freedoms (RODO/GDPR) — 2023",
              "Make.com Advanced Certified",
              "Digital Marketing Analytics; Marketing in a Digital World — University of Illinois Urbana-Champaign",
              "Introduction to Communication Science — University of Amsterdam",
              "Brand Management: Aligning Business, Brand and Behaviour — London Business School",
            ]}
          />
        </Section>

        <Section n="07 — WHAT I BUILD" title="Systems I deliver" alt>
          <Bullets
            items={[
              <><span style={strong}>Field operations</span> — voice reporting, attendance, location verification, exceptions, project-level records</>,
              <><span style={strong}>Project knowledge</span> — searchable emails, attachments, drawings, meeting notes and decisions</>,
              <><span style={strong}>Calls and communications</span> — transcription, summaries, action extraction, automatic routing</>,
              <><span style={strong}>Lead and estimate operations</span> — response, qualification, follow-up, contract detection</>,
              <><span style={strong}>Documents and reporting</span> — daily reports, meeting minutes, RFIs, purchase orders, management summaries</>,
              <><span style={strong}>Company knowledge</span> — procedures, checklists and operational records made retrievable</>,
            ]}
          />
          <p style={{ margin: "22px 0 0", fontFamily: JB, fontSize: 12, color: "#8A8A8A", lineHeight: 1.9, maxWidth: 700 }}>
            <span style={{ color: "#A98A47", letterSpacing: "0.18em" }}>DELIVERY</span><br />
            Python · FastAPI · PostgreSQL · REST APIs · webhooks · retrieval-augmented generation · hybrid retrieval · speech-to-text · n8n · Make · Docker · CI/CD
          </p>
        </Section>

        <Section n="08 — TRACK RECORD" title="Where it has run">
          <Bullets
            items={[
              <><span style={strong}>Ataman Studio</span> — Los Angeles design-build firm. Lead operations pipeline, 10,000+ production executions. <Link href="/#cases" className="ks-gold" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 3 }}>Read the case study</Link></>,
              <><span style={strong}>US construction company, East Coast</span> — multilingual field operations and company knowledge system, processing voice reports, attendance, operational exceptions, company email and attachments into management-ready information. Under NDA.</>,
              <>Prize winner, AI Agent Olympics — Milan AI Week 2026, Europe’s largest AI event (2,382 participants). <a href="https://sentinel-audit.co" target="_blank" rel="noopener noreferrer" className="ks-gold" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 3 }}>SENTINEL</a></>,
            ]}
          />
          <p style={{ ...prose, margin: "20px 0 0" }}>Working remotely with companies across the US, UAE and Europe.</p>
        </Section>

        <Section n="09 — LANGUAGES" title="Four working languages" alt>
          <p style={{ ...prose, margin: 0 }}>English, Ukrainian, Polish, Russian — all four used in working contexts, including as the coordination languages during the Ukraine emergency response.</p>
        </Section>

        {/* CTA */}
        <section style={{ borderTop: "1px solid rgba(212,168,83,0.4)" }}>
          <div className="fd-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 32px", boxSizing: "border-box" }}>
            <h2 style={{ margin: "0 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "#EDEDED", maxWidth: 700 }}>Want to know if this fits your operation?</h2>
            <p style={{ margin: "0 0 32px", fontSize: 16, color: "#9A9A9A", lineHeight: 1.7, maxWidth: 560 }}>Describe the bottleneck. You’ll get a direct answer — even if the answer is that I’m not the right fit.</p>
            <div className="fd-wrap" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="ks-btn-gold" style={{ background: GOLD, color: "#0A0A0A", fontWeight: 600, padding: "16px 32px", borderRadius: 8, fontSize: 15, fontFamily: SG }}>💬 Describe your bottleneck</a>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="ks-btn-outline" style={{ background: "#1E1B12", border: "1px solid rgba(212,168,83,0.5)", color: "#E8C46A", fontWeight: 600, padding: "16px 32px", borderRadius: 8, fontSize: 15, fontFamily: SG }}>📅 Book a 30-min call</a>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: 14, color: "#9A9A9A", lineHeight: 1.8 }}>
              <a href={`mailto:${EMAIL}`} className="ks-gold" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 4 }}>{EMAIL}</a>
              {" · "}
              <a href="https://www.linkedin.com/in/vitaliikarasov/" target="_blank" rel="noopener noreferrer" className="ks-gold" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 4 }}>LinkedIn</a>
              {" · "}
              <a href="https://github.com/karasov-co" target="_blank" rel="noopener noreferrer" className="ks-gold" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 4 }}>GitHub</a>
            </p>
            <p style={{ margin: 0, fontSize: 14, color: "#777777" }}>
              <Link href="/" className="ks-gold" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 4 }}>← Back to karasov.co</Link>
              {" · "}
              <Link href="/answers" className="ks-gold" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 4 }}>34 straight answers</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
