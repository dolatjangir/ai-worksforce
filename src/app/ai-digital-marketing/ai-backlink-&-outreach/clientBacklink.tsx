"use client";

import { useState } from "react";

// Replace these with your original images for an exact visual match.
const images = {
  hero: "/images/outreach-woman.png", // Transparent PNG
  caseStudy: "/images/seo-dashboard.jpg",
  testimonial: "/images/rahul-mehta.jpg",
};

type IconName =
  | "link"
  | "search"
  | "mail"
  | "chart"
  | "trophy"
  | "settings"
  | "users"
  | "target"
  | "clock"
  | "growth";

export default function AIBacklinkOutreach() {
  const [menuOpen, setMenuOpen] = useState(false);

  function Icon({
    name,
    className = "",
  }: {
    name: IconName;
    className?: string;
  }) {
    const paths: Record<IconName, React.ReactNode> = {
      link: (
        <>
          <path d="m10 13 4-4" />
          <path d="m8.5 15.5-1 1a3.54 3.54 0 0 1-5-5l4-4a3.54 3.54 0 0 1 5 0" />
          <path d="m15.5 8.5 1-1a3.54 3.54 0 0 0-5-5l-4 4" transform="translate(3 3)" />
        </>
      ),
      search: (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </>
      ),
      mail: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6M3 18l6-5m12 5-6-5" />
        </>
      ),
      chart: (
        <>
          <rect x="3" y="13" width="4" height="8" rx="1" fill="currentColor" stroke="none" />
          <rect x="10" y="8" width="4" height="13" rx="1" fill="currentColor" stroke="none" />
          <rect x="17" y="3" width="4" height="18" rx="1" fill="currentColor" stroke="none" />
        </>
      ),
      trophy: (
        <>
          <path d="M7 3h10v6a5 5 0 0 1-10 0V3ZM12 14v6m-4 1h8M7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4" />
        </>
      ),
      settings: (
        <>
          <path d="m10 2-.7 3-2 .9-2.8-.8-2 3.5 2.1 2.1v2.5l-2.1 2.1 2 3.5 2.8-.8 2 .9.7 3h4l.7-3 2-.9 2.8.8 2-3.5-2.1-2.1v-2.5l2.1-2.1-2-3.5-2.8.8-2-.9L14 2Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ),
      users: (
        <>
          <circle cx="12" cy="7" r="3" />
          <path d="M6 21v-3a6 6 0 0 1 12 0v3ZM5 5a3 3 0 0 0 0 6m14-6a3 3 0 0 1 0 6M2 20v-3a4 4 0 0 1 3-4m17 7v-3a4 4 0 0 0-3-4" />
        </>
      ),
      target: (
        <>
          <circle cx="11" cy="13" r="8" />
          <circle cx="11" cy="13" r="4" />
          <path d="m11 13 9-9m-4 0h4v4" />
        </>
      ),
      clock: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6v6l4 2" />
        </>
      ),
      growth: <path d="M5 19 19 5M10 5h9v9" />,
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
        aria-hidden="true"
      >
        {paths[name]}
      </svg>
    );
  }

  function Bubble({
    name,
    tone = "purple",
    small = false,
  }: {
    name: IconName;
    tone?: "purple" | "green" | "sky" | "orange" | "pink";
    small?: boolean;
  }) {
    const tones = {
      purple: "bg-[#e8e5ff] text-[#3920ff]",
      green: "bg-[#d8f5ec] text-[#00b789]",
      sky: "bg-[#dcf2ff] text-[#00a3f8]",
      orange: "bg-[#fff0d9] text-[#ff9b00]",
      pink: "bg-[#ffe1eb] text-[#ff2466]",
    };

    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full ${
          small ? "size-11" : "size-16"
        } ${tones[tone]}`}
      >
        <Icon name={name} className={small ? "size-6" : "size-8"} />
      </span>
    );
  }

  const nav = [
    ["Home", "#home"],
    ["What AIWorksForce?", "#solutions"],
    ["How it Works", "#how-it-works"],
    ["Our AI WorkFlow", "#how-it-works"],
    ["Solutions", "#solutions"],
    ["Industries", "#results"],
    ["Case Studies", "#case-study"],
    ["Resources", "#results"],
    ["About", "#testimonial"],
  ];

  const solutions: { icon: IconName; title: string; text: string; tone?: "green" | "sky" }[] = [
    {
      icon: "search",
      title: "Prospect Research",
      text: "Find high-authority, relevant websites in your niche using AI.",
    },
    {
      icon: "mail",
      title: "Personalized Outreach",
      text: "AI generates and sends personalized outreach emails at scale.",
      tone: "sky",
    },
    {
      icon: "link",
      title: "Link Acquisition",
      text: "Secure guest posts, niche edits, and editorial backlinks.",
    },
    {
      icon: "chart",
      title: "Tracking & Reporting",
      text: "Monitor progress, backlink quality, and SEO impact in real-time.",
      tone: "green",
    },
    {
      icon: "settings",
      title: "Continuous Optimization",
      text: "AI learns, adapts, and improves outreach for better results.",
    },
  ];

  const steps: { icon: IconName; title: string; text: string; tone?: "green" | "pink" }[] = [
    {
      icon: "search",
      title: "Find Prospects",
      text: "AI scans the web to find relevant, high-authority sites.",
    },
    {
      icon: "mail",
      title: "Outreach",
      text: "Send personalized emails and follow-ups automatically.",
      tone: "green",
    },
    {
      icon: "link",
      title: "Get Links",
      text: "Earn high-quality backlinks from real, relevant websites.",
    },
    {
      icon: "chart",
      title: "Track Results",
      text: "Monitor new links, referrals, and SEO growth.",
    },
    {
      icon: "trophy",
      title: "Scale",
      text: "Keep optimizing and scale your backlink strategy.",
      tone: "pink",
    },
  ];

  const button =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-7 text-[13px] font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue";

  return (
    <div className="overflow-x-clip bg-white font-sans text-[#080c54] [--page-purple:#3620ff]">
    

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden rounded-b-[22px] bg-[linear-gradient(110deg,#f9faff_0%,#f7f9ff_46%,#eeefff_76%,#f8fbff_100%)]">
          <div className="pointer-events-none absolute top-[-110px] right-[-35px] size-[670px] rounded-full bg-[radial-gradient(circle,#b6acff66,transparent_68%)]" />

          <div className="relative mx-auto grid max-w-[1216px] lg:min-h-[470px] lg:grid-cols-[1.03fr_1fr]">
            <div className="relative z-10 px-6 pt-10 pb-7 lg:pl-7 lg:pr-0">
              <p className="text-[10px] font-semibold tracking-[0.24em] text-[#3620ff]">
                STRONGER LINKS. HIGHER RANKINGS.
              </p>

              <h1 className="mt-3 text-[44px] leading-[0.98] font-bold tracking-[-1.8px] sm:text-[58px] lg:text-[64px]">
                AI <span className="text-[#3520ff]">Backlink &</span>
                <br />
                Outreach
              </h1>

              <h2 className="mt-3 text-[18px] leading-snug font-semibold tracking-[-0.45px] lg:text-[20px]">
                Build authority. Earn high-quality backlinks. Grow faster.
              </h2>

              <p className="mt-2 max-w-[505px] text-[15px] leading-[1.5] text-[#4e598b] lg:text-[16px]">
                Let AI handle your backlink research, prospecting, outreach, and
                follow-ups — so you get high-authority links, stronger domain
                authority, and better search rankings without the manual effort.
              </p>

              <div className="mt-4 flex flex-wrap gap-4">
                <a href="#contact" className={`${button} bg-[#3520ff] text-white hover:bg-[#2815dd]`}>
                  Book a Free Consultation <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className={`${button} border border-[#7e79b9] bg-white/40 text-[#090d55] hover:bg-white`}
                >
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#e8e4ff] text-[12px] text-[#3520ff]">
                    ▶
                  </span>
                  See How It Works
                </a>
              </div>

              <div className="mt-9 grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { icon: "link" as const, value: "3x", label: "More Quality Backlinks" },
                  { icon: "chart" as const, value: "70%", label: "Less Manual Work" },
                  { icon: "trophy" as const, value: "2x", label: "Higher Domain Authority" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 ${
                      index ? "border-l border-[#e9eaff] pl-3" : ""
                    }`}
                  >
                    <Bubble name={stat.icon} small />
                    <div>
                      <p className="text-[27px] leading-none font-bold text-[#3520ff]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[10px] leading-snug text-[#465387] sm:text-[12px]">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto h-[460px] w-full max-w-[620px] lg:h-full">
              {[0, 1, 2].map((ring) => (
                <div
                  key={ring}
                  className="absolute top-1/2 left-1/2 rounded-full border-[18px] border-white/15 bg-[#b8afff]/10"
                  style={{
                    width: 460 - ring * 70,
                    height: 460 - ring * 70,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}

              <div className="absolute top-12 left-[48%] flex size-[84px] items-center justify-center rounded-full bg-gradient-to-br from-[#25b0ff] to-[#5730ff] text-white shadow-lg">
                <Icon name="link" className="size-11" />
              </div>

              <img
                src={images.hero}
                alt="Outreach specialist working on a laptop"
                className="absolute bottom-0 left-[10%] z-10 h-[83%] w-[67%] object-contain object-bottom"
              />

              <div className="absolute top-[58px] left-3 z-20 space-y-4 sm:left-4">
                {[
                  { icon: "target" as const, text: <>Find<br />Link Opportunities<br /><span className="font-normal">with AI</span></> },
                  { icon: "mail" as const, text: <>Automate<br />Outreach & Follow-ups</> },
                  { icon: "users" as const, text: <>Get High-Quality<br />Backlinks</> },
                ].map((card, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 rounded-[14px] bg-white/90 p-3 shadow-[0_5px_22px_#6960db12] ${
                      index === 2 ? "max-w-[180px]" : "max-w-[208px]"
                    }`}
                  >
                    <Bubble name={card.icon} small />
                    <p className="text-[11px] leading-[1.35] font-semibold">{card.text}</p>
                  </div>
                ))}
              </div>

              <div className="absolute top-8 right-3 z-20 w-[170px] space-y-1.5 sm:right-0 sm:w-[203px]">
                <div className="rounded-[15px] bg-white/90 px-4 pt-4 pb-5 shadow-[0_5px_22px_#6960db12]">
                  <p className="text-[12px] font-bold">Domain Authority</p>
                  <p className="mt-1 text-[23px] font-bold text-[#00b77f]">↑256%</p>
                  <div className="mt-3 flex h-[73px] items-end justify-between gap-3 px-1">
                    {[4, 13, 27, 42, 65, 100].map((height) => (
                      <span
                        key={height}
                        className="w-4 rounded-t-[3px] bg-gradient-to-t from-[#d8d1ff] to-[#3920ff]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-[15px] bg-white/90 p-4 shadow-[0_5px_22px_#6960db12]">
                  <p className="mb-2 text-[12px] font-bold">High Authority Links</p>
                  {["Guest Posts", "Niche Edits", "Digital PR", "Resource Page Links", "Directory Submissions"].map((item) => (
                    <div key={item} className="mt-1.5 flex items-center gap-2 text-[11px]">
                      <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-[#a9ead5] font-bold text-[#059f79]">
                        ✓
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute right-5 bottom-5 z-20 rotate-[-12deg] font-hand text-[21px] leading-[1.05] text-[#3920ff]">
                Stronger
                <br />
                Authority
                <br />
                Bigger
                <br />
                Growth
                <svg className="absolute -left-16 bottom-3 w-16" viewBox="0 0 70 40" fill="none" aria-hidden="true">
                  <path d="M64 5C42 31 22 32 5 23m0 0 10-3M5 23l8 7M64 5l-2 11m2-11-11 3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="mx-auto max-w-[1280px] scroll-mt-6 px-5 pt-6 lg:px-[30px]">
          <div className="text-center">
            <p className="text-[10px] font-medium tracking-[0.22em] text-[#3620ff]">
              COMPLETE AI-POWERED LINK BUILDING SOLUTIONS
            </p>
            <h2 className="mt-1 text-[25px] leading-tight font-bold tracking-[-0.8px] sm:text-[30px]">
              Everything You Need for Effective Link Building
            </h2>
            <p className="mt-1 text-[15px] text-[#535e90]">
              From prospecting to outreach to tracking — our AI-powered solutions cover the entire backlink process.
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="rounded-[15px] bg-[linear-gradient(135deg,#f8faff,#fafaff)] px-5 pt-4 pb-5 text-center"
              >
                <Bubble name={solution.icon} tone={solution.tone} />
                <h3 className="mt-3 text-[16px] leading-snug font-bold tracking-[-0.5px]">
                  {solution.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[170px] text-[15px] leading-[1.45] text-[#515c8c]">
                  {solution.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="how-it-works" className="mx-auto mt-4 max-w-[1280px] scroll-mt-6 px-5 lg:px-[30px]">
          <div className="rounded-[15px] bg-[linear-gradient(120deg,#f9fbff,#fdfdff,#f8faff)] px-4 pt-2 pb-4">
            <div className="text-center">
              <p className="text-[10px] font-medium tracking-[0.22em] text-[#3620ff]">
                HOW IT WORKS
              </p>
              <h2 className="mt-1 text-[26px] leading-tight font-bold tracking-[-0.7px]">
                From Prospect to Powerful Backlinks
              </h2>
              <p className="mt-1 text-[15px] text-[#535e90]">
                A simple, AI-driven process to get you high-quality backlinks on autopilot.
              </p>
            </div>

            <div className="mt-4 grid gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {steps.map((step, index) => (
                <article key={step.title} className="relative text-center">
                  <Bubble name={step.icon} tone={step.tone} />
                  {index < steps.length - 1 && (
                    <span aria-hidden="true" className="absolute top-5 -right-7 hidden text-[33px] font-light text-[#492cff] lg:block">
                      →
                    </span>
                  )}
                  <p className="mt-2 text-[15px] leading-tight font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[15px] leading-tight font-bold">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-[175px] text-[14px] leading-[1.45] text-[#515c8c]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Results and case study */}
        <section id="results" className="mx-auto mt-5 grid max-w-[1216px] gap-7 px-5 lg:grid-cols-[1fr_1.02fr] lg:px-3">
          <div>
            <p className="text-[10px] font-medium tracking-[0.23em] text-[#3620ff]">
              REAL RESULTS. REAL BUSINESSES.
            </p>
            <h2 className="mt-1 text-[29px] leading-tight font-bold tracking-[-0.9px]">
              Backlink Success with AI
            </h2>
            <p className="mt-1 max-w-[540px] text-[15px] leading-[1.45] text-[#515c8c]">
              See how businesses like yours are building stronger authority and achieving higher rankings with AI WorksForce.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: "growth" as const, tone: "green" as const, value: "256%", label: <>Increase in<br />Organic Traffic</> },
                { icon: "chart" as const, tone: "purple" as const, value: "3x", label: <>More Quality<br />Backlinks</> },
                { icon: "users" as const, tone: "purple" as const, value: "70%", label: <>Less Outreach<br />Time</> },
                { icon: "trophy" as const, tone: "orange" as const, value: "2x", label: <>Higher<br />Domain Authority</> },
              ].map((stat, index) => (
                <div key={index} className="rounded-xl bg-[#f9faff] px-2 py-3 text-center">
                  <Bubble name={stat.icon} tone={stat.tone} small />
                  <p className="mt-1.5 text-[25px] leading-none font-bold tracking-[-1px]">{stat.value}</p>
                  <p className="mt-1 text-[12px] leading-[1.4] text-[#515c8c]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <article id="case-study" className="flex flex-col gap-6 rounded-[17px] bg-[#f8f9ff] p-5 sm:flex-row sm:items-center lg:px-7">
            <img
              src={images.caseStudy}
              alt="Laptop displaying an organic traffic growth dashboard"
              className="h-[193px] w-full rounded-[14px] object-cover sm:w-[169px]"
            />
            <div className="min-w-0 flex-1">
              <span className="rounded-full bg-[#e8e4ff] px-2 py-1 text-[9px] font-semibold tracking-widest text-[#3520ff]">
                CASE STUDY
              </span>
              <h3 className="mt-2 text-[17px] leading-[1.2] font-bold tracking-[-0.4px]">
                SaaS Brand: 3x Organic Growth in 6 Months
              </h3>
              <p className="mt-2 text-[12px] leading-[1.45] text-[#515c8c]">
                With our AI backlink & outreach strategy, this SaaS brand earned 150+ high-authority backlinks,
                resulting in 3x higher organic traffic and top 3 rankings for competitive keywords.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  ["3x", "Organic Traffic"],
                  ["150+", "Quality Backlinks"],
                  ["Top 3", "Keyword Rankings"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-[22px] leading-tight font-bold tracking-[-0.7px] text-[#3520ff]">{value}</p>
                    <p className="text-[10px] leading-snug text-[#515c8c]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        {/* Testimonial */}
        <section id="testimonial" className="mx-auto mt-4 max-w-[1280px] px-5 lg:px-[30px]">
          <div className="flex flex-col items-center gap-6 rounded-[17px] bg-[linear-gradient(110deg,#f4f6ff,#f7f8ff,#f3f6ff)] px-6 py-4 lg:flex-row">
            <img
              src={images.testimonial}
              alt="Rahul Mehta"
              className="size-[135px] shrink-0 rounded-full border-4 border-[#e4e5fb] object-cover"
            />

            <figure className="flex-1">
              <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-white text-[43px] leading-none font-bold text-[#3520ff]">
                “
              </span>
              <blockquote className="mt-1 text-[13px] leading-[1.45] text-[#465487]">
                “AI WorksForce made our link building process effortless. We got high-quality backlinks,
                better rankings, and a huge boost in organic traffic — all with minimal effort from our side.”
              </blockquote>
              <figcaption className="mt-2 text-[12px]">
                <strong className="block">Rahul Mehta</strong>
                <span className="text-[#515c8c]">CEO, GrowthTech (SaaS)</span>
              </figcaption>
            </figure>

            <div className="grid w-full grid-cols-3 divide-x divide-[#d5d8fa] lg:w-[410px] lg:border-l lg:border-[#d5d8fa]">
              {[
                { icon: "growth" as const, value: "3x", label: "Organic Growth", tone: "green" as const },
                { icon: "clock" as const, value: "70%", label: "Time Saved", tone: "purple" as const },
                { icon: "chart" as const, value: "2x", label: "Domain Authority", tone: "purple" as const },
              ].map((stat) => (
                <div key={stat.label} className="px-2 text-center">
                  <Bubble name={stat.icon} tone={stat.tone} small />
                  <p className="mt-2 text-[25px] leading-none font-bold">{stat.value}</p>
                  <p className="mt-1 text-[12px] text-[#515c8c]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="relative isolate mx-1 mt-3 overflow-hidden rounded-[15px] bg-[linear-gradient(115deg,#070e50_0%,#071556_54%,#2c31e9_100%)] px-6 py-6 text-center text-white">
          <svg
            viewBox="0 0 1280 190"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-25"
            aria-hidden="true"
          >
            {Array.from({ length: 18 }, (_, index) => (
              <path
                key={index}
                d={`M-40 ${index * 9} C 130 ${-70 + index * 13}, 210 ${220 + index * 5}, 510 ${195 + index * 7} S 1000 ${230 - index * 6}, 1330 ${15 + index * 8}`}
                fill="none"
                stroke="#6d77ef"
                strokeWidth="0.6"
              />
            ))}
          </svg>

          <p className="text-[9px] tracking-[0.25em]">READY TO BUILD YOUR AUTHORITY?</p>
          <h2 className="mt-2 text-[27px] leading-tight font-semibold tracking-[-0.5px]">
            Get High-Quality Backlinks with AI
          </h2>
          <p className="mt-1 text-[13px]">
            Let our AI team handle the outreach, so you can focus on growing your business.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@your-domain.com" className={`${button} border border-[#dcdfff] bg-white text-[#080c54] hover:bg-[#eeeaff]`}>
              Book a Free Consultation <span aria-hidden="true">→</span>
            </a>
            <a href="#solutions" className={`${button} border border-white/60 bg-white/5 text-white hover:bg-white/15`}>
              Explore Our SEO Solutions
            </a>
          </div>

          <div className="absolute top-10 right-[6%] hidden rotate-[-13deg] font-hand text-[23px] leading-[1.2] xl:block">
            Better Links
            <br />
            Higher Rankings
            <br />
            Real Growth
            <svg viewBox="0 0 90 45" className="ml-9 h-10 w-20" fill="none" aria-hidden="true">
              <path d="M70 2C78 25 43 40 23 31m0 0 11-5m-11 5 10 7" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </div>
        </section>
      </main>

   
    </div>
  );
}