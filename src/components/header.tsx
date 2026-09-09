"use client"
import React, { useState, useRef, useEffect } from 'react'
import {
  ChevronDown,
  Sparkles,
  Play,
  Image,
  HelpCircle,
  HelpCircleIcon,
  MessageSquareCode,
  GraduationCapIcon,
  PlayCircle,
  BookA,
  Cloud,
  Database,
  PieChart,
  Target,
  Layers,
  Workflow,
  LineChart,
  Users,
  Clock,
  Zap,
  BarChart3,
  Shield,
  Star,
  HeadphonesIcon,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Bot,
  UsersRound,
  Wrench,
  Settings
} from 'lucide-react';

import Link from 'next/link'

interface SubMenuItem {
  title: string;
  href: string;
}

interface DropdownItem {
  icon?: React.ReactNode;
  title: string;
  href: string;
  badge?: string;
  tagline?: string;
  children?: SubMenuItem[];
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownContent?: {
    sections: {
      items: DropdownItem[];
    }[];
    footer?: {
      text: string;
      link: string;
      href: string;
    };
  };
}

const navItems: NavItem[] = [
   {
    label: "Solutions",
    href: "#solutions",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              title: "AI Business Assessment",
              href: "/solutions/ai-business-assessment"
            },
            {
              title: "AI Workforce",
              href: "/solutions/ai-workforce"
            },
            {
              title: "AI Automation",
              href: "/services/ai-integration"
            }
          ]
        },
        {
          items: [
            {
              title: "AI Data & Research",
              href: "/services/business-process-automation"
            },
            {
              title: "AI Customer Operations",
              href: "/services/custom-ai-solutions"
            },
             {
              title: "AI Sales & Outreach",
              href: "/services/custom-ai-solutions"
            }
          ]
        }
      ],
      footer: {
        text: "Not sure which services fits your business?",
        link: "show all solutions→",
        href: "/solutions"
      }
    }
  },
   {
    label: "AI WorkForce",
    href: "#ai-workforce",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              icon: <Sparkles className="w-5 h-5" />,
              title: "What is an AI WorkForce",
              tagline: "AI + Tools + Experts + Managed Operations",
              href: "/features/ai-automation"
            },
            {
              icon: <Bot className="w-5 h-5" />,
              title: "What AIWorksForce?",
              tagline: "Why businesses choose our model",
              href: "/features/smart-lead",
              badge: "AI"
            },
            {
              icon: <UsersRound className="w-5 h-5" />,
              title: "How it Works",
              tagline: "From business problem to AI operations",
              href: "/features/property-ai"
            },
            {
              icon: <Workflow className="w-5 h-5" />,
              title: "Our AI WorkFlow",
              tagline: "AI agents, experts and operators",
              href: "/features/growth-automation"
            },
            {
              icon: <Wrench className="w-5 h-5" />,
              title: "Case Studies",
              tagline: "Real business results",
              href: "/features/Conversational-ai"
            }
          ]
        }
      ],
      footer: {
        text: "Get your AI workforce Assessment",
        link: "",
        href: "/explore-feature"
      }
    }
  },
  {
    label: "AI Agents",
    href: "#ai-agents",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-1_nz99v7.png" className="max-w-12 max-h-12" />,
              title: "AI Lead Qualification Agent",
              href: "/ai-agents/lead-qualifiction-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-2_l1xdll.png" className="max-w-12 max-h-12" />,
              title: "AI Property Matching Agent",
              href: "/ai-agents/property-maching-agent",
              badge: "AI"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png" className="max-w-12 max-h-12" />,
              title: "Lead Capture Agent",
              href: "/ai-agents/lead-capture-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-4_damgxf.png" className="max-w-12 max-h-12" />,
              title: "AI Content Creation Agent",
              href: "/ai-agents/content-creation-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-555_kabvyd.png" className="max-w-12 max-h-12" />,
              title: "AI  Follow-Up Agent",
              href: "/ai-agents/follow-up-agent",
              badge: "AI"
            },
          ]
        },
        {
          items: [
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-6_mky5rb.png" className="max-w-12 max-h-12" />,
              title: "AI Calling Agent",
              href: "/ai-agents/calling-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335523/img-7_xjwzbl.png" className="max-w-12 max-h-12" />,
              title: "AI Campaign Automation Agent",
              href: "/ai-agents/campaign-automation"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png" className="max-w-12 max-h-12" />,
              title: "Data Mining Agent",
              href: "/ai-agents/data-mining-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-9_i1wlut.png" className="max-w-12 max-h-12" />,
              title: "Social Media Agent",
              href: "/ai-agents/social-media-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-10_ajsusz.png" className="max-w-12 max-h-12 rounded-xl" />,
              title: "AI SEO Content Agent",
              href: "/ai-agents/seo-content-agent"
            },
          ]
        }
      ],
      footer: {
        text: "See all features",
        link: "Explore →",
        href: "/explore-ai-agent"
      }
    }
  },
   {
    label: "Products",
    href: "#products",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              title: "AI Lead Engine",
              href: "/industry/agencies",
              children: [
                { title: "B2B Lead Engine", href: "/products/crm/b2b" },
                { title: "B2C Lead Engine", href: "/products/crm/b2c" },
                { title: "Property Lead Engine", href: "/products/crm/property" },
                { title: "Consultancy Lead Engine", href: "/products/crm/consult" },
                { title: "Airbnb Lead Engine", href: "/products/crm/airbnb" },
                { title: "Custom Lead Engine", href: "/products/crm/bulk" },
                
              ]
            },
            {
              title: "AI Agents",
              href: "/industry/customer-sucess",
              children: [
                { title: "AI Lead Qualification Agent", href: "/ai-agents/lead-qualifiction-agent" },
                { title: "AI Property Matching Agent", href: "/ai-agents/property-maching-agent" },
                { title: "Lead Capture Agent", href: "/ai-agents/lead-capture-agent" },
                { title: "AI Content Creation Agent", href: "/ai-agents/content-creation-agent" },
                { title: "AI Follow-Up Agent", href: "/ai-agents/follow-up-agent" },
              ]
            },
            {
              title: "AI Tools",
              href: "/industry/enterprise",
              children: [
                { title: "AI Chatbot Builder", href: "/ai-tools/chatbot-builder" },
                { title: "Workflow Automator", href: "/ai-tools/workflow-automator" },
                { title: "Data Analyzer", href: "/ai-tools/data-analyzer" },
                { title: "Smart Scheduler", href: "/ai-tools/smart-scheduler" },
                { title: "Content Generator", href: "/ai-tools/content-generator" },
              ]
            },
          ]
        }
      ],
      footer: {
        text: "",
        link: "Book a Demo →",
        href: "/book-demo"
      }
    }
  },
   {
    label: "AI Digital Marketing",
    href: "#partners",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              title: "AI SEO",
              href: "/features/ai-automation"
            },
            {
              title: "AI Content Marketing",
              href: "/features/smart-lead",
              badge: "AI"
            },
            {
              title: "AI Social Media",
              href: "/features/property-ai"
            },
             {
              title: "AI Backlink & Outreach",
              href: "/features/property-ai"
            }
          ]
        },
        {
          items: [
            {
              title: "AI Advertising & Promotion",
              href: "/features/growth-automation"
            },
            {
              title: "AI Creative & Video",
              href: "/features/Conversational-ai"
            },
            {
              title: "AI Marketing Automation",
              href: "/features/Performance-analytics"
            },
            {
              title: "AI Marketing Analytics",
              href: "/features/Performance-analytics"
            }
          ]
        }
      ],
      footer: {
        text: "See all features",
        link: "Explore →",
        href: "/explore-feature"
      }
    }
  },
  {
    label: "Technology",
    href: "#technology",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              title: "AI Tools",
              href: "/features/ai-automation"
            },
            {
              title: "LLM & AI",
              href: "/features/smart-lead",
              badge: "AI"
            },
            {
              title: "AI Automation",
              href: "/features/property-ai"
            },
            {
              title: "Technology Stack",
              href: "/features/property-ai"
            }
          ]
        },
        {
          items: [
            {
              title: "Data Intelligence",
              href: "/features/growth-automation"
            },
            {
              title: "Lead Engine",
              href: "/features/Conversational-ai"
            },
            {
              title: "AI Infrastructure",
              href: "/features/Performance-analytics"
            },
            {
              title: "Integrations",
              href: "/features/Performance-analytics"
            }
          ]
        }
      ],
      footer: {
        text: "See all features",
        link: "Explore →",
        href: "/explore-feature"
      }
    }
  },
  {
    label: "Resources",
    href: "#resources",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              title: "AI Use Cases",
              href: "/features/ai-automation"
            },
            {
              title: "Case Studies",
              href: "/features/smart-lead",
              badge: "AI"
            },
            {
              title: "AI Workforce Guides",
              href: "/features/property-ai"
            }
          ]
        },
        {
          items: [
            {
              title: "AI Digital Marketing Guides",
              href: "/features/growth-automation"
            },
            {
              title: "Blog",
              href: "/features/Conversational-ai"
            },
            {
              title: "FAQs",
              href: "/features/Performance-analytics"
            }
          ]
        }
      ],
      footer: {
        text: "See all features",
        link: "Explore →",
        href: "/explore-feature"
      }
    }
  },
 
 
  {
    label: "Company",
    href: "#company",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              title: "About AIWorksForce",
              href: "/company/howitworks"
            },
            {
              title: "AI Delivery Centre",
              href: "/company/about-us"
            },
            {
              title: "How We Work",
              href: "/company/help-center"
            },
          ]
        },
        {
          items: [
            {
              title: "our Team",
              href: "/company/community"
            },
            {
              title: "Careers",
              href: "/company/careers"
            },
            {
              title: "Contact",
              href: "/company/why-choose-us"
            },
          ]
        }
      ],
      footer: {
        text: "Need personalized help?",
        link: "Book a Demo →",
        href: "/book-demo"
      }
    }
  },
 
  // {
  //   label: "Contact-us",
  //   href: "/contact-us",
  //   hasDropdown: false,
  // }
];

