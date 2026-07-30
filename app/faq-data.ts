// Shared FAQ source of truth.
// Consumed by the homepage (abbreviated set) and /answers (full set).
// Plain data module — no "use client", so the server-rendered /answers route
// can import it and still export route metadata.

export type Faq = { q: string; a: string };
export type FaqCat = { label: string; qs: Faq[] };
export const FAQ_CATS: FaqCat[] = [
  { label: "Money & ROI", qs: [
    { q: "How do I know it’s worth the investment?", a: "Every system I build must save more than it costs — that’s the only rule. For most clients the math is: system cost ÷ average client value = number of clients needed to pay it back. If that number is under ~20 clients or under 6 months for your business, we’re in green territory. If it isn’t, I’ll tell you on the first call and I won’t take the project." },
    { q: "What if my average job is small — €500 or $2,000, not $12,000?", a: "Then the system pays back over more clients and a bit longer — usually 3-6 months instead of 2-4 weeks. The math scales down cleanly. What matters isn’t the size of one job, it’s how many are slipping through your pipeline every month. A 30% lift on a €1,000 average job is the same profit shape as a 30% lift on a $10,000 average job." },
    { q: "Why $3,000-8,000 for the build? Some agencies charge less.", a: "Because I don’t build throwaway automations. Everything I ship is documented, monitored, has error handling and fallbacks, and belongs to you fully. A $500 Zapier setup breaks in three months and nobody knows why. I build systems that survive API changes, staff turnover, and a bad Monday." },
    { q: "Why a monthly care plan if the system runs itself?", a: "Systems don’t maintain themselves. OpenAI changes a model, Gmail changes an API, your workflow evolves, edge cases surface. Care Plan means 24/7 monitoring (I know it broke before you do), same-day fixes on business days, monthly improvements as your business changes, and a plain-language monthly report in dollars and jobs saved — not tech jargon." },
    { q: "Do you offer payment plans?", a: "Standard terms: 50% at signature, 50% at launch. For larger builds we can split into 3 payments across milestones. Care Plan is monthly, cancel anytime. For clients outside the US, I invoice in EUR or USD — your choice." },
    { q: "What if the system saves less than expected?", a: "After the first 30 days I send a plain-language report showing actual saved leads, hours, or errors. If the numbers don’t cover the Care Plan, we adjust the scope or you cancel — no argument. I’ve never had a client where the math didn’t clear within 60 days, but I don’t promise magic and I don’t lock people in." },
  ]},
  { label: "Scope & what’s included", qs: [
    { q: "What exactly does the build include?", a: "Full system design, code, integrations, error handling, monitoring dashboards, deployment to your cloud, complete documentation (a real README, not a PDF), 30 days of post-launch support, and a handoff call where I explain every piece. You own the source code, credentials, and infrastructure from day one." },
    { q: "What if my problem isn’t in the modules list?", a: "That’s what custom scoping is for. The modules are the common patterns — 80% of clients need 2-3 of them. If yours is different (permits, subcontractor payments, warranty tracking, insurance claims, whatever), we scope it in Discovery and I quote it upfront. Same delivery model, same guarantees." },
    { q: "Do I need to switch my CRM, phone system, or tools?", a: "No. The system runs behind whatever you already have — Gmail, QuickBooks, Buildertrend, JobTread, Housecall Pro, ServiceTitan, Jobber, Google Workspace, Microsoft 365. If a tool I can’t integrate with is central to your workflow, I’ll tell you in Discovery before we sign anything." },
    { q: "Can I start small and add later?", a: "Yes — most clients do. Start with 1-2 modules (usually Lead Ops + Estimate Ops), watch the ROI for 30-60 days, layer in the rest as it makes sense. Each additional module is a separate scope and price. No pressure to buy the whole stack upfront." },
    { q: "Will you help train my team?", a: "The core promise is that your team learns nothing new — the system runs underneath what they already use. But if there’s a piece someone needs to touch (approving flagged items, reviewing weekly reports), I record a 5-minute Loom for each and we do one live walkthrough. That’s it." },
  ]},
  { label: "Risk & trust", qs: [
    { q: "What if the system makes a wrong decision — sends a bad quote, texts a client wrong info?", a: "Every critical action has a human-approval layer by default. Estimates over your threshold, first-time client responses, anything money-related — the AI drafts, you approve, it sends. For low-risk actions (categorizing photos, filing docs, internal summaries) it acts on its own. You choose the line in Discovery." },
    { q: "What about AI hallucinations — what if it makes stuff up?", a: "This is the #1 real risk with LLM systems. I mitigate it three ways: (1) RAG grounding — the AI can only quote from your actual data, not from training memory, (2) DeepEval and grounding checks running in production catch hallucinated outputs before they reach a client, (3) fallback rules that trigger human review when confidence is low. It’s not zero-risk, but it’s engineered risk, not gamble." },
    { q: "Is my data secure? Where does it live?", a: "Your data stays in your accounts — Gmail, your CRM, your Drive. Where I need a vector database (for company-wide search), it’s deployed to your cloud account (Supabase, GCP, Vultr) — you hold the keys, you can revoke access with one click. No data goes to my servers. No training of external models on your business. Written into every contract." },
    { q: "What if it breaks at 2 AM on a Saturday?", a: "Care Plan includes 24/7 monitoring. Alerts hit me before they hit your inbox. Same-day fix on business days, next-morning on weekends. Every system has fallbacks built in — usually a “graceful degrade” back to your manual process, so a break rarely means downtime, just temporary manual work while I fix it." },
    { q: "What if you get sick, take a break, or something happens to you?", a: "Two layers of coverage. First, my delivery network — the specialists I already work with — can maintain any running system without me for weeks. They know the stack because they helped build it. Second, all systems use standard, well-known tools (LangGraph, Python, Postgres, n8n), fully documented, so any senior engineer can pick things up cleanly. You’re never dependent on my calendar for a system that’s already live." },
    { q: "What if I want to fire you?", a: "Cancel Care Plan any month, keep the whole system running. You have the source code, credentials, docs, and cloud access from day one. No lock-in, no ransom fees, no “premium API keys” you have to keep paying me for. If you find someone cheaper to maintain it, hire them — I’ll do the handoff call for free." },
  ]},
  { label: "Team & employees", qs: [
    { q: "Will this replace my office manager / staff?", a: "Almost never in the first year. It removes the boring 40% of their day (data entry, follow-up chasing, filing) so they can focus on the 60% that actually needs a human (relationships, judgment, exceptions). Most clients keep the same team but stop needing to hire the next one as they grow." },
    { q: "My team is not tech-savvy. Will they be able to use it?", a: "The whole design goal is that they don’t have to. The system runs behind Gmail and their phone. If something needs their attention, it shows up as a normal email or text with two buttons: “approve” or “review”. No dashboards to learn, no logins to remember, no new app on the phone." },
    { q: "Will my team push back on this?", a: "Sometimes, if they think it’s about replacing them. That’s why the first thing we do in Discovery is map out what stops being their job (the parts they hated anyway) versus what stays theirs. Clients who introduce it as “this is the tool that makes your job easier” get zero pushback. Clients who introduce it as “AI is replacing headcount” get exactly the pushback they earned." },
  ]},
  { label: "Timeline & process", qs: [
    { q: "How long from first call to live system?", a: "2-4 weeks for most builds. 30-min discovery → 1-2 days architecture (you approve the blueprint before I write a line of code) → 1-3 weeks build with daily updates → deployment + handoff. Industry average is 8-16 weeks; I move faster because I don’t do committee reviews and I don’t context-switch across 10 clients." },
    { q: "What does “discovery” actually mean?", a: "A 30-45 min call where you describe how jobs come in and where they leak. I ask specific questions, take notes, and by the end I tell you: what’s worth automating, what isn’t, what it would cost, and how long. If we’re not a fit, I say so. If we are, I send a written scope within 24 hours. No pitch deck, no follow-up sales pressure." },
    { q: "What do you need from me during the build?", a: "Roughly 3-5 hours total across 2-4 weeks. Kickoff call (1 hr), read-throughs of the architecture doc (30 min), 2-3 short check-ins on decisions only you can make (15 min each), UAT before launch (1 hr), handoff (30 min). Everything else runs in the background." },
    { q: "What happens on Day 31?", a: "By then the system is stable and you have your first month of numbers. We do a 30-day review call: what’s working, what to improve, what to add next. If you want to continue with Care Plan, we do. If not, you have everything documented and can maintain it yourself or hand it to any developer." },
  ]},
  { label: "About me & my business", qs: [
    { q: "Are you solo or an agency?", a: "Neither. I’m the senior engineer and product lead on every project — you work with me directly, no account managers, no handoffs. Behind me is a small trusted network of specialists I bring in when a build needs them: a design assistant, a second developer for parallel work, a QA reviewer for critical launches. Upside: senior thinking on every decision, plus enough hands to move fast. Limit: I take 2-3 new engagements per quarter." },
    { q: "What kind of businesses do you actually work best with?", a: "Construction firms, design-build studios, home-service companies (HVAC, plumbing, electrical, roofing, landscaping, cleaning, moving), interior designers, remodelers, small commercial contractors. Sweet spot: 5-50 people, owner still involved in day-to-day, average project between €500 and $500K, at least one thing is clearly broken in operations." },
    { q: "Where are you based / what timezone?", a: "I work across US, UAE, and EU timezones with same-business-day response. In 2026-2027 I’ll be spending significant time in Dubai (AI events, Design Week) and Milan (AI Week). If you’re in the Middle East, we can meet in person." },
    { q: "Do you have references I can talk to?", a: "Yes — I’ll share 2-3 depending on which module we’re scoping. Some client work runs under strict NDA and I can only give you screen recordings, not names. If direct references matter to you more than case data, tell me in Discovery and I’ll match you with someone who allows a call." },
    { q: "Why work with you instead of a larger agency?", a: "You work directly with the person who designs and writes the system — no account-manager layer, no junior engineers learning on your project. That means direct code review, one fixed point of responsibility, and an architecture built to be handed over: you own the source code, credentials and documentation from day one, so you’re never locked in. A large agency bills $50-500K over 6-12 months and splits the work across a team you never meet; here one senior builder owns the outcome and ships in weeks." },
  ]},
  { label: "Communication & working together", qs: [
    { q: "What’s the best way to reach you?", a: "WhatsApp, LinkedIn, or Telegram — pick your favorite. All three are on my phone, same-day reply. Email works too. My response time in business hours is under 2 hours, worst case next morning in your timezone." },
    { q: "Can we meet in person?", a: "If you’re in Dubai, Milan, Singapore, or anywhere I’m attending an event — yes, glad to. Otherwise everything runs remotely: Loom videos for walkthroughs, WhatsApp for daily updates, Google Meet only when we really need it. Not because remote is trendy, but because it’s faster and clients get more done that way." },
  ]},
  { label: "International & practical", qs: [
    { q: "I’m not in the US — will your systems still work for me?", a: "Yes. The modules aren’t country-specific. Same lead-to-invoice logic works anywhere — adapted to your CRM, currency, language, and local tools (WhatsApp Business, Bitrix24, Zoho, whatever). Systems have been built for clients across multiple regions and languages." },
    { q: "Do you handle GDPR / UAE PDPL / other privacy regulations?", a: "Yes. Every build includes a data-handling document listing where data lives, who has access, retention rules, and compliance mapping to your applicable regulation (GDPR for EU/UK, PDPL for UAE, CCPA for California, etc.). For heavily regulated industries (healthcare, finance) I bring in a compliance reviewer at cost." },
    { q: "What if I just want to try a small thing first before committing?", a: "Two options. (1) Book a Discovery call — it’s free, and by the end you’ll have a real scope even if we don’t work together. (2) Ask for a “pilot module” — I build the smallest useful piece for $1,500-3,000 in 5-10 days. If it works, we scale into a full build and credit the pilot against it. If it doesn’t, you have something small that still works and we part on good terms." },
  ]},
];

// Stable, URL-safe anchor id for a question. Derived from the question text so
// links stay valid as long as the wording does.
export function faqSlug(q: string): string {
  return q
    .toLowerCase()
    .replace(/[\u2018\u2019\u201c\u201d]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

// The six highest-objection questions, surfaced on the homepage.
// Order is deliberate: money, switching cost, AI risk, data, staff, timeline.
const HOME_FAQ_QUESTIONS = [
  "How do I know it\u2019s worth the investment?",
  "Do I need to switch my CRM, phone system, or tools?",
  "What if the system makes a wrong decision \u2014 sends a bad quote, texts a client wrong info?",
  "Is my data secure? Where does it live?",
  "Will this replace my office manager / staff?",
  "How long from first call to live system?",
];

const ALL_FAQS: Faq[] = FAQ_CATS.flatMap((c) => c.qs);

export const HOME_FAQ: Faq[] = HOME_FAQ_QUESTIONS.map((q) => {
  const found = ALL_FAQS.find((f) => f.q === q);
  if (!found) throw new Error(`HOME_FAQ: no question matching "${q}"`);
  return found;
});

export const FAQ_TOTAL = ALL_FAQS.length;
