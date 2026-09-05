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
  ChevronRight
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
    label: "Ai Agents",
    href: "#ai-agents",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-1_nz99v7.png" className="max-w-20 max-h-20" />,
              title: "Ai Lead Qualification Agent",
              href: "/ai-agents/lead-qualifiction-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-2_l1xdll.png" className="max-w-20 max-h-20" />,
              title: "Ai Property Matching Agent",
              href: "/ai-agents/property-maching-agent",
              badge: "AI"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png" className="max-w-20 max-h-20" />,
              title: "Lead Capture Agent",
              href: "/ai-agents/lead-capture-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-4_damgxf.png" className="max-w-20 max-h-20" />,
              title: "Ai Content Creation Agent",
              href: "/ai-agents/content-creation-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-555_kabvyd.png" className="max-w-20 max-h-20" />,
              title: "Ai  Follow-Up Agent",
              href: "/ai-agents/follow-up-agent",
              badge: "AI"
            },
          ]
        },
        {
          items: [
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-6_mky5rb.png" className="max-w-20 max-h-20" />,
              title: "Ai Calling Agent",
              href: "/ai-agents/calling-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335523/img-7_xjwzbl.png" className="max-w-20 max-h-20" />,
              title: "Ai Campaign Automation Agent",
              href: "/ai-agents/campaign-automation"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png" className="max-w-20 max-h-20" />,
              title: "Data Mining Agent",
              href: "/ai-agents/data-mining-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-9_i1wlut.png" className="max-w-20 max-h-20" />,
              title: "Social Media Agent",
              href: "/ai-agents/social-media-agent"
            },
            {
              icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-10_ajsusz.png" className="max-w-20 max-h-20 rounded-xl" />,
              title: "Ai SEO Content Agent",
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
    label: "Ai WorkForce",
    href: "#ai-workForce",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              title: "AI Automation",
              href: "/features/ai-automation"
            },
            {
              title: "Lead Management",
              href: "/features/smart-lead",
              badge: "AI"
            },
            {
              title: "Property Intelligence",
              href: "/features/property-ai"
            }
          ]
        },
        {
          items: [
            {
              title: "Marketing Automation",
              href: "/features/growth-automation"
            },
            {
              title: "Smart Communication",
              href: "/features/Conversational-ai"
            },
            {
              title: "Analytics & Insights",
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
    label: "Services",
    href: "#services",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              title: "Ai Services",
              href: "/services/ai-agents-development"
            },
            {
              title: "Ai Development",
              href: "/services/workforce-automation"
            },
            {
              title: "Data & Intelligence",
              href: "/services/ai-integration"
            }
          ]
        },
        {
          items: [
            {
              title: "Ai Content & Creative",
              href: "/services/business-process-automation"
            },
            {
              title: "Ai consulting",
              href: "/services/custom-ai-solutions"
            }
          ]
        }
      ],
      footer: {
        text: "Not sure which services fits your business?",
        link: "Talk to Sales →",
        href: "/talk-to-sales"
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
              title: "CRM",
              href: "/industry/agencies",
              children: [
                { title: "Property CRM", href: "/products/crm/property" },
                { title: "Consult CRM", href: "/products/crm/consult" },
                { title: "Airbnb CRM", href: "/products/crm/airbnb" },
                { title: "Bulk CRM", href: "/products/crm/bulk" },
                { title: "AU CRM", href: "/products/crm/au" },
                { title: "WBH CRM", href: "/products/crm/wbh" },
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
    label: "Company",
    href: "#company",
    hasDropdown: true,
    dropdownContent: {
      sections: [
        {
          items: [
            {
              title: "How-It-Works",
              href: "/resources/howitworks"
            },
            {
              title: "About Us",
              href: "/resources/about-us"
            },
            {
              title: "Help Center",
              href: "/resources/help-center"
            },
          ]
        },
        {
          items: [
            {
              title: "our Team",
              href: "/resources/community"
            },
            {
              title: "Careers & Apply",
              href: "/resources/pricing"
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
  {
    label: "Pricing",
    href: "/pricing",
    hasDropdown: false,
  },
  {
    label: "Contact-us",
    href: "/contact-us",
    hasDropdown: false,
  }
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
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white "
      >
        <div className="mx-auto px-4 sm:px-2 lg:px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div
                className=" flex items-center justify-center "
              >
                <Link href="/">  <img width={220} height={150} src="/aiworksforce-logo.png" /></Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeDropdown === item.label
                        ? "text-brand-purple bg-violet-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {activeDropdown === item.label && item.dropdownContent && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ease-out 
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                      ${item.label === "Products" 
                        ? (activeSubmenu ? "w-[480px]" : "w-64") 
                        : item.label === "Ai Agents" 
                          ? "w-[620px]" 
                          : "w-[480px]"
                      }`}>

                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                        {/* Content Grid */}
                        {item.label === "Products" ? (
                          <div className="flex">
                            {/* Left Panel - Categories */}
                            <div className="w-64 p-4 shrink-0">
                              {item.dropdownContent.sections.map((section, idx) => (
                                <div key={idx} className="space-y-1">
                                  {section.items.map((subItem, subIdx) => (
                                    <div
                                      key={subIdx}
                                      className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                                        activeSubmenu === subItem.title
                                          ? "bg-violet-50 text-brand-purple"
                                          : "hover:bg-gray-100 text-gray-900"
                                      }`}
                                      onMouseEnter={() => subItem.children && setActiveSubmenu(subItem.title)}
                                    >
                                      <span className="text-sm font-medium">
                                        {subItem.title}
                                      </span>
                                      {subItem.children && (
                                        <ChevronRight className={`w-4 h-4 transition-colors ${
                                          activeSubmenu === subItem.title ? "text-brand-purple" : "text-gray-400"
                                        }`} />
                                      )}
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                            
                            {/* Right Panel - Submenu */}
                            {activeSubmenu && (
                              <div className="w-56 p-4 border-l border-gray-100 shrink-0">
                                {item.dropdownContent.sections.map((section) => {
                                  const activeSubItem = section.items.find(i => i.title === activeSubmenu);
                                  if (!activeSubItem?.children) return null;
                                  return (
                                    <div key={activeSubItem.title} className="space-y-1">
                                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        {activeSubItem.title}
                                      </h4>
                                      {activeSubItem.children.map((child, childIdx) => (
                                        <Link
                                          key={childIdx}
                                          href={child.href}
                                          className="block p-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-purple transition-colors"
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
                        ) : (
                          <div className="p-6 grid grid-cols-2 gap-8">
                            {item.dropdownContent.sections.map((section, idx) => (
                              <div key={idx} className="space-y-3">
                                <div className="space-y-1">
                                  {section.items.map((subItem, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      href={subItem.href}
                                      className="group flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                    >
                                      <div className="flex-shrink-0 text-brand-purple flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                                        {subItem.icon}
                                      </div>

                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="text-sm font-medium text-gray-900 group-hover:text-brand-purple transition-colors">
                                            {subItem.title}
                                          </span>

                                          {subItem.badge && (
                                            <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-violet-100 text-violet-700 rounded-full">
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
                          <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
                            <span className="text-sm text-gray-600">
                              {item.dropdownContent.footer.text}
                            </span>

                            <Link
                              href={item.dropdownContent.footer.href}
                              className="text-sm font-medium text-brand-purple hover:text-violet-700 flex items-center gap-1 group"
                            >
                              {item.dropdownContent.footer.link}
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/login">
                <button className="text-gray-600 hover:text-brand-purple font-medium transition-colors duration-200">
                  Log in
                </button></Link>
              <Link href="/book-demo">
                <button
                  className="px-6 py-2 bg-brand-purple hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  style={{
                    boxShadow: "0 10px 15px -3px rgba(124, 58, 237, 0.25)",
                  }}
                >
                  Demo Request
                </button></Link>
            </div>

            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {/* humburger */}
        {/* Overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`
            fixed inset-0 bg-black/50 backdrop-blur-sm z-10
            transition-opacity duration-300
            ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        />

        <div
          className={`
            md:hidden
            bg-white
            border-t border-gray-200
            absolute top-0 right-0 w-full max-h-[100vh] overflow-y-auto
            transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
            transform z-20
            ${isMenuOpen
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"}
          `}
        >
          <div className='flex justify-between items-center'>
            <Link href="/">  <img width={200} height={200} className='p-2' src="/assets/makemylead-logo.png" /></Link>
            <div onClick={() => {
              setIsMenuOpen(!isMenuOpen)
              setOpenMobileItem(null)
              setOpenMobileSubItem(null);
            }
            } className={`w-fit absolute p-1 right-2 shadow-xl rounded-md bg-violet-100 ${isMenuOpen ? 'block' : 'hidden'}`}> <X className="w-6 h-6 text-violet-800" /></div></div>
          {/* Mobile Navigation */}
          <div className="px-4 py-6 space-y-6">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-3">

                {/* Check if item has dropdown */}
                {item.hasDropdown ? (
                  <>
                    {/* Dropdown Item - Toggle on click */}
                    <button
                      onClick={() => toggleMobileItem(item.label)}
                      className="w-full flex justify-between items-center text-sm font-semibold text-gray-900 py-2"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openMobileItem === item.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Dropdown Content */}
                    {openMobileItem === item.label && (
                      <>
                        {item.dropdownContent?.sections.map((section, idx) => (
                          <div key={idx} className="space-y-2">
                            {section.items.map((subItem, subIdx) => (
                              <div key={subIdx}>
                                {subItem.children ? (
                                  <>
                                    <button
                                      onClick={() => toggleMobileSubItem(subItem.title)}
                                      className="w-full flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 transition"
                                    >
                                      <div className="flex items-center gap-2">
                                        <div className="text-brand-purple flex items-center justify-center">
                                          {subItem.icon}
                                        </div>
                                        <span className="text-sm font-medium text-gray-900">
                                          {subItem.title}
                                        </span>
                                      </div>
                                      <ChevronDown
                                        className={`w-4 h-4 transition-transform ${openMobileSubItem === subItem.title ? "rotate-180" : ""
                                          }`}
                                      />
                                    </button>
                                    {openMobileSubItem === subItem.title && (
                                      <div className="pl-8 space-y-1">
                                        {subItem.children.map((child, childIdx) => (
                                          <Link
                                            key={childIdx}
                                            href={child.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block p-2 text-sm text-gray-600 hover:text-brand-purple transition-colors"
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
                                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
                                  >
                                    <div className="text-brand-purple flex items-center justify-center">
                                      {subItem.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-900">
                                          {subItem.title}
                                        </span>
                                        {subItem.badge && (
                                          <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-violet-100 text-violet-700 rounded-full">
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
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
                    className="block w-full text-sm font-semibold text-gray-900 py-2 hover:text-brand-purple transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Sticky Bottom Auth Buttons */}
            <div className='sticky bottom-0 bg-white border-t border-gray-100 pt-4'>
              <Link href="/login">
                <button className="w-full py-3 text-gray-600 font-medium">
                  Log in
                </button>
              </Link>
              <Link href="/book-demo">
                <button className="w-full py-3 bg-brand-purple text-white font-semibold rounded-xl mt-2">
                  Demo Request
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