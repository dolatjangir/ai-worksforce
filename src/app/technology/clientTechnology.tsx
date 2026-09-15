"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  ChevronDown,
  ChevronRight,
  Cloud,
  Database,
  Layers3,
  Linkedin,
  Menu,
  Network,
  Play,
  Rocket,
  Server,
  Settings,
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

const technologyAreas = [
  {
    title: "AI Tools",
    text: "The latest AI tools to build, automate, and innovate faster.",
    icon: Layers3,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "LLM & AI",
    text: "Advanced language models powering intelligent solutions.",
    icon: Brain,
    iconClass: "bg-[#ffe7ef] text-pink-500",
  },
  {
    title: "AI Automation",
    text: "Automate repetitive tasks and complex workflows across your business.",
    icon: Settings,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Technology Stack",
    text: "A modern, scalable, and secure technology stack for real-world impact.",
    icon: Database,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Data Intelligence",
    text: "Turn your data into meaningful insights and smarter decisions.",
    icon: Database,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Lead Engine",
    text: "AI-powered lead generation to fuel your business growth.",
    icon: BarChart3,
    iconClass: "bg-brand-green-soft text-brand-green",
  },
  {
    title: "AI Infrastructure",
    text: "Scalable and secure infrastructure for AI at scale.",
    icon: Cloud,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "Integrations",
    text: "Seamless integrations with your favorite tools and platforms.",
    icon: Network,
    iconClass: "bg-[#ffe7ef] text-pink-500",
  },
];

const metrics = [
  {
    value: "312%",
    label: "Average Increase in Efficiency",
    icon: ArrowRight,
    color: "text-brand-green bg-brand-green-soft",
  },
  {
    value: "3x",
    label: "Faster Time to Market",
    icon: Network,
    color: "text-brand-purple bg-brand-purple-soft",
  },
  {
    value: "70%",
    label: "Lower Operational Costs",
    icon: Zap,
    color: "text-brand-orange bg-brand-orange-soft",
  },
  {
    value: "5x",
    label: "More Scalable Growth",
    icon: BarChart3,
    color: "text-pink-500 bg-[#ffe7ef]",
  },
];

const technologyLogos = [
  { name: "OpenAI", mark: "◎", className: "text-[#111827]" },
  { name: "aws", mark: "aws", className: "text-[#232f3e]" },
  { name: "Google Cloud", mark: "◉", className: "text-[#4285f4]" },
  { name: "Microsoft", mark: "▦", className: "text-[#5b5b5b]" },
  { name: "Anthropic", mark: "AI", className: "text-[#303030]" },
  { name: "Meta", mark: "∞", className: "text-[#0876ed]" },
  { name: "NVIDIA", mark: "◉", className: "text-[#76b900]" },
  { name: "Databricks", mark: "▱", className: "text-[#ef4444]" },
  { name: "Snowflake", mark: "✳", className: "text-[#0ea5e9]" },
  { name: "Vercel", mark: "▲", className: "text-[#111827]" },
];

