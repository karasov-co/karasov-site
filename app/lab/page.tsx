"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import {
  WorkCard,
  VisualDevToolkit,
  type WorkCardData,
} from "../components/work-shared";
import StackSection from "../components/StackSection";

const labCases: WorkCardData[] = [
  {
    title: "FREELANCER DEV TOOLKIT",
    description:
      "I was repeating the same setup steps on every new project - scaffolding, linting, deploy scripts, client reports. I productized my workflow into a reusable toolkit: custom Claude Code commands for project init, automated code review, deploy checklists, and client-facing reports.\n\nSaved 2+ hours per project start.",
    tags: ["Claude Code", "Python", "Shell", "Git"],
    demoUrl: "https://www.loom.com/share/28366f5e5ffd4ad3a3e7f922e9afcf10",
    githubUrl: "https://github.com/vkarasovpm-dotcom/freelancer-toolkit",
  },
];

const labVisuals: ReactElement[] = [<VisualDevToolkit key="dev" />];

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
