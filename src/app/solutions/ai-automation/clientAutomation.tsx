// Uses your existing global.css and PageHero component.
// Ensure /contact exists, or replace its href with your booking URL.
"use client";

import SolutionsHero from "@/components/solutions-hero/reusable-hero";
import PageHero from "@/components/solutions-hero/reusable-hero";
import React, { useEffect, useRef } from "react";

/* ============================================================
   TYPES
============================================================ */

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

/* ============================================================
   INLINE SVG ICON SET (single-file, no external deps)
============================================================ */

const baseIcon = (size = 20): React.SVGProps<SVGSVGElement> => ({
  "aria-hidden": true,
  focusable: false,
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

const ArrowRightIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PlayIcon = ({ size = 16, ...p }: IconProps) => (
  <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

const TrendingUpIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const SettingsIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const SearchIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ClockIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TargetIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const RocketIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const HomeIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const CartIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const ActivityIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const LandmarkIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
);

const GraduationIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
  </svg>
);

const GridIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const BotIcon = ({ size = 64, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <rect x="4" y="8" width="16" height="12" rx="2" />
    <path d="M12 8V4" />
    <circle cx="12" cy="3" r="1" />
    <circle cx="9" cy="13" r="1" fill="currentColor" />
    <circle cx="15" cy="13" r="1" fill="currentColor" />
    <path d="M9 17h6" />
  </svg>
);

/* ============================================================
   SCROLL REVEAL HOOK
============================================================ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || reducedMotion.matches || !("IntersectionObserver" in window) || !element.animate) return;

    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      if (!reducedMotion.matches) {
        animation = element.animate(
          [{ opacity: 0, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 550, delay, easing: "ease-out", fill: "backwards" }
        );
      }
      observer.disconnect();
    }, { threshold: 0.08 });
    const stopAnimation = () => { if (reducedMotion.matches) animation?.cancel(); };
    reducedMotion.addEventListener("change", stopAnimation);
    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
      reducedMotion.removeEventListener("change", stopAnimation);
    };
  }, [delay]);

  return <div ref={ref} className={`min-w-0 ${className}`}>{children}</div>;
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function AIAutomationPage() {

  return (
    <div className="min-h-screen bg-white font-sans text-base text-brand-dark [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-brand-blue">
  

      {/* ==========================================================
          HERO
      ========================================================== */}
<SolutionsHero
  badge="AI AUTOMATION"
  title="Automate Today."
  highlightedTitle="Grow Tomorrow."
  description="Streamline your processes, eliminate manual work, and unlock new possibilities with intelligent AI automation. We help businesses build faster, smarter and more efficient operations."
  imageSrc="/solutions/ai-automation-hero.png"
  imageAlt="AI automation workspace and business operations"
  assessmentLabel="Get a Free Assessment"
  assessmentHref="/get-your-assessment"
  videoHref="#how-it-works"
/>

      {/* ==========================================================
          TRUSTED BY LOGOS
      ========================================================== */}
      <section className="border-y border-[var(--color-border)] bg-white py-6">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-7 lg:px-8">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.18em] text-brand-purple sm:text-sm">
            Trusted by Growing Businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            <span className="text-xl font-extrabold lowercase tracking-tight text-brand-text-muted">
              stripe
            </span>
            <span className="text-xl font-bold text-brand-text-muted">
              <span className="mr-0.5 inline-block">🛍</span>shopify
            </span>
            <span className="text-xl font-bold text-brand-text-muted">
              <span className="mr-1 inline-block h-4 w-4 rounded-full border-[5px] border-brand-text-muted align-[-2px]" />
              HubSpot
            </span>
            <span className="text-xl font-extrabold lowercase tracking-tight text-brand-text-muted">
              <span className="mr-1 text-brand-text-muted">#</span>slack
            </span>
            <span className="flex items-center gap-1.5 text-lg font-semibold text-brand-text-muted">
              <span className="grid grid-cols-2 gap-[2px]">
                <i className="h-2 w-2 bg-brand-text-muted" />
                <i className="h-2 w-2 bg-brand-text-muted" />
                <i className="h-2 w-2 bg-brand-text-muted" />
                <i className="h-2 w-2 bg-brand-text-muted" />
              </span>
              Microsoft
            </span>
            <span className="text-xl font-medium tracking-tight text-brand-text-muted">Google</span>
            <span className="text-xl font-extrabold lowercase tracking-tight text-brand-text-muted">
              amazon
            </span>
            <span className="text-xl font-extrabold lowercase tracking-tight text-brand-text-muted">
              _zapier
            </span>
          </div>
        </div>
      </section>

      {/* ==========================================================
          WHY AI AUTOMATION
      ========================================================== */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-7 lg:px-8">
          <Reveal className="mx-auto max-w-[850px] text-center pt-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-purple sm:text-sm">
              Why AI Automation?
            </p>
            <h2 className="mt-1.5 text-[28px] font-bold leading-[1.15] tracking-tight text-brand-dark sm:text-[34px] lg:text-[40px]">
              Smarter Processes. Stronger Business.
            </h2>
            <p className="mx-auto mt-2 max-w-[780px] text-base leading-7 text-brand-text sm:text-lg">
              AI automation helps you eliminate repetitive work, reduce errors,
              and focus on what truly matters — growth, innovation, and your
              customers.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <SettingsIcon size={24} />,
                bubble: "bg-brand-blue-soft text-brand-blue",
                title: "Eliminate Repetitive Tasks",
                desc: "Automate time-consuming manual work with AI.",
              },
              {
                icon: <ClockIcon size={24} />,
                bubble: "bg-brand-green-soft text-brand-green",
                title: "Save Time & Reduce Costs",
                desc: "Do more with fewer resources and lower operational costs.",
              },
              {
                icon: <TargetIcon size={24} />,
                bubble: "bg-brand-purple-soft text-brand-purple-light",
                title: "Improve Accuracy",
                desc: "Minimize human errors and ensure consistent results.",
              },
              {
                icon: <TrendingUpIcon size={24} />,
                bubble: "bg-brand-orange-soft text-brand-orange",
                title: "Scale with Confidence",
                desc: "Build automated workflows that grow with your business.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 90}>
                <div className="group relative h-full min-h-[200px] rounded-[13px] bg-[image:var(--gradient-section)] p-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_var(--shadow-blue-medium)]">
                  <span
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${card.bubble}`}
                  >
                    {card.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-brand-dark sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 max-w-[32ch] text-base leading-7 text-brand-text sm:text-base">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          INDUSTRIES WE SERVE
      ========================================================== */}
      <section className="bg-brand-blue-soft/40 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-8xl px-5 sm:px-7 lg:px-8">
          <Reveal className="mx-auto max-w-[850px] text-center pt-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-purple sm:text-sm">
              Industries We Serve
            </p>
            <h2 className="mt-1.5 text-[28px] font-bold leading-[1.15] tracking-tight text-brand-dark sm:text-[34px] lg:text-[40px]">
              Automation for Every Business
            </h2>
            <p className="mx-auto mt-2 max-w-[780px] text-base leading-7 text-brand-text sm:text-lg">
              From startups to enterprises, we deliver AI automation solutions
              tailored to your industry.
            </p>
          </Reveal>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {[
              {
                icon: <HomeIcon size={26} />,
                chip: "bg-brand-blue",
                tint: "from-brand-sky/25 via-brand-blue-soft to-brand-purple-soft",
                title: "Real Estate",
                desc: "Automate lead management, property matching, and customer communication.",
                cta: "Learn More",
              },
              {
                icon: <CartIcon size={26} />,
                chip: "bg-brand-sky",
                tint: "from-brand-blue-soft via-white to-brand-blue-soft",
                title: "E-commerce",
                desc: "Streamline order processing, inventory updates, and customer support.",
                cta: "Learn More",
              },
              {
                icon: <ActivityIcon size={26} />,
                chip: "bg-brand-blue",
                tint: "from-brand-sky/20 via-brand-blue-soft to-brand-blue-soft",
                title: "Healthcare",
                desc: "Automate patient communication, data entry, and operational workflows.",
                cta: "Learn More",
              },
              {
                icon: <LandmarkIcon size={26} />,
                chip: "bg-brand-navy",
                tint: "from-brand-purple-soft via-brand-blue-soft to-brand-blue-soft",
                title: "Finance",
                desc: "Simplify compliance, reporting, and customer onboarding with AI.",
                cta: "Learn More",
              },
              {
                icon: <GraduationIcon size={26} />,
                chip: "bg-brand-blue",
                tint: "from-brand-green-soft via-white to-brand-blue-soft",
                title: "Education",
                desc: "Automate admissions, inquiries, and student support.",
                cta: "Learn More",
              },
              {
                icon: <GridIcon size={26} />,
                chip: "bg-brand-purple-light",
                tint: "from-brand-purple-soft via-brand-blue-soft to-brand-blue-soft",
                title: "And More",
                desc: "Custom automation solutions for your unique industry needs.",
                cta: "Let's Talk",
              },
            ].map((ind, i) => (
              <Reveal key={ind.title} delay={i * 70}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[13px] border border-[var(--color-border)] bg-white shadow-[0_8px_30px_var(--shadow-blue)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_var(--shadow-blue-medium)]">
                  {/* Decorative industry illustration */}
                  <div
                    className={`relative h-28 bg-gradient-to-br ${ind.tint} sm:h-32`}
                  >
                    <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_30%,var(--color-white)_0,transparent_45%)]" />
                    <span className="absolute right-3 top-3 text-white/50">
                      {ind.icon}
                    </span>
                    <span
                      className={`absolute bottom-0 left-4 flex h-11 w-11 translate-y-1/2 items-center justify-center rounded-xl text-white shadow-lg ${ind.chip}`}
                    >
                      {ind.icon}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-4 pb-4 pt-8 sm:px-5 sm:pb-5 sm:pt-9">
                    <h3 className="text-lg font-bold leading-[1.25] tracking-[-0.2px] text-brand-dark sm:text-xl">
                      {ind.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-base leading-7 text-brand-text sm:text-base">
                      {ind.desc}
                    </p>
                    <a
                      href="#consultation"
                      aria-label={`${ind.cta}: ${ind.title} automation`}
                      className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-base font-bold text-brand-blue transition group-hover:gap-2.5 sm:text-base"
                    >
                      {ind.cta}
                      <ArrowRightIcon size={14} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          HOW IT WORKS
      ========================================================== */}
      <section
        id="how-it-works"
        className="scroll-mt-24 py-12 sm:py-16 lg:py-20"
        style={{ backgroundImage: "var(--gradient-section)" }}
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-7 lg:px-8">
          <Reveal className="mx-auto max-w-[850px] text-center pt-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-purple sm:text-sm">
              How It Works
            </p>
            <h2 className="mt-1.5 text-[28px] font-bold leading-[1.15] tracking-tight text-brand-dark sm:text-[34px] lg:text-[40px]">
              Your Automation Journey in 4 Simple Steps
            </h2>
            <p className="mx-auto mt-2 max-w-[780px] text-base leading-7 text-brand-text sm:text-lg">
              We make it easy to identify, implement, and scale AI automation in
              your business.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {[
              {
                num: "1",
                icon: <SearchIcon size={24} />,
                circle: "bg-brand-blue shadow-brand-blue/40",
                title: "Discover Opportunities",
                desc: "We analyze your processes and identify automation opportunities.",
              },
              {
                num: "2",
                icon: <SettingsIcon size={24} />,
                circle: "bg-brand-purple-light shadow-brand-purple-light/40",
                title: "Design & Build",
                desc: "AWFI Engine™ designs the right automation workflows for your business.",
              },
              {
                num: "3",
                icon: <PlayIcon size={22} />,
                circle: "bg-brand-green-light shadow-brand-green-light/40",
                title: "Deploy & Integrate",
                desc: "We seamlessly integrate with your existing tools and systems.",
              },
              {
                num: "4",
                icon: <TrendingUpIcon size={24} />,
                circle: "bg-brand-orange shadow-brand-orange/40",
                title: "Monitor & Scale",
                desc: "We track performance and continuously optimize for better results.",
              },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 110}>
                <div className="relative h-full rounded-xl bg-white/60 px-5 py-6 text-center">
                  {/* connector arrow (desktop) */}
                  {i < 3 && (
                    <span className="absolute -right-5 top-11 hidden text-brand-blue/60 lg:block">
                      <ArrowRightIcon size={22} />
                    </span>
                  )}
                  <div className="relative mx-auto w-fit">
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl ${step.circle}`}
                    >
                      {step.icon}
                    </span>
                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-extrabold text-brand-text shadow-md ring-1 ring-[var(--color-border)]">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-brand-dark sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-1.5 max-w-[215px] text-base leading-7 text-brand-text sm:text-base">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          DARK CTA
      ========================================================== */}
      <section id="consultation" className="relative isolate scroll-mt-24 mx-3 my-10 overflow-hidden rounded-[14px] bg-brand-navy text-white sm:mx-3">
        {/* glow mesh */}
        <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-brand-blue/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-brand-purple/25 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(color-mix(in_srgb,var(--color-white)_3%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--color-white)_3%,transparent)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-5 px-5 py-10 sm:px-7 sm:py-14 lg:grid-cols-2 lg:px-8">
          {/* Left copy */}
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-purple-soft sm:text-sm">
              Ready to Automate?
            </p>
            <h2 className="mt-1.5 max-w-[550px] text-[28px] font-bold leading-[1.15] tracking-tight text-white sm:text-[34px] lg:text-[40px]">
              Let&apos;s Build Your Smarter Business Together.
            </h2>
            <p className="mt-2 max-w-[550px] text-base leading-7 text-white/80 sm:text-lg">
              Get a personalized consultation and see how AI automation can
              transform your operations.
            </p>
            <a
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-bold text-brand-dark shadow-xl shadow-brand-navy/20 transition hover:-translate-y-0.5 hover:bg-brand-blue-soft sm:text-base"
            >
              Book a Free Consultation
              <ArrowRightIcon size={16} className="text-brand-blue" />
            </a>

            {/* Trust row */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2.5">
                {[
                  { initials: "SM", bg: "bg-brand-blue" },
                  { initials: "RK", bg: "bg-brand-purple-light" },
                  { initials: "AJ", bg: "bg-brand-green-light" },
                ].map((a) => (
                  <span
                    key={a.initials}
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-extrabold text-white ring-2 ring-brand-navy ${a.bg}`}
                  >
                    {a.initials}
                  </span>
                ))}
              </div>
              <p className="text-[12.5px] font-medium leading-snug text-white/80">
                Trusted by <span className="font-bold text-white">500+ Businesses</span>
                <br />
                Worldwide
              </p>
            </div>
          </Reveal>

          {/* Automation illustration */}
          <img src="/solutions/ai-automation-bottom.png" alt="AI Automation" className="mx-auto h-auto w-full max-w-[500px] rounded-xl shadow-2xl" />
        </div>
      </section>
    </div>
  );
}