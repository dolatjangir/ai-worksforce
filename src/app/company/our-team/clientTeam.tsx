"use client";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Globe2,
  Heart,
  Instagram,
  Lightbulb,
  Linkedin,
  Menu,
  Play,
  Rocket,
  Sparkles,
  Star,
  Target,
  Twitter,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   DATA
========================================================= */

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "What AIWorksForce?",
    href: "/what-aiworksforce",
  },
  {
    label: "How it Works",
    href: "/how-it-works",
  },
  {
    label: "Our AI Workflow",
    href: "/ai-workflow",
  },
  {
    label: "Solutions",
    href: "#",
    dropdown: true,
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "About",
    href: "/company/about",
  },
];

const leadership = [
  {
    name: "Rahul Mehta",
    role: "CEO & Founder",
    image: "/images/team/rahul-mehta.webp",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    image: "/images/team/priya-sharma.webp",
  },
  {
    name: "Amit Kumar",
    role: "Chief Operating Officer",
    image: "/images/team/amit-kumar.webp",
  },
  {
    name: "Sneha Verma",
    role: "Head of People & Culture",
    image: "/images/team/sneha-verma.webp",
  },
];

const teamMembers = [
  {
    name: "Vikram Singh",
    role: "AI Solutions Architect",
    image: "/images/team/vikram-singh.webp",
  },
  {
    name: "Neha Patel",
    role: "Data Scientist",
    image: "/images/team/neha-patel.webp",
  },
  {
    name: "Arjun Rao",
    role: "Automation Engineer",
    image: "/images/team/arjun-rao.webp",
  },
  {
    name: "Meera Iyer",
    role: "AI Product Manager",
    image: "/images/team/meera-iyer.webp",
  },
  {
    name: "Karan Malhotra",
    role: "Customer Success Lead",
    image: "/images/team/karan-malhotra.webp",
  },
  {
    name: "Ritika Soni",
    role: "Marketing Manager",
    image: "/images/team/ritika-soni.webp",
  },
];

/* =========================================================
   ICON CIRCLE
========================================================= */

function IconCircle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex size-11 shrink-0 items-center justify-center rounded-full sm:size-12",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

/* =========================================================
   TEAM CARD
========================================================= */