function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const [openMobileSubItem, setOpenMobileSubItem] = useState<string | null>(null);

  const toggleMobileItem = (label: string) => {
    setOpenMobileItem(prev => (prev === label ? null : label));
    setOpenMobileSubItem(null);
  };

  const toggleMobileSubItem = (title: string) => {
    setOpenMobileSubItem(prev => (prev === title ? null : title));
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
    setActiveSubmenu(null);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setActiveSubmenu(null);
      setTimeout(() => setActiveDropdown(null), 200);
    }, 150);
  };

  const activeItem = navItems.find(item => item.label === activeDropdown);

  return (
    <div className=''>
            {/* =========================================================
                TOP UTILITY BAR
            ========================================================= */}
            <div className="bg-[#071c3b] px-5 py-2 text-xs text-white">
              <div className="mx-auto flex max-w-[1280px] items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>●</span>
                  <span>AI Delivery Center · Jaipur, India</span>
                </div>
      
                <div className="hidden items-center gap-5 md:flex">
                  <span>✉ hello@aiworkforce.com</span>
                  <span>⌕ +91 72300 12345</span>
                  <span>in</span>
                  <span>◎</span>
                  <span>♥</span>
                  <span>f</span>
                </div>
              </div>
            </div>

      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100/80"
      >
        <div className="mx-auto px-4 sm:px-3 lg:px-2">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div
                className=" flex items-center justify-center "
              >
                <Link href="/">  <img width={220} height={150} src="/aiworksforce-logo.png" /></Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-0">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center gap-0.5 px-2 py-1.5 desktop-lg:px-3 desktop-lg:py-2 rounded-xl text-xs  font-medium transition-all duration-300 ${activeDropdown === item.label
                        ? "text-violet-700 bg-violet-50/80"
                        : "text-gray-950 hover:text-gray-900 hover:bg-gray-50/80"
                        }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 rounded-xl  text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {activeDropdown === item.label && item.dropdownContent && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ease-out 
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
                      ${item.label === "Products" 
                        ? (activeSubmenu ? "w-[500px]" : "w-64") 
                        : item.label === "AI Agents" 
                          ? "w-[640px]" 
                          : item.label === "AI WorkForce"
                            ? "w-[340px]"
                            : "w-[500px]"
                      }`}>

                      <div className="bg-white rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] border border-gray-100/90 overflow-hidden ring-1 ring-gray-100/50">
                        {/* Content Grid */}
                        {item.label === "Products" ? (
                          <div className="flex">
                            {/* Left Panel - Categories */}
                            <div className="w-64 p-2 shrink-0 bg-gray-50/40">
                              {item.dropdownContent.sections.map((section, idx) => (
                                <div key={idx} className="space-y-0.5">
                                  {section.items.map((subItem, subIdx) => (
                                    <div
                                      key={subIdx}
                                      className={`group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                                        activeSubmenu === subItem.title
                                          ? "bg-white text-violet-700 shadow-sm ring-1 ring-gray-100"
                                          : "hover:bg-white/80 text-gray-700 hover:text-gray-900"
                                      }`}
                                      onMouseEnter={() => subItem.children && setActiveSubmenu(subItem.title)}
                                    >
                                      <span className="text-sm font-semibold tracking-tight">
                                        {subItem.title}
                                      </span>
                                      {subItem.children && (
                                        <ChevronRight className={`w-4 h-4 transition-all duration-200 ${
                                          activeSubmenu === subItem.title ? "text-violet-600 translate-x-0.5" : "text-gray-400"
                                        }`} />
                                      )}
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>

                            {/* Right Panel - Submenu */}
                            {activeSubmenu && (
                              <div className="w-56 p-3 border-l border-gray-100 shrink-0 bg-white">
                                {item.dropdownContent.sections.map((section) => {
                                  const activeSubItem = section.items.find(i => i.title === activeSubmenu);
                                  if (!activeSubItem?.children) return null;
                                  return (
                                    <div key={activeSubItem.title} className="space-y-0.5">
                                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">
                                        {activeSubItem.title}
                                      </h4>
                                      {activeSubItem.children.map((child, childIdx) => (
                                        <Link
                                          key={childIdx}
                                          href={child.href}
                                          className="block p-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-violet-50/60 hover:text-violet-700 transition-all duration-200"
                                        >
                                          {child.title}
                                        </Link>
                                      ))}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        ) : item.label === "AI WorkForce" ? (
                          <div className="p-3">
                            {item.dropdownContent.sections.map((section, idx) => (
                              <div key={idx} className="space-y-0.5">
                                {section.items.map((subItem, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    href={subItem.href}
                                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50/80 transition-all duration-200"
                                  >
                                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center group-hover:bg-violet-100 transition-colors duration-200">
                                      {subItem.icon}
                                    </div>
                                    <div className="flex-1 min-w-0 pt-0.5">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-gray-800 group-hover:text-violet-700 transition-colors duration-200">
                                          {subItem.title}
                                        </span>
                                        {subItem.badge && (
                                          <span className="px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full border border-violet-200/50">
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      {subItem.tagline && (
                                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                          {subItem.tagline}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="p-5 grid grid-cols-2 gap-6">
                            {item.dropdownContent.sections.map((section, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="space-y-0.5">
                                  {section.items.map((subItem, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      href={subItem.href}
                                      className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50/80 transition-all duration-200"
                                    >
                                      <div className="flex-shrink-0  text-violet-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                        {subItem.icon}
                                      </div>

                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="text-sm font-semibold text-gray-800 group-hover:text-violet-700 transition-colors duration-200">
                                            {subItem.title}
                                          </span>

                                          {subItem.badge && (
                                            <span className="px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full border border-violet-200/50">
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Footer */}
                        {item.dropdownContent.footer && (
                          <div className="bg-gradient-to-r from-gray-50/80 to-gray-100/40 px-6 py-3.5 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-sm text-gray-500 font-medium">
                              {item.dropdownContent.footer.text}
                            </span>

                            <Link
                              href={item.dropdownContent.footer.href}
                              className="text-sm font-semibold text-violet-700 hover:text-violet-900 flex items-center gap-1.5 group transition-colors duration-200"
                            >
                              {item.dropdownContent.footer.link}
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              {/* <Link href="/login">
                <button className="px-4 py-2 text-gray-600 hover:text-violet-700 font-semibold text-sm transition-all duration-200 rounded-xl hover:bg-gray-50">
                  Log in
                </button></Link> */}
              <Link href="/start-a-pilot">
                <button
                  className="hidden items-center gap-0 desktop-lg:gap-2 rounded-md bg-[#0876ed] px-2.5 py-1.5 desktop-lg:px-5 desktop-lg:py-2.5 text-[11px] font-bold text-white shadow-[0_7px_18px_rgba(8,118,237,.2)] transition hover:bg-[#0668d5] sm:flex"
                >
                  start a pilot <ArrowRight/>
                </button></Link>
            </div>

            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        {/* humburger */}
        {/* Overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`
            fixed inset-0 bg-black/40 backdrop-blur-sm z-10
            transition-opacity duration-300
            ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        />

        <div
          className={`
            md:hidden
            bg-white
            border-t border-gray-100
            absolute top-0 right-0 w-full max-h-[100vh] overflow-y-auto
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            transform z-20 shadow-2xl
            ${isMenuOpen
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"}
          `}
        >
          <div className='flex justify-between items-center border-b border-gray-100 px-4 py-3'>
            <Link href="/">  <img width={200} height={200} src="/assets/makemylead-logo.png" /></Link>
            <div onClick={() => {
              setIsMenuOpen(!isMenuOpen)
              setOpenMobileItem(null)
              setOpenMobileSubItem(null);
            }
            } className={`w-fit p-2 rounded-xl bg-violet-50 hover:bg-violet-100 transition-colors cursor-pointer ${isMenuOpen ? 'block' : 'hidden'}`}> <X className="w-5 h-5 text-violet-700" /></div></div>
          {/* Mobile Navigation */}
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-1">

                {/* Check if item has dropdown */}
                {item.hasDropdown ? (
                  <>
                    {/* Dropdown Item - Toggle on click */}
                    <button
                      onClick={() => toggleMobileItem(item.label)}
                      className="w-full flex justify-between items-center text-sm font-semibold text-gray-800 py-3 px-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openMobileItem === item.label ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown Content */}
                    {openMobileItem === item.label && (
                      <>
                        {item.dropdownContent?.sections.map((section, idx) => (
                          <div key={idx} className="space-y-1 pl-3">
                            {section.items.map((subItem, subIdx) => (
                              <div key={subIdx}>
                                {subItem.children ? (
                                  <>
                                    <button
                                      onClick={() => toggleMobileSubItem(subItem.title)}
                                      className="w-full flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition-all"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="text-violet-600 flex items-center justify-center">
                                          {subItem.icon}
                                        </div>
                                        <span className="text-sm font-semibold text-gray-800">
                                          {subItem.title}
                                        </span>
                                      </div>
                                      <ChevronDown
                                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openMobileSubItem === subItem.title ? "rotate-180" : ""}`}
                                      />
                                    </button>
                                    {openMobileSubItem === subItem.title && (
                                      <div className="pl-10 space-y-1 py-1">
                                        {subItem.children.map((child, childIdx) => (
                                          <Link
                                            key={childIdx}
                                            href={child.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block p-2.5 text-sm text-gray-600 hover:text-violet-700 hover:bg-violet-50/50 rounded-lg transition-all"
                                          >
                                            {child.title}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all"
                                  >
                                    <div className="text-violet-600 flex items-center justify-center">
                                      {subItem.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-gray-800">
                                          {subItem.title}
                                        </span>
                                        {subItem.badge && (
                                          <span className="px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full border border-violet-200/50">
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      {subItem.tagline && (
                                        <p className="text-xs text-gray-500 mt-0.5">
                                          {subItem.tagline}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </>
                    )}
                  </>
                ) : (
                  /* No Dropdown - Direct Link */
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-sm font-semibold text-gray-800 py-3 px-3 rounded-xl hover:bg-gray-50 hover:text-violet-700 transition-all"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Sticky Bottom Auth Buttons */}
            <div className='sticky bottom-0 bg-white border-t border-gray-100 pt-5 pb-3 px-1 mt-4'>
              {/* <Link href="/login">
                <button className="w-full py-3 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                  Log in
                </button>
              </Link> */}
              <Link href="/start-a-pilot">
                <button className="whidden items-center gap-2 rounded-md bg-[#0876ed] px-5 py-2.5 text-[11px] font-bold text-white shadow-[0_7px_18px_rgba(8,118,237,.2)] transition hover:bg-[#0668d5] sm:flex">
                Start a  Pilot
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header