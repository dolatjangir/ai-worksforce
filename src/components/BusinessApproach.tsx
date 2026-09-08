"use client";

import Link from "next/link";
import React from "react";

/* =========================================================
   TYPES
========================================================= */

type IconProps = {
  className?: string;
};

type ChallengeCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type ApproachStep = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type SolutionCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
};

/* =========================================================
   GRADIENT ICON SYSTEM
========================================================= */

function GradientIcon({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const gradientId = React.useId();

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-6 w-6 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="2"
          y1="2"
          x2="22"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
      </defs>

      {children}
    </svg>
  );
}

/* =========================================================
   ICONS
========================================================= */

const ToolboxIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <rect x="4" y="7" width="16" height="13" rx="2" />
    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
    <path d="M4 11h16" />
    <path d="M10 11v2h4v-2" />
  </GradientIcon>
);

const ManualWorkIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <path d="M5 8a3 3 0 0 1 5-2l2 2" />
    <path d="m14 5 3-2 4 4-2 3" />
    <path d="m12 8 4 4" />
    <path d="m8 12-4 4 4 4 4-4" />
    <path d="m15 13 4 4" />
  </GradientIcon>
);

const PeopleManageIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <circle cx="12" cy="7" r="3" />
    <path d="M6 20c0-3.5 2.5-6 6-6s6 2.5 6 6" />
    <path d="M5 11a2.5 2.5 0 1 1 0-5" />
    <path d="M19 11a2.5 2.5 0 1 0 0-5" />
  </GradientIcon>
);

const AnalyzeIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <rect x="4" y="4" width="20" height="20" rx="3" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 7v2" />
    <path d="M12 15v2" />
    <path d="M7 12h2" />
    <path d="M15 12h2" />
  </GradientIcon>
);

const IdentifyIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <path d="M7 4h10l3 3v10l-3 3H7l-3-3V7l3-3Z" />
    <path d="m8 12 2.5 2.5L16 9" />
  </GradientIcon>
);

const DesignIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <path d="M6 4h12l2 2v14H6z" />
    <path d="M15 4v4h5" />
    <path d="m9 14 2 2 4-4" />
  </GradientIcon>
);

const BuildIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <path d="M4 5h16v14H4z" />
    <path d="M8 9h8" />
    <path d="M8 13h6" />
    <path d="M8 17h3" />
  </GradientIcon>
);

const OperateIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <path d="M8 9h8" />
    <path d="M8 13h5" />
    <path d="M8 16h3" />
  </GradientIcon>
);

const OptimizeIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <path d="M4 17 9 12l3 3 8-8" />
    <path d="M15 7h5v5" />
    <path d="M4 20h16" />
  </GradientIcon>
);

/* Solution icons */

const WorkforceIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v3" />
    <path d="M12 18v3" />
    <path d="m4.6 7.5 2.6 1.5" />
    <path d="m16.8 15 2.6 1.5" />
    <path d="m4.6 16.5 2.6-1.5" />
    <path d="m16.8 9 2.6-1.5" />
  </GradientIcon>
);

const AgentsIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <circle cx="12" cy="12" r="7" />
    <circle cx="9" cy="10" r="1" />
    <circle cx="15" cy="10" r="1" />
    <path d="M8.5 14.5c1 1 2.1 1.5 3.5 1.5s2.5-.5 3.5-1.5" />
  </GradientIcon>
);

const AutomationIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19 12a7 7 0 0 1-.3 2l2 1.2-2 3.4-2.1-1.2a7 7 0 0 1-3.5 2v2.4H10v-2.4a7 7 0 0 1-3.5-2l-2.1 1.2-2-3.4L4.4 14A7 7 0 0 1 4 12c0-.7.1-1.4.3-2L2.4 8.8l2-3.4 2.1 1.2A7 7 0 0 1 10 4.6V2.5h4v2.1a7 7 0 0 1 3.5 2l2.1-1.2 2 3.4-2 1.2c.2.7.4 1.3.4 2Z" />
  </GradientIcon>
);

const DataIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <circle cx="12" cy="12" r="7" />
    <path d="M8 15V9" />
    <path d="M12 17V7" />
    <path d="M16 14V10" />
  </GradientIcon>
);

const LeadIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <path d="M5 19h14" />
    <path d="M7 16V9" />
    <path d="M12 16V5" />
    <path d="M17 16v-4" />
    <path d="m16 7 3-2" />
    <path d="M19 5v3" />
  </GradientIcon>
);

const MarketingIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <path d="m5 5 14 14" />
    <path d="m19 5-14 14" />
    <circle cx="12" cy="12" r="8" />
  </GradientIcon>
);

const CustomerIcon = ({ className }: IconProps) => (
  <GradientIcon className={className}>
    <path d="M6 6h12v9H9l-3 3V6Z" />
    <path d="M9 10h6" />
    <path d="M9 13h4" />
  </GradientIcon>
);

/* =========================================================
   ARROW
========================================================= */

function ArrowRight({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* =========================================================
   CHALLENGE DATA
========================================================= */

const challengeCards: ChallengeCard[] = [
  {
    title: "Too Many Tools",
    description:
      "Hundreds of AI tools exist. Choosing the right ones is difficult.",
    icon: <ToolboxIcon className="w-8 h-8"/>,
  },
  {
    title: "Too Much Manual Work",
    description:
      "Research, data entry, lead generation, follow-up, reporting and repetitive operations consume valuable time.",
    icon: <ManualWorkIcon className="w-8 h-8"/>,
  },
  {
    title: "Too Many People to Manage",
    description:
      "Businesses need data experts, marketers, researchers, developers, AI specialists and operations teams.",
    icon: <PeopleManageIcon className="w-8 h-8"/>,
  },
];

/* =========================================================
   APPROACH DATA
========================================================= */

const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Analyze",
    description:
      "Understand your business, workflows, data and manpower.",
    icon: <AnalyzeIcon className="w-8 h-8"/>,
  },
  {
    number: "02",
    title: "Identify",
    description:
      "Find repetitive, expensive and time-consuming processes.",
    icon: <IdentifyIcon className="w-8 h-8"/>,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Select the right mix of tools, agents, automation and people.",
    icon: <DesignIcon className="w-8 h-8"/>,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Create workflows, integrations, AI agents, CRM and infrastructure.",
    icon: <BuildIcon className="w-8 h-8"/>,
  },
  {
    number: "05",
    title: "Operate",
    description:
      "Our trained workforce runs the operation from our AI Delivery Centre.",
    icon: <OperateIcon className="w-8 h-8"/>,
  },
  {
    number: "06",
    title: "Optimize",
    description:
      "Continuously improve automation, productivity and results.",
    icon: <OptimizeIcon className="w-8 h-8"/>,
  },
];

/* =========================================================
   SOLUTION DATA
========================================================= */

const solutions: SolutionCard[] = [
  {
    title: "AI Workforce",
    description:
      "A managed team of AI operators, specialists and experts.",
    icon: <WorkforceIcon className="w-8 h-8"/>,
  },
  {
    title: "AI Agents",
    description:
      "AI agents that research, generate leads, communicate, follow up and automate workflows.",
    icon: <AgentsIcon className="w-8 h-8"/>,
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive processes using AI, APIs and workflow automation.",
    icon: <AutomationIcon className="w-8 h-8"/>,
  },
  {
    title: "AI Data & Research",
    description:
      "Turn data into insights with AI-powered research and analysis.",
    icon: <DataIcon className="w-8 h-8"/>,
  },
  {
    title: "AI Lead Engines",
    description:
      "Find, enrich, qualify and nurture prospects with AI-driven lead engines.",
    icon: <LeadIcon className="w-8 h-8"/>,
  },
  {
    title: "AI Digital Marketing",
    description:
      "SEO, content, social, ads, backlinks and more — powered by AI tools and operators.",
    icon: <MarketingIcon className="w-8 h-8"/>,
    featured: true,
  },
  {
    title: "AI Customer Operations",
    description:
      "Customer support, CRM, follow-up and calling with AI and trained operators.",
    icon: <CustomerIcon className="w-8 h-8"/>,
  },
];

/* =========================================================
   CHALLENGE CARD COMPONENT
========================================================= */

