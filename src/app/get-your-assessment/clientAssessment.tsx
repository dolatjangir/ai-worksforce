"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  FileText,
  Lightbulb,
  LockKeyhole,
  Menu,
  MessageCircle,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UserRound,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type AssessmentFormData = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  companySize: string;
  goals: string;
};

type AssessmentPageProps = {
  /** Use the standalone woman/laptop artwork, not the full-page screenshot. */
  heroImageSrc: string;
  logoSrc?: string;
  testimonialAvatarSrc?: string;
  /** Connect this callback to your API, CRM, or server action. */
  onSubmit: (data: AssessmentFormData) => Promise<void>;
  contactHref?: string;
  faqs?: ReadonlyArray<{ question: string; answer: string }>;
};

const benefits: {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}[] = [
  {
    title: "Identify Opportunities",
    description: "Find high-impact areas for AI automation",
    icon: Zap,
    color: "bg-brand-blue",
  },
  {
    title: "Estimate ROI",
    description: "Get potential cost savings and growth",
    icon: BarChart3,
    color: "bg-brand-green",
  },
  {
    title: "Technology Guidance",
    description: "Right tools and solutions for your needs",
    icon: Settings,
    color: "bg-brand-purple",
  },
  {
    title: "Expert Consultation",
    description: "advice from AI specialists",
    icon: UserRound,
    color: "bg-brand-orange",
  },
];

const steps = [
  {
    title: "Share Your Business Details",
    description: "Tell us about your industry, team, and current processes.",
    icon: FileText,
  },
  {
    title: "We Analyze Your Opportunities",
    description: "Our AI team spots automation and growth areas.",
    icon: Search,
  },
  {
    title: "Get Your Custom Report",
    description: "Receive an AI roadmap with actionable recommendations.",
    icon: FileText,
  },
  {
    title: "Discuss & Plan",
    description: "Review your results with our team. Plan your next steps.",
    icon: Rocket,
  },
];

const navigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "AI Digital Marketing", href: "/ai-digital-marketing" },
  { label: "Technology", href: "/technology" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
];

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";
const focus =
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25 focus-visible:ring-offset-2";
const input =
  "min-h-12 w-full rounded-lg border border-[var(--color-border)] bg-white px-3.5 py-3 text-base text-brand-dark outline-none transition placeholder:text-brand-text-muted focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 disabled:cursor-wait disabled:opacity-60";
const label = "mb-2 block text-sm font-medium text-brand-dark";
const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue";
const gradient =
  "bg-[image:var(--gradient-heading)] bg-clip-text text-transparent";

