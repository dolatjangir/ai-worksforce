"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  Lightbulb,
  Linkedin,
  Menu,
  Search,
  Target,
  Users,
  X,
  Sparkles,
  Rocket,
  Globe2,
} from "lucide-react";
import { useMemo, useState } from "react";

/* =========================================================
   DATA
========================================================= */

type TeamMember = {
  name: string;
  role: string;
  department: string;
  image: string;
  description: string;
  leadership?: boolean;
};

const navigation = [
  { label: "Solutions", href: "#", dropdown: true },
  { label: "Products", href: "#", dropdown: true },
  { label: "Industries", href: "/industries", dropdown: true },
  { label: "Resources", href: "/resources", dropdown: true },
  { label: "Company", href: "/company/about", dropdown: true },
];

const teamMembers: TeamMember[] = [
  {
    name: "Sharan Goyal",
    role: "Founder & CEO",
    department: "Leadership",
    image: "/management-team/founder-&-CEO.jpeg",
    description: "Driving the vision, growth, and long-term direction of AI WorksForce.",
    leadership: true,
  },
  {
    name: "Saroj Goyal",
    role: "Director",
    department: "Leadership",
    image: "/management-team/Director.jpeg",
    description: "Supporting company strategy, people, and business operations.",
    leadership: true,
  },
  {
    name: "Adarsh Pathak",
    role: "HR & Admin",
    department: "People & Culture",
    image: "/management-team/HR-&-admin.jpeg",
    description: "Building a people-first workplace and supporting team operations.",
    leadership: true,
  },
  {
    name: "Rajneesh Pandey",
    role: "Operation Manager",
    department: "Operations",
    image: "/management-team/operation-oprations.jpeg",
    description: "Keeping delivery, processes, and day-to-day operations moving smoothly.",
    leadership: true,
  },
  {
    name: "Farazuddin",
    role: "MERN Stack Developer",
    department: "Engineering",
    image: "/management-team/faraz-developer.jpeg",
    description: "Building reliable and scalable web experiences for AI-powered products.",
  },
  {
    name: "Dolat Jangir",
    role: "MERN Stack Developer",
    department: "Engineering",
    image: "/management-team/dolat-developer.png",
    description: "Turning product ideas into responsive, production-ready applications.",
  },
  {
    name: "Pooja Bangrawa",
    role: "AI Automation",
    department: "Engineering",
    image: "/management-team/ai-ml-seniorr.jpeg",
    description: "Designing intelligent automation workflows that streamline business work.",
  },
  {
    name: "Anushka Jangid",
    role: "AI Researcher",
    department: "Engineering",
    image: "/management-team/ai-ml-junior.jpeg",
    description: "Exploring AI capabilities and practical ways to apply them to real problems.",
  },
  {
    name: "Ankita Soni",
    role: "Data Analyst",
    department: "Data & Research",
    image: "/management-team/data-anylist.jpeg",
    description: "Working with data to uncover useful insights for better decisions.",
  },
  {
    name: "Harshita",
    role: "Business Analyst",
    department: "Product",
    image: "/management-team/data-anylist-junior.jpeg",
    description: "Connecting business requirements with practical technology solutions.",
  },
];

const filters = [
  "All Teams",
  "Leadership",
  "Engineering",
  "Product",
  "Marketing",
  "Operations",
  "People & Culture",
];

