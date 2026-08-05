import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  SiteHeader, Section, Point, GoldLink, EmailCta,
  prose, strong, eyebrow, GOLD_RULE, WRAP, SG, JB, GOLD,
} from "../../shared-ui";

export const metadata: Metadata = {
  title:
    "Case study: the lead system that runs a Los Angeles design-build firm — Karasov Systems",
  description:
    "Seven connected systems that catch every enquiry, answer it, follow it up on a fixed cadence, stop the moment a client replies, and turn every recorded meeting into a drafted proposal. 10,000+ production executions.",
  alternates: { canonical: "/case-studies/ataman-studio" },
  openGraph: {
    title: "The system that never forgets a lead — Ataman Studio",
    description:
      "Seven connected systems handling the full lead lifecycle for a Los Angeles design-build firm, with 10,000+ production executions.",
    url: "/case-studies/ataman-studio",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The system that never forgets a lead — Ataman Studio",
  description:
    "Seven connected systems handling the full lead lifecycle for a Los Angeles design-build firm, with 10,000+ production executions.",
  author: { "@id": "https://karasov.co/#person" },
  publisher: { "@id": "https://karasov.co/#service" },
  about: "AI lead operations automation for design-build companies",
  mainEntityOfPage: "https://karasov.co/case-studies/ataman-studio",
};

// One of the seven systems. Numbered heading + body, tighter than a full Section.
function SystemStep({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div style={{ borderTop: "1px solid #1E1E1E", padding: "26px 0" }}>
      <h3 style={{ margin: "0 0 12px", display: "flex", alignItems: "baseline", gap: 14, fontFamily: SG, fontWeight: 600, fontSize: 18, lineHeight: 1.3, color: "#EDEDED", letterSpacing: "-0.01em" }}>
        <span style={{ fontFamily: JB, fontSize: 12, color: GOLD, flexShrink: 0, letterSpacing: "0.08em" }}>{n}</span>
        <span>{title}</span>
      </h3>
      <div style={{ paddingLeft: 26 }}>{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section style={GOLD_RULE}>
          <div className="fd-pad" style={{ ...WRAP, padding: "60px 32px 48px" }}>
            <p style={eyebrow}>CASE STUDY</p>
            <h1 style={{ margin: "0 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.05, color: "#EDEDED", maxWidth: 860, textWrap: "balance" }}>The system that never forgets a lead</h1>
            <p style={{ margin: "0 0 8px", fontSize: 15, color: "#C9C9C9", lineHeight: 1.6 }}>
              <span style={strong}>Ataman Studio</span> · design-build firm, Los Angeles
            </p>
            <p style={{ margin: "0 0 28px", fontFamily: JB, fontSize: 12, color: "#A98A47", letterSpacing: "0.12em", lineHeight: 1.7 }}>
              SEVEN CONNECTED SYSTEMS · 10,000+ PRODUCTION EXECUTIONS · RUNNING IN PRODUCTION
            </p>
            <p style={{ margin: 0, fontSize: 17, color: "#C9C9C9", lineHeight: 1.7, maxWidth: 760 }}>Every design-build firm loses the same way. Not to a better competitor — to a Tuesday.</p>
          </div>
        </section>

        <Section n="01 — THE PROBLEM" title="It shows up as a quarter under plan" alt>
          <p style={prose}>An enquiry arrives while the team is on site. A consultation happens and nobody writes up the notes. A promising client goes quiet and nobody follows up, because following up is everyone&rsquo;s job in a week when everyone is busy. None of it feels like a loss at the time. It shows up later, as a quarter that came in under plan for reasons nobody can name.</p>
          <p style={{ ...prose, margin: 0 }}>Ataman Studio did not need better marketing. They needed the work between &ldquo;someone enquired&rdquo; and &ldquo;someone signed&rdquo; to stop depending on whether a human remembered.</p>
        </Section>

        <Section n="02 — THE BUILD" title="What we built">
          <p style={{ ...prose, marginBottom: 8 }}>Seven systems, each owning one stage of the lifecycle, all writing into the same record. Nobody at Ataman had to learn a new tool — the work happens inside the email and project tracking they already used.</p>

          <div style={{ maxWidth: 700, borderBottom: "1px solid #1E1E1E" }}>
            <SystemStep n="1" title="Nothing arrives unnoticed">
              <p style={prose}>Two entry points feed one pipeline. Booked consultations come from the scheduling system; everything else arrives by email. Both are read, structured, and turned into a tracked record with the details already extracted — service type, scope signals, timeline, context.</p>
              <p style={{ ...prose, margin: 0 }}>A deduplication layer sits in front. If the person has written before, the message attaches to their existing record instead of creating a second one. Nobody works the same lead twice, and nobody answers a returning client as a stranger.</p>
            </SystemStep>

            <SystemStep n="2" title="Every enquiry gets read and ranked">
              <p style={prose}>Each new message is classified before a human sees it: a real prospect, a maybe, or noise. Prospects surface immediately with the reasoning attached. Noise is filed without consuming anyone&rsquo;s attention.</p>
              <p style={{ ...prose, margin: 0 }}>The point is not to replace judgment. It is that by the time someone looks, the ten enquiries in the inbox are already ordered by which one is worth answering first.</p>
            </SystemStep>

            <SystemStep n="3" title="Follow-up happens on schedule, not on memory">
              <p style={prose}>This is where firms lose the most money, and it stays invisible because nobody logs the follow-up that never happened.</p>
              <p style={prose}>Every morning the system reviews every open lead and works out where it stands. At two days, five days and ten days, a follow-up is drafted — written against the actual thread, referencing what was actually discussed, not a generic nudge. Leads that stay silent past the cadence are marked stalled and stop consuming attention.</p>
              <p style={{ ...prose, margin: 0 }}>The drafts are drafts. They land in the inbox for a human to read and send.</p>
            </SystemStep>

            <SystemStep n="4" title="The moment someone replies, the sequence stops">
              <p style={prose}>The failure mode of every follow-up system is the automated nudge that arrives after the client already said yes.</p>
              <p style={{ ...prose, margin: 0 }}>A separate system watches for replies on known threads, reads what the reply actually means — engaged, declining, or an out-of-office auto-response — and updates the record accordingly. An engaged reply stops the sequence instantly. A polite decline closes the lead. An auto-responder changes nothing, because it is not a person.</p>
            </SystemStep>

            <SystemStep n="5" title="Every meeting becomes a written record">
              <p style={{ ...prose, margin: 0 }}>Consultations get recorded. The recording flows in automatically, is parsed, matched back to the right lead, and attached to their record — without anyone renaming a file or remembering which client it belonged to. If it belongs to a lead nobody logged yet, a record is created.</p>
            </SystemStep>

            <SystemStep n="6" title="Every meeting becomes a drafted proposal">
              <p style={prose}>Once the transcript lands it is summarised into what matters: what the client asked for, what was agreed, what happens next.</p>
              <p style={{ ...prose, margin: 0 }}>Then the follow-up is drafted according to what kind of project it is — a feasibility conversation, a standard build, or a standard build on an expedited timeline. Three situations, three different letters, each drafted from what was said in the room. Again: drafted, then sent by a human.</p>
            </SystemStep>

            <SystemStep n="7" title="The record closes itself">
              <p style={{ ...prose, margin: 0 }}>When the reply is finally sent, the system sees it and updates the lead&rsquo;s status without anyone touching the tracker. The record reflects reality because reality updates the record.</p>
            </SystemStep>
          </div>
        </Section>

        <Section n="03 — DESIGN" title="Why it holds up" alt>
          <Point label="A human at every outbound point.">The system reads, classifies, schedules, drafts and tracks. A person still presses send. Every design decision here keeps a human in the position where the firm&rsquo;s reputation is on the line.</Point>
          <Point label="No new tools for the team.">It runs behind the email and tracker they already had. There was no migration and no rollout — the difference appeared inside tools people were already opening every day.</Point>
          <Point label="Built to be handed over.">Source code, credentials and documentation belong to the client. It runs on their accounts, not on a platform they rent from me.</Point>
          <p style={{ ...prose, margin: 0 }}><span style={strong}>Proven under load.</span> Over 10,000 production executions across the seven systems since launch.</p>
        </Section>

        <Section n="04 — OUTCOME" title="What changed">
          <p style={prose}>The firm stopped losing leads to timing.</p>
          <p style={prose}>Enquiries are answered while they are still warm rather than whenever someone reaches the inbox. Follow-up at two, five and ten days happens every time instead of when the week allows. Consultations turn into written proposals the same day instead of joining the pile of things to write up. And when a client replies, they get a person — not the next scheduled message from a machine that did not notice.</p>
          <p style={{ ...prose, margin: 0 }}>None of that required anyone at Ataman to change how they work. It required the work between the conversations to stop being manual.</p>
        </Section>

        <Section n="05 — FOR YOU" title="Could this run for your firm?" alt>
          <p style={prose}>Most of it transfers directly. The lifecycle is the same for any design-build, remodeling or specialty contractor: an enquiry arrives, a conversation happens, a proposal follows, and somebody has to keep track. What changes is which tools it plugs into, and which stage is costing you the most right now.</p>
          <p style={{ ...prose, margin: 0 }}>Start with one stage. A first system is typically two to four weeks and starts at $3,000 — fixed scope, written before anything is built.</p>
        </Section>

        <EmailCta
          title="Tell me where your leads go now."
          links={
            <>
              <GoldLink href="/services/lead-response-automation">Lead response automation →</GoldLink>
              {" · "}
              <GoldLink href="/services/ai-automation-for-contractors">All services →</GoldLink>
              {" · "}
              <GoldLink href="/about">About →</GoldLink>
            </>
          }
        >
          Tell me where your leads go now and what happens when someone goes quiet, and I will tell you which stage is worth automating first, and whether it is worth it at all. If it is not, I will say so.
        </EmailCta>
      </main>
    </div>
  );
}
