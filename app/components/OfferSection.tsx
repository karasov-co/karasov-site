"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const buildBullets = [
  "Scoped in one call, priced upfront — no hourly billing",
  "Live in 2–4 weeks",
  "Works with the tools you already use — no rip-and-replace",
  "Your team touches nothing new: it runs behind Gmail, your CRM and your phone",
  "50% to start, 50% at launch. No invoices until scope is agreed in writing.",
];

const careBullets = [
  "Monitoring & same-day fixes",
  "Monthly improvements as your business changes",
  "A monthly report in dollars and jobs — not tech jargon",
  "Month-to-month. Cancel anytime — you keep everything I built.",
];

const notAFit = [
  "Single-truck operations — my systems would be overkill for you yet",
  "GCs above ~$50M — you need an enterprise Procore/ServiceTitan team",
  "Anyone who wants a chatbot on the website and nothing else",
];

const closing =
  "Every system pays for itself with the first saved job. If yours can't, I'll tell you on the first call — and won't take the project.";

function OfferCard({
  name,
  price,
  intro,
  bullets,
  index,
  isInView,
}: {
  name: string;
  price: string;
  intro: string;
  bullets: string[];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#111111] border border-[#1A1A1A] rounded-2xl p-8 md:p-10 flex flex-col hover:border-[#D4A853]/30 transition-colors duration-300"
    >
      <div className="flex items-baseline justify-between gap-3 mb-5 flex-wrap">
        <h3
          className="text-white font-bold text-lg md:text-xl tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {name}
        </h3>
        <span
          className="text-[#D4A853] font-bold text-sm border border-[#D4A853]/30 rounded-full px-3 py-1 whitespace-nowrap"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          {price}
        </span>
      </div>

      <p
        className="text-[#888888] text-sm leading-relaxed mb-6"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {intro}
      </p>

      <ul className="flex flex-col gap-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span className="text-[#D4A853] text-sm mt-0.5 flex-shrink-0">✓</span>
            <span
              className="text-[#AAAAAA] text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {b}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function OfferSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="offer" className="py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Offer
        </motion.p>
        <motion.h2
          className="text-section-title text-[#D4A853] mb-12"
          style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          One system. Fixed price. Then I keep it running.
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <OfferCard
            name="THE BUILD"
            price="from $5,000"
            intro="A fixed-scope system for your exact bottleneck — lead follow-up, missed-call recovery, estimate chasing, email & document processing."
            bullets={buildBullets}
            index={0}
            isInView={isInView}
          />
          <OfferCard
            name="THE CARE PLAN"
            price="from $2,000/mo"
            intro="Systems don't maintain themselves. APIs change, tools update, your process evolves."
            bullets={careBullets}
            index={1}
            isInView={isInView}
          />
        </div>

        {/* Who this is NOT for */}
        <motion.div
          className="mt-8 bg-[#0D0D0D] border border-[#1A1A1A] rounded-xl p-6 md:p-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-[#777777] text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            Not a fit
          </p>
          <ul className="flex flex-col gap-2.5">
            {notAFit.map((n) => (
              <li key={n} className="flex items-start gap-3">
                <span className="text-[#555555] text-sm mt-0.5 flex-shrink-0">·</span>
                <span
                  className="text-[#888888] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {n}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.p
          className="mt-8 text-[#D4A853] text-base md:text-lg leading-relaxed max-w-3xl"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            textShadow: "0 0 30px rgba(212,168,83,0.12)",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {closing}
        </motion.p>
      </div>
    </section>
  );
}
