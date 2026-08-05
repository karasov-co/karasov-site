import type { Metadata } from "next";
import {
  SiteHeader, PageHero, Section, Bullets, Point, GoldLink, EmailCta, Testimonials,
  prose, strong,
} from "../../shared-ui";

export const metadata: Metadata = {
  title: "AI automation for contractors — what it costs, how long it takes, what you get",
  description:
    "Private AI operations systems for design-build, remodeling and specialty contractors. Fixed scope from $3,000, one bottleneck at a time, source code and documentation handed over. Built by an independent engineer, not an agency.",
  alternates: { canonical: "/services/ai-automation-for-contractors" },
  openGraph: {
    title: "AI automation for contractors — what it costs, how long it takes, what you get",
    description:
      "Private AI operations systems for design-build, remodeling and specialty contractors. Fixed scope from $3,000, source code and documentation handed over.",
    url: "/services/ai-automation-for-contractors",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI operations systems for contractors",
  provider: { "@id": "https://karasov.co/#service" },
  serviceType: "AI workflow automation for construction and design-build companies",
  areaServed: ["United States", "United Arab Emirates", "Europe"],
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "3000",
      priceCurrency: "USD",
      description: "Fixed-scope build, single bottleneck",
    },
  },
  mainEntityOfPage: "https://karasov.co/services/ai-automation-for-contractors",
};