export default function AssessmentPage({
  heroImageSrc,
  logoSrc,
  testimonialAvatarSrc,
  onSubmit,
  contactHref = "/contact",
  faqs = [
    { question: "What does the AI assessment include?", answer: "We review your business processes, identify AI opportunities, and recommend a roadmap for implementation." },
    { question: "Is there any obligation to proceed?", answer: "No. You can review the recommendations before deciding your steps." },
  ],
}: AssessmentPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const form = event.currentTarget;
    const values = new FormData(form);
    const value = (key: string) => String(values.get(key) ?? "").trim();

    setStatus("loading");

    try {
      await onSubmit({
        fullName: value("fullName"),
        email: value("email"),
        company: value("company"),
        phone: value("phone"),
        industry: value("industry"),
        companySize: value("companySize"),
        goals: value("goals"),
      });

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark">
      <a
        href="#assessment-content"
        className={`sr-only z-50 rounded-lg bg-white p-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 ${focus}`}
      >
        Skip to content
      </a>

    

      <main id="assessment-content">
        {/* HERO */}
        <section
          aria-labelledby="assessment-title"
          className="relative isolate overflow-hidden bg-[linear-gradient(110deg,var(--color-cyan-50)_0%,white_42%,var(--color-blue-100)_100%)]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/2 bg-brand-blue/10 blur-3xl"
          />

          <div className={`${container} grid items-center lg:min-h-130 lg:grid-cols-2`}>
            <div className="relative z-10 py-12 sm:py-16 lg:py-20">
              <span className="inline-flex rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">
                Free AI Assessment
              </span>

              <h1
                id="assessment-title"
                className="mt-4 text-[clamp(2.75rem,5.3vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.045em]"
              >
                <span className={`block ${gradient}`}>Get Your AI</span>
                Assessment
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-dark sm:text-lg">
                Discover how AI can transform your business. Our experts will
                analyze your current processes, identify automation opportunities,
                and create a customized AI roadmap for your growth.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10">
                {[
                  { icon: BrainCircuit, text: "Personalized Analysis" },
                  { icon: TrendingUp, text: "Actionable Recommendations" },
                  { icon: ShieldCheck, text: "No Obligation Consultation" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="max-w-36 text-sm font-medium leading-5">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-2xl self-end lg:-mr-10 lg:w-[calc(100%+2.5rem)] lg:max-w-none">
              <img
                src={heroImageSrc}
                alt="AI assessment specialist reviewing business opportunities"
                width={900}
                height={800}
                fetchPriority="high"
                decoding="async"
                className="block h-auto max-h-150 w-full object-contain object-bottom"
              />
            </div>
          </div>
        </section>

        <div className="bg-[image:var(--gradient-section)]">
          {/* BENEFITS */}
          <section
            aria-labelledby="benefits-heading"
            className={`${container} py-12 sm:py-16`}
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className={eyebrow}>Why Get an AI Assessment?</p>
              <h2
                id="benefits-heading"
                className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              >
                Make <span className={gradient}>Smarter Decisions</span> with Data
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-text sm:text-lg">
                The AI assessment helps you see where AI can have an impact on your business. I know you want to make the choices.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ title, description, icon: Icon, color }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-[0_6px_24px_var(--shadow-blue)]"
                >
                  <span
                    className={`flex size-14 items-center justify-center rounded-full text-white shadow-inner ${color}`}
                  >
                    <Icon aria-hidden="true" className="size-7" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-brand-text">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* PROCESS AND FORM */}
          <section
            aria-label="Assessment process and request form"
            className={`${container} grid items-start gap-10 pb-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-16`}
          >
            <div>
              <p className={eyebrow}>Our Assessment Process</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                <span className={gradient}>Simple, Fast, and Effective</span>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-text">
                Get your customized AI assessment in just a few simple steps.
              </p>

              <ol className="mt-8 space-y-6">
                {steps.map(({ title, description, icon: Icon }, index) => (
                  <li key={title} className="relative flex gap-3 sm:gap-5">
                    {index < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-5 top-11 h-[calc(100%+0.5rem)] w-px bg-brand-blue/20"
                      />
                    )}

                    <span className="relative z-10 mt-2 flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-blue-soft text-sm font-bold text-brand-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue sm:size-16">
                      <Icon aria-hidden="true" className="size-7" />
                    </span>

                    <div className="min-w-0 py-1">
                      <h3 className="text-base font-semibold sm:text-lg">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-text sm:text-base">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Testimonial reproduced from the supplied design. */}
              <figure className="mt-8 rounded-2xl border border-brand-blue/15 bg-white/80 p-5 sm:p-6">
                <div className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="font-serif text-6xl leading-none text-brand-blue/60"
                  >
                    “
                  </span>
                  <blockquote className="text-base leading-relaxed">
                    The AI assessment helped us identify{" "}
                    <strong>₹40+ lakhs</strong> in annual savings through
                    automation. Highly recommended!
                  </blockquote>
                </div>

                <figcaption className="mt-4 flex items-center gap-4">
                  {testimonialAvatarSrc ? (
                    <img
                      src={testimonialAvatarSrc}
                      alt=""
                      width={56}
                      height={56}
                      loading="lazy"
                      className="size-14 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-blue-soft font-bold text-brand-blue"
                    >
                      RM
                    </span>
                  )}
                  <div>
                    <p className="font-semibold">Rahul Mehta</p>
                    <p className="text-sm text-brand-text">
                      CEO, GrowthTech Solutions
                    </p>
                    <div
                      aria-label="5 out of 5 stars"
                      className="mt-1 flex gap-1 text-brand-orange"
                    >
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          aria-hidden="true"
                          className="size-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div
              id="assessment-form"
              className="scroll-mt-8 rounded-2xl border border-brand-blue/15 bg-white p-5 shadow-[0_8px_30px_var(--shadow-blue)] sm:p-7"
            >
              <p className={eyebrow}>Get Started</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Request Your AI Assessment
              </h2>
              <p className="mt-2 text-base leading-relaxed text-brand-text">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <form
                onSubmit={handleSubmit}
                aria-busy={status === "loading"}
                className="mt-6"
              >
                <fieldset
                  disabled={status === "loading"}
                  className="m-0 min-w-0 border-0 p-0"
                >
                  <legend className="sr-only">Your business details</legend>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="assessment-name" className={label}>
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="assessment-name"
                        name="fullName"
                        autoComplete="name"
                        placeholder="John Doe"
                        required
                        maxLength={120}
                        pattern=".*\S.*"
                        className={input}
                      />
                    </div>

                    <div>
                      <label htmlFor="assessment-email" className={label}>
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="assessment-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        required
                        maxLength={254}
                        className={input}
                      />
                    </div>

                    <div>
                      <label htmlFor="assessment-company" className={label}>
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="assessment-company"
                        name="company"
                        autoComplete="organization"
                        placeholder="Your Company"
                        required
                        maxLength={160}
                        pattern=".*\S.*"
                        className={input}
                      />
                    </div>

                    <div>
                      <label htmlFor="assessment-phone" className={label}>
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="assessment-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        required
                        minLength={7}
                        maxLength={30}
                        pattern="[+0-9().\s\-]{7,30}"
                        title="Enter your phone number, including the country code."
                        className={input}
                      />
                    </div>

                    <div>
                      <label htmlFor="assessment-industry" className={label}>
                        Industry <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="assessment-industry"
                        name="industry"
                        defaultValue=""
                        required
                        className={input}
                      >
                        <option value="" disabled>
                          Select Industry
                        </option>
                        {[
                          "Real Estate",
                          "Technology",
                          "Retail & E-commerce",
                          "Healthcare",
                          "Education",
                          "Finance",
                          "Manufacturing",
                          "Professional Services",
                          "Hospitality",
                          "Other",
                        ].map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="assessment-size" className={label}>
                        Company Size <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="assessment-size"
                        name="companySize"
                        defaultValue=""
                        required
                        className={input}
                      >
                        <option value="" disabled>
                          Select Size
                        </option>
                        {["1–10", "11–50", "51–200", "201–500", "501+"].map(
                          (size) => (
                            <option key={size} value={size}>
                              {size} employees
                            </option>
                          ),
                        )}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="assessment-goals" className={label}>
                        Tell us about your business and goals{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="assessment-goals"
                        name="goals"
                        rows={4}
                        required
                        maxLength={5000}
                        placeholder="Tell us about your business and goals."
                        className={`${input} min-h-28 resize-y`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`mt-5 flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-brand-blue px-5 py-3.5 text-base font-semibold text-white transition hover:bg-brand-blue-dark disabled:cursor-wait disabled:opacity-70 ${focus}`}
                  >
                    {status === "loading"
                      ? "Sending Your Request..."
                      : "Get My AI Assessment"}
                    <ArrowRight aria-hidden="true" className="size-5" />
                  </button>
                </fieldset>

                <div aria-live="polite" aria-atomic="true">
                  {status === "success" && (
                    <p className="mt-4 flex items-start gap-2 rounded-lg bg-brand-green-soft p-3 text-sm text-brand-dark">
                      <CheckCircle2
                        aria-hidden="true"
                        className="size-5 shrink-0 text-brand-green"
                      />
                      Your request has been sent. Our team will be in touch.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                      We couldn’t send your request. Please try again or{" "}
                      <a href={contactHref} className="font-semibold underline">
                        contact our team
                      </a>
                      .
                    </p>
                  )}
                </div>

                <p className="mt-5 flex items-start justify-center gap-2 text-center text-xs leading-relaxed text-brand-text sm:text-sm">
                  <LockKeyhole
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0"
                  />
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </section>
        </div>

        {/* BOTTOM CTA */}
        <section className="relative isolate overflow-hidden bg-brand-navy py-12 text-white sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(110deg,transparent_35%,var(--color-brand-blue)_140%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-72 w-2/3 rounded-full bg-brand-purple/40 blur-3xl"
          />

          <div className={`${container} grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]`}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">
                Ready to Transform Your Business?
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Start Your AI Journey Today
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/90">
                Get your free AI assessment and discover the opportunities waiting
                for your business.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#assessment-form"
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-brand-dark transition hover:bg-brand-blue-soft ${focus}`}
                >
                  Get Your AI Assessment
                  <ArrowRight aria-hidden="true" className="size-5 text-brand-blue" />
                </a>
                <a
                  href={contactHref}
                  className={`inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white/10 ${focus}`}
                >
                  Talk to Our Experts
                </a>
              </div>
            </div>

            {/* Statistics reproduced from the supplied design. */}
            <dl className="grid grid-cols-3 divide-x divide-white/25">
              {[
                { value: "500+", title: "Businesses Assessed" },
                { value: "95%", title: "Client Satisfaction" },
                { value: "30%", title: "Average Cost Savings" },
              ].map(({ value, title }) => (
                <div
                  key={title}
                  className="flex flex-col-reverse gap-2 px-3 text-center sm:px-5"
                >
                  <dt className="text-xs leading-relaxed sm:text-sm">{title}</dt>
                  <dd className="text-3xl font-bold sm:text-4xl">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Pass your approved FAQ content through the faqs prop. */}
        <section
          aria-labelledby="faq-heading"
          className={`${container} py-12 sm:py-16`}
        >
          <div className="text-center">
            <p className={eyebrow}>Frequently Asked Questions</p>
            <h2
              id="faq-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Your Questions Answered
            </h2>
          </div>

          {faqs.length > 0 && (
            <div className="mx-auto mt-8 max-w-3xl space-y-3">
              {faqs.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group rounded-xl border border-[var(--color-border)] bg-white"
                >
                  <summary
                    className={`flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 text-base font-semibold [&::-webkit-details-marker]:hidden ${focus}`}
                  >
                    {question}
                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 shrink-0 text-brand-blue transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="px-5 pb-5 text-base leading-relaxed text-brand-text">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}