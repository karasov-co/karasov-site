import type { Metadata } from "next";
import {
  SiteHeader, PageHero, Section, Bullets, GoldLink, EmailCta,
  prose, strong, JB, GOLD,
} from "../shared-ui";

export const metadata: Metadata = {
  title: "Verified — independent profiles, reviews and public code | Vitalii Karasov",
  description:
    "Every externally verifiable source: client reviews on Freelancehunt and Upwork, public source code and evaluation reports on GitHub, the live SENTINEL demo, and the official hackathon results.",
  alternates: { canonical: "/verified" },
  openGraph: {
    title: "Verified — independent profiles, reviews and public code",
    description:
      "Client reviews, public source code, evaluation reports and official competition results — each checkable at the source.",
    url: "/verified",
    type: "website",
  },
};

const FH_REVIEWS = "https://freelancehunt.com/freelancer/vkarasov.html#reviews";
const FH_PROFILE = "https://freelancehunt.com/freelancer/vkarasov.html";
const UPWORK = "https://www.upwork.com/freelancers/~01af851972931ea5c2?mp_source=share";
const REPO = "https://github.com/karasov-co/sentinel-audit";
const EVALS = "https://github.com/karasov-co/sentinel-audit/blob/main/docs/EVALS.md";
const LABLAB =
  "https://lablab.ai/ai-hackathons/milan-ai-week-hackathon/sentinel-adversarial-ai-court/sentinel-adversarial-ai-court-for-bodycam";

export default function Page() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="VERIFIED"
          title="Verified"
          lead={
            <>
              Everything below is hosted somewhere other than this website. Client reviews, source code, evaluation reports and competition results — each one checkable at the source, without taking my word for it.
            </>
          }
        />

        <Section n="01 — CLIENT REVIEWS" title="Reviewed where you can check it" alt>
          <p style={prose}>
            <span style={strong}>Freelancehunt</span> — <span style={{ color: GOLD }}>★</span> 5.0 across professionalism, quality, price, communication and deadlines.
          </p>
          <blockquote style={{ margin: "0 0 14px", padding: "0 0 0 18px", borderLeft: "2px solid #2A2A2A", maxWidth: 700 }}>
            <p style={{ margin: "0 0 12px", fontSize: 15, color: "#C9C9C9", lineHeight: 1.75 }}>
              &ldquo;Vitalii professionally set up AI automation for handling leads from Calendly. He implemented integration with ClickUp and Gmail plus AI analysis of enquiries, and configured the follow-up email logic and lead statuses. He made every requested change, tested the scenarios and was always reachable. Very satisfied with the result and the collaboration. Recommended!&rdquo;
            </p>
            <footer style={{ fontFamily: JB, fontSize: 11, color: "#777777", letterSpacing: "0.06em", lineHeight: 1.7 }}>
              — Serhii Karpenko, May 2026 · AI lead-handling automation, Calendly to Gmail follow-up
            </footer>
          </blockquote>
          <p style={{ ...prose, margin: "0 0 26px" }}>
            <GoldLink href={FH_REVIEWS} external>Read it on Freelancehunt →</GoldLink>
          </p>

          <p style={prose}>
            <span style={strong}>Upwork</span> — two engagements, <span style={{ color: GOLD }}>★</span> 5.0 on both, with the client-endorsed attributes reliable, committed to quality, solution oriented, clear communicator and detail oriented.
          </p>
          <p style={{ ...prose, margin: 0 }}>
            <GoldLink href={UPWORK} external>See both reviews on Upwork →</GoldLink>
          </p>
        </Section>

        <Section n="02 — PUBLIC CODE" title="Public source code">
          <p style={prose}>
            <span style={strong}>SENTINEL</span> — an adversarial multi-agent audit system for police bodycam footage. Full source, MIT licensed.{" "}
            <GoldLink href={REPO} external>github.com/karasov-co/sentinel-audit</GoldLink>
          </p>
          <p style={prose}>
            <span style={strong}>Evaluation report</span> — reproducibility runs, the alert funnel, how often the Judge sided with each side, a 22-probe red-team set, and the provenance failures found in the system&rsquo;s own output. Published in the repository rather than summarised on a marketing page.{" "}
            <GoldLink href={EVALS} external>docs/EVALS.md</GoldLink>
          </p>
          <p style={{ ...prose, margin: 0 }}>
            <span style={strong}>Live demo</span> — seven recorded cases across four jurisdictions, replaying end to end.{" "}
            <GoldLink href="https://sentinel-audit.co" external>sentinel-audit.co</GoldLink>
          </p>
        </Section>

        <Section n="03 — COMPETITION" title="Competition result" alt>
          <p style={prose}>Prize winner at the AI Agent Olympics, the official builder event of Milan AI Week 2026 — Europe&rsquo;s largest AI event, 2,382 participants and 726 teams. SENTINEL placed third in the Featherless AI track.</p>
          <p style={{ ...prose, margin: 0 }}>
            <GoldLink href={LABLAB} external>Official project page on lablab.ai →</GoldLink>
          </p>
        </Section>

        <Section n="04 — PROFILES" title="Professional profiles">
          <Bullets
            items={[
              <GoldLink key="gh" href="https://github.com/karasov-co" external>GitHub</GoldLink>,
              <GoldLink key="li" href="https://www.linkedin.com/in/vitaliikarasov/" external>LinkedIn</GoldLink>,
              <GoldLink key="fh" href={FH_PROFILE} external>Freelancehunt</GoldLink>,
              <GoldLink key="uw" href={UPWORK} external>Upwork</GoldLink>,
            ]}
          />
        </Section>

        <Section n="05 — LIMITS" title="What cannot be shown" alt>
          <p style={{ ...prose, margin: 0 }}>Not everything can be shown. Systems built for clients under NDA are not published in any form, and no client data appears anywhere on this site. What can be verified, is — and it is all linked above.</p>
        </Section>

        <EmailCta
          title="Checked everything and want to talk?"
          links={
            <>
              <GoldLink href="/about">About →</GoldLink>
              {" · "}
              <GoldLink href="/case-studies/ataman-studio">Case study →</GoldLink>
              {" · "}
              <GoldLink href="/services/ai-automation-for-contractors">Services →</GoldLink>
            </>
          }
        >
          Describe the one thing that eats the most time in your week, and I will tell you which stage is worth automating first, and whether it is worth it at all.
        </EmailCta>
      </main>
    </div>
  );
}
