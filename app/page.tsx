"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { HOME_FAQ, FAQ_TOTAL, FAQ_CATS } from "./faq-data";

const SG = "var(--font-space-grotesk), sans-serif";
const IN = "var(--font-inter), sans-serif";
const JB = "var(--font-jetbrains-mono), monospace";
const GOLD = "#D4A853";

const WA =
  "https://wa.me/karvitalii?text=Hi%20Vitalii%2C%20I%20saw%20your%20site%20and%20want%20to%20talk%20about%20my%20operations.";
const CAL = "https://calendly.com/v-karasov-pm/30min";

type FeedItem = { time: string; mod: string; text: string; rev: number };

const FEED: FeedItem[] = [
  { time: "06:47 AM", mod: "LEAD", text: "Missed call recovered · text-back sent in 4 sec · $8,400 lead booked", rev: 8400 },
  { time: "08:12 AM", mod: "LEAD", text: "Website form filled · scored HOT · owner notified", rev: 6800 },
  { time: "09:15 AM", mod: "LEAD", text: "Angi lead deduplicated · already in CRM from last month", rev: 0 },
  { time: "10:33 AM", mod: "LEAD", text: "Cold lead re-engaged · 90-day silence · replied “still interested”", rev: 5600 },
  { time: "02:41 PM", mod: "LEAD", text: "Voicemail transcribed · classified urgent · SMS sent to on-call", rev: 0 },
  { time: "07:03 AM", mod: "ESTIMATE", text: "Estimate #218 · day 2 follow-up · client replied “🙏”", rev: 0 },
  { time: "09:22 AM", mod: "ESTIMATE", text: "Quote drafted from site photos · $14,200 · sent for approval", rev: 14200 },
  { time: "11:14 AM", mod: "ESTIMATE", text: "Estimate went quiet on day 5 · nudge scheduled · gentle tone", rev: 0 },
  { time: "01:30 PM", mod: "ESTIMATE", text: "Client asked “can you do it cheaper?” · 3 options drafted for owner", rev: 0 },
  { time: "03:15 PM", mod: "ESTIMATE", text: "Signed contract detected in Gmail · CRM updated · job created", rev: 24000 },
  { time: "06:12 AM", mod: "SUPPLIER", text: "Lumber order placed · Home Depot #4471 · $2,340", rev: 2340 },
  { time: "08:45 AM", mod: "SUPPLIER", text: "Invoice reconciled · flagged $340 mismatch on cement delivery", rev: 340 },
  { time: "10:20 AM", mod: "SUPPLIER", text: "Delivery delayed 2 days · project timeline adjusted · foreman alerted", rev: 0 },
  { time: "12:15 PM", mod: "SUPPLIER", text: "Recurring order triggered · drywall for Site B · standard SKU", rev: 1180 },
  { time: "04:30 PM", mod: "SUPPLIER", text: "Supplier email parsed · price change on rebar · logged for review", rev: 0 },
  { time: "07:30 AM", mod: "JOB", text: "Job #142 photos categorized · 47 images filed · Foundation phase", rev: 0 },
  { time: "09:45 AM", mod: "JOB", text: "Permit deadline in 3 days · reminder sent to office", rev: 0 },
  { time: "11:50 AM", mod: "JOB", text: "Change order documented · $2,800 · client signed via DocuSign", rev: 2800 },
  { time: "02:20 PM", mod: "JOB", text: "Warranty period ending · client contacted for annual check", rev: 0 },
  { time: "05:00 PM", mod: "JOB", text: "Completion photos requested from crew · WhatsApp thread opened", rev: 0 },
  { time: "07:15 AM", mod: "COMMS", text: "Field crew message translated · voice note → text summary", rev: 0 },
  { time: "10:30 AM", mod: "COMMS", text: "WhatsApp thread → CRM notes · no manual entry", rev: 0 },
  { time: "12:40 PM", mod: "COMMS", text: "Client asked status via SMS · auto-reply with photo update", rev: 0 },
  { time: "03:22 PM", mod: "COMMS", text: "Owner CC’d on 8 threads · dashboard shows only 2 need attention", rev: 0 },
  { time: "06:00 PM", mod: "COMMS", text: "Weekly recap sent to 12 clients · “here’s what happened this week”", rev: 0 },
  { time: "07:00 AM", mod: "REPORT", text: "Owner morning digest ready · 3 things that need your call today", rev: 0 },
  { time: "09:00 AM", mod: "REPORT", text: "Weekly financial rollup · gross margin per project", rev: 0 },
  { time: "11:00 AM", mod: "REPORT", text: "Client update generated · “Where’s my kitchen?” · sent with photos", rev: 0 },
  { time: "02:00 PM", mod: "REPORT", text: "Subcontractor performance report · on-time %, rework rate", rev: 0 },
  { time: "05:30 PM", mod: "REPORT", text: "Monthly investor summary drafted · numbers only, no fluff", rev: 0 },
  { time: "08:00 AM", mod: "DATA", text: "New knowledge indexed · 340 emails · searchable in 4 minutes", rev: 0 },
  { time: "10:15 AM", mod: "DATA", text: "Owner asked “who signed the Miller contract?” · answered in 3 sec", rev: 0 },
  { time: "12:30 PM", mod: "DATA", text: "Duplicate client records merged · 3 entries → 1 · history preserved", rev: 0 },
  { time: "02:45 PM", mod: "DATA", text: "Historical estimate pulled · similar project 2023 · $18K avg", rev: 0 },
  { time: "04:00 PM", mod: "DATA", text: "Vendor contact enriched · phone, address, tax ID auto-filled", rev: 0 },
  { time: "07:45 AM", mod: "CUSTOM", text: "Payroll draft ready · 8 crew · 312 hours · Friday disbursement", rev: 0 },
  { time: "09:30 AM", mod: "CUSTOM", text: "Insurance certificate expiring · renewal reminder sent", rev: 0 },
  { time: "11:20 AM", mod: "CUSTOM", text: "Google review response drafted · owner approved in 1 tap", rev: 0 },
  { time: "01:45 PM", mod: "CUSTOM", text: "Google Business Profile updated · new project photos", rev: 0 },
  { time: "04:15 PM", mod: "CUSTOM", text: "Lead source ROI calculated · Angi $412 CAC vs Google $187", rev: 0 },
];

const MODULES: [string, string][] = [
  ["▸ LEAD OPS", "Call answering, scoring, follow-up cadences, missed-call recovery. Every inbound handled in seconds."],
  ["▸ ESTIMATE OPS", "Estimate drafting from site photos, voice notes, price books and approved business rules — with human review before sending."],
  ["▸ PROJECT KNOWLEDGE", "A searchable brain for every project — blueprints, specs, contracts, emails, RFIs, submittals, meeting notes, photos. Ask in plain English: “what light fixtures are in the master bath?” — answer in three seconds."],
  ["▸ FIELD OPS", "Worker check-in, GPS verification, time tracking, daily reports, material requests, proof-of-work photos, voice notes turned into structured records."],
  ["▸ SUPPLIER OPS", "Purchase-order drafting and approval, delivery tracking, invoice matching, price-change alerts and recurring-order workflows."],
  ["▸ COMMS OPS", "Field-to-office translation. WhatsApp threads, voice notes and SMS parsed into structured records, routed to the right person, logged automatically."],
  ["▸ DOCUMENT OPS", "Automatic generation of RFIs, submittals, meeting minutes, daily reports, change orders, purchase orders, client updates. You review and approve. The system drafts."],
  ["▸ REPORT OPS", "Owner morning digest, weekly financial rollups, client progress updates, subcontractor performance, labor-hour tracking. Ask any question about your business — get an answer, not a report you have to read."],
  ["▸ COMPANY SOP", "Your standard operating procedures, videos, checklists and drawings — instantly retrievable. “How do we frame a pocket door?” gets an answer with photos and checklist attached."],
  ["▸ DECISION SUPPORT", "Schedule risks, budget risks, recurring project issues, material shortages, productivity trends — surfaced from your own data, not a benchmark report. Risks and patterns surfaced for management review — not autonomous project decisions."],
];

