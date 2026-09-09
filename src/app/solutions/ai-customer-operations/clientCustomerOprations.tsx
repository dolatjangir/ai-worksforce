"use client";

import UseCasesSection from "@/components/useCasesSection/usecasesection";
import { Book, Grid, Headphones, Home, Settings } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { MdCastForEducation } from "react-icons/md";

/* ============================================================
   TYPES
============================================================ */

type IconName =
  | "bot"
  | "users"
  | "settings"
  | "chart"
  | "chat"
  | "mail"
  | "tools"
  | "whatsapp"
  | "help"
  | "home"
  | "education"
  | "grid"
  | "arrow"
  | "play"
  | "check"
  | "menu"
  | "close"
  | "headset";

/* ============================================================
   ICON SYSTEM
============================================================ */

const Icon = ({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "bot":
      return (
        <svg {...props}>
          <rect x="4" y="6" width="16" height="13" rx="3" />
          <path d="M12 2v4" />
          <circle cx="9" cy="12" r="1" />
          <circle cx="15" cy="12" r="1" />
          <path d="M8 16h8" />
        </svg>
      );

    case "users":
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    case "settings":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.4v-.2a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.56-1.03H6v-2.4h.84A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 12.67 5.2V5h2.4v.2a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06a1.7 1.7 0 0 0-.34 1.88 1.7 1.7 0 0 0 1.56 1.03h.84v2.4h-.84A1.7 1.7 0 0 0 19.4 15Z" />
        </svg>
      );

    case "chart":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="m7 16 4-5 3 3 5-7" />
        </svg>
      );

    case "chat":
      return (
        <svg {...props}>
          <path d="M21 11.5a8.5 8.5 0 0 1-9 8.5 9.6 9.6 0 0 1-4-.9L3 21l1.8-4.2A8.5 8.5 0 1 1 21 11.5Z" />
          <circle cx="8" cy="12" r=".5" fill="currentColor" />
          <circle cx="12" cy="12" r=".5" fill="currentColor" />
          <circle cx="16" cy="12" r=".5" fill="currentColor" />
        </svg>
      );

    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case "tools":
      return (
        <svg {...props}>
          <path d="m14.7 6.3 3-3a5 5 0 0 0-6.8 6.8l-7 7a2 2 0 0 0 2.8 2.8l7-7a5 5 0 0 0 6.8-6.8l-3 3-2.8-.8-.8-2.8Z" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...props}>
          <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.2-3.7A8.5 8.5 0 1 1 20.5 11.5Z" />
          <path d="M9 8.5c.2-.4.5-.4.8-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 1.9 2.7 2.5l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5 0 .5-.2 1-.6 1.3-.4.3-1 .4-1.5.2-3.3-1-5.9-3.5-6.9-6.8-.2-.5-.1-1.1.2-1.5.3-.4.8-.6 1.2-.6Z" />
        </svg>
      );

    case "help":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.7 2.7 0 1 1 4.8 1.7c-.8 1-2.3 1.3-2.3 2.8" />
          <path d="M12 17h.01" />
        </svg>
      );

    case "home":
      return (
        <svg {...props}>
          <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" />
          <path d="M9 21v-7h6v7" />
        </svg>
      );

    case "education":
      return (
        <svg {...props}>
          <path d="m2 9 10-5 10 5-10 5L2 9Z" />
          <path d="M6 11v5c0 2 2.7 3 6 3s6-1 6-3v-5" />
          <path d="M22 9v6" />
        </svg>
      );

    case "grid":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );

    case "play":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
        >
          <path d="m8 5 11 7-11 7V5Z" />
        </svg>
      );

    case "check":
      return (
        <svg {...props}>
          <path d="m5 12 4 4L19 6" strokeWidth="3" />
        </svg>
      );

    case "headset":
      return (
        <svg {...props}>
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4ZM20 14h-3v5h2a1 1 0 0 0 1-1v-4Z" />
        </svg>
      );

    case "menu":
      return (
        <svg {...props}>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );

    case "close":
      return (
        <svg {...props}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );

    default:
      return null;
  }
};

