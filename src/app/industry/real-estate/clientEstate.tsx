"use client"
import Link from "next/link";
import {
  ArrowRight, BarChart3, Building2, CheckCircle2, ChevronDown,
  ClipboardList, Database, Home, Mail, MessageCircle, Phone,
  Search, ShieldCheck, Sparkles, Target, Users, Workflow,
  type LucideIcon,
} from "lucide-react";

// App Router server component. Place at app/ai-for-real-estate/page.tsx.
// Requires your existing Tailwind v4 setup and lucide-react dependency.
// Shared navigation and footer remain in your root layout.


const bookingUrl = "https://calendar.app.google/CCzqBvNFfFm9d1Te6";
const whatsappUrl = "https://wa.me/919649902000";
const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500";
const primaryButton = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark ${focus}`;

type Solution = { title: string; description: string; icon: LucideIcon; tasks: string[] };
const solutions: Solution[] = [
  { title: "AI Lead Generation for Real Estate", icon: Target, description: "Bring enquiries from your website, campaigns, and approved data sources into an organised sales pipeline.", tasks: ["Website and campaign lead capture", "Lead-source tagging and deduplication", "Research and enrichment from approved sources"] },
  { title: "AI Lead Qualification & Property Matching", icon: Search, description: "Help your team understand what buyers and tenants need before they pick up the phone.", tasks: ["Capture budget, location, and property preferences", "Prioritise enquiries using agreed criteria", "Match requirements with available inventory"] },
  { title: "AI Calling for Real Estate", icon: Phone, description: "Use calling workflows for initial enquiries, qualification, and appointment coordination, with a clear handover to your team.", tasks: ["Inbound enquiry handling", "Approved outbound call workflows", "Call summaries and human escalation"] },
  { title: "Real Estate CRM Automation", icon: Database, description: "Keep lead records, ownership, and next actions connected so your agents spend less time updating systems.", tasks: ["Lead assignment and pipeline updates", "Conversation notes and task creation", "CRM connections subject to API availability"] },
  { title: "AI Follow-Ups & Sales Automation", icon: MessageCircle, description: "Build consistent follow-up journeys around the buyer’s stage, preferences, and communication permissions.", tasks: ["Email and WhatsApp follow-up sequences", "Site-visit scheduling and reminders", "Opt-out handling and sales-team alerts"] },
  { title: "AI Marketing for Real Estate", icon: Mail, description: "Support property marketing with useful content, organised campaigns, and a clearer view of enquiry sources.", tasks: ["Property descriptions and campaign drafts", "Social media content and email campaigns", "Human review before publishing"] },
  { title: "AI Customer Support & Daily Workflows", icon: Workflow, description: "Handle repeat questions and routine coordination using approved property information and business rules.", tasks: ["Website chatbot and enquiry routing", "Document-request and appointment workflows", "Escalation for pricing, legal, or complex queries"] },
  { title: "Real Estate Reporting & Intelligence", icon: BarChart3, description: "Give managers a practical view of what enters the pipeline, what moves forward, and where attention is needed.", tasks: ["Lead-source and pipeline reporting", "Follow-up and site-visit tracking", "Performance summaries for team reviews"] },
];

const audiences = [
  { icon: Home, title: "Real Estate Agencies & Brokers", text: "Connect buyer and tenant enquiries with agents, property inventory, and the next follow-up." },
  { icon: Building2, title: "Developers & Builders", text: "Organise project enquiries, channel-partner leads, site visits, and sales-team handovers." },
  { icon: Users, title: "Property Management Teams", text: "Route rental enquiries, answer routine questions, and coordinate service requests." },
];
const steps = [
  { title: "Assess your business", text: "Map your lead sources, CRM, property data, team responsibilities, and repetitive tasks." },
  { title: "Choose a focused pilot", text: "Agree on one workflow, its data requirements, approval rules, and success measures." },
  { title: "Build and connect", text: "Configure the agents and integrations, test with sample scenarios, and prepare your team." },
  { title: "Manage and improve", text: "Monitor the live workflow, review exceptions, and refine it before expanding the scope." },
];
const faqs = [
  { q: "How can AI help a real estate business?", a: "AI can help organise enquiries, collect buyer requirements, suggest matching properties, draft marketing content, and automate routine CRM updates. The right starting point depends on your data, systems, and the tasks taking up your team’s time." },
  { q: "Can you work with our existing real estate CRM?", a: "We assess your current CRM before proposing an integration. What can be connected depends on its APIs, access permissions, subscription features, and data quality. The assessment identifies any limitations before implementation." },
  { q: "Can AI handle real estate calls and WhatsApp follow-ups?", a: "Calling and WhatsApp workflows can support enquiry handling, qualification, and follow-ups. Setup depends on your providers, approved templates where required, contact permissions, and the communication rules that apply to your market." },
  { q: "Do you support real estate businesses in India and overseas?", a: "The service is designed for real estate teams in India and overseas. We agree on language, time-zone coverage, communication channels, and market-specific requirements when defining the scope." },
  { q: "Will AI replace our real estate agents?", a: "The workflows are designed to support your team with repetitive tasks. Your people remain responsible for relationship building, negotiations, property advice, and decisions that need judgement." },
  { q: "How much do AI solutions for real estate cost?", a: "Pricing depends on the workflow, integrations, data preparation, usage volume, and ongoing support. After the assessment, we define the pilot scope and explain implementation, management, and any third-party costs." },
  { q: "How do you manage property information and data access?", a: "We agree on authorised data sources, access permissions, and review responsibilities during setup. Property availability and pricing need a maintained source of truth; uncertain or sensitive questions should be routed to a person." },
  { q: "What should we prepare before starting?", a: "Bring an overview of your lead sources, current CRM, property inventory, communication tools, and the tasks you want to improve. We can use that information to identify a focused pilot and the access needed to build it." },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl">{title}</h2><p className="mt-4 text-base leading-7 text-brand-text sm:text-lg">{text}</p></div>;
}

export default function AIForRealEstatePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-brand-dark [--color-brand-blue:#0876ed] [--color-brand-blue-dark:#0663c9] [--color-brand-dark:#071744] [--color-brand-text:#475569]">
      <section aria-labelledby="real-estate-title" className="relative overflow-hidden bg-[#061a38] pt-12 pb-14 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_20%,#0876ed35,transparent_60%)]" />
        <div className={`${container} relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]`}>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium"><Sparkles aria-hidden="true" className="size-4 text-blue-300" />Managed AI Workforce for Real Estate</p>
            <h1 id="real-estate-title" className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl xl:text-6xl">AI Solutions for <span className="text-blue-300">Real Estate Businesses</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Keep enquiries moving from first contact to the next conversation. AI WorksForce helps real estate teams automate lead generation, calling, CRM, marketing, follow-ups, and everyday work.</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">We assess your processes, connect the right tools and AI agents, and manage the workflows with your team—in India and overseas.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={bookingUrl} className={primaryButton}>Book a Free Consultation<ArrowRight aria-hidden="true" className="size-4" /></a><a href="#solutions" className={`inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 ${focus}`}>Explore AI Solutions</a></div>
            <p className="mt-5 text-sm text-blue-200">Start with one focused workflow. Expand when it works for your team.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-5 shadow-2xl sm:p-7">
            <div className="flex items-center gap-3 border-b border-white/15 pb-5"><span className="grid size-12 place-items-center rounded-2xl bg-blue-500/20"><Building2 aria-hidden="true" className="size-6 text-blue-300" /></span><div><h2 className="text-lg font-semibold">From enquiry to next action</h2><p className="mt-1 text-sm text-slate-300">An illustrative real estate workflow</p></div></div>
            <ol className="mt-6 space-y-3">{[
              ["Capture the enquiry", "Website, campaigns, email, or connected channels"],
              ["Understand the requirement", "Budget, location, property type, and timing"],
              ["Match and assign", "Relevant inventory and the right sales owner"],
              ["Follow up and coordinate", "A useful reply, a reminder, or a site-visit request"],
            ].map(([title, text], i) => <li key={title} className="flex gap-3 rounded-2xl border border-white/10 bg-[#071d3d] p-4"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-500/20 text-sm font-semibold text-blue-200">{i + 1}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-300">{text}</p></div></li>)}</ol>
            <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-blue-100"><ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-300" />Your team stays involved in exceptions, approvals, and important decisions.</p>
          </div>
        </div>
      </section>

      <section aria-label="Who we help" className={`${container} py-12 sm:py-16`}><div className="grid gap-5 md:grid-cols-3">{audiences.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6"><Icon aria-hidden="true" className="size-7 text-brand-blue" /><h2 className="mt-4 text-xl font-bold">{title}</h2><p className="mt-3 text-base leading-7 text-brand-text">{text}</p></article>)}</div></section>

      <section id="solutions" className="scroll-mt-24 bg-[#f8fafc] py-14 sm:py-20"><div className={container}><SectionHeading eyebrow="AI for real estate operations" title="Connect the work behind every property enquiry" text="Choose the areas where your team needs support. We build around your process, available data, and existing tools." /><div className="grid gap-5 md:grid-cols-2">{solutions.map(({ title, icon: Icon, description, tasks }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"><span className="grid size-12 place-items-center rounded-xl bg-blue-50"><Icon aria-hidden="true" className="size-6 text-brand-blue" /></span><h3 className="mt-5 text-xl font-bold leading-snug">{title}</h3><p className="mt-3 text-base leading-7 text-brand-text">{description}</p><ul className="mt-5 space-y-3">{tasks.map(task => <li key={task} className="flex gap-2 text-sm leading-6 text-brand-text"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-blue" />{task}</li>)}</ul></article>)}</div></div></section>

      <section className={`${container} py-14 sm:py-20`}><div className="grid items-start gap-10 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">Built around your team</p><h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">A managed AI workforce, with people accountable for the work</h2><p className="mt-5 text-lg leading-8 text-brand-text">Buying another tool does not automatically fix a missed enquiry or an incomplete CRM record. The workflow needs reliable data, clear ownership, and someone checking how it performs.</p><p className="mt-4 text-base leading-7 text-brand-text">AI WorksForce brings business analysis, AI agents, automation, and ongoing operations together. Your pilot defines what the system handles, when a person steps in, and how the result is measured.</p></div><div className="space-y-4">{[
        ["Less repetitive administration", "Reduce duplicate entry and routine coordination so agents can focus on conversations and property visits."],
        ["More consistent follow-ups", "Set clear next actions and reminders instead of relying on each agent to remember every enquiry."],
        ["Better pipeline visibility", "Keep source, ownership, and status information available for sales reviews and management decisions."],
      ].map(([title, text]) => <article key={title} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 leading-7 text-brand-text">{text}</p></article>)}</div></div></section>

      <section id="how-it-works" className="scroll-mt-24 bg-[#061a38] py-14 text-white sm:py-20"><div className={container}><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">From assessment to managed delivery</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Start small. Test the workflow. Then expand.</h2></div><ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{steps.map(({ title, text }, i) => <li key={title} className="rounded-2xl border border-white/15 bg-white/5 p-6"><span className="text-sm font-bold text-blue-300">0{i + 1}</span><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-3 text-base leading-7 text-slate-300">{text}</p></li>)}</ol></div></section>

      <section id="pilot" className={`${container} scroll-mt-24 py-14 sm:py-20`}><div className="grid gap-8 rounded-3xl border border-blue-100 bg-blue-50/50 p-6 sm:p-10 lg:grid-cols-[1fr_0.8fr]"><div><ClipboardList aria-hidden="true" className="size-8 text-brand-blue" /><h2 className="mt-4 text-3xl font-bold tracking-tight">Choose your first real estate AI pilot</h2><p className="mt-4 text-base leading-7 text-brand-text">A useful starting point might be enquiry qualification, missed-lead follow-ups, CRM updates, or site-visit coordination. We assess the fit before defining the build.</p><a href={bookingUrl} className={`mt-6 ${primaryButton}`}>Discuss Your Workflow<ArrowRight aria-hidden="true" className="size-4" /></a></div><div className="rounded-2xl bg-white p-6"><h3 className="text-lg font-bold">Agree on the scope before you start</h3><ul className="mt-5 space-y-4">{["Workflow and channels to connect", "Data access and team responsibilities", "Human approvals and escalation rules", "Success measures and review process", "Implementation, management, and tool costs"].map(text => <li key={text} className="flex items-start gap-3 text-sm leading-6 text-brand-text"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-blue" />{text}</li>)}</ul></div></div></section>

      <section id="faq" className="scroll-mt-24 bg-[#f8fafc] py-14 sm:py-20"><div className={container}><SectionHeading eyebrow="Your questions, answered" title="AI for real estate: frequently asked questions" text="Practical details about integrations, scope, and getting started." /><div className="mx-auto max-w-3xl space-y-3">{faqs.map(({ q, a }) => <details key={q} className="group rounded-2xl border border-slate-200 bg-white open:border-blue-200"><summary className={`flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 text-left font-semibold sm:p-6 [&::-webkit-details-marker]:hidden ${focus}`}><span>{q}</span><ChevronDown aria-hidden="true" className="size-5 shrink-0 text-brand-blue transition-transform group-open:rotate-180 motion-reduce:transition-none" /></summary><p className="px-5 pb-6 text-base leading-7 text-brand-text sm:px-6">{a}</p></details>)}</div></div></section>

      <section className="bg-[#061a38] py-14 text-white sm:py-20"><div className={`${container} text-center`}><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Build your AI workforce</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Where could AI help your real estate team first?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Tell us how you handle leads, sales, and daily operations. We’ll help identify a focused workflow to assess and a practical next step.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={bookingUrl} className={primaryButton}>Book a Free Consultation<ArrowRight aria-hidden="true" className="size-4" /></a><a href={whatsappUrl} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 ${focus}`}><MessageCircle aria-hidden="true" className="size-4" />Talk to Us on WhatsApp</a></div><a href="tel:+919649902000" className={`mt-6 inline-block rounded text-sm text-blue-200 hover:underline ${focus}`}>Call +91 9649902000</a></div></section>
    </main>
  );
}
