"use client";

import DigitalMarketingHero from "@/components/digital-marketing-hero/reusable-hero";
import { useState } from "react";

type IconName =
  | "mail"
  | "users"
  | "megaphone"
  | "settings"
  | "chart"
  | "zap"
  | "layers"
  | "share"
  | "target"
  | "search"
  | "file"
  | "rocket"
  | "growth"
  | "clock"
  | "arrow";

const images = {
  hero:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=90",
  caseStudy:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=90",
  testimonial:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=90",
};

function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6M3 18l6-5m12 5-6-5" />
      </>
    ),
    users: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21v-2.5a7 7 0 0 1 14 0V21M5 7a3 3 0 0 0 0 6m14-6a3 3 0 0 1 0 6" />
      </>
    ),
    megaphone: (
      <>
        <path d="m3 12 13-6v12L3 12Z" />
        <path d="M16 10h3a2 2 0 0 1 0 4h-3M6 14l1.5 5H11l-1-4" />
      </>
    ),
    settings: (
      <>
        <path d="m12 2 1.1 2.8 3 .4 1.8 2.5-1.4 2.7 1.4 2.7-1.8 2.5-3 .4L12 22l-1.1-2.8-3-.4-1.8-2.5 1.4-2.7-1.4-2.7 1.8-2.5 3-.4L12 2Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    chart: <path d="M4 20V13M10 20V8M16 20V3M22 20H2" />,
    zap: <path d="m13 2-9 12h7l-1 8 10-13h-7l0-7Z" fill="currentColor" stroke="none" />,
    layers: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
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
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="m15 9 6-6M17 3h4v4" />
      </>
    ),
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
    rocket: <path d="M14 4c3-2 5-2 6-2 0 1 0 3-2 6l-6 6-5 1 1-5 6-6Zm-4 8-5 5m1-8-3 1-2-2 1-3 4-1m9 9 1 4-3 1-2-2 1-3" />,
    growth: <path d="M4 19 10 13l4 3 6-9M15 7h5v5" />,
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
      {paths[name]}
    </svg>
  );
}

