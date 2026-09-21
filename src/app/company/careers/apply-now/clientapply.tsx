"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, BookOpen, ChartNoAxesColumnIncreasing, Heart, Mail, Rocket, Users, BriefcaseBusiness, Upload, CheckCircle2 } from "lucide-react";

const perks=[{icon:Rocket,title:'Work on Real Impact',text:'Be part of projects that solve real business challenges with AI.'},{icon:BookOpen,title:'Continuous Learning',text:'Access to training, mentorship, and the latest AI tools and technologies.'},{icon:Users,title:'Inclusive Culture',text:'A supportive, diverse, and collaborative environment.'},{icon:ChartNoAxesColumnIncreasing,title:'Growth Opportunities',text:'Clear career paths and opportunities to take on new challenges.'},{icon:Heart,title:'Work-Life Balance',text:'Flexible work options and a culture that values your well-being.'}];

const jobs = [
  {
    title: "AI/ML Engineer",
    slug: "ai-ml-engineer",
    department: "Engineering",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-time",
  },
  {
    title: "AI Operator",
    slug: "ai-operator",
    department: "Operations",
    location: "Remote / India",
    type: "Full-time",
  },
  {
    title: "AI Specialist",
    slug: "ai-specialist",
    department: "AI Solutions",
    location: "Jaipur, India (Hybrid)",
    type: "Full-time",
  },
  {
    title: "Digital Marketing Specialist",
    slug: "digital-marketing-specialist",
    department: "Marketing",
    location: "Remote / India",
    type: "Full-time",
  },

  // Add your other two roles here
];
const input='mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-[var(--color-heading)] placeholder:text-slate-500 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15';
function ApplicationForm() {
  const searchParams = useSearchParams();

  const initialSlug = searchParams.get("job");

  const initialJob =
    jobs.find((item) => item.slug === initialSlug) ?? jobs[0];

  const [jobSlug, setJobSlug] = useState(initialJob.slug);
  const [changing, setChanging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);

  const fileInput = useRef<HTMLInputElement>(null);
  const busyRef = useRef(false);

  const selectedJob =
    jobs.find((item) => item.slug === jobSlug) ?? jobs[0];

  function selectFile(file: File | null) {
    setError("");

    if (!file) return;

    const validType = /\.(pdf|doc|docx)$/i.test(file.name);
    const validSize = file.size > 0 && file.size <= 5 * 1024 * 1024;

    if (!validType || !validSize) {
      setFile(null);

      if (fileInput.current) {
        fileInput.current.value = "";
      }

      setError(
        "Choose a PDF, DOC or DOCX file, up to 5MB."
      );

      return;
    }

    setFile(file);
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (busyRef.current) return;

    if (!file) {
      setError("Please upload your résumé.");
      fileInput.current?.focus();
      return;
    }

    busyRef.current = true;
    setBusy(true);
    setError("");

    const data = new FormData(e.currentTarget);

    data.set("resume", file);
    data.set("job", selectedJob.title);
    data.set("jobSlug", selectedJob.slug);
    data.set("department", selectedJob.department);
    data.set("location", selectedJob.location);
    data.set("type", selectedJob.type);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Unable to submit. Please try again."
        );
      }

      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit. Please try again."
      );
    } finally {
      setBusy(false);
      busyRef.current = false;
    }
  }

  if (success) {
    return (
      <div
        role="status"
        className="py-16 text-center"
      >
        <CheckCircle2 className="mx-auto mb-5 size-14 text-brand-green" />

        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-heading)] sm:text-3xl">
          Application Submitted
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
          Thank you for applying for{" "}
          <strong>{selectedJob.title}</strong>.
          Our team will review your application and
          get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
        Apply for this role
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
        Submit Your Application
      </h2>

      <p className="mt-3 text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
        Fill in your details below and our team will
        get back to you soon.
      </p>

      {/* SELECTED JOB */}
      <div className="my-6 rounded-xl bg-brand-blue-soft/65 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
            <BriefcaseBusiness className="size-6" />
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-blue sm:text-sm">
              Applying For
            </p>

            <h3 className="mt-1 text-lg font-bold text-[var(--color-heading)] sm:text-xl">
              {selectedJob.title}
            </h3>

            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-[var(--color-text)] sm:text-base">
              <span>{selectedJob.department}</span>
              <span>•</span>
              <span>{selectedJob.location}</span>
              <span>•</span>
              <span>{selectedJob.type}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setChanging((value) => !value)}
            aria-expanded={changing}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[var(--color-primary)] sm:text-base"
          >
            Change Job
            <ArrowRight className="size-4" />
          </button>
        </div>

        {changing && (
          <label className="mt-5 block text-sm font-medium sm:text-base">
            Choose a role

            <select
              className={input}
              value={jobSlug}
              onChange={(e) => {
                setJobSlug(e.target.value);
                setChanging(false);
              }}
            >
              {jobs.map((item) => (
                <option
                  key={item.slug}
                  value={item.slug}
                >
                  {item.title}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      {/* FORM */}
      <form
        onSubmit={submit}
        className="space-y-6 sm:space-y-7"
      >
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <label className="text-sm sm:text-base">
            Full Name <span className="text-red-500">*</span>

            <input
              className={input}
              name="name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
              required
              maxLength={160}
            />
          </label>

          <label className="text-sm sm:text-base">
            Email Address{" "}
            <span className="text-red-500">*</span>

            <input
              className={input}
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              maxLength={160}
            />
          </label>

          <label className="text-sm sm:text-base">
            Phone Number{" "}
            <span className="text-red-500">*</span>

            <input
              className={input}
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              required
              maxLength={30}
            />
          </label>

          <label className="text-sm sm:text-base">
            Location <span className="text-red-500">*</span>

            <select
              name="location"
              className={input}
              required
              defaultValue="Jaipur, India"
            >
              <option>Jaipur, India</option>
              <option>Bengaluru, India</option>
              <option>Delhi, India</option>
              <option>Mumbai, India</option>
              <option>Remote</option>
              <option>Other</option>
            </select>
          </label>

          <label className="text-sm sm:text-base">
            LinkedIn Profile

            <input
              name="linkedin"
              type="url"
              className={input}
              placeholder="https://linkedin.com/in/yourprofile"
              maxLength={500}
            />
          </label>

          <label className="text-sm sm:text-base">
            Portfolio / Website{" "}
            <span className="text-[var(--color-text-muted)]">
              (Optional)
            </span>

            <input
              name="portfolio"
              type="url"
              className={input}
              placeholder="https://yourwebsite.com"
              maxLength={500}
            />
          </label>
        </div>

        {/* RESUME */}
        <div>
          <p
            id="resume-label"
            className="text-sm sm:text-base"
          >
            Resume / CV{" "}
            <span className="text-red-500">*</span>
          </p>

          <label
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              selectFile(
                e.dataTransfer.files[0] ?? null
              );
            }}
            className="relative mt-2 flex min-h-28 cursor-pointer items-center justify-center gap-5 rounded-lg border border-dashed border-slate-300 p-5 transition hover:border-brand-blue hover:bg-brand-blue-soft/20 focus-within:ring-2 focus-within:ring-brand-blue"
          >
            <Upload className="size-8 shrink-0 text-brand-blue" />

            <span className="min-w-0 text-sm sm:text-base">
              <span className="block break-all">
                {file ? (
                  file.name
                ) : (
                  <>
                    <strong className="font-medium text-brand-blue">
                      Click to upload
                    </strong>{" "}
                    or drag and drop
                  </>
                )}
              </span>

              <span className="mt-1 block text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
                PDF, DOC, DOCX (Max 5MB)
              </span>
            </span>

            <input
              ref={fileInput}
              aria-labelledby="resume-label"
              aria-required="true"
              type="file"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) =>
                selectFile(
                  e.target.files?.[0] ?? null
                )
              }
            />
          </label>
        </div>

        {/* MOTIVATION */}
        <label className="block text-sm sm:text-base">
          Why do you want to join AI WorksForce?{" "}
          <span className="text-red-500">*</span>

          <textarea
            name="motivation"
            required
            minLength={10}
            maxLength={5000}
            rows={4}
            placeholder="Tell us why you're a great fit..."
            className={input}
          />
        </label>

        {/* CONSENT */}
        <label className="flex items-start gap-2 text-xs leading-relaxed text-[var(--color-text)] sm:text-sm">
          <input
            required
            name="consent"
            type="checkbox"
            className="mt-1 accent-brand-blue"
          />

          <span>
            I agree to the{" "}
            <a
              href="/privacy-policy"
              className="font-medium text-brand-blue"
            >
              Privacy Policy
            </a>{" "}
            and allow AI WorksForce to store my
            information for recruitment purposes.
          </span>
        </label>

        {/* ERROR */}
        {error && (
          <p
            role="alert"
            className="text-sm text-red-600 sm:text-base"
          >
            {error}
          </p>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={busy}
          className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-brand-blue px-5 py-3 font-semibold text-white transition hover:bg-brand-blue-dark disabled:cursor-wait disabled:opacity-60 sm:text-base"
        >
          {busy
            ? "Submitting..."
            : "Submit Application"}

          <ArrowRight className="size-4" />
        </button>
      </form>
    </>
  );
}

export default function ApplyNow() {
   
  return (<main>
<section
  aria-labelledby="apply-now-title"
  className="relative isolate overflow-hidden bg-[linear-gradient(110deg,var(--color-cyan-50)_0%,white_42%,var(--color-blue-100)_100%)]"
>
  <div
    aria-hidden="true"
    className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/2 bg-brand-blue/10 blur-3xl"
  />

  <div className="relative mx-auto grid max-w-7xl items-center lg:min-h-130 lg:grid-cols-2">
    {/* LEFT CONTENT */}
    <div className="relative z-10 px-5 py-12 sm:px-7 sm:py-16 lg:px-8 lg:py-20">
      <span className="inline-flex rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue sm:text-sm">
        Careers at AI WorksForce
      </span>

      <h1
        id="apply-now-title"
        className="mt-4 text-[clamp(2.75rem,5.3vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.045em]"
      >
        <span className="block">
          Apply <span className="text-brand-blue">Now</span>
        </span>

       
      </h1>
               <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl">Be Part of What’s Next</h2>


      <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-dark sm:text-lg">
        Join our team and help businesses around the world grow with AI.
        We’re looking for curious, driven, and passionate people who want to
        make a real impact.
      </p>

      {/* BENEFITS */}
      <ul className="mt-6 grid gap-4 sm:grid-cols-3 ">
        {[
          {
            icon: Rocket,
            text: "Meaningful Work",
          },
          {
            icon: ChartNoAxesColumnIncreasing,
            text: "Learn & Grow",
          },
          {
            icon: Users,
            text: "Make an Impact",
          },
        ].map(({ icon: Icon, text }) => (
          <li
            key={text}
            className="flex items-center gap-3"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <Icon
                aria-hidden="true"
                className="size-5"
              />
            </span>

            <span className="max-w-36 text-sm font-medium leading-5 sm:text-base">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT HERO IMAGE */}
   <div className="relative mx-auto w-full max-w-2xl self-end lg:-mr-10 lg:w-[calc(100%+2.5rem)] lg:max-w-none">
              <img
                src="/company-images/apply-now-hero.png"
                alt="AI assessment specialist reviewing business opportunities"
                width={900}
                height={700}
                fetchPriority="high"
                decoding="async"
                className="block h-auto max-h-150 w-full object-contain object-bottom"
              />
            </div>
  </div>
</section>
<section className="bg-linear-to-b from-white to-brand-blue-soft/35">
<div className="mx-auto grid max-w-7xl items-start gap-5 px-5 py-11 sm:px-7 lg:grid-cols-[1.6fr_1fr] lg:px-8 lg:py-14">
    <div className="rounded-xl border border-blue-50 bg-white p-5 shadow-[0_4px_24px_rgba(24,74,140,0.04)] sm:p-6 lg:p-8">
        <ApplicationForm/>
        </div>
        <aside className="space-y-6 sm:space-y-7">
            <section className="rounded-xl border border-blue-50 bg-white p-5 shadow-[0_4px_24px_rgba(24,74,140,0.04)] sm:p-6 lg:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">A place to do your best work</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl">Why Join AI WorksForce?</h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-text)] sm:text-lg">We're building the future of work with AI, and we'd love to have you on this journey.</p><ul className="mt-8 space-y-7">{perks.map(({icon:Icon,title,text})=><li key={title} className="flex gap-4"><span className="grid size-14 shrink-0 place-items-center rounded-full bg-linear-to-br from-blue-50 to-indigo-100 text-brand-purple"><Icon className="size-7"/></span><div><h3 className="text-lg font-bold tracking-tight text-[var(--color-heading)] sm:text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">{text}</p></div></li>)}</ul></section><section className="flex gap-4 rounded-xl border border-blue-50 bg-white p-6 shadow-[0_4px_24px_rgba(24,74,140,0.04)]"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-blue-soft text-brand-blue"><Mail/></span><div><h2 className="text-lg font-bold tracking-tight text-[var(--color-heading)] sm:text-xl">Have Questions?</h2><p className="mt-2 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">Our team is here to help you with any queries about openings, the application process, or working at AI WorksForce.</p><Link href="/company/contact" className="mt-5 inline-flex rounded-lg border border-brand-blue px-6 py-3 text-sm font-bold text-brand-blue sm:text-base">Contact Our HR Team</Link></div></section></aside></div></section>
<section className="bg-linear-to-r from-brand-navy via-[#062d65] to-brand-purple px-6 py-8 text-white sm:px-10 sm:py-9"><div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.25fr_1fr]"><div><p className="text-xs font-bold uppercase tracking-[0.3em] sm:text-sm">Ready to build your career with AI?</p><h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Join AI WorksForce Today</h2><p className="mt-2 text-sm leading-relaxed sm:text-base lg:text-lg">Be part of a team that’s shaping the future of work with AI.</p><div className="mt-4 flex flex-wrap gap-4"><Link href="/company/careers" className="flex min-h-12 items-center gap-3 rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand-dark sm:text-base">View Open Positions<ArrowRight className="size-4"/></Link><Link href="/company/our-team" className="min-h-12 rounded-lg border border-white/30 px-6 py-3 text-sm font-bold sm:text-base">Learn About Our Culture</Link></div></div><div className="grid grid-cols-3 divide-x divide-white/25 text-center">{[['500+','Projects Delivered'],['98%','Client Satisfaction'],['50+','AI Experts']].map(([n,t])=><div key={t} className="px-2"><strong className="text-3xl">{n}</strong><p className="mt-2 text-xs leading-relaxed sm:text-sm">{t}</p></div>)}</div></div></section>
</main>);
}