export default function Page() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SERVICES"
          title="AI automation for contractors"
          lead={
            <>
              You do not have a technology problem. You have an information problem that shows up as lost hours, lost leads and lost margin — and every tool you have bought so far has added one more place to check.
            </>
          }
        />

        <Section n="01 — THE PREMISE" title="Behind the tools you already use" alt>
          <p style={{ ...prose, margin: 0 }}>I build private AI operations systems that run behind the tools your team already uses. Nothing new for the crew to learn. No platform to migrate onto. One bottleneck at a time, fixed scope, and the whole thing handed to you at the end.</p>
        </Section>

        <Section n="02 — THE LEAKS" title="Where the money actually leaves">
          <p style={prose}>In a 10-to-60-person construction, design-build or remodeling company, the same five leaks show up almost every time.</p>
          <Point label="Leads go cold before anyone answers.">An enquiry lands at 6pm on a Thursday. Someone sees it Monday. By then the homeowner has spoken to two other firms, and the first one to answer usually wins the job.</Point>
          <Point label="Field information never reaches the office.">The crew knows about the damaged joist, the missing material, the change the client asked for on site. It arrives as a phone call, a photo in a group chat, or not at all — and comes back later as a dispute or a write-off.</Point>
          <Point label="Nobody can find the decision.">&ldquo;We agreed on the different tile&rdquo; lives in an email from March, a text message, or someone&rsquo;s memory. Finding it costs an hour. Not finding it costs a rework.</Point>
          <Point label="The same report gets written twice.">Daily logs, meeting minutes, client updates, RFIs — all typed by hand from information that already exists somewhere else.</Point>
          <Point label="The owner is the integration layer.">Every gap between two systems is closed by the owner remembering to close it, in the evening, after everything else is done.</Point>
        </Section>

        <Section n="03 — WHAT I BUILD" title="Six areas, one starting point" alt>
          <p style={prose}>Six areas. A project normally starts with exactly one.</p>
          <Bullets
            items={[
              <><span style={strong}>Lead and estimate operations</span> — every enquiry answered while the person is still comparing firms, qualified, logged and followed up without anyone remembering to. <GoldLink href="/services/lead-response-automation">How it works →</GoldLink></>,
              <><span style={strong}>Field operations</span> — voice reporting, attendance, exceptions and project records. A worker sends a voice note in their own language; the system turns it into a structured event and asks a follow-up question when something is missing. <GoldLink href="/services/field-reporting-automation">How it works →</GoldLink></>,
              <><span style={strong}>Project knowledge</span> — searchable email, attachments, drawings, meeting notes and decisions, with the document, page and revision cited on every answer. <GoldLink href="/services/project-knowledge-retrieval">How it works →</GoldLink></>,
              <><span style={strong}>Calls and communications</span> — transcription, summaries, action extraction and routing, so a fifteen-minute call becomes three assigned tasks instead of a memory.</>,
              <><span style={strong}>Documents and reporting</span> — daily reports, meeting minutes, RFIs, purchase orders and management summaries built from information your company already produced.</>,
              <><span style={strong}>Company knowledge</span> — procedures, checklists and operational records made retrievable, so the answer stops depending on who is available.</>,
            ]}
          />
        </Section>

        <Section n="04 — PROCESS" title="How the work runs">
          <Point label="Discovery.">I map the workflow as it actually happens, not as the org chart says it happens. Two to four conversations and a look at the real artifacts: the inbox, the spreadsheet, the group chat.</Point>
          <Point label="Fixed scope.">You get a written scope with a price and a date before anything is built. No hourly meter, no open-ended engagement.</Point>
          <Point label="Build.">Typically two to five weeks for a first system, depending on how many tools it has to reach into.</Point>
          <Point label="Deployment and handover.">It runs in your infrastructure, on your accounts. You receive source code, credentials and documentation.</Point>
          <p style={{ ...prose, margin: 0 }}><span style={strong}>Operation.</span> Optional. If you want me to keep it running and extend it as your process changes, that is a monthly retainer. If you want to take it in-house or hand it to another engineer, you can — that is the intended end state, not a threat.</p>
        </Section>

        <Section n="05 — PRICE" title="What it costs" alt>
          <Point label="Builds start at $3,000">for a single-bottleneck system. Most first projects land between $3,000 and $8,000, depending on how many systems have to be connected and how much cleanup the existing data needs.</Point>
          <Point label="Ongoing operation starts at $2,000/month">and is entirely optional.</Point>
          <p style={{ ...prose, margin: 0 }}>No licence fee, no per-seat cost, no platform you rent from me. You pay for the build, and for the model usage on your own accounts.</p>
        </Section>

        <Section n="06 — EVIDENCE" title="Proven under load">
          <p style={{ ...prose, margin: 0 }}>The reference build is a seven-system lead operations pipeline running for a Los Angeles design-build firm — over 10,000 production executions. <GoldLink href="/case-studies/ataman-studio">Read the case study →</GoldLink></p>
        </Section>

        <Testimonials alt />

        <Section n="07 — FIT" title="Who this is not for">
          <Bullets
            items={[
              "Firms looking for a chatbot on their website. That is not this.",
              "Anyone wanting to replace their team rather than unblock it.",
              "Projects where nobody internally can spend two hours across a month answering questions about how the work really runs.",
            ]}
          />
        </Section>

        <Section n="08 — WHO BUILDS IT" title="Why an independent engineer" alt>
          <p style={prose}>Before AI systems I spent five years running operations, including a crisis-response role where I was legally accountable for the personal data of over 2,000 people and passed every UN and EU audit with zero findings. I hold PRINCE2 and a master&rsquo;s in project management.</p>
          <p style={prose}>That matters here for one reason. Your contracts, your client correspondence and your pricing are the most sensitive information your company owns, and this system handles all of it. It stays in your infrastructure, and every output can be traced back to the document it came from.</p>
          <p style={{ ...prose, margin: 0 }}><GoldLink href="/about">Full background, education and credentials →</GoldLink></p>
        </Section>

        <Section n="09 — QUESTIONS" title="Thirty-four questions, answered">
          <p style={{ ...prose, margin: 0 }}>Cost, scope, risk, timelines, team impact, ownership — asked by owners before they start, answered directly. <GoldLink href="/answers">Read the answers →</GoldLink></p>
        </Section>

        <EmailCta
          title="Start here."
          links={
            <>
              <GoldLink href="/services/lead-response-automation">Lead response →</GoldLink>
              {" · "}
              <GoldLink href="/services/field-reporting-automation">Field reporting →</GoldLink>
              {" · "}
              <GoldLink href="/services/project-knowledge-retrieval">Project knowledge →</GoldLink>
              {" · "}
              <GoldLink href="/case-studies/ataman-studio">Case study →</GoldLink>
            </>
          }
        >
          Describe the one thing that eats the most time in your week, and I will tell you which stage is worth automating first, and whether it is worth it at all. If it is not, I will say so.
        </EmailCta>
      </main>
    </div>
  );
}