const STEPS: [string, string, string, boolean][] = [
  ["▸ 30 MIN", "Discovery", "You describe how jobs come in and where they leak. I ask specific questions. By the end I tell you what’s worth automating, what isn’t, what it costs, and how long. Written scope in 24 hours.", true],
  ["▸ 1-2 D", "Architecture", "System design before any code. You see the blueprint and approve it. If the architecture is wrong, we fix it on paper — not in production.", false],
  ["▸ 1-3 WK", "Build", "Daily or scheduled updates. Error handling, monitoring and fallbacks built in from the start. Nothing ships without testing.", false],
  ["▸ FINAL", "Deploy + own it", "Full documentation, source code, credentials — all yours from day one. The system is designed not to depend on me for normal daily operation — ongoing monitoring and improvements stay optional. Handoff call walks your team through everything.", false],
];

const WORLD: [string, string][] = [
  ["Your leads", " come from Google LSA, Angi, Thumbtack, Houzz, Instagram DMs and referrals — and half of them call, not email."],
  ["Your crews", " are in the field with phones, not laptops. Everything works over text, voice or a simple mobile action. Minimal new logins and no complex software for the field team to learn."],
  ["Your data", " lives in twelve places — Gmail, WhatsApp, spreadsheets, the CRM, QuickBooks, Google Drive, the whiteboard, three notebooks and one office manager’s head. I connect the systems worth keeping and create low-friction capture for everything that still happens in calls, messages, notebooks and people’s heads."],
  ["Your materials", " get ordered by phone or in a WhatsApp thread. Then nobody knows where the invoice went, or whether the price was right."],
  ["Your projects", " run late and over budget more often than they should — not because your crew can’t build, but because communication falls apart between the field and the office."],
  ["Your reality:", " nobody has time to “learn a new tool.” So there’s nothing to learn. The system runs underneath what you already use."],
];

type CaseItem = {
  num: string; title: string; hook: string; body: string; stack: string;
  demo: string | null; demoLabel: string; github: string | null; badge?: string; ndaNote?: string;
};
// Group A — client-facing contractor systems. Leads the Cases section.
const CASES_CONTRACTOR: CaseItem[] = [
  { num: "01", title: "Private field operations & company knowledge system", hook: "Multilingual field reporting, attendance controls and company records—deployed in infrastructure controlled by the client.", badge: "CLIENT PRODUCTION · US PROJECT-BASED BUSINESS · NDA PROTECTED", body: "Built for a US project-based business coordinating multilingual employees across active work locations. The system gives field staff a simple way to check in and out, verify location, explain attendance exceptions and submit daily voice reports in their preferred language. Reports are transcribed, structured and normalized into English for management.\n\nManagers receive attendance history, exception alerts, project-level visibility, employee and location controls, role-based access and exportable records. A separate read-only ingestion service archives company email and attachments into client-controlled storage, with resumable processing and duplicate protection—creating the foundation for internal knowledge retrieval.\n\nThe system was deployed in an environment controlled by the client, with operational controls, accounts, source code and documentation handed over.", stack: "One-tap field reporting · multilingual voice-to-record processing · client-controlled deployment", demo: null, demoLabel: "", github: null, ndaNote: "Client identity, architecture, business data and project-specific metrics withheld under NDA." },
  { num: "02", title: "ATAMAN Studio — lead-to-contract system", hook: "Seven automations running the lead lifecycle end to end.", badge: "CLIENT · PRODUCTION · LA DESIGN-BUILD", body: "Seven connected automations covering intake, qualification, call transcription, follow-up and contract detection. Every inbound lead handled without a single manual touch — every booked call becomes a lead card, every inbound email is read and routed, every sales call is transcribed with a reply drafted, and follow-ups fire on their own until the client replies.", stack: "Make.com · ClickUp · OpenAI · Otter · Calendly · Gmail", demo: null, demoLabel: "", github: null },
  { num: "03", title: "Instant lead response & scoring", hook: "Every lead answered and scored in under 5 seconds.", body: "Inbound leads were falling through the cracks — slow responses, no prioritization, manual copy-paste into spreadsheets. Now hot leads get flagged for an immediate call, warm ones enter a nurture sequence, junk gets filtered out. Speed-to-lead wins jobs: the first company to respond wins most of them.", stack: "n8n · Claude API · Google Sheets · REST API", demo: "https://www.loom.com/share/9c2ef40dee6543f897060ef4b8596d74", demoLabel: "Watch demo", github: null },
  { num: "04", title: "Marketing content on autopilot", hook: "30 branded posts for $1 in AI costs. Zero manual writing.", body: "A closed-loop content system: your brand voice, your audience’s pain points and your best-performing posts stored as knowledge; AI drafts platform-ready posts on schedule; engagement data feeds back in, so the system writes better every cycle. Your company stays visible while you run jobs.", stack: "Make.com · Claude API · Pinecone · Buffer · RAG", demo: "https://www.loom.com/share/3e08552f874f407bad4b558bd0bdf9d8", demoLabel: "Watch demo", github: null },
  { num: "05", title: "Project photo AI", hook: "121 job-site photos sorted in 15 minutes for $0.35. Open source.", body: "Every project generates hundreds of photos — progress, finished work, before-and-afters. This tool reads every photo, scores it 1-1000 for quality and picks the keepers automatically — for the portfolio, the client and the marketing folder.", stack: "Python · OpenAI Vision · Pillow · rawpy", demo: "https://www.loom.com/share/adb04c24f46540d8b544de8e488eb88c", demoLabel: "Watch demo", github: "https://github.com/karasov-co/photo-ai-toolkit" },
];

// Group B — not contractor builds; the engineering depth behind them.
// Presented tighter and lower-emphasis, with Sentinel kept prominent.
const CASES_DEPTH: CaseItem[] = [
  { num: "·", title: "Market & competitor intelligence", hook: "3+ days of research in under 5 minutes, every claim sourced.", body: "A form-triggered pipeline: five research workflows run in parallel and return a full competitive picture — pricing, positioning, trends — with every claim backed by a real source. Delivered to a spreadsheet and Slack automatically.", stack: "n8n · Gemini Deep Research · Airtable · Slack", demo: "https://www.loom.com/share/6a08c5221efd444db95ee0275247f288", demoLabel: "Watch demo", github: null },
  { num: "·", title: "Research engine", hook: "3 hours to 2 minutes. One click, fully automated.", body: "A client’s team was burning 15+ hours a week on manual research and analysis. I found the bottleneck and replaced it with a pipeline of four specialized AI roles — built and deployed in 5 days.", stack: "n8n · Claude API · Supabase pgvector · Webhooks", demo: "https://www.loom.com/share/d99029c2ac5b4969823c818cb81ef0d5", demoLabel: "Watch demo", github: null },
  { num: "·", title: "Sentinel — adversarial AI court", hook: "Winner at the AI Agent Olympics — Milan AI Week 2026.", body: "Not a client build — the engineering depth behind the client systems. A three-layer multi-agent court that audits police bodycam footage, built solo at Europe’s largest AI event. Realtime transcription flags violations in under 2 seconds; a Prosecution agent argues against a Defense agent while a Vision agent reads the video; a Judge issues per-rule verdicts drillable to the exact video frame. A court-defensible audit at ~$0.10–0.20 per recording.", stack: "Next.js 16 · FastAPI · Speechmatics · Gemini 3.1 Pro · FAISS", demo: "https://sentinel-audit.co", demoLabel: "Live demo", github: "https://github.com/karasov-co/sentinel-audit" },
];


// Tools the client's team already uses — grouped for scannability, not a logo wall.
const TOOL_GROUPS: [string, string][] = [
  ["PROJECTS & FIELD", "Buildertrend · JobTread · Houzz Pro · CompanyCam · ClickUp"],
  ["FINANCE & FILES", "QuickBooks · Google Workspace · Microsoft 365 · Airtable"],
  ["CALLS & MEETINGS", "Quo (formerly OpenPhone) · CallRail · Zoom · Google Meet · Microsoft Teams · Otter · Fireflies · Fathom"],
  ["CRM & COMMUNICATIONS", "HubSpot · Pipedrive · Zoho · WhatsApp Business · SMS · Slack"],
  ["AUTOMATION LAYER", "n8n · Make · APIs · webhooks · client-controlled infrastructure"],
];

