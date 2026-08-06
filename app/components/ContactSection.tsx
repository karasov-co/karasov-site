"use client";

import { motion } from "framer-motion";

const linkedinIcon = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const telegramIcon = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const whatsappIcon = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
  </svg>
);

const contactSocials = [
  { label: "Telegram @karvitalii", href: "https://t.me/karvitalii", icon: telegramIcon },
  { label: "WhatsApp @karvitalii", href: "https://wa.me/karvitalii", icon: whatsappIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vitaliikarasov/", icon: linkedinIcon },
];

const footerLinks = [
  { label: "GitHub", href: "https://github.com/vkarasovpm-dotcom", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vitaliikarasov/", external: true },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01af851972931ea5c2", external: true },
  { label: "Lab", href: "/lab", external: false },
  { label: "Essays & video →", href: "https://www.youtube.com/@TheHumanGambit", external: true },
];

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-8"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Contact
          </motion.p>

          <motion.h2
            className="text-[#D4A853] mb-6 leading-[1.1]"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              textShadow: "0 0 30px rgba(212,168,83,0.2)",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Losing leads you already paid for?
          </motion.h2>

          <motion.p
            className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            One short call. I&apos;ll tell you what&apos;s leaking and what it would take to fix it.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://calendly.com/v-karasov-pm/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4A853] text-black font-semibold px-8 py-4 rounded-lg hover:bg-[#E8C46A] transition-colors duration-200 text-sm tracking-wide w-full sm:w-auto text-center"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Book a call →
            </a>
            <a
              href="mailto:v.karasov.pm@gmail.com"
              className="border border-[#D4A853]/50 text-[#D4A853] px-8 py-4 rounded-lg hover:bg-[#D4A853]/10 transition-colors duration-200 text-sm tracking-wide w-full sm:w-auto text-center"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              Email directly →
            </a>
          </motion.div>

          {/* Messengers + LinkedIn */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {contactSocials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#888888] hover:text-[#D4A853] transition-colors duration-200"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
              >
                {s.icon}
                <span className="text-sm" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {s.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A1A] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-sm text-[#555555] order-2 md:order-1"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            © 2026 Vitalii Karasov
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6 order-1 md:order-2">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-[#555555] hover:text-[#D4A853] transition-colors duration-200 text-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
