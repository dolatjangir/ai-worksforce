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
    title: "Target Audience Discovery",
    text: "Find the right prospects using AI-powered research and data intelligence.",
    icon: Crosshair,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Lead Qualification",
    text: "Automatically score and qualify leads based on intent, behavior, and fit.",
    icon: Users,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Multi-Channel Outreach",
    text: "Engage prospects across email, LinkedIn, SMS, and more — automatically.",
    icon: Rocket,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "CRM Integration",
    text: "Sync leads with your CRM and existing tools for a seamless workflow.",
    icon: Settings,
    iconClass: "bg-brand-purple-soft text-brand-purple",
  },
  {
    title: "Analytics & Reporting",
    text: "Track performance, measure ROI, and get actionable insights.",
    icon: BarChart3,
    iconClass: "bg-brand-blue-soft text-brand-blue",
  },
  {
    title: "Continuous Optimization",
    text: "Use AI to learn, improve, and deliver better results over time.",
    icon: Compass,
    iconClass: "bg-brand-green-soft text-brand-green",
  },
];

const steps = [
  {
    number: "01",
    title: "Define Your Goals",
    text: "Tell us your ideal customer profile and business goals.",
    icon: Search,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "02",
    title: "Find & Qualify",
    text: "Our AI finds and qualifies the right prospects for you.",
    icon: Database,
    color: "bg-brand-green-soft text-brand-green",
  },
  {
    number: "03",
    title: "Automate Outreach",
    text: "We launch multi-channel campaigns to engage your leads.",
    icon: Settings,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "04",
    title: "Track & Optimize",
    text: "Monitor performance and let AI optimize for better results.",
    icon: Users,
    color: "bg-brand-purple-soft text-brand-purple",
  },
  {
    number: "05",
    title: "Get More Customers",
    text: "Convert qualified leads into paying customers and grow.",
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
    <li className="flex items-center gap-2 text-[11px] font-medium text-brand-text">
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
      <header className="relative z-50 mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <a href="#" className="shrink-0">
          <span className="block text-[20px] font-extrabold leading-none tracking-[-1.1px] text-[#101d82]">
            AI WorksForce
          </span>
          <span className="ml-[53px] mt-1 block text-[8px] font-semibold leading-none text-brand-text">
            Automate. Accelerate. Grow.
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Solutions" ? "#solutions" : "#"}
              className={`relative text-[10px] font-medium text-[#46558b] transition hover:text-brand-blue ${
                item === "Solutions" ? "font-bold text-brand-dark" : ""
              }`}
            >
              {item}
              {item === "Solutions" && <ChevronDown className="ml-0.5 inline size-3" />}
              {item === "Solutions" && (
                <span className="absolute -bottom-[25px] left-0 h-0.5 w-full bg-brand-blue" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-xl bg-gradient-to-r from-[#2415ff] to-[#0b237a] px-5 py-3 text-[10px] font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 sm:inline-flex sm:items-center sm:gap-1"
        >
          Book a Free Consultation <ArrowRight className="size-3" />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-brand-dark xl:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full border-y border-blue-100 bg-white px-5 py-4 shadow-xl xl:hidden">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "Solutions" ? "#solutions" : "#"}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-brand-text hover:bg-brand-blue-soft hover:text-brand-blue"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-brand-blue px-4 py-3 text-center text-sm font-bold text-white"
              >
                Book a Free Consultation
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative mx-auto max-w-[1440px] overflow-hidden rounded-b-[22px] bg-[radial-gradient(circle_at_72%_38%,rgba(215,220,255,.9),rgba(242,247,255,.72)_28%,rgba(255,255,255,1)_66%)] px-5 py-10 lg:px-[76px] lg:py-8">
        <div className="pointer-events-none absolute right-[11%] top-0 size-[480px] rounded-full bg-[#d8deff]/40 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-[570px]">
            <p className="text-[10px] font-extrabold tracking-[3px] text-[#2029e8]">
              MORE LEADS. MORE OPPORTUNITIES. MORE GROWTH.
            </p>

            <h1 className="mt-2 text-[50px] font-extrabold leading-[0.95] tracking-[-3px] text-[#0b176c] sm:text-[64px] lg:text-[70px]">
              Lead{" "}
              <span className="bg-gradient-to-r from-[#1238ff] via-[#1d26f1] to-[#5722ea] bg-clip-text text-transparent">
                Engine
              </span>
            </h1>

            <h2 className="mt-3 text-[18px] font-extrabold tracking-[-0.8px] text-brand-dark sm:text-[20px]">
              AI-Powered Lead Generation for Real Business Growth.
            </h2>

            <p className="mt-2 max-w-[545px] text-[14px] leading-[1.45] text-[#536394] sm:text-[15px]">
              Our Lead Engine uses AI to find, qualify, and engage high-intent leads, so you can focus on closing deals. Get a consistent pipeline of quality leads, without the manual effort.
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

          <div className="relative mx-auto h-[335px] w-full max-w-[590px] sm:h-[380px] lg:h-[330px]">
            <div className="absolute left-[27%] top-0 h-full w-[52%] overflow-hidden rounded-[48%] bg-gradient-to-b from-[#d7d9ff] via-[#eff3ff] to-[#eef6ff]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=90"
                alt="AI WorksForce lead generation specialist"
                className="h-full w-full object-cover object-[58%_20%] mix-blend-multiply"
              />
            </div>

            <div className="absolute left-0 top-[9%] z-10 space-y-2">
              {[
                [Search, "Find Prospects", "AI-powered research"],
                [Users, "Qualify Leads", "Smart scoring"],
                [Rocket, "Automate Outreach", "Multi-channel campaigns"],
                [BarChart3, "Track & Optimize", "Real-time analytics"],
              ].map(([Icon, title, subtitle]) => {
                const CardIcon = Icon as typeof Search;
                return (
                  <div
                    key={title as string}
                    className="flex w-[165px] items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 shadow-[0_10px_25px_rgba(38,74,151,.14)]"
                  >
                    <span className="grid size-9 place-items-center rounded-full bg-[#e7ecff] text-[#172bff]">
                      <CardIcon className="size-5 fill-current stroke-[2.4]" />
                    </span>
                    <span>
                      <strong className="block text-[10px] font-extrabold leading-tight text-brand-dark">
                        {title as string}
                      </strong>
                      <small className="block text-[8px] font-medium text-brand-text-muted">
                        {subtitle as string}
                      </small>
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="absolute right-0 top-[4%] z-10 w-[170px] rounded-xl bg-white p-3.5 shadow-[0_10px_25px_rgba(38,74,151,.14)]">
              <div className="flex items-start justify-between">
                <h3 className="text-[14px] font-extrabold leading-[1.1] tracking-[-0.5px] text-brand-dark">
                  Turn Prospects
                  <br />
                  Into Revenue
                </h3>
                <BarChart3 className="size-7 text-[#152af1]" />
              </div>

              <ul className="mt-3 space-y-2">
                <CheckItem>Discover Target Accounts</CheckItem>
                <CheckItem>Engage at the Right Time</CheckItem>
                <CheckItem>Nurture Automatically</CheckItem>
                <CheckItem>Convert More Deals</CheckItem>
              </ul>
            </div>

            <div className="absolute bottom-[8%] right-0 z-10 w-[164px] rounded-xl bg-white p-3 shadow-[0_10px_25px_rgba(38,74,151,.14)]">
              <p className="text-[10px] font-extrabold text-brand-dark">Leads Generated</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[18px] font-extrabold text-brand-green">↑ 256%</span>
                <svg viewBox="0 0 78 34" className="h-8 w-20">
                  <path d="M2 29 14 20 23 25 34 12 44 18 55 7 64 15 76 2" fill="none" stroke="#10b981" strokeWidth="2.5" />
                  <path d="M68 2h8v8" fill="none" stroke="#10b981" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-[-4px] left-[29%] z-20 w-[52%] overflow-hidden rounded-t-[10px] bg-[#e8ebf0] px-6 pb-2 pt-9 shadow-[0_16px_22px_rgba(16,32,79,.2)]">
              <p className="text-center text-[10px] font-bold text-[#0d1a82]">AI WorksForce</p>
            </div>

            <p className="absolute bottom-2 right-5 rotate-[-10deg] font-hand text-[19px] leading-[0.9] text-[#1428ee]">
              Your
              <br />
              Growth
              <br />
              Starts with
              <br />
              Better Leads
            </p>
          </div>
        </div>

        <div className="relative mt-6 grid max-w-[575px] grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-blue-100">
          {[
            [BarChart3, "3x", "More Qualified Leads"],
            [Clock3, "70%", "Less Manual Effort"],
            [BarChart3, "5x", "Higher Conversion Rates"],
          ].map(([Icon, value, label]) => {
            const StatIcon = Icon as typeof BarChart3;
            return (
              <div key={value as string} className="flex items-center gap-2 sm:px-4 first:pl-0">
                <span className="grid size-10 place-items-center rounded-full bg-brand-green-soft text-brand-green">
                  <StatIcon className="size-5 fill-current" />
                </span>
                <div>
                  <strong className="block text-[21px] font-extrabold leading-none text-[#1729ef]">
                    {value as string}
                  </strong>
                  <span className="text-[10px] font-medium text-[#59689a]">{label as string}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-5 lg:px-[76px]">
        <p className="text-[9px] font-extrabold tracking-[2.7px] text-[#1d28e7]">
          TRUSTED BY GROWING BUSINESSES
        </p>

        <div className="mt-4 grid grid-cols-3 items-center gap-x-4 gap-y-6 text-center sm:grid-cols-4 lg:grid-cols-8">
          {["HubSpot", "salesforce", "LinkedIn", "Google", "Apollo.io", "zoominfo", "pipedrive", "Outreach"].map((brand, index) => (
            <span
              key={brand}
              className={`text-[17px] font-extrabold tracking-[-0.8px] ${
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
      </section>

      <section id="solutions" className="mx-auto max-w-[1440px] px-5 py-3 lg:px-[76px]">
        <div className="text-center">
          <p className="text-[9px] font-extrabold tracking-[2.8px] text-[#1d28e7]">
            OUR LEAD ENGINE SOLUTIONS
          </p>
          <h2 className="mt-1 text-[24px] font-extrabold tracking-[-1.2px] text-brand-dark sm:text-[26px]">
            Everything You Need to Generate and Convert Leads
          </h2>
          <p className="mx-auto mt-1 max-w-3xl text-[13px] text-[#58689a]">
            From AI-powered prospecting to automated outreach, our Lead Engine helps you build a predictable and scalable pipeline.
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
              <h3 className="mt-3 text-[13px] font-extrabold leading-[1.15] tracking-[-0.45px] text-brand-dark">
                {title}
              </h3>
              <p className="mt-2 text-[12px] leading-[1.32] text-[#556595]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-[1440px] px-5 py-5 lg:px-[76px]">
        <div className="rounded-xl bg-[#fafbff] px-4 py-5 sm:px-5">
          <div className="text-center">
            <p className="text-[9px] font-extrabold tracking-[2.8px] text-[#1d28e7]">HOW IT WORKS</p>
            <h2 className="mt-1 text-[24px] font-extrabold tracking-[-1.1px] text-brand-dark">
              A Simple Process for Big Results
            </h2>
            <p className="mt-1 text-[13px] text-[#58689a]">
              We make lead generation easy, efficient, and effective with AI.
            </p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {steps.map(({ number, title, text, icon: Icon, color }, index) => (
              <div key={number} className="relative px-3 text-center">
                <span className={`mx-auto grid size-12 place-items-center rounded-full ${color}`}>
                  <Icon className="size-6" />
                </span>
                <p className="mt-2 text-[10px] font-extrabold text-[#1b2ce9]">{number}</p>
                <h3 className="text-[13px] font-extrabold text-brand-dark">{title}</h3>
                <p className="mx-auto mt-1 max-w-[170px] text-[12px] leading-[1.28] text-[#566696]">{text}</p>

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
          <p className="text-[9px] font-extrabold tracking-[2.7px] text-[#1d28e7]">
            REAL RESULTS. REAL BUSINESSES.
          </p>
          <h2 className="mt-1 text-[26px] font-extrabold tracking-[-1.2px] text-brand-dark">
            Drive Predictable Growth with Lead Engine
          </h2>
          <p className="mt-1 max-w-[540px] text-[14px] leading-[1.35] text-[#58689a]">
            See how businesses like yours are generating more leads, reducing costs, and closing more deals with AI WorksForce.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {metrics.map(({ value, label, icon: Icon, color }) => (
              <div key={value} className="rounded-xl bg-[#f8faff] p-3 text-center">
                <span className={`mx-auto grid size-9 place-items-center rounded-full ${color.split(" ")[1]} ${color.split(" ")[0]}`}>
                  <Icon className="size-4" />
                </span>
                <strong className="mt-2 block text-[22px] font-extrabold leading-none text-[#1527d9]">
                  {value}
                </strong>
                <p className="mt-1 text-[10px] leading-[1.2] text-[#58689a]">{label}</p>
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
              <p className="text-[9px] font-extrabold tracking-[2.3px] text-[#1d28e7]">CASE STUDY</p>
              <h3 className="mt-1 text-[17px] font-extrabold leading-[1.1] tracking-[-0.6px] text-brand-dark">
                B2B SaaS Company: 4x More Qualified Leads
              </h3>
              <p className="mt-2 text-[12px] leading-[1.35] text-[#556595]">
                We helped a B2B SaaS company implement our Lead Engine to automate prospecting and outreach, resulting in 312% more qualified leads and 4x higher conversion rates in just 4 months.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["312%", "More Qualified Leads"],
                  ["4x", "Higher Conversion"],
                  ["70%", "Lower CPL"],
                ].map(([value, label]) => (
                  <div key={value}>
                    <strong className="block text-[21px] font-extrabold leading-none text-[#1527e5]">{value}</strong>
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
            <p className="text-[9px] font-bold tracking-[3px] text-blue-100">READY TO FILL YOUR PIPELINE?</p>
            <h2 className="mt-2 text-[24px] font-extrabold tracking-[-0.8px] sm:text-[27px]">
              Let’s Build Your Lead Generation Engine
            </h2>
            <p className="mt-1 text-[12px] text-blue-100 sm:text-[13px]">
              Get expert guidance on how AI can help you generate, qualify, and convert more leads.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="rounded-md bg-white px-6 py-3 text-[11px] font-bold text-[#102079] shadow-lg transition hover:-translate-y-0.5"
              >
                Book a Free Consultation <ArrowRight className="ml-1 inline size-3" />
              </a>
              <a
                href="#solutions"
                className="rounded-md border border-white/70 px-6 py-3 text-[11px] font-bold text-white transition hover:bg-white/10"
              >
                Explore Lead Engine
              </a>
            </div>
          </div>

          <p className="absolute bottom-5 right-8 hidden rotate-[-10deg] text-left font-hand text-[20px] leading-[0.9] text-white md:block">
            More Leads
            <br />
            More Deals
            <br />
            Bigger Growth
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-[1440px] px-5 pb-5 pt-3 lg:px-[76px]">
        <div className="flex flex-col gap-5 border-b border-blue-100 pb-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[18px] font-extrabold tracking-[-1px] text-[#101d82]">AI WorksForce</p>
            <p className="text-[8px] font-semibold text-brand-text">Automate. Accelerate. Grow.</p>
          </div>

          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-medium text-[#58689a]">
            {navItems.map((item) => (
              <a key={item} href="#" className="hover:text-brand-blue">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-3 text-[#1b347c]">
            <a href="#" aria-label="LinkedIn"><Linkedin className="size-4" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="size-4" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="size-4" /></a>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 text-[9px] text-[#62719f] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2024 AI WorksForce. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}