// Capability groups behind the "under the hood" accordion.
const HOOD_GROUPS: [string, string][] = [
  ["ARCHITECTURE", "APIs · webhooks · event-driven workflows · multi-tenant routing"],
  ["AI & KNOWLEDGE", "RAG · hybrid retrieval · multi-agent orchestration · grounded answers · evaluation"],
  ["VOICE & CALLS", "Realtime and batch transcription · diarization · multilingual normalization · summaries · action extraction"],
  ["SECURITY & OWNERSHIP", "Role-based access · client-controlled deployment · credential separation · audit logs"],
  ["RELIABILITY", "Retries · fallbacks · resumable processing · duplicate protection · structured logging · monitoring"],
  ["DELIVERY", "Python · FastAPI · PostgreSQL · n8n · Make · Docker · GitHub Actions · Vercel · GCP · Vultr"],
];

const PRICE_DETAILS: { trigger: string; heading: string; items: string[]; note: string }[] = [
  {
    trigger: "See everything included — 19 items",
    heading: "What the pilot includes",
    items: [
      "Operational discovery session",
      "One clearly defined business bottleneck",
      "Baseline and measurable success criteria",
      "Current workflow map",
      "Existing tools and integration map",
      "Data-flow map",
      "Decision and human-approval rules",
      "Exception and failure-case catalogue",
      "Security and access design",
      "Fixed implementation scope",
      "Client-controlled deployment",
      "Production implementation",
      "Test scenarios and acceptance checks",
      "Monitoring and failure alerts",
      "Audit trail where the workflow requires it",
      "Source code and credentials handover",
      "Technical and operational documentation",
      "Team handoff and recorded walkthrough",
      "14-day post-launch stabilization period",
    ],
    note: "Exact components depend on the workflow. Everything included in your pilot is defined and priced before implementation starts.",
  },
  {
    trigger: "See everything included — 18 items",
    heading: "What ongoing operation includes",
    items: [
      "Continuous workflow health monitoring",
      "Integration and API failure monitoring",
      "Same-business-day incident acknowledgement",
      "Failed-run investigation",
      "Retry and fallback maintenance",
      "Model-output quality review",
      "Prompt and business-rule adjustments",
      "Data-quality checks",
      "Credential and dependency checks",
      "Access and permission review",
      "Backup and recovery checks",
      "Monthly performance summary",
      "Monthly operational review",
      "Minor improvements within agreed monthly capacity",
      "Documentation updates",
      "Team support for system-related questions",
      "Quarterly system roadmap",
      "Complete ownership retained by the client",
    ],
    note: "Operate begins after a system is live. Monthly capacity and response expectations are agreed in advance. New systems or major modules are scoped separately.",
  },
  {
    trigger: "See everything included — 20 items",
    heading: "What a platform engagement can include",
    items: [
      "Company-wide operational discovery",
      "Department and stakeholder interviews",
      "Current-system and process inventory",
      "Bottleneck and opportunity prioritization",
      "Phased implementation roadmap",
      "Cross-system data architecture",
      "Identity, access and permission design",
      "Data-governance and retention rules",
      "Central project knowledge layer",
      "Lead and estimate workflows",
      "Field-to-office communication workflows",
      "Supplier, document and reporting workflows",
      "Human-approval and escalation rules",
      "Monitoring, logging and audit trails",
      "Testing and acceptance framework",
      "Production deployment in 2–4 week increments",
      "Team training and adoption support",
      "Technical and operational documentation",
      "Performance and value reviews",
      "Client ownership of code, credentials and infrastructure",
    ],
    note: "Every platform engagement is designed and delivered in phases. Individual modules must produce operational value before the next phase begins.",
  },
];

const container = { maxWidth: 1240, margin: "0 auto", padding: "60px 32px", boxSizing: "border-box" as const };
const eyebrow = { margin: "0 0 10px", fontFamily: JB, fontSize: 12, color: "#A98A47", letterSpacing: "0.2em" };
const goldBorder = { borderTop: "1px solid rgba(212,168,83,0.4)" };

