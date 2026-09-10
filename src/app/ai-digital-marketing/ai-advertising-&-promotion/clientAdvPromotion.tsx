"use client";

import { useState } from "react";

type IconName =
  | "chart"
  | "target"
  | "file"
  | "settings"
  | "growth"
  | "coins"
  | "search"
  | "users"
  | "pen"
  | "play"
  | "link"
  | "clock"
  | "trophy"
  | "arrow";

const imageUrls = {
  heroWoman:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=850&q=90",
  caseStudy:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=90",
  testimonial:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=90",
};

export default function AIAdvertisingPromotion() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    "Home",
    "What AIWorksForce?",
    "How it Works",
    "Our AI WorkFlow",
    "Solutions",
    "Industries",
    "Case Studies",
    "Resources",
    "About",
  ];

  const solutionCards: {
    title: string;
    text: string;
    icon: IconName;
    tone: string;
  }[] = [
    {
      title: "Audience Research & Targeting",
      text: "Find and reach the right audience with AI-driven insights.",
      icon: "target",
      tone: "bg-rose-100 text-rose-500",
    },
    {
      title: "Ad Creative Generation",
      text: "AI creates high-performing ad copies, images, and videos.",
      icon: "file",
      tone: "bg-sky-100 text-sky-500",
    },
    {
      title: "Campaign Management",
      text: "Automate campaign setup, budget allocation, and optimization.",
      icon: "settings",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      title: "Multi-Platform Ads",
      text: "Run ads across Google, Meta, LinkedIn, YouTube, Instagram, and more.",
      icon: "growth",
      tone: "bg-emerald-100 text-emerald-500",
    },
    {
      title: "Performance Tracking",
      text: "Track real-time results and get actionable insights.",
      icon: "chart",
      tone: "bg-indigo-100 text-brand-purple",
    },
    {
      title: "Cost Optimization",
      text: "Get better results with lower ad spend and higher ROI.",
      icon: "coins",
      tone: "bg-emerald-100 text-emerald-500",
    },
  ];

  const process = [
    {
      icon: "search" as IconName,
      title: "Understand",
      text: "We learn about your business goals, target audience, and budget.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      icon: "users" as IconName,
      title: "Strategize",
      text: "Our AI analyzes data and creates a customized ad strategy.",
      tone: "bg-indigo-100 text-brand-purple",
    },
    {
      icon: "pen" as IconName,
      title: "Create",
      text: "Generate high-converting ad creatives with AI.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      icon: "play" as IconName,
      title: "Launch",
      text: "We set up and run campaigns across multiple platforms.",
      tone: "bg-indigo-100 text-brand-purple",
    },
    {
      icon: "chart" as IconName,
      title: "Optimize",
      text: "AI continuously monitors and improves performance for maximum ROI.",
      tone: "bg-rose-100 text-rose-500",
    },
  ];

  function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
    const paths: Record<IconName, React.ReactNode> = {
      chart: (
        <>
          <path d="M4 20V13M10 20V8M16 20V3M22 20H2" />
        </>
      ),
      target: (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="m15 9 6-6M17 3h4v4" />
        </>
      ),
      file: (
        <>
          <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
          <path d="M14 3v5h5M8 13h8M8 17h6" />
        </>
      ),
      settings: (
        <>
          <path d="m12 2 1.1 2.8 3 .4 1.8 2.5-1.4 2.7 1.4 2.7-1.8 2.5-3 .4L12 22l-1.1-2.8-3-.4-1.8-2.5 1.4-2.7-1.4-2.7 1.8-2.5 3-.4L12 2Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ),
      growth: <path d="M4 19 10 13l4 3 6-9M15 7h5v5" />,
      coins: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M15 9.5c0-1.2-1.3-2-3-2s-3 .8-3 2 1.3 2 3 2 3 .8 3 2-1.3 2-3 2-3-.8-3-2" />
        </>
      ),
      search: (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </>
      ),
      users: (
        <>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 21v-2.5a7 7 0 0 1 14 0V21M5 7a3 3 0 0 0 0 6m14-6a3 3 0 0 1 0 6" />
        </>
      ),
      pen: <path d="m4 20 4.5-1 10-10a2.2 2.2 0 0 0-3-3l-10 10L4 20Zm9-12 3 3" />,
      play: <path d="m8 5 11 7-11 7V5Z" fill="currentColor" stroke="none" />,
      link: (
        <>
          <path d="m10 13 4-4" />
          <path d="m8.5 15.5-1 1a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0" />
          <path d="m15.5 8.5 1-1a3.5 3.5 0 0 0-5-5l-4 4" transform="translate(3 3)" />
        </>
      ),
      clock: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </>
      ),
      trophy: (
        <>
          <path d="M7 3h10v6a5 5 0 0 1-10 0V3Zm5 11v6m-4 1h8M7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4" />
        </>
      ),
      arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    };

    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        {paths[name]}
      </svg>
    );
  }

  function Bubble({
    icon,
    tone = "bg-violet-100 text-brand-purple",
    small = false,
  }: {
    icon: IconName;
    tone?: string;
    small?: boolean;
  }) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full ${
          small ? "size-10" : "size-14"
        } ${tone}`}
      >
        <Icon  name={icon} className={small ? "size-5" : "size-7"} />
      </span>
    );
  }

  const primaryButton =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 text-[12px] font-bold transition hover:-translate-y-0.5";
  const sectionEyebrow =
    "text-center text-[9px] font-bold tracking-[0.28em] text-brand-purple";

  return (
    <div className="overflow-x-hidden bg-white font-sans text-[#090d56]">
   

      <main>
        <section className="relative isolate overflow-hidden rounded-b-[20px] bg-[linear-gradient(112deg,#fafbff_0%,#f5f7ff_48%,#f0efff_100%)]">
          <div className="absolute top-[-130px] right-[-85px] -z-10 size-[690px] rounded-full bg-[radial-gradient(circle,#b6adff95_0%,#d9dcff40_42%,transparent_70%)]" />

          <div className="relative mx-auto grid min-h-[470px] max-w-[1220px] lg:grid-cols-[1.02fr_1fr]">
            <div className="z-10 px-6 pt-9 pb-6 lg:pl-6">
              <p className="text-[10px] font-bold tracking-[0.28em] text-brand-purple">
                SMART ADS. BIGGER RESULTS.
              </p>

              <h1 className="mt-3 text-[48px] leading-[0.92] font-bold tracking-[-2px] sm:text-[59px] lg:text-[63px]">
                AI <span className="text-brand-purple">Advertising &</span>
                <br />
                Promotion
              </h1>

              <h2 className="mt-3 text-[18px] font-bold tracking-[-0.5px] sm:text-[20px]">
                Smarter campaigns. Higher ROI. Real growth.
              </h2>

              <p className="mt-2 max-w-[510px] text-[15px] leading-[1.5] text-brand-text">
                Let AI plan, create, optimize, and manage your advertising campaigns across all platforms.
                From audience targeting to ad creatives and performance tracking — we help you get more
                leads, sales, and brand visibility with less effort.
              </p>

              <div className="mt-3 flex flex-wrap gap-4">
                <a href="#contact" className={`${primaryButton} bg-brand-purple text-white hover:bg-[#4820cc]`}>
                  Book a Free Consultation <span>→</span>
                </a>
                <a
                  href="#how-it-works"
                  className={`${primaryButton} border border-[#7774af] bg-white/50 text-brand-dark hover:bg-white`}
                >
                  <span className="grid size-5 place-items-center rounded-full bg-violet-100 text-[9px] text-brand-purple">
                    ▶
                  </span>
                  See It in Action
                </a>
              </div>

              <div className="mt-7 grid max-w-[530px] grid-cols-3 gap-3">
                {[
                  ["chart", "3x", "Higher ROI"],
                  ["users", "70%", "Lower Ad Spend"],
                  ["target", "5x", "More Qualified Leads"],
                ].map(([icon, value, label], index) => (
                  <div
                    key={label}
                    className={`flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left ${
                      index > 0 ? "border-l border-indigo-100 pl-3" : ""
                    }`}
                  >
                    <Bubble icon={icon as IconName} small />
                    <div>
                      <p className="text-[25px] leading-none font-bold text-brand-purple">{value}</p>
                      <p className="mt-1 text-[10px] text-brand-text-muted">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto h-[450px] w-full max-w-[610px] lg:h-auto">
              <div className="absolute top-[54px] left-1/2 size-[380px] -translate-x-1/2 rounded-full border-[20px] border-white/15 bg-[#b7afff]/15" />
              <div className="absolute top-[90px] left-1/2 size-[280px] -translate-x-1/2 rounded-full border-[18px] border-white/20" />

              <img
                src={imageUrls.heroWoman}
                alt="Advertising strategist"
                className="absolute bottom-0 left-[22%] z-10 h-[80%] w-[50%] rounded-t-[100px] object-cover object-top shadow-[0_15px_45px_rgba(48,42,185,.15)]"
              />

              <div className="absolute top-8 left-2 z-20 grid gap-2">
                {[
                  ["▮▮▮", "AI-Powered Ad Campaigns", "Plan. Create. Optimize.", "text-brand-purple"],
                  ["▲", "Google Ads", "", "text-[#4285F4]"],
                  ["∞", "Meta Ads", "", "text-[#0866ff]"],
                  ["in", "LinkedIn Ads", "", "bg-[#0a66c2] text-white"],
                  ["▶", "YouTube Ads", "", "bg-[#ff0000] text-white"],
                  ["◎", "Instagram Ads", "", "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white"],
                ].map(([symbol, title, subtext, iconStyle], index) => (
                  <div
                    key={title}
                    className={`flex items-center gap-3 rounded-xl bg-white/90 px-3 py-2.5 shadow-[0_5px_20px_rgba(51,42,157,.1)] ${
                      index === 0 ? "w-[198px]" : "w-[145px]"
                    }`}
                  >
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-md text-[19px] font-bold ${
                        iconStyle.includes("bg-") ? iconStyle : `bg-transparent ${iconStyle}`
                      }`}
                    >
                      {symbol}
                    </span>
                    <span className="min-w-0 text-[10px] leading-tight">
                      <strong className="block font-bold">{title}</strong>
                      {subtext && <span className="text-brand-text-muted">{subtext}</span>}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute top-6 right-3 z-20 w-[177px] space-y-2">
                <div className="rounded-[14px] bg-white/90 p-4 shadow-[0_5px_20px_rgba(51,42,157,.1)]">
                  <p className="text-[11px] font-bold">Campaign Performance</p>
                  <p className="mt-1 text-[21px] font-bold text-emerald-500">↑ 256%</p>
                  <p className="text-[10px] text-brand-text-muted">More Conversions</p>
                  <div className="mt-3 flex h-14 items-end justify-between gap-2">
                    {[3, 10, 24, 35, 59, 93].map((height) => (
                      <span
                        key={height}
                        className="w-3 rounded-t bg-gradient-to-t from-[#d8d2ff] to-brand-purple"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-[14px] bg-white/90 p-3 shadow-[0_5px_20px_rgba(51,42,157,.1)]">
                  <p className="mb-2 text-[10px] font-bold">AI Audience Targeting</p>
                  {[
                    "Automated Ad Creation",
                    "Real-Time Optimization",
                    "Performance Tracking",
                    "Higher ROI",
                  ].map((text) => (
                    <p key={text} className="mt-1.5 flex items-center gap-2 text-[9px]">
                      <span className="grid size-4 place-items-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-500">
                        ✓
                      </span>
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              <div className="absolute right-5 bottom-5 z-20 rotate-[-13deg] font-hand text-[19px] leading-tight text-brand-purple">
                Advertise
                <br />
                Smarter
                <br />
                Grow Faster
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 pt-5">
          <p className={sectionEyebrow}>COMPLETE AI ADVERTISING SOLUTIONS</p>
          <h2 className="mt-1 text-center text-[25px] leading-tight font-bold tracking-[-1px] sm:text-[29px]">
            Everything You Need to Run Successful Ad Campaigns
          </h2>
          <p className="mt-1 text-center text-[14px] text-brand-text">
            From strategy to execution, our AI-powered advertising solutions cover all your business promotion needs.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {solutionCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[13px] bg-[linear-gradient(135deg,#fafbff,#f7f8ff)] px-3 py-4 text-center"
              >
                <Bubble icon={item.icon} tone={item.tone} />
                <h3 className="mt-3 text-[13px] leading-[1.25] font-bold">{item.title}</h3>
                <p className="mt-2 text-[12px] leading-[1.45] text-brand-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto mt-4 max-w-[1240px] px-5">
          <div className="rounded-[14px] bg-[linear-gradient(135deg,#fafcff,#f5f7ff)] px-4 py-3">
            <p className={sectionEyebrow}>HOW IT WORKS</p>
            <h2 className="mt-1 text-center text-[26px] leading-tight font-bold tracking-[-0.8px]">
              From Goal to Growth
            </h2>
            <p className="mt-1 text-center text-[14px] text-brand-text">
              A simple, AI-driven process to launch and scale your advertising campaigns.
            </p>

            <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {process.map((item, index) => (
                <article key={item.title} className="relative rounded-xl bg-white/40 px-3 py-2 text-center">
                  <Bubble icon={item.icon} tone={item.tone} />
                  {index !== process.length - 1 && (
                    <span className="absolute top-4 -right-4 hidden text-[29px] text-brand-purple lg:block">→</span>
                  )}
                  <p className="mt-1.5 text-[12px] font-bold">{`0${index + 1}`}</p>
                  <h3 className="text-[13px] font-bold">{item.title}</h3>
                  <p className="mt-1 text-[12px] leading-[1.4] text-brand-text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-3 grid max-w-[1240px] gap-4 px-5 lg:grid-cols-2">
          <div>
            <p className="text-[9px] font-bold tracking-[0.28em] text-brand-purple">
              REAL RESULTS. REAL BUSINESSES.
            </p>
            <h2 className="mt-1 text-[25px] leading-tight font-bold">Advertising Success with AI</h2>
            <p className="mt-1 text-[13px] leading-[1.4] text-brand-text">
              See how businesses like yours are getting more leads, higher sales, and better ROI with AI WorksForce.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["growth", "312%", "Increase in Leads", "bg-emerald-100 text-emerald-500"],
                ["users", "60%", "Lower Ad Spend", "bg-violet-100 text-brand-purple"],
                ["trophy", "3x", "More Sales", "bg-orange-100 text-orange-500"],
                ["chart", "5x", "Higher ROI", "bg-violet-100 text-brand-purple"],
              ].map(([icon, value, text, tone]) => (
                <div key={text} className="rounded-xl bg-[#fafbff] p-3 text-center">
                  <Bubble icon={icon as IconName} tone={tone} small />
                  <p className="mt-1.5 text-[23px] leading-none font-bold">{value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-brand-text">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <article className="flex flex-col gap-5 rounded-[15px] bg-[#f8f9ff] p-5 sm:flex-row sm:items-center">
            <img
              src={imageUrls.caseStudy}
              alt="E-commerce campaign case study"
              className="h-[165px] w-full rounded-xl object-cover sm:w-[145px]"
            />
            <div>
              <span className="rounded-full bg-violet-100 px-2 py-1 text-[8px] font-bold tracking-wider text-brand-purple">
                CASE STUDY
              </span>
              <h3 className="mt-2 text-[16px] leading-tight font-bold">
                E-commerce Brand: 3x Sales in 3 Months
              </h3>
              <p className="mt-2 text-[11px] leading-[1.4] text-brand-text">
                With our AI advertising strategy, this e-commerce brand reduced ad spend by 60% and
                achieved 3x higher sales through targeted Meta and Google Ads.
              </p>
              <div className="mt-3 flex gap-6">
                {[
                  ["312%", "More Sales"],
                  ["60%", "Lower Ad Spend"],
                  ["3x", "ROI in 3 Months"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-[21px] leading-none font-bold text-brand-purple">{value}</p>
                    <p className="mt-1 text-[9px] text-brand-text">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-3 max-w-[1240px] px-5">
          <div className="flex flex-col items-center gap-5 rounded-[15px] bg-[linear-gradient(110deg,#f6f8ff,#f3f6ff)] px-5 py-4 lg:flex-row">
            <img
              src={imageUrls.testimonial}
              alt="Amit Verma"
              className="size-[105px] shrink-0 rounded-full border-4 border-indigo-100 object-cover"
            />

            <div className="flex-1">
              <span className="grid size-8 place-items-center rounded-full bg-white text-[31px] leading-none font-bold text-brand-purple">
                “
              </span>
              <p className="mt-1 text-[12px] leading-[1.45] text-brand-text">
                “AI WorksForce completely transformed our advertising. We’re getting better leads,
                lower costs, and a significant increase in revenue.”
              </p>
              <p className="mt-2 text-[11px] font-bold">Amit Verma</p>
              <p className="text-[10px] text-brand-text">Founder, StyleKart (E-commerce)</p>
            </div>

            <div className="grid w-full grid-cols-3 divide-x divide-indigo-100 lg:w-[390px]">
              {[
                ["growth", "3x", "More Revenue", "bg-emerald-100 text-emerald-500"],
                ["clock", "70%", "Time Saved", "bg-violet-100 text-brand-purple"],
                ["users", "5x", "More Qualified Leads", "bg-violet-100 text-brand-purple"],
              ].map(([icon, value, label, tone]) => (
                <div key={label} className="px-2 text-center">
                  <Bubble icon={icon as IconName} tone={tone} small />
                  <p className="mt-1.5 text-[23px] leading-none font-bold">{value}</p>
                  <p className="mt-1 text-[10px] text-brand-text">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative isolate mx-1 mt-3 overflow-hidden rounded-[14px] bg-[linear-gradient(110deg,#07154d,#0c1772_55%,#2836e4)] px-5 py-5 text-center text-white"
        >
          <div className="absolute inset-0 -z-10 opacity-30 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_10px,#7180ff_11px_12px)]" />
          <p className="text-[9px] tracking-[0.27em]">READY TO SCALE YOUR BUSINESS?</p>
          <h2 className="mt-2 text-[25px] leading-tight font-semibold">
            Let’s Launch Smarter Ad Campaigns with AI
          </h2>
          <p className="mt-1 text-[12px]">
            Get a custom AI advertising strategy tailored to your business goals.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@example.com" className={`${primaryButton} bg-white text-brand-dark`}>
              Book a Free Consultation <span>→</span>
            </a>
            <a href="#contact" className={`${primaryButton} border border-white/60 text-white`}>
              Talk to Our Ad Experts
            </a>
          </div>
          <p className="absolute right-[6%] bottom-5 hidden rotate-[-10deg] text-left font-hand text-[20px] leading-tight xl:block">
            More Leads
            <br />
            More Sales
            <br />
            A Brighter Future
          </p>
        </section>
      </main>

     
    </div>
  );
}