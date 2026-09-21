"use client";

import PageHero from "@/components/company-hero/reusable-hero";
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
    name: "Sharan Goyal",
    role: "Founder & CEO",
    image: "/management-team/founder-&-CEO.jpeg",
  },
  {
    name: "Saroj Goyal",
    role: "Director",
    image: "/management-team/Director.jpeg",
  },
  {
    name: "Adarsh Pathak",
    role: "HR & Admin",
    image: "/management-team/HR-&-admin.jpeg",
  },
  {
    name: "Rajnish",
    role: "Operating Oprations",
    image: "/management-team/operation-oprations.jpeg",
  },
];

const teamMembers = [
  {
    name: "Pooja Bangrawa",
    role: "AWFI Expert",
    image: "/management-team/ai-ml-seniorr.jpeg",
  },
  {
    name: "Anushka Jangid",
    role: "AWFI Expert",
    image: "/management-team/ai-ml-junior.jpeg",
  },
 
  {
    name: "Ankita Soni",
    role: "AWFI Expert",
    image: "/management-team/data-anylist.jpeg",
  },
  {
    name: "Harshita",
    role: "AWFI Expert",
    image: "/management-team/data-anylist-junior.jpeg",
  },
   {
    name: "Neha Rao",
    role: "AWFI Expert",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ritika Soni",
    role: "AWFI Expert",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    "relative w-full overflow-hidden bg-[linear-gradient(145deg,#f2f6fc,#ffffff)]",
    leadership ? "aspect-[1.45/1.5]" : "aspect-[1.35/1]",
  ].join(" ")}
>
  <img
    src={image}
    alt={name}
    loading="lazy"
    decoding="async"
    className="absolute inset-0 block h-full w-full object-cover object-top"
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

        {/* {leadership && (
          <a
            href="#"
            aria-label={`${name} LinkedIn`}
            className="grid size-7 shrink-0 place-items-center rounded-md bg-[#0A66C2] text-white transition hover:scale-105 sm:size-8"
          >
            <Linkedin className="size-4 fill-current" />
          </a>
        )} */}
      </div>
    </article>
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

    <PageHero
  titleId="our-team-hero-title"
  eyebrow="People. Ideas. Impact."
  title="Meet"
  highlightedTitle="AI WorksForce Team"
  description="A passionate team of AI experts, innovators, and problem-solvers working together to help businesses build a smarter, more efficient tomorrow."
  image="/company-images/careers-company-hero.png"
  imageAlt="AI WorksForce team"
  primaryAction={{
    label: "Join Our Journey",
    href: "/company/careers",
    icon: "arrow",
  }}
  secondaryAction={{
    label: "Watch Our Team Video",
    href: "#culture",
    icon: "play",
  }}
  stats={[
    {
      icon: "users",
      value: "50+",
      label: "Team Members",
    },
    {
      icon: "globe",
      value: "5+",
      label: "Locations",
    },
    {
      icon: "lightbulb",
      value: "100+",
      label: "AI Projects Delivered",
    },
    {
      icon: "heart",
      value: "1",
      label: "Shared Mission",
    },
  ]}
  resultCard={{
    icon: "users",
    lines: [
      "A Team",
      "That Builds",
      "What's Next",
    ],
  }}
/>

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
                src="/company-images/our-team-company-bottom.png"
                alt="AI WorksForce team culture"
                className="aspect-[1.3/1] w-full object-cover"
              />

              {/* <div className="absolute left-5 top-5 hidden rotate-[-4deg] font-hand text-2xl leading-tight text-[var(--color-heading)] sm:block">
                Ideas
                <br />
                People
                <br />
                Progress
              </div> */}
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
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      <section className="relative isolate mx-1 my-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#07154d] via-[#0b176f] to-[#2437e9] px-6 py-8 text-white sm:mx-3 sm:px-10 sm:py-9">
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