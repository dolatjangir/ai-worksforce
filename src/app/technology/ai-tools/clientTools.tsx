"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

/**
 * One component, no icon packages or additional stylesheet required.
 * Uses the supplied Tailwind v4 global.css.
 * Load Inter with next/font/google in your root layout for consistent typography.
 * Replace the stock images with your original assets for the closest match.
 * The statistics and testimonial reproduce the supplied design; verify before publishing.
 */
type AIToolsPageProps = {
  consultationHref?: string;
  heroImageSrc?: string;
  caseStudyImageSrc?: string;
  testimonialImageSrc?: string;
};

type IconName = "write" | "image" | "gear" | "bolt" | "chart" | "megaphone" | "search" | "file" | "users" | "clock" | "rocket" | "trend" | "star" | "check" | "arrow" | "play";

const categories: { title: string; description: string; icon: IconName; tone: string }[] = [
  { title: "Content & Writing", description: "Tools like ChatGPT, Claude, and Jasper for high-quality content creation.", icon: "write", tone: "bg-brand-blue-soft text-brand-blue" },
  { title: "Image & Video", description: "Tools like Midjourney, DALL·E, and Runway for stunning visuals and videos.", icon: "image", tone: "bg-brand-purple-soft text-brand-purple" },
  { title: "Automation", description: "Tools like Zapier, Make, and n8n to automate your workflows.", icon: "gear", tone: "bg-brand-green-soft text-brand-green" },
  { title: "Productivity", description: "Tools like Notion AI, ClickUp, and Microsoft Copilot to get more done.", icon: "bolt", tone: "bg-brand-orange-soft text-brand-orange" },
  { title: "Analytics & Research", description: "Tools like Perplexity, Google Analytics, and Tableau for data-driven insights.", icon: "chart", tone: "bg-brand-purple-soft text-brand-purple" },
  { title: "Marketing", description: "Tools like Canva, Copy.ai, and HubSpot for smarter marketing campaigns.", icon: "megaphone", tone: "bg-brand-blue-soft text-brand-blue" },
];

const steps: { title: string; description: string; icon: IconName; tone: string }[] = [
  { title: "Understand", description: "We learn about your goals, challenges, and use cases.", icon: "search", tone: "bg-brand-purple-soft text-brand-purple" },
  { title: "Recommend", description: "We suggest the best AI tools tailored to your business needs.", icon: "file", tone: "bg-brand-green-soft text-brand-green" },
  { title: "Setup & Integrate", description: "We help you set up and integrate the tools seamlessly.", icon: "gear", tone: "bg-brand-purple-soft text-brand-purple" },
  { title: "Train & Support", description: "We provide guidance, training, and ongoing support.", icon: "users", tone: "bg-brand-purple-soft text-brand-purple" },
  { title: "Get Results", description: "You start seeing real improvements in productivity, efficiency, and growth.", icon: "chart", tone: "bg-brand-orange-soft text-brand-orange" },
];

const navItems = [
  ["Home", "/"], ["What AI WorksForce?", "/about"], ["How it Works", "#how-it-works"],
  ["Our AI Workflow", "/ai-workflow"], ["Solutions", "#tools"], ["Industries", "/industries"],
  ["Case Studies", "#results"], ["Resources", "/resources"], ["About", "/about"],
];

