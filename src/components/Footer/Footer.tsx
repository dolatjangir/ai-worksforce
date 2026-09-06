export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061a39] px-5 py-9 text-white md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-9">
                <span className="absolute text-3xl font-black text-blue-500">
                  M
                </span>
                <span className="absolute left-1 text-3xl font-black text-purple-500">
                  N
                </span>
              </div>
              <span className="text-base font-extrabold">AIWorkforce</span>
            </div>
            <p className="mt-1 text-xs text-blue-100">
              AI Agents. Human Experts. Managed Results.
            </p>
            <p className="mt-6 text-xs text-blue-200">
              © {currentYear} AIWorkforce. All rights reserved.
            </p>
          </div>

          <FooterColumn
            title="Solutions"
            items={[
              { name: "AI Data Operations", href: "#" },
              { name: "AI Research & KPO", href: "#" },
              { name: "AI Automation", href: "#" },
              { name: "AI Customer Operations", href: "#" },
              { name: "AI Evaluation", href: "#" },
              { name: "White-Label AI Delivery", href: "#" },
            ]}
          />

          <FooterColumn
            title="Managed Teams"
            items={[
              { name: "5 People Pilot", href: "#" },
              { name: "10 People AI Pod", href: "#" },
              { name: "25 People Team", href: "#" },
              { name: "50 People Team", href: "#" },
              { name: "100+ Delivery Center", href: "#" },
            ]}
          />

          <FooterColumn
            title="Partners"
            items={[
              { name: "White-Label AI", href: "#" },
              { name: "Agency Partners", href: "#" },
              { name: "BPO/KPO Partners", href: "#" },
              { name: "Technology Partners", href: "#" },
            ]}
          />

          <FooterColumn
            title="Company"
            items={[
              { name: "About Us", href: "#" },
              { name: "Our Delivery Center", href: "#" },
              { name: "Careers", href: "#" },
              { name: "Contact", href: "#" },
            ]}
          />

          <FooterColumn
            title="Resources"
            items={[
              { name: "Case Studies", href: "#" },
              { name: "Insights", href: "#" },
              { name: "Security & Compliance", href: "#" },
              { name: "FAQs", href: "#" },
            ]}
          />
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-blue-200 md:flex-row">
          <span>© {currentYear} AIWorkforce. All rights reserved.</span>

          <div className="flex gap-5">
            <a href="#privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition hover:text-white">
              Terms of Service
            </a>
            <a href="#sitemap" className="transition hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
    //     <footer className="relative bg-white border-t border-gray-100">
//       {/* Top accent line */}
//       <div className="h-[1px] w-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500" />

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7">
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">

//           {/* Brand Column */}
//           <div className="col-span-2 md:col-span-3 lg:col-span-2">
//             <div className="flex items-center gap-2 mb-5">
//               <img src="/aiworksforce-logo.png" alt="AIWorksForce Logo" className="h-20 w-auto" />
//             </div>
//             <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
//               AI-powered workforce platform. Automate leads, manage properties, and scale your business with intelligent agents.
//             </p>

//             {/* Social Links */}
//             <div className="mt-6 flex items-center gap-2">
//               {social.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 hover:text-violet-600 hover:border-violet-200 hover:bg-violet-50 transition-all duration-200"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={item.name}
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//  <div>
//             <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
//               AI Agents
//             </h4>
//             <ul className="space-y-2.5">
//                {aiAgents.map((item) => (
//                 <li key={item.name}>
//                   <a
//                     href={item.href}
//                     className="text-gray-500 hover:text-violet-600 transition-colors text-[13px] font-medium flex items-center gap-1.5 group"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-violet-400 transition-colors" />
//                     <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* company */}
//           <div>
//             <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
//               Company
//             </h4>
//             <ul className="space-y-2.5">
//                {products.slice(0, 6).map((item) => (
//                 <li key={item.name}>
//                   <a
//                     href={item.href}
//                     className="text-gray-500 hover:text-violet-600 transition-colors text-[13px] font-medium flex items-center gap-1.5 group"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-violet-400 transition-colors" />
//                     <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* AI WorkForce */}
//           <div>
//             <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
//               AI WorkForce
//             </h4>
//             <ul className="space-y-2.5">
//               {aiWorkForce.map((item) => (
//                 <li key={item.name}>
//                   <a
//                     href={item.href}
//                     className="text-gray-500 hover:text-violet-600 transition-colors text-[13px] font-medium flex items-center gap-1.5 group"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-violet-400 transition-colors" />
//                     <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-4">
//               Services
//             </h4>
//             <ul className="space-y-2.5">
//               {services.map((item) => (
//                 <li key={item.name}>
//                   <a
//                     href={item.href}
//                     className="text-gray-500 hover:text-violet-600 transition-colors text-[13px] font-medium flex items-center gap-1.5 group"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-violet-400 transition-colors" />
//                     <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

         
//         </div>

//         {/* CTA Banner */}
//         <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 border border-violet-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
//           <div>
//             <h4 className="text-gray-900 font-bold text-base">Ready to transform your workflow?</h4>
//             <p className="text-gray-500 text-sm mt-1">Book a demo and see our AI agents in action.</p>
//           </div>
//           <a
//             href="/book-demo"
//             className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:-translate-y-0.5 whitespace-nowrap"
//           >
//             Book a Demo
//           </a>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-4 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-gray-400 text-xs font-medium">
//             © {new Date().getFullYear()} AIWorksForce. All rights reserved.
//           </p>
//           <div className="flex items-center gap-6 text-xs font-medium text-gray-400">
//             <a href="#privacy" className="hover:text-violet-600 transition-colors">Privacy Policy</a>
//             <a href="#terms" className="hover:text-violet-600 transition-colors">Terms of Service</a>
//             <a href="#cookies" className="hover:text-violet-600 transition-colors">Cookie Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { name: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-extrabold text-white">{title}</h3>

      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-xs text-blue-100 transition hover:text-white"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
 }