/* =========================================================
   SMALL COMPONENTS
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
      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full sm:size-12 ${className}`}
    >
      {children}
    </span>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_6px_24px_rgba(20,50,100,0.055)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_42px_rgba(30,80,170,0.12)]">
      <div className="relative aspect-[1.35/1] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 20vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
        />
      </div>

      <div className="px-3.5 py-4 sm:px-4 sm:py-4.5">
        <h3 className="truncate text-sm font-bold tracking-tight text-[var(--color-heading)] sm:text-base">
          {member.name}
        </h3>

        <p className="mt-1 text-xs font-medium text-[var(--color-primary)] sm:text-sm">
          {member.role}
        </p>

        <p className="mt-1.5 line-clamp-2 min-h-9 text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
          {member.description}
        </p>

        {/* <div className="mt-3 flex items-center gap-2">
          <a
            href="#"
            aria-label={`${member.name} LinkedIn`}
            className="grid size-7 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <Linkedin className="size-3.5" />
          </a>
          <a
            href="#"
            aria-label={`${member.name} social profile`}
            className="grid size-7 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            X
          </a>
        </div> */}
      </div>
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AllTeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All Teams");
  const [search, setSearch] = useState("");

  const visibleMembers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return teamMembers.filter((member) => {
      const matchesFilter =
        activeFilter === "All Teams" || member.department === activeFilter;

      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-sans text-[var(--color-heading)]">
   

      {/* =====================================================
          HERO
      ====================================================== */}
<section className="relative isolate overflow-hidden bg-[linear-gradient(105deg,#f5faff_0%,#f7fbff_48%,#e9edff_100%)]">
  {/* =====================================================
      DECORATIVE BACKGROUND
  ====================================================== */}

  {/* Soft glow - top right */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-indigo-300/25 blur-3xl" />

  {/* Soft glow - left */}
  <div className="pointer-events-none absolute -left-32 top-32 h-[360px] w-[360px] rounded-full bg-blue-200/30 blur-3xl" />

  {/* Center glow */}
  <div className="pointer-events-none absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

  {/* Decorative dotted grid */}
  <div
    className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-30"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(37,99,235,0.18) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
      maskImage:
        "linear-gradient(to bottom, black, transparent 75%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, black, transparent 75%)",
    }}
  />

  {/* Decorative rings */}
  <div className="pointer-events-none absolute left-[7%] top-[18%] hidden size-32 rounded-full border border-blue-200/50 sm:block" />
  <div className="pointer-events-none absolute left-[9%] top-[22%] hidden size-20 rounded-full border border-indigo-200/50 sm:block" />

  <div className="pointer-events-none absolute right-[7%] top-[14%] hidden size-40 rounded-full border border-indigo-200/40 sm:block" />
  <div className="pointer-events-none absolute right-[10%] top-[18%] hidden size-24 rounded-full border border-blue-200/50 sm:block" />

  {/* Floating decorative dots */}
  <span className="pointer-events-none absolute left-[14%] top-[30%] size-2 rounded-full bg-blue-500/50" />
  <span className="pointer-events-none absolute left-[18%] top-[20%] size-3 rounded-full bg-indigo-400/40" />
  <span className="pointer-events-none absolute right-[17%] top-[31%] size-2 rounded-full bg-blue-500/50" />
  <span className="pointer-events-none absolute right-[22%] top-[20%] size-3 rounded-full bg-indigo-400/40" />

  {/* =====================================================
      HERO CONTENT
  ====================================================== */}

  <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-8 text-center sm:px-7  lg:px-10 ">

    {/* Eyebrow */}
    <div className="flex justify-center my-2">
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-700 shadow-[0_5px_20px_rgba(37,99,235,0.06)] backdrop-blur-sm sm:text-[11px]">
        <span className="size-1.5 rounded-full bg-blue-600" />
        Our People
        <span className="size-1.5 rounded-full bg-indigo-500" />
      </span>
    </div>

    {/* Heading */}
    <h1
      id="our-team-hero-title"
      className="mx-auto mt-2 max-w-5xl text-[clamp(2.45rem,6vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#102653]"
    >
      Meet the Minds
      <br />
      Behind{" "}
      <span className="relative inline-block bg-gradient-to-r from-[#075ff4] via-[#0876ed] to-[#5c2bea] bg-clip-text text-transparent">
        AI WorksForce

        {/* Small underline decoration */}
        <span className="absolute -bottom-2 left-1/2 h-1 w-[55%] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-70 sm:-bottom-3" />
      </span>
    </h1>

    {/* Description */}
    <p className="mx-auto mt-7 max-w-3xl text-sm leading-6 text-[#34496f] sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
      A diverse team of innovators, builders, and problem-solvers
      working together to make AI useful, accessible, and impactful
      for businesses around the world.
    </p>

    {/* Small decorative line */}
    <div className="mt-7 flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-blue-300 sm:w-16" />
      <span className="size-2 rounded-full bg-blue-500" />
      <span className="size-1.5 rounded-full bg-indigo-400" />
      <span className="size-2 rounded-full bg-violet-500" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-violet-300 sm:w-16" />
    </div>
  </div>

 
</section>

      {/* =====================================================
          TEAM FILTER + GRID
      ====================================================== */}
      <section className="mx-auto max-w-[1440px] px-5 py-7 sm:px-7 lg:px-10 lg:py-9">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
                  activeFilter === filter
                    ? "bg-[#075ff4] text-white shadow-[0_8px_18px_rgba(7,95,244,0.18)]"
                    : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <label className="flex h-11 w-full items-center gap-2 rounded-xl border border-blue-100 bg-white px-3.5 shadow-[0_5px_18px_rgba(30,70,140,0.04)] xl:max-w-[280px]">
            <Search className="size-4 shrink-0 text-slate-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search team members..."
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {visibleMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {visibleMembers.length === 0 && (
          <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50/50 px-6 py-14 text-center">
            <p className="text-base font-bold text-[#102653]">
              No team members found
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Try another department or search term.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="mx-auto max-w-[1280px] px-5 pb-8 sm:px-7 lg:px-10">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white sm:grid-cols-4">
          {[
            { icon: Users, value: "25+", label: "Team Members" },
            { icon: Globe2, value: "6", label: "Departments" },
            { icon: Heart, value: "100%", label: "Passionate" },
            { icon: Target, value: "1", label: "Shared Mission" },
          ].map((stat, index) => {
            const StatIcon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex items-center justify-center gap-3 px-4 py-5 sm:py-6 ${
                  index > 0 ? "border-l border-blue-100" : ""
                } ${index === 2 ? "border-t border-blue-100 sm:border-t-0" : ""} ${
                  index === 3 ? "border-t border-blue-100 sm:border-t-0" : ""
                }`}
              >
                <IconCircle className="bg-blue-50 text-blue-600">
                  <StatIcon className="size-5 sm:size-6" />
                </IconCircle>
                <div>
                  <div className="text-2xl font-extrabold leading-none text-blue-600 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] font-medium text-slate-600 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CULTURE
      ====================================================== */}
      <section
        id="culture"
        className="mx-auto max-w-[1440px] px-5 pb-7 sm:px-7 lg:px-10"
      >
        <div className="overflow-hidden rounded-2xl bg-[linear-gradient(105deg,#eff7ff_0%,#f4f7ff_52%,#eef0ff_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-blue-100 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-700 sm:text-[11px]">
                Our Culture
              </span>

              <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.05] tracking-tight text-[#102653] sm:text-4xl lg:text-5xl">
                More Than a Team
                <br />
                We&apos;re a{" "}
                <span className="text-blue-600">Community</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#34496f] sm:text-base sm:leading-7">
                We believe in collaboration, continuous learning, and creating
                a positive impact — for our clients, our people, and the world.
              </p>

              <Link
                href="/company/careers"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-[#075ff4] px-5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(7,95,244,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0055e6]"
              >
                Join Our Team
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Learn & Grow",
                  text: "Continuous learning and skill development opportunities.",
                },
                {
                  icon: Users,
                  title: "Inclusive",
                  text: "A diverse and supportive work environment.",
                },
                {
                  icon: Rocket,
                  title: "Make an Impact",
                  text: "Work on meaningful projects that drive real change.",
                },
                {
                  icon: Heart,
                  title: "Work-Life Balance",
                  text: "Flexible work options and a culture that values well-being.",
                },
              ].map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div key={item.title} className="text-center">
                    <IconCircle className="mx-auto bg-blue-100 text-blue-600">
                      <ItemIcon className="size-5 sm:size-6" />
                    </IconCircle>
                    <h3 className="mt-3 text-xs font-bold text-[#102653] sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] leading-5 text-slate-600 sm:text-xs sm:leading-5">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="mx-auto max-w-[1440px] px-5 pb-7 sm:px-7 lg:px-10 lg:pb-10">
        <div className="relative isolate overflow-hidden rounded-2xl bg-[linear-gradient(100deg,#071746_0%,#0b2d80_58%,#4d26dc_100%)] px-6 py-8 text-white sm:px-9 sm:py-9 lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute -bottom-36 left-[28%] -z-10 h-72 w-[58%] rounded-[50%] border border-blue-300/20 bg-[radial-gradient(ellipse_at_center,rgba(77,117,255,0.22),transparent_65%)] blur-sm" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 opacity-30 [background-image:radial-gradient(circle_at_50%_100%,#a4b4ff_1px,transparent_1.5px)] [background-size:10px_10px]" />

          <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-blue-100 sm:text-xs">
                Ready to Build the Future Together?
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.65rem]">
                Join Our{" "}
                <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Growing Team
                </span>
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
                Explore open positions and be part of a team that&apos;s
                shaping the future with AI.
              </p>
            </div>

            <Link
              href="/company/careers"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-[#102653] shadow-lg transition hover:-translate-y-0.5 sm:h-12 sm:text-base"
            >
              View Careers
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
