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
import ReusableHero from "@/components/tech-hero/reusable-hero";

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
    text: "Connect with Salesforce, HubSpot, Zoho and others to automate your sales processes.",
    icon: Network,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "Communication Tools",
    text: "Link Slack, Microsoft Teams and email platforms for collaboration.",
    icon: MessageSquare,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Productivity Apps",
    text: "Sync Notion, Google Workspace and other productivity tools to make work smoother.",
    icon: FileText,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Marketing Platforms",
    text: "Link Mailchimp, HubSpot and other marketing tools to automate campaigns.",
    icon: Rocket,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "E-commerce Platforms",
    text: "Link Shopify, WooCommerce and other e-commerce systems.",
    icon: ShoppingBag,
    iconClass: "bg-brand-green-soft text-brand-green",
  },
  {
    title: "Data & Analytics",
    text: "Link Google Analytics, BigQuery and data warehouses for insights.",
    icon: Database,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Payment Systems",
    text: "Link Stripe, PayPal and other payment gateways to automate workflows.",
    icon: CreditCardIcon,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "Custom Integrations",
    text: "Create custom integrations with APIs and webhooks that fit your business needs.",
    icon: Code2,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "AI Model Integrations",
    text: "Link OpenAI, Anthropic and other AI models to extend your capabilities.",
    icon: Sparkles,
    iconClass: "bg-[#ffe7ef] text-pink-500",
  },
  {
    title: "Other Business Tools",
    text: "Link 100. Other tools using Zapier, Make or custom solutions.",
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
    text: "We learn about your tools, systems and business goals.",
    icon: Globe,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "02",
    title: "Plan",
    text: "We design a smooth integration plan that fits your needs.",
    icon: FileText,
    color: "bg-brand-green-soft text-brand-green",
  },
  {
    number: "03",
    title: "Integrate",
    text: "We set up. Test integrations for safe and reliable data flow.",
    icon: Settings,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "04",
    title: "Automate",
    text: "We create AI-powered workflows across your tools.",
    icon: Rocket,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "05",
    title: "Grow",
    text: "You get a connected, efficient and scalable business.",
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
    label: "Time to Market",
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
    <li className="flex items-center gap-2 text-sm font-medium sm:text-base leading-tight text-brand-text">
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
  const heroImageSrc = "/technology/Integrations-hero.png";
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
   

      {/* Hero */}
     <ReusableHero
  eyebrow="CONNECT EVERYTHING. UNLOCK MORE."
  title="Integrations"
  subtitle="Seamless Integrations to Build a More Connected Business."
  description="We bring your tools, platforms and systems together to make one smooth workflow. We remove silos move data automatically and open your businesss power with AI integrations."
  buttons={{
    primary: {
      label: "Book a Free Consultation",
      href: "#contact",
      variant: "primary",
      icon: <ArrowRight className="size-4" />,
    },
    secondary: {
      label: "See It in Action",
      href: "#how-it-works",
      variant: "secondary",
      icon: <Play className="size-3.5 fill-current" />,
    },
  }}
  stats={[
    {
      value: "3x",
      label: "Faster Workflows",
      icon: <Zap className="size-5" />,
    },
    {
      value: "70%",
      label: "Less Manual Data Entry",
      icon: <Database className="size-5" />,
    },
    {
      value: "5x",
      label: "Higher Productivity",
      icon: <BarChart3 className="size-5" />,
    },
  ]}
  heroImageSrc={heroImageSrc}
  heroImageAlt="AI WorksForce integrations"
  leftCards={[
    {
      label: "Slack",
      symbol: "✣",
      colorClass: "text-emerald-600",
    },
    {
      label: "Google Drive",
      symbol: "▲",
      colorClass: "text-green-600",
    },
    {
      label: "Notion",
      symbol: "N",
      colorClass: "text-black",
    },
    {
      label: "Salesforce",
      symbol: "☁",
      colorClass: "text-sky-500",
    },
  ]}
  sideCard={{
    title: (
      <>
        Connect
        <br />
        Everything
      </>
    ),
    items: [
      "Eliminate Data Silos",
      "Automate Data Flow",
      "Connect Your Tools",
      "Unified Workflows",
    ],
  }}
  rightCards={[
    {
      label: "All Your Tools Working Together",
      symbol: "✱",
      colorClass: "text-brand-blue",
    },
    {
      label: "AI-Powered Integrations",
      symbol: "⚙",
      colorClass: "text-brand-purple",
    },
  ]}
  handwrittenText={
    <>
      All Your
      <br />
      Tools
      <br />
      Working
      <br />
      Together
    </>
  }
/>

      {/* Trusted companies */}
      <section className="mx-auto max-w-[1440px] px-5 py-4 lg:px-[76px]">
        <p className="text-sm font-extrabold sm:text-base tracking-[2.7px] text-[#1d28e7]">
          TRUSTED BY COMPANIES
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
          <p className="text-sm font-extrabold sm:text-base tracking-[2.8px] text-[#1d28e7]">
            OUR INTEGRATION SOLUTIONS
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold sm:text-[30px] lg:text-[32px] tracking-[-1.2px] text-brand-dark sm:text-[28px] sm:text-3xl">
            Connect. Automate. Scale.
          </h2>
          <p className="mx-auto mt-1 max-w-3xl text-[15px] leading-[1.55] text-[#58689a] sm:text-base">
            We combine your existing tools with AI to build automatic and smart workflows.
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
              <h3 className="mt-3 text-base sm:text-lg font-extrabold leading-[1.15] tracking-[-0.45px] text-brand-dark">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.5] sm:text-base text-[#556595]">
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
            <p className="text-sm font-extrabold sm:text-base tracking-[2.8px] text-[#1d28e7]">
              HOW IT WORKS
            </p>
            <h2 className="mt-1 text-[26px] font-extrabold sm:text-[30px] lg:text-[32px] tracking-[-1.1px] text-brand-dark">
              From Connection to Results
            </h2>
            <p className="mt-1 text-[15px] leading-[1.55] text-[#58689a] sm:text-base">
              A simple, proven process to integrate your tools and unlock automation.
            </p>
          </div>

          <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {processSteps.map(({ number, title, text, icon: Icon, color }, index) => (
              <div key={number} className="relative px-3 text-center">
                <span className={`mx-auto grid size-12 place-items-center rounded-full ${color}`}>
                  <Icon className="size-6" />
                </span>
                <p className="mt-2 text-sm font-extrabold sm:text-base text-[#1b2ce9]">{number}</p>
                <h3 className="text-base sm:text-lg font-extrabold text-brand-dark">{title}</h3>
                <p className="mx-auto mt-1 max-w-[170px] text-[15px] leading-[1.45] sm:text-base text-[#566696]">
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
          <p className="text-sm font-extrabold sm:text-base tracking-[2.7px] text-[#1d28e7]">
            REAL INTEGRATIONS. REAL BUSINESS IMPACT.
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold sm:text-[30px] lg:text-[32px] tracking-[-1.2px] text-brand-dark">
            Businesses Do More with Connected Tools
          </h2>
          <p className="mt-1 max-w-[540px] text-[15px] leading-[1.55] sm:text-base text-[#58689a]">
            See how our integration solutions help businesses save time cut errors and grow faster.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {metrics.map(({ value, label, icon: Icon, color }) => {
              const [textColor, bgColor] = color.split(" ");
              return (
                <div key={value} className="rounded-xl bg-[#f8faff] p-3 text-center">
                  <span className={`mx-auto grid size-9 place-items-center rounded-full ${bgColor} ${textColor}`}>
                    <Icon className="size-4" />
                  </span>
                  <strong className="mt-2 block text-2xl font-extrabold sm:text-3xl leading-none text-[#1527d9]">
                    {value}
                  </strong>
                  <p className="mt-1 text-sm leading-[1.35] sm:text-base text-[#58689a]">{label}</p>
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
              <p className="text-sm font-extrabold sm:text-base tracking-[2.3px] text-[#1d28e7]">
                CASE STUDY
              </p>
              <h3 className="mt-1 text-lg font-extrabold sm:text-xl leading-[1.1] tracking-[-0.6px] text-brand-dark">
                Marketing Agency: Unified Workflow with AI Integrations
              </h3>
              <p className="mt-2 text-[15px] leading-[1.5] sm:text-base text-[#556595]">
                We helped a marketing agency link their CRM, email and analytics tools, automating lead capture follow-ups and reporting which gave them 3x more qualified leads and 70% less manual work.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["3x", "More Leads"],
                  ["70%", "Less Manual Work"],
                  ["312%", "Reporting"],
                ].map(([value, label]) => (
                  <div key={value}>
                    <strong className="block text-2xl font-extrabold sm:text-3xl leading-none text-[#1527e5]">
                      {value}
                    </strong>
                    <span className="mt-1 block text-sm leading-tight sm:text-base text-[#58689a]">
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
              <span className="text-[28px] sm:text-3xl font-extrabold text-[#1d2e7f]">RS</span>
            </div>

            <div>
              <div className="mb-1 text-3xl sm:text-4xl font-extrabold leading-none text-[#2235ef]">“</div>
              <p className="text-[15px] leading-[1.5] sm:text-base text-[#536394]">
                AI WorksForce seamlessly integrated all our tools and transformed the way we work. Everything now runs together like a intelligent system.
              </p>
              <p className="mt-1 text-sm font-extrabold sm:text-base text-brand-dark">
                Rahul Mehta
              </p>
              <p className="text-sm text-[#58689a] sm:text-base">
                Founder, GrowthTech (SaaS)
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-sm font-extrabold sm:text-base tracking-[2.3px] text-[#1d28e7]">
              POPULAR INTEGRATIONS
            </p>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {popularIntegrations.map((item) => (
                <div
                  key={item}
                  className="grid min-h-14 place-items-center rounded-lg bg-white px-2 text-center text-sm font-extrabold sm:text-base text-[#33416c] shadow-[0_4px_14px_rgba(35,77,155,.05)]"
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
            <p className="text-sm font-bold sm:text-base tracking-[3px] text-blue-100">
              READY TO CONNECT YOUR TOOLS?
            </p>
            <h2 className="mt-2 text-[26px] font-extrabold sm:text-[30px] lg:text-[32px] tracking-[-0.8px] sm:text-[28px] sm:text-3xl">
              Let’s Build a Connected Business
            </h2>
            <p className="mt-1 text-[15px] leading-[1.5] sm:text-base text-blue-100 sm:text-base sm:text-lg">
              Get expert guidance, on linking your tools with AI.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="rounded-md bg-white px-6 py-3 text-sm font-bold sm:text-base text-[#102079] shadow-lg transition hover:-translate-y-0.5"
              >
                Book a Free Consultation{" "}
                <ArrowRight className="ml-1 inline size-3" />
              </a>
              <a
                href="#solutions"
                className="rounded-md border border-white/70 px-6 py-3 text-sm font-bold sm:text-base text-white transition hover:bg-white/10"
              >
                Explore Integration Solutions
              </a>
            </div>
          </div>

          <p className="absolute bottom-5 right-8 hidden rotate-[-10deg] text-left font-hand text-xl sm:text-2xl leading-[0.9] text-white md:block">
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
