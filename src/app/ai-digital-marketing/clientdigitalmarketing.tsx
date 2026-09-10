"use client";

import { useState, type ReactNode } from "react";

type IconName =
  | "chart"
  | "search"
  | "file"
  | "share"
  | "link"
  | "megaphone"
  | "video"
  | "settings"
  | "growth"
  | "users"
  | "clock"
  | "arrow";

const images = {
  hero:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=90",
  testimonial:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=90",
};

function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
  const shapes: Record<IconName, ReactNode> = {
    chart: <path d="M4 20V13M10 20V8M16 20V3M22 20H2" />,
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    file: (
      <>
        <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5M8 13h8M8 17h6" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="19" r="2" />
        <path d="m8 11 8-5m-8 7 8 5" />
      </>
    ),
    link: (
      <>
        <path d="m10 13 4-4" />
        <path d="m8.5 15.5-1 1a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0" />
        <path d="m15.5 8.5 1-1a3.5 3.5 0 0 0-5-5l-4 4" transform="translate(3 3)" />
      </>
    ),
    megaphone: (
      <>
        <path d="m3 12 13-6v12L3 12Z" />
        <path d="M16 10h3a2 2 0 0 1 0 4h-3M6 14l1.5 5H11l-1-4" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </>
    ),
    settings: (
      <>
        <path d="m12 2 1.1 2.8 3 .4 1.8 2.5-1.4 2.7 1.4 2.7-1.8 2.5-3 .4L12 22l-1.1-2.8-3-.4-1.8-2.5 1.4-2.7-1.4-2.7 1.8-2.5 3-.4L12 2Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    growth: <path d="M4 19 10 13l4 3 6-9M15 7h5v5" />,
    users: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21v-2.5a7 7 0 0 1 14 0V21M5 7a3 3 0 0 0 0 6m14-6a3 3 0 0 1 0 6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {shapes[name]}
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
      <Icon name={icon} className={small ? "size-5" : "size-7"} />
    </span>
  );
}

