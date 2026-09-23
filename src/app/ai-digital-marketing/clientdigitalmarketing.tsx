"use client";

import DigitalMarketingHero from "@/components/digital-marketing-hero/reusable-hero";
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
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-bold sm:text-base transition duration-200 hover:-translate-y-0.5";

  return (
    <div className="overflow-x-hidden bg-white font-sans text-brand-dark">
     

      <main>
     <DigitalMarketingHero
  eyebrow="AI-POWERED DIGITAL MARKETING"
  title="AI Digital"
  highlightedTitle="Marketing"
  subtitle="Smarter Strategies. Higher Impact. Real Growth."
  description="Let AI handle the complexities of digital marketing — from content and campaigns to analytics and automation. We help you attract more customers, boost engagement, and grow your business faster with AI-powered solutions."
  imageSrc="/digital-marketing/ai-digital-marketing-hero.png"
  imageAlt="Digital marketing strategist"
  primaryLabel="Book a Free Consultation"
  primaryHref="#contact"
  secondaryLabel="See How It Works"
  secondaryHref="#solutions"
  metrics={[
    {
      value: "3x",
      label: "More Leads",
      icon: "chart",
      tone: "green",
    },
    {
      value: "70%",
      label: "Less Manual Work",
      icon: "clock",
      tone: "purple",
    },
    {
      value: "5x",
      label: "Higher ROI",
      icon: "chart",
      tone: "purple",
    },
   
  ]}
/>

        <section id="solutions" className="mx-auto max-w-[1240px] px-5 pt-6">
          <p className="text-center text-sm font-bold tracking-[0.2em] sm:text-base text-brand-purple">
            OUR AI DIGITAL MARKETING SOLUTIONS
          </p>
          <h2 className="mt-1 text-center text-[26px] leading-[1.16] font-bold tracking-[-0.5px] sm:text-[30px] lg:text-[32px]">
            Complete AI-Powered Digital Marketing for Your Business
          </h2>
          <p className="mt-1 text-center text-base leading-[1.5] text-brand-text">
            Explore our AI-driven solutions to grow your brand, reach the right audience, and get real results.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[178px] rounded-[14px] bg-[linear-gradient(135deg,#fbfcff,#f5f7ff)] p-5"
              >
                <Bubble icon={item.icon} tone={item.tone} />
                <h3 className="mt-3 text-base leading-[1.25] font-bold sm:text-lg">{item.title}</h3>
                <p className="mt-2 max-w-[215px] text-base leading-[1.5] text-brand-text">{item.text}</p>
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
            <p className="text-sm tracking-[0.2em] sm:text-base">READY TO GROW YOUR BUSINESS?</p>
            <div className="mt-2 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl leading-[1.15] font-semibold sm:text-3xl lg:text-4xl">See all ai digital marketing</h2>
                <p className="mt-2 text-base leading-[1.5] text-indigo-100">
                  Discover how our AI-powered digital marketing solutions can take your business to the next level.
                </p>
              </div>
              <a href="#solutions" className={`${button} shrink-0 bg-white text-brand-dark`}>
                Explore <Icon name="arrow" className="size-4" />
              </a>
            </div>
            <p className="absolute right-8 bottom-5 hidden rotate-[-11deg] font-hand text-lg leading-tight xl:block">
              More Traffic
              <br />
              More Customers
              <br />A Bigger Future
            </p>
          </div>
        </section>

        <section className="mx-auto mt-5 grid max-w-[1240px] gap-5 px-5 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] sm:text-base text-brand-purple">
              TRUSTED BY GROWING BUSINESSES
            </p>
            <h2 className="mt-1 text-[26px] leading-[1.16] font-bold sm:text-[30px] lg:text-[32px]">Real Businesses. Real Results.</h2>
            <p className="mt-1 text-base leading-[1.5] text-brand-text">
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
                  <p className="mt-1.5 text-2xl leading-none font-bold sm:text-3xl">{value}</p>
                  <p className="mt-1 text-sm leading-[1.35] text-brand-text">{label}</p>
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
                <span className="grid size-8 place-items-center rounded-full bg-white text-3xl leading-none font-bold text-brand-purple sm:text-4xl">
                  “
                </span>
                <blockquote className="mt-1 text-base leading-[1.5] text-brand-text">
                  “AI WorksForce transformed our digital marketing completely. We got higher traffic,
                  better leads, and real revenue growth — all with less effort from our side.”
                </blockquote>
                <p className="mt-2 text-sm font-bold sm:text-base">Rahul Mehta</p>
                <p className="text-sm text-brand-text">Founder, GrowthTech (SaaS)</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-indigo-100 pt-4">
              <p className="text-lg tracking-[2px] text-orange-400 sm:text-xl">★★★★★ <span className="ml-2 text-sm font-bold sm:text-base text-brand-dark">5.0/5</span></p>
              <p className="text-sm text-brand-text-muted sm:text-base">Trusted by 200+ businesses</p>
            </div>
          </article>
        </section>
      </main>

   
    </div>
  );
}