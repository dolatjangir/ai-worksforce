import Image from "next/image";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Lightbulb,
  BarChart3,
  ClipboardList,
  FileSearch,
  Rocket,
  CheckCircle2,
  Users,
  Star,
  MapPin,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  MessageSquare,
  LineChart,
  MonitorSmartphone,
  Search,
  FileCheck,
  Handshake,
  Building2,
} from "lucide-react";

/* ============================================
   DATA
============================================ */

const trustBadges = [
  { icon: Search, label: "Expert Analysis" },
  { icon: ClipboardList, label: "Tailored Recommendations" },
  { icon: FileCheck, label: "Clear Roadmap" },
  { icon: CheckCircle2, label: "No Obligation" },
];

const whyCards = [
  {
    icon: Target,
    title: "Identify Opportunities",
    desc: "Find the right areas to use AI for maximum impact.",
  },
  {
    icon: FileSearch,
    title: "Reduce Costs",
    desc: "Automate repetitive work and improve efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Drive Growth",
    desc: "Discover new ways to increase revenue and productivity.",
  },
  {
    icon: Lightbulb,
    title: "Get a Clear Plan",
    desc: "Receive a step-by-step roadmap tailored to your business.",
  },
];

const processSteps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Understand",
    desc: "We learn about your business, goals and current operations.",
  },
  {
    num: "02",
    icon: FileSearch,
    title: "Analyze",
    desc: "We identify opportunities for AI across your processes.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Evaluate",
    desc: "We assess impact, feasibility and expected ROI.",
  },
  {
    num: "04",
    icon: MonitorSmartphone,
    title: "Recommend",
    desc: "You get a tailored roadmap with prioritized AI solutions.",
  },
  {
    num: "05",
    icon: Rocket,
    title: "Next Steps",
    desc: "We help you plan implementation or start a pilot project.",
  },
];

const receiveCards = [
  {
    icon: ClipboardList,
    title: "Current State Analysis",
    desc: "Review of your processes, tools and opportunities.",
  },
  {
    icon: Lightbulb,
    title: "AI Opportunity Areas",
    desc: "Key use cases with potential impact.",
  },
  {
    icon: BarChart3,
    title: "ROI Estimates",
    desc: "Expected benefits and cost savings.",
  },
  {
    icon: FileCheck,
    title: "Implementation Roadmap",
    desc: "Step-by-step plan to get started.",
  },
  {
    icon: Users,
    title: "Expert Consultation",
    desc: "Discussion with our AI specialists.",
  },
];

const idealFor = [
  "Businesses looking to explore AI opportunities",
  "Companies wanting to improve efficiency and reduce costs",
  "Teams planning AI adoption but unsure where to start",
  "Organizations seeking expert guidance and a clear roadmap",
];

const stats = [
  { icon: Building2, value: "200+", label: "Businesses Assessed" },
  { icon: Target, value: "90%", label: "Identify High-Impact Opportunities" },
  { icon: TrendingUp, value: "30%+", label: "Average Efficiency Improvement" },
  { icon: Star, value: "4.8/5", label: "Client Satisfaction" },
];

const footerCols = [
  {
    heading: "Solutions",
    links: [
      "AI Business Assessment",
      "AI Workforce",
      "AI Automation",
      "AI Data & Research",
      "AI Customer Operations",
      "AI Sales & Outreach",
    ],
  },
  {
    heading: "Quick Links",
    links: [
      "AI Agents",
      "Products",
      "AI Marketing",
      "Technology",
      "Resources",
      "Company",
    ],
  },
];

const products = [
  { name: "CreatikAI", color: "#e11d48" },
  { name: "iBigData", color: "#2563eb" },
  { name: "MakeMyLeads", color: "#7c3aed" },
];

