"use client";

import ReusableHero from "@/components/tech-hero/reusable-hero";
import { ArrowRight, BarChart3, Database, Play, Zap } from "lucide-react";
import { useState, type ReactNode } from "react";

/**
 * Single-file LLM & AI landing page for Next.js + Tailwind CSS v4.
 * Uses the colour tokens from the supplied global.css and has no icon dependency.
 * For consistent typography, load Inter with next/font/google in the root layout.
 */
type LLMAIPageProps = {
  consultationHref?: string;
  heroImageSrc?: string;
  caseStudyImageSrc?: string;
  testimonialImageSrc?: string;
};

type IconName =
  | "arrow" | "play" | "check" | "bolt" | "database" | "chart"
  | "message" | "document" | "cube" | "cloud" | "search" | "gear"
  | "users" | "clock" | "shield" | "sparkles";

const navItems = [
  ["Home", "/"], ["What AI WorksForce?", "/about"], ["How it Works", "#how-it-works"],
  ["Our AI Workflow", "/ai-workflow"], ["Solutions", "#solutions"], ["Industries", "/industries"],
  ["Case Studies", "#case-study"], ["Resources", "/resources"], ["About", "/about"],
] as const;

const solutions: { title: string; text: string; icon: IconName; tone: string }[] = [
  { title: "LLM Strategy", text: "Find the right model, use cases, and roadmap tailored to your business goals.", icon: "message", tone: "bg-brand-purple-soft text-brand-purple" },
  { title: "Custom AI Solutions", text: "Build custom LLM applications, chatbots, and AI agents tailored to your workflows.", icon: "document", tone: "bg-emerald-50 text-emerald-500" },
  { title: "Data Preparation", text: "Prepare, fine-tune, and optimize your data for better model performance.", icon: "database", tone: "bg-rose-50 text-rose-500" },
  { title: "Model Fine-Tuning", text: "Fine-tune open-source or proprietary LLMs for domain-specific use cases.", icon: "cube", tone: "bg-orange-50 text-orange-500" },
  { title: "Deployment & Scaling", text: "Deploy LLMs securely on cloud or on-premise and scale as your business grows.", icon: "cloud", tone: "bg-sky-50 text-sky-500" },
  { title: "Monitoring & Optimization", text: "Track performance, ensure safety, and continuously improve your AI systems.", icon: "chart", tone: "bg-rose-50 text-rose-500" },
];

const steps: { title: string; text: string; icon: IconName; tone: string }[] = [
  { title: "Discover", text: "We understand your goals, challenges, and use cases.", icon: "search", tone: "bg-brand-purple-soft text-brand-purple" },
  { title: "Plan", text: "We design a tailored LLM & AI strategy for your business.", icon: "document", tone: "bg-emerald-50 text-emerald-500" },
  { title: "Build", text: "We develop and fine-tune the right solution for your needs.", icon: "gear", tone: "bg-brand-purple-soft text-brand-purple" },
  { title: "Deploy", text: "We launch and integrate it into your workflows securely.", icon: "cloud", tone: "bg-brand-purple-soft text-brand-purple" },
  { title: "Optimize", text: "We monitor, improve, and scale for long-term success.", icon: "chart", tone: "bg-rose-50 text-rose-500" },
];

const modelMarks = [
  { mark: "◎", name: "OpenAI", className: "text-neutral-950" },
  { mark: "✳", name: "Claude", className: "text-orange-600" },
  { mark: "G", name: "Gemini", className: "text-brand-blue" },
  { mark: "∞", name: "Meta", className: "text-brand-blue" },
  { mark: "M", name: "Mistral AI", className: "text-amber-500" },
  { mark: "co:", name: "here", className: "text-neutral-700" },
  { mark: "🤗", name: "Hugging Face", className: "text-amber-500" },
  { mark: "⌁", name: "LangChain", className: "text-emerald-800" },
] as const;

