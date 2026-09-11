"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  FileText,
  Globe,
  Layers3,
  Linkedin,
  Menu,
  MessageSquare,
  Network,
  Play,
  Rocket,
  Server,
  Settings,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  "Home",
  "What AI WorksForce?",
  "How it Works",
  "Our AI Workflow",
  "Solutions",
  "Industries",
  "Case Studies",
  "Resources",
  "About",
];

const integrationSolutions = [
  {
    title: "CRM Integrations",
    text: "Connect with Salesforce, HubSpot, Zoho and more to automate your sales processes.",
    icon: Network,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "Communication Tools",
    text: "Integrate with Slack, Microsoft Teams, and email platforms for smarter collaboration.",
    icon: MessageSquare,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Productivity Apps",
    text: "Sync with Notion, Google Workspace, and other productivity tools to streamline work.",
    icon: FileText,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Marketing Platforms",
    text: "Connect with Mailchimp, HubSpot, and other marketing tools to automate campaigns.",
    icon: Rocket,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "E-commerce Platforms",
    text: "Integrate with Shopify, WooCommerce, and other e-commerce systems.",
    icon: ShoppingBag,
    iconClass: "bg-brand-green-soft text-brand-green",
  },
  {
    title: "Data & Analytics",
    text: "Connect with Google Analytics, BigQuery, and data warehouses for smarter insights.",
    icon: Database,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Payment Systems",
    text: "Integrate with Stripe, PayPal, and other payment gateways to automate financial workflows.",
    icon: CreditCardIcon,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "Custom Integrations",
    text: "Build custom integrations with APIs and webhooks tailored to your business needs.",
    icon: Code2,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "AI Model Integrations",
    text: "Connect with OpenAI, Anthropic, and other AI models to extend your capabilities.",
    icon: Sparkles,
    iconClass: "bg-[#ffe7ef] text-pink-500",
  },
  {
    title: "Other Business Tools",
    text: "Integrate with 100+ other tools using Zapier, Make, or custom solutions.",
    icon: Layers3,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
];

function CreditCardIcon({ className }: { className?: string }) {
  return <div className={`grid place-items-center ${className ?? ""}`}><span className="block h-4 w-6 rounded-[3px] border-2 border-current" /></div>;
}

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your tools, systems, and business goals.",
    icon: Globe,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "02",
    title: "Plan",
    text: "We design a seamless integration strategy tailored to your needs.",
    icon: FileText,
    color: "bg-brand-green-soft text-brand-green",
  },
  {
    number: "03",
    title: "Integrate",
    text: "We set up and test integrations for secure and reliable data flow.",
    icon: Settings,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "04",
    title: "Automate",
    text: "We build AI-powered workflows across your connected tools.",
    icon: Rocket,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "05",
    title: "Grow",
    text: "You get a more connected, efficient, and scalable business.",
    icon: BarChart3,
    color: "bg-[#ffe7ef] text-pink-500",
  },
];

const metrics = [
  {
    value: "312%",
    label: "Increase in Operational Efficiency",
    icon: ArrowRight,
    color: "text-brand-green bg-brand-green-soft",
  },
  {
    value: "3x",
    label: "More Tools Connected",
    icon: Network,
    color: "text-brand-purple bg-brand-purple-soft",
  },
  {
    value: "70%",
    label: "Less Manual Work",
    icon: Zap,
    color: "text-brand-orange bg-brand-orange-soft",
  },
  {
    value: "5x",
    label: "Faster Time to Market",
    icon: BarChart3,
    color: "text-pink-500 bg-[#ffe7ef]",
  },
];

const partnerLogos = [
  ["Google", "text-[#4285f4]"],
  ["Microsoft", "text-[#5b5b5b]"],
  ["slack", "text-[#111827]"],
  ["HubSpot", "text-[#172554]"],
  ["salesforce", "text-[#1597d4]"],
  ["_zapier", "text-[#2c2020]"],
  ["Notion", "text-[#111111]"],
  ["shopify", "text-[#6b8e23]"],
];

const popularIntegrations = [
  "Slack",
  "Google Workspace",
  "HubSpot",
  "Salesforce",
  "Zapier",
  "Notion",
];

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-2 text-[11px] font-medium leading-tight text-brand-text">
      <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand-green-soft text-brand-green">
        <Check className="size-3 stroke-[3]" />
      </span>
      {children}
    </li>
  );
}

