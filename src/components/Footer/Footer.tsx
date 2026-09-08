"use client";

import type { ElementType } from "react";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Check,
  Lightbulb,
  Linkedin,
  Mail,
  Megaphone,
  Package,
  Sparkles,
  Users,
  Workflow,
  X,
  Youtube,
  Zap,
} from "lucide-react";

type FooterColumn = {
  title: string;
  icon: ElementType;
  color: string;
  links: string[];
  footerLink?: string;
};

const footerColumns: FooterColumn[] = [
  {
    title: "SOLUTIONS",
    icon: Lightbulb,
    color: "text-[#4D8DFF]",
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
    title: "AI WORKFORCE",
    icon: Users,
    color: "text-[#45E6C0]",
    links: [
      "What is an AI Workforce?",
      "Managed AI Workforce",
      "AI Operators",
      "AI Specialists",
      "AI Experts",
      "Dedicated AI Department",
      "For Startups",
      "For Enterprises",
    ],
  },
  {
    title: "AI AGENTS",
    icon: Workflow,
    color: "text-[#A66FFF]",
    links: [
      "Lead Generation Agent",
      "Data Mining Agent",
      "AI Research Agent",
      "Outreach Agent",
      "AI Calling Agent",
      "CRM Agent",
      "Marketing Agent",
      "Custom AI Agents",
    ],
    footerLink: "View All AI Agents",
  },
  {
    title: "PRODUCTS",
    icon: Package,
    color: "text-[#FF792E]",
    links: [
      "AI Lead Engines",
      "B2B Lead Engine",
      "Real Estate Lead Engine",
      "Agency Lead Engine",
      "Education Lead Engine",
      "Recruitment Lead Engine",
      "E-commerce Lead Engine",
      "Custom Lead Engine",
      "AI Tools",
    ],
  },
  {
    title: "AI DIGITAL\nMARKETING",
    icon: Megaphone,
    color: "text-[#F15CB2]",
    links: [
      "AI SEO",
      "AI Content Marketing",
      "AI Social Media",
      "AI Backlink & Outreach",
      "AI Advertising",
      "AI Creative & Video",
      "AI Marketing Automation",
      "AI Marketing Analytics",
    ],
  },
  {
    title: "RESOURCES",
    icon: BookOpen,
    color: "text-[#6FE69A]",
    links: [
      "AI Use Cases",
      "Case Studies",
      "AI Workforce Guides",
      "AI Digital Marketing Guides",
      "Blog",
      "FAQs",
    ],
  },
  {
    title: "COMPANY",
    icon: Building2,
    color: "text-[#4D8DFF]",
    links: [
      "About AIWorksForce",
      "AI Delivery Centre",
      "How We Work",
      "Partners",
      "Careers",
      "Contact",
    ],
  },
];

function Benefit({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-3 text-[15px] leading-6 text-white/85">
      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#187FF4] shadow-[0_0_14px_rgba(24,127,244,0.35)]">
        <Check
          className="h-[13px] w-[13px]"
          strokeWidth={3}
        />
      </span>

      <span>{children}</span>
    </li>
  );
}

