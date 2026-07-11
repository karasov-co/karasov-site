"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Why not just buy an AI answering platform for $500/mo?",
    a: "If all you need is the phone answered — buy one, some are decent. Platforms handle one channel with one script. I build the layer they can't: your calls, emails, estimates, CRM and follow-ups working as one system, shaped around how YOUR company runs jobs. And you own all of it — accounts, workflows, documentation. No subscription hostage.",
  },
  {
    q: "You're not local. What happens when something breaks at 6 PM?",
    a: "The system is monitored 24/7 and alerts me before you notice. I overlap with US business hours every workday, and every build ships with fallbacks: if any step fails, leads still land in your inbox — nothing silently disappears.",
  },
  {
    q: "What if it breaks while your crew is on a job?",
    a: "Systems ship with monitoring, alerts and fallbacks. On a care plan, I know something failed before you do — and fix it same day.",
  },
  {
    q: "Do we need to switch CRMs or buy new software?",
    a: "No. I build on top of what you already use. If your CRM is a spreadsheet, we start there.",
  },
  {
    q: "How is this different from hiring an “AI agency”?",
    a: "You work with the person who builds it. Fixed price, 2–4 weeks, and you own everything — accounts, workflows, documentation.",
  },
  {
    q: "We're not technical. At all.",
    a: "Good — you shouldn't have to be. Your team keeps working in Gmail and their phones. The system runs underneath.",
  },
  {
    q: "What does it cost?",
    a: "Builds from $5,000. Care plans from $2,000/mo. If a missed job costs you $8–12K, the math is short.",
  },
];

function FaqItem({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-[#1A1A1A]"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span
          className="text-white text-base md:text-lg font-medium leading-snug group-hover:text-[#D4A853] transition-colors duration-200"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {faq.q}
        </span>
        <motion.span
          className="text-[#D4A853] text-xl flex-shrink-0 leading-none mt-0.5"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="text-[#999999] text-sm md:text-base leading-[1.75] pb-6 pr-8 max-w-2xl"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          FAQ
        </motion.p>
        <motion.h2
          className="text-section-title text-[#D4A853] mb-10"
          style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Straight answers
        </motion.h2>

        <div className="border-t border-[#1A1A1A]">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
