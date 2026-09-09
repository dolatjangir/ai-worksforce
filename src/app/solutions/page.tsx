import {
  ChevronDown,
  Check,
  ArrowRight,
  Target,
  Users,
  Layers,
  Rocket,
  SearchCheck,
  GraduationCap,
  Bot,
  Database,
  Headset,
  MapPin,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
} from "lucide-react";

const navItems = [
  "Solutions",
  "Workforce",
  "AI Agents",
  "Products",
  "AI Marketing",
  "Technology",
  "Resources",
  "Company",
];

const heroChips = [
  { icon: Target, label: "Strategy to Execution" },
  { icon: Users, label: "Expert-led Teams" },
  { icon: Layers, label: "Scalable Operations" },
  { icon: Rocket, label: "Real Business Results" },
];

const solutions = [
  {
    icon: SearchCheck,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    title: "AI Business Assessment",
    description:
      "Understand your business needs and get a customized AI roadmap.",
  },
  {
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    title: "AI Workforce Solutions",
    description:
      "Expert-led teams with AI tools and trained operators to run your operations.",
  },
  {
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    title: "AI Automation",
    description:
      "Automate repetitive work, processes and business workflows.",
  },
  {
    icon: Database,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    title: "AI Data & Research",
    description:
      "Data mining, enrichment, research and business intelligence operations.",
  },
  {
    icon: Headset,
    image:
      "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=800&auto=format&fit=crop",
    title: "AI Customer Operations",
    description:
      "Support, CRM and customer engagement operations.",
  },
  {
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    title: "AI Sales & Outreach",
    description:
      "Lead generation, outreach and pipeline management.",
  },
];

const whyChoose = [
  {
    icon: Target,
    title: "Tailored to Your Goals",
    description: "No one-size-fits-all approach.",
  },
  {
    icon: Users,
    title: "Expert + AI + Operators",
    description: "The right mix for your business.",
  },
  {
    icon: Layers,
    title: "Scalable & Flexible",
    description: "Start small or go big.",
  },
  {
    icon: Rocket,
    title: "Focus on Results",
    description: "Measurable business impact.",
  },
];

const footerSolutions = [
  "AI Business Assessment",
  "AI Workforce",
  "AI Automation",
  "AI Data & Research",
  "AI Customer Operations",
  "AI Sales & Outreach",
];

const footerQuickLinks = [
  "AI Agents",
  "Products",
  "AI Marketing",
  "Technology",
  "Resources",
  "Company",
];

const footerProducts = [
  { letter: "C", color: "bg-sky-500", name: "CreatikAI" },
  { letter: "B", color: "bg-violet-600", name: "iBigData" },
  { letter: "M", color: "bg-indigo-600", name: "MakeMyLeads" },
];

const checklistItems = ["Analyze", "Design", "Build", "Operate", "Scale"];
const barHeights = [35, 50, 40, 65, 80];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
   

      {/* ================= HERO ================= */}
      <section className="border-b border-slate-100 bg-gradient-to-b  pt-10 from-white to-blue-50/40">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-8">
       

          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Solutions
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
                Complete AI-Powered Operations for Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Business
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600">
                From data and research to AI agents, automation and customer
                operations — we build and manage the right AI-powered solutions
                for your business goals.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                {heroChips.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image layout */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                  alt="AI operations expert"
                  className="h-[340px] w-full object-cover md:h-[380px]"
                />
              </div>

              {/* Handwritten-style badge */}
              <div className="absolute left-5 top-6 rounded-xl bg-slate-900/60 px-4 py-3 backdrop-blur-sm">
                <p className="font-serif text-lg italic leading-snug text-white">
                  Your
                  <br />
                  AI Operations
                  <br />
                  Partner
                </p>
              </div>

              {/* Checklist card */}
              <div className="absolute -right-2 top-6 w-44 rounded-xl bg-white/95 p-4 shadow-xl shadow-slate-900/15 ring-1 ring-slate-100 backdrop-blur md:-right-4">
                <ul className="space-y-2.5">
                  {checklistItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {/* Mini bar chart */}
                <div className="mt-4 flex h-16 items-end justify-end gap-1.5">
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className="w-4 rounded-t-sm bg-gradient-to-t from-blue-600 to-indigo-400"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOLUTION AREAS ================= */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Solution Areas
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Build, Operate and Scale with AI
              </h2>
            </div>
            <p className="max-w-md self-end text-sm leading-relaxed text-slate-500 lg:justify-self-end">
              Choose the right solution for your business needs. Each solution
              can be tailored, combined and managed as a complete AI-powered
              operation.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ icon: Icon, image, title, description }) => (
              <div key={title} className="group">
                <div className="mb-5 overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {description}
                    </p>
                    <button className="mt-3 flex items-center gap-1.5 text-sm font-bold text-blue-600 transition hover:gap-2.5">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="border-y border-slate-100 bg-blue-100/60 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why Choose AIWorkForce
              </p>
              <h2 className="text-3xl font-extrabold leading-snug tracking-tight text-slate-900">
                More Than Solutions.
                <br />
                A Complete AI-Powered Operation.
              </h2>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-4">
              {whyChoose.map(({ icon: Icon, title, description }) => (
                <div key={title}>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md shadow-blue-600/10 ring-1 ring-blue-100">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="relative overflow-hidden w-7xl mx-auto rounded-xl mb-4 bg-gradient-to-r from-[#061a36] via-[#0a2a52] to-[#0d3a6e]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.35),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-14 lg:flex-row">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Ready to Get Started?
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Let&apos;s Build the Right Solution for Your Business.
            </h2>
            <p className="mt-2 text-sm text-blue-100/80">
              Get a customized AI solution or discuss your requirements with
              our team.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/40 transition hover:opacity-90">
              Get AI Assessment
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-lg border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>

   
    </div>
  );
}