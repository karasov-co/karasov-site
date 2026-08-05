import type { Metadata } from "next";
import {
  SiteHeader, PageHero, Section, Point, GoldLink, EmailCta,
  prose, strong,
} from "../../shared-ui";

export const metadata: Metadata = {
  title: "Searchable project knowledge for contractors — drawings, email, RFIs, decisions",
  description:
    "Ask in plain language and get the answer with the document, page and revision cited. Built over the email, attachments, drawings and notes your company already has.",
  alternates: { canonical: "/services/project-knowledge-retrieval" },
  openGraph: {
    title: "Searchable project knowledge for contractors — drawings, email, RFIs, decisions",
    description:
      "Ask in plain language and get the answer with the document, page and revision cited.",
    url: "/services/project-knowledge-retrieval",
    type: "website",
  },
};

export default function Page() {
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="SERVICES · PROJECT KNOWLEDGE"
          title="Find the decision, not the folder"
          lead={
            <>
              &ldquo;Where did we agree on that?&rdquo; It is the most expensive question in a construction company, because answering it costs somebody an hour and failing to answer it costs a rework, a credit, or a dispute you lose.
            </>
          }
        />

        <Section n="01 — THE PROBLEM" title="It exists in six places" alt>
          <p style={{ ...prose, margin: 0 }}>The information almost always exists. It is in an email thread from March, a revision of a drawing, a meeting note, a message in a project chat. It exists in six places, none of which is searchable together, and the person who knows which one is on site.</p>
        </Section>

        <Section n="02 — THE BUILD" title="What gets built">
          <p style={prose}>A retrieval system over what your company already produced. No migration, no re-filing, no new place to put documents.</p>
          <Point label="What gets indexed.">Project email and attachments, drawings and specifications, contracts and change orders, RFIs and submittals, meeting notes, and the operational records your systems already hold.</Point>
          <Point label="How you ask.">In plain language: what did we agree about the bathroom tile on the Miller job; which revision has the current electrical layout; what did the client approve in writing about the timeline change.</Point>
          <Point label="Every answer cites its source.">Document name, page, revision and approval status. If it cannot cite one, it says it does not know rather than producing something plausible. For contracts and change orders that is the entire point — an answer you cannot trace is worse than no answer.</Point>
          <Point label="Access follows your structure.">Role-based. The field lead sees what the field lead should see, not everything the system happens to have read.</Point>
          <p style={{ ...prose, margin: 0 }}><span style={strong}>Audit trail.</span> Every query and every answer is logged, so you can reconstruct what the system told whom and when.</p>
        </Section>

        <Section n="03 — DATA" title="Where the data lives" alt>
          <p style={{ ...prose, margin: 0 }}>In your infrastructure, under your retention policy, isolated per project. Nothing is used to train anyone&rsquo;s model. That is not a footnote — it is why the architecture is built this way.</p>
        </Section>

        <Section n="04 — SCOPE" title="Timeline and price">
          <p style={{ ...prose, margin: 0 }}>A first project-knowledge system is typically <span style={strong}>three to six weeks</span> and starts at <span style={strong}>$5,000</span>, depending on how many sources connect and the state of the existing documents.</p>
        </Section>

        <Section n="05 — QUESTIONS" title="Before you start, you will ask" alt>
          <Point label="Do we have to reorganise our files first?">No. Reorganising files before indexing them is the reason these projects never start. It indexes the mess.</Point>
          <Point label="What if an answer is wrong?">You see the citation and check it in one click — which is why citation is mandatory rather than decorative. The system is built to say &ldquo;not found&rdquo; instead of guessing.</Point>
          <Point label="Who can see what?">Whatever you configure. Access control is set before anything is indexed, not after.</Point>
          <p style={{ ...prose, margin: 0 }}><span style={strong}>Is our data used to train an AI?</span> No. Deployment is client-controlled, and there is no cross-client training.</p>
        </Section>

        <EmailCta
          title="Tell me where your project information lives now."
          links={
            <>
              <GoldLink href="/services/ai-automation-for-contractors">All services →</GoldLink>
              {" · "}
              <GoldLink href="/about">About →</GoldLink>
            </>
          }
        >
          Tell me where your project information lives now, and I will tell you what is realistically searchable.
        </EmailCta>
      </main>
    </div>
  );
}