/* ============================================================
   REVEAL
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   LOGO
============================================================ */

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0876ed] text-[10px] font-extrabold text-white shadow-md">
        AW
      </div>

      <div className="leading-none">
        <div className="text-[17px] font-extrabold tracking-[-0.05em] text-[#06235a]">
          AI<span className="text-[#0876ed]">WorksForce</span>
        </div>

        <div className="mt-0.5 text-[7px] font-semibold text-slate-400">
          AI Agents. AI Operations. Real Results.
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN
============================================================ */

export default function AICustomerOperationsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const featureCards = [
    {
      icon: "bot" as IconName,
      title: "AI Support Agents",
      desc: "Handle common queries instantly with human-like conversations.",
      bg: "bg-blue-50",
      text: "text-[#0876ed]",
    },
    {
      icon: "users" as IconName,
      title: "Live Agent Assistance",
      desc: "Give your support team AI-powered tools for faster resolutions.",
      bg: "bg-emerald-50",
      text: "text-emerald-500",
    },
    {
      icon: "settings" as IconName,
      title: "Smart Automation",
      desc: "Automate ticketing, routing, follow-ups, and responses across channels.",
      bg: "bg-violet-50",
      text: "text-violet-500",
    },
    {
      icon: "chart" as IconName,
      title: "Insights & Analytics",
      desc: "Get real-time insights into customer sentiment, performance, and trends.",
      bg: "bg-orange-50",
      text: "text-orange-500",
    },
  ];

  const steps = [
    {
      number: "1",
      icon: "chat" as IconName,
      title: "Understand Your Needs",
      desc: "We analyze your current support processes, channels, and goals.",
      bg: "bg-[#0876ed]",
    },
    {
      number: "2",
      icon: "settings" as IconName,
      title: "Build & Customize",
      desc: "We set up AI agents, workflows, and integrations tailored to your business.",
      bg: "bg-violet-500",
    },
    {
      number: "3",
      icon: "play" as IconName,
      title: "Deploy & Train",
      desc: "We launch the solution and fine-tune it with your data.",
      bg: "bg-emerald-500",
    },
    {
      number: "4",
      icon: "chart" as IconName,
      title: "Optimize & Scale",
      desc: "We continuously monitor performance and scale for greater impact.",
      bg: "bg-orange-500",
    },
  ];

  const industries = [
    {
      title: "E-commerce",
      desc: "Handle product queries, orders, returns, and customer complaints.",
      icon: Grid,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "SaaS & Technology",
      desc: "Support users, reduce churn, and improve onboarding.",
      icon: Settings,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Healthcare",
      desc: "Assist patients, manage appointments, and provide 24/7 support.",
      icon: Headphones,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Real Estate",
      desc: "Handle inquiries, schedule visits, and support property buyers.",
      icon: Home,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Education",
      desc: "Support students, parents, and faculty with instant assistance.",
      icon: Book,
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "And More",
      desc: "Custom customer operations for your unique business needs.",
      icon: Grid,
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-600">
   

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf7ff] via-white to-white">
        <div className="absolute -right-40 -top-32 h-[500px] w-[500px] rounded-full bg-[#0876ed]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 pb-12 pt-7 lg:px-8 lg:pb-16">
          <div className="mb-7 flex items-center gap-2 text-[10px] font-medium text-slate-400">
            <span>Home</span>
            <span>›</span>
            <span>Solutions</span>
            <span>›</span>
            <span className="font-bold text-[#06235a]">
              AI Customer Operations
            </span>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.08fr] lg:gap-4">
            {/* LEFT */}

            <Reveal>
              <div>
                <span className="inline-flex rounded-full border border-[#0876ed]/20 bg-blue-50 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#0876ed]">
                  AI Customer Operations
                </span>

                <h1 className="mt-5 max-w-[600px] text-[41px] font-extrabold leading-[1.07] tracking-[-0.04em] text-[#06235a] sm:text-[52px] lg:text-[58px]">
                  Happier Customers.
                  <br />
                  <span className="text-[#0876ed]">
                    Smarter Operations.
                  </span>
                </h1>

                <p className="mt-5 max-w-[510px] text-[15px] leading-[1.6] text-slate-500">
                  Deliver exceptional customer experiences with AI-powered
                  customer operations. Automate repetitive tasks, resolve
                  queries faster, and empower your teams to focus on what truly
                  matters — your customers.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0876ed] px-5 py-3.5 text-[12px] font-extrabold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5"
                  >
                    Get a Free Consultation
                    <Icon name="arrow" size={14} />
                  </a>

                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-[12px] font-extrabold text-[#06235a] shadow-sm transition hover:-translate-y-0.5"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0876ed] text-white">
                      <Icon name="play" size={9} />
                    </span>
                    See How It Works
                  </a>
                </div>

                <div className="mt-9 grid max-w-[560px] grid-cols-3 gap-4 border-t border-slate-200 pt-6 sm:gap-6">
                  {[
                    ["60%", "Faster Response Time"],
                    ["45%", "Lower Support Costs"],
                    ["90%", "Higher Customer Satisfaction"],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <div className="text-[27px] font-extrabold tracking-tight text-[#0876ed] sm:text-[31px]">
                        {value}
                      </div>

                      <div className="mt-1 text-[10px] font-medium leading-snug text-slate-500 sm:text-[11px]">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* RIGHT */}

            <Reveal delay={120}>
              <div className="relative mx-auto h-[480px] w-full max-w-[640px] sm:h-[535px]">
                <div className="absolute inset-0 overflow-hidden rounded-[30px] bg-gradient-to-br from-[#d9edff] via-[#eef7ff] to-white">
                  {/* light photo-like background */}

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(8,118,237,.22),transparent_40%)]" />

                  <div className="absolute right-0 top-0 h-full w-[52%] bg-[linear-gradient(110deg,transparent,rgba(31,78,121,.12))]" />

                  {/* PERSON */}

                  <div className="absolute bottom-0 right-[9%] h-[84%] w-[48%]">
                    {/* hair */}

                    <div className="absolute right-0 top-[3%] h-[70%] w-[75%] rounded-[48%_48%_40%_40%] bg-gradient-to-br from-[#101827] via-[#18253b] to-[#344761] shadow-2xl" />

                    {/* face */}

                    <div className="absolute right-[18%] top-[13%] h-[37%] w-[42%] rounded-[48%] bg-[#dca487] shadow-lg">
                      <span className="absolute left-[21%] top-[43%] h-1.5 w-1.5 rounded-full bg-[#17243b]" />
                      <span className="absolute right-[21%] top-[43%] h-1.5 w-1.5 rounded-full bg-[#17243b]" />
                      <span className="absolute left-[38%] top-[61%] h-1 w-4 rounded-full bg-[#b56f69]" />
                    </div>

                    {/* headset */}

                    <div className="absolute right-[4%] top-[24%] h-[30%] w-[12%] rounded-r-full border-r-4 border-[#0d1729]" />

                    <div className="absolute right-[-5%] top-[42%] flex h-8 w-8 items-center justify-center rounded-full bg-[#15243b] text-white">
                      <Icon name="headset" size={14} />
                    </div>

                    {/* body */}

                    <div className="absolute bottom-[-3%] right-0 h-[50%] w-[86%] rounded-t-[45px] bg-gradient-to-br from-[#102442] via-[#111c30] to-[#030a16]" />

                    <span className="absolute bottom-[20%] right-[42%] text-[8px] font-bold text-white/80">
                      AW
                    </span>
                  </div>

                  {/* LAPTOP */}

                  <div className="absolute bottom-5 left-[7%] h-[105px] w-[57%] rounded-t-2xl border border-slate-300/70 bg-gradient-to-b from-white to-slate-200 shadow-2xl">
                    <div className="mx-auto mt-3 h-[69px] w-[87%] rounded-lg bg-[#071b3d] p-2">
                      <div className="flex h-full items-end justify-around rounded-md bg-[#0d2b55] px-3 pb-2">
                        {[30, 48, 42, 65, 53, 76, 61].map((height, i) => (
                          <span
                            key={i}
                            className="w-2.5 rounded-t bg-gradient-to-t from-[#0876ed] to-cyan-300"
                            style={{ height: `${height}px` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mx-auto mt-1 h-2 w-[94%] rounded-b-xl bg-slate-300" />
                  </div>
                </div>

                {/* FLOATING CARD 1 */}

                <div className="absolute left-[2%] top-[8%] flex w-[205px] items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-900/10 sm:w-[220px]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0876ed]">
                    <Icon name="bot" size={20} />
                  </span>

                  <div>
                    <div className="text-[12px] font-extrabold text-[#06235a]">
                      AI Support Agent
                    </div>
                    <div className="mt-0.5 text-[9.5px] font-medium text-slate-400">
                      Instant, Accurate Responses
                    </div>
                  </div>
                </div>

                {/* FLOATING CARD 2 */}

                <div className="absolute left-[6%] top-[29%] flex w-[210px] items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-900/10 sm:w-[225px]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0876ed]">
                    <Icon name="chat" size={19} />
                  </span>

                  <div>
                    <div className="text-[12px] font-extrabold text-[#06235a]">
                      Omnichannel Support
                    </div>
                    <div className="mt-0.5 text-[9.5px] font-medium text-slate-400">
                      Chat · Email · Voice · Social
                    </div>
                  </div>
                </div>

                {/* FLOATING CARD 3 */}

                <div className="absolute bottom-[22%] left-[2%] flex w-[210px] items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-900/10 sm:w-[225px]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0876ed]">
                    <Icon name="tools" size={19} />
                  </span>

                  <div>
                    <div className="text-[12px] font-extrabold text-[#06235a]">
                      Smart Ticket Routing
                    </div>
                    <div className="mt-0.5 text-[9.5px] font-medium text-slate-400">
                      Right Query, Right Expert
                    </div>
                  </div>
                </div>

                {/* SATISFACTION */}

                <div className="absolute right-[1%] top-[34%] w-[140px] rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-900/10">
                  <div className="flex items-center gap-2">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[5px] border-emerald-100 text-[12px] font-extrabold text-emerald-500">
                      92%
                    </div>

                    <div>
                      <div className="text-[9px] font-extrabold leading-tight text-[#06235a]">
                        Customer
                        <br />
                        Satisfaction
                      </div>

                      <div className="mt-1 text-[9px] font-bold text-emerald-500">
                        ↑ 28%
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 text-right text-[7.5px] text-slate-400">
                    vs last month
                  </div>
                </div>

                {/* CHAT */}

                <div className="absolute bottom-[12%] right-[4%] flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 text-[9px] font-bold text-[#263b60] shadow-xl">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#0876ed]">
                    <Icon name="bot" size={14} />
                  </span>
                  Hi! How can I help you today?
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          TRUSTED
      ======================================================== */}

      <section className="border-y border-slate-100 bg-white py-6">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <p className="mb-5 text-center text-[9px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
            Trusted by Growing Businesses
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 sm:gap-x-12">
            {[
              "stripe",
              "shopify",
              "HubSpot",
              "slack",
              "Microsoft",
              "Google",
              "amazon",
              "_zapier",
            ].map((brand) => (
              <span
                key={brand}
                className="text-lg font-extrabold tracking-tight text-slate-400 sm:text-xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURES
      ======================================================== */}

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0876ed]">
              What We Offer
            </p>

            <h2 className="mt-3 text-[29px] font-extrabold tracking-tight text-[#06235a] sm:text-4xl">
              End-to-End AI Customer Operations
            </h2>

            <p className="mt-3 text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
              A complete suite of AI-powered solutions to help you deliver
              faster, smarter, and more personalized customer support.
            </p>
          </Reveal>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(24,74,140,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(24,74,140,0.12)]">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.bg} ${card.text}`}
                  >
                    <Icon name={card.icon} size={23} />
                  </span>

                  <h3 className="mt-5 text-[15px] font-extrabold text-[#06235a]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY IT MATTERS
      ======================================================== */}

      <section className="bg-slate-50/70 py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
          {/* DARK PANEL */}

          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b2856] via-[#06235a] to-[#020b1d] p-7 shadow-2xl shadow-slate-900/20 sm:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(8,118,237,.34),transparent_58%)]" />

              <div className="relative min-h-[340px]">
                {/* center */}

                <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                  <div className="relative flex h-[108px] w-[108px] items-center justify-center rounded-full border-2 border-cyan-300/50 bg-[#0876ed]/20 shadow-[0_0_55px_rgba(14,165,233,.45)]">
                    <div className="flex h-[64px] w-[78px] items-center justify-center rounded-[35%] border-2 border-cyan-200/50 bg-gradient-to-b from-[#163967] to-[#071a38]">
                      <div className="relative h-7 w-12">
                        <span className="absolute left-1 top-2 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,.9)]" />
                        <span className="absolute right-1 top-2 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,.9)]" />
                        <span className="absolute bottom-0 left-1/2 h-1.5 w-7 -translate-x-1/2 rounded-full bg-cyan-200/60" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-center text-[11px] font-bold text-white">
                    Always On
                    <br />
                    <span className="text-slate-300">
                      for Your Customers
                    </span>
                  </div>
                </div>

                {/* orbit items */}

                {[
                  ["chat", "Live Chat", "left-0 top-5"],
                  ["mail", "Email Support", "right-0 top-5"],
                  ["headset", "Voice Support", "left-0 bottom-14"],
                  ["whatsapp", "WhatsApp", "left-[18%] bottom-0"],
                  ["help", "Helpdesk & Ticketing", "right-[7%] bottom-1"],
                  ["grid", "Social Media", "right-0 bottom-20"],
                ].map(([icon, label, position]) => (
                  <div
                    key={label}
                    className={`absolute ${position} flex flex-col items-center gap-1.5`}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-[#0876ed]/25 text-cyan-200 shadow-[0_0_25px_rgba(8,118,237,.25)]">
                      <Icon name={icon as IconName} size={19} />
                    </span>

                    <span className="rounded-md bg-black/20 px-2 py-1 text-[8px] font-bold text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* TEXT */}

          <Reveal delay={120}>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0876ed]">
              Why It Matters
            </p>

            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-tight text-[#06235a] sm:text-4xl">
              Turn Customer Support
              <br />
              into a Growth Engine
            </h2>

            <p className="mt-5 max-w-[520px] text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
              Great customer support isn&apos;t just about solving problems —
              it&apos;s about creating loyalty, trust, and new opportunities.
              Our AI customer operations help you:
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Deliver consistent, high-quality support",
                "Reduce response and resolution time",
                "Lower operational costs",
                "Scale support without increasing headcount",
                "Turn customer interactions into valuable insights",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0876ed] text-white">
                    <Icon name="check" size={11} />
                  </span>

                  <span className="text-[13.5px] font-medium text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0876ed] px-6 py-3.5 text-[13px] font-extrabold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5"
            >
              Talk to Our Experts
              <Icon name="arrow" size={15} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          HOW IT WORKS
      ======================================================== */}

      <section
        id="how-it-works"
        className="py-16 lg:py-20"
        style={{
          background:
            "linear-gradient(180deg,#f6fbff 0%,#ffffff 100%)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0876ed]">
              How It Works
            </p>

            <h2 className="mt-3 text-[29px] font-extrabold tracking-tight text-[#06235a] sm:text-4xl">
              From Queries to Happy Customers in 4 Simple Steps
            </h2>

            <p className="mt-3 text-[14px] text-slate-500 sm:text-[15px]">
              We make it easy to implement AI customer operations in your
              business.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <div className="relative flex flex-col items-center text-center">
                  {index < 3 && (
                    <span className="absolute left-[calc(50%+53px)] top-8 hidden text-[#0876ed]/60 lg:block">
                      <Icon name="arrow" size={21} />
                    </span>
                  )}

                  <div className="relative">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl ${step.bg}`}
                    >
                      <Icon name={step.icon} size={23} />
                    </div>

                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-extrabold text-slate-700 shadow-md">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-[200px] text-[15px] font-extrabold leading-snug text-[#06235a]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[230px] text-[12.5px] leading-relaxed text-slate-500">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          INDUSTRIES
      ======================================================== */}

    <UseCasesSection
  eyebrow="Use Cases"
  title="Works Across Industries"
  description="Our AI customer operations solutions adapt to your industry, customer base, and goals."
  items={industries}
/>

      {/* ========================================================
          TESTIMONIAL
      ======================================================== */}

      <section className="bg-slate-50/70 py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-[0.95fr_1.2fr] lg:gap-16 lg:px-8">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0876ed]">
              Client Success
            </p>

            <h2 className="mt-3 max-w-[430px] text-[30px] font-extrabold leading-tight tracking-tight text-[#06235a] sm:text-4xl">
              Businesses That Trust Our Support Solutions
            </h2>

            <p className="mt-5 max-w-[440px] text-[14px] leading-relaxed text-slate-500">
              See how we&apos;re helping companies deliver better customer
              experiences and achieve measurable results.
            </p>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm"
              >
                ←
              </button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm"
              >
                →
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_18px_50px_rgba(24,74,140,0.10)] sm:p-9">
              <div className="absolute -top-3 left-7 text-[75px] font-serif font-extrabold leading-none text-[#0876ed]/15">
                “
              </div>

              <p className="relative text-[14.5px] leading-relaxed text-slate-600 sm:text-[15.5px]">
                <strong className="font-extrabold text-[#06235a]">
                  AIWorksForce transformed our customer support.
                </strong>{" "}
                Our response time dropped by 70% and customer satisfaction has
                never been higher. Their AI agents and team work seamlessly
                together.
              </p>

              <div className="mt-7 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#0876ed] to-cyan-400 text-[11px] font-extrabold text-white">
                    RM
                  </div>

                  <div>
                    <div className="text-[13px] font-extrabold text-[#06235a]">
                      Rohan Mehta
                    </div>

                    <div className="text-[10.5px] text-slate-500">
                      CTO, ShopKart
                    </div>
                  </div>
                </div>

                <div className="text-[17px] tracking-[2px] text-orange-400">
                  ★★★★★
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          CTA
      ======================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-[#031d4c]"
      >
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#0876ed]/25 blur-[120px]" />

        <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-500/20 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-cyan-300">
              Ready to Elevate Your Customer Support?
            </p>

            <h2 className="mt-4 max-w-[560px] text-[31px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[41px]">
              Let&apos;s Build Smarter Customer Operations Together.
            </h2>

            <p className="mt-5 max-w-[480px] text-[14px] leading-relaxed text-slate-300 sm:text-[15px]">
              Get a free consultation and see how AI can help you deliver
              exceptional customer experiences while reducing costs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[13px] font-extrabold text-[#06235a] shadow-xl transition hover:-translate-y-0.5"
              >
                Get Started Today
                <Icon name="arrow" size={15} className="text-[#0876ed]" />
              </a>

              <a
                href="#"
                className="text-[13px] font-bold text-white underline decoration-cyan-300/60 decoration-2 underline-offset-4"
              >
                See Pricing Options
              </a>
            </div>
          </Reveal>

          {/* CTA GRAPHIC */}

          <Reveal delay={120}>
            <div className="relative h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b2a58] via-[#06235a] to-[#020b1d] shadow-2xl shadow-black/40 sm:h-[380px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(8,118,237,.3),transparent_55%)]" />

              {/* chips */}

              <div className="absolute left-5 top-5 flex flex-col gap-2.5">
                {[
                  ["headset", "Faster Support"],
                  ["bot", "Happier Customers"],
                  ["settings", "Lower Costs"],
                  ["chart", "Scalable Growth"],
                ].map(([icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-md"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0876ed] text-white">
                      <Icon name={icon as IconName} size={12} />
                    </span>

                    <span className="text-[9.5px] font-bold text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* bars */}

              <div className="absolute bottom-0 left-[31%] flex items-end gap-3 sm:gap-5">
                {[60, 90, 125, 165, 215].map((height, index) => (
                  <span
                    key={index}
                    className="w-7 rounded-t-lg bg-gradient-to-t from-[#0876ed] via-cyan-400 to-cyan-200 shadow-[0_0_30px_rgba(14,165,233,.4)] sm:w-10"
                    style={{ height }}
                  />
                ))}
              </div>

              {/* growth arrow */}

              <svg
                className="absolute bottom-[43%] left-[27%] w-[58%] text-cyan-300"
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

              {/* handwritten-style heading */}

              <div className="absolute right-5 top-7 rotate-[3deg] text-right">
                <p className="font-serif text-[27px] font-semibold italic leading-[1.05] text-white/90 sm:text-[33px]">
                  Better
                  <br />
                  Conversations
                  <br />
                  <span className="text-cyan-300">
                    Bigger Loyalty
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}