function BrandLogo({ name, className }: { name: string; className: string }) {
  if (name === "Google") {
    return <span className={`font-bold ${className}`}>Google</span>;
  }

  if (name === "Microsoft") {
    return (
      <span className={`flex items-center gap-1.5 font-bold ${className}`}>
        <span className="grid grid-cols-2 gap-0.5">
          <i className="size-2.5 bg-[#f25022]" />
          <i className="size-2.5 bg-[#7fba00]" />
          <i className="size-2.5 bg-[#00a4ef]" />
          <i className="size-2.5 bg-[#ffb900]" />
        </span>
        Microsoft
      </span>
    );
  }

  if (name === "slack") {
    return <span className={`font-extrabold lowercase ${className}`}>✣ slack</span>;
  }

  if (name === "HubSpot") {
    return <span className={`font-extrabold ${className}`}>HubSpot<span className="text-orange-500">•</span></span>;
  }

  if (name === "salesforce") {
    return <span className={`font-extrabold ${className}`}>☁ salesforce</span>;
  }

  if (name === "_zapier") {
    return <span className={`font-extrabold ${className}`}>—zapier</span>;
  }

  if (name === "Notion") {
    return <span className={`font-extrabold ${className}`}>▣ Notion</span>;
  }

  return <span className={`font-extrabold lowercase ${className}`}>♢ shopify</span>;
}