export default function AIDigitalMarketingPage() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const nav = [
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

  const solutions = [
    {
      title: "AI SEO",
      text: "Rank higher with AI-driven keyword research, content optimization, and technical SEO strategies.",
      icon: "search" as IconName,
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      title: "AI Content Marketing",
      text: "Create high-quality, engaging content with AI to attract, inform, and convert your audience.",
      icon: "file" as IconName,
      tone: "bg-sky-100 text-brand-sky",
    },
    {
      title: "AI Social Media",
      text: "Plan, create, and automate your social media presence across all platforms with AI.",
      icon: "share" as IconName,
      tone: "bg-sky-100 text-brand-sky",
    },
    {
      title: "AI Backlink & Outreach",
      text: "Build high-authority backlinks with AI-powered research, prospecting, and outreach.",
      icon: "link" as IconName,
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      title: "AI Advertising & Promotion",
      text: "Run smarter ad campaigns across Google, Meta, LinkedIn and more with AI optimization.",
      icon: "megaphone" as IconName,
      tone: "bg-rose-100 text-rose-500",
    },
    {
      title: "AI Creative & Video",
      text: "Generate stunning visuals, videos, and ad creatives with AI to grab attention and drive results.",
      icon: "video" as IconName,
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      title: "AI Marketing Automation",
      text: "Automate your entire marketing funnel — from lead generation to customer nurturing.",
      icon: "settings" as IconName,
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      title: "AI Marketing Analytics",
      text: "Turn data into insights with AI. Track performance, predict trends, and optimize your strategy.",
      icon: "chart" as IconName,
      tone: "bg-sky-100 text-brand-sky",
    },
  ];

  const button =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 text-[12px] font-bold transition duration-200 hover:-translate-y-0.5";

  return (
    <div className="overflow-x-hidden bg-white font-sans text-brand-dark">
     

      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden rounded-b-[20px] bg-[linear-gradient(112deg,#fafbff_0%,#f5f7ff_48%,#f0efff_100%)]"
        >
          <div className="absolute top-[-130px] right-[-75px] -z-10 size-[690px] rounded-full bg-[radial-gradient(circle,#b5acff95_0%,#d9dcff40_42%,transparent_70%)]" />

          <div className="relative mx-auto grid min-h-[405px] max-w-[1220px] lg:grid-cols-[1.02fr_1fr]">
            <div className="z-10 px-6 pt-8 pb-6 lg:pl-6">
              <p className="text-[10px] font-bold tracking-[0.28em] text-brand-purple">
                AI-POWERED DIGITAL MARKETING
              </p>

              <h1 className="mt-2 text-[49px] leading-[0.92] font-bold tracking-[-2px] sm:text-[61px] lg:text-[63px]">
                AI Digital
                <br />
                <span className="text-brand-purple">Marketing</span>
              </h1>

              <h2 className="mt-3 text-[18px] font-bold tracking-[-0.5px] sm:text-[20px]">
                Smarter Strategies. Higher Impact. Real Growth.
              </h2>

              <p className="mt-2 max-w-[510px] text-[15px] leading-[1.5] text-brand-text">
                Let AI handle the complexities of digital marketing — from content and campaigns to analytics and
                automation. We help you attract more customers, boost engagement, and grow your business faster
                with AI-powered solutions.
              </p>

              <div className="mt-3 flex flex-wrap gap-4">
                <a href="#contact" className={`${button} bg-brand-purple text-white hover:bg-[#4820cc]`}>
                  Book a Free Consultation <span>→</span>
                </a>
                <a
                  href="#solutions"
                  className={`${button} border border-[#7774af] bg-white/50 text-brand-dark hover:bg-white`}
                >
                  <span className="grid size-5 place-items-center rounded-full bg-violet-100 text-[9px] text-brand-purple">
                    ▶
                  </span>
                  See How It Works
                </a>
              </div>

              <div className="mt-6 grid max-w-[620px] grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["chart", "3x", "More Leads", "bg-emerald-100 text-emerald-500"],
                  ["clock", "70%", "Less Manual Work", "bg-violet-100 text-brand-purple"],
                  ["chart", "5x", "Higher ROI", "bg-violet-100 text-brand-purple"],
                  ["clock", "24/7", "Campaign Optimization", "bg-violet-100 text-brand-purple"],
                ].map(([icon, value, label, tone], index) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 ${
                      index > 0 ? "sm:border-l sm:border-indigo-100 sm:pl-3" : ""
                    }`}
                  >
                    <Bubble icon={icon as IconName} tone={tone} small />
                    <div>
                      <p className="text-[23px] leading-none font-bold text-brand-purple">{value}</p>
                      <p className="mt-1 text-[9px] leading-tight text-brand-text-muted">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto h-[405px] w-full max-w-[610px] lg:h-auto">
              <div className="absolute top-[45px] left-1/2 size-[350px] -translate-x-1/2 rounded-full border-[20px] border-white/15 bg-[#b7afff]/15" />

              <img
                src={images.hero}
                alt="Digital marketing strategist"
                className="absolute bottom-0 left-[26%] z-10 h-[77%] w-[46%] rounded-t-[100px] object-cover object-top shadow-[0_15px_45px_rgba(48,42,185,.15)]"
              />

              <div className="absolute top-8 left-3 z-20 grid gap-2">
                <div className="w-[170px] rounded-xl bg-white/90 p-3 shadow-[0_5px_20px_rgba(51,42,157,.1)]">
                  <p className="text-[10px] font-bold">Total Growth</p>
                  <p className="mt-1 text-[21px] font-bold text-emerald-500">↑ 256%</p>
                  <div className="mt-2 flex h-11 items-end justify-between gap-2">
                    {[4, 14, 29, 45, 67, 100].map((height) => (
                      <span
                        key={height}
                        className="w-3 rounded-t bg-gradient-to-t from-[#d8d2ff] to-brand-purple"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                {[
                  ["▲", "More Traffic", "bg-violet-100 text-brand-purple"],
                  ["♧", "Better Engagement", "bg-emerald-100 text-emerald-500"],
                  ["↻", "Higher Conversions", "bg-sky-100 text-brand-sky"],
                  ["◉", "Stronger Brand", "bg-violet-100 text-brand-purple"],
                ].map(([symbol, text, tone]) => (
                  <div
                    key={text}
                    className="flex w-[165px] items-center gap-3 rounded-lg bg-white/90 px-3 py-2 shadow-[0_5px_20px_rgba(51,42,157,.1)]"
                  >
                    <span className={`grid size-7 place-items-center rounded-md text-[16px] font-bold ${tone}`}>
                      {symbol}
                    </span>
                    <span className="text-[9px] font-bold">{text}</span>
                  </div>
                ))}
              </div>

              <div className="absolute top-7 right-3 z-20 w-[165px] rounded-[14px] bg-white/90 p-4 shadow-[0_5px_20px_rgba(51,42,157,.1)]">
                <p className="text-[13px] leading-tight font-bold">
                  AI-Powered
                  <br />
                  Marketing for Your
                  <br />
                  Business
                </p>

                <div className="mt-4 grid gap-2">
                  {[
                    "Automate Campaigns",
                    "Create Engaging Content",
                    "Reach the Right Audience",
                    "Track Real Results",
                  ].map((item) => (
                    <p key={item} className="flex items-center gap-2 text-[9px] text-brand-text">
                      <span className="grid size-4 place-items-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-500">
                        ✓
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="absolute top-[24px] left-[52%] z-20 grid size-11 place-items-center rounded-xl bg-white text-[26px] shadow-md">
                ▲
              </div>
              <div className="absolute top-[18px] right-[26%] z-20 grid size-10 place-items-center rounded-xl bg-gradient-to-br from-orange-400 via-rose-500 to-violet-600 text-[22px] text-white">
                ◎
              </div>
              <div className="absolute top-[78px] right-[18%] z-20 grid size-10 place-items-center rounded-xl bg-[#0a66c2] text-[18px] font-bold text-white">
                in
              </div>

              <div className="absolute right-7 bottom-7 z-20 rotate-[-13deg] font-hand text-[19px] leading-tight text-brand-purple">
                Marketing
                <br />
                Smarter
                <br />
                with AI
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-[1240px] px-5 pt-6">
          <p className="text-center text-[9px] font-bold tracking-[0.28em] text-brand-purple">
            OUR AI DIGITAL MARKETING SOLUTIONS
          </p>
          <h2 className="mt-1 text-center text-[25px] leading-tight font-bold tracking-[-1px] sm:text-[29px]">
            Complete AI-Powered Digital Marketing for Your Business
          </h2>
          <p className="mt-1 text-center text-[14px] text-brand-text">
            Explore our AI-driven solutions to grow your brand, reach the right audience, and get real results.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[178px] rounded-[14px] bg-[linear-gradient(135deg,#fbfcff,#f5f7ff)] p-5"
              >
                <Bubble icon={item.icon} tone={item.tone} />
                <h3 className="mt-3 text-[15px] leading-tight font-bold">{item.title}</h3>
                <p className="mt-2 max-w-[215px] text-[13px] leading-[1.42] text-brand-text">{item.text}</p>
                <span className="absolute right-4 bottom-4 grid size-8 place-items-center rounded-full bg-white text-brand-purple shadow-[0_2px_12px_rgba(49,38,200,.12)] transition group-hover:translate-x-1">
                  <Icon name="arrow" className="size-4" />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-4 max-w-[1240px] px-5">
          <div className="relative isolate overflow-hidden rounded-[15px] bg-[linear-gradient(110deg,#061348,#102476_58%,#2639e7)] px-7 py-7 text-white sm:px-12">
            <div className="absolute inset-0 -z-10 opacity-30 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_10px,#7180ff_11px_12px)]" />
            <p className="text-[9px] tracking-[0.28em]">READY TO GROW YOUR BUSINESS?</p>
            <div className="mt-2 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-[28px] leading-tight font-semibold">See all ai digital marketing</h2>
                <p className="mt-2 text-[13px] text-indigo-100">
                  Discover how our AI-powered digital marketing solutions can take your business to the next level.
                </p>
              </div>
              <a href="#solutions" className={`${button} shrink-0 bg-white text-brand-dark`}>
                Explore <Icon name="arrow" className="size-4" />
              </a>
            </div>
            <p className="absolute right-8 bottom-5 hidden rotate-[-11deg] font-hand text-[19px] leading-tight xl:block">
              More Traffic
              <br />
              More Customers
              <br />A Bigger Future
            </p>
          </div>
        </section>

        <section className="mx-auto mt-5 grid max-w-[1240px] gap-5 px-5 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <p className="text-[9px] font-bold tracking-[0.28em] text-brand-purple">
              TRUSTED BY GROWING BUSINESSES
            </p>
            <h2 className="mt-1 text-[25px] leading-tight font-bold">Real Businesses. Real Results.</h2>
            <p className="mt-1 text-[13px] leading-[1.45] text-brand-text">
              See how companies are achieving higher traffic, better engagement, and more sales with AI WorksForce.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["growth", "312%", "Increase in Website Traffic", "bg-emerald-100 text-emerald-500"],
                ["users", "3x", "More Leads", "bg-violet-100 text-brand-purple"],
                ["clock", "70%", "Less Marketing Time", "bg-orange-100 text-orange-500"],
                ["chart", "5x", "Higher Conversions", "bg-rose-100 text-rose-500"],
              ].map(([icon, value, label, tone]) => (
                <div key={label} className="rounded-xl bg-[#fafbff] p-3 text-center">
                  <Bubble icon={icon as IconName} tone={tone} small />
                  <p className="mt-1.5 text-[23px] leading-none font-bold">{value}</p>
                  <p className="mt-1 text-[10px] leading-tight text-brand-text">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <article className="rounded-[15px] bg-[linear-gradient(110deg,#f7f9ff,#f1f5ff)] p-5">
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <img
                src={images.testimonial}
                alt="Rahul Mehta"
                className="size-[112px] shrink-0 rounded-full border-4 border-indigo-100 object-cover"
              />
              <div>
                <span className="grid size-8 place-items-center rounded-full bg-white text-[31px] leading-none font-bold text-brand-purple">
                  “
                </span>
                <blockquote className="mt-1 text-[13px] leading-[1.45] text-brand-text">
                  “AI WorksForce transformed our digital marketing completely. We got higher traffic,
                  better leads, and real revenue growth — all with less effort from our side.”
                </blockquote>
                <p className="mt-2 text-[11px] font-bold">Rahul Mehta</p>
                <p className="text-[10px] text-brand-text">Founder, GrowthTech (SaaS)</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-indigo-100 pt-4">
              <p className="text-[18px] tracking-[2px] text-orange-400">★★★★★ <span className="ml-2 text-[12px] font-bold text-brand-dark">5.0/5</span></p>
              <p className="text-[12px] text-brand-text-muted">Trusted by 200+ businesses</p>
            </div>
          </article>
        </section>
      </main>

   
    </div>
  );
}