/* ============================================
   SHARED BITS
============================================ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
      {children}
    </p>
  );
}

function GradientButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
      style={{ background: "var(--gradient-brand-soft)" }}
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

function OutlineButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-primary)]/40 bg-white/60 px-6 py-3.5 text-sm font-semibold text-[var(--color-heading)] backdrop-blur transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-white"
    >
      {children}
    </a>
  );
}

/* ============================================
   SECTIONS
============================================ */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft section gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-section)" }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-[var(--color-blue-100)] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-40 -right-24 -z-10 h-80 w-80 rounded-full bg-[var(--color-indigo-50)] blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        {/* Left */}
        <div>
        

          <Eyebrow>AI Business Assessment</Eyebrow>

          <h1 className="mt-4 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-[var(--color-heading-dark)]">
              Discover Your AI
            </span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-heading)" }}
            >
              Opportunity
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
            A strategic assessment to help you identify, plan and implement the
            right AI solutions for your business.
          </p>

          {/* trust badges */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-heading-secondary)]"
              >
                <Icon size={16} className="text-[var(--color-primary)]" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <GradientButton>Get Your AI Assessment</GradientButton>
            <OutlineButton>Talk to Our Team</OutlineButton>
          </div>
        </div>

        {/* Right — your hero image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[var(--shadow-blue-strong)]">
            <Image
              src="/assessment-hero-right-img.png"
              alt="Your AI Opportunity — assessment session"
              width={1024}
              height={768}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          {/* floating glass card, like the "Better Ideas Bigger Results" panel */}
          <div className="absolute top-6 right-6 hidden rounded-2xl border border-white/40 bg-white/70 px-5 py-4 backdrop-blur-md sm:block">
            <p className="text-sm font-extrabold text-[var(--color-heading)]">
              Better Ideas.
              <br />
              Bigger Results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow>Why get an AI Business Assessment?</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-heading-dark)] sm:text-4xl">
            Make Smarter Decisions
            <br />
            with Real Insights.
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text)]">
            Our assessment helps you understand where AI can create the most
            value in your business — with practical, actionable
            recommendations.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {whyCards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-[0_8px_30px_var(--shadow-blue)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:shadow-[0_16px_40px_var(--shadow-blue-medium)]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[var(--color-blue-50)] p-3 text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-[var(--color-heading)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[var(--color-cyan-50)]/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mb-14 grid gap-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Our Assessment Process</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-heading-dark)] sm:text-4xl">
              Simple. Structured. Actionable.
            </h2>
          </div>
          <p className="self-end leading-relaxed text-[var(--color-text)] lg:text-right">
            A focused and collaborative process designed to give you clear
            insights and a practical roadmap.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map(({ num, icon: Icon, title, desc }, i) => (
            <div key={num} className="relative">
              {/* connector arrow */}
              {i < processSteps.length - 1 && (
                <ArrowRight
                  size={22}
                  className="absolute top-3 right-10 hidden  text-[var(--color-primary)]/70 lg:block"
                />
              )}
              <div className="mb-5 inline-flex rounded-full border border-[var(--color-border)] bg-white p-4 shadow-[0_6px_20px_var(--shadow-blue)]">
                <Icon size={22} className="text-[var(--color-primary)]" />
              </div>
              <p className="text-xs font-bold tracking-widest text-[var(--color-primary)]">
                {num}
              </p>
              <h3 className="mt-1 font-bold text-[var(--color-heading)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReceiveSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <div className="mb-12 grid gap-6 lg:grid-cols-2">
        <div>
          <Eyebrow>What You Receive</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-heading-dark)] sm:text-4xl">
            A Practical Roadmap for Your Business.
          </h2>
        </div>
        <p className="self-end leading-relaxed text-[var(--color-text)] lg:text-right">
          Your AI business assessment includes a comprehensive set of insights
          and recommendations.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {receiveCards.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-[var(--color-border)] bg-gradient-to-b from-[var(--color-blue-50)]/60 to-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_var(--shadow-blue-medium)]"
          >
            <div className="mx-auto mb-4 inline-flex text-[var(--color-primary)]">
              <Icon size={26} />
            </div>
            <h3 className="font-bold text-[var(--color-heading)]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function IdealForSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8">
      {/* ── Top row: dark panel | image | testimonial ── */}
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr_1fr] lg:gap-8">
        
        {/* dark panel */}
        <div className="relative overflow-hidden rounded-2xl bg-blue-950 p-4 text-white sm:p-6">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 85% 10%, rgba(0,198,255,0.25) 0%, transparent 55%)",
            }}
          />
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-cyan)]">
              Ideal For
            </p>
            <h2 className="mt-1 text-2xl leading-snug font-extrabold tracking-tight sm:text-[1.75rem]">
              Is This Assessment
              <br />
              Right for You?
            </h2>
            <ul className="mt-4 space-y-1.5">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[var(--color-cyan-light)]"
                  />
                  <span className="text-[13px] leading-relaxed text-white/90">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* image panel */}
        <div className="relative min-h-[260px] overflow-hidden rounded-2xl">
          <Image
            src="/assessment-page-img.jpeg"
            alt="Business leader ready for AI assessment"
            fill
            className="object-cover object-top"
          />
        </div>
        

        {/* testimonial */}
        <figure className="flex flex-col justify-center">
          <span
            className="text-5xl font-black leading-[0.6]"
            style={{ color: "var(--color-primary)" }}
          >
            &ldquo;
          </span>
          <blockquote className="mt-4 text-[17px] leading-relaxed font-medium text-[var(--color-heading)]">
            The AI assessment gave us clear direction and helped us prioritize
            the right use cases. It saved us months of trial and error.
          </blockquote>
          <figcaption className="mt-5">
            <p className="text-sm font-bold text-[var(--color-heading)]">
              Rohit Mehta
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              CEO, GrowthPath Solutions
            </p>
            <div className="mt-2 flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
          </figcaption>
        </figure>
      </div>

      {/* ── Stats row with dividers ── */}
      <div className="mt-12 grid grid-cols-2 gap-y-10 rounded-2xl border border-[var(--color-border)] bg-white px-6 py-8 shadow-[0_8px_30px_var(--shadow-blue)] lg:grid-cols-4 lg:px-10">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className={`flex items-center gap-4 ${
              i > 0 ? "lg:border-l lg:border-[var(--color-border)] lg:pl-10" : ""
            }`}
          >
            <div className="rounded-lg bg-[var(--color-blue-50)] p-2.5 text-[var(--color-primary)]">
              <Icon size={22} />
            </div>
            <div>
              <p className="text-xl font-extrabold tracking-tight text-[var(--color-heading-dark)] sm:text-2xl">
                {value}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-[var(--color-text-muted)]">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-dark)] py-10 mb-4">
      <div
        aria-hidden
        className="absolute inset-0 bg-blue-950 max-w-7xl mx-auto rounded-xl"
        
      />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-5 sm:px-8 lg:flex-row">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-cyan)]">
            Ready to discover your AI opportunity?
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Get Your AI Business Assessment Today.
          </h2>
          <p className="mt-3 max-w-xl text-white/80">
            Take the first step towards a smarter, more efficient and more
            competitive business.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <GradientButton>Get AI Assessment</GradientButton>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}


/* ============================================
   PAGE
============================================ */

export default function AIBusinessAssessmentPage() {
  return (
    <main className="min-w-80 bg-white font-sans text-[var(--brand-dark)] antialiased">
      <Hero />
      <WhySection />
      <ProcessSection />
      <ReceiveSection />
      <IdealForSection />
      <CtaBanner />
      {/* <Footer /> */}
    </main>
  );
}