export default function LLMAIPage({
  consultationHref = "/contact",
  heroImageSrc = "/technology/all-in-one.png",
  caseStudyImageSrc = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=88",
  testimonialImageSrc = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=88",
}: LLMAIPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const icon = (name: IconName, className = "size-6") => {
    const paths: Record<IconName, ReactNode> = {
      arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
      play: <path d="m9 5 11 7-11 7Z" fill="currentColor" />,
      check: <path d="m5 12 4 4L19 6" strokeWidth="3" />,
      bolt: <path d="m13 2-8 12h6l-1 8 9-13h-7Z" fill="currentColor" strokeWidth="1" />,
      database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
      chart: <><path d="M5 20v-6M12 20V9M19 20V4" strokeWidth="4" /><path d="M3 21h18" /></>,
      message: <><path d="M4 5h16v11H9l-5 4Z" /><circle cx="9" cy="11" r=".7" fill="currentColor" /><circle cx="12" cy="11" r=".7" fill="currentColor" /><circle cx="15" cy="11" r=".7" fill="currentColor" /></>,
      document: <><path d="M6 2h8l4 4v16H6Z" /><path d="M14 2v5h5M9 11h6M9 15h6M9 19h4" /></>,
      cube: <><path d="m12 2 8 4.5v10L12 22l-8-5.5v-10Z" /><path d="m4 6.5 8 5 8-5M12 22V11.5" /></>,
      cloud: <path d="M7 19h11a4 4 0 0 0 .5-8A6.5 6.5 0 0 0 6 9.5 4.8 4.8 0 0 0 7 19Z" fill="currentColor" strokeWidth="1" />,
      search: <><circle cx="10" cy="10" r="7" /><path d="m15.5 15.5 5 5" strokeWidth="3" /></>,
      gear: <><path d="m10 3-1 3-3 1-3 3 2 2-1 3 3 3 3-1 2 4 3-1 1-3 3-1 2-3-2-2 1-3-3-3-3 1-2-3Z" /><circle cx="12" cy="12" r="3" /></>,
      users: <><circle cx="9" cy="8" r="3" /><path d="M2 21v-3a7 7 0 0 1 14 0v3M17 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 4 5v2" /></>,
      clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6v7l4 2" /></>,
      shield: <path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5Zm-4 10 3 3 5-6" />,
      sparkles: <><path d="m12 2 1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5ZM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z" /></>,
    };
    return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[name]}</svg>;
  };

  const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue";
  const primary = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-purple to-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(37,99,235,.18)] transition hover:-translate-y-0.5 hover:shadow-lg ${focus}`;
  const secondary = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-brand-purple/45 bg-white/75 px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-purple-soft/60 ${focus}`;
  const eyebrow = "text-[10px] font-bold uppercase leading-5 tracking-[0.24em] text-brand-blue sm:text-[11px]";
  const heading = "text-[26px] font-bold leading-[1.15] tracking-[-0.035em] text-brand-dark sm:text-[30px]";
  const body = "text-[15px] leading-[1.5] text-brand-text sm:text-base";

  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-brand-dark antialiased">
      <a href="#main" className={`sr-only z-50 rounded-lg bg-white p-4 focus:fixed focus:left-4 focus:top-4 focus:not-sr-only ${focus}`}>Skip to content</a>

    

      <main id="main">
      <ReusableHero
  eyebrow="Next-gen intelligence. Real business impact."
  title={
    <>
      LLM &{" "}
      <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
        AI
      </span>
    </>
  }
  subtitle="Unlock the power of Large Language Models for your business."
  description="From strategy to implementation, we help you leverage LLMs and advanced AI models to automate processes, enhance customer experiences, and drive innovation across your business."
  buttons={{
    primary: {
      label: "Book a Free Consultation",
      href: consultationHref,
      variant: "primary",
      icon: <ArrowRight className="size-4" />,
    },
    secondary: {
      label: "See LLM & AI in Action",
      href: "#solutions",
      variant: "secondary",
      icon: <Play className="size-3.5" />,
    },
  }}
  stats={[
    {
      value: "3x",
      label: "Faster Insights",
      icon: <Zap className="size-5" />,
    },
    {
      value: "70%",
      label: "Lower Operational Costs",
      icon: <Database className="size-5" />,
    },
    {
      value: "5x",
      label: "Higher Productivity",
      icon: <BarChart3 className="size-5" />,
    },
  ]}
  heroImageSrc={heroImageSrc}
  heroImageAlt="AI strategy consultant"
  leftCards={[
    {
      label: "OpenAI",
      subLabel: "GPT-4o",
      symbol: "◎",
      colorClass: "text-emerald-700",
    },
    {
      label: "Claude",
      subLabel: "by Anthropic",
      symbol: "✳",
      colorClass: "text-orange-500",
    },
    {
      label: "Gemini",
      subLabel: "by Google",
      symbol: "G",
      colorClass: "text-brand-blue",
    },
    {
      label: "Llama",
      subLabel: "by Meta",
      symbol: "∞",
      colorClass: "text-brand-blue",
    },
  ]}
  sideCard={{
    title: (
      <>
        Turn Ideas
        <br />
        Into Intelligence
      </>
    ),
    items: ["Generate", "Analyze", "Automate", "Scale"],
  }}
  rightCards={[
    {
      label: "Build with Responsible AI",
      symbol: "◆",
      colorClass: "text-brand-blue",
    },
    {
      label: "Custom LLM Solutions",
      symbol: "⚙",
      colorClass: "text-brand-blue",
    },
  ]}
  handwrittenText={
    <>
      Bigger
      <br />
      Possibilities
      <br />
      with LLMs
    </>
  }