function FooterColumn({
  title,
  icon: Icon,
  color,
  links,
  footerLink,
}: FooterColumn) {
  return (
    <div
      className="
        min-w-0
        border-l
        border-white/[0.10]
        pl-5

        max-xl:[&:nth-child(5)]:border-l-0
        max-xl:[&:nth-child(5)]:pl-0

        max-lg:[&:nth-child(3)]:border-l-0
        max-lg:[&:nth-child(3)]:pl-0

        max-md:border-l-0
        max-md:pl-0
      "
    >
      {/* Column heading */}
      <div className="mb-5 flex min-h-[54px] items-start gap-3">
        <Icon
          className={`mt-0.5 h-[30px] w-[30px] shrink-0 ${color}`}
          strokeWidth={1.8}
        />

        <h3
          className={`whitespace-pre-line text-[15px] font-semibold leading-[1.25] tracking-[0.035em] ${color}`}
        >
          {title}
        </h3>
      </div>

      {/* Links */}
      <ul className="space-y-[13px]">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[15px] font-normal leading-5 text-white/[0.84] transition-colors duration-200 hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* View all */}
      {footerLink && (
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#A26FFF] transition-colors duration-200 hover:text-[#C09AFF]"
        >
          {footerLink}

          <ArrowRight
            className="h-[17px] w-[17px]"
            strokeWidth={2}
          />
        </a>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#071426] text-white">

      {/* =========================================================
          UPPER CTA SECTION
      ========================================================= */}

      <section className="border-b border-[#1D4779]">
        <div className="mx-auto max-w-[1450px] px-5 pb-10 pt-10 sm:px-8 sm:pb-10 sm:pt-12 lg:px-12 xl:px-14">
          <div
            className="
              grid
              min-w-0
              gap-10

              xl:grid-cols-[0.95fr_1.1fr_0.72fr]
              xl:items-center
            "
          >
            {/* =====================================================
                LEFT BRAND
            ====================================================== */}

            <div className="min-w-0">
              <img
                src="/aiworksforce-white-logo.png"
                alt="AIWorksForce"
                className="h-auto w-[250px] max-w-full object-contain object-left sm:w-[280px]"
              />

              <p className="mt-6 max-w-[500px] text-[16px] font-normal leading-[1.55] text-white/90">
                We design, deploy and manage AI workforce solutions
                that help businesses grow faster, work smarter and
                achieve real results.
              </p>

              {/* Feature items */}
              <div
                className="
                  mt-8
                  grid
                  max-w-[560px]
                  grid-cols-1
                  gap-5

                  sm:grid-cols-3
                  sm:gap-0
                  sm:divide-x
                  sm:divide-white/[0.15]
                "
              >
                {/* AUTOMATE */}
                <div className="flex items-center gap-3 sm:pr-4">
                  <Zap
                    className="h-[31px] w-[31px] shrink-0 text-[#71B8FF]"
                    strokeWidth={2.2}
                  />

                  <span className="text-[14px] font-medium leading-5 text-white/90">
                    Automate
                    <br />
                    Work
                  </span>
                </div>

                {/* SCALE */}
                <div className="flex items-center gap-3 sm:px-4">
                  <BarChart3
                    className="h-[31px] w-[31px] shrink-0 text-[#71B8FF]"
                    strokeWidth={2}
                  />

                  <span className="text-[14px] font-medium leading-5 text-white/90">
                    Scale
                    <br />
                    Growth
                  </span>
                </div>

                {/* HUMAN + AI */}
                <div className="flex items-center gap-3 sm:pl-4">
                  <Users
                    className="h-[31px] w-[31px] shrink-0 text-[#71B8FF]"
                    strokeWidth={2}
                  />

                  <span className="text-[14px] font-medium leading-5 text-white/90">
                    Human Experts
                    <br />
                    + AI
                  </span>
                </div>
              </div>
            </div>

            {/* =====================================================
                CENTER CTA
            ====================================================== */}

            <div
              className="
                min-w-0
                border-l-0
                border-[#2D5D93]
                pl-0

                sm:border-l
                sm:pl-7

                xl:pl-12
              "
            >
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.25em] text-[#8FB8EF]">
                Ready to transform your business?
              </p>

              <h2
                className="
                  max-w-[700px]
                  text-[30px]
                  font-bold
                  leading-[1.1]
                  tracking-[-0.035em]

                  sm:text-[36px]
                  lg:text-[40px]
                  xl:text-[42px]
                "
              >
                Build Your{" "}
                <span className="text-[#24A8FF]">
                  AI Workforce
                </span>
                <br />
                Without Building an AI Team.
              </h2>

              <p className="mt-4 max-w-[640px] text-[16px] font-normal leading-7 text-white/75">
                Get expert guidance, a tailored roadmap and see how AI
                can work for your business.
              </p>

              <a
                href="#"
                className="
                  mt-6
                  inline-flex
                  min-h-[54px]
                  w-auto
                  max-w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[14px]
                  bg-gradient-to-r
                  from-[#119BEA]
                  to-[#4A38FF]
                  px-7
                  text-[17px]
                  font-semibold
                  text-white
                  shadow-[0_12px_35px_rgba(39,104,255,0.24)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-[0_16px_40px_rgba(39,104,255,0.34)]
                "
              >
                <span>Get AI Assessment</span>

                <ArrowRight
                  className="h-[21px] w-[21px] shrink-0"
                  strokeWidth={2}
                />
              </a>
            </div>

            {/* =====================================================
                RIGHT BENEFIT CARD
            ====================================================== */}

            <div
              className="
                min-w-0
                rounded-[16px]
                border
                border-[#2D62A2]
                bg-[linear-gradient(145deg,rgba(11,36,68,0.62),rgba(12,29,55,0.45))]
                p-5
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_15px_45px_rgba(0,0,0,0.18)]

                sm:p-6
              "
            >
              <div className="flex items-start gap-4">
                <Sparkles
                  className="mt-0.5 h-[28px] w-[28px] shrink-0 text-[#A8C6FF]"
                  fill="currentColor"
                  strokeWidth={1.5}
                />

                <h3 className="text-[18px] font-semibold leading-6 text-white">
                  Smarter Teams.
                  <br />
                  Bigger Results.
                </h3>
              </div>

              <div className="my-5 h-px bg-[#31517B]" />

              <ul className="space-y-4">
                <Benefit>
                  Personalized consultation
                </Benefit>

                <Benefit>
                  Industry-specific recommendations
                </Benefit>

                <Benefit>
                  No commitment required
                </Benefit>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <section>
        <div className="mx-auto max-w-[1450px] px-5 py-8 sm:px-8 lg:px-12 xl:px-14">
          <div
            className="
              grid
              min-w-0
              grid-cols-1
              gap-x-6
              gap-y-10

              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-7
            "
          >
            {footerColumns.map((column) => (
              <FooterColumn
                key={column.title}
                {...column}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COPYRIGHT + SOCIAL
      ========================================================= */}

      <section className="border-t border-[#1D4779]">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-14">
          <div
            className="
              flex
              flex-col
              gap-5
              py-6

              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-6
            "
          >
            {/* COPYRIGHT */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3
                text-[14px]
                leading-5
                text-white/70
              "
            >
              <span>
                © 2026 AIWorksForce. All rights reserved.
              </span>

              <span className="hidden h-4 w-px bg-white/20 sm:block" />

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>

              <span className="hidden h-4 w-px bg-white/20 sm:block" />

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Terms &amp; Conditions
              </a>

              <span className="hidden h-4 w-px bg-white/20 sm:block" />

              <a
                href="#"
                className="transition-colors hover:text-white"
              >
                Cookies
              </a>
            </div>

            {/* SOCIAL */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-5
                text-white/75

                lg:justify-end
              "
            >
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-colors hover:text-white"
              >
                <Linkedin
                  className="h-5 w-5"
                  strokeWidth={2}
                />
              </a>

              <a
                href="#"
                aria-label="X"
                className="transition-colors hover:text-white"
              >
                <X
                  className="h-[19px] w-[19px]"
                  strokeWidth={1.8}
                />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="transition-colors hover:text-white"
              >
                <Youtube
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </a>

              <a
                href="#"
                aria-label="Email"
                className="transition-colors hover:text-white"
              >
                <Mail
                  className="h-5 w-5"
                  strokeWidth={1.8}
                />
              </a>

              <span className="text-[14px] text-white/65">
                Made with AI + Human Expertise{" "}
                <span className="ml-1 text-[21px] text-[#8FB8FF]">
                  ♡
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DECORATIVE BOTTOM AREA
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          h-[145px]
          max-w-[1450px]
          overflow-hidden
          px-5

          sm:h-[160px]
          sm:px-8

          lg:h-[175px]
          lg:px-12

          xl:px-14
        "
      >
        {/* LEFT WAVE 1 */}
        <div
          className="
            absolute
            -bottom-[125px]
            -left-[15%]
            h-[200px]
            w-[100%]
            rotate-[7deg]
            rounded-[50%]
            border
            border-[#1D5795]/70

            sm:-left-[5%]
            sm:w-[78%]
          "
        />

        {/* LEFT WAVE 2 */}
        <div
          className="
            absolute
            -bottom-[145px]
            -left-[18%]
            h-[220px]
            w-[105%]
            rotate-[7deg]
            rounded-[50%]
            border
            border-[#17477D]/60

            sm:-left-[7%]
            sm:w-[82%]
          "
        />

        {/* LEFT WAVE 3 */}
        <div
          className="
            absolute
            -bottom-[165px]
            -left-[20%]
            h-[245px]
            w-[110%]
            rotate-[7deg]
            rounded-[50%]
            border
            border-[#123B6D]/50

            sm:-left-[10%]
            sm:w-[86%]
          "
        />

        {/* =====================================================
            DIGITAL GLOBE
        ====================================================== */}

        <div
          className="
            absolute
            -bottom-[265px]
            -right-[170px]
            h-[390px]
            w-[390px]
            rounded-full
            border
            border-[#1A61A8]/75
            shadow-[0_0_70px_rgba(17,106,215,0.12)]

            sm:-bottom-[270px]
            sm:-right-[55px]
            sm:h-[440px]
            sm:w-[440px]
          "
        >
          <div className="absolute inset-7 rounded-full border border-[#174E89]/70" />

          <div className="absolute inset-16 rounded-full border border-[#174E89]/50" />

          <div className="absolute left-[12%] right-[12%] top-[45%] h-[60px] rounded-[50%] border border-[#18518D]/50" />

          <div className="absolute left-[18%] right-[18%] top-[50%] h-[110px] rounded-[50%] border border-[#18518D]/40" />

          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#318EFF] shadow-[0_0_30px_10px_rgba(49,142,255,0.25)]" />
        </div>

        {/* =====================================================
            LEFT BOTTOM TEXT
        ====================================================== */}

        <div
          className="
            absolute
            bottom-4
            left-5
            max-w-[280px]
            text-[10px]
            font-medium
            uppercase
            leading-5
            tracking-[0.22em]
            text-[#91B5E8]

            sm:left-8
            sm:max-w-none
            sm:text-[11px]
            sm:tracking-[0.30em]

            lg:left-12

            xl:left-14
          "
        >
          A more productive, intelligent tomorrow.
        </div>

        {/* =====================================================
            RIGHT BOTTOM TEXT
        ====================================================== */}

        <div
          className="
            absolute
            bottom-5
            right-5
            hidden
            text-[11px]
            font-medium
            uppercase
            leading-5
            tracking-[0.25em]
            text-[#91B5E8]

            sm:block
            lg:right-12
            xl:right-14
          "
        >
          <div>PEOPLE</div>
          <div>AI</div>
          <div>POSSIBILITIES</div>

          <div className="mt-2 h-px w-12 bg-[#5D91D0]" />
        </div>
      </div>
    </footer>
  );
}