export default function Page() {
  const [feed, setFeed] = useState<(FeedItem & { key: string })[]>([]);
  const [tick, setTick] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  // Keyed "a-<i>" / "b-<i>" so the two case groups share one open-at-a-time state.
  const [openCase, setOpenCase] = useState<string | null>("a-0");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openPrice, setOpenPrice] = useState<number | null>(null);
  const [hoodOpen, setHoodOpen] = useState(false);

  const keyRef = useRef(0);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const shuffle = (arr: FeedItem[]) => {
      for (let k = arr.length - 1; k > 0; k--) {
        const j = Math.floor(Math.random() * (k + 1));
        [arr[k], arr[j]] = [arr[j], arr[k]];
      }
      return arr;
    };
    let pool = shuffle(FEED.slice());
    let i = 0;
    const push = () => {
      if (i >= pool.length) { pool = shuffle(FEED.slice()); i = 0; }
      const src = pool[i];
      i++;
      const k = keyRef.current++;
      setFeed((prev) => prev.concat([{ ...src, key: "f" + k }]).slice(-6));
      setTick(k + 1);
      setRevenue((r) => r + src.rev);
    };
    push(); push(); push();
    const timer = setInterval(push, 1800);
    return () => clearInterval(timer);
  }, []);

  const navlinks = [
    ["#build", "What I build"], ["#data", "Data"], ["#scope", "Scope"],
    ["#cases", "Cases"], ["#offer", "Pricing"], ["#faq", "FAQ"],
  ];

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      {/* Sticky WhatsApp (mobile only) */}
      <a
        className="fd-sticky-wa" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp"
        style={{ display: "none", position: "fixed", bottom: 20, right: 20, zIndex: 60, width: 60, height: 60, borderRadius: "50%", background: GOLD, alignItems: "center", justifyContent: "center", boxShadow: "0 6px 24px rgba(0,0,0,0.5)" }}
      >
        <svg style={{ width: 30, height: 30 }} fill="#0A0A0A" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" /></svg>
      </a>

      {/* Nav */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, transition: "background 0.3s, border-color 0.3s", background: scrolled ? "rgba(10,10,10,0.92)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", WebkitBackdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid #1E1E1E" : "1px solid transparent" }}>
        <nav className="fd-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#top" style={{ display: "flex", alignItems: "baseline", gap: 10, color: "#EDEDED" }}>
            <span style={{ fontWeight: 700, letterSpacing: "0.12em", fontSize: 13, fontFamily: SG }}>KARASOV <span style={{ color: GOLD }}>SYSTEMS</span></span>
            <span className="fd-hide" style={{ color: "#666666", fontSize: 11, fontFamily: JB }}>by Vitalii Karasov</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            {navlinks.map(([href, label]) => (
              <a key={href} href={href} className="fd-hide ks-navlink" style={{ color: "#8A8A8A", fontSize: 13 }}>{label}</a>
            ))}
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="ks-navcta" style={{ border: "1px solid rgba(212,168,83,0.5)", color: GOLD, fontWeight: 600, fontSize: 13, padding: "9px 18px", borderRadius: 6, fontFamily: SG }}>Book a call</a>
          </div>
        </nav>
      </header>

      <main id="top">

        {/* Hero */}
        <section style={{ backgroundImage: "linear-gradient(rgba(212,168,83,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" }}>
          <div className="fd-pad fd-2col" style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 32px 48px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "start", boxSizing: "border-box" }}>
            <div>
              <div style={{ marginBottom: 32 }}>
                <p style={{ margin: "0 0 8px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)", letterSpacing: "0.1em", color: "#EDEDED", lineHeight: 1 }}>KARASOV <span style={{ color: GOLD }}>SYSTEMS</span></p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "block", width: 44, height: 1, background: GOLD }} />
                  <span style={{ fontFamily: JB, fontSize: 12, color: "#8A8A8A" }}>by Vitalii Karasov</span>
                </div>
              </div>

              <h1 style={{ margin: "0 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(2.5rem, 5.6vw, 4.8rem)", lineHeight: 0.98, letterSpacing: "-0.035em", color: "#EDEDED", textWrap: "balance" }}>The operational brain your company <span style={{ color: GOLD }}>was supposed to have.</span></h1>

              <div aria-hidden="true" style={{ width: 320, maxWidth: "100%", height: 13, margin: "0 0 24px", borderTop: "1px solid rgba(212,168,83,0.4)", backgroundImage: "repeating-linear-gradient(90deg, rgba(212,168,83,0.3) 0px, rgba(212,168,83,0.3) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(90deg, rgba(212,168,83,0.45) 0px, rgba(212,168,83,0.45) 1px, transparent 1px, transparent 80px)", backgroundSize: "100% 6px, 100% 13px", backgroundRepeat: "repeat-x", backgroundPosition: "top left" }} />

              <p style={{ margin: "0 0 16px", fontSize: "clamp(1rem, 1.7vw, 1.15rem)", color: "#9A9A9A", maxWidth: 540, lineHeight: 1.65, textWrap: "pretty" }}>Private AI operations systems for design-build, remodeling and specialty contractor companies. Leads, estimates, project knowledge, field reporting, documents and communications—connected behind the tools your team already uses.</p>
              <p style={{ margin: "0 0 32px", fontFamily: SG, fontWeight: 600, fontSize: "clamp(1rem, 1.7vw, 1.15rem)", color: GOLD, lineHeight: 1.5 }}>Start with one workflow. Grow into a full company system.</p>

              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
                <img src="/images/portrait-hero.jpg" alt="Vitalii Karasov" style={{ width: 68, height: 68, borderRadius: "50%", objectFit: "cover", objectPosition: "top", border: "1px solid rgba(212,168,83,0.4)", flexShrink: 0 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <p style={{ margin: 0, fontFamily: JB, fontSize: 12, color: "#8A8A8A", lineHeight: 1.6 }}><span style={{ color: GOLD }}>▸</span> <span style={{ color: GOLD }}>Winner, AI Agent Olympics — Milan AI Week 2026</span>, Europe’s largest AI event</p>
                  <p style={{ margin: 0, fontFamily: JB, fontSize: 12, color: "#8A8A8A", lineHeight: 1.6 }}><span style={{ color: GOLD }}>▸</span> US · UAE · EU · same-business-day response</p>
                </div>
              </div>

              <div className="fd-wrap" style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="ks-btn-gold" style={{ background: GOLD, color: "#0A0A0A", fontWeight: 600, padding: "16px 30px", borderRadius: 8, fontSize: 14, fontFamily: SG, minHeight: 24 }}>💬 Describe your bottleneck</a>
                <a href={CAL} target="_blank" rel="noopener noreferrer" className="ks-btn-outline" style={{ background: "#1E1B12", border: "1px solid rgba(212,168,83,0.5)", color: "#E8C46A", fontWeight: 600, padding: "16px 30px", borderRadius: 8, fontSize: 14, fontFamily: SG }}>📅 Book a 30-min call</a>
              </div>
              <p style={{ margin: "16px 0 0", fontSize: 13, color: "#777777", lineHeight: 1.6, maxWidth: 460 }}>Prefer async? Send the workflow, the tools you use and what keeps breaking. Same-business-day reply.</p>
            </div>

            {/* Live ops feed */}
            <div style={{ border: "1px solid #1E1E1E", borderRadius: 12, background: "#0E0E0E", overflow: "hidden", position: "sticky", top: 90 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid #1E1E1E" }}>
                <span style={{ fontFamily: JB, fontSize: 11, letterSpacing: "0.14em", color: "#777777" }}>ONE DAY · ONE SYSTEM</span>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: JB, fontSize: 11, color: "#4ade80" }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", animation: "pulseDot 1.6s ease-in-out infinite" }} />LIVE</span>
              </div>
              <div style={{ padding: "8px 0", minHeight: 400, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                {feed.map((item) => (
                  <div key={item.key} style={{ display: "flex", gap: 12, padding: "13px 20px", borderTop: "1px solid #151515", animation: "feedIn 0.5s cubic-bezier(0.16,1,0.3,1) both", alignItems: "baseline" }}>
                    <span style={{ fontFamily: JB, fontSize: 10, color: "#555555", width: 52, flexShrink: 0 }}>{item.time}</span>
                    <span style={{ fontFamily: JB, fontSize: 9, letterSpacing: "0.14em", color: "#8A6F3A", width: 60, flexShrink: 0 }}>{item.mod}</span>
                    <p style={{ margin: 0, fontSize: 13, color: "#EDEDED", lineHeight: 1.5, fontFamily: JB, minWidth: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
              <div style={{ padding: "13px 20px", borderTop: "1px solid #1E1E1E", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: JB, fontSize: 11, color: "#666666" }}>while you were reading this</span>
                <span style={{ fontFamily: JB, fontSize: 11, color: GOLD, textAlign: "right" }}>{tick} actions · 0 extra hires needed · {"$" + revenue.toLocaleString("en-US")} tracked</span>
              </div>
            </div>
          </div>
        </section>

        {/* 01 You know these mornings */}
        <section id="pain" style={goldBorder}>
          <div className="fd-pad" style={container}>
            <p style={{ ...eyebrow, margin: "0 0 48px" }}>01 — YOU KNOW THESE MORNINGS</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 52, maxWidth: 940 }}>
              <p style={painQuote()}>{"“The estimate went out Tuesday. Then nothing. Everyone’s on site — "}<span style={{ color: GOLD }}>{"nobody’s job is to follow up.”"}</span></p>
              <p style={painQuote(true)}>{"“The whole company lives in my head. I take a week off — "}<span style={{ color: GOLD }}>{"everything stops.”"}</span></p>
              <p style={painQuote()}>{"A client asks “what fixtures are approved for the master bath?” — and three people spend forty minutes searching emails, drawings and the whiteboard "}<span style={{ color: GOLD }}>{"for an answer that was decided six weeks ago."}</span></p>
              <p style={painQuote(true)}>{"Materials get ordered over the phone and in a WhatsApp thread. Then "}<span style={{ color: GOLD }}>{"nobody knows where the invoice went."}</span></p>
              <p style={painQuote()}>{"Your projects run late and over budget more often than they should — not because your crew can’t build, but because "}<span style={{ color: GOLD }}>{"information falls apart between the field, the office, and the client."}</span></p>
              <p style={{ margin: 0, fontFamily: JB, fontSize: 14, color: GOLD, letterSpacing: "0.08em" }}>This is what I fix.</p>
            </div>
          </div>
        </section>

        {/* 02 What I build */}
        <section id="build" style={{ ...goldBorder, background: "#0C0C0C" }}>
          <div className="fd-pad" style={container}>
            <p style={eyebrow}>02 — WHAT I BUILD</p>
            <h2 style={{ margin: "0 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)", letterSpacing: "-0.02em", lineHeight: 1.12, color: "#EDEDED", maxWidth: 860, textWrap: "balance" }}>An operational layer that captures, organizes and retrieves the information your business already generates — <span style={{ color: GOLD }}>without forcing the field team to re-enter it.</span></h2>
            <p style={{ margin: "0 0 44px", fontSize: 15, color: "#9A9A9A", lineHeight: 1.7, maxWidth: 820 }}>These are modular capabilities, not a required package. Most engagements begin with one workflow and expand only after it proves its value.</p>

            <div style={{ borderTop: "1px solid #1E1E1E" }}>
              {MODULES.map(([label, desc]) => (
                <div key={label} className="fd-stack" style={{ display: "flex", gap: 24, padding: "20px 4px", borderBottom: "1px solid #1E1E1E", alignItems: "baseline" }}>
                  <span style={{ fontFamily: JB, fontSize: 13, color: GOLD, width: 210, flexShrink: 0, letterSpacing: "0.08em" }}>{label}</span>
                  <span style={{ fontSize: 14, color: "#9A9A9A", lineHeight: 1.6 }}>{desc}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, border: "1px solid rgba(212,168,83,0.3)", borderRadius: 12, padding: "32px 34px", background: "linear-gradient(180deg, rgba(212,168,83,0.04), transparent 60%)" }}>
              <p style={{ margin: "0 0 12px", fontFamily: JB, fontSize: 11, letterSpacing: "0.2em", color: "#A98A47" }}>VOICE-FIRST WHERE IT MATTERS</p>
              <p style={{ margin: 0, fontSize: 15, color: "#C9C9C9", lineHeight: 1.75, maxWidth: 820 }}>Most operational data never gets typed. It lives in phone calls, voice notes, WhatsApp threads, photos on someone’s phone. My systems listen, transcribe, extract, file — so your crew keeps talking the way they already talk, and the office gets structured data on the other side.</p>
            </div>
          </div>
        </section>

        {/* 03 Data handling */}
        <section id="data" style={goldBorder}>
          <div className="fd-pad" style={container}>
            <p style={eyebrow}>03 — DATA HANDLING</p>
            <h2 style={{ margin: "0 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.7rem, 3.4vw, 2.5rem)", letterSpacing: "-0.02em", lineHeight: 1.08, color: "#EDEDED", maxWidth: 820, textWrap: "balance" }}>Your company&rsquo;s records end up inside this system. <span style={{ color: GOLD }}>Here is exactly how they are handled.</span></h2>
            <p style={{ margin: "0 0 44px", fontSize: 15, color: "#9A9A9A", lineHeight: 1.75, maxWidth: 780 }}>Most automation vendors selling to contractors never raise this subject at all. It belongs in the architecture conversation, before anything is built — so it is a section on this page rather than a clause you find later.</p>

            <div className="fd-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#1E1E1E", border: "1px solid #1E1E1E", borderRadius: 12, overflow: "hidden" }}>
              {([
                ["WHAT ENDS UP INSIDE", "Client contracts, employee records, payroll data, financials, project IP, and photos of private property. Operational data about real people and real money — not marketing copy."],
                ["WHO CAN SEE WHAT", "Role-based access from the first version. The field sees what the field needs; payroll and financials stay with the people who already have that authority. Credentials are separated per service, never shared into one master login."],
                ["WHERE IT LIVES", "In infrastructure the client controls. Accounts, keys and source code are in your name from day one — so access can be revoked without asking me, and nothing depends on my continued goodwill."],
                ["HOW LONG IT IS KEPT", "Retention rules are defined during architecture: what is kept, for how long, and what gets deleted on schedule. Recordings and transcripts are treated as the sensitive records they are, not as free storage."],
                ["WHAT IS AUDITABLE", "An audit trail on the workflows that need one — who approved what, when a record changed, what the system did on its own. If a decision has to be defended later, the evidence exists."],
              ] as [string, string][]).map(([label, body], i, arr) => (
                // Odd count in a 2-col grid: the last card spans the full row.
                <div key={label} style={{ background: "#0E0E0E", padding: "26px 28px", gridColumn: i === arr.length - 1 ? "1 / -1" : undefined }}>
                  <p style={{ margin: "0 0 10px", fontFamily: JB, fontSize: 11, letterSpacing: "0.18em", color: "#A98A47" }}>{label}</p>
                  <p style={{ margin: 0, fontSize: 14, color: "#9A9A9A", lineHeight: 1.7, maxWidth: i === arr.length - 1 ? 820 : undefined }}>{body}</p>
                </div>
              ))}
            </div>

            <p style={{ margin: "28px 0 0", fontSize: 14.5, color: "#9A9A9A", lineHeight: 1.8, maxWidth: 780 }}>Where formal legal compliance is required, implementation is aligned with the client&rsquo;s legal counsel. This discipline is not a preference — before AI systems I ran operations at a humanitarian organization handling personal data of vulnerable populations, under legal and criminal liability for data integrity and privacy compliance: 1.5M+ PLN operational budget, zero audit findings.</p>
          </div>
        </section>

        {/* 04 Scope */}
        <section id="scope" style={goldBorder}>
          <div className="fd-pad" style={container}>
            <p style={eyebrow}>04 — SCOPE</p>
            <h2 style={{ margin: "0 0 40px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.03, color: "#EDEDED", maxWidth: 720 }}>Same principles, three depths of engagement.</h2>
            <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 24 }}>
              <p style={{ margin: 0, fontSize: 16, color: "#9A9A9A", lineHeight: 1.8 }}>Some clients start with one broken workflow and stay there. Some start with one and grow into a full company operating layer over 6-18 months. The system is designed to support both.</p>
              <p style={{ margin: 0, fontSize: 16, color: "#9A9A9A", lineHeight: 1.8 }}>The foundation is always the same: capture what’s already happening, organize it automatically, make it retrievable, then let the automation grow on top of the data — never the other way around.</p>
              <p style={{ margin: 0, fontFamily: SG, fontWeight: 600, fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: GOLD, lineHeight: 1.5 }}>Reliable capture comes first. Automation comes second. That’s the order that survives.</p>
            </div>
          </div>
        </section>

        {/* 04 Cases */}
        <section id="cases" style={{ ...goldBorder, background: "#0C0C0C" }}>
          <div className="fd-pad" style={container}>
            <p style={eyebrow}>05 — CASES</p>
            <h2 style={{ margin: "0 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.03, color: "#EDEDED", maxWidth: 760 }}>Five contractor systems. Three that show the engineering depth.</h2>
            <p style={{ margin: "0 0 56px", fontSize: 16, color: "#9A9A9A", lineHeight: 1.7, maxWidth: 720 }}>Eight selected examples from 32 systems built — client production work, internal tools and open-source builds. Client engagements are deliberately few: two to three new ones a quarter. The rest of the count is tooling I build for my own delivery and release publicly.</p>

            <div className="fd-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#1E1E1E", border: "1px solid #1E1E1E", borderRadius: 12, overflow: "hidden", marginBottom: 64 }}>
              {([["<5s", "Every lead answered and scored — hot ones flagged for an immediate call. The first company to respond wins most jobs."], ["2·5·10", "Day follow-up cadence on every estimate — stops itself the second the client replies. No deal goes quiet unnoticed."], ["0", "Manual CRM upkeep. Every call transcribed, summarized and filed; every email routed. It just stays correct."]] as [string, string][]).map(([n, d]) => (
                <div key={n} style={{ background: "#0E0E0E", padding: "32px 28px" }}>
                  <div style={{ fontFamily: SG, fontWeight: 700, fontSize: "clamp(2.4rem, 4vw, 3.4rem)", color: GOLD, lineHeight: 1, letterSpacing: "-0.03em" }}>{n}</div>
                  <p style={{ margin: "14px 0 0", fontSize: 14, color: "#9A9A9A", lineHeight: 1.6 }}>{d}</p>
                </div>
              ))}
            </div>

            {/* Group A — contractor systems */}
            <p style={{ margin: "0 0 6px", fontFamily: JB, fontSize: 11, letterSpacing: "0.2em", color: "#A98A47" }}>CONTRACTOR SYSTEMS</p>
            <p style={{ margin: "0 0 18px", fontSize: 14, color: "#9A9A9A", lineHeight: 1.7, maxWidth: 720 }}>Built for contractor and design-build operations — leads, estimates, field reporting, company knowledge and marketing.</p>
            <div style={{ borderTop: "1px solid #1E1E1E" }}>
              {CASES_CONTRACTOR.map((c, i) => (
                <CaseRow key={c.title} c={c} open={openCase === `a-${i}`} onToggle={() => setOpenCase(openCase === `a-${i}` ? null : `a-${i}`)} />
              ))}
            </div>
            <p style={{ margin: "20px 0 0", fontSize: 13, color: "#666666", lineHeight: 1.6 }}>Most client work runs under strict NDA and isn’t shown here — clients don’t want their internal operations public. References available on request.</p>

            {/* Group B — engineering depth */}
            <p style={{ margin: "56px 0 6px", fontFamily: JB, fontSize: 11, letterSpacing: "0.2em", color: "#777777" }}>ENGINEERING DEPTH</p>
            <p style={{ margin: "0 0 18px", fontSize: 14, color: "#9A9A9A", lineHeight: 1.7, maxWidth: 720 }}>These are not contractor builds. They are the engineering depth behind the contractor builds — retrieval, multi-agent reasoning and realtime processing, proven where the constraints were harder.</p>
            <div style={{ borderTop: "1px solid #1E1E1E" }}>
              {CASES_DEPTH.map((c, i) => (
                <CaseRow key={c.title} c={c} compact open={openCase === `b-${i}`} onToggle={() => setOpenCase(openCase === `b-${i}` ? null : `b-${i}`)} />
              ))}
            </div>
          </div>
        </section>

        {/* 05 Pricing */}
        <section id="offer" style={goldBorder}>
          <div className="fd-pad" style={container}>
            <p style={eyebrow}>06 — PRICING</p>
            <h2 style={{ margin: "0 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.03, color: "#EDEDED", maxWidth: 700 }}>Start with one bottleneck. Grow as far as the math takes you.</h2>
            <p style={{ margin: "0 0 56px", fontSize: 16, color: "#9A9A9A", lineHeight: 1.7, maxWidth: 720 }}>Not a template installation. Each engagement covers the process, decisions, exceptions, infrastructure and handoff required to make the system part of daily operations.</p>

            <div className="fd-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, alignItems: "start" }}>
              <PriceCard index={0} highlight label="PILOT" labelColor="#A98A47" noteColor="#A98A47" note="FIXED PRICE" price="$3,000 – $8,000" bullets={["One system, one bottleneck, live in 2-4 weeks.", "Scoped and quoted before you commit.", "50% at signature, 50% at launch.", "Yours to keep — source code, credentials, documentation."]} details={PRICE_DETAILS[0]} open={openPrice === 0} onToggle={() => setOpenPrice(openPrice === 0 ? null : 0)} />
              <PriceCard index={1} label="OPERATE" labelColor="#777777" noteColor="#777777" note="MONTH-TO-MONTH" price={<>from $2,000<span style={{ fontSize: "0.55em", color: "#777777" }}>/mo</span></>} bullets={["Ongoing partnership after a system is live.", "Monitoring, same-business-day response, monthly improvements.", "New modules added as your business grows.", "Cancel anytime, keep everything."]} details={PRICE_DETAILS[1]} open={openPrice === 1} onToggle={() => setOpenPrice(openPrice === 1 ? null : 1)} />
              <PriceCard index={2} label="PLATFORM" labelColor="#777777" noteColor="#777777" note="SCOPED PER BUSINESS · NDA-FRIENDLY" price="engagement" bullets={["Full operational layer, built in phases over 6-18 months.", "Voice-first interface, project knowledge base, multi-stakeholder coordination, document generation, decision support.", "Delivered as a working system in 2-4 week increments — not a deck, not a pilot that stalls."]} details={PRICE_DETAILS[2]} open={openPrice === 2} onToggle={() => setOpenPrice(openPrice === 2 ? null : 2)} />
            </div>

            <div className="fd-stack" style={{ display: "flex", gap: 48, marginTop: 48, alignItems: "baseline" }}>
              <p style={{ flex: 1, margin: 0, fontSize: 14, color: "#808080", lineHeight: 1.8 }}>Equity or revenue-share arrangements available for early-stage companies with strong traction.</p>
              <p style={{ flex: 1, margin: 0, fontSize: 14, color: "#9A9A9A", lineHeight: 1.8, textAlign: "right" }}><a href={WA} target="_blank" rel="noopener noreferrer" className="ks-gold" style={{ color: GOLD, fontWeight: 500 }}>Message on WhatsApp</a> to start a conversation, or <a href={CAL} target="_blank" rel="noopener noreferrer" className="ks-gold" style={{ color: GOLD, fontWeight: 500 }}>book a 30-min call</a> if you prefer.</p>
            </div>
          </div>
        </section>

        {/* 06 How it lands + 07 Your world */}
        <section id="process" style={{ ...goldBorder, background: "#0C0C0C" }}>
          <div className="fd-pad fd-2col" style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <p style={eyebrow}>07 — HOW IT LANDS</p>
              <h2 style={{ margin: "0 0 40px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#EDEDED" }}>Four steps.<br />No black box.</h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {STEPS.map(([time, title, body, first], idx) => (
                  <div key={title} style={{ display: "flex", gap: 20, padding: "20px 0", borderTop: "1px solid #1E1E1E", borderBottom: idx === STEPS.length - 1 ? "1px solid #1E1E1E" : undefined }}>
                    <span style={{ fontFamily: JB, fontSize: 12, color: first ? "#A98A47" : "#777777", width: 100, flexShrink: 0 }}>{time}</span>
                    <div>
                      <h3 style={{ margin: "0 0 6px", fontFamily: SG, fontWeight: 700, fontSize: 16, color: "#EDEDED" }}>{title}</h3>
                      <p style={{ margin: 0, fontSize: 14, color: "#9A9A9A", lineHeight: 1.65 }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ margin: "24px 0 0", fontSize: 13, color: "#808080", lineHeight: 1.7 }}>For phased platform builds, this same rhythm repeats in 2-4 week increments. Each increment ships something that works before we scope the next one.</p>
            </div>
            <div>
              <p style={eyebrow}>08 — YOUR WORLD</p>
              <h2 style={{ margin: "0 0 40px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#EDEDED" }}>I know how your business actually runs.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {WORLD.map(([lead, rest]) => (
                  <p key={lead} style={{ margin: 0, fontSize: 15, color: "#9A9A9A", lineHeight: 1.75 }}><span style={{ color: "#EDEDED", fontWeight: 500 }}>{lead}</span>{rest}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 08 Who builds it */}
        <section id="about" style={{ ...goldBorder, background: "#0C0C0C" }}>
          <div className="fd-pad fd-2col" style={{ maxWidth: 1240, margin: "0 auto", padding: "60px 32px", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "64px 80px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <p style={{ margin: 0, fontFamily: JB, fontSize: 12, color: "#A98A47", letterSpacing: "0.2em" }}>09 — WHO BUILDS IT</p>
              <img src="/images/portrait-about.jpg" alt="Vitalii Karasov" style={{ width: "100%", maxWidth: 340, aspectRatio: "3/4", objectFit: "cover", borderRadius: 12, border: "1px solid #1E1E1E", filter: "grayscale(25%)" }} />
              <div style={{ border: "1px solid #1E1E1E", borderRadius: 12, padding: "22px 24px", background: "#0E0E0E" }}>
                <p style={{ margin: "0 0 10px", fontFamily: JB, fontSize: 11, letterSpacing: "0.2em", color: "#A98A47" }}>HOW YOUR DATA IS HANDLED</p>
                <p style={{ margin: 0, fontSize: 13.5, color: "#9A9A9A", lineHeight: 1.75 }}>Access, ownership and retention are decided during architecture, not after launch. <a href="#data" className="ks-gold" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 3 }}>See section 03</a>.</p>
              </div>
            </div>
            <div>
              <h2 style={{ margin: "28px 0 20px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "#EDEDED" }}>Vitalii Karasov — an AI systems architect and product manager who builds.</h2>
              <p style={{ margin: "0 0 14px", fontSize: 15, color: "#9A9A9A", lineHeight: 1.8 }}>Five years in operations, product and delivery before going full-time on AI systems: EdTech launch, media production, humanitarian crisis logistics with a 1.5M+ PLN budget and zero audit findings. MSc Project Management. PRINCE2.</p>
              <p style={{ margin: "0 0 14px", fontSize: 15, color: "#9A9A9A", lineHeight: 1.8 }}>In 2026 my solo build won at the AI Agent Olympics at Milan AI Week — Europe’s largest AI event.</p>
              <p style={{ margin: "0 0 14px", fontSize: 15, color: "#EDEDED", lineHeight: 1.8, fontWeight: 500 }}>Now I build one thing: private operational systems for owner-led design-build, remodeling and specialty contractor companies. Deep, not wide.</p>
              <p style={{ margin: "0 0 28px", fontSize: 15, color: "#9A9A9A", lineHeight: 1.8 }}><span style={{ color: "#EDEDED", fontWeight: 500 }}>The delivery network.</span> On larger builds I bring in trusted specialists — design, development support, QA — but every project stays under my direct scope and my code review. You always know exactly who touched what, and you always talk to me.</p>

              <div style={{ border: "1px solid #1E1E1E", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "20px 22px" }}>
                  <p style={{ margin: "0 0 16px", fontFamily: JB, fontSize: 11, letterSpacing: "0.2em", color: "#666666" }}>WORKS AROUND THE TOOLS YOUR TEAM ALREADY USES</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {TOOL_GROUPS.map(([label, tools]) => (
                      <div key={label} className="fd-toolrow" style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "3px 16px", alignItems: "baseline" }}>
                        <p style={{ margin: 0, fontFamily: JB, fontSize: 10, letterSpacing: "0.13em", color: "#A98A47", lineHeight: 1.5 }}>{label}</p>
                        <p style={{ margin: 0, fontSize: 13, color: "#9A9A9A", lineHeight: 1.6 }}>{tools}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{ margin: "18px 0 0", fontSize: 12, color: "#777777", lineHeight: 1.65 }}>If a tool exposes an API, webhook or reliable export, I can usually connect it. Vendor access and recording consent are verified before the build.</p>
                </div>
                <button onClick={() => setHoodOpen((v) => !v)} aria-expanded={hoodOpen} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 22px", background: "#0E0E0E", border: "none", borderTop: "1px solid #1E1E1E", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontFamily: JB, fontSize: 11, letterSpacing: "0.2em", color: "#A98A47" }}>UNDER THE HOOD — FOR THE ONE WHO’LL CHECK</span>
                  <span style={{ color: GOLD, fontSize: 18, lineHeight: 1, transform: `rotate(${hoodOpen ? 45 : 0}deg)`, transition: "transform 0.2s", display: "inline-block" }}>+</span>
                </button>
                <div style={{ display: hoodOpen ? "block" : "none", padding: "18px 22px", borderTop: "1px solid #1E1E1E", background: "#0E0E0E" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                    {HOOD_GROUPS.map(([label, items]) => (
                      <div key={label} className="fd-toolrow" style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "3px 16px", alignItems: "baseline" }}>
                        <p style={{ margin: 0, fontFamily: JB, fontSize: 10, letterSpacing: "0.13em", color: "#A98A47", lineHeight: 1.5 }}>{label}</p>
                        <p style={{ margin: 0, fontFamily: JB, fontSize: 12, color: "#8A8A8A", lineHeight: 1.6 }}>{items}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 FAQ (abbreviated — full set lives at /answers) */}
        <section id="faq" style={goldBorder}>
          <div className="fd-pad" style={container}>
            <div className="fd-2col" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 48, alignItems: "start" }}>
              <div className="fd-faq-intro" style={{ position: "sticky", top: 96 }}>
                <p style={eyebrow}>10 — STRAIGHT ANSWERS</p>
                <h2 style={{ margin: "0 0 16px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#EDEDED" }}>Every question owners actually ask.</h2>
                <p style={{ margin: 0, fontSize: 14, color: "#777777", lineHeight: 1.7 }}>The six that come up first. The other {FAQ_TOTAL - HOME_FAQ.length} are answered in full on one page.</p>
              </div>
              <div>
                <div style={{ borderTop: "1px solid #1E1E1E" }}>
                  {HOME_FAQ.map((f, qi) => {
                    const qOpen = openFaq === qi;
                    return (
                      <div key={f.q} style={{ borderBottom: "1px solid #1E1E1E" }}>
                        <button onClick={() => setOpenFaq(qOpen ? null : qi)} aria-expanded={qOpen} style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, padding: "20px 0", textAlign: "left", cursor: "pointer", background: "none", border: "none" }}>
                          <span style={{ color: qOpen ? "#EDEDED" : "#B5B5B5", fontSize: 16, fontWeight: 500, lineHeight: 1.4, fontFamily: IN }}>{f.q}</span>
                          <span className="ks-price-icon" style={{ color: GOLD, fontSize: 19, flexShrink: 0, lineHeight: 1, transform: `rotate(${qOpen ? 45 : 0}deg)`, transition: "transform 0.2s", display: "inline-block" }}>+</span>
                        </button>
                        <div style={{ display: qOpen ? "block" : "none" }}><p style={{ margin: 0, color: "#9A9A9A", fontSize: 14, lineHeight: 1.75, padding: "0 32px 20px 0", maxWidth: 640 }}>{f.a}</p></div>
                      </div>
                    );
                  })}
                </div>
                <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                  <Link href="/answers" className="ks-btn-outline" style={{ alignSelf: "flex-start", background: "#1E1B12", border: "1px solid rgba(212,168,83,0.5)", color: "#E8C46A", fontWeight: 600, fontSize: 14, padding: "14px 26px", borderRadius: 8, fontFamily: SG }}>Read all {FAQ_TOTAL} answers →</Link>
                  <p style={{ margin: 0, fontSize: 13, color: "#666666", lineHeight: 1.6 }}>{FAQ_CATS.length} chapters — money and ROI, scope, risk and data handling, your team, timeline, how I work, and the practical details.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10 Final CTA */}
        <section id="contact" style={{ ...goldBorder, background: "#0C0C0C" }}>
          <div className="fd-pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "70px 32px 60px" }}>
            <h2 style={{ margin: "0 0 28px", fontFamily: SG, fontWeight: 700, fontSize: "clamp(1.8rem, 4.4vw, 3.6rem)", letterSpacing: "-0.03em", lineHeight: 1.08, color: "#EDEDED", maxWidth: 900, textWrap: "balance" }}>Losing leads you already paid for?<br />Chasing information that’s already in your inbox?<br /><span style={{ color: GOLD }}>Running a business inside your own head?</span></h2>
            <p style={{ margin: "0 0 44px", color: "#9A9A9A", fontSize: 17, lineHeight: 1.65, maxWidth: 560 }}>One message. I’ll tell you what’s leaking and what it would take to fix it — even if we don’t end up working together.</p>
            <div className="fd-wrap" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="ks-btn-gold" style={{ background: GOLD, color: "#0A0A0A", fontWeight: 600, padding: "18px 36px", borderRadius: 8, fontSize: 15, fontFamily: SG, minHeight: 20 }}>💬 Describe your bottleneck</a>
              <a href={CAL} target="_blank" rel="noopener noreferrer" className="ks-btn-outline" style={{ background: "#1E1B12", border: "1px solid rgba(212,168,83,0.5)", color: "#E8C46A", fontWeight: 600, padding: "18px 36px", borderRadius: 8, fontSize: 15, fontFamily: SG }}>📅 Book a 30-min call</a>
            </div>
            <p style={{ margin: "0 0 12px", fontSize: 14, color: "#9A9A9A", lineHeight: 1.6, maxWidth: 560 }}>Send a voice note, written message or process screenshot — whichever is easiest.</p>
            <p style={{ margin: "0 0 56px", fontSize: 14, color: "#777777" }}>or email <a href="mailto:vitalii@karasov.co?subject=Karasov%20Systems%20inquiry" className="ks-gold" style={{ color: GOLD, textDecoration: "underline", textUnderlineOffset: 4 }}>vitalii@karasov.co</a></p>
            <div className="fd-stack" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, borderTop: "1px solid #1E1E1E", paddingTop: 28 }}>
              <div>
                <p style={{ margin: "0 0 6px", fontSize: 12, color: "#555555", fontFamily: JB }}>© 2026 Karasov Systems · Vitalii Karasov, sole proprietor, Ukraine</p>
                <p style={{ margin: 0, fontSize: 12, color: "#555555", lineHeight: 1.6 }}>Working with contractors and studios across the US, UAE and Europe. Same-business-day response in your timezone.</p>
              </div>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <a href="https://www.linkedin.com/in/vitaliikarasov/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ks-dim" style={{ color: "#666666" }}>
                  <svg style={{ width: 18, height: 18, display: "block" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://t.me/karvitalii" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="ks-dim" style={{ color: "#666666" }}>
                  <svg style={{ width: 18, height: 18, display: "block" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                </a>
                <a href="https://github.com/karasov-co" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="ks-dim" style={{ color: "#666666" }}>
                  <svg style={{ width: 18, height: 18, display: "block" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

// One expandable case row. `compact` is the lower-emphasis variant used by the
// engineering-depth group: smaller title, dimmer marker, tighter padding.
function CaseRow({ c, open, onToggle, compact = false }: { c: CaseItem; open: boolean; onToggle: () => void; compact?: boolean }) {
  return (
    <div style={{ borderBottom: "1px solid #1E1E1E" }}>
      <button onClick={onToggle} aria-expanded={open} className="fd-stack ks-caserow" style={{ width: "100%", display: "flex", alignItems: "baseline", gap: compact ? 18 : 24, padding: compact ? "18px 4px" : "24px 4px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
        <span style={{ fontFamily: JB, fontSize: 12, color: compact ? "#3F3F3F" : "#555555", width: 30, flexShrink: 0 }}>{c.num}</span>
        <span className="fd-casetitle" style={{ fontFamily: SG, fontWeight: 600, fontSize: compact ? "clamp(0.95rem, 1.3vw, 1.05rem)" : "clamp(1.05rem, 1.8vw, 1.35rem)", color: compact ? "#C9C9C9" : "#EDEDED", letterSpacing: "-0.015em", width: 380, flexShrink: 0, lineHeight: 1.3 }}>{c.title}</span>
        <span style={{ fontSize: compact ? 13 : 14, color: compact ? "#8A8A8A" : "#9A9A9A", flex: 1, lineHeight: 1.5 }}>{c.hook}</span>
        <span className="ks-price-icon" style={{ color: compact ? "#8A6F3A" : GOLD, fontSize: compact ? 17 : 20, flexShrink: 0, transform: `rotate(${open ? 45 : 0}deg)`, transition: "transform 0.2s", display: "inline-block", lineHeight: 1 }}>+</span>
      </button>
      <div style={{ display: open ? "block" : "none", padding: compact ? "0 4px 24px 48px" : "0 4px 28px 54px" }}>
        {c.badge && <p style={{ margin: "0 0 12px", fontFamily: JB, fontSize: 11, letterSpacing: "0.18em", color: "#A98A47" }}>{c.badge}</p>}
        <p style={{ margin: "0 0 18px", fontSize: 14, color: "#9A9A9A", lineHeight: 1.75, maxWidth: 700, whiteSpace: "pre-line" }}>{c.body}</p>
        <p style={{ margin: "0 0 16px", fontFamily: JB, fontSize: 11, color: "#666666" }}>{c.stack}</p>
        {c.ndaNote && (
          <p style={{ margin: "0 0 16px", display: "flex", alignItems: "baseline", gap: 8, fontFamily: JB, fontSize: 12.5, letterSpacing: "0.02em", color: "#A98A47", lineHeight: 1.6, maxWidth: 640 }}>
            <span aria-hidden="true" style={{ flexShrink: 0 }}>🔒</span>
            <span>{c.ndaNote}</span>
          </p>
        )}
        {(c.demo || c.github) && (
          <div className="fd-wrap" style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            {c.demo && <a href={c.demo} target="_blank" rel="noopener noreferrer" className="ks-btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1E1B12", border: "1px solid rgba(212,168,83,0.5)", color: "#E8C46A", fontWeight: 600, fontSize: 13, padding: "10px 18px", borderRadius: 6, fontFamily: SG }}>▶ {c.demoLabel} →</a>}
            {c.github && <a href={c.github} target="_blank" rel="noopener noreferrer" className="ks-navcta" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #2A2A2A", color: "#B5B5B5", fontWeight: 600, fontSize: 13, padding: "10px 18px", borderRadius: 6, fontFamily: SG }}>View GitHub →</a>}
          </div>
        )}
      </div>
    </div>
  );
}

function painQuote(right = false): CSSProperties {
  return {
    margin: 0, fontFamily: SG, fontWeight: 600, fontSize: "clamp(1.4rem, 3vw, 2.3rem)",
    lineHeight: 1.18, letterSpacing: "-0.02em", color: "#EDEDED", textWrap: "balance",
    ...(right ? { alignSelf: "flex-end", textAlign: "right", maxWidth: 780 } : {}),
  };
}

function PriceCard({
  index, label, labelColor, note, noteColor, price, bullets, details, highlight, open, onToggle,
}: {
  index: number; label: string; labelColor: string; note: string; noteColor: string;
  price: ReactNode; bullets: string[]; details: (typeof PRICE_DETAILS)[number];
  highlight?: boolean; open: boolean; onToggle: () => void;
}) {
  const panelId = `price-details-${index}`;
  const btnId = `price-trigger-${index}`;
  return (
    <div
      style={{
        border: highlight ? "1px solid rgba(212,168,83,0.35)" : "1px solid #1E1E1E",
        borderRadius: 12,
        padding: "40px 34px",
        background: highlight ? "linear-gradient(180deg, rgba(212,168,83,0.04), transparent 40%)" : undefined,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p style={{ margin: "0 0 6px", fontFamily: JB, fontSize: 11, letterSpacing: "0.2em", color: labelColor }}>{label}</p>
      <div style={{ fontFamily: JB, fontWeight: 500, fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", color: "#EDEDED", letterSpacing: "-0.02em", marginBottom: 4 }}>{price}</div>
      <p style={{ margin: "0 0 20px", fontFamily: JB, fontSize: 12, color: noteColor, letterSpacing: "0.08em" }}>{note}</p>
      <PriceList items={bullets} />

      <div style={{ marginTop: 22, borderTop: "1px solid #1E1E1E", paddingTop: 16 }}>
        <button
          id={btnId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="ks-price-tog"
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, background: "none", border: "none", padding: "2px 0", cursor: "pointer", textAlign: "left", color: "#E8C46A", fontFamily: JB, fontSize: 13, letterSpacing: "0.02em", lineHeight: 1.4 }}
        >
          <span>{details.trigger}</span>
          <span aria-hidden="true" className="ks-price-icon" style={{ color: GOLD, fontSize: 18, lineHeight: 1, flexShrink: 0, transform: `rotate(${open ? 45 : 0}deg)`, transition: "transform 0.2s ease", display: "inline-block" }}>+</span>
        </button>

        <div id={panelId} role="region" aria-labelledby={btnId} style={{ display: open ? "block" : "none", marginTop: 18 }}>
          <p style={{ margin: "0 0 14px", fontFamily: JB, fontSize: 12, letterSpacing: "0.08em", color: "#A98A47" }}>{details.heading}</p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
            {details.items.map((it, k) => (
              <li key={it} style={{ display: "flex", gap: 12, fontSize: 13, color: "#B5B5B5", lineHeight: 1.55 }}>
                <span style={{ fontFamily: JB, fontSize: 11, color: "#6E6E6E", flexShrink: 0, minWidth: 18, textAlign: "right", paddingTop: 1 }}>{k + 1}</span>
                <span style={{ minWidth: 0 }}>{it}</span>
              </li>
            ))}
          </ol>
          <p style={{ margin: "18px 0 0", fontSize: 13, color: "#7A7A7A", lineHeight: 1.6 }}>{details.note}</p>
        </div>
      </div>
    </div>
  );
}

function PriceList({ items }: { items: string[] }) {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", margin: 0, padding: 0 }}>
      {items.map((it) => (
        <li key={it} style={{ display: "flex", gap: 12, fontSize: 14, color: "#C9C9C9", lineHeight: 1.6 }}>
          <span style={{ color: GOLD, flexShrink: 0 }}>—</span>{it}
        </li>
      ))}
    </ul>
  );
}
