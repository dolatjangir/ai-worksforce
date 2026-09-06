export default function Footer() {
  const aiAgents = [
    { name: "AI Lead Qualification Agent", href: "/ai-agents/lead-qualifiction-agent" },
    { name: "AI Property Matching Agent", href: "/ai-agents/property-maching-agent" },
    { name: "Lead Capture Agent", href: "/ai-agents/lead-capture-agent" },
    { name: "AI Content Creation Agent", href: "/ai-agents/content-creation-agent" },
    { name: "AI Follow-Up Agent", href: "/ai-agents/follow-up-agent" },
    { name: "AI Calling Agent", href: "/ai-agents/calling-agent" },
   
  ];

  const aiWorkForce = [
    { name: "AI Automation", href: "/features/ai-automation" },
    { name: "Lead Management", href: "/features/smart-lead" },
    { name: "Property Intelligence", href: "/features/property-ai" },
    { name: "Marketing Automation", href: "/features/growth-automation" },
    { name: "Smart Communication", href: "/features/Conversational-ai" },
    { name: "Analytics & Insights", href: "/features/Performance-analytics" },
  ];

  const services = [
    { name: "AI Services", href: "/services/ai-agents-development" },
    { name: "AI Development", href: "/services/workforce-automation" },
    { name: "Data & Intelligence", href: "/services/ai-integration" },
    { name: "AI Content & Creative", href: "/services/business-process-automation" },
    { name: "AI Consulting", href: "/services/custom-ai-solutions" },
  ];

  const products = [
    { name: "Property CRM", href: "/products/crm/property" },
    { name: "Consult CRM", href: "/products/crm/consult" },
    { name: "Airbnb CRM", href: "/products/crm/airbnb" },
    { name: "Bulk CRM", href: "/products/crm/bulk" },
    { name: "AU CRM", href: "/products/crm/au" },
    { name: "WBH CRM", href: "/products/crm/wbh" },
    { name: "AI Chatbot Builder", href: "/ai-tools/chatbot-builder" },
    { name: "Workflow Automator", href: "/ai-tools/workflow-automator" },
    { name: "Data Analyzer", href: "/ai-tools/data-analyzer" },
    { name: "Smart Scheduler", href: "/ai-tools/smart-scheduler" },
    { name: "Content Generator", href: "/ai-tools/content-generator" },
  ];

  const company = [
    { name: "How It Works", href: "/resources/howitworks" },
    { name: "About Us", href: "/resources/about-us" },
    { name: "Help Center", href: "/resources/help-center" },
    { name: "Our Team", href: "/resources/community" },
    { name: "Careers & Apply", href: "/resources/pricing" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const social = [
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-white border-t border-gray-100">
      {/* Top accent line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <img src="/aiworksforce-logo.png" alt="AIWorksForce Logo" className="h-20 w-auto" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              AI-powered workforce platform. Automate leads, manage properties, and scale your business with intelligent agents.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 hover:text-violet-600 hover:border-violet-200 hover:bg-violet-50 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

 <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
              AI Agents
            </h4>
            <ul className="space-y-2.5">
               {aiAgents.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-violet-600 transition-colors text-[13px] font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-violet-400 transition-colors" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* company */}
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
               {products.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-violet-600 transition-colors text-[13px] font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-violet-400 transition-colors" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI WorkForce */}
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
              AI WorkForce
            </h4>
            <ul className="space-y-2.5">
              {aiWorkForce.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-violet-600 transition-colors text-[13px] font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-violet-400 transition-colors" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-violet-600 transition-colors text-[13px] font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-violet-400 transition-colors" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
        </div>

        {/* CTA Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 border border-violet-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h4 className="text-gray-900 font-bold text-base">Ready to transform your workflow?</h4>
            <p className="text-gray-500 text-sm mt-1">Book a demo and see our AI agents in action.</p>
          </div>
          <a
            href="/book-demo"
            className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book a Demo
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs font-medium">
            © {new Date().getFullYear()} AIWorksForce. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-gray-400">
            <a href="#privacy" className="hover:text-violet-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-violet-600 transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-violet-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}