function Bubble({
  icon,
  tone = "bg-[#e9e7ff] text-brand-purple",
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

export default function AIMarketingAutomationPage() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      icon: "zap" as IconName,
      title: "Lead Generation Automation",
      text: "Automatically capture, qualify, and nurture leads using AI.",
      tone: "bg-rose-100 text-rose-500",
    },
    {
      icon: "mail" as IconName,
      title: "Email Marketing Automation",
      text: "Send personalized emails at the right time for higher conversions.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      icon: "share" as IconName,
      title: "Social Media Automation",
      text: "Plan, create, and publish content automatically across all platforms.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      icon: "users" as IconName,
      title: "Customer Journey Automation",
      text: "Deliver the right message at the right stage of your customer’s journey.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      icon: "target" as IconName,
      title: "Ad Campaign Automation",
      text: "Automate and optimize Google, Meta, and LinkedIn ads for better ROI.",
      tone: "bg-rose-100 text-rose-500",
    },
    {
      icon: "chart" as IconName,
      title: "Analytics & Optimization",
      text: "Track performance and let AI continuously improve your results.",
      tone: "bg-indigo-100 text-brand-purple",
    },
  ];

  const steps = [
    {
      num: "01",
      icon: "search" as IconName,
      title: "Discover",
      text: "We understand your business goals, audience, and current marketing strategy.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      num: "02",
      icon: "file" as IconName,
      title: "Plan",
      text: "Our AI experts design a custom automation strategy tailored to your needs.",
      tone: "bg-emerald-100 text-emerald-500",
    },
    {
      num: "03",
      icon: "settings" as IconName,
      title: "Build",
      text: "We set up AI agents, integrations, and workflows across your channels.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      num: "04",
      icon: "rocket" as IconName,
      title: "Launch",
      text: "We activate your automated campaigns and start driving results.",
      tone: "bg-violet-100 text-brand-purple",
    },
    {
      num: "05",
      icon: "chart" as IconName,
      title: "Optimize",
      text: "We continuously monitor, test, and improve for maximum growth.",
      tone: "bg-rose-100 text-rose-500",
    },
  ];

  const button =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 text-[12px] font-bold transition hover:-translate-y-0.5";

  return (
    <div className="overflow-x-hidden bg-white font-sans text-brand-dark">
   

      <main>
     <DigitalMarketingHero
  eyebrow="AUTOMATE TODAY. GROW TOMORROW."
  title="AI Marketing"
  highlightedTitle="Automation"
  subtitle="Smarter campaigns. Less effort. More results."
  description="Let AI automate your marketing from end to end. From lead generation and email campaigns to social media, ads, and customer nurturing — we build intelligent automation systems that save time, increase engagement, and drive real business growth."
  imageSrc="/digital-marketing-hero-right-img.png"
  imageAlt="Marketing automation strategist"
  primaryLabel="Book a Free Consultation"
  primaryHref="#contact"
  secondaryLabel="See It in Action"
  secondaryHref="#how-it-works"
  metrics={[
    {
      value: "3x",
      label: "More Leads",
      icon: "zap",
      tone: "purple",
    },
    {
      value: "70%",
      label: "Less Manual Work",
      icon: "layers",
      tone: "green",
    },
    {
      value: "5x",
      label: "Higher ROI",
      icon: "target",
      tone: "orange",
    },
  ]}
/>

        <section className="mx-auto max-w-[1240px] px-5 pt-5">
          <p className="text-center text-[9px] font-bold tracking-[0.28em] text-brand-purple">
            COMPLETE AI MARKETING AUTOMATION SOLUTIONS
          </p>
          <h2 className="mt-1 text-center text-[25px] leading-tight font-bold tracking-[-1px] sm:text-[29px]">
            Everything You Need to Automate Your Marketing
          </h2>
          <p className="mt-1 text-center text-[14px] text-brand-text">
            From lead generation to customer retention, our AI-powered marketing automation solutions cover it all.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {solutions.map((item) => (
              <article
                key={item.title}
                className="rounded-[13px] bg-[linear-gradient(135deg,#fafbff,#f7f8ff)] px-3 py-4 text-center"
              >
                <Bubble icon={item.icon} tone={item.tone} />
                <h3 className="mt-3 text-[13px] leading-[1.2] font-bold">{item.title}</h3>
                <p className="mt-2 text-[12px] leading-[1.45] text-brand-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto mt-4 max-w-[1240px] px-5">
          <div className="rounded-[14px] bg-[linear-gradient(135deg,#fafcff,#f5f7ff)] px-4 py-3">
            <p className="text-center text-[9px] font-bold tracking-[0.28em] text-brand-purple">
              HOW IT WORKS
            </p>
            <h2 className="mt-1 text-center text-[26px] leading-tight font-bold tracking-[-0.8px]">
              From Setup to Scale
            </h2>
            <p className="mt-1 text-center text-[14px] text-brand-text">
              A simple, streamlined process to automate your marketing with AI.
            </p>

            <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {steps.map((item, index) => (
                <article key={item.title} className="relative rounded-xl bg-white/40 px-3 py-2 text-center">
                  <Bubble icon={item.icon} tone={item.tone} />
                  {index < steps.length - 1 && (
                    <span className="absolute top-4 -right-4 hidden text-[29px] text-brand-purple lg:block">
                      →
                    </span>
                  )}
                  <p className="mt-1.5 text-[12px] font-bold">{item.num}</p>
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
            <h2 className="mt-1 text-[25px] leading-tight font-bold">
              Marketing Automation Success with AI
            </h2>
            <p className="mt-1 text-[13px] leading-[1.4] text-brand-text">
              See how businesses like yours are getting more leads, higher engagement, and better ROI with AI WorksForce.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["growth", "312%", "Higher Qualified Leads", "bg-emerald-100 text-emerald-500"],
                ["users", "3x", "Higher Engagement", "bg-violet-100 text-brand-purple"],
                ["clock", "70%", "Less Time Spent", "bg-orange-100 text-orange-500"],
                ["chart", "5x", "Higher Revenue", "bg-rose-100 text-rose-500"],
              ].map(([icon, value, label, tone]) => (
                <div key={label} className="rounded-xl bg-[#fafbff] p-3 text-center">
                  <Bubble icon={icon as IconName} tone={tone} small />
                  <p className="mt-1.5 text-[23px] leading-none font-bold">{value}</p>
                  <p className="mt-1 text-[10px] leading-tight text-brand-text">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <article className="flex flex-col gap-5 rounded-[15px] bg-[#f8f9ff] p-5 sm:flex-row sm:items-center">
            <img
              src={images.caseStudy}
              alt="E-commerce automation case study"
              className="h-[150px] w-full rounded-xl object-cover sm:w-[155px]"
            />
            <div>
              <span className="rounded-full bg-violet-100 px-2 py-1 text-[8px] font-bold tracking-wider text-brand-purple">
                CASE STUDY
              </span>
              <h3 className="mt-2 text-[16px] leading-tight font-bold">
                E-commerce Brand: 4x Revenue with AI Marketing Automation
              </h3>
              <p className="mt-2 text-[11px] leading-[1.4] text-brand-text">
                With our AI marketing automation strategy, this D2C brand automated email, social media,
                and ad campaigns, resulting in 312% more leads and 4x revenue in just 4 months.
              </p>
              <div className="mt-3 flex gap-6">
                {[
                  ["312%", "More Leads"],
                  ["4x", "Revenue Growth"],
                  ["70%", "Less Manual Work"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-[20px] leading-none font-bold text-brand-purple">{value}</p>
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
              src={images.testimonial}
              alt="Rahul Mehta"
              className="size-[105px] shrink-0 rounded-full border-4 border-indigo-100 object-cover"
            />

            <div className="flex-1">
              <span className="grid size-8 place-items-center rounded-full bg-white text-[31px] leading-none font-bold text-brand-purple">
                “
              </span>
              <p className="mt-1 text-[12px] leading-[1.45] text-brand-text">
                “AI WorksForce transformed our marketing. What used to take hours now runs automatically,
                and we’re getting better results with less effort.”
              </p>
              <p className="mt-2 text-[11px] font-bold">Rahul Mehta</p>
              <p className="text-[10px] text-brand-text">Founder, UrbanKart (D2C Brand)</p>
            </div>

            <div className="grid w-full grid-cols-3 divide-x divide-indigo-100 lg:w-[460px]">
              <div className="px-2 text-center">
                <p className="mb-2 text-[8px] font-bold tracking-[0.2em] text-brand-purple">
                  INTEGRATES WITH YOUR FAVORITE TOOLS
                </p>
                <div className="hidden" />
              </div>
              {[
                ["growth", "3x", "More Revenue", "bg-emerald-100 text-emerald-500"],
                ["clock", "70%", "Time Saved", "bg-violet-100 text-brand-purple"],
                ["users", "5x", "Higher Engagement", "bg-violet-100 text-brand-purple"],
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
          <p className="text-[9px] tracking-[0.27em]">READY TO AUTOMATE YOUR MARKETING?</p>
          <h2 className="mt-2 text-[25px] leading-tight font-semibold">
            Let’s Build Your AI Marketing Engine
          </h2>
          <p className="mt-1 text-[12px]">
            Get a custom AI marketing automation strategy tailored to your business goals.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@example.com" className={`${button} bg-white text-brand-dark`}>
              Book a Free Consultation <span>→</span>
            </a>
            <a href="#home" className={`${button} border border-white/60 text-white`}>
              Explore Our Solutions
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}