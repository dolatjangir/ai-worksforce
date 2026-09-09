import {
  ChevronDown,
  ArrowRight,
  Play,
  Bot,
  Users,
  Settings,
  TrendingUp,
  Plus,
  Briefcase,
  Rocket,
} from "lucide-react";

const navItems = [
  "Solutions",
  "AI Workforce",
  "AI Agents",
  "Products",
  "AI Digital Marketing",
  "Resources",
  "Company",
];

const heroFloatingCards = [
  {
    icon: Bot,
    title: "AI Agents",
    subtitle: "Handle Repetitive Work",
    position: "left-[42%] top-[6%] xl:left-[38%]",
  },
  {
    icon: Users,
    title: "Human Experts",
    subtitle: "Ensure Quality",
    position: "left-[40%] top-[24%] xl:left-[36%]",
  },
  {
    icon: Settings,
    title: "Managed Operations",
    subtitle: "Drive Results",
    position: "right-[4%] top-[30%]",
  },
];

const stats = [
  { value: "70%", label: "Faster Operations" },
  { value: "3x", label: "Higher Productivity" },
  { value: "50%", label: "Lower Costs" },
];

const trustedLogos = [
  "stripe",
  "shopify",
  "hubspot",
  "slack",
  "Microsoft",
  "Google",
  "amazon",
  "zapier",
];

const teamPillars = [
  {
    icon: Bot,
    color: "text-blue-600 bg-blue-50",
    bg: " bg-emerald-50",
    title: "AI Agents",
    description: "Handle repetitive and time-consuming tasks with speed and accuracy.",
  },
  {
    icon: Users,
    color: "text-emerald-500 bg-emerald-50",
    bg: "t bg-blue-50",
    title: "Human Experts",
    description: "Provide oversight, strategy and domain expertise.",
  },
  {
    icon: Settings,
    color: "text-purple-500 bg-purple-50",
      bg: "bg-amber-50",
    title: "Managed Operations",
    description:
      "We manage the entire workforce so you can focus on what matters most.",
  },
  {
    icon: TrendingUp,
    color: "text-amber-500 bg-amber-50",
    bg: " bg-purple-50",
    title: "Real Results",
    description: "Lower costs, higher productivity and faster growth.",
  },
];

const steps = [
  {
    icon: Briefcase,
    color: "bg-blue-600",
    title: "Understand Your Goals",
    description:
      "We assess your business needs and identify the right opportunities.",
  },
  {
    icon: Users,
    color: "bg-purple-500",
    title: "Design Your Workforce",
    description: "We build a tailored team of AI agents and experts.",
  },
  {
    icon: Settings,
    color: "bg-emerald-500",
    title: "Deploy & Manage",
    description: "We deploy, monitor and optimize your workforce.",
  },
  {
    icon: Rocket,
    color: "bg-amber-500",
    title: "Scale & Grow",
    description:
      "You get measurable results and continuous improvement.",
  },
];

const faqs = [
  "What is an AI workforce?",
  "How is it different from hiring a team?",
  "Which industries can benefit?",
  "How long does it take to get started?",
  "Do you offer custom solutions?",
];

export default function AIWorkforcePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
  

      {/* ================= HERO ================= */}
      <section className="overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
              AI Workforce
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
              Your Business.
              <br />
              A Stronger Workforce.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Powered by AI.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">
              Get a dedicated AI workforce of agents, experts and operators to
              help you automate work, scale growth and achieve real results —
              without the cost and complexity of building an AI team.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:opacity-90">
                Get Your AI Workforce Assessment
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2.5 rounded-lg bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-md ring-1 ring-slate-200 transition hover:ring-blue-300">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Play className="ml-0.5 h-3 w-3 fill-current" />
                </span>
                See How it Works
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex divide-x divide-slate-200">
              {stats.map(({ value, label }, i) => (
                <div key={label} className={i === 0 ? "pr-8" : "px-8"}>
                  <p className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-3xl font-extrabold text-transparent">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image with floating cards */}
          <div className="relative">
            <img
              src="/ai-workforce-hero-img.png"
              alt="Professional working with AI workforce"
              className=" w-full rounded-2xl object-cover shadow-2xl shadow-slate-900/10 md:h-[480px]"
            />

          
            {/* Business growth card */}
                {/* <div className="absolute -bottom-6 right-4 w-52 rounded-xl bg-white/95 p-4 shadow-xl shadow-slate-900/15 ring-1 ring-slate-100 backdrop-blur">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-900">
                    Business Growth
                    </p>
                    <p className="text-sm font-extrabold text-emerald-500">
                    ↑ 230%
                    </p>
                </div>
                <div className="mt-3 flex h-14 items-end gap-1.5">
                    {[30, 45, 40, 60, 75, 90, 100].map((h, i) => (
                    <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-blue-300"
                        style={{ height: `${h}%` }}
                    />
                    ))}
                </div>
                </div> */}
          </div>
        </div>

        {/* Trusted by strip */}
        <div className="border-t border-slate-100 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-7">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              Trusted by Growing Businesses
            </p>
            {trustedLogos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-extrabold tracking-tight text-slate-400 transition hover:text-slate-600"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT IS AN AI WORKFORCE ================= */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              What is an AI Workforce?
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              A Complete Team. Powered by AI.
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
              An AI workforce is a combination of AI agents, expert humans and
              managed operations working together to execute tasks, improve
              efficiency and help your business grow.
            </p>
          </div>

          <div className="mt-2 grid gap-8  sm:grid-cols-2 lg:grid-cols-4 md:p-10">
            {teamPillars.map(({ icon: Icon, color, title, description,bg }) => (
              <div key={title} className={`rounded-2xl border border-slate-100 ${bg} p-8`}>
                <span
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="border-y border-slate-100 bg-blue-50 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              From Business Problem to Real Results
            </h2>
            <p className="mt-4 text-sm text-slate-500">
              A simple, proven process to get your AI workforce up and running.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map(({ icon: Icon, color, title, description }, i) => (
              <div key={title} className="relative flex gap-4">
                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-5 top-5 hidden h-5 w-5 text-slate-300 md:block" />
                )}
                <div className="relative shrink-0">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${color} text-white shadow-lg`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-extrabold text-blue-600 ring-2 ring-blue-100">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold leading-snug text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA + FAQ ================= */}
      <section className="py-8">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 lg:grid-cols-2">
          {/* CTA card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a2a52] to-[#123c73] p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Ready to Build Your AI Workforce?
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-snug tracking-tight text-white">
                Let&apos;s Talk About
                <br />
                Your Opportunities.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-100/80">
                Get a personalized consultation and see how an AI workforce can
                help your business grow faster.
              </p>
              <button className="mt-8 flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-blue-50">
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                Frequently Asked Questions
              </h3>
              <button className="flex items-center gap-1.5 text-sm font-bold text-blue-600 transition hover:gap-2.5">
                View All FAQs
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100">
              {faqs.map((question) => (
                <details key={question} className="group px-6 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-700 transition group-open:text-blue-600">
                    {question}
                    <Plus className="h-4 w-4 shrink-0 text-slate-400 transition group-open:rotate-45 group-open:text-blue-600" />
                  </summary>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}