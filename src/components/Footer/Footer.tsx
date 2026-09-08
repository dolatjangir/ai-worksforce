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

function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-[54px] w-[54px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_72%_28%,#13D8FF_0%,#087EF5_42%,#10236E_100%)] shadow-[0_0_30px_rgba(20,140,255,0.2)]">
        <div className="absolute left-[9px] top-[8px] h-[37px] w-[33px] rounded-full border-[6px] border-white/95 border-r-transparent" />

        <div className="absolute right-[5px] top-[14px] h-[2px] w-[26px] bg-white" />
        <div className="absolute right-[5px] top-[28px] h-[2px] w-[28px] bg-white" />
        <div className="absolute bottom-[13px] right-[6px] h-[2px] w-[25px] bg-white" />

        <span className="absolute right-[4px] top-[10px] h-[11px] w-[11px] rounded-full border-[3px] border-white bg-[#173E97]" />
        <span className="absolute right-[4px] top-[24px] h-[11px] w-[11px] rounded-full border-[3px] border-white bg-[#173E97]" />
        <span className="absolute bottom-[9px] right-[5px] h-[11px] w-[11px] rounded-full border-[3px] border-white bg-[#173E97]" />
      </div>

      <div>
        <div className="whitespace-nowrap text-[27px] font-extrabold leading-none tracking-[-0.055em]">
          <span className="text-[#16A5FF]">AI</span>{" "}
          <span className="text-white">WorksForce</span>
          <sup className="ml-1 align-top text-[8px] font-medium text-white/70">
            TM
          </sup>
        </div>

        <p className="mt-1.5 whitespace-nowrap text-[13px] font-medium leading-5 text-white/80">
          AI Agents. Human Experts. Managed Results.
        </p>
      </div>
    </div>
  );
}

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
    <div className="min-w-0 border-l border-white/[0.10] pl-5 first:border-l-0 first:pl-0">
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
    <footer className="relative overflow-hidden bg-[#071426] text-white">

      {/* =========================================================
          UPPER CTA SECTION
      ========================================================= */}

      <section className="border-b border-[#1D4779]">
        <div className="mx-auto max-w-[1450px] px-5 pb-10 pt-12 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid gap-10 xl:grid-cols-[0.95fr_1.1fr_0.72fr] xl:items-center">

            {/* LEFT BRAND SECTION */}
            <div>
             <img src="/aiworksforce-white-logo.png" className="w-70"/>

              <p className="mt-6 max-w-[500px] text-[16px] font-normal leading-[1.55] text-white/90">
                We design, deploy and manage AI workforce solutions
                that help businesses grow faster, work smarter and
                achieve real results.
              </p>

              <div className="mt-8 grid max-w-[560px] grid-cols-3 divide-x divide-white/[0.15]">

                {/* AUTOMATE */}
                <div className="flex items-center gap-3 pr-4">
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
                <div className="flex items-center gap-3 px-4">
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
                <div className="flex items-center gap-3 pl-4">
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

            {/* CENTER CTA SECTION */}
            <div className="border-l border-[#2D5D93] pl-7 xl:pl-12">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.25em] text-[#8FB8EF]">
                Ready to transform your business?
              </p>

              <h2 className="max-w-[700px] text-[36px] font-bold leading-[1.1] tracking-[-0.035em] sm:text-xl lg:text-3xl">
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
                className="mt-6 inline-flex min-h-[54px] items-center justify-center gap-3 rounded-[14px] bg-gradient-to-r from-[#119BEA] to-[#4A38FF] px-7 text-[17px] font-semibold text-white shadow-[0_12px_35px_rgba(39,104,255,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(39,104,255,0.34)]"
              >
                <span>Get AI Assessment</span>

                <ArrowRight
                  className="h-[21px] w-[21px]"
                  strokeWidth={2}
                />
              </a>
            </div>

            {/* RIGHT BENEFITS CARD */}
            <div className="rounded-[16px] border border-[#2D62A2] bg-[linear-gradient(145deg,rgba(11,36,68,0.62),rgba(12,29,55,0.45))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_15px_45px_rgba(0,0,0,0.18)]">

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
          NAVIGATION SECTION
      ========================================================= */}

      <section>
        <div className="mx-auto max-w-[1450px] px-5 py-8 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
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
          <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] leading-5 text-white/70">
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

            {/* RIGHT */}
            <div className="flex flex-wrap items-center gap-5 text-white/75">

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

              <span className="ml-1 text-[14px] text-white/65">
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

      <div className="relative mx-auto h-[175px] max-w-[1450px] overflow-hidden px-5 sm:px-8 lg:px-12 xl:px-14">

        {/* LEFT WAVE 1 */}
        <div className="absolute -bottom-[125px] -left-[5%] h-[200px] w-[78%] rotate-[7deg] rounded-[50%] border border-[#1D5795]/70" />

        {/* LEFT WAVE 2 */}
        <div className="absolute -bottom-[145px] -left-[7%] h-[220px] w-[82%] rotate-[7deg] rounded-[50%] border border-[#17477D]/60" />

        {/* LEFT WAVE 3 */}
        <div className="absolute -bottom-[165px] -left-[10%] h-[245px] w-[86%] rotate-[7deg] rounded-[50%] border border-[#123B6D]/50" />

        {/* DIGITAL GLOBE */}
        <div className="absolute -bottom-[270px] right-[-55px] h-[440px] w-[440px] rounded-full border border-[#1A61A8]/75 shadow-[0_0_70px_rgba(17,106,215,0.12)]">

          <div className="absolute inset-7 rounded-full border border-[#174E89]/70" />

          <div className="absolute inset-16 rounded-full border border-[#174E89]/50" />

          <div className="absolute left-[12%] right-[12%] top-[45%] h-[60px] rounded-[50%] border border-[#18518D]/50" />

          <div className="absolute left-[18%] right-[18%] top-[50%] h-[110px] rounded-[50%] border border-[#18518D]/40" />

          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#318EFF] shadow-[0_0_30px_10px_rgba(49,142,255,0.25)]" />
        </div>

        {/* LEFT BOTTOM TEXT */}
        <div className="absolute bottom-4 left-5 text-[11px] font-medium uppercase tracking-[0.30em] text-[#91B5E8] sm:left-8 lg:left-12 xl:left-14">
          A more productive, intelligent tomorrow.
        </div>

        {/* RIGHT BOTTOM TEXT */}
        <div className="absolute bottom-5 right-5 hidden text-[11px] font-medium uppercase leading-5 tracking-[0.25em] text-[#91B5E8] sm:block lg:right-12 xl:right-14">
          <div>PEOPLE</div>
          <div>AI</div>
          <div>POSSIBILITIES</div>

          <div className="mt-2 h-px w-12 bg-[#5D91D0]" />
        </div>
      </div>
    </footer>
  );
}