export default function IntegrationsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
   

      {/* Hero */}
      <section className="relative mx-auto max-w-[1440px] overflow-hidden rounded-b-[22px] bg-[radial-gradient(circle_at_72%_44%,rgba(210,219,255,.95),rgba(242,247,255,.78)_30%,rgba(255,255,255,1)_68%)] px-5 py-9 lg:px-[76px] lg:py-16">
        <div className="pointer-events-none absolute -right-16 -top-24 size-[530px] rounded-full bg-[#dbe1ff]/45 blur-3xl" />

        <div className="relative grid items-center gap-7 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="max-w-[550px]">
            <p className="text-[9px] font-extrabold tracking-[3px] text-[#2029e8]">
              CONNECT EVERYTHING. UNLOCK MORE.
            </p>

            <h1 className="mt-2 text-[50px] font-extrabold leading-[0.94] tracking-[-3px] text-[#0b176c] sm:text-[62px] lg:text-[68px]">
              Integrations
            </h1>

            <h2 className="mt-4 max-w-[510px] text-[17px] font-extrabold leading-[1.08] tracking-[-0.7px] text-brand-dark sm:text-[19px]">
              Seamless Integrations for a More Connected Business.
            </h2>

            <p className="mt-2 max-w-[535px] text-[13px] leading-[1.48] text-[#536394] sm:text-[14px]">
              We integrate your favorite tools, platforms, and systems to
              create a unified workflow. Eliminate silos, automate data flow,
              and unlock the full potential of your business with AI-powered
              integrations.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#2513ff] to-[#1230e7] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5"
              >
                Book a Free Consultation <ArrowRight className="size-4" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-lg border border-[#7180b5] bg-white px-5 py-3 text-xs font-bold text-[#122074] transition hover:border-brand-blue hover:text-brand-blue"
              >
                <span className="grid size-5 place-items-center rounded-full bg-[#e7edff] text-[#2939ef]">
                  <Play className="ml-0.5 size-3 fill-current" />
                </span>
                See It in Action
              </a>
            </div>
          </div>

          {/* Integration network illustration */}
          <div className="relative mx-auto h-[350px] w-full max-w-[610px] sm:h-[385px] lg:h-[350px]">
            <div className="absolute inset-[7%_10%_4%] rounded-[50%] bg-[radial-gradient(circle,rgba(113,137,255,.38),rgba(229,237,255,.35)_45%,transparent_72%)] blur-xl" />

            <svg
              className="absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 600 350"
              fill="none"
              aria-hidden="true"
            >
              <g stroke="#fff" strokeWidth="2" strokeDasharray="5 4" opacity=".9">
                <path d="M300 171 L120 70 L120 37" />
                <path d="M300 171 L215 70 L215 25" />
                <path d="M300 171 L300 30" />
                <path d="M300 171 L405 70 L405 31" />
                <path d="M300 171 L500 83" />
                <path d="M300 171 L105 175" />
                <path d="M300 171 L104 245" />
                <path d="M300 171 L190 292" />
                <path d="M300 171 L405 300" />
                <path d="M300 171 L505 238" />
                <path d="M300 171 L505 170" />
              </g>
            </svg>

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 z-20 grid h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-white bg-white/95 shadow-[0_18px_45px_rgba(38,74,151,.2)]">
              <div className="text-center">
                <div className="text-[27px] font-extrabold leading-none text-[#0d207d]">AI</div>
                <div className="mt-1 text-[12px] font-extrabold leading-none text-brand-dark">
                  WorksForce
                </div>
              </div>
            </div>

            {/* App nodes */}
            {[
              { label: "Slack", x: "left-[10%]", y: "top-[2%]", icon: "✣", color: "text-[#19a981]" },
              { label: "Drive", x: "left-[31%]", y: "top-[-1%]", icon: "▲", color: "text-[#34a853]" },
              { label: "Notion", x: "left-[55%]", y: "top-[1%]", icon: "N", color: "text-black" },
              { label: "Salesforce", x: "right-[9%]", y: "top-[7%]", icon: "☁", color: "text-[#1597d4]" },
              { label: "HubSpot", x: "left-[1%]", y: "top-[24%]", icon: "●", color: "text-[#ff7a59]" },
              { label: "Teams", x: "right-[1%]", y: "top-[28%]", icon: "T", color: "text-[#5b5fc7]" },
              { label: "OpenAI", x: "left-[2%]", y: "top-[47%]", icon: "◎", color: "text-[#111827]" },
              { label: "Gmail", x: "right-[1%]", y: "top-[50%]", icon: "M", color: "text-[#ea4335]" },
              { label: "Zapier", x: "left-[15%]", y: "bottom-[6%]", icon: "✱", color: "text-[#ff4f00]" },
              { label: "Shopify", x: "left-[39%]", y: "bottom-[2%]", icon: "S", color: "text-[#6b8e23]" },
              { label: "Database", x: "right-[24%]", y: "bottom-[3%]", icon: "▤", color: "text-[#172cf2]" },
            ].map((node) => (
              <div
                key={node.label}
                className={`absolute ${node.x} ${node.y} z-10 grid size-[58px] place-items-center rounded-xl border border-white/80 bg-white shadow-[0_10px_24px_rgba(38,74,151,.14)] sm:size-[64px]`}
                title={node.label}
              >
                <span className={`text-[25px] font-black ${node.color}`}>
                  {node.icon}
                </span>
              </div>
            ))}

            <p className="absolute bottom-0 right-0 z-30 rotate-[-10deg] font-hand text-[18px] leading-[0.9] text-[#1428ee] sm:text-[20px]">
              All Your
              <br />
              Tools
              <br />
              Working
              <br />
              Together
            </p>
          </div>
        </div>

        <div className="relative mt-4 grid max-w-[575px] grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-blue-100">
          {[
            [Zap, "3x", "Faster Workflows"],
            [Database, "70%", "Less Manual Data Entry"],
            [BarChart3, "5x", "Higher Productivity"],
          ].map(([Icon, value, label]) => {
            const StatIcon = Icon as typeof Zap;
            return (
              <div key={value as string} className="flex items-center gap-2 sm:px-4 first:pl-0">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-purple-soft text-brand-purple">
                  <StatIcon className="size-5" />
                </span>
                <div>
                  <strong className="block text-[21px] font-extrabold leading-none text-[#1729ef]">
                    {value as string}
                  </strong>
                  <span className="text-[10px] font-medium text-[#59689a]">
                    {label as string}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trusted companies */}
      <section className="mx-auto max-w-[1440px] px-5 py-4 lg:px-[76px]">
        <p className="text-[9px] font-extrabold tracking-[2.7px] text-[#1d28e7]">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>

        <div className="mt-3 grid grid-cols-2 items-center gap-x-4 gap-y-5 sm:grid-cols-4 lg:grid-cols-8">
          {partnerLogos.map(([name, className]) => (
            <BrandLogo key={name} name={name} className={className} />
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="mx-auto max-w-[1440px] px-5 py-2 lg:px-[76px]"
      >
        <div className="text-center">
          <p className="text-[9px] font-extrabold tracking-[2.8px] text-[#1d28e7]">
            OUR INTEGRATION SOLUTIONS
          </p>
          <h2 className="mt-1 text-[24px] font-extrabold tracking-[-1.2px] text-brand-dark sm:text-[27px]">
            Connect. Automate. Scale.
          </h2>
          <p className="mx-auto mt-1 max-w-3xl text-[13px] text-[#58689a]">
            We integrate the tools you already use with AI to create seamless,
            automated, and intelligent workflows.
          </p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {integrationSolutions.map(({ title, text, icon: Icon, iconClass }) => (
            <article
              key={title}
              className="min-h-[150px] rounded-xl bg-[linear-gradient(135deg,#f8faff,#fff)] p-4 text-center shadow-[0_5px_18px_rgba(35,77,155,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(35,77,155,.12)]"
            >
              <span className={`mx-auto grid size-12 place-items-center rounded-full ${iconClass}`}>
                <Icon className="size-6" />
              </span>
              <h3 className="mt-3 text-[13px] font-extrabold leading-[1.15] tracking-[-0.45px] text-brand-dark">
                {title}
              </h3>
              <p className="mt-2 text-[12px] leading-[1.32] text-[#556595]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section
        id="how-it-works"
        className="mx-auto max-w-[1440px] px-5 py-3 lg:px-[76px]"
      >
        <div className="rounded-xl bg-[#fafbff] px-4 py-4 sm:px-5">
          <div className="text-center">
            <p className="text-[9px] font-extrabold tracking-[2.8px] text-[#1d28e7]">
              HOW IT WORKS
            </p>
            <h2 className="mt-1 text-[24px] font-extrabold tracking-[-1.1px] text-brand-dark">
              From Connection to Results
            </h2>
            <p className="mt-1 text-[13px] text-[#58689a]">
              A simple, proven process to integrate your tools and unlock automation.
            </p>
          </div>

          <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {processSteps.map(({ number, title, text, icon: Icon, color }, index) => (
              <div key={number} className="relative px-3 text-center">
                <span className={`mx-auto grid size-12 place-items-center rounded-full ${color}`}>
                  <Icon className="size-6" />
                </span>
                <p className="mt-2 text-[10px] font-extrabold text-[#1b2ce9]">{number}</p>
                <h3 className="text-[13px] font-extrabold text-brand-dark">{title}</h3>
                <p className="mx-auto mt-1 max-w-[170px] text-[12px] leading-[1.28] text-[#566696]">
                  {text}
                </p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="absolute right-[-10px] top-8 hidden size-5 text-[#1c2de9] lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results + Case study */}
      <section className="mx-auto grid max-w-[1440px] gap-5 px-5 py-3 lg:grid-cols-2 lg:px-[76px]">
        <div>
          <p className="text-[9px] font-extrabold tracking-[2.7px] text-[#1d28e7]">
            REAL INTEGRATIONS. REAL BUSINESS IMPACT.
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold tracking-[-1.2px] text-brand-dark">
            Businesses Do More with Connected Tools
          </h2>
          <p className="mt-1 max-w-[540px] text-[14px] leading-[1.35] text-[#58689a]">
            See how our integration solutions help businesses save time,
            reduce errors, and achieve faster growth.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {metrics.map(({ value, label, icon: Icon, color }) => {
              const [textColor, bgColor] = color.split(" ");
              return (
                <div key={value} className="rounded-xl bg-[#f8faff] p-3 text-center">
                  <span className={`mx-auto grid size-9 place-items-center rounded-full ${bgColor} ${textColor}`}>
                    <Icon className="size-4" />
                  </span>
                  <strong className="mt-2 block text-[22px] font-extrabold leading-none text-[#1527d9]">
                    {value}
                  </strong>
                  <p className="mt-1 text-[10px] leading-[1.2] text-[#58689a]">{label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <article className="relative overflow-hidden rounded-xl bg-[#fafbff] p-4">
          <button
            type="button"
            aria-label="Previous case study"
            className="absolute left-2 top-1/2 z-10 grid size-7 -translate-y-1/2 place-items-center rounded-full bg-white text-[#172cf2] shadow-md"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Next case study"
            className="absolute right-2 top-1/2 z-10 grid size-7 -translate-y-1/2 place-items-center rounded-full bg-white text-[#172cf2] shadow-md"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="grid gap-4 sm:grid-cols-[155px_1fr]">
            <div className="relative h-[180px] overflow-hidden rounded-lg bg-gradient-to-br from-[#eaf0ff] via-[#fff] to-[#dce7ff] sm:h-full">
              <div className="absolute left-[14%] top-[20%] h-[58%] w-[72%] rotate-[-3deg] rounded-md border border-slate-300 bg-[#17213a] p-2 shadow-xl">
                <div className="h-full rounded-sm bg-white p-2">
                  <div className="grid grid-cols-4 gap-1.5">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <span key={i} className="h-6 rounded bg-[#eef3ff]" />
                    ))}
                  </div>
                  <div className="mt-2 h-1.5 w-2/3 rounded bg-[#dbe4ff]" />
                  <div className="mt-1 h-1.5 w-1/2 rounded bg-[#e7ecf8]" />
                </div>
              </div>
            </div>

            <div className="pr-3">
              <p className="text-[9px] font-extrabold tracking-[2.3px] text-[#1d28e7]">
                CASE STUDY
              </p>
              <h3 className="mt-1 text-[17px] font-extrabold leading-[1.1] tracking-[-0.6px] text-brand-dark">
                Marketing Agency: Unified Workflow with AI Integrations
              </h3>
              <p className="mt-2 text-[12px] leading-[1.35] text-[#556595]">
                We helped a marketing agency integrate their CRM, email, and
                analytics tools, automating lead capture, follow-ups, and
                reporting, resulting in 3x more qualified leads and 70% less
                manual work.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["3x", "More Leads"],
                  ["70%", "Less Manual Work"],
                  ["312%", "Faster Reporting"],
                ].map(([value, label]) => (
                  <div key={value}>
                    <strong className="block text-[21px] font-extrabold leading-none text-[#1527e5]">
                      {value}
                    </strong>
                    <span className="mt-1 block text-[9px] leading-tight text-[#58689a]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Testimonial + popular integrations */}
      <section className="mx-auto max-w-[1440px] px-5 py-2 lg:px-[76px]">
        <div className="grid overflow-hidden rounded-xl bg-[#f9fbff] lg:grid-cols-[1.05fr_.95fr]">
          <div className="flex items-center gap-4 border-b border-blue-100 p-4 sm:p-5 lg:border-b-0 lg:border-r">
            <div className="grid size-20 shrink-0 place-items-center overflow-hidden rounded-full border-4 border-[#e6eaff] bg-gradient-to-br from-[#d9e6ff] to-[#f8faff] sm:size-24">
              <span className="text-[27px] font-extrabold text-[#1d2e7f]">RS</span>
            </div>

            <div>
              <div className="mb-1 text-[28px] font-extrabold leading-none text-[#2235ef]">“</div>
              <p className="text-[12px] leading-[1.35] text-[#536394]">
                AI WorksForce seamlessly integrated all our tools and
                transformed the way we work. Everything now runs together like
                a single, intelligent system.
              </p>
              <p className="mt-1 text-[11px] font-extrabold text-brand-dark">
                Rahul Mehta
              </p>
              <p className="text-[9px] text-[#58689a]">
                Founder, GrowthTech (SaaS)
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-[9px] font-extrabold tracking-[2.3px] text-[#1d28e7]">
              POPULAR INTEGRATIONS
            </p>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {popularIntegrations.map((item) => (
                <div
                  key={item}
                  className="grid min-h-14 place-items-center rounded-lg bg-white px-2 text-center text-[10px] font-extrabold text-[#33416c] shadow-[0_4px_14px_rgba(35,77,155,.05)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="mx-auto max-w-[1440px] px-2 py-5 sm:px-5 lg:px-[2px]"
      >
        <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(110deg,#061f69,#1524e8,#092d9f)] px-5 py-8 text-center text-white sm:px-8">
          <div className="pointer-events-none absolute -left-16 bottom-0 size-64 rounded-full border border-blue-300/20" />
          <div className="pointer-events-none absolute -right-10 -top-12 size-52 rounded-full border border-blue-300/20" />

          <div className="relative">
            <p className="text-[9px] font-bold tracking-[3px] text-blue-100">
              READY TO CONNECT YOUR TOOLS?
            </p>
            <h2 className="mt-2 text-[24px] font-extrabold tracking-[-0.8px] sm:text-[27px]">
              Let’s Build a More Connected Business
            </h2>
            <p className="mt-1 text-[12px] text-blue-100 sm:text-[13px]">
              Get expert guidance on integrating your tools with AI.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="rounded-md bg-white px-6 py-3 text-[11px] font-bold text-[#102079] shadow-lg transition hover:-translate-y-0.5"
              >
                Book a Free Consultation{" "}
                <ArrowRight className="ml-1 inline size-3" />
              </a>
              <a
                href="#solutions"
                className="rounded-md border border-white/70 px-6 py-3 text-[11px] font-bold text-white transition hover:bg-white/10"
              >
                Explore Integration Solutions
              </a>
            </div>
          </div>

          <p className="absolute bottom-5 right-8 hidden rotate-[-10deg] text-left font-hand text-[20px] leading-[0.9] text-white md:block">
            Connect
            <br />
            Automate
            <br />
            Scale
            <br />
            Grow
          </p>
        </div>
      </section>

    </main>
  );
}
