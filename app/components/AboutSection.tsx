"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const bioParagraphs = [
  "I'm Vitalii Karasov - a product manager who builds.",
  "Five years of operations and product management before going full-time on AI systems: EdTech launch, media production, crisis logistics with a 1.5M+ PLN budget and zero audit findings. MSc in Strategic Project Management, PRINCE2 certified.",
  "In 2026 my solo build took 3rd of 731 teams at the AI Agent Olympics - the official hackathon of AI Week Milan, Europe's largest AI event.",
  "Now I build one thing: operations systems for construction and home-service companies. Deep, not wide.",
];

const tags = ["PRINCE2", "MSc Strategy", "Award Winner '26", "AI Systems"];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="about"
      className="py-12 md:py-20 px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(212,168,83,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.018) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          About
        </motion.p>
        <motion.h2
          className="text-section-title text-[#D4A853] mb-14"
          style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          WHO I AM
        </motion.h2>

        {/* Two-column */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start"
        >
          {/* Left: portrait */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[3/4] w-full max-w-[400px] rounded-xl overflow-hidden border border-[#1A1A1A]">
              <Image
                src="/images/portrait-about.jpg"
                alt="Vitalii Karasov"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 pt-2"
          >
            {bioParagraphs.map((para, i) => (
              <motion.p
                key={i}
                className="text-[#888888] text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Pill tags */}
            <motion.div
              className="flex flex-wrap gap-2 pt-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#D4A853] border border-[#D4A853]/30 px-3 py-1 rounded-full hover:border-[#D4A853]/60 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