function ChallengeCard({
  icon,
  title,
  description,
}: ChallengeCard) {
  return (
    <article
      className="
        group
        min-h-[116px]
        rounded-[7px]
        border
        border-[#e5edfa]
        bg-white
        p-4
        shadow-[0_4px_16px_rgba(40,80,140,0.035)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#d4e3fb]
        hover:shadow-[0_10px_25px_rgba(40,80,140,0.08)]
      "
    >
      <div
        className="
          mb-2
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-[#edf8ff]
          to-[#f1ebff]
        "
      >
        {icon}
      </div>

      <h3 className="text-[11px] my-3 font-bold leading-4 text-[#152451] sm:text-lg">
        {title}
      </h3>

      <p className=" text-[9px] leading-[1.45] text-[#607093] sm:text-sm">
        {description}
      </p>
    </article>
  );
}

/* =========================================================
   APPROACH STEP COMPONENT
========================================================= */

function ApproachStep({
  number,
  title,
  description,
  icon,
  isLast,
}: ApproachStep & {
  isLast?: boolean;
}) {
  return (
    <div className="relative min-w-0">
      {/* Number + icon */}
      <div className="flex items-center gap-2">
        

        <span
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-[#eef9ff]
            to-[#f2ecff]
          "
        >
          {icon}
        </span>
      </div>

      {/* Text */}
      <div className="mt-3">
        <span
          className="
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#eef5ff]
            text-[9px]
            font-bold
            text-[#075cff]
          "
        >
          {number}
        </span>
        <h3 className="text-[10px] py-2 font-bold text-[#14234f] sm:text-xl">
          {title}
        </h3>

        <p className="mt-1 max-w-[115px] text-[8px] leading-[1.5] text-[#627294] sm:text-sm">
          {description}
        </p>
      </div>

      {/* Arrow */}
      {!isLast && (
        <span
          className="
            absolute
            -right-0
            top-[0px]
            hidden
            text-[40px]
            font-light
            text-[#9bb9f7]
            xl:block
          "
        >
          →
        </span>
      )}
    </div>
  );
}

/* =========================================================
   SOLUTION CARD COMPONENT
========================================================= */

function SolutionCard({
  icon,
  title,
  description,
  featured,
}: SolutionCard) {
  return (
    <article
      className={`
        group
        flex
        min-h-[190px]
        flex-col
        rounded-[10px]
        border
        px-4
        py-4
        transition-all
        duration-300
        ease-out

        ${
          featured
            ? `
              border-[#e3d9ff]
              bg-gradient-to-br
              from-[#f5f0ff]
              via-[#f4efff]
              to-[#eee8ff]
              shadow-[0_8px_24px_rgba(112,72,220,0.08)]
            `
            : `
              border-[#e3ecfa]
              bg-white
              shadow-[0_5px_20px_rgba(35,80,150,0.045)]
              hover:-translate-y-1
              hover:border-[#cbdcf8]
              hover:shadow-[0_12px_30px_rgba(35,80,150,0.10)]
            `
        }
      `}
    >
      {/* =====================================================
          ICON
      ===================================================== */}

      <div
        className={`
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          transition-transform
          duration-300
          group-hover:scale-105

          ${
            featured
              ? "bg-white shadow-sm"
              : "bg-gradient-to-br from-[#eefaff] to-[#f1ecff]"
          }
        `}
      >
        {icon}
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mt-3">
        <h3
          className="
            text-sm
            font-bold
            leading-[1.3]
            tracking-[-0.01em]
            text-[#152451]
            sm:text-lg
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-[11px]
            leading-[1.55]
            text-[#607093]
            sm:text-sm
            sm:leading-[1.5]
          "
        >
          {description}
        </p>
      </div>

      {/* =====================================================
          EXPLORE
      ===================================================== */}

      <a
        href="#"
        aria-label={`Explore ${title}`}
        className="
          mt-auto
          inline-flex
          w-fit
          items-center
          gap-1.5
          pt-4
          text-sm
          font-semibold
          text-[#3972e8]
          transition-all
          duration-200
          hover:gap-2
          hover:text-[#7437df]
          sm:text-lg
        "
      >
        <span>Explore</span>

        <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function BusinessApproach() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* =====================================================
          SECTION 1 — THE CHALLENGE
      ===================================================== */}

      <section
        id="challenge"
        className="
          relative
          border-b
          border-[#eef3fa]
          bg-gradient-to-r
          from-[#f6fbff]
          via-white
          to-[#f7fbff]
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-5
            py-5
            sm:px-8
            sm:py-6
            lg:px-10
            lg:py-10
            xl:px-12
          "
        >
         <div
  className="
    grid
    items-start
    gap-5
    lg:grid-cols-[35%_minmax(0,1fr)]
  "
>
            {/* Left content */}

            <div>
              <span
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#2563eb]
                  
                "
              >
                The Challenge
              </span>

              <h2
                className="
                  mt-2
                  
                  text-xl
                  font-extrabold
                  leading-[1.18]
                  tracking-[-0.025em]
                  text-[#14234f]
                  sm:text-2xl
                "
              >
                You Don&apos;t Need More AI Tools.
               
                You Need AI That Actually Works
               
                for Your Business.
              </h2>
            </div>

            {/* Right cards */}

            <div className="min-w-0">
              <div className="grid gap-3 md:grid-cols-3">
                {challengeCards.map((card) => (
                  <ChallengeCard key={card.title} {...card} />
                ))}
              </div>

              {/* Information strip */}

              <div
                className="
                  mt-2
                  flex
                  min-h-[25px]
                  items-center
                  gap-2
                  rounded-[6px]
                  border
                  border-[#e0ebfa]
                  bg-[#eef6ff]
                  px-4
                  py-2
                  text-lg
                  font-medium
                  text-[#3a68c9]
                  sm:text-[9px]
                "
              >
                <ArrowRight className="h-5 w-5 shrink-0 text-[#2563eb]" />

                <span className="text-sm font-bold">
                  AI Worksforce combines all of them into one managed AI
                  operation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — OUR APPROACH
      ===================================================== */}

      <section
        id="approach"
        className="
          relative
          border-b
          border-[#eef3fa]
          bg-white
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-5
            py-6
            sm:px-8
            sm:py-7
            lg:px-10
            lg:py-12
            xl:px-8
          "
        >
         <div
  className="
    grid
    items-start
    gap-5
    lg:grid-cols-[30%_minmax(0,1fr)]
  "
>
            {/* Left */}

            <div>
              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#2563eb]
                  sm:text-sm
                "
              >
                Our Approach
              </span>

              <h2
                className="
                  mt-2
                 
                  text-xl
                  font-extrabold
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-[#14234f]
                  sm:text-2xl
                "
              >
                From Business Problem to Managed AI Operation
              </h2>

              <p
                className="
                  my-4
                  
                  text-xs
                  leading-[1.55]
                  text-[#647393]
                  sm:text-lg
                "
              >
                We first understand your business. Then we build your AI
                workforce with the right data, tools, agents and people —
                and manage it for you.
              </p>

              <Link
                href="#solutions"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#159cf5]
                  to-[#7c3aed]
                  px-4
                  py-2
                  text-[8px]
                  font-semibold
                  text-white
                  shadow-[0_5px_15px_rgba(70,100,220,0.2)]
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-[0_8px_20px_rgba(70,100,220,0.25)]
                  sm:text-lg
                "
              >
                Our 6-Step Method
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Right — process */}

            <div className="min-w-0">
              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-7
                  gap-y-8
                  sm:grid-cols-3
                  lg:grid-cols-6
                  lg:gap-x-4
                  lg:gap-y-0
                "
              >
                {approachSteps.map((step, index) => (
                  <ApproachStep
                    key={step.number}
                    {...step}
                    isLast={index === approachSteps.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — OUR SOLUTIONS
      ===================================================== */}

      <section
        id="solutions"
        className="
          relative
          bg-gradient-to-b
          from-[#f8fcff]
          to-[#f4f9ff]
        "
      >
        <div
          className="
            mx-auto
           
            px-5
            py-6
            sm:px-8
            sm:py-7
            lg:px-10
            lg:py-6
            xl:px-12
          "
        >
          {/* Heading */}

          <div className="mb-4">
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#2563eb]
                sm:text-sm
              "
            >
              Our Solutions
            </span>

            <h2
              className="
                my-1.5
                text-xl
                font-extrabold
                leading-tight
                tracking-[-0.025em]
                text-[#14234f]
                sm:text-2xl
              "
            >
              Everything Your Business Needs to Become AI-Powered
            </h2>
          </div>

          {/* Solution cards */}

          <div
            className="
              grid
              grid-cols-1
              gap-2
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-7
            "
          >
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.title}
                {...solution}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}