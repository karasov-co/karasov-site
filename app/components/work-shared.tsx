"use client";

import { useRef, type ReactElement } from "react";
import { motion, useInView } from "framer-motion";

export interface WorkCardData {
  title: string;
  clientLine?: string;
  intro?: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  demoLabel?: string;
  githubUrl?: string;
  award?: string;
  statusStrip?: string;
  stats?: { value: string; label: string }[];
}

const gridBg = {
  backgroundImage:
    "linear-gradient(rgba(212,168,83,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.04) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

const visualBase =
  "h-48 w-full bg-gradient-to-br from-[#0d0d1a] to-[#0a0a0a] relative overflow-hidden flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300";
const visualBoxShadow = { boxShadow: "0 1px 0 rgba(212,168,83,0.1)" };

export function VisualResearchEngine() {
  return (
    <div className={visualBase} style={visualBoxShadow}>
      <div className="absolute inset-0" style={gridBg} />
      <svg
        viewBox="0 0 280 120"
        className="relative w-full max-w-[280px] h-auto px-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="90" y="4" width="100" height="26" rx="3" fill="none" stroke="rgba(212,168,83,0.65)" strokeWidth="1.5" />
        <text x="140" y="21" textAnchor="middle" fill="rgba(212,168,83,0.85)" fontSize="9" fontFamily="monospace">SUPERVISOR</text>
        <line x1="140" y1="30" x2="140" y2="44" stroke="rgba(212,168,83,0.3)" strokeWidth="1" />
        <line x1="44" y1="44" x2="236" y2="44" stroke="rgba(212,168,83,0.2)" strokeWidth="1" />
        <line x1="44" y1="44" x2="44" y2="56" stroke="rgba(212,168,83,0.2)" strokeWidth="1" />
        <line x1="140" y1="44" x2="140" y2="56" stroke="rgba(212,168,83,0.2)" strokeWidth="1" />
        <line x1="236" y1="44" x2="236" y2="56" stroke="rgba(212,168,83,0.2)" strokeWidth="1" />
        <rect x="2" y="56" width="84" height="22" rx="2" fill="none" stroke="rgba(212,168,83,0.22)" strokeWidth="1" />
        <text x="44" y="71" textAnchor="middle" fill="#777" fontSize="8" fontFamily="monospace">RESEARCHER</text>
        <rect x="98" y="56" width="84" height="22" rx="2" fill="none" stroke="rgba(212,168,83,0.22)" strokeWidth="1" />
        <text x="140" y="71" textAnchor="middle" fill="#777" fontSize="8" fontFamily="monospace">HISTORIAN</text>
        <rect x="194" y="56" width="84" height="22" rx="2" fill="none" stroke="rgba(212,168,83,0.22)" strokeWidth="1" />
        <text x="236" y="71" textAnchor="middle" fill="#777" fontSize="8" fontFamily="monospace">STRATEGIST</text>
      </svg>
    </div>
  );
}

export function VisualContentEngine() {
  return (
    <div className={visualBase} style={visualBoxShadow}>
      <div className="absolute inset-0" style={gridBg} />
      <svg
        viewBox="0 0 280 120"
        className="relative w-full max-w-[280px] h-auto px-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* REDDIT */}
        <rect x="5" y="44" width="58" height="22" rx="2" fill="none" stroke="rgba(212,168,83,0.22)" strokeWidth="1" />
        <text x="34" y="59" textAnchor="middle" fill="#777" fontSize="8" fontFamily="monospace">REDDIT</text>
        {/* REDDIT → CLAUDE */}
        <line x1="63" y1="55" x2="104" y2="55" stroke="rgba(212,168,83,0.3)" strokeWidth="1" />
        {/* CLAUDE API */}
        <rect x="104" y="44" width="72" height="22" rx="3" fill="none" stroke="rgba(212,168,83,0.65)" strokeWidth="1.5" />
        <text x="140" y="59" textAnchor="middle" fill="rgba(212,168,83,0.85)" fontSize="8" fontFamily="monospace">CLAUDE API</text>
        {/* CLAUDE → BUFFER */}
        <line x1="176" y1="55" x2="217" y2="55" stroke="rgba(212,168,83,0.3)" strokeWidth="1" />
        {/* BUFFER */}
        <rect x="217" y="44" width="58" height="22" rx="2" fill="none" stroke="rgba(212,168,83,0.22)" strokeWidth="1" />
        <text x="246" y="59" textAnchor="middle" fill="#777" fontSize="8" fontFamily="monospace">BUFFER</text>
        {/* CLAUDE ↓ PINECONE */}
        <line x1="140" y1="66" x2="140" y2="86" stroke="rgba(212,168,83,0.3)" strokeWidth="1" />
        {/* PINECONE */}
        <rect x="104" y="86" width="72" height="22" rx="2" fill="none" stroke="rgba(212,168,83,0.22)" strokeWidth="1" />
        <text x="140" y="101" textAnchor="middle" fill="#777" fontSize="8" fontFamily="monospace">PINECONE</text>
        {/* Closed loop: dashed arc BUFFER → REDDIT over the top */}
        <path d="M246,44 C246,16 34,16 34,44" fill="none" stroke="rgba(212,168,83,0.15)" strokeWidth="1" strokeDasharray="3,3" />
      </svg>
    </div>
  );
}

export function VisualMarketIntel() {
  const branches = ["COMPETITOR", "PRICING", "TECH TRENDS", "FUNDING", "REGULATION"];
  const boxH = 18;
  const gap = 5;
  const startY = 5; // (120 - (5*18 + 4*5)) / 2

  return (
    <div className={visualBase} style={visualBoxShadow}>
      <div className="absolute inset-0" style={gridBg} />
      <svg
        viewBox="0 0 280 120"
        className="relative w-full max-w-[280px] h-auto px-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* INPUT */}
        <rect x="5" y="49" width="50" height="22" rx="3" fill="none" stroke="rgba(212,168,83,0.65)" strokeWidth="1.5" />
        <text x="30" y="64" textAnchor="middle" fill="rgba(212,168,83,0.85)" fontSize="8" fontFamily="monospace">INPUT</text>
        {/* OUTPUT */}
        <rect x="225" y="49" width="50" height="22" rx="3" fill="none" stroke="rgba(212,168,83,0.65)" strokeWidth="1.5" />
        <text x="250" y="64" textAnchor="middle" fill="rgba(212,168,83,0.85)" fontSize="8" fontFamily="monospace">REPORT</text>
        {/* Parallel branches */}
        {branches.map((label, i) => {
          const y = startY + i * (boxH + gap);
          const cy = y + boxH / 2;
          return (
            <g key={label}>
              <line x1="55" y1="60" x2="110" y2={cy} stroke="rgba(212,168,83,0.2)" strokeWidth="1" />
              <rect x="110" y={y} width="70" height={boxH} rx="2" fill="none" stroke="rgba(212,168,83,0.22)" strokeWidth="1" />
              <text x="145" y={y + 12} textAnchor="middle" fill="#777" fontSize="7" fontFamily="monospace">{label}</text>
              <line x1="180" y1={cy} x2="225" y2="60" stroke="rgba(212,168,83,0.2)" strokeWidth="1" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function VisualLeadBot() {
  return (
    <div className={visualBase} style={visualBoxShadow}>
      <div className="absolute inset-0" style={gridBg} />
      <div className="relative flex items-center gap-5">
        <div className="border border-[#333] px-3 py-2 text-[10px] font-mono text-[#555] bg-[#111]">
          LEAD
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-5 h-px bg-[#D4A853]/20" />
          <div className="w-5 h-px bg-[#D4A853]/20" />
          <div className="w-5 h-px bg-[#D4A853]/20" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-red-500/15 border border-red-500/30 px-4 py-1.5 text-[10px] font-mono text-red-400">
            HOT ↑
          </div>
          <div className="bg-yellow-500/15 border border-yellow-500/30 px-4 py-1.5 text-[10px] font-mono text-yellow-400">
            WARM →
          </div>
          <div className="bg-blue-500/15 border border-blue-500/30 px-4 py-1.5 text-[10px] font-mono text-blue-400">
            COLD ↓
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualPhotoCulling() {
  const photos = [
    { score: 234, high: false },
    { score: 891, high: true },
    { score: 456, high: false },
    { score: 978, high: true },
    { score: 112, high: false },
  ];
  return (
    <div className={`${visualBase} items-end pb-6`} style={visualBoxShadow}>
      <div className="absolute inset-0" style={gridBg} />
      <div className="relative flex items-end gap-3">
        {photos.map(({ score, high }, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-mono" style={{ color: high ? "#D4A853" : "#444" }}>
              {score}
            </span>
            <div
              className={`w-10 border ${high ? "border-[#D4A853]/50 bg-[#D4A853]/5" : "border-[#2a2a2a] bg-[#111]"}`}
              style={{ height: high ? "60px" : "40px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function VisualDevToolkit() {
  const commands = ["$ /project-init", "$ /code-review", "$ /deploy-checklist", "$ /client-report"];
  return (
    <div className={`${visualBase} items-center justify-start pl-8`} style={visualBoxShadow}>
      <div className="absolute inset-0" style={gridBg} />
      <div className="relative flex flex-col gap-2.5">
        {commands.map((cmd) => (
          <span key={cmd} className="text-green-400 text-xs font-mono">{cmd}</span>
        ))}
        <span className="cursor-blink inline-block w-1.5 h-3.5 bg-green-400 mt-0.5" />
      </div>
    </div>
  );
}

export function VisualSentinel() {
  return (
    <div className={visualBase} style={visualBoxShadow}>
      <div className="absolute inset-0" style={gridBg} />
      <svg
        viewBox="0 0 280 120"
        className="relative w-full max-w-[280px] h-auto px-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* PROSECUTION (top-left) */}
        <rect x="6" y="16" width="96" height="24" rx="2" fill="none" stroke="rgba(212,168,83,0.32)" strokeWidth="1" />
        <text x="54" y="31" textAnchor="middle" fill="#999" fontSize="8" fontFamily="monospace">PROSECUTION</text>
        {/* DEFENSE (bottom-left) */}
        <rect x="6" y="80" width="96" height="24" rx="2" fill="none" stroke="rgba(212,168,83,0.32)" strokeWidth="1" />
        <text x="54" y="95" textAnchor="middle" fill="#999" fontSize="8" fontFamily="monospace">DEFENSE</text>
        {/* Adversarial clash */}
        <line x1="54" y1="40" x2="54" y2="80" stroke="rgba(212,168,83,0.15)" strokeWidth="1" strokeDasharray="2,2" />
        <text x="54" y="63" textAnchor="middle" fill="rgba(212,168,83,0.55)" fontSize="9" fontFamily="monospace">VS</text>
        {/* Converging to JUDGE */}
        <path d="M102,28 C142,28 150,58 186,58" fill="none" stroke="rgba(212,168,83,0.3)" strokeWidth="1" />
        <path d="M102,92 C142,92 150,62 186,62" fill="none" stroke="rgba(212,168,83,0.3)" strokeWidth="1" />
        {/* JUDGE (right, highlighted) */}
        <rect x="186" y="48" width="88" height="24" rx="3" fill="rgba(212,168,83,0.05)" stroke="rgba(212,168,83,0.65)" strokeWidth="1.5" />
        <text x="230" y="63" textAnchor="middle" fill="rgba(212,168,83,0.85)" fontSize="9" fontFamily="monospace">JUDGE</text>
      </svg>
    </div>
  );
}

export function VisualAtaman() {
  const steps = ["CALENDLY", "OTTER", "CLICKUP", "OPENAI", "GMAIL"];
  const followups = [
    { label: "2", x: 74 },
    { label: "5", x: 132 },
    { label: "10", x: 190 },
  ];
  return (
    <div className={visualBase} style={visualBoxShadow}>
      <div className="absolute inset-0" style={gridBg} />
      <svg
        viewBox="0 0 280 120"
        className="relative w-full max-w-[280px] h-auto px-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pipeline */}
        {steps.map((label, i) => {
          const x = 4 + i * 56;
          const hi = i === 0 || i === steps.length - 1;
          return (
            <g key={label}>
              <rect
                x={x}
                y="26"
                width="46"
                height="22"
                rx="2"
                fill="none"
                stroke={hi ? "rgba(212,168,83,0.6)" : "rgba(212,168,83,0.24)"}
                strokeWidth={hi ? 1.3 : 1}
              />
              <text
                x={x + 23}
                y="40"
                textAnchor="middle"
                fill={hi ? "rgba(212,168,83,0.85)" : "#888"}
                fontSize="7"
                fontFamily="monospace"
              >
                {label}
              </text>
              {i < steps.length - 1 && (
                <line x1={x + 46} y1="37" x2={x + 56} y2="37" stroke="rgba(212,168,83,0.3)" strokeWidth="1" />
              )}
            </g>
          );
        })}
        {/* Follow-up cadence */}
        <text x="4" y="86" fill="rgba(212,168,83,0.5)" fontSize="7" fontFamily="monospace">FOLLOW-UP</text>
        <line x1="66" y1="83" x2="200" y2="83" stroke="rgba(212,168,83,0.18)" strokeWidth="1" strokeDasharray="3,3" />
        {followups.map(({ label, x }) => (
          <g key={label}>
            <circle cx={x} cy="83" r="8" fill="#0a0a0a" stroke="rgba(212,168,83,0.35)" strokeWidth="1" />
            <text x={x} y="86" textAnchor="middle" fill="#999" fontSize="7" fontFamily="monospace">{label}</text>
          </g>
        ))}
        <text x="210" y="86" fill="#666" fontSize="7" fontFamily="monospace">DAYS</text>
      </svg>
    </div>
  );
}

export function WorkCard({
  card,
  animIndex,
  globalIndex,
  visual,
}: {
  card: WorkCardData;
  animIndex: number;
  globalIndex: number;
  visual: ReactElement;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: animIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[#111111] rounded-2xl overflow-hidden flex flex-col border border-[#1A1A1A] hover:border-[#D4A853]/40 hover:shadow-[0_8px_30px_rgba(212,168,83,0.06)] transition-all duration-300"
      whileHover={{ scale: 1.02 } as never}
    >
      {visual}

      {card.award && (
        <div className="px-8 md:px-10 py-2.5 bg-[#D4A853]/[0.07] border-b border-[#D4A853]/20">
          <span
            className="text-[10px] md:text-[11px] text-[#E8C46A] tracking-[0.08em] leading-relaxed"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            {card.award}
          </span>
        </div>
      )}

      {card.statusStrip && (
        <div className="px-8 md:px-10 py-2.5 bg-green-500/[0.06] border-b border-green-500/20">
          <span
            className="text-[10px] md:text-[11px] text-green-400/90 tracking-[0.08em] leading-relaxed"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            {card.statusStrip}
          </span>
        </div>
      )}

      <div className="p-8 md:p-10 flex flex-col gap-5 flex-1">
        <span
          className="text-xs text-[#2A2A2A]"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          {String(globalIndex + 1).padStart(2, "0")}
        </span>

        <h3
          className="text-white font-bold text-base md:text-lg leading-snug tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {card.title}
        </h3>

        {card.clientLine && (
          <p
            className="text-[#666666] text-xs -mt-3 leading-relaxed"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            {card.clientLine}
          </p>
        )}

        {card.intro && (
          <p
            className="text-[#D4A853]/80 text-xs md:text-sm leading-relaxed border-l-2 border-[#D4A853]/30 pl-3"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {card.intro}
          </p>
        )}

        <p
          className="text-[#888888] text-sm leading-[1.75] whitespace-pre-line"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {card.description}
        </p>

        {card.stats && (
          <div className="grid grid-cols-2 gap-3">
            {card.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-[#1E1E1E] bg-[#0D0D0D] px-4 py-3"
              >
                <div
                  className="text-[#D4A853] text-xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[#666666] text-[11px] mt-1.5"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#555555] border border-[#1E1E1E] px-2.5 py-1"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {(card.demoUrl || card.githubUrl) && (
          <div className="flex items-center gap-5 flex-wrap">
            {card.demoUrl && (
              <a
                href={card.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#D4A853] font-medium hover:text-[#E8C46A] transition-colors duration-200"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <span>▶</span> {card.demoLabel ?? "Watch Demo"}
              </a>
            )}
            {card.githubUrl && (
              <a
                href={card.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#555555] hover:text-[#D4A853] transition-colors duration-200"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
