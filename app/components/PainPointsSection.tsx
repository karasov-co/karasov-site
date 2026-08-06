"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const quotes = [
  {
    text: "A lead called Saturday morning. Nobody picked up. By Monday they'd signed with another contractor.",
    source: "",
  },
  {
    text: "The estimate went out Tuesday. Then nothing. Everyone's on site - nobody's job is to follow up.",
    source: "",
  },
  {
    text: "Call notes live in the office manager's head. When she's out, your pipeline is out too.",
    source: "- every contractor, eventually",
  },
];

export default function PainPointsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="what-i-fix" className="py-12 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.p
          className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          What I fix
        </motion.p>
        <motion.h2
          className="text-section-title text-[#D4A853] mb-12"
          style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Sound familiar?
        </motion.h2>

        {/* Quote cards */}
        <div ref={ref} className="flex flex-col gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#111111] border border-[#1A1A1A] rounded-xl p-8 md:p-10 hover:border-[#D4A853]/20 transition-colors duration-300"
            >
              <p
                className="text-white/90 text-lg md:text-xl leading-relaxed italic"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                &ldquo;{q.text}&rdquo;
              </p>
              {q.source && (
                <p
                  className="text-[#555555] text-sm mt-4"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  {q.source}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closer */}
        <motion.p
          className="text-[#D4A853] text-xl md:text-2xl font-semibold text-center mt-10"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            textShadow: "0 0 30px rgba(212,168,83,0.15)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          One missed $12,000 job pays for this system twice. That&apos;s the math I fix.
        </motion.p>
      </div>
    </section>
  );
}