export default function AIToolsPage({
  consultationHref = "/contact",
  heroImageSrc = "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
  caseStudyImageSrc = "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=700&q=85",
  testimonialImageSrc = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85",
}: AIToolsPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const icon = (name: IconName, className = "size-7") => {
    const paths: Record<IconName, ReactNode> = {
      write: <><path d="m16 3 5 5-12 12-6 1 1-6Z"/><path d="m14 5 5 5M4 15l5 5"/></>,
      image: <><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1"/><path d="m3 17 5-5 4 4 4-6 5 7"/></>,
      gear: <><path d="m10 3-1 3-3 1-3 3 2 2-1 3 3 3 3-1 2 4 3-1 1-3 3-1 2-3-2-2 1-3-3-3-3 1-2-3Z"/><circle cx="12" cy="12" r="3"/></>,
      bolt: <path d="m13 2-8 12h6l-1 8 9-13h-7Z" fill="currentColor" strokeWidth="1"/>,
      chart: <><path d="M5 20v-6M12 20V8M19 20V3" strokeWidth="5"/></>,
      megaphone: <><path d="m3 10 17-6v16L3 14ZM7 15l2 6h3l-2-5M20 9l2-1"/></>,
      search: <><circle cx="10" cy="10" r="7"/><path d="m15 15 6 6" strokeWidth="3"/></>,
      file: <><path d="M5 2h10l4 4v16H5ZM14 2v6h5M8 12h8M8 16h8M8 19h5"/></>,
      users: <><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3ZM17 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 4 5v2"/></>,
      clock: <><circle cx="12" cy="12" r="9"/><path d="M12 6v7l4 2"/></>,
      rocket: <><path d="M8 15C8 8 14 3 21 3c0 7-5 13-12 13l-3-3ZM8 9H4l-2 6h5M15 16v4l-6 2v-5M5 18l-2 3"/><circle cx="16" cy="8" r="1"/></>,
      trend: <path d="m4 19 15-15M9 4h10v10" strokeWidth="3"/>,
      star: <path d="m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1Z" fill="currentColor" strokeWidth="1"/>,
      check: <path d="m5 12 4 4L19 6" strokeWidth="3"/>,
      arrow: <path d="M4 12h16m-6-6 6 6-6 6"/>,
      play: <path d="m9 5 11 7-11 7Z" fill="currentColor"/>,
    };
    return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[name]}</svg>;
  };
  const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue";
  const primaryButton = `inline-flex min-h-12 items-center justify-center gap-2 rounded-[9px] bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_var(--shadow-blue-medium)] transition-colors hover:bg-brand-blue-dark ${focus}`;
  const secondaryButton = `inline-flex min-h-12 items-center justify-center gap-2 rounded-[9px] border border-brand-blue/55 bg-white/70 px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-blue-soft ${focus}`;
  const eyebrow = "text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-brand-blue sm:text-[11px]";
  const heading = "text-[26px] font-bold leading-[1.16] tracking-[-0.035em] text-brand-dark sm:text-[30px] lg:text-[32px]";
  const body = "text-[15px] leading-[1.55] text-brand-text sm:text-base";
  const circle = "mx-auto mb-3 flex size-16 items-center justify-center rounded-full";
  const panel: CSSProperties = { background: "linear-gradient(135deg, var(--color-blue-50), var(--color-white))" };

  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-brand-dark antialiased">
      <a href="#main-content" className={`sr-only z-50 rounded-lg bg-white p-4 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 ${focus}`}>Skip to content</a>
  

      <main id="main-content">
        <section aria-labelledby="hero-title" className="relative isolate rounded-b-2xl" style={{ background: "radial-gradient(ellipse at 73% 36%, var(--color-brand-purple-soft), transparent 48%), linear-gradient(115deg, var(--color-blue-50), white 56%, var(--color-indigo-50))" }}>
          <div className="mx-auto grid max-w-[1370px] gap-5 px-5 pb-8 pt-10 sm:px-8 lg:min-h-[515px] lg:grid-cols-[1fr_1.08fr] lg:gap-0 lg:px-10 lg:pb-5 lg:pt-10">
            <div className="relative z-10 lg:py-1">
              <p className={eyebrow}>Powerful AI tools. Real business impact.</p>
              <h1 id="hero-title" className="mt-2 text-[58px] font-bold leading-[1.03] tracking-[-0.055em] sm:text-[72px] lg:text-[80px]">AI <span className="text-brand-blue">Tools</span></h1>
              <h2 className="mt-2 max-w-[580px] text-xl font-semibold leading-[1.25] tracking-[-0.025em] sm:text-[23px]">The right AI tools for a smarter, faster, more productive business.</h2>
              <p className="mt-3 max-w-[570px] text-base leading-[1.5] text-brand-text sm:text-[18px]">Discover, compare, and implement the best AI tools for your business needs. From content creation and automation to analytics and productivity — we help you find, integrate, and get the most out of the right AI tools.</p>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row">
                <a href={consultationHref} className={primaryButton}>Book a Free Consultation {icon("arrow", "size-4")}</a>
                <a href="#tools" className={secondaryButton}><span className="rounded-full bg-brand-purple-soft p-1 text-brand-purple">{icon("play", "size-4")}</span> See AI Tools in Action</a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-5">
                {([{ value: "3x", label: "Higher Productivity", icon: "trend" }, { value: "70%", label: "Time Savings", icon: "clock" }, { value: "5x", label: "Faster Execution", icon: "rocket" }] as const).map((stat) => <div key={stat.label} className="flex flex-col items-start gap-2 border-r border-brand-blue/10 last:border-0 sm:flex-row sm:items-center sm:gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-purple-soft text-brand-purple sm:size-14">{icon(stat.icon)}</span>
                  <div><p className="text-[27px] font-bold leading-none tracking-tight text-brand-blue sm:text-[31px]">{stat.value}</p><p className="mt-1 text-[11px] leading-tight text-brand-text sm:text-sm">{stat.label}</p></div>
                </div>)}
              </div>
            </div>
            <div className="relative mx-auto mt-4 h-[415px] w-full max-w-[670px] sm:h-[460px] lg:-mt-3">
              <div aria-hidden="true" className="absolute inset-x-[14%] inset-y-6 rounded-full bg-brand-purple-light/15 blur-2xl"/>
              {/* For the screenshot silhouette, pass a transparent portrait PNG. */}
              <img src={heroImageSrc} alt="AI tools consultant" width={420} height={530} fetchPriority="high" className="absolute bottom-0 left-[19%] h-[89%] w-[56%] rounded-t-[45%] rounded-b-2xl object-cover object-top shadow-[0_14px_50px_var(--shadow-blue-medium)]"/>
              <div className="absolute bottom-0 left-[27%] flex h-[112px] w-[43%] items-center justify-center rounded-lg border border-white/80 bg-gradient-to-br from-white via-slate-200 to-slate-300 text-sm font-bold shadow-lg">AI WorksForce</div>
              <div className="absolute left-0 top-8 grid gap-3 sm:left-1">
                {[{ label: "ChatGPT", symbol: "◎", color: "text-brand-green" }, { label: "Claude", symbol: "✳", color: "text-brand-orange" }, { label: "Gemini", symbol: "G", color: "text-brand-blue" }, { label: "Notion AI", symbol: "N", color: "text-brand-dark" }].map((tool) => <div key={tool.label} className="flex min-h-[62px] w-[128px] items-center gap-3 rounded-xl border border-white bg-white/95 px-3 shadow-[0_8px_30px_var(--shadow-blue-soft)] sm:w-[164px] sm:px-4"><span aria-hidden="true" className={`text-[33px] font-bold leading-none ${tool.color}`}>{tool.symbol}</span><span className="text-xs font-semibold sm:text-sm">{tool.label}</span></div>)}
              </div>
              <aside className="absolute -right-1 top-0 w-[155px] rounded-xl border border-white bg-white/95 p-3 shadow-[0_8px_30px_var(--shadow-blue-soft)] sm:w-[225px] sm:p-5">
                <h3 className="text-base font-bold leading-tight tracking-tight sm:text-lg">Smarter Tools<br/>Bigger Possibilities</h3>
                <ul className="mt-3 space-y-2">{["Find the Right Tools", "Expert Recommendations", "Seamless Integration", "Real Business Results"].map((text) => <li key={text} className="flex items-center gap-2 text-[10px] sm:text-xs"><span className="rounded-full bg-brand-green-soft text-brand-green">{icon("check", "size-3.5")}</span>{text}</li>)}</ul>
              </aside>
              <div className="absolute right-0 top-[205px] grid gap-3 sm:right-8 sm:top-[210px]">
                <div className="flex items-center gap-2 rounded-xl bg-white/95 px-3 py-3 shadow-sm"><span aria-hidden="true" className="text-2xl text-brand-purple">♧</span><span className="text-xs font-semibold sm:text-sm">Midjourney</span></div>
                <div className="flex items-center gap-3 rounded-xl bg-white/95 px-3 py-3 shadow-sm"><span aria-hidden="true" className="text-3xl leading-none text-brand-orange">✱</span><span className="text-xs font-semibold sm:text-sm">Zapier</span></div>
              </div>
              <p className="absolute bottom-2 right-0 -rotate-12 font-hand text-[23px] leading-[1.08] text-brand-blue sm:bottom-3 sm:text-[27px]">The Best<br/>AI Tools<br/>for Your<br/>Business</p>
            </div>
          </div>
        </section>

        <section aria-label="AI tools we work with" className="mx-auto max-w-[1370px] px-5 py-6 sm:px-8 lg:px-10">
          <p className={eyebrow}>Trusted AI tools we work with</p>
          <div className="mt-4 grid grid-cols-4 items-center gap-x-5 gap-y-6 text-center md:grid-cols-8 md:gap-6">
            <span className="text-lg font-semibold tracking-tight text-black sm:text-2xl">◎ OpenAI</span>
            <span className="text-xl font-medium tracking-tight sm:text-[28px]"><span className="text-brand-blue">G</span><span className="text-red-500">o</span><span className="text-amber-500">o</span><span className="text-brand-blue">g</span><span className="text-brand-green">l</span><span className="text-red-500">e</span></span>
            <span className="text-xl tracking-tight text-brand-text sm:text-[28px]"><span className="text-brand-blue">∞</span> Meta</span>
            <span className="flex items-center justify-center gap-2 text-xs font-medium text-neutral-600 sm:text-lg"><span aria-hidden="true" className="grid size-6 shrink-0 grid-cols-2 gap-0.5"><i className="bg-orange-500"/><i className="bg-lime-500"/><i className="bg-sky-500"/><i className="bg-amber-400"/></span>Microsoft</span>
            <span className="text-xl font-semibold text-red-600 sm:text-2xl">Λ Adobe</span>
            <span className="text-lg font-semibold text-black sm:text-xl">▣ Notion</span>
            <span className="text-xl font-bold tracking-[-0.065em] text-neutral-900 sm:text-[29px]"><span className="text-brand-orange">_</span>zapier</span>
            <span className="font-hand text-[32px] font-bold italic text-brand-sky sm:text-[38px]">Canva</span>
          </div>
        </section>

        <div className="mx-auto max-w-[1430px] space-y-4 px-5 pb-4 sm:px-8">
          <section id="tools" aria-labelledby="tools-title" className="scroll-mt-6 pt-3">
            <div className="mb-4 text-center"><p className={eyebrow}>Explore. Compare. Implement.</p><h2 id="tools-title" className={heading}>Everything You Need in AI Tools</h2><p className={`mt-1 ${body}`}>From content and design to automation and analytics, we help you find the perfect tools for your goals.</p></div>
            <div className="grid grid-cols-1 gap-4 min-[440px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
              {categories.map((category) => <article key={category.title} className="rounded-xl bg-brand-blue-soft/30 px-4 py-5 text-center transition-colors hover:bg-brand-blue-soft/65"><span className={`${circle} ${category.tone}`}>{icon(category.icon, "size-8")}</span><h3 className="text-base font-semibold leading-snug tracking-[-0.025em] lg:text-[17px]">{category.title}</h3><p className="mx-auto mt-3 max-w-[205px] text-[15px] leading-[1.5] text-brand-text">{category.description}</p></article>)}
            </div>
          </section>

          <section id="how-it-works" aria-labelledby="process-title" className="scroll-mt-6 rounded-2xl bg-brand-blue-soft/30 p-2 pt-3">
            <div className="px-3 text-center"><p className={eyebrow}>How it works</p><h2 id="process-title" className={heading}>Find the Right AI Tools in 5 Simple Steps</h2><p className={`mt-1 ${body}`}>We make it easy to discover, evaluate, and implement the best AI tools for your business.</p></div>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => <li key={step.title} className="relative rounded-xl bg-white/75 px-5 py-4 text-center">
                <span className={`${circle} ${step.tone}`}>{icon(step.icon, "size-8")}</span>
                {index < steps.length - 1 && <span aria-hidden="true" className="absolute -right-4 top-10 z-10 hidden text-brand-blue lg:block">{icon("arrow", "size-7")}</span>}
                <span className="block text-base font-bold leading-tight">0{index + 1}</span><h3 className="text-base font-semibold leading-tight tracking-tight">{step.title}</h3><p className="mx-auto mt-2 max-w-[195px] text-[15px] leading-[1.45] text-brand-text">{step.description}</p>
              </li>)}
            </ol>
          </section>

          <section id="results" aria-labelledby="results-title" className="grid scroll-mt-6 gap-6 lg:grid-cols-2">
            <div className="px-2 lg:px-5"><p className={eyebrow}>Real tools. Real results.</p><h2 id="results-title" className={heading}>Businesses Grow Faster with AI Tools</h2><p className={`mt-1 ${body}`}>See how companies like yours are achieving higher productivity, lower costs, and bigger results with the right AI tools.</p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {([{ value: "312%", label: "Increase in Productivity", icon: "trend", tone: "bg-brand-green-soft text-brand-green" }, { value: "70%", label: "Time Saved", icon: "users", tone: "bg-brand-purple-soft text-brand-purple" }, { value: "3x", label: "Faster Execution", icon: "clock", tone: "bg-brand-purple-soft text-brand-purple" }, { value: "5x", label: "Higher ROI", icon: "chart", tone: "bg-brand-orange-soft text-brand-orange" }] as const).map((stat) => <div key={stat.label} className="rounded-xl bg-brand-blue-soft/30 px-2 py-3 text-center"><span className={`mx-auto mb-2 flex size-14 items-center justify-center rounded-full ${stat.tone}`}>{icon(stat.icon)}</span><p className="text-[29px] font-bold leading-none tracking-tight">{stat.value}</p><p className="mx-auto mt-1 max-w-[105px] text-sm leading-tight text-brand-text">{stat.label}</p></div>)}
              </div>
            </div>
            <article className="grid gap-5 rounded-2xl bg-brand-blue-soft/35 p-5 sm:grid-cols-[0.85fr_1.65fr] lg:p-6">
              <img src={caseStudyImageSrc} alt="Creative workspace with a laptop" width={400} height={480} loading="lazy" className="h-52 w-full rounded-xl object-cover sm:h-full sm:min-h-52"/>
              <div><span className="rounded-full bg-brand-purple-soft px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-purple">Case study</span><h3 className="mt-2 text-xl font-bold leading-[1.15] tracking-tight">Marketing Agency: 4x Faster Content Production</h3><p className="mt-2 text-[15px] leading-[1.4] text-brand-text">A digital marketing agency integrated AI tools like ChatGPT, Canva, and Zapier, reducing content production time by 70% and achieving 4x more output with the same team.</p>
                <div className="mt-5 grid grid-cols-3 gap-2">{[["70%", "Time Saved"], ["4x", "More Output"], ["312%", "Higher Productivity"]].map(([value, label]) => <div key={label} className="border-r border-brand-blue/10 last:border-0"><p className="text-[27px] font-bold leading-none tracking-tight text-brand-blue">{value}</p><p className="mt-1 text-[11px] leading-tight text-brand-text">{label}</p></div>)}</div>
              </div>
            </article>
          </section>

          <section aria-label="Client testimonial" className="grid items-center gap-6 rounded-2xl p-5 sm:p-6 lg:grid-cols-[1.55fr_1fr]" style={panel}>
            <figure className="flex flex-col items-center gap-5 sm:flex-row"><img src={testimonialImageSrc} alt="Client portrait placeholder" width={140} height={140} loading="lazy" className="size-28 shrink-0 rounded-full border-4 border-brand-purple/10 object-cover"/><div><span aria-hidden="true" className="block h-8 font-serif text-5xl font-bold leading-none text-brand-blue">“</span><blockquote className="text-[15px] leading-[1.45] text-brand-text">AI WorksForce helped us identify and implement the right AI tools for our business. We’ve saved hours every week and achieved better results than ever before.</blockquote><figcaption className="mt-2 text-sm leading-snug"><strong className="font-semibold">Amit Sharma</strong><span className="block text-brand-text">CEO, GrowthPrime (Marketing Agency)</span></figcaption></div></figure>
            <div className="grid grid-cols-3 lg:border-l lg:border-brand-blue/20">{([{ value: "70%", label: "Time Saved", icon: "bolt", tone: "bg-brand-green-soft text-brand-green" }, { value: "3x", label: "More Output", icon: "users", tone: "bg-brand-purple-soft text-brand-purple" }, { value: "5x", label: "Higher ROI", icon: "star", tone: "bg-brand-orange-soft text-brand-orange" }] as const).map((stat) => <div key={stat.label} className="border-r border-brand-blue/15 px-2 text-center last:border-0"><span className={`mx-auto mb-2 flex size-14 items-center justify-center rounded-full ${stat.tone}`}>{icon(stat.icon)}</span><p className="text-[28px] font-bold leading-none tracking-tight">{stat.value}</p><p className="mt-1 text-sm text-brand-text">{stat.label}</p></div>)}</div>
          </section>
        </div>

        <section aria-labelledby="cta-title" className="relative isolate mx-1 mb-8 overflow-hidden rounded-2xl px-5 py-7 text-center text-white sm:py-8" style={{ background: "linear-gradient(110deg, var(--color-brand-navy), var(--color-brand-dark) 46%, var(--color-brand-blue-dark))" }}>
          <svg aria-hidden="true" viewBox="0 0 1440 240" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 -z-10 size-full opacity-20">{Array.from({ length: 18 }, (_, index) => <path key={index} d={`M-60 ${30 + index * 9} C180 ${-80 + index * 13}, 240 ${290 + index * 8}, 550 ${270 + index * 6} S1100 ${210 + index * 8}, 1510 ${index * 13}`} fill="none" stroke="var(--color-brand-blue)" strokeWidth="1"/>)}</svg>
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/90">Ready to find your perfect AI tools?</p><h2 id="cta-title" className="mx-auto mt-2 max-w-4xl text-[26px] font-semibold leading-tight tracking-[-0.03em] sm:text-[30px]">Let’s Build a Smarter, More Productive Business</h2><p className="mx-auto mt-2 max-w-3xl text-[15px] leading-relaxed text-white/90 sm:text-base">Get expert recommendations and support to implement the best AI tools for your goals.</p>
          <div className="mx-auto mt-5 flex max-w-[580px] flex-col justify-center gap-4 sm:flex-row"><a href={consultationHref} className={`inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-blue-soft ${focus}`}>Book a Free Consultation {icon("arrow", "size-4")}</a><a href="#tools" className={`inline-flex min-h-12 flex-1 items-center justify-center rounded-lg border border-white/65 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10 ${focus}`}>Explore AI Tools</a></div>
          <p aria-hidden="true" className="absolute right-[4%] top-12 hidden -rotate-12 font-hand text-[25px] leading-[1.2] desktop-lg:block">Right Tools<br/>Greater Productivity<br/>Bigger Growth</p>
        </section>
      </main>
    </div>
  );
}
