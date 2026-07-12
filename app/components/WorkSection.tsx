"use client";

import { useRef, type ReactElement } from "react";
import { motion, useInView } from "framer-motion";
import {
  WorkCard,
  VisualAtaman,
  VisualLeadBot,
  VisualContentEngine,
  VisualMarketIntel,
  VisualResearchEngine,
  VisualPhotoCulling,
  VisualSentinel,
  type WorkCardData,
} from "./work-shared";

const cases: WorkCardData[] = [
  {
    title: "LEAD-TO-CONTRACT SYSTEM · ATAMAN STUDIO",
    statusStrip: "● LIVE IN PRODUCTION · 10,000+ RUNS",
    clientLine: "Design-build studio, Los Angeles - custom homes, ADUs, permit-ready plans",
    description:
      "Leads booked calls. Meetings went well. Then deals went cold - follow-ups depended on memory, call notes lived in people's heads, the CRM was always out of date.\n\nI built a 7-scenario system that runs the whole lead lifecycle: every booked call creates a lead card automatically; every inbound email is read and routed; every sales call is transcribed and summarized with a reply drafted; follow-ups go out at day 2, 5 and 10 - and stop themselves the second the client replies. Nobody touches the CRM. It just stays correct.\n\nResult: 10,000+ production runs. Every call documented, every lead followed up on schedule, zero manual CRM upkeep.",
    tags: ["Make.com", "ClickUp", "OpenAI", "Otter", "Calendly", "Gmail"],
    stats: [
      { value: "10,000+", label: "production runs" },
      { value: "7", label: "scenarios" },
      { value: "2·5·10", label: "day follow-up cadence" },
      { value: "0", label: "manual upkeep" },
    ],
    // TODO: Ataman loom - add `demoUrl` here once a real share ID exists
  },
  {
    title: "INSTANT LEAD RESPONSE & SCORING",
    description:
      "Inbound leads were falling through the cracks - slow responses, no prioritization, manual copy-paste into spreadsheets.\n\nI built a pipeline that answers and scores every lead in under 5 seconds: hot leads get flagged for an immediate call, warm ones enter a nurture sequence, junk gets filtered out. Everything lands in the CRM automatically.\n\nSpeed-to-lead wins jobs: the first company to respond wins most of them.",
    tags: ["n8n", "Claude API", "Google Sheets", "REST API"],
    demoUrl: "https://www.loom.com/share/9c2ef40dee6543f897060ef4b8596d74",
  },
  {
    title: "MARKETING CONTENT ON AUTOPILOT",
    description:
      "Staying visible - posts, project updates, before-and-afters - takes hours every week. So for most service businesses it just doesn't happen, and the competitor who posts wins the job.\n\nI built a closed-loop content system: your brand voice, your audience's pain points and your best-performing posts stored as knowledge; AI drafts platform-ready posts on schedule; engagement data feeds back in, so the system writes better every cycle.\n\nResult: 30 branded posts for $1 in AI costs. Zero manual writing. Your company stays visible while you run jobs.",
    tags: ["Make.com", "Claude API", "Pinecone", "Buffer", "RAG"],
    demoUrl: "https://www.loom.com/share/3e08552f874f407bad4b558bd0bdf9d8",
  },
  {
    title: "MARKET & COMPETITOR INTELLIGENCE",
    description:
      "Knowing what competitors charge, offer and rank for used to take days of manual research - and it was outdated before it was finished.\n\nI built a form-triggered pipeline: five research workflows run in parallel and return a full competitive picture - pricing, positioning, trends - with every claim backed by a real source. Delivered to a spreadsheet and Slack automatically.\n\nResult: 3+ days of research in under 5 minutes, whenever you need it.",
    tags: ["n8n", "Gemini Deep Research", "Airtable", "Slack"],
    demoUrl: "https://www.loom.com/share/6a08c5221efd444db95ee0275247f288",
  },
  {
    title: "RESEARCH ENGINE: 3 HOURS TO 2 MINUTES",
    description:
      "A client's team was burning 15+ hours a week on manual research and analysis. I found the bottleneck and replaced it with a pipeline of four specialized AI roles - built and deployed in 5 days.\n\nResult: tasks that took 3 hours now finish in 2 minutes. One click, fully automated.",
    tags: ["n8n", "Claude API", "Supabase pgvector", "Webhooks"],
    demoUrl: "https://www.loom.com/share/d99029c2ac5b4969823c818cb81ef0d5",
  },
  {
    title: "PROJECT PHOTO AI",
    description:
      "Every project generates hundreds of photos - job-site progress, finished work, before-and-afters. Sorting them for the portfolio, the client and the marketing folder eats hours nobody has.\n\nI built a tool that reads every photo, scores it 1-1000 for quality and picks the keepers automatically.\n\nResult: 121 photos sorted in 15 minutes for $0.35. Open source - code on GitHub.",
    tags: ["Python", "OpenAI Vision API", "Pillow", "rawpy"],
    demoUrl: "https://www.loom.com/share/adb04c24f46540d8b544de8e488eb88c",
    githubUrl: "https://github.com/vkarasovpm-dotcom/photo-ai-toolkit",
  },
  {
    title: "SENTINEL - ADVERSARIAL AI COURT",
    intro:
      "Not construction - but this is the engineering depth behind your system. Built solo in 7 days. 3rd place of 731 teams at Europe's largest AI event.",
    description:
      "Tens of millions of police interactions are recorded on bodycams every year. Less than 1% are ever audited - the officer's written report becomes the de-facto truth.\n\nBuilt solo in 7 days at the AI Agent Olympics (AI Week Milan 2026, Europe's largest AI event): a three-layer multi-agent court. Layer 1 streams Speechmatics realtime transcription with diarization and flags violations in under 2 seconds per utterance. Layer 2 runs an adversarial council - a Prosecution agent (gpt-oss-120b) argues against a Defense agent (gemma-3-26B), deliberately different model families so neither side dominates, while a Vision agent (Gemini 3.1 Pro) reads the actual video. Layer 3: a Judge agent weighs both sides and issues per-rule verdicts, drillable from rule ID → reasoning → exact utterance timestamp → video frame. FAISS retrieval over US / EU / Italy case-law packs.\n\nResult: a court-defensible audit at ~$0.10-0.20 per recording - cheap enough to audit every interaction, not 1%.",
    tags: ["Next.js 16", "FastAPI", "Speechmatics", "Gemini 3.1 Pro", "FAISS", "Vultr"],
    demoUrl: "https://sentinel-audit.co",
    demoLabel: "Live Demo",
    githubUrl: "https://github.com/vkarasovpm-dotcom/bodycam-intelligence",
  },
];

const visuals: ReactElement[] = [
  <VisualAtaman key="ataman" />,
  <VisualLeadBot key="lead" />,
  <VisualContentEngine key="content" />,
  <VisualMarketIntel key="market" />,
  <VisualResearchEngine key="research" />,
  <VisualPhotoCulling key="photo" />,
  <VisualSentinel key="sentinel" />,
];

export default function WorkSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px 0px" });

  return (
    <section
      id="work"
      className="py-12 md:py-20 px-6"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(212,168,83,0.04) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-14">
          <motion.p
            className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            Cases
          </motion.p>
          <motion.h2
            className="text-section-title text-[#D4A853]"
            style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            SELECTED WORK
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {cases.map((card, i) => (
            <WorkCard
              key={card.title}
              card={card}
              animIndex={i}
              globalIndex={i}
              visual={visuals[i]}
            />
          ))}
        </div>

        {/* NDA - fully generic, no client details */}
        <motion.p
          className="mt-12 max-w-2xl text-sm text-[#666666] leading-relaxed"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Some client work runs under strict NDA and isn&apos;t shown here. References
          available on request.
        </motion.p>
      </div>
    </section>
  );
}