/>

        <section aria-label="Trusted AI models and technologies" className="mx-auto max-w-[1370px] px-5 py-6 sm:px-8 lg:px-10">
          <p className={eyebrow}>Trusted AI models & technologies</p>
          <div className="mt-4 grid grid-cols-2 items-center gap-x-5 gap-y-6 sm:grid-cols-4 xl:grid-cols-8">
            {modelMarks.map((model) => <div key={model.name} className="flex items-center justify-center gap-2 whitespace-nowrap"><span className={`text-[26px] font-bold leading-none ${model.className}`}>{model.mark}</span><span className="text-base font-semibold tracking-tight text-neutral-800 sm:text-lg">{model.name}</span></div>)}
          </div>
        </section>

        <div className="mx-auto max-w-[1430px] space-y-4 px-5 pb-4 sm:px-8">
          <section id="solutions" aria-labelledby="solutions-title" className="scroll-mt-8 pt-3">
            <div className="mb-4 text-center"><p className={eyebrow}>Complete LLM & AI solutions</p><h2 id="solutions-title" className={heading}>Everything You Need to Build with LLMs & AI</h2><p className={`mt-1 ${body}`}>From strategy and model selection to deployment and monitoring, our end-to-end LLM & AI solutions cover it all.</p></div>
            <div className="grid grid-cols-1 gap-3 min-[450px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
              {solutions.map((item) => <article key={item.title} className="rounded-xl bg-brand-blue-soft/25 px-4 py-5 text-center transition hover:-translate-y-1 hover:bg-brand-blue-soft/45 hover:shadow-lg"><span className={`mx-auto mb-3 flex size-16 items-center justify-center rounded-full ${item.tone}`}>{icon(item.icon, "size-8")}</span><h3 className="text-base font-semibold leading-tight tracking-tight">{item.title}</h3><p className="mx-auto mt-3 max-w-[210px] text-[15px] leading-[1.45] text-brand-text">{item.text}</p></article>)}
            </div>
          </section>

          <section id="how-it-works" aria-labelledby="process-title" className="scroll-mt-8 rounded-2xl bg-brand-blue-soft/25 p-2 pt-3">
            <div className="text-center"><p className={eyebrow}>How it works</p><h2 id="process-title" className={heading}>From Possibility to Production</h2><p className={`mt-1 ${body}`}>A simple, proven process to implement LLMs and AI in your business.</p></div>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => <li key={step.title} className="relative rounded-xl bg-white/75 px-5 py-4 text-center"><span className={`mx-auto mb-2 flex size-16 items-center justify-center rounded-full ${step.tone}`}>{icon(step.icon, "size-8")}</span>{index < steps.length - 1 && <span aria-hidden="true" className="absolute -right-4 top-9 z-10 hidden text-brand-blue lg:block">{icon("arrow", "size-7")}</span>}<span className="block text-sm font-bold">0{index + 1}</span><h3 className="text-base font-semibold leading-tight">{step.title}</h3><p className="mx-auto mt-2 max-w-[195px] text-[14px] leading-[1.4] text-brand-text">{step.text}</p></li>)}
            </ol>
          </section>

          <section id="case-study" aria-labelledby="results-title" className="grid scroll-mt-8 gap-5 lg:grid-cols-2">
            <div className="px-2 py-2 lg:px-5"><p className={eyebrow}>Real results. Real businesses.</p><h2 id="results-title" className={heading}>Transforming Businesses with LLM & AI</h2><p className={`mt-1 ${body}`}>See how companies like yours are achieving higher efficiency, better customer experiences, and greater innovation.</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["312%", "Increase in Operational Efficiency", "arrow", "bg-emerald-50 text-emerald-500"], ["3x", "Faster Content Creation", "users", "bg-brand-purple-soft text-brand-purple"],
                  ["70%", "Lower Support Costs", "clock", "bg-orange-50 text-orange-500"], ["5x", "Higher Productivity", "chart", "bg-rose-50 text-rose-500"],
                ].map(([value, label, itemIcon, tone]) => <div key={label} className="rounded-xl bg-brand-blue-soft/25 px-2 py-3 text-center"><span className={`mx-auto mb-2 flex size-14 items-center justify-center rounded-full ${tone}`}>{icon(itemIcon as IconName)}</span><p className="text-[27px] font-bold leading-none">{value}</p><p className="mx-auto mt-1 max-w-[115px] text-xs leading-tight text-brand-text">{label}</p></div>)}
              </div>
            </div>
            <article className="grid gap-5 rounded-2xl bg-brand-blue-soft/30 p-5 sm:grid-cols-[.85fr_1.55fr]">
              <img src={caseStudyImageSrc} alt="Laptop showing an AI customer service workflow" width={420} height={400} loading="lazy" className="h-56 w-full rounded-xl object-cover sm:h-full sm:min-h-[250px]" />
              <div><span className="rounded-full bg-brand-purple-soft px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-purple">Case study</span><h3 className="mt-2 text-xl font-bold leading-[1.15] tracking-tight">E-commerce Brand: AI Chatbot with GPT-4o</h3><p className="mt-2 text-[14px] leading-[1.45] text-brand-text">We built a custom AI chatbot using GPT-4o to handle customer queries, product recommendations, and order tracking, resulting in 312% higher customer satisfaction in just 3 months.</p><div className="mt-5 grid grid-cols-3 gap-2">{[["312%", "Higher CSAT"], ["4x", "More Conversions"], ["70%", "Lower Support Costs"]].map(([value, label]) => <div key={label} className="border-r border-brand-blue/10 last:border-0"><p className="text-[27px] font-bold leading-none text-brand-blue">{value}</p><p className="mt-1 text-[10px] leading-tight text-brand-text">{label}</p></div>)}</div></div>
            </article>
          </section>

          <section aria-label="Client testimonial and technology stack" className="grid items-center gap-6 rounded-2xl bg-brand-blue-soft/25 p-5 sm:p-6 lg:grid-cols-[1.05fr_1fr]">
            <figure className="flex flex-col items-center gap-5 sm:flex-row"><img src={testimonialImageSrc} alt="Rohan Mehta" width={140} height={140} loading="lazy" className="size-28 shrink-0 rounded-full border-4 border-brand-purple/10 object-cover" /><div><span aria-hidden="true" className="block h-7 font-serif text-5xl font-bold leading-none text-brand-blue">“</span><blockquote className="text-[14px] leading-[1.45] text-brand-text">AI WorksForce helped us implement a custom LLM solution that transformed our customer support. We now resolve queries faster, reduce costs, and deliver a significantly better customer experience.</blockquote><figcaption className="mt-2 text-sm leading-tight"><strong>Rohan Mehta</strong><span className="block text-brand-text">CTO, ShopNext (E-commerce)</span></figcaption></div></figure>
            <div className="lg:border-l lg:border-brand-blue/20 lg:pl-6"><p className={eyebrow}>Built with industry-leading tools</p><div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">{[["⌁", "LangChain"], ["◌", "Pinecone"], ["◢", "Weaviate"], ["◉", "LangSmith"], ["▰", "Docker"], ["aws", "AWS"]].map(([mark, label]) => <div key={label} className="rounded-lg bg-white px-2 py-3 text-center shadow-sm"><span className="block text-xl font-bold text-brand-dark">{mark}</span><span className="mt-1 block text-[10px] text-brand-text">{label}</span></div>)}</div></div>
          </section>
        </div>

        <section aria-labelledby="cta-title" className="relative isolate mx-1 mb-4 overflow-hidden rounded-2xl px-5 py-7 text-center text-white sm:py-8" style={{ background: "linear-gradient(110deg, var(--color-brand-navy), #111d70 58%, #2138db)" }}>
          <svg aria-hidden="true" viewBox="0 0 1440 220" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 -z-10 size-full opacity-20">{Array.from({ length: 16 }, (_, i) => <path key={i} d={`M-80 ${35 + i * 9} C180 ${-90 + i * 14}, 250 ${270 + i * 8}, 570 ${250 + i * 5} S1100 ${210 + i * 7}, 1500 ${i * 12}`} fill="none" stroke="#4785ff" strokeWidth="1" />)}</svg>
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/80">Ready to unlock the power of LLM & AI?</p><h2 id="cta-title" className="mt-2 text-[26px] font-semibold leading-tight tracking-[-0.03em] sm:text-[30px]">Let’s Build Smarter, Faster, Together</h2><p className="mt-2 text-[15px] text-white/85">Get expert guidance to implement LLMs and AI for your business goals.</p>
          <div className="mx-auto mt-5 flex max-w-[570px] flex-col gap-3 sm:flex-row"><a href={consultationHref} className={`inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-blue-soft ${focus}`}>Book a Free Consultation {icon("arrow", "size-4")}</a><a href="#solutions" className={`inline-flex min-h-12 flex-1 items-center justify-center rounded-lg border border-white/70 px-6 py-3 text-sm font-medium hover:bg-white/10 ${focus}`}>Explore Our AI Solutions</a></div>
          <p aria-hidden="true" className="absolute right-[5%] top-10 hidden -rotate-12 font-hand text-[24px] leading-[1.18] desktop-lg:block">Smarter AI<br />Real Impact<br />Bigger Growth</p>
        </section>
      </main>

  
    </div>
  );
}
