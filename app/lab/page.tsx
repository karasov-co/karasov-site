"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import {
  WorkCard,
  VisualContentEngine,
  VisualMarketIntel,
  VisualResearchEngine,
  VisualPhotoCulling,
  VisualDevToolkit,
  type WorkCardData,
} from "../components/work-shared";
import StackSection from "../components/StackSection";

const labCases: WorkCardData[] = [
  {
    title: "AI CONTENT ENGINE",
    description:
      "Writing branded content at scale — consistent voice, audience-relevant topics, multiple platforms — was taking hours every week with inconsistent results.\n\nBuilt a 6-scenario closed-loop pipeline: brand voice, audience pain points, and top-performing posts stored as vectors in Pinecone. Claude generates 6 post variants per topic using RAG context. Feedback loop auto-enriches the style bank from engagement data. Reddit monitoring keeps audience language current automatically.\n\nResult: 30 branded posts for $1 in API costs. Zero manual writing. System improves with each cycle.",
    tags: ["Make.com", "Claude API", "Pinecone", "Buffer", "RAG"],
    demoUrl: "https://www.loom.com/share/3e08552f874f407bad4b558bd0bdf9d8",
  },
  {
    title: "MARKET INTELLIGENCE SYSTEM",
    description:
      "A founder needed competitive analysis and a go-to-market plan for a new product. Manual research took 3+ days and was outdated before it was finished.\n\nBuilt a form-triggered pipeline: 5 sub-workflows run in parallel — input validation, Gemini Deep Research autonomous agent, market strategy synthesis, GTM planning, and quality evaluation. Grounding ratio 1.0 — every claim backed by a real web source. Results delivered to Airtable and Slack automatically.\n\nResult: competitive analysis + quality scoring + 90-day GTM plan in under 5 minutes.",
    tags: ["n8n", "Gemini Deep Research", "Airtable", "Slack"],
    demoUrl: "https://www.loom.com/share/6a08c5221efd444db95ee0275247f288",
  },
  {
    title: "MULTI-AGENT RESEARCH ENGINE",
    description:
      "A client's research team was spending 15+ hours per week on manual competitive analysis. I identified the bottleneck, designed a multi-agent pipeline with 4 specialized AI roles, built and deployed it in 5 days.\n\nResult: 3-hour research tasks completed in 2 minutes. Fully automated, one webhook call.",
    tags: ["n8n", "Claude API", "Supabase pgvector", "Webhooks"],
    demoUrl: "https://www.loom.com/share/d99029c2ac5b4969823c818cb81ef0d5",
  },
  {
    title: "AI PHOTO CULLING TOOL",
    description:
      "After every photoshoot, I was spending 1–2 hours manually reviewing hundreds of RAW files. I defined the scoring criteria, designed the workflow, and built a CLI tool that reads RAW files, extracts EXIF data, and uses GPT Vision to score each photo 1–1000.\n\nProcessed 121 photos in 15 minutes for ~$0.35.",
    tags: ["Python", "OpenAI Vision API", "Pillow", "rawpy"],
    demoUrl: "https://www.loom.com/share/adb04c24f46540d8b544de8e488eb88c",
    githubUrl: "https://github.com/vkarasovpm-dotcom/photo-ai-toolkit",
  },
  {
    title: "FREELANCER DEV TOOLKIT",
    description:
      "I was repeating the same setup steps on every new project — scaffolding, linting, deploy scripts, client reports. I productized my workflow into a reusable toolkit: custom Claude Code commands for project init, automated code review, deploy checklists, and client-facing reports.\n\nSaved 2+ hours per project start.",
    tags: ["Claude Code", "Python", "Shell", "Git"],
    demoUrl: "https://www.loom.com/share/28366f5e5ffd4ad3a3e7f922e9afcf10",
    githubUrl: "https://github.com/vkarasovpm-dotcom/freelancer-toolkit",
  },
];

const labVisuals: ReactElement[] = [
  <VisualContentEngine key="content" />,
  <VisualMarketIntel key="market" />,
  <VisualResearchEngine key="research" />,
  <VisualPhotoCulling key="photo" />,
  <VisualDevToolkit key="dev" />,
];

export default function LabPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white">
      {/* Minimal header */}
      <header className="border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-bold tracking-widest text-sm uppercase hover:text-[#D4A853] transition-colors duration-200"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            KARASOV
          </Link>
          <Link
            href="/"
            className="text-[#888888] hover:text-white text-sm tracking-wide transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            ← Back to site
          </Link>
        </div>
      </header>

      {/* Intro + cases */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Lab
          </motion.p>
          <motion.h1
            className="text-section-title text-[#D4A853] mb-6"
            style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            LAB
          </motion.h1>
          <p
            className="text-[#888888] text-base max-w-2xl mb-12"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Side builds, experiments and open source.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {labCases.map((card, i) => (
              <WorkCard
                key={card.title}
                card={card}
                animIndex={i % 2}
                globalIndex={i}
                visual={labVisuals[i]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Full technical stack */}
      <StackSection />

      <footer className="border-t border-[#1A1A1A] py-8 px-6">
        <p
          className="text-center text-sm text-[#555555]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          © 2026 Vitalii Karasov
        </p>
      </footer>
    </main>
  );
}
