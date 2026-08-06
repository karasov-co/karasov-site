"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    label: "Where leads come from",
    body: "Your leads come from Google LSA, Angi, Thumbtack, Houzz and referrals - and half of them call, not email.",
  },
  {
    label: "The field",
    body: "Your crews are in the field with phones, not laptops. Anything I build works over text, Telegram or a tap - not another login to forget.",
  },
  {
    label: "Your stack",
    body: "Your office already lives in some mix of Gmail, QuickBooks, spreadsheets and a CRM - Buildertrend, JobTread, Housecall Pro, ServiceTitan, Jobber, or “the whiteboard.” I plug into what you have.",
  },
  {
    label: "The reality",
    body: "I know what a change order does to a timeline, why estimates die without follow-up, and that nobody in your company has time to “learn a new tool.” So there's nothing to learn.",
  },
];

export default function YourWorldSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="your-world"
      className="py-12 md:py-20 px-6 bg-[#0D0D0D]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(212,168,83,0.02) 1px, transparent 1px)",
        backgroundSize: "100% 64px",
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
          Your world
        </motion.p>
        <motion.h2
          className="text-section-title text-[#D4A853] mb-12"
          style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          I know how your business actually runs
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="border-l-2 border-[#D4A853]/30 pl-5 py-1"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="text-[#E8C46A]/70 text-xs tracking-[0.18em] uppercase mb-2"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                {item.label}
              </p>
              <p
                className="text-[#999999] text-base leading-[1.75]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
