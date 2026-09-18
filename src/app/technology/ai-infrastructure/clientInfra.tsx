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
  Cpu,
  Database,
  FileText,
  Gauge,
  Globe2,
  HardDrive,
  Layers3,
  Linkedin,
  Menu,
  Network,
  Play,
  Rocket,
  Server,
  Settings,
  ShieldCheck,
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

const infrastructureSolutions = [
  {
    title: "Cloud Infrastructure",
    text: "Deploy AI workloads on AWS, Azure, or Google Cloud with best practices.",
    icon: Cloud,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "GPU & Compute",
    text: "High-performance GPU instances for training and inference at scale.",
    icon: Cpu,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Scalable Architecture",
    text: "Build flexible and modular infrastructure that grows with your business.",
    icon: Network,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Security & Compliance",
    text: "Enterprise-grade security, data privacy, and compliance standards.",
    icon: ShieldCheck,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "MLOps & DevOps",
    text: "Automate deployment, monitoring, and scaling with modern MLOps practices.",
    icon: Settings,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "On-Premise & Hybrid",
    text: "Deploy on-premise or hybrid infrastructure for full control and flexibility.",
    icon: Server,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Assess",
    text: "We analyze your AI goals, workloads, and requirements.",
    icon: Gauge,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "02",
    title: "Design",
    text: "We create a tailored infrastructure architecture for performance and cost.",
    icon: FileText,
    color: "bg-brand-green-soft text-brand-green",
  },
  {
    number: "03",
    title: "Deploy",
    text: "We set up and configure your cloud or on-premise environment.",
    icon: Settings,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "04",
    title: "Optimize",
    text: "We monitor, fine-tune, and ensure maximum efficiency.",
    icon: BarChart3,
    color: "bg-brand-blue-soft text-brand-blue",
  },
  {
    number: "05",
    title: "Scale",
    text: "We help you scale as your AI needs grow.",
    icon: Rocket,
    color: "bg-[#ffe7ef] text-pink-500",
  },
];

const metrics = [
  {
    value: "312%",
    label: "Increase in AI Workload Capacity",
    icon: ArrowRight,
    color: "text-brand-green bg-brand-green-soft",
  },
  {
    value: "3x",
    label: "Faster Time to Deploy",
    icon: UsersIcon,
    color: "text-brand-purple bg-brand-purple-soft",
  },
  {
    value: "70%",
    label: "Lower Infrastructure Costs",
    icon: Zap,
    color: "text-brand-orange bg-brand-orange-soft",
  },
  {
    value: "5x",
    label: "More Scalability",
    icon: BarChart3,
    color: "text-pink-500 bg-[#ffe7ef]",
  },
];

const platformLogos = [
  { name: "aws", className: "text-[#232f3e]" },
  { name: "Microsoft Azure", className: "text-[#0078d4]" },
  { name: "Google Cloud", className: "text-[#4285f4]" },
  { name: "NVIDIA", className: "text-[#76b900]" },
  { name: "vmware", className: "text-[#536173]" },
  { name: "kubernetes", className: "text-[#326ce5]" },
  { name: "docker", className: "text-[#2496ed]" },
  { name: "Terraform", className: "text-[#7b42bc]" },
];

function UsersIcon({ className }: { className?: string }) {
  return <Globe2 className={className} />;
}

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-2 text-sm font-medium sm:text-base leading-tight text-brand-text">
      <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand-green-soft text-brand-green">
        <Check className="size-3 stroke-[3]" />
      </span>
      <span>{children}</span>
    </li>
  );
}

function LogoStrip() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-5 lg:px-[76px]">
      <p className="text-sm sm:text-base font-extrabold sm:text-sm sm:text-base tracking-[2.7px] text-[#1d28e7]">
        TRUSTED CLOUD & INFRASTRUCTURE PARTNERS
      </p>

      <div className="mt-4 grid grid-cols-2 items-center gap-x-5 gap-y-5 sm:grid-cols-4 lg:grid-cols-8">
        {platformLogos.map((logo) => (
          <div
            key={logo.name}
            className={`flex h-9 items-center justify-center text-center text-[15px] font-extrabold tracking-[-0.6px] sm:text-[16px] ${logo.className}`}
          >
            {logo.name === "aws" ? (
              <span className="relative text-xl sm:text-2xl lowercase">
                aws
                <span className="absolute -bottom-1 left-0 h-[2px] w-8 rotate-[8deg] rounded-full bg-[#ff9900]" />
              </span>
            ) : logo.name === "NVIDIA" ? (
              <span className="flex items-center gap-1">
                <span className="text-[22px]">◉</span>
                NVIDIA
              </span>
            ) : (
              logo.name
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AIInfrastructurePage() {
  const [menuOpen, setMenuOpen] = useState(false);
 const heroImageSrc = "/technology/ai-infrastructure-hero.png";
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-brand-dark">
  

      {/* Hero */}
    <ReusableHero
  eyebrow="BUILT FOR TODAY. READY FOR TOMORROW."
  title={
    <>
      AI{" "}
      <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
        Infrastructure
      </span>
    </>
  }
  subtitle="A scalable, secure, and future-ready foundation for your AI journey."
  description="We design and deploy robust AI infrastructure that powers your data, models, and applications — built for performance, security, and scale."
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
      label: "Faster Deployment",
      icon: <Zap className="size-5" />,
    },
    {
      value: "70%",
      label: "Lower Infrastructure Costs",
      icon: <Database className="size-5" />,
    },
    {
      value: "5x",
      label: "More Scalability",
      icon: <BarChart3 className="size-5" />,
    },
  ]}
  heroImageSrc={heroImageSrc}
  heroImageAlt="AI infrastructure"
  leftCards={[
    {
      label: "Scalable",
      subLabel: "Infrastructure",
      symbol: "▣",
      colorClass: "text-brand-blue",
    },
    {
      label: "GPU Ready",
      subLabel: "for AI Workloads",
      symbol: "◈",
      colorClass: "text-brand-blue",
    },
    {
      label: "Secure & Compliant",
      symbol: "✓",
      colorClass: "text-brand-blue",
    },
  ]}
  sideCard={{
    title: (
      <>
        Built for AI
        <br />
        at Scale
      </>
    ),
    items: [
      "High Performance",
      "Enterprise Security",
      "Scalable Architecture",
      "Cost Optimized",
      "Cloud & On-Premise",
    ],
  }}
  rightCards={[
    {
      label: "Infrastructure Performance",
      symbol: "↑",
      colorClass: "text-brand-green",
    },
  ]}
  handwrittenText={
    <>
      Powering
      <br />
      Smarter
      <br />
      AI Solutions
    </>
  }
/>

      <LogoStrip />

      {/* Solutions */}
      <section
        id="solutions"
        className="mx-auto max-w-[1440px] px-5 py-3 lg:px-[76px]"
      >
        <div className="text-center">
          <p className="text-sm sm:text-base font-extrabold sm:text-sm sm:text-base tracking-[2.8px] text-[#1d28e7]">
            OUR AI INFRASTRUCTURE SOLUTIONS
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold sm:text-3xl sm:text-4xl lg:text-[32px] sm:text-3xl sm:text-4xl lg:text-[32px] tracking-[-1.2px] text-brand-dark sm:text-[27px]">
            Everything You Need to Build, Deploy, and Scale AI
          </h2>
          <p className="mx-auto mt-1 max-w-3xl text-[15px] sm:text-base text-[#58689a]">
            From cloud infrastructure to GPU clusters, we provide end-to-end
            solutions to power your AI initiatives.
          </p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {infrastructureSolutions.map(
            ({ title, text, icon: Icon, iconClass }) => (
              <article
                key={title}
                className="min-h-[190px] rounded-xl bg-[linear-gradient(135deg,#f8faff,#fff)] p-4 text-center shadow-[0_5px_18px_rgba(35,77,155,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(35,77,155,.12)]"
              >
                <span
                  className={`mx-auto grid size-12 place-items-center rounded-full ${iconClass}`}
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-3 text-base font-extrabold sm:text-lg leading-[1.15] tracking-[-0.45px] text-brand-dark">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.5] sm:text-base text-[#556595]">
                  {text}
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-[1440px] px-5 py-5 lg:px-[76px]"
      >
        <div className="rounded-xl bg-[#fafbff] px-4 py-5 sm:px-5">
          <div className="text-center">
            <p className="text-sm sm:text-base font-extrabold sm:text-sm sm:text-base tracking-[2.8px] text-[#1d28e7]">
              HOW IT WORKS
            </p>
            <h2 className="mt-1 text-[26px] font-extrabold sm:text-3xl sm:text-4xl lg:text-[32px] sm:text-3xl sm:text-4xl lg:text-[32px] tracking-[-1.1px] text-brand-dark">
              From Strategy to Scalable Infrastructure
            </h2>
            <p className="mt-1 text-[15px] sm:text-base text-[#58689a]">
              A proven process to build AI infrastructure that delivers real
              business value.
            </p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {processSteps.map(
              ({ number, title, text, icon: Icon, color }, index) => (
                <div key={number} className="relative px-3 text-center">
                  <span
                    className={`mx-auto grid size-12 place-items-center rounded-full ${color}`}
                  >
                    <Icon className="size-6" />
                  </span>

                  <p className="mt-2 text-sm font-extrabold sm:text-base text-[#1b2ce9]">
                    {number}
                  </p>
                  <h3 className="text-base font-extrabold sm:text-lg text-brand-dark">
                    {title}
                  </h3>
                  <p className="mx-auto mt-1 max-w-[170px] text-[15px] leading-[1.45] sm:text-base text-[#566696]">
                    {text}
                  </p>

                  {index < processSteps.length - 1 && (
                    <ArrowRight className="absolute right-[-10px] top-8 hidden size-5 text-[#1c2de9] lg:block" />
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Results + Case study */}
      <section className="mx-auto grid max-w-[1440px] gap-5 px-5 py-4 lg:grid-cols-2 lg:px-[76px]">
        <div>
          <p className="text-sm sm:text-base font-extrabold sm:text-sm sm:text-base tracking-[2.7px] text-[#1d28e7]">
            REAL RESULTS. REAL BUSINESSES.
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold sm:text-3xl sm:text-4xl lg:text-[32px] tracking-[-1.2px] text-brand-dark">
            Powering Innovation with Robust AI Infrastructure
          </h2>
          <p className="mt-1 max-w-[540px] text-[15px] leading-[1.5] sm:text-base text-[#58689a]">
            See how businesses like yours are building, deploying, and scaling
            AI solutions faster with AI WorksForce.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {metrics.map(({ value, label, icon: Icon, color }) => {
              const [textColor, bgColor] = color.split(" ");
              return (
                <div
                  key={value}
                  className="rounded-xl bg-[#f8faff] p-3 text-center"
                >
                  <span
                    className={`mx-auto grid size-9 place-items-center rounded-full ${bgColor} ${textColor}`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <strong className="mt-2 block text-2xl font-extrabold sm:text-3xl leading-none text-[#1527d9]">
                    {value}
                  </strong>
                  <p className="mt-1 text-sm leading-tight sm:text-base text-[#58689a]">
                    {label}
                  </p>
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
            <div className="relative h-[180px] overflow-hidden rounded-lg bg-gradient-to-br from-[#061633] via-[#123f75] to-[#4b80ff] sm:h-full">
              <div className="absolute inset-5 rounded border border-cyan-300/20" />
              <Server className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 text-cyan-200/80" />
              <Cloud className="absolute left-1/2 top-[42%] size-12 -translate-x-1/2 -translate-y-1/2 text-white" />
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="h-1.5 w-8 rounded-full bg-cyan-300/70"
                  />
                ))}
              </div>
            </div>

            <div className="pr-3">
              <p className="text-sm sm:text-base font-extrabold sm:text-sm sm:text-base tracking-[2.3px] text-[#1d28e7]">
                CASE STUDY
              </p>
              <h3 className="mt-1 text-lg font-extrabold sm:text-xl leading-[1.1] tracking-[-0.6px] text-brand-dark">
                Healthcare Company: Scalable AI Platform on AWS
              </h3>
              <p className="mt-2 text-[15px] leading-[1.5] sm:text-base text-[#556595]">
                We helped a healthcare company design and deploy a secure,
                scalable AI infrastructure on AWS, enabling faster model
                training and 3x quicker deployment of AI applications.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["3x", "Faster Deployment"],
                  ["70%", "Lower Costs"],
                  ["312%", "More AI Workloads"],
                ].map(([value, label]) => (
                  <div key={value}>
                    <strong className="block text-2xl font-extrabold sm:text-3xl leading-none text-[#1527e5]">
                      {value}
                    </strong>
                    <span className="mt-1 block text-xs leading-tight sm:text-sm text-[#58689a]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Testimonial + preferred platforms */}
      <section className="mx-auto max-w-[1440px] px-5 py-2 lg:px-[76px]">
        <div className="grid overflow-hidden rounded-xl bg-[#f9fbff] lg:grid-cols-[1.05fr_.95fr]">
          <div className="flex items-center gap-4 border-b border-blue-100 p-4 sm:p-5 lg:border-b-0 lg:border-r">
            <div className="grid size-20 shrink-0 place-items-center overflow-hidden rounded-full border-4 border-[#e6eaff] bg-gradient-to-br from-[#d9e6ff] to-[#f8faff] sm:size-24">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1d2e7f]">
                VS
              </span>
            </div>

            <div>
              <div className="mb-1 text-3xl sm:text-4xl font-extrabold leading-none text-[#2235ef]">
                “
              </div>
              <p className="text-[15px] leading-[1.5] sm:text-base text-[#536394]">
                AI WorksForce built a scalable and secure infrastructure for
                our AI applications. Their expertise in cloud and GPU
                infrastructure helped us accelerate our innovation and reduce
                costs significantly.
              </p>
              <p className="mt-1 text-sm font-extrabold sm:text-base text-brand-dark">
                Vikram Singh
              </p>
              <p className="text-xs text-[#58689a] sm:text-sm">
                CTO, HealthTech (Healthcare)
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <p className="text-sm sm:text-base font-extrabold sm:text-sm sm:text-base tracking-[2.3px] text-[#1d28e7]">
              WORKS WITH YOUR PREFERRED INFRASTRUCTURE
            </p>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {["AWS", "Azure", "Google Cloud", "NVIDIA", "Kubernetes", "Terraform"].map(
                (item) => (
                  <div
                    key={item}
                    className="grid min-h-14 place-items-center rounded-lg bg-white px-2 text-center text-sm font-extrabold sm:text-base text-[#33416c] shadow-[0_4px_14px_rgba(35,77,155,.05)]"
                  >
                    {item}
                  </div>
                ),
              )}
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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(ellipse_at_bottom,rgba(70,144,255,.18),transparent_65%)]" />

          <div className="relative">
            <p className="text-sm sm:text-base font-bold sm:text-xs tracking-[3px] text-blue-100">
              READY TO BUILD YOUR AI FOUNDATION?
            </p>
            <h2 className="mt-2 text-[26px] font-extrabold sm:text-3xl sm:text-4xl lg:text-[32px] sm:text-[26px] font-extrabold tracking-[-0.8px] sm:text-[30px] lg:text-[32px]">
              Let’s Build a Scalable AI Infrastructure Together
            </h2>
            <p className="mt-1 text-[15px] leading-[1.5] sm:text-base text-blue-100 sm:text-[15px] sm:text-base">
              Get expert guidance on cloud, GPU, and AI infrastructure for
              your business goals.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="rounded-md bg-white px-6 py-3 text-sm sm:text-base font-bold text-[#102079] shadow-lg transition hover:-translate-y-0.5"
              >
                Book a Free Consultation{" "}
                <ArrowRight className="ml-1 inline size-3" />
              </a>
              <a
                href="#how-it-works"
                className="rounded-md border border-white/70 px-6 py-3 text-sm sm:text-base font-bold text-white transition hover:bg-white/10"
              >
                Talk to Our Experts
              </a>
            </div>
          </div>

          <p className="absolute bottom-5 right-8 hidden rotate-[-10deg] text-left font-hand text-xl sm:text-2xl leading-[0.9] text-white md:block">
            Scalable
            <br />
            Secure
            <br />
            Future-Ready
          </p>
        </div>
      </section>

     
    </main>
  );
}
