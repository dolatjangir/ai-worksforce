"use client";

import React, { useEffect, useRef, useState } from "react";

/* ============================================================
   TYPES
============================================================ */

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

type NavItem = {
  label: string;
  links: string[];
};

/* ============================================================
   INLINE SVG ICON SET
============================================================ */

const baseIcon = (size = 20): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

const ChevronDownIcon = ({ size = 14, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowRightIcon = ({ size = 16, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ArrowLeftIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const PlayIcon = ({ size = 16, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

const SearchIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const TargetIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const MailIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const RefreshIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
);

const UsersIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ZapIcon = ({ size = 22, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const TrendingUpIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const SendIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CheckIcon = ({ size = 15, ...p }: IconProps) => (
  <svg {...baseIcon(size)} strokeWidth={3} {...p}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const StarIcon = ({ size = 16, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const HomeIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
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

const CartIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const CodeIcon = ({ size = 26, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const MenuIcon = ({ size = 24, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = ({ size = 24, ...p }: IconProps) => (
  <svg {...baseIcon(size)} {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ============================================================
   NAV DATA
============================================================ */

const NAV_ITEMS: NavItem[] = [
  {
    label: "Solutions",
    links: ["AI Automation", "AI Sales & Outreach", "AI Agents", "AI Digital Marketing"],
  },
  {
    label: "AI Workforce",
    links: ["Managed Teams", "Dedicated Experts", "Hybrid Teams", "How It Works"],
  },
  {
    label: "AI Agents",
    links: ["Sales Agents", "Support Agents", "Marketing Agents", "All Agents"],
  },
  {
    label: "Products",
    links: ["Platform Overview", "Integrations", "Pricing", "What's New"],
  },
  {
    label: "AI Digital Marketing",
    links: ["SEO & Content", "Paid Media", "Social Media", "Email Marketing"],
  },
  {
    label: "Resources",
    links: ["Blog", "Case Studies", "Documentation", "Help Center"],
  },
  {
    label: "Company",
    links: ["About Us", "Careers", "Partners", "Contact"],
  },
];

/* ============================================================
   SCROLL REVEAL
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function AISalesOutreachPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
    

      {/* ==========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-soft/60 via-white to-white" />

        <div className="relative mx-auto max-w-[1400px] px-5 pb-14 pt-8 lg:px-8 lg:pb-20 lg:pt-10">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[13px] font-medium">
            <a href="#" className="text-slate-500 transition hover:text-brand-blue">
              Home
            </a>
            <span className="text-slate-300">›</span>
            <a href="#" className="text-slate-500 transition hover:text-brand-blue">
              Solutions
            </a>
            <span className="text-slate-300">›</span>
            <span className="font-semibold text-brand-dark">AI Sales &amp; Outreach</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
            {/* -------- Left -------- */}
            <div>
              <span className="inline-block rounded-full border border-brand-blue/20 bg-brand-blue-soft px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-blue">
                AI Sales &amp; Outreach
              </span>

              <h1 className="mt-5 text-[42px] font-extrabold leading-[1.08] tracking-tight text-brand-dark sm:text-[54px] lg:text-[58px]">
                Reach More Prospects.
                <br />
                <span className="text-brand-blue">Close More Opportunities.</span>
              </h1>

              <p className="mt-5 max-w-[520px] text-[15.5px] leading-relaxed text-slate-500 sm:text-base">
                Supercharge your sales with AI-powered outreach. Find the right
                prospects, engage them with personalized communication, and convert
                leads into revenue — faster and at scale.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#get-started"
                  className="flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-blue/30 transition hover:-translate-y-0.5 hover:bg-brand-blue-dark"
                >
                  Get a Free Outreach Assessment
                  <ArrowRightIcon size={16} />
                </a>
                <a
                  href="#how-it-works"
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-brand-dark shadow-sm transition hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-md"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white">
                    <PlayIcon size={10} />
                  </span>
                  See How It Works
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200 pt-7 sm:gap-6">
                {[
                  { value: "3x", label: "More Qualified Leads" },
                  { value: "60%", label: "Higher Reply Rates" },
                  { value: "50%", label: "Lower Acquisition Costs" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[28px] font-extrabold tracking-tight text-brand-blue sm:text-[32px]">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[11.5px] font-medium leading-snug text-slate-500 sm:text-xs">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* -------- Right: hero visual -------- */}
            {/* NOTE: Replace the decorative scene with your real photo:
                <img src="/images/hero-sales-outreach.png" className="absolute inset-0 h-full w-full object-cover" /> */}
            <div className="relative mx-auto h-[560px] w-full max-w-[560px] sm:h-[600px]">
              <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-blue-soft via-white to-indigo-50">
                <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(#0876ed12_1px,transparent_1px),linear-gradient(90deg,#0876ed12_1px,transparent_1px)] [background-size:36px_36px]" />
                <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-brand-blue/15 blur-3xl" />
                <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl" />
                {/* laptop abstraction */}
                <div className="absolute bottom-14 left-1/2 h-[200px] w-[74%] -translate-x-1/2 rounded-t-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-100 shadow-2xl shadow-slate-900/10">
                  <div className="mx-auto mt-6 h-[105px] w-[82%] rounded-lg bg-gradient-to-br from-brand-navy to-brand-dark p-3">
                    <div className="flex h-full items-end justify-around rounded-md bg-white/5 p-3">
                      {[35, 55, 42, 70, 52, 85, 62, 92].map((h, i) => (
                        <span
                          key={i}
                          className="w-3.5 rounded-sm bg-gradient-to-t from-brand-blue to-brand-sky"
                          style={{ height: `${h * 0.55}px` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mx-auto mt-2 h-2.5 w-[92%] rounded-b-xl bg-slate-300/70" />
                </div>
              </div>

              {/* Floating card: Find Ideal Prospects */}
              <div className="absolute left-[2%] top-[6%] w-64 animate-float rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-900/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-blue">
                    <TargetIcon size={20} />
                  </span>
                  <span>
                    <span className="block text-[13px] font-bold text-brand-dark">
                      Find Ideal Prospects
                    </span>
                    <span className="block text-[11px] font-medium text-slate-500">
                      AI-powered lead discovery
                    </span>
                  </span>
                </div>
              </div>

              {/* Floating card: Personalized Outreach */}
              <div className="absolute left-[6%] top-[30%] w-64 animate-float-slow rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-900/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-blue">
                    <MailIcon size={19} />
                  </span>
                  <span>
                    <span className="block text-[13px] font-bold text-brand-dark">
                      Personalized Outreach
                    </span>
                    <span className="block text-[11px] font-medium text-slate-500">
                      Multi-channel campaigns
                    </span>
                  </span>
                </div>
              </div>

              {/* Floating card: Smart Follow-ups */}
              <div className="absolute bottom-[20%] left-[2%] w-64 animate-float rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-900/10 [animation-delay:1.2s]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-blue">
                    <RefreshIcon size={19} />
                  </span>
                  <span>
                    <span className="block text-[13px] font-bold text-brand-dark">
                      Smart Follow-ups
                    </span>
                    <span className="block text-[11px] font-medium text-slate-500">
                      Never miss an opportunity
                    </span>
                  </span>
                </div>
              </div>

              {/* Handwritten note */}
              <div className="absolute right-[2%] top-[3%] rotate-[-4deg]">
                <p className="font-hand text-[30px] font-semibold leading-[1.05] text-brand-dark sm:text-[34px]">
                  More Conversations
                  <br />
                  <span className="text-brand-blue">More Revenue</span>
                </p>
              </div>

              {/* Pipeline Growth card */}
              <div className="absolute bottom-[26%] right-0 w-48 animate-float-slow rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-900/10 [animation-delay:0.6s]">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green">
                    <TrendingUpIcon size={16} />
                  </span>
                  <span className="text-[12px] font-bold text-brand-dark">
                    Pipeline Growth
                  </span>
                </div>
                <p className="mt-2.5 flex items-center gap-1.5 text-[24px] font-extrabold tracking-tight text-brand-green">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
                    <path d="M7 0 14 9H9v7H5V9H0L7 0z" />
                  </svg>
                  320%
                </p>
                <p className="text-[10.5px] font-medium text-slate-400">In 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TRUSTED BY
      ========================================================== */}
      <section className="border-y border-slate-100 bg-white py-9">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <p className="mb-7 text-center text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
            Trusted by Growing Businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
            <span className="text-xl font-extrabold lowercase tracking-tight text-slate-400">stripe</span>
            <span className="text-xl font-bold text-slate-400">
              <span className="mr-0.5 inline-block">🛍</span>shopify
            </span>
            <span className="text-xl font-bold text-slate-400">
              <span className="mr-1 inline-block h-4 w-4 rounded-full border-[5px] border-slate-400 align-[-2px]" />
              HubSpot
            </span>
            <span className="text-xl font-extrabold lowercase tracking-tight text-slate-400">
              <span className="mr-1">#</span>slack
            </span>
            <span className="flex items-center gap-1.5 text-lg font-semibold text-slate-400">
              <span className="grid grid-cols-2 gap-[2px]">
                <i className="h-2 w-2 bg-slate-400" />
                <i className="h-2 w-2 bg-slate-400" />
                <i className="h-2 w-2 bg-slate-400" />
                <i className="h-2 w-2 bg-slate-400" />
              </span>
              Microsoft
            </span>
            <span className="text-xl font-medium tracking-tight text-slate-400">Google</span>
            <span className="text-xl font-extrabold lowercase tracking-tight text-slate-400">amazon</span>
            <span className="text-xl font-extrabold lowercase tracking-tight text-slate-400">_zapier</span>
          </div>
        </div>
      </section>

      {/* ==========================================================
          WHY AI SALES & OUTREACH
      ========================================================== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-blue">
              Why AI Sales &amp; Outreach?
            </p>
            <h2 className="mt-3 text-[30px] font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              Smarter Outreach. Real Business Results.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
              Our AI-driven sales &amp; outreach solutions help you connect with the
              right prospects, start meaningful conversations, and close deals faster.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: <TargetIcon size={24} />,
                bubble: "bg-brand-blue-soft text-brand-blue",
                title: "Targeted Lead Discovery",
                desc: "Find and reach your ideal customers using AI-driven research and segmentation.",
              },
              {
                icon: <UsersIcon size={24} />,
                bubble: "bg-brand-green-soft text-brand-green",
                title: "Personalized Messaging",
                desc: "Deliver tailored, human-like outreach across multiple channels.",
              },
              {
                icon: <ZapIcon size={24} />,
                bubble: "bg-brand-purple-soft text-brand-purple-light",
                title: "Automated Follow-ups",
                desc: "Keep conversations going with intelligent, timely follow-ups.",
              },
              {
                icon: <TrendingUpIcon size={24} />,
                bubble: "bg-brand-orange-soft text-brand-orange",
                title: "Measurable Results",
                desc: "Track performance, optimize campaigns, and scale your revenue growth.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-[0_8px_30px_rgba(24,74,140,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/25 hover:shadow-[0_18px_45px_rgba(24,74,140,0.12)]">
                  <span
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${card.bubble}`}
                  >
                    {card.icon}
                  </span>
                  <h3 className="mt-5 text-[15.5px] font-extrabold text-brand-dark">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          AI SALES ENGINE — split section
      ========================================================== */}
      <section className="bg-slate-50/60 py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Left: dark AI engine panel */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b2650] via-brand-navy to-[#030b1c] p-8 shadow-2xl shadow-slate-900/20 sm:p-10">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_50%_45%,#0876ed_0,transparent_55%)]" />
              <div className="absolute inset-0 [background-image:linear-gradient(#ffffff06_1px,transparent_1px),linear-gradient(90deg,#ffffff06_1px,transparent_1px)] [background-size:32px_32px]" />

              <div className="relative grid grid-cols-2 gap-x-6 gap-y-14">
                {/* center AI core */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute -inset-12 rounded-full bg-brand-blue/25 blur-2xl" />
                  <span className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand-sky/60 bg-brand-blue/20 text-[26px] font-extrabold tracking-wide text-white shadow-[0_0_50px_rgba(14,165,233,0.5)] backdrop-blur-sm">
                    AI
                  </span>
                  <span className="absolute -inset-3 animate-ping rounded-full border border-brand-sky/30" />
                </div>

                {/* corner boxes */}
                <div className="relative z-10 flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white">
                    <SearchIcon size={18} />
                  </span>
                  <span className="text-[12.5px] font-bold leading-snug text-white">
                    Find
                    <br />
                    Prospects
                  </span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-sky text-white">
                    <MailIcon size={18} />
                  </span>
                  <span className="text-[12.5px] font-bold leading-snug text-white">
                    Engage
                    <br />
                    Multi-Channel
                  </span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white">
                    <UsersIcon size={18} />
                  </span>
                  <span className="text-[12.5px] font-bold leading-snug text-white">
                    Nurture
                    <br />
                    Relationships
                  </span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-light text-white">
                    <TrendingUpIcon size={18} />
                  </span>
                  <span className="text-[12.5px] font-bold leading-snug text-white">
                    Close
                    <br />
                    More Deals
                  </span>
                </div>
              </div>

              <p className="relative mt-10 text-center text-[13px] font-bold tracking-wide text-slate-300">
                From First Contact
                <span className="mx-2 text-brand-sky">→</span>
                to Closed Deal
              </p>
            </div>
          </Reveal>

          {/* Right: copy + checklist */}
          <Reveal delay={150}>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-blue">
              Turn Outreach Into Opportunities
            </p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-tight text-brand-dark sm:text-4xl">
              Your AI-Powered
              <br />
              Sales Engine
            </h2>
            <p className="mt-5 max-w-[500px] text-[15px] leading-relaxed text-slate-500">
              We combine AI agents, data intelligence, and human expertise to help
              you identify, engage, and convert high-value prospects. Whether
              it&apos;s cold outreach, lead nurturing, or re-engagement campaigns —
              we make your sales process more efficient and effective.
            </p>

            <ul className="mt-7 space-y-3.5">
              {[
                "Identify high-intent prospects",
                "Personalized multi-channel outreach (Email, LinkedIn, Calls)",
                "Automated follow-ups & nurturing",
                "Real-time analytics and insights",
                "Integrate with your existing CRM",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-white">
                    <CheckIcon size={11} />
                  </span>
                  <span className="text-[14px] font-medium text-slate-600">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#get-started"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-blue/30 transition hover:-translate-y-0.5 hover:bg-brand-blue-dark"
            >
              Talk to Our Experts
              <ArrowRightIcon size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ==========================================================
          HOW IT WORKS
      ========================================================== */}
      <section
        id="how-it-works"
        className="py-20 lg:py-24"
        style={{ backgroundImage: "var(--gradient-section)" }}
      >
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-blue">
              How It Works
            </p>
            <h2 className="mt-3 text-[30px] font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              From Prospects to Revenue in 4 Simple Steps
            </h2>
            <p className="mt-4 text-[15px] text-slate-500">
              We make it easy to launch and scale your AI-powered outreach.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                num: "1",
                icon: <SearchIcon size={24} />,
                circle: "bg-brand-blue shadow-brand-blue/40",
                title: "Define Your Ideal Customer",
                desc: "We analyze your business and identify the right prospects.",
              },
              {
                num: "2",
                icon: <SendIcon size={22} />,
                circle: "bg-brand-purple-light shadow-brand-purple-light/40",
                title: "Launch AI Outreach",
                desc: "Our AI agents send personalized, multi-channel campaigns.",
              },
              {
                num: "3",
                icon: <UsersIcon size={22} />,
                circle: "bg-brand-green-light shadow-brand-green-light/40",
                title: "Nurture & Engage",
                desc: "Automated follow-ups keep the conversation active.",
              },
              {
                num: "4",
                icon: <TrendingUpIcon size={24} />,
                circle: "bg-brand-orange shadow-brand-orange/40",
                title: "Close & Scale",
                desc: "Convert leads into customers and scale your revenue.",
              },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 110}>
                <div className="relative flex flex-col items-center text-center">
                  {i < 3 && (
                    <span className="absolute left-[calc(50%+48px)] top-8 hidden text-brand-blue/60 lg:block">
                      <ArrowRightIcon size={22} />
                    </span>
                  )}
                  <div className="relative">
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl ${step.circle}`}
                    >
                      {step.icon}
                    </span>
                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-extrabold text-slate-700 shadow-md ring-1 ring-slate-100">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-5 max-w-[200px] text-[15.5px] font-extrabold leading-snug text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[230px] text-[13px] leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          USE CASES / INDUSTRIES
      ========================================================== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-blue">
              Use Cases
            </p>
            <h2 className="mt-3 text-[30px] font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              Outbound Sales Solutions for Every Industry
            </h2>
            <p className="mt-4 text-[15px] text-slate-500">
              Our AI sales &amp; outreach solutions adapt to your industry, sales
              cycle, and revenue goals.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {[
              {
                icon: <CodeIcon size={26} />,
                chip: "bg-brand-blue",
                tint: "from-slate-300 via-slate-200 to-brand-blue-soft",
                title: "SaaS & Technology",
                desc: "Generate pipeline, book demos, and close more deals.",
              },
              {
                icon: <HomeIcon size={26} />,
                chip: "bg-brand-sky",
                tint: "from-sky-200 via-brand-blue-soft to-indigo-100",
                title: "Real Estate",
                desc: "Find buyers, investors, and property partners.",
              },
              {
                icon: <ActivityIcon size={26} />,
                chip: "bg-brand-blue",
                tint: "from-cyan-100 via-sky-100 to-brand-blue-soft",
                title: "Healthcare",
                desc: "Reach clinics, hospitals, and decision-makers.",
              },
              {
                icon: <LandmarkIcon size={26} />,
                chip: "bg-brand-navy",
                tint: "from-indigo-200 via-indigo-100 to-brand-blue-soft",
                title: "Finance",
                desc: "Connect with potential clients and business partners.",
              },
              {
                icon: <GraduationIcon size={26} />,
                chip: "bg-brand-blue",
                tint: "from-emerald-100 via-teal-50 to-brand-blue-soft",
                title: "Education",
                desc: "Partner with schools, universities, and EdTech organizations.",
              },
              {
                icon: <CartIcon size={26} />,
                chip: "bg-brand-purple-light",
                tint: "from-brand-purple-soft via-indigo-100 to-brand-blue-soft",
                title: "E-commerce",
                desc: "Engage brands, sellers, and distributors.",
              },
            ].map((ind, i) => (
              <Reveal key={ind.title} delay={i * 70}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgba(24,74,140,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(24,74,140,0.12)]">
                  {/* Image area — replace with real industry photo */}
                  <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${ind.tint}`}>
                    <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_30%,#ffffff_0,transparent_45%)]" />
                    <span className="absolute right-3 top-3 text-white/50">{ind.icon}</span>
                    <span
                      className={`absolute -bottom-0 left-4 flex h-11 w-11 translate-y-1/2 items-center justify-center rounded-xl text-white shadow-lg ${ind.chip}`}
                    >
                      {ind.icon}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-9">
                    <h3 className="text-[15px] font-extrabold text-brand-dark">{ind.title}</h3>
                    <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-slate-500">
                      {ind.desc}
                    </p>
                    <a
                      href="#get-started"
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-blue transition group-hover:gap-2.5"
                    >
                      Learn More
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
          CLIENT SUCCESS / TESTIMONIAL
      ========================================================== */}
      <section className="bg-slate-50/60 py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
          {/* Left copy + arrows */}
          <Reveal>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-blue">
              Client Success
            </p>
            <h2 className="mt-3 max-w-[420px] text-[30px] font-extrabold leading-tight tracking-tight text-brand-dark sm:text-4xl">
              Businesses That Grow with Our Outreach
            </h2>
            <p className="mt-5 max-w-[440px] text-[15px] leading-relaxed text-slate-500">
              See how companies are generating more leads, starting better
              conversations, and closing bigger deals with AIWorksForce.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-brand-blue/40 hover:text-brand-blue"
              >
                <ArrowLeftIcon size={17} />
              </button>
              <button
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-brand-blue/40 hover:text-brand-blue"
              >
                <ArrowRightIcon size={17} />
              </button>
            </div>
          </Reveal>

          {/* Testimonial card */}
          <Reveal delay={150}>
            <div className="relative rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_18px_50px_rgba(24,74,140,0.10)] sm:p-10">
              <span className="absolute -top-2 left-8 font-serif text-[80px] font-extrabold leading-none text-brand-blue/15">
                &ldquo;
              </span>
              <p className="relative text-[15.5px] leading-relaxed text-slate-600 sm:text-base">
                AIWorksForce helped us scale our outbound sales like never before.
                We saw a <span className="font-bold text-brand-dark">3x increase in qualified leads</span> and a{" "}
                <span className="font-bold text-brand-dark">40% higher reply rate</span> within just 3
                months. Their AI outreach agents are a game-changer!
              </p>
              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-sky text-[13px] font-extrabold text-white">
                    AM
                  </span>
                  <span>
                    <span className="block text-[14px] font-extrabold text-brand-dark">
                      Aarav Mehta
                    </span>
                    <span className="block text-[12px] font-medium text-slate-500">
                      Founder &amp; CEO, GrowthStack
                    </span>
                  </span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} size={16} className="text-brand-orange" />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==========================================================
          DARK CTA
      ========================================================== */}
      <section id="get-started" className="relative overflow-hidden bg-brand-navy">
        <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-brand-blue/25 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-brand-purple/25 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          {/* Left copy */}
          <Reveal>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-sky">
              Ready to Scale Your Sales?
            </p>
            <h2 className="mt-4 max-w-[520px] text-[32px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[42px]">
              Let&apos;s Build Your Outreach Engine Together.
            </h2>
            <p className="mt-5 max-w-[460px] text-[15px] leading-relaxed text-slate-300">
              Get a free consultation and see how AI sales &amp; outreach can help
              you generate more leads, close more deals, and grow your business.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-brand-dark shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-brand-blue-soft"
              >
                Get Started Today
                <ArrowRightIcon size={16} className="text-brand-blue" />
              </a>
              <a
                href="#"
                className="text-sm font-bold text-white underline decoration-brand-sky/60 decoration-2 underline-offset-4 transition hover:text-brand-sky"
              >
                See Pricing Options
              </a>
            </div>
          </Reveal>

          {/* Right visual — growth chart panel */}
          <Reveal delay={150}>
            <div className="relative h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b2650] via-brand-navy to-[#030b1c] shadow-2xl shadow-black/40 sm:h-[420px]">
              <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_70%_80%,#0876ed_0,transparent_55%)]" />
              <div className="absolute inset-0 [background-image:linear-gradient(#ffffff06_1px,transparent_1px),linear-gradient(90deg,#ffffff06_1px,transparent_1px)] [background-size:32px_32px]" />

              {/* rising 3D bars */}
              <div className="absolute bottom-0 left-[30%] flex h-[70%] items-end gap-5">
                {[
                  { h: 70, d: "0s" },
                  { h: 110, d: "0.15s" },
                  { h: 155, d: "0.3s" },
                  { h: 210, d: "0.45s" },
                  { h: 265, d: "0.6s" },
                ].map((b, i) => (
                  <span
                    key={i}
                    className="w-9 animate-float rounded-t-lg bg-gradient-to-t from-brand-blue via-brand-sky to-cyan-300 shadow-[0_0_30px_rgba(14,165,233,0.45)] sm:w-11"
                    style={{ height: `${b.h}px`, animationDelay: b.d }}
                  />
                ))}
              </div>
              {/* arrow */}
              <svg
                className="absolute bottom-[46%] left-[28%] w-[52%] text-brand-sky"
                viewBox="0 0 220 90"
                fill="none"
              >
                <path
                  d="M4 84C60 78 140 50 206 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M192 6 210 6 208 24"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* glass chips */}
              <div className="absolute left-5 top-6 flex animate-float flex-col gap-2.5">
                {[
                  { icon: <UsersIcon size={13} />, label: "More Leads" },
                  { icon: <MailIcon size={13} />, label: "More Conversations" },
                  { icon: <TrendingUpIcon size={13} />, label: "More Revenue" },
                ].map((chip) => (
                  <span
                    key={chip.label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 backdrop-blur-md"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-blue text-white">
                      {chip.icon}
                    </span>
                    <span className="text-[12px] font-bold text-white">{chip.label}</span>
                  </span>
                ))}
              </div>

              {/* handwritten note */}
              <div className="absolute right-5 top-8 rotate-[3deg]">
                <p className="text-right font-hand text-[30px] font-semibold leading-[1.05] text-white/90 sm:text-[34px]">
                  Scale
                  <br />
                  Your Sales
                  <br />
                  <span className="text-brand-sky">with AI</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}