"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Cpu,
  Database,
  Facebook,
  Globe2,
  Headphones,
  Instagram,
  Linkedin,
  LocateFixedIcon,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Network,
  Phone,
  Play,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import BusinessApproach from "@/components/BusinessApproach";
import { BiRightArrow } from "react-icons/bi";
import HeroSection from "@/components/Hero/Hero";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const services = [
    {
      icon: Database,
      title: "AI Data Operations",
      text: "Data mining, annotation, validation, enrichment and processing.",
      tone: "blue",
    },
    {
      icon: Search,
      title: "AI Research & KPO",
      text: "Market research, web research, competitor research and business intelligence.",
      tone: "blue",
    },
    {
      icon: Settings,
      title: "AI Automation",
      text: "AI agents, CRM automation, WhatsApp automation, workflow automation and API integration.",
      tone: "blue",
    },
    {
      icon: Headphones,
      title: "AI Customer Operations",
      text: "Lead qualification, customer support, appointment setting and back-office operations.",
      tone: "blue",
    },
    {
      icon: Target,
      title: "AI Lead Operations",
      text: "Data mining, lead enrichment, AI research, lead qualification and outreach.",
      tone: "pink",
      new: true,
    },
    {
      icon: Users,
      title: "White-Label Delivery",
      text: "For AI agencies, digital agencies, BPO/KPO companies and consultants.",
      tone: "blue",
      partner: true,
    },
  ];

  const process = [
    {
      number: "1",
      title: "DISCOVER",
      text: "Understand your work and business goals.",
    },
    {
      number: "2",
      title: "DESIGN",
      text: "Build the AI workflow and delivery plan.",
    },
    {
      number: "3",
      title: "ENABLE",
      text: "Configure tools, train operators and set up teams.",
    },
    {
      number: "4",
      title: "OPERATE",
      text: "We manage delivery, QA and reporting.",
    },
    {
      number: "5",
      title: "SCALE",
      text: "Improve and expand your business growth.",
    },
  ];

  const engines = [
    {
      icon: Building2,
      title: "B2B Lead Engine",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Building2,
      title: "Real Estate Lead Engine",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Users,
      title: "Agency Lead Engine",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Users,
      title: "Education Lead Engine",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Building2,
      title: "Healthcare Lead Engine",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const deliveryTeams = [
    {
      icon: Sparkles,
      title: "Managed AI Delivery",
      badge: "Most Popular",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80",
      description:
        "We build, train and manage your AI-enabled operation.",
      bullets: [
        "AI experts + AI tools + operators",
        "End-to-end management",
        "Quality assurance",
        "Flexible scaling",
      ],
      button: "Explore Managed Delivery",
      featured: true,
    },
    {
      icon: Users,
      title: "AI Workforce",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
      description: "Get trained operators for your AI-enabled workflows.",
      bullets: [
        "Data operators",
        "Research operators",
        "CRM operators",
        "Lead generation operators",
        "Customer operations teams",
      ],
      button: "Build Your Team",
    },
    {
      icon: Settings,
      title: "Hire AI Experts",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80",
      description:
        "Access specialist AI and technology talent when you need it.",
      bullets: [
        "AI & ML engineers",
        "AI automation experts",
        "AI agent developers",
        "Data analysts",
        "CRM developers",
      ],
      button: "Hire an Expert",
    },
  ];

  const industries = [
    { icon: Cpu, label: "AI & Technology" },
    { icon: Network, label: "Agencies" },
    { icon: Building2, label: "Real Estate" },
    { icon: Workflow, label: "Recruitment" },
    { icon: Users, label: "Education" },
    { icon: ShieldCheck, label: "Professional Services" },
    { icon: Database, label: "BPO / KPO" },
    { icon: Sparkles, label: "And More" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071744]">
      {/* =========================================================
          TOP BAR
      ========================================================== */}
      <div className="hidden bg-[#061a38] text-white md:block">
        <div className="mx-auto flex h-[26px] max-w-[1500px] items-center justify-between px-5 text-[9px] font-medium tracking-[0.01em] lg:px-8">
          <div className="flex items-center gap-2">
            <MapPin size={11} />
            <span>AI Delivery Center – Jaipur, India</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={11} />
            <span>People + AI • Technology + Real Business Results</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+911411234567"
              className="flex items-center gap-1.5 transition hover:text-blue-300"
            >
              <Phone size={10} />
              +91 141 123 4567
            </a>

            <a
              href="mailto:info@aiworkforce.com"
              className="flex items-center gap-1.5 transition hover:text-blue-300"
            >
              <Mail size={10} />
              info@aiworkforce.com
            </a>

            <div className="flex items-center gap-2">
              <Linkedin size={11} />
              <Youtube size={11} />
              <X size={10} />
              <Facebook size={10} />
            </div>
          </div>
        </div>
      </div>

   
      {/* =========================================================
          HERO
      ========================================================== */}
     <HeroSection/>

      {/* =========================================================
          STATS STRIP
      ========================================================== */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 lg:grid-cols-5">
          {[
            {
              icon: Users,
              number: "100+",
              text: "Delivery Capacity",
            },
            {
              icon: Settings,
              number: "AI + Human",
              text: "Operations Model",
            },
            {
              icon: Clock3,
              number: "24/7",
              text: "Scalable Operations",
            },
            {
              icon: Cpu,
              number: "AI Tools + Agents",
              text: "Technology Enabled",
            },
            {
              icon: Globe2,
              number: "Global",
              text: "Clients & Partners",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="flex items-center gap-3 border-b border-r border-slate-100 px-6 py-7 last:border-r-0 lg:border-b-0 lg:px-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#edf7ff] text-[#0876ed]">
                  <Icon size={24} />
                </div>

                <div>
                  <div className="text-lg font-extrabold text-[#071744]">
                    {item.number}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {item.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
  <BusinessApproach/>

      {/* =========================================================
          DELIVERY MODEL + PROCESS
      ========================================================== */}
      <section className="bg-gradient-to-b from-[#eaf6ff] to-[#e7f4ff] py-10 sm:py-12">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="text-sm font-extrabold uppercase text-[#0876ed]">
                How AI Worksforce Delivers Results
              </div>

              <h2 className="mt-1 text-xl font-extrabold tracking-[-0.035em] text-[#071744] sm:text-[30px]">
                AI Agents + Human Experts + Managed Operations.
              </h2>

              <p className="my-2 text-sm text-[#304466] ">
                A proven model and process to turn your requirements into real
                business results.
              </p>
            </div>

            <div className="hidden font-serif text-lg italic -rotate-[10deg] leading-tight text-[#071744] sm:block">
              Simple Process.
              <br />
              Powerful Results.
            </div>
          </div>

          {/* Delivery model */}
          <div className="mt-6 overflow-hidden rounded-lg border border-[#d5e6f5] bg-white shadow-sm">
            <div className="flex min-w-[950px] items-stretch">
              <div className="flex w-[150px] shrink-0 items-center border-r border-slate-200 px-4">
                <div>
                  <div className="text-sm font-extrabold text-[#0876ed]">
                    OUR DELIVERY MODEL
                  </div>
                </div>
              </div>

              {[
                {
                  icon: Users,
                  title: "AI Experts",
                  text: "Design & Supervise",
                  color: "blue",
                },
                {
                  icon: Bot,
                  title: "AI Tools & Agents",
                  text: "Automate & Accelerate",
                  color: "blue",
                },
                {
                  icon: Users,
                  title: "Trained Operators",
                  text: "Execute & Deliver",
                  color: "purple",
                },
                {
                  icon: ShieldCheck,
                  title: "QA & Management",
                  text: "Monitor & Improve",
                  color: "blue",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex min-w-[180px] flex-1 items-center justify-center gap-4 border-r border-slate-200 px-3 py-4"
                  >
                    <div className="text-center">
                      <Icon
                        size={25}
                        className={
                          item.color === "purple"
                            ? "mx-auto text-purple-600"
                            : "mx-auto text-[#0876ed]"
                        }
                      />
                      <div className="mt-2 text-lg font-extrabold">
                        {item.title}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        {item.text}
                      </div>
                    </div>

                    {index < 3 && (
                      <span className="text-[23px] font-bold text-[#0876ed] ">
                        +
                      </span>
                    )}
                  </div>
                );
              })}

              <div className="flex min-w-[150px] items-center justify-center gap-4 px-4">
                <span className="text-[23px] font-bold text-[#0876ed]">
                  =
                </span>

                <div className="text-center">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <Zap size={20} />
                  </div>
                  <div className="mt-1 text-sm font-extrabold">
                    Managed Results
                  </div>
                  <div className="text-xs text-slate-500">
                    Scale Your Business
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="my-4 overflow-hidden rounded-lg border border-[#d5e6f5]  bg-white">
            <div className="flex min-w-[900px] items-center">
              <div className="flex w-[150px] shrink-0 px-4 py-4">
                <div>
                  <div className="text-sm font-extrabold text-[#0876ed]">
                    OUR PROCESS
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    From Requirement to Scale
                  </div>
                </div>
              </div>

              {process.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex min-w-[160px] flex-1 items-start gap-3 border-l border-slate-200 px-3 py-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0876ed] text-sm font-bold text-white">
                    {step.number}
                  </div>

                  <div>
                    <div className="text-[13px] font-extrabold">
                      {step.title}
                    </div>
                    <div className="mt-1 text-[10px] leading-[1.4] text-slate-500">
                      {step.text}
                    </div>
                  </div>

                  {index < process.length - 1 && (
                    <ArrowRight
                      size={14}
                      className="absolute right-[-8px] top-6 z-10 bg-white text-[#0876ed]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DELIVERY TEAMS
      ========================================================== */}
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-12">
          <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
            <div>
              <div className="text-sm font-extrabold uppercase text-[#0876ed]">
                AI Delivery Teams
              </div>

              <h2 className="my-2 text-xl font-extrabold tracking-[-0.03em] text-[#071744] sm:text-[29px]">
                Choose How You Want to Work With Us.
              </h2>

              <p className="mb-2 text-md text-slate-500">
                Expert-led teams, trained operators and AI tools — fully
                managed or flexibly built for your needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-semibold text-slate-600">
              <span className="flex items-center gap-1">
                <Check size={14} className="text-[#0876ed]" />
                Flexible engagement
              </span>
              <span className="flex items-center gap-1">
                <Check size={14} className="text-[#0876ed]" />
                Scalable teams
              </span>
              <span className="flex items-center gap-1">
                <Check size={14} className="text-[#0876ed]" />
                Quality-assured delivery
              </span>
              <span className="flex items-center gap-1">
                <Check size={14} className="text-[#0876ed]" />
                Cost-effective
              </span>
            </div>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {deliveryTeams.map((team) => {
              const Icon = team.icon;

              return (
                <article
                  key={team.title}
                  className={`relative overflow-hidden rounded-lg border bg-white p-4 ${
                    team.featured
                      ? "border-[#0876ed] shadow-[0_8px_30px_rgba(8,118,237,.09)]"
                      : "border-slate-200"
                  }`}
                >
                  {team.badge && (
                    <span className="absolute right-3 top-0 rounded-b-md bg-[#0876ed] px-3 py-1.5 text-xs font-bold text-white">
                      {team.badge}
                    </span>
                  )}

                  <div className="grid grid-cols-[1fr_120px] gap-3 sm:grid-cols-[1fr_135px]">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f0e9ff] text-purple-600">
                          <Icon size={24} />
                        </div>

                        <h3 className="text-lg font-extrabold text-[#071744]">
                          {team.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-md leading-[1.5] text-slate-600">
                        {team.description}
                      </p>

                      <ul className="mt-3 space-y-4">
                        {team.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm font-medium text-slate-600"
                          >
                            <Check
                              size={12}
                              className="mt-[2px] shrink-0 text-[#0876ed]"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="#contact"
                        className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-[#0876ed] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0668d5]"
                      >
                        {team.button}
                        <ArrowRight size={12} />
                      </a>
                    </div>

                    <div className="relative mt-7 h-[150px] overflow-hidden rounded-lg sm:h-[170px]">
                      <img
                        src={team.image}
                        alt={team.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          AI LEAD ENGINES
      ========================================================== */}
      <section className="border-y border-slate-100 bg-[#fbfdff] py-14">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-12">
          <div className="grid items-center gap-6 lg:grid-cols-[290px_1fr]">
            <div>
              <div className="text-sm py-2 font-extrabold uppercase text-[#0876ed]">
                AI Lead Engines
              </div>

              <h2 className="mb-1 text-2xl font-extrabold tracking-[-0.03em] text-[#071744]">
                Turn Data Into Business Opportunities.
              </h2>

              <p className="my-2 max-w-[350px] text-sm leading-[1.5] text-slate-600">
                We combine data, AI tools, AI agents,
                 industry-specific CRM systems and trained 
                 operators to build and manage complete lead generation engines.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
              {engines.map((engine) => {
                const Icon = engine.icon;

                return (
                  <a
                    href="#"
                    key={engine.title}
                    className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="relative h-3/4 overflow-hidden">
                      <img
                        src={engine.image}
                        alt={engine.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-[#071744]/25" />
                    </div>

                    <div className="flex items-center justify-start gap-2 px-2.5 py-2.5">
                      <Icon size={20} className="shrink-0 text-[#0876ed]" />

                      <span className="text-xs font-extrabold leading-tight text-[#071744]">
                        {engine.title}
                      </span>
                    </div>
                  </a>
                );
              })}

              <a
                href="#"
                className="flex min-h-[85px] items-center justify-center rounded-lg border border-dashed border-[#9cc8ef] bg-[#f5faff] p-3 text-center"
              >
                <div>
                  <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0876ed] shadow-sm">
                    <Sparkles size={15} />
                  </div>
                  <div className="text-[10px] font-extrabold text-[#0876ed]">
                  Build a Custom Lead Engine
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY ECOSYSTEM
      ========================================================== */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-12">
          <div className="grid items-center gap-5 lg:grid-cols-[230px_1fr]">
            <div className="">
              <div className="text-sm font-extrabold uppercase text-[#0876ed]">
                Powered by Our Technology Ecosystem
              </div>

              <h2 className="mt-1 text-xl font-extrabold tracking-[-0.025em] text-[#071744]">
                AI, Data and Automation. Working Together.
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                People + Products + Possibilities.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {[
                {
                  name: "CreatikAI",
                  logo: "/creatikai-logo.png",
                  title: "AI Agents & Automation",
                  text: "AI agents, automation and integrations.",
                },
                {
                  name: "iBigData",
                  logo: "/ibigdata-logo.png",
                  title: "Data & CRM Intelligence",
                  text: "Data platforms, analytics and CRMs.",
                },
                {
                  name: "MakeMyLeads",
                  logo: "/makemylead-logo.png",
                  title: "Lead Intelligence",
                  text: "AI-powered lead generation and enrichment.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-6 shadow-sm"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center  text-xl font-black text-[#0876ed]">
                   <img src={item.logo} alt={item.name}/> 
                  </div>

                  <div>
                    <div className="text-2xl font-extrabold text-[#071744]">
                      {item.name}
                    </div>
                    <div className="text-sm font-bold text-[#0876ed]">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-500">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================== */}
      <section className="border-t border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="shrink-0 lg:w-[245px]">
              <div className="text-sm font-extrabold uppercase text-[#0876ed]">
                Industries We Serve
              </div>

              <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.03em] text-[#071744]">
                Built for Growing Businesses
              </h2>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <div
                    key={industry.label}
                    className="flex min-h-[45px] items-center gap-2 rounded-md border border-slate-100 bg-white px-2.5 py-2 shadow-sm"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#edf7ff] text-[#0876ed]">
                      <Icon size={24} />
                    </div>

                    <span className="text-sm font-bold leading-tight text-[#26395f]">
                      {industry.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
   <section
  id="contact"
  className="relative overflow-hidden bg-[#061d40] my-6 text-white"
>
  <div className="mx-auto grid min-h-[145px] max-w-[1500px] items-stretch lg:grid-cols-[42%_58%]">
    
    {/* LEFT: Image + 5% Shadow + Text */}
    <div className="relative min-h-[220px] overflow-hidden sm:min-h-[260px] lg:min-h-[145px]">
      {/* Full-cover image */}
      <img
        src="https://img.magnific.com/premium-photo/office-workers-smiling-working_658385-1366.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Jaipur"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* 5% shadow gradient on right edge — merges image into #061d40 */}
      <div className="absolute inset-y-0 right-0 z-10 w-[5%] bg-gradient-to-r from-transparent to-[#061d40]" />

      {/* Text positioned after the shadow, right-aligned */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="flex w-full justify-start px-5 sm:px-8 lg:px-10">
          <div className="font-serif text-xl italic leading-[1.15] text-[#061d40] drop-shadow-md sm:text-2xl lg:text-[23px]">
            From Jaipur
            <br />
            to a Smarter World.
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT: Content */}
    <div className="flex items-center bg-[#061d40] px-5 py-8 sm:px-8 lg:px-12">
      <div className="w-full">
        <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-3xl">
          Ready to Build Your AI Workforce?
        </h2>

        <p className="my-4 text-sm leading-[1.5] text-slate-300 sm:text-lg">
          Start with a pilot, deploy a dedicated team, use our AI agents or
          explore our lead engines.
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0876ed] px-5 py-2.5 text-base font-bold text-white transition hover:bg-[#0668d5] sm:text-lg"
          >
            Start a Pilot
            <ArrowRight size={13} />
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/50 px-5 py-2.5 text-base font-bold text-white transition hover:bg-white/10 sm:text-lg"
          >
            Talk to Our Team
          </a>

          <a
            href="https://wa.me/911411234567"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/50 px-5 py-2.5 text-base font-bold text-white transition hover:bg-white/10 sm:text-lg"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </main>
  );
}