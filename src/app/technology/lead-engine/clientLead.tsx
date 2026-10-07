"use client";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Compass,
  Crosshair,
  Database,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Play,
  Rocket,
  Search,
  Settings,
  Target,
  Users,
  X,
} from "lucide-react";
import ReusableHero from "@/components/tech-hero/reusable-hero";
import Link from "next/link";
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
const solutionCards = [
  {
    title: "AI Target Audience Discovery",
    text: "Identify high-value prospects using AI-powered research, account intelligence, and business data.",
    icon: Crosshair,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "AI Lead Qualification",
    text: "Automatically score and qualify leads based on intent, behavior, engagement, and ideal customer fit.",
    icon: Users,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "AI Multi-Channel Outreach",
    text: "Engage prospects across email, LinkedIn, SMS, and other channels with automated, personalized outreach.",
    icon: Rocket,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "CRM & Sales Automation Integration",
    text: "Sync leads with your CRM and sales tools to automate workflows from prospecting to conversion.",
    icon: Settings,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "AI Lead Analytics & Reporting",
    text: "Track lead generation performance, measure conversion rates and ROI, and get actionable sales insights.",
    icon: BarChart3,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "Continuous AI Optimization",
    text: "Use AI insights to continuously improve lead generation, outreach, qualification, and sales performance.",
    icon: Compass,
    iconClass: "bg-brand-green-soft text-brand-green",
  },
];
const steps = [
  {
    number: "01",
    title: "Define Your Lead Generation Goals",
    text: "Set your ideal customer profile, target market, and sales goals.",
    icon: Search,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "02",
    title: "Find & Qualify Leads",
    text: "AI identifies, scores, and prioritizes the right prospects based on fit and buying intent.",
    icon: Database,
    color: "bg-brand-green-soft text-brand-green",
  },
  {
    number: "03",
    title: "Automate Sales Outreach",
    text: "Launch personalized multi-channel campaigns to engage and nurture qualified leads automatically.",
    icon: Settings,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "04",
    title: "Track & Optimize",
    text: "Monitor lead generation and sales performance while AI continuously optimizes your campaigns and workflows.",
    icon: Users,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "05",
    title: "Convert Leads into Customers",
    text: "Turn qualified prospects into customers and scale your sales pipeline.",
    icon: BarChart3,
    color: "bg-[#ffe7ef] text-pink-500",
  },
];
const metrics = [
  { value: "312%", label: "Increase in Qualified Leads", icon: ArrowRight, color: "text-brand-green bg-brand-green-soft" },
  { value: "3x", label: "More Meetings Booked", icon: Users, color: "text-brand-purple bg-brand-purple-soft" },
  { value: "70%", label: "Lower Cost per Lead", icon: Clock3, color: "text-brand-orange bg-brand-orange-soft" },
  { value: "5x", label: "Higher Conversion Rates", icon: BarChart3, color: "text-pink-500 bg-[#ffe7ef]" },
];
function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-2 text-sm font-medium sm:text-base text-brand-text">
      <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand-green-soft text-brand-green">
        <Check className="size-3 stroke-[3]" />
      </span>
      {children}
    </li>
  );
}
export default function LeadEnginePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-brand-dark">
    <ReusableHero
  eyebrow="AI LEAD GENERATION & SALES AUTOMATION"
  title={
    <>
     AI Lead Generation & {" "}
      <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
        Sales Automation
      </span>
    </>
  }
  subtitle="AI-powered lead generation and sales automation for predictable business growth."
  description="Our AI lead generation platform finds, qualifies, and engages high-intent prospects automatically. Automate sales outreach, nurture leads, and build a predictable pipeline without the manual effort."
  buttons={{
    primary: {
      label: "Book a Free Consultation",
      href: "/get-your-assessment",
      variant: "primary",
      icon: <ArrowRight className="size-4" />,
    },
    secondary: {
      label: "See AI Lead Generation in Action",
      href: "#how-it-works",
      variant: "secondary",
      icon: <Play className="size-3.5 fill-current" />,
    },
  }}
  stats={[
    {
      value: "3x",
      label: "More Qualified Leads with AI",
      icon: <BarChart3 className="size-5" />,
    },
    {
      value: "70%",
      label: "Less Manual Sales Effort",
      icon: <Clock3 className="size-5" />,
    },
    {
      value: "5x",
      label: "Higher Lead Conversion Rates",
      icon: <BarChart3 className="size-5" />,
    },
  ]}
  heroImageSrc={
    "/technology/all-in-one.png"
  }
  heroImageAlt="AI WorksForce lead generation specialist"
  leftCards={[
    {
      label: "Find Prospects",
      subLabel: "AI-powered research",
      symbol: "⌕",
      colorClass: "text-brand-blue",
    },
    {
      label: "Qualify Leads",
      subLabel: "scoring",
      symbol: "♙",
      colorClass: "text-brand-blue",
    },
    {
      label: "Automate Outreach",
      subLabel: "Multi-channel campaigns",
      symbol: "↗",
      colorClass: "text-brand-blue",
    },
    {
      label: "Track & Optimize",
      subLabel: "Real-time analytics",
      symbol: "⌁",
      colorClass: "text-brand-blue",
    },
  ]}
  sideCard={{
    title: (
      <>
        Turn Prospects
        <br />
        Into Revenue
      </>
    ),
    items: [
      "Discover Target Accounts",
      "Engage at the Right Time",
      "Nurture Automatically",
      "Convert More Deals",
    ],
    icon: <BarChart3 className="size-6 text-brand-blue" />,
  }}
  rightCards={[
    {
      label: "Leads Generated",
      symbol: "↑",
      colorClass: "text-brand-green",
    },
  ]}
  handwrittenText={
    <>
      Your
      <br />
      Growth
      <br />
      Starts with
      <br />
      Better Leads
    </>
  }
/>
      {/* <section className="mx-auto max-w-[1440px] px-5 py-5 lg:px-[76px]">
        <p className="text-sm sm:text-base font-extrabold sm:text-[11px] tracking-[2.7px] text-[#1d28e7]">
          TRUSTED BY GROWING BUSINESSES
        </p>
        <div className="mt-4 grid grid-cols-3 items-center gap-x-4 gap-y-6 text-center sm:grid-cols-4 lg:grid-cols-8">
          {["HubSpot", "Salesforce", "LinkedIn", "Google", "Apollo.io", "ZoomInfo", "Pipedrive", "Outreach"].map((brand, index) => (
            <span
              key={brand}
              className={`text-base font-extrabold sm:text-lg tracking-[-0.8px] ${
                index === 0
                  ? "text-[#283b61]"
                  : index === 1
                    ? "text-[#0d9cde]"
                    : index === 2
                      ? "text-[#0c5ca9]"
                      : index === 3
                        ? "text-[#4285f4]"
                        : "text-brand-dark"
              }`}
            >
              {brand}
            </span>
          ))}
        </div>
      </section> */}
      <section id="solutions" className="mx-auto max-w-[1440px] px-5 py-3 lg:px-[76px]">
        <div className="text-center">
          <p className="text-sm sm:text-base font-extrabold sm:text-[11px] tracking-[2.8px] text-[#1d28e7]">
            OUR LEAD ENGINE SOLUTIONS
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold sm:text-[30px] lg:text-[32px] sm:text-[30px] lg:text-[32px] tracking-[-1.2px] text-brand-dark sm:text-[26px]">
            AI Lead Generation & Sales Automation to Generate and Convert Leads
          </h2>
          <p className="mx-auto mt-1 max-w-3xl text-[15px] leading-[1.55] text-[#58689a] sm:text-base">
            From AI-powered prospecting and lead qualification to automated sales outreach and CRM workflows, automate the full lead generation process and build a predictable, scalable pipeline.
          </p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {solutionCards.map(({ title, text, icon: Icon, iconClass }) => (
            <article
              key={title}
              className="min-h-[190px] rounded-xl bg-[linear-gradient(135deg,#f8faff,#fff)] p-4 text-center shadow-[0_5px_18px_rgba(35,77,155,.06)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(35,77,155,.12)]"
            >
              <span className={`mx-auto grid size-12 place-items-center rounded-full ${iconClass}`}>
                <Icon className="size-6" />
              </span>
              <h3 className="mt-3 text-base font-extrabold sm:text-lg leading-[1.15] tracking-[-0.45px] text-brand-dark">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#556595]">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="how-it-works" className="mx-auto max-w-[1440px] px-5 py-5 lg:px-[76px]">
        <div className="rounded-xl bg-[#fafbff] px-4 py-5 sm:px-5">
          <div className="text-center">
            <p className="text-sm sm:text-base font-extrabold sm:text-[11px] tracking-[2.8px] text-[#1d28e7]">HOW IT WORKS</p>
            <h2 className="mt-1 text-[26px] font-extrabold sm:text-[30px] lg:text-[32px] sm:text-[30px] lg:text-[32px] tracking-[-1.1px] text-brand-dark">
              AI Lead Generation Process for Big Results
            </h2>
            <p className="mt-1 text-[15px] leading-[1.55] text-[#58689a] sm:text-base">
              Our AI lead generation process makes prospecting, qualification, outreach, and sales automation simple, efficient, and scalable.
            </p>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {steps.map(({ number, title, text, icon: Icon, color }, index) => (
              <div key={number} className="relative px-3 text-center">
                <span className={`mx-auto grid size-12 place-items-center rounded-full ${color}`}>
                  <Icon className="size-6" />
                </span>
                <p className="mt-2 text-sm sm:text-base font-extrabold text-[#1b2ce9]">{number}</p>
                <h3 className="text-base font-extrabold sm:text-lg text-brand-dark">{title}</h3>
                <p className="mx-auto mt-1 max-w-[170px] text-[15px] leading-[1.45] text-[#566696]">{text}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute right-[-10px] top-8 hidden size-5 text-[#1c2de9] lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1440px] gap-5 px-5 py-4 lg:grid-cols-2 lg:px-[76px]">
        <div>
          <p className="text-sm sm:text-base font-extrabold sm:text-[11px] tracking-[2.7px] text-[#1d28e7]">
            REAL RESULTS. REAL BUSINESSES.
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold sm:text-[30px] lg:text-[32px] tracking-[-1.2px] text-brand-dark">
            Drive Predictable Growth with AI Lead Generation
          </h2>
          <p className="mt-1 max-w-[540px] text-[14px] leading-[1.35] text-[#58689a]">
            See how businesses use AI lead generation and sales automation to generate qualified leads, reduce manual effort, and close more deals with AIWorksForce.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {metrics.map(({ value, label, icon: Icon, color }) => (
              <div key={value} className="rounded-xl bg-[#f8faff] p-3 text-center">
                <span className={`mx-auto grid size-9 place-items-center rounded-full ${color.split(" ")[1]} ${color.split(" ")[0]}`}>
                  <Icon className="size-4" />
                </span>
                <strong className="mt-2 block text-[26px] font-extrabold sm:text-[30px] leading-none text-[#1527d9]">
                  {value}
                </strong>
                <p className="mt-1 text-sm sm:text-base leading-[1.2] text-[#58689a]">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <article className="relative overflow-hidden rounded-xl bg-[#fafbff] p-4">
          <ChevronLeft className="absolute left-2 top-1/2 size-7 -translate-y-1/2 rounded-full bg-white p-1 text-[#172cf2] shadow-md" />
          <ChevronRight className="absolute right-2 top-1/2 size-7 -translate-y-1/2 rounded-full bg-white p-1 text-[#172cf2] shadow-md" />
          <div className="grid gap-4 sm:grid-cols-[155px_1fr]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=90"
              alt="Lead generation dashboard"
              className="h-[180px] w-full rounded-lg object-cover sm:h-full"
            />
            <div className="pr-3">
              <p className="text-sm sm:text-base font-extrabold sm:text-[11px] tracking-[2.3px] text-[#1d28e7]">CASE STUDY</p>
              <h3 className="mt-1 text-base font-extrabold sm:text-lg leading-[1.1] tracking-[-0.6px] text-brand-dark">
                B2B SaaS Company: 4x More Qualified Leads with AI Lead Generation
              </h3>
              <p className="mt-2 text-[15px] leading-[1.45] text-[#556595]">
                We helped a B2B SaaS company automate prospecting, AI lead qualification, and outreach, resulting in 4x more qualified leads and stronger conversion performance.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["312%", "More Qualified Leads"],
                  ["4x", "Higher Conversion"],
                  ["70%", "Lower CPL"],
                ].map(([value, label]) => (
                  <div key={value}>
                    <strong className="block text-2xl font-extrabold sm:text-3xl leading-none text-[#1527e5]">{value}</strong>
                    <span className="mt-1 block text-[9px] leading-tight text-[#58689a]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
      <section id="contact" className="mx-auto max-w-[1440px] px-5 py-5 lg:px-[76px]">
        <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(110deg,#061f69,#1524e8,#092d9f)] px-5 py-8 text-center text-white sm:px-8">
          <div className="pointer-events-none absolute -left-16 bottom-0 size-64 rounded-full border border-blue-300/20" />
          <div className="pointer-events-none absolute -right-10 -top-12 size-52 rounded-full border border-blue-300/20" />
          <div className="relative">
            <p className="text-sm sm:text-base font-bold sm:text-[11px] tracking-[3px] text-blue-100">TO FILL YOUR PIPELINE?</p>
            <h2 className="mt-2 text-[26px] font-extrabold sm:text-[30px] lg:text-[32px] sm:text-[30px] lg:text-[32px] tracking-[-0.8px] sm:text-[27px]">
              Let’s Build Your AI Lead Generation & Sales Automation Engine
            </h2>
            <p className="mt-1 text-[15px] text-blue-100 sm:text-base sm:text-[13px]">
              Get expert guidance on using AI lead generation and sales automation to find, qualify, nurture, and convert more leads.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="/get-your-assessment"
                className="rounded-md bg-white px-6 py-3 text-sm font-bold sm:text-base text-[#102079] shadow-lg transition hover:-translate-y-0.5"
              >
                Book a Free Consultation <ArrowRight className="ml-1 inline size-3" />
              </Link>
              <Link
                href="/solutions"
                className="rounded-md border border-white/70 px-6 py-3 text-sm font-bold sm:text-base text-white transition hover:bg-white/10"
              >
                Explore AI Lead Generation
              </Link>
            </div>
          </div>
          <p className="absolute bottom-5 right-8 hidden rotate-[-10deg] text-left font-hand text-2xl sm:text-3xl leading-[0.9] text-white md:block">
            More Leads
            <br />
            Deals
            <br />
            Bigger Growth
          </p>
        </div>
      </section>
     
    </main>
  );
}