function TechnologyLogo({
  name,
  mark,
  className,
}: {
  name: string;
  mark: string;
  className: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-1.5 whitespace-nowrap text-[15px] font-extrabold tracking-[-0.5px] ${className}`}>
      <span className="text-[20px] leading-none">{mark}</span>
      <span>{name}</span>
    </div>
  );
}

function MiniMetric({
  value,
  label,
  icon: Icon,
  color,
}: {
  value: string;
  label: string;
  icon: typeof ArrowRight;
  color: string;
}) {
  const [textColor, bgColor] = color.split(" ");

  return (
    <div className="rounded-xl bg-[#f8faff] p-3 text-center">
      <span className={`mx-auto grid size-9 place-items-center rounded-full ${bgColor} ${textColor}`}>
        <Icon className="size-4" />
      </span>
      <strong className="mt-2 block text-[22px] font-extrabold leading-none text-[#1527d9]">
        {value}
      </strong>
      <p className="mt-1 text-[10px] leading-[1.2] text-[#58689a]">{label}</p>
    </div>
  );
}

export default function TechnologyPage() {
  const [menuOpen, setMenuOpen] = useState(false);
 const heroImageSrc = "/technology/technology-hero.png";
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
  

      {/* Hero */}
     <ReusableHero
  eyebrow="ONE ECOSYSTEM. ENDLESS POSSIBILITIES."
  title={
    <>
      Explore Our{" "}
      <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
        Technology
      </span>
    </>
  }
  subtitle="Powering smarter solutions with the world's best tools, platforms, and infrastructure."
  description="From AI models to automation tools, data platforms to cloud infrastructure — we use the latest technology to help businesses build, scale, and stay ahead."
  buttons={{
    primary: {
      label: "Explore",
      href: "#technology-areas",
      variant: "primary",
      icon: <ArrowRight className="size-4" />,
    },
    secondary: {
      label: "Watch Overview",
      href: "#technology-areas",
      variant: "secondary",
      icon: <Play className="size-3.5 fill-current" />,
    },
  }}
  stats={[
    {
      value: "50+",
      label: "Technologies",
      icon: <Zap className="size-5" />,
    },
    {
      value: "100%",
      label: "Scalable Solutions",
      icon: <Database className="size-5" />,
    },
    {
      value: "Enterprise",
      label: "Grade Security",
      icon: <ShieldCheck className="size-5" />,
    },
    {
      value: "Future-Ready",
      label: "Infrastructure",
      icon: <BarChart3 className="size-5" />,
    },
  ]}
  heroImageSrc={heroImageSrc}
  heroImageAlt="AI WorksForce technology ecosystem"
  leftCards={[
    {
      label: "AI Models",
      subLabel: "(OpenAI, Claude, Llama)",
      symbol: "◉",
      colorClass: "text-brand-purple",
    },
    {
      label: "Cloud Platforms",
      subLabel: "(AWS, Azure, GCP)",
      symbol: "☁",
      colorClass: "text-brand-blue",
    },
    {
      label: "Automation Tools",
      subLabel: "(Zapier, Make, n8n)",
      symbol: "⚙",
      colorClass: "text-pink-500",
    },
    {
      label: "Data Platforms",
      subLabel: "(Snowflake, BigQuery)",
      symbol: "▤",
      colorClass: "text-brand-blue",
    },
  ]}
  sideCard={{
    title: (
      <>
        One Ecosystem
        <br />
        Endless Possibilities
      </>
    ),
    items: [
      "AI Models",
      "Cloud Platforms",
      "Automation Tools",
      "Data Platforms",
      "Seamless Integrations",
    ],
  }}
  rightCards={[
    {
      label: "Integrations",
      symbol: "⌘",
      colorClass: "text-brand-purple",
    },
    {
      label: "Development",
      symbol: "◇",
      colorClass: "text-brand-purple",
    },
  ]}
  handwrittenText={
    <>
      Technology
      <br />
      That Powers
      <br />
      Progress
    </>
  }
/>

      {/* Trusted technology partners */}
      <section className="mx-auto max-w-[1440px] px-5 py-4 lg:px-[76px]">
        <p className="text-[9px] font-extrabold tracking-[2.7px] text-[#1d28e7]">
          TRUSTED TECHNOLOGIES WE WORK WITH
        </p>

        <div className="mt-4 grid grid-cols-2 items-center gap-x-4 gap-y-5 sm:grid-cols-5 lg:grid-cols-10">
          {technologyLogos.map((logo) => (
            <TechnologyLogo
              key={logo.name}
              name={logo.name}
              mark={logo.mark}
              className={logo.className}
            />
          ))}
        </div>
      </section>

      {/* Technology areas */}
      <section
        id="technology-areas"
        className="mx-auto max-w-[1440px] px-5 py-2 lg:px-[76px]"
      >
        <div className="text-center">
          <p className="text-[9px] font-extrabold tracking-[2.8px] text-[#1d28e7]">
            OUR TECHNOLOGY AREAS
          </p>
          <h2 className="mt-1 text-[24px] font-extrabold tracking-[-1.2px] text-brand-dark sm:text-[27px]">
            Explore Our Technology Capabilities
          </h2>
          <p className="mx-auto mt-1 max-w-3xl text-[13px] text-[#58689a]">
            Click on any technology area to learn more about how we use these
            tools to deliver real business results.
          </p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {technologyAreas.map(({ title, text, icon: Icon, iconClass }) => (
            <a
              key={title}
              href="#contact"
              className="group relative min-h-[150px] rounded-xl bg-[linear-gradient(135deg,#f8faff,#fff)] p-4 shadow-[0_5px_18px_rgba(35,77,155,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(35,77,155,.12)]"
            >
              <span className={`grid size-12 place-items-center rounded-full ${iconClass}`}>
                <Icon className="size-6" />
              </span>
              <h3 className="mt-3 pr-8 text-[14px] font-extrabold leading-[1.15] tracking-[-0.45px] text-brand-dark">
                {title}
              </h3>
              <p className="mt-2 max-w-[205px] text-[12px] leading-[1.32] text-[#556595]">
                {text}
              </p>
              <span className="absolute bottom-4 right-4 grid size-8 place-items-center rounded-full bg-white text-brand-blue shadow-[0_4px_14px_rgba(35,77,155,.1)] transition group-hover:bg-brand-blue group-hover:text-white">
                <ChevronRight className="size-4" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* See all technology banner */}
      <section className="mx-auto max-w-[1440px] px-5 py-3 lg:px-[76px]">
        <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(110deg,#061f69,#1524e8,#092d9f)] px-6 py-6 text-white sm:px-10">
          <div className="pointer-events-none absolute -left-16 bottom-0 size-64 rounded-full border border-blue-300/20" />
          <div className="pointer-events-none absolute right-[-30px] top-[-55px] size-56 rounded-full border border-blue-300/20" />

          <div className="relative flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
            <div className="md:max-w-[500px]">
              <p className="text-[9px] font-bold tracking-[3px] text-blue-100">
                READY TO EXPLORE MORE?
              </p>
              <h2 className="mt-2 text-[24px] font-extrabold tracking-[-0.8px]">
                See all technology
              </h2>
              <p className="mt-1 text-[12px] text-blue-100 sm:text-[13px]">
                Discover our complete range of tools, platforms, and
                integrations that power smarter business solutions.
              </p>
            </div>

            <a
              href="#technology-areas"
              className="shrink-0 rounded-md bg-white px-9 py-3 text-[12px] font-extrabold text-[#102079] shadow-lg transition hover:-translate-y-0.5"
            >
              Explore <ArrowRight className="ml-1 inline size-3" />
            </a>

            <p className="hidden rotate-[-8deg] text-left font-hand text-[18px] leading-[0.9] md:block">
              More Tools
              <br />
              More Possibilities
              <br />
              A Smarter Future
            </p>
          </div>
        </div>
      </section>

      {/* Results + testimonial */}
      <section className="mx-auto grid max-w-[1440px] gap-5 px-5 py-3 lg:grid-cols-[1fr_1.05fr] lg:px-[76px]">
        <div>
          <p className="text-[9px] font-extrabold tracking-[2.7px] text-[#1d28e7]">
            REAL TECHNOLOGY. REAL IMPACT.
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold tracking-[-1.2px] text-brand-dark">
            Technology That Drives Results
          </h2>
          <p className="mt-1 max-w-[540px] text-[14px] leading-[1.35] text-[#58689a]">
            See how our technology ecosystem helps businesses reduce costs,
            improve efficiency, and achieve faster growth.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {metrics.map((metric) => (
              <MiniMetric key={metric.value} {...metric} />
            ))}
          </div>
        </div>

        <article className="rounded-xl bg-[#f9fbff] p-5">
          <div className="flex items-center gap-4">
            <div className="grid size-20 shrink-0 place-items-center overflow-hidden rounded-full border-4 border-[#e6eaff] bg-gradient-to-br from-[#d9e6ff] to-[#f8faff] sm:size-24">
              <span className="text-[28px] font-extrabold text-[#1d2e7f]">
                AS
              </span>
            </div>

            <div>
              <div className="mb-1 text-[29px] font-extrabold leading-none text-[#2235ef]">
                “
              </div>
              <p className="text-[12px] leading-[1.4] text-[#536394]">
                AI WorksForce uses the best technologies in the world to
                deliver real results. Their expertise and technology stack
                helped us automate our operations and scale faster than we
                imagined.
              </p>
              <p className="mt-2 text-[11px] font-extrabold text-brand-dark">
                Amit Sharma
              </p>
              <p className="text-[9px] text-[#58689a]">
                CTO, GrowthTech (SaaS)
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-[1440px] px-2 py-4 sm:px-5 lg:px-[2px]">
        <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(110deg,#061f69,#1524e8,#092d9f)] px-5 py-8 text-center text-white sm:px-8">
          <div className="pointer-events-none absolute -left-16 bottom-0 size-64 rounded-full border border-blue-300/20" />
          <div className="pointer-events-none absolute -right-10 -top-12 size-52 rounded-full border border-blue-300/20" />

          <div className="relative">
            <p className="text-[9px] font-bold tracking-[3px] text-blue-100">
              LET&apos;S BUILD TOGETHER
            </p>
            <h2 className="mt-2 text-[24px] font-extrabold tracking-[-0.8px] sm:text-[27px]">
              Ready to Leverage the Right Technology?
            </h2>
            <p className="mt-1 text-[12px] text-blue-100 sm:text-[13px]">
              Get expert guidance on the best tools and technologies for your
              business goals.
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
                href="#technology-areas"
                className="rounded-md border border-white/70 px-6 py-3 text-[11px] font-bold text-white transition hover:bg-white/10"
              >
                Talk to Our Experts
              </a>
            </div>
          </div>

          <p className="absolute bottom-5 right-8 hidden rotate-[-10deg] text-left font-hand text-[20px] leading-[0.9] text-white md:block">
            Better
            <br />
            Technology
            <br />
            Brighter
            <br />
            Tomorrow
          </p>
        </div>
      </section>

     
    </main>
  );
}
