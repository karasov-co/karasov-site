"use client";

import { motion } from "framer-motion";

const tools = [
  "Gmail",
  "Google Sheets",
  "QuickBooks",
  "Calendly",
  "ClickUp",
  "Jobber",
  "Housecall Pro",
  "ServiceTitan",
  "Buildertrend",
  "JobTread",
  "Telegram",
  "SMS",
];

export default function ToolsSection() {
  return (
    <section id="tools" className="py-12 md:py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-[#E8C46A] text-sm md:text-base tracking-[0.2em] uppercase mb-8"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Works with what you already use
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-2.5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-sm text-[#AAAAAA] border border-[#1E1E1E] rounded-full px-4 py-1.5 hover:border-[#D4A853]/40 hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {tool}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="mt-8 text-[#777777] text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          — plus the AI engineering underneath:{" "}
          <span className="text-[#D4A853]">
            Claude, OpenAI, n8n, Make.com (Advanced Certified)
          </span>
          . The full technical stack lives in the{" "}
          <a href="/lab" className="text-[#D4A853] underline underline-offset-4 hover:text-[#E8C46A]">
            Lab
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