function TeamCard({
  name,
  role,
  image,
  leadership = false,
}: {
  name: string;
  role: string;
  image: string;
  leadership?: boolean;
}) {
  return (
    <article
      className={[
        "group overflow-hidden rounded-xl border border-blue-100/60 bg-white",
        "shadow-[0_4px_18px_rgba(24,74,140,0.05)]",
        "transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(24,74,140,0.10)]",
        leadership ? "lg:rounded-xl" : "",
      ].join(" ")}
    >
      {/* Image */}

      <div
        className={[
          "relative overflow-hidden bg-[linear-gradient(145deg,#f2f6fc,#ffffff)]",
          leadership
            ? "aspect-[1.45/1]"
            : "aspect-[1.35/1]",
        ].join(" ")}
      >
        <img
          src={image}
          alt={name}
          className="absolute inset-0 size-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
        />
      </div>

      {/* Information */}

      <div
        className={[
          "relative flex items-center justify-between gap-3 bg-white",
          leadership
            ? "px-3 py-3.5 sm:px-4 sm:py-4"
            : "px-3 py-3 sm:px-4",
        ].join(" ")}
      >
        <div className="min-w-0">
          <h3
            className={[
              "truncate font-bold tracking-tight text-[var(--color-heading)]",
              leadership
                ? "text-sm sm:text-base"
                : "text-sm sm:text-base",
            ].join(" ")}
          >
            {name}
          </h3>

          <p className="mt-0.5 truncate text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
            {role}
          </p>
        </div>

        {leadership && (
          <a
            href="#"
            aria-label={`${name} LinkedIn`}
            className="grid size-7 shrink-0 place-items-center rounded-md bg-[#0A66C2] text-white transition hover:scale-105 sm:size-8"
          >
            <Linkedin className="size-4 fill-current" />
          </a>
        )}
      </div>
    </article>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-7 lg:px-8 lg:py-11">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.9fr]">
          {/* Brand */}

          <div>
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-[var(--color-heading)] sm:text-3xl"
            >
              <span className="text-[var(--color-primary)]">
                AI
              </span>{" "}
              WorksForce
            </a>

            <p className="mt-1 text-xs text-[var(--color-text-muted)] sm:text-sm">
              Automate. Accelerate. Grow.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--color-text)] sm:text-base lg:text-lg">
              Empowering businesses with AI automation,
              intelligent agents, and modern workflows for a
              smarter tomorrow.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-base font-bold text-[var(--color-heading)] sm:text-lg">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2.5">
              {[
                ["Home", "/"],
                [
                  "About AIWorksForce",
                  "/company/about",
                ],
                ["Our Team", "/company/our-team"],
                ["Careers", "/company/careers"],
                ["News & Updates", "/resources"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}

          <div>
            <h3 className="text-base font-bold text-[var(--color-heading)] sm:text-lg">
              Our Solutions
            </h3>

            <ul className="mt-4 space-y-2.5">
              {[
                "AI Automation",
                "AI Agents",
                "AI Customer Operations",
                "AI Sales & Outreach",
                "AI Digital Marketing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] sm:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-base font-bold text-[var(--color-heading)] sm:text-lg">
              Connect With Us
            </h3>

            <div className="mt-4 flex items-center gap-2">
              {[
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: Twitter,
                  label: "Twitter",
                },
                {
                  icon: Youtube,
                  label: "YouTube",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                },
              ].map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="grid size-9 place-items-center text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    <SocialIcon className="size-5" />
                  </a>
                );
              })}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
              Let&apos;s build a smarter future together.
            </p>

            <a
              href="/company/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] sm:text-base"
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-9 flex flex-col gap-4 border-t border-slate-100 pt-5 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            © 2024 AIWorksForce. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/privacy-policy"
              className="transition hover:text-[var(--color-primary)]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition hover:text-[var(--color-primary)]"
            >
              Terms of Service
            </a>

            <a
              href="/company/contact"
              className="transition hover:text-[var(--color-primary)]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function OurTeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-[var(--color-heading)]">
   

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden rounded-b-2xl bg-[linear-gradient(105deg,#ffffff_0%,#f9fbff_48%,#edf2ff_100%)]">
        <div className="pointer-events-none absolute -right-40 -top-32 -z-10 size-[32rem] rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl lg:min-h-[34rem] lg:grid-cols-[1fr_1fr]">
          {/* Hero Content */}

          <div className="relative z-20 px-5 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-14 lg:px-8 lg:py-14 xl:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              People. Ideas. Impact.
            </p>

            <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-[0.94] tracking-tight text-[var(--color-heading)] sm:text-6xl lg:text-7xl">
              Meet{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-violet-600)] to-[var(--color-primary)] bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-text)] sm:text-xl lg:text-2xl">
              A passionate team of AI experts, innovators, and
              problem-solvers working together to help businesses
              build a smarter, more efficient tomorrow.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="/company/careers"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-violet-600)] px-5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(37,99,235,0.2)] transition hover:-translate-y-0.5 sm:px-6 sm:text-base"
              >
                Join Our Journey
                <ArrowRight className="size-4" />
              </a>

              <a
                href="#culture"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[var(--color-violet-600)]/50 bg-white/80 px-5 text-sm font-bold text-[var(--color-heading)] transition hover:bg-white sm:px-6 sm:text-base"
              >
                <span className="grid size-6 place-items-center rounded-full bg-indigo-50 text-[var(--color-primary)]">
                  <Play className="size-3 fill-current" />
                </span>

                Watch Our Team Video
              </a>
            </div>

            {/* Stats */}

            <div className="mt-9 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-0">
              {/* 50+ */}

              <div className="flex items-center gap-3 sm:pr-4">
                <IconCircle className="bg-indigo-100 text-[var(--color-primary)]">
                  <Users className="size-6 sm:size-7" />
                </IconCircle>

                <div>
                  <p className="text-2xl font-bold leading-none text-[var(--color-primary)] sm:text-3xl">
                    50+
                  </p>

                  <p className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Team Members
                  </p>
                </div>
              </div>

              {/* Locations */}

              <div className="flex items-center gap-3 border-l border-indigo-100 pl-4 sm:pr-4">
                <IconCircle className="bg-indigo-100 text-[var(--color-primary)]">
                  <Globe2 className="size-6 sm:size-7" />
                </IconCircle>

                <div>
                  <p className="text-2xl font-bold leading-none text-[var(--color-primary)] sm:text-3xl">
                    5+
                  </p>

                  <p className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Locations
                  </p>
                </div>
              </div>

              {/* Projects */}

              <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4 sm:pr-4">
                <IconCircle className="bg-indigo-100 text-[var(--color-primary)]">
                  <Lightbulb className="size-6 sm:size-7" />
                </IconCircle>

                <div>
                  <p className="text-2xl font-bold leading-none text-[var(--color-primary)] sm:text-3xl">
                    100+
                  </p>

                  <p className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    AI Projects Delivered
                  </p>
                </div>
              </div>

              {/* Mission */}

              <div className="flex items-center gap-3 sm:border-l sm:border-indigo-100 sm:pl-4">
                <IconCircle className="bg-indigo-100 text-[var(--color-primary)]">
                  <Heart className="size-6 fill-current sm:size-7" />
                </IconCircle>

                <div>
                  <p className="text-2xl font-bold leading-none text-[var(--color-primary)] sm:text-3xl">
                    1
                  </p>

                  <p className="mt-1 text-xs leading-tight text-[var(--color-text-muted)] sm:text-sm">
                    Shared Mission
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}

          <div className="relative min-h-[22rem] sm:min-h-[30rem] lg:min-h-0">
            <div className="absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />

            <img
              src="/images/team/team-hero.webp"
              alt="AI WorksForce team"
              className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[41rem] object-contain"
            />

            {/* Handwritten note */}

            <div className="absolute right-3 top-16 z-20 hidden rotate-[-5deg] font-hand text-2xl leading-tight text-[var(--color-primary)] lg:block">
              Smarter
              <br />
              People
              <br />
              Brighter
              <br />
              Tomorrow
            </div>

            {/* Floating card */}

            <div className="absolute bottom-5 right-0 z-30 hidden w-52 rounded-xl bg-white/95 p-4 shadow-[0_12px_35px_rgba(24,74,140,0.12)] sm:block">
              <div className="flex items-center gap-3">
                <IconCircle className="bg-indigo-100 text-[var(--color-primary)]">
                  <Users className="size-6" />
                </IconCircle>

                <h3 className="text-sm font-bold leading-tight text-[var(--color-heading)] sm:text-base">
                  A Team
                  <br />
                  That Builds
                  <br />
                  What&apos;s Next
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-11 sm:px-7 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
            Meet the People
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            Leadership Team
          </h2>

          <p className="mt-3 text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
            Guided by experience. Driven by innovation. United
            by a common purpose.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {leadership.map((member) => (
            <TeamCard
              key={member.name}
              {...member}
              leadership
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          TEAM
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-11 sm:px-7 lg:px-8 lg:pb-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              A Diverse Team, A Stronger Tomorrow
            </h2>

            <p className="mt-2 max-w-3xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
              Our team brings together diverse skills, backgrounds,
              and perspectives to solve complex challenges and
              create real impact for our clients.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[var(--color-primary)] sm:text-base"
          >
            View All Team Members
            <ArrowRight className="size-4" />
          </a>
        </div>

        {/* Team grid */}

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              {...member}
            />
          ))}
        </div>
      </section>

      {/* =====================================================
          CULTURE
      ====================================================== */}

      <section
        id="culture"
        className="mx-auto max-w-7xl px-5 pb-10 sm:px-7 lg:px-8 lg:pb-14"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Text */}

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
              Our Culture
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              More Than a Workplace
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:text-xl">
              We believe great work happens when people feel valued,
              supported, and inspired. At AIWorksForce, we foster a
              culture of learning, collaboration, and growth — because
              our people are our greatest asset.
            </p>

            <a
              href="/company/careers"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-violet-600)] px-6 text-sm font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5 sm:text-base"
            >
              Life at AIWorksForce
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Image + culture points */}

          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/images/team/team-culture.webp"
                alt="AI WorksForce team culture"
                className="aspect-[1.3/1] w-full object-cover"
              />

              <div className="absolute left-5 top-5 hidden rotate-[-4deg] font-hand text-2xl leading-tight text-[var(--color-heading)] sm:block">
                Ideas
                <br />
                People
                <br />
                Progress
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Sparkles,
                  title: "Continuous Learning",
                  text: "We grow together.",
                },
                {
                  icon: Users,
                  title: "Collaborative Environment",
                  text: "We win as a team.",
                },
                {
                  icon: Heart,
                  title: "People First",
                  text: "Your well-being matters.",
                },
                {
                  icon: Star,
                  title: "Meaningful Work",
                  text: "Real problems. Real impact.",
                },
              ].map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3"
                  >
                    <IconCircle className="bg-indigo-100 text-[var(--color-primary)]">
                      <ItemIcon className="size-5 sm:size-6" />
                    </IconCircle>

                    <div>
                      <h3 className="text-sm font-bold text-[var(--color-heading)] sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 text-xs text-[var(--color-text-muted)] sm:text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-6 sm:px-7 lg:px-8 lg:pb-8">
        <div className="grid items-center gap-6 rounded-2xl bg-[var(--color-blue-50)] px-6 py-6 sm:px-8 sm:py-7 lg:grid-cols-[auto_1fr_auto] lg:px-10">
          {/* Person */}

          <img
            src="/images/team/neha-patel.webp"
            alt="Neha Patel"
            className="size-20 rounded-full border-4 border-white object-cover shadow-md sm:size-24"
          />

          {/* Quote */}

          <div>
            <div className="text-5xl font-bold leading-none text-[var(--color-primary)]">
              “
            </div>

            <p className="mt-1 max-w-3xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
              What I love most about AIWorksForce is the people —
              smart, supportive, and driven by a shared vision to
              create real impact with AI.
            </p>

            <div className="mt-3">
              <p className="text-sm font-bold text-[var(--color-heading)] sm:text-base">
                Neha Patel
              </p>

              <p className="text-xs text-[var(--color-text-muted)] sm:text-sm">
                Data Scientist
              </p>
            </div>
          </div>

          {/* Handwritten */}

          <div className="hidden border-l border-indigo-200 pl-8 font-hand text-2xl leading-tight text-[var(--color-primary)] lg:block">
            Great
            <br />
            People
            <br />
            Greater
            <br />
            Possibilities
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative isolate mx-1 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07154d] via-[#0b176f] to-[#2437e9] px-6 py-8 text-white sm:mx-3 sm:px-10 sm:py-9">
        {/* Decorative background */}

        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-radial-gradient(ellipse_at_0%_120%,transparent_0_0.75rem,#7180ff_0.8rem_0.875rem)]" />

        <div className="mx-auto grid max-w-6xl items-center gap-7 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
              Join Our Team
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Be Part of Something Bigger
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
              Explore exciting career opportunities and help us
              build a smarter tomorrow.
            </p>
          </div>

          <a
            href="/company/careers"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-[var(--color-heading)] shadow-lg transition hover:-translate-y-0.5 sm:text-base"
          >
            View Open Positions
            <ArrowRight className="size-4" />
          </a>
        </div>

        {/* Handwritten CTA */}

        <div className="absolute right-7 top-1/2 hidden -translate-y-1/2 rotate-[-7deg] font-hand text-2xl leading-tight text-white/95 lg:block">
          Innovate
          <br />
          Grow
          <br />
          Belong
        </div>
      </section>

   
    </main>
  );
}