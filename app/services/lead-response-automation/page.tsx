import type { Metadata } from "next";
import {
  SiteHeader, PageHero, Section, Point, GoldLink, EmailCta,
  prose, strong,
} from "../../shared-ui";

export const metadata: Metadata = {
  title: "Lead response automation for design-build and remodeling firms",
  description:
    "Every enquiry answered while the person is still comparing firms, qualified, logged and followed up automatically. The reference build runs seven connected systems and 10,000+ production executions.",
  alternates: { canonical: "/services/lead-response-automation" },
  openGraph: {
    title: "Lead response automation for design-build and remodeling firms",
    description:
      "Every enquiry answered while the person is still comparing firms, qualified, logged and followed up automatically.",
    url: "/services/lead-response-automation",
    type: "website",
  },
};

export default function Page() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SERVICES · LEAD RESPONSE"
          title="Lead response automation"
          lead={
            <>
              The firm that answers first usually wins the job. Not the best firm — the first one.
            </>
          }
        />

        <Section n="01 — THE ECONOMICS" title="A weekend is not a delay" alt>
          <p style={{ ...prose, margin: 0 }}>That is the entire economics of residential and light-commercial contracting, and it is why an enquiry that sits unanswered over a weekend is not a delayed lead. It is a lost one.</p>
        </Section>

        <Section n="02 — TODAY" title="What actually happens to your enquiries">
          <p style={prose}>They arrive through more channels than anyone tracks: the website form, a call that goes to voicemail, an Instagram message, a Houzz enquiry, a referral text to the owner&rsquo;s personal phone. Different places, different owners, no shared record.</p>
          <p style={prose}>Then one of four things happens. Someone answers within minutes, because they happened to be looking at their phone. Someone answers hours later, after the homeowner has already booked two other consultations. Someone answers, and then nothing follows, because following up is everyone&rsquo;s job and therefore nobody&rsquo;s. Or it disappears entirely.</p>
          <p style={{ ...prose, margin: 0 }}>The cost stays invisible, which is exactly why it persists. Nobody logs the enquiries that never got a reply.</p>
        </Section>

        <Section n="03 — THE BUILD" title="What gets built" alt>
          <p style={prose}>A pipeline that takes every inbound enquiry, wherever it lands, and carries it to a booked conversation without anyone remembering to do anything.</p>
          <Point label="Capture and normalise.">Every channel writes into one structured record: source, service type, scope signals, location, timeline.</Point>
          <Point label="Answer while it is still warm.">A reply goes out within minutes, matched to what they actually asked about. A kitchen remodel enquiry does not get the same letter as a full addition.</Point>
          <Point label="Qualify before anyone spends time.">Outside the service area, wrong project size, timeline that does not fit your schedule — filtered before it reaches a person.</Point>
          <Point label="Deduplicate.">If someone has written before, the message attaches to their existing record. Nobody works the same lead twice or answers a returning client as a stranger.</Point>
          <Point label="Follow up on a schedule, not on memory.">Staged touches at fixed intervals, written against the actual thread rather than as a generic nudge, stopping the instant someone replies. This is where most of the recovered revenue comes from, and it is the part that never survives contact with a busy week.</Point>
          <Point label="Stop cleanly.">A separate watcher reads replies on known threads and tells the difference between an engaged answer, a polite decline and an out-of-office auto-responder. Nothing is more damaging than a scheduled nudge arriving after the client already said yes.</Point>
          <p style={{ ...prose, margin: 0 }}><span style={strong}>Report to the owner.</span> A short recurring summary: what came in, from where, what was answered, what is still open, what went cold.</p>
        </Section>

        <Section n="04 — CONTROL" title="Drafted by the system, sent by a person">
          <p style={prose}>Every outbound message is prepared as a draft and lands in your inbox for a human to read and send. Nothing goes out under your firm&rsquo;s name that someone at your firm did not choose to send.</p>
          <p style={{ ...prose, margin: 0 }}>That is a deliberate design decision, not a limitation. Your reputation travels in those emails.</p>
        </Section>

        <Section n="05 — EVIDENCE" title="Proven under load" alt>
          <p style={prose}>The reference build for this is the lead operations system running for <span style={strong}>Ataman Studio</span>, a Los Angeles design-build firm: seven connected systems covering the full lifecycle, over <span style={strong}>10,000 production executions</span>.</p>
          <p style={{ ...prose, margin: 0 }}><GoldLink href="/case-studies/ataman-studio">Read the case study →</GoldLink></p>
        </Section>

        <Section n="06 — OWNERSHIP" title="What you own">
          <p style={{ ...prose, margin: 0 }}>The system runs on your accounts, in your infrastructure. Source code, credentials and documentation are handed over. If you decide to take it in-house, you can.</p>
        </Section>

        <Section n="07 — SCOPE" title="Timeline and price" alt>
          <p style={{ ...prose, margin: 0 }}>A first lead-operations build is typically <span style={strong}>two to four weeks</span> and starts at <span style={strong}>$3,000</span>, depending on how many channels feed in and what tracking system it writes to. Ongoing operation is optional, from $2,000/month.</p>
        </Section>

        <Section n="08 — QUESTIONS" title="Before you start, you will ask">
          <Point label="Do I have to change CRM?">No. It writes into whatever you already use. Replacing your tracking system is a separate decision and usually a bad first move.</Point>
          <Point label="Will leads get a robotic reply?">The responses are written by you, in your voice, in advance. The system chooses which one fits and personalises it against the thread. Nothing is generated freehand and sent to a client.</Point>
          <Point label="What if a lead needs an answer only I can give?">Those route to you immediately and flagged. The pipeline handles the ninety percent that is acknowledgement, qualification and follow-through.</Point>
          <p style={{ ...prose, margin: 0 }}><span style={strong}>What happens when I want to change something?</span> You hold the source code. Small changes are usually a message; larger ones are scoped like any other work.</p>
        </Section>

        <EmailCta
          title="Tell me where your leads come from."
          links={
            <>
              <GoldLink href="/services/ai-automation-for-contractors">All services →</GoldLink>
              {" · "}
              <GoldLink href="/case-studies/ataman-studio">Case study →</GoldLink>
              {" · "}
              <GoldLink href="/about">About →</GoldLink>
            </>
          }
        >
          Tell me where your leads come from and what happens when someone goes quiet. I will tell you what is recoverable.
        </EmailCta>
      </main>
    </div>
  );
}
