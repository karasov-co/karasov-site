import type { Metadata } from "next";
import {
  SiteHeader, PageHero, Section, Point, GoldLink, EmailCta,
  prose, strong,
} from "../../shared-ui";

export const metadata: Metadata = {
  title: "Voice-to-report field operations for construction crews",
  description:
    "Crews report by voice in their own language; the system turns it into structured daily reports, attendance, exceptions and evidence — asking follow-up questions when information is missing.",
  alternates: { canonical: "/services/field-reporting-automation" },
  openGraph: {
    title: "Voice-to-report field operations for construction crews",
    description:
      "Crews report by voice in their own language; the system turns it into structured daily reports, attendance, exceptions and evidence.",
    url: "/services/field-reporting-automation",
    type: "website",
  },
};

export default function Page() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SERVICES · FIELD REPORTING"
          title="Field reporting your crew will actually use"
          lead={
            <>
              Every field reporting system fails the same way: it asks a person holding tools to fill in a form.
            </>
          }
        />

        <Section n="01 — WHY FORMS FAIL" title="Nobody wins at that task" alt>
          <p style={{ ...prose, margin: 0 }}>They do not fill it in. Not from carelessness — because typing structured data on a phone, in a second language, at the end of a physical day, is a task nobody wins at. So the information arrives as a phone call to the office, a photo in a group chat, or six weeks later during a dispute.</p>
        </Section>

        <Section n="02 — THE COST" title="What it costs when field information does not arrive">
          <Point label="Disputes you cannot win.">The client says the change was never approved. You believe it was. Nobody has the record.</Point>
          <Point label="Problems found late.">The issue was visible on Tuesday and reported on Friday, by which point the fix costs five times more.</Point>
          <Point label="Invoices that wait.">The work is done but the paperwork proving it is not, so the invoice sits.</Point>
          <p style={prose}><span style={strong}>Materials ordered twice, or not at all.</span></p>
          <p style={{ ...prose, margin: 0 }}><span style={strong}>Attendance reconstructed from memory</span> at the end of the pay period.</p>
        </Section>

        <Section n="03 — THE BUILD" title="What gets built" alt>
          <p style={prose}>The reporting method is a voice note. Everything else happens behind it.</p>
          <Point label="Report in any language.">A worker records a message in the language they actually speak. Common site languages are handled directly, including English, Spanish, Ukrainian, Polish, Arabic, Hindi and Urdu.</Point>
          <Point label="Structured events, not transcripts.">Each report becomes a typed operational record: work completed, quality issue, safety observation, material request, attendance exception, inspection request, schedule risk.</Point>
          <Point label="Missing information gets asked for.">If a report lacks the location, the quantity or which unit it refers to, the system asks a follow-up question — in the worker&rsquo;s own language — before the record is routed to anyone. This is the difference between a system that produces records and one that produces noise.</Point>
          <Point label="Photos land against the right record,">timestamped, instead of scrolling away in a chat.</Point>
          <Point label="Evidence lifecycle.">Reported, clarified, assigned, acknowledged, corrected, evidence submitted, approved, closed. At any moment you can see what stage anything is at.</Point>
          <Point label="Consolidated reporting.">Several people reporting on the same area merge into one daily record instead of five overlapping messages.</Point>
          <p style={{ ...prose, margin: 0 }}><span style={strong}>Site vocabulary is learned.</span> Crews use slang, abbreviations and shorthand no general system understands. Supervisors label what a specific term means, and the system builds on that.</p>
        </Section>

        <Section n="04 — OWNERSHIP" title="What you own">
          <p style={{ ...prose, margin: 0 }}>Structured, exportable operational records — not a feed inside someone else&rsquo;s app. Data stays in your infrastructure. Source code, credentials and documentation are handed over.</p>
        </Section>

        <Section n="05 — SCOPE" title="Timeline and price" alt>
          <p style={{ ...prose, margin: 0 }}>A first field-reporting system is typically <span style={strong}>three to five weeks</span> and starts at <span style={strong}>$4,000</span>, depending on the number of languages, the report types in scope, and what it writes into.</p>
        </Section>

        <Section n="06 — QUESTIONS" title="Before you start, you will ask">
          <Point label="Will the crew actually use it?">They already send voice messages — to the foreman, to the group chat. This uses the behaviour that already exists instead of replacing it with a form.</Point>
          <Point label="What if it mishears site terms?">It will, at first. That is why supervisors can correct and label terms, and why the system asks a follow-up question instead of guessing when a record is incomplete.</Point>
          <Point label="Do workers need an app or an account?">Usually not. It runs through the messaging channel your crews already use.</Point>
          <p style={{ ...prose, margin: 0 }}><span style={strong}>Where does the audio go?</span> Into your infrastructure, under your retention policy. It is processed for transcription and is not used to train anyone&rsquo;s model.</p>
        </Section>

        <EmailCta
          title="Describe how your crews report today."
          links={
            <>
              <GoldLink href="/services/ai-automation-for-contractors">All services →</GoldLink>
              {" · "}
              <GoldLink href="/about">About →</GoldLink>
            </>
          }
        >
          Describe how your crews report today, and I will tell you what the first two weeks would produce.
        </EmailCta>
      </main>
    </div>
  );
}
