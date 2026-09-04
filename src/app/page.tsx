import React from 'react';
import { 
  Mail, Phone, Linkedin, Twitter, Youtube, Facebook, 
  Users, Zap, ShieldCheck, Tag, Clock, Shield, Globe, 
  Database, Search, Bot, Headset, Rocket, UserCheck, 
  Cpu, Maximize, DollarSign, Activity, Building2, Heart, 
  GraduationCap, Landmark, ShoppingCart, Scale, Briefcase, 
  Truck, Plane, Megaphone, MapPin, ArrowRight
} from 'lucide-react';
import CyclingText from '@/components/cyclingtext';


export default function Home() {
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* Top Bar */}
      {/* <div className="bg-brand-dark text-slate-300 text-xs py-2 px-4 md:px-12 flex justify-between items-center hidden sm:flex">
        <div className="text-gray-400">AI Delivery Center in Jaipur, India</div>
        <div className="flex items-center gap-6">
          <a href="mailto:careers@jaipuraidc.com" className="flex items-center gap-2 hover:text-white transition"><Mail size={14}/> careers@jaipuraidc.com</a>
          <a href="tel:+917230012345" className="flex items-center gap-2 hover:text-white transition"><Phone size={14}/> +91 72300 12345</a>
          <div className="flex items-center gap-3 ml-2 border-l border-slate-700 pl-4">
            <a href="#" className="hover:text-white"><Linkedin size={14}/></a>
            <a href="#" className="hover:text-white"><Twitter size={14}/></a>
            <a href="#" className="hover:text-white"><Youtube size={14}/></a>
            <a href="#" className="hover:text-white"><Facebook size={14}/></a>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      {/* <header className="bg-white sticky top-0 z-50 shadow-sm px-4 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
       
          <div className="w-8 h-8 bg-brand-purple rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">J</span>
          </div>
          <div>
            <h1 className="font-extrabold text-brand-dark text-xl leading-tight">JAIPUR</h1>
            <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest">AI Delivery Center</p>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#" className="text-brand-purple">Home</a>
          <a href="#" className="hover:text-brand-purple transition">Services</a>
          <a href="#" className="hover:text-brand-purple transition">Industries</a>
          <a href="#" className="hover:text-brand-purple transition">Solutions</a>
          <a href="#" className="hover:text-brand-purple transition">Why Us</a>
          <a href="#" className="hover:text-brand-purple transition">Resources</a>
          <a href="#" className="hover:text-brand-purple transition">About Us</a>
          <a href="#" className="hover:text-brand-purple transition">Careers</a>
        </nav>

        <button className="hidden md:block bg-brand-dark text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-slate-800 transition">
          Let's Talk
        </button>
      </header> */}

      {/* Hero Section */}
     <section className="relative w-full overflow-hidden bg-blue-50">
  {/* Desktop: Background Image - Right Side */}
  <div className="hidden md:block absolute top-0 right-0 w-[58%] lg:w-[55%] h-full">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
      style={{ backgroundImage: "url('/workforce.png')" }}
    />
    {/* Blue-200 shadow on left 18% of image for sharp-corner blend */}
    <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-blue-50 via-blue-5/40 to-transparent" />
  </div>

  {/* Mobile: Background image with blue overlay so text stays readable */}
  <div className="md:hidden absolute inset-0">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/workforce.png')" }}
    />
    <div className="absolute inset-0 bg-blue-200/85" />
  </div>
  
  <div className="relative z-10 px-5 sm:px-8 md:px-8 pt-20 pb-24 md:pb-32 md:pt-28 lg:pt-32 max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
    <div className="w-full md:w-[55%] lg:w-[50%] ">
       <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase mb-4">
          Your 24/7 AI Workforce
        </p>
       <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-brand-dark leading-[1.1] mb-6">
          Your AI Workforce & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Automation Partner</span>
        </h1>
       <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed">
        We help global businesses scale with AI-powered operations, data intelligence, and automation services delivered by our trained teams.
        </p>
      
       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 md:mb-16">
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 flex items-center justify-center gap-2">
            Build Your AI Workforce
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="group border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-7 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm">
            <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            See How It Works
          </button>
        </div>
          {/* Three Feature Pills */}
        {/* <div className="flex flex-wrap gap-6 md:gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg className="w-4.5 h-4.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Automate</p>
              <p className="text-xs text-slate-500">Repetitive Work</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center">
              <svg className="w-4.5 h-4.5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Boost</p>
              <p className="text-xs text-slate-500">Productivity</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center">
              <svg className="w-4.5 h-4.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Focus on</p>
              <p className="text-xs text-slate-500">What Matters</p>
            </div>
          </div>
        </div> */}
         {/* Bottom Tagline */}
         <div className="mt-10 ">
          <p className="text-[10px] md:text-xs tracking-[0.3em] text-slate-400 font-medium uppercase">
            Real Intelligence. Real Impact.
          </p>
          <div className="w-12 h-0.5 bg-blue-400/50 mt-2 rounded-full" />
        </div>
    </div>
    
    {/* Desktop decorative watermark text */}
    <div className="hidden md:flex flex-col justify-end items-end w-[40%] text-right pt-20 pointer-events-none">
       <h2 className="text-brand-dark/[0.06] font-black text-5xl lg:text-6xl uppercase leading-none text-right select-none">
          AI <br/>DELIVERED. <br/>IMPACT <br/>MULTIPLIED.
       </h2>
    </div>
  </div>
</section>

      {/* Trusted By Section */}
      {/* <section className="bg-slate-50 pt-32 pb-8 px-4 md:px-12 border-b border-slate-200">
        <div className="text-center mb-8">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trusted by Businesses & Agencies Worldwide</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
        
           {['AIVIO', 'LeadGenius', 'PropertyMax', 'medixpro', 'ScaleSphere', 'DigitalPeak', 'CRMBoost'].map((logo, i) => (
             <div key={i} className="flex items-center gap-2 text-slate-800 font-bold text-xl">
               <div className="w-6 h-6 bg-slate-300 rounded-sm"></div>
               {logo}
             </div>
           ))}
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="text-center mb-16">
          <span className="text-brand-purple font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-brand-purple"></span> What We Do <span className="w-4 h-px bg-brand-purple"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-4">Our AI-Powered Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 max-w-7xl mx-auto">
          {[
            { icon: <Database/>, title: "AI Data Operations", desc: "Data annotation, AI evaluation, labeling, validation, enrichment and transcription at scale.", color: "bg-purple-100 text-purple-600" },
            { icon: <Search/>, title: "AI KPO & Research", desc: "Market research, lead intelligence, data analytics, company profiling and business insights.", color: "bg-green-100 text-green-600" },
            { icon: <Bot/>, title: "AI Automation", desc: "AI agents, workflow automation, CRM automation, WhatsApp, email & calling automation.", color: "bg-blue-100 text-blue-600" },
            { icon: <Headset/>, title: "AI-BPO Services", desc: "Lead qualification, customer support, verification, data entry, back-office and more.", color: "bg-orange-100 text-orange-600" },
            { icon: <Rocket/>, title: "White-label AI Agency", desc: "You sell, we build. White-label AI solutions for agencies worldwide.", color: "bg-pink-100 text-pink-600" },
            { icon: <Users/>, title: "Dedicated AI Teams", desc: "10/25/50/100 seat managed teams with TL, QA, tools and reporting.", color: "bg-teal-100 text-teal-600" }
          ].map((srv, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl p-2 hover:shadow-xl transition-shadow bg-white text-center flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${srv.color}`}>
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{srv.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">{srv.desc}</p>
              <a href="#" className="text-brand-purple font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight size={16}/>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-brand-dark text-white px-8 py-3 rounded font-semibold hover:bg-slate-800 transition shadow-lg">
            View All Services
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 md:px-12 bg-slate-50 border-t border-slate-100">
         <div className="text-center mb-16">
          <span className="text-brand-purple font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-brand-purple"></span> Why Choose Us <span className="w-4 h-px bg-brand-purple"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-4">Your Advantage. Our Commitment.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-7xl mx-auto">
           {[
            { icon: <UserCheck size={28}/>, title: "Skilled & Trained Workforce", desc: "Trained in AI, data, automation and customer operations with continuous upskilling." },
            { icon: <Cpu size={28}/>, title: "AI + Human Collaboration", desc: "We combine AI tools with human intelligence to deliver accurate and scalable results." },
            { icon: <ShieldCheck size={28}/>, title: "Secure & Compliant Operations", desc: "NDA, ISO-ready processes, role-based access and strict data security." },
            { icon: <Maximize size={28}/>, title: "Scalable & Flexible Engagement", desc: "Dedicated teams, project-based or outcome-based engagement models." },
            { icon: <DollarSign size={28}/>, title: "Cost Effective High Quality", desc: "Delivering enterprise-quality output at a fraction of global operational costs." },
            { icon: <Activity size={28}/>, title: "Performance Driven", desc: "SLA driven delivery with real-time reporting, QA and continuous improvement." }
          ].map((feat, i) => (
             <div key={i} className="flex flex-col text-left">
               <div className="flex items-center gap-4 mb-4">
                 <div className="text-brand-purple">{feat.icon}</div>
                 <h3 className="text-lg font-bold text-brand-dark">{feat.title}</h3>
               </div>
               <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 md:px-12 bg-white border-t border-slate-100">
         <div className="text-center mb-16">
          <span className="text-brand-purple font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-brand-purple"></span> Industries We Serve <span className="w-4 h-px bg-brand-purple"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-4">Industry-Focused AI Solutions</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 max-w-7xl mx-auto">
          {[
            { icon: <Building2 size={32}/>, name: "Real Estate" },
            { icon: <Heart size={32}/>, name: "Healthcare" },
            { icon: <GraduationCap size={32}/>, name: "Education" },
            { icon: <Landmark size={32}/>, name: "Finance &\nInsurance" },
            { icon: <ShoppingCart size={32}/>, name: "E-commerce" },
            { icon: <Scale size={32}/>, name: "Legal" },
            { icon: <Briefcase size={32}/>, name: "Recruitment" },
            { icon: <Truck size={32}/>, name: "Logistics" },
            { icon: <Plane size={32}/>, name: "Travel &\nHospitality" },
            { icon: <Megaphone size={32}/>, name: "Marketing\nAgencies" }
          ].map((ind, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center p-4 rounded-xl hover:bg-slate-50 transition cursor-pointer border border-transparent hover:border-slate-100">
              <div className="text-brand-purple/70 mb-4">{ind.icon}</div>
              <span className="text-xs font-bold text-brand-dark whitespace-pre-line">{ind.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-brand-dark p-8 md:p-12 rounded-3xl border border-slate-800">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Ready to Scale with AI?</h2>
            <p className="text-slate-400">Let's build your AI-powered operations together.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <button className="bg-brand-purple hover:bg-brand-purple-light text-white px-8 py-4 rounded font-semibold transition whitespace-nowrap">
                Schedule a Call
              </button>
              <button className="border border-slate-600 text-white hover:bg-slate-800 px-8 py-4 rounded font-semibold transition whitespace-nowrap flex items-center justify-center gap-2">
                <Phone size={18}/> WhatsApp Us
              </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-brand-darker pt-16 pb-8 px-4 md:px-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 text-sm">
          
          <div className="lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-purple rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <div>
                  <h1 className="font-extrabold text-white text-lg leading-tight">JAIPUR</h1>
                  <p className="text-[8px] font-semibold text-slate-500 uppercase tracking-widest">AI Delivery Center</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                AI-powered managed services and automation delivery center from Jaipur, India.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white border border-slate-700 p-2 rounded-full"><Linkedin size={16}/></a>
                <a href="#" className="text-slate-400 hover:text-white border border-slate-700 p-2 rounded-full"><Twitter size={16}/></a>
                <a href="#" className="text-slate-400 hover:text-white border border-slate-700 p-2 rounded-full"><Youtube size={16}/></a>
                <a href="#" className="text-slate-400 hover:text-white border border-slate-700 p-2 rounded-full"><Facebook size={16}/></a>
              </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-purple transition">AI Data Operations</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">AI KPO & Research</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">AI Automation</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">AI-BPO Services</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">White-label AI Agency</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">Dedicated AI Teams</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-purple transition">About Us</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">Why Us</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">Careers</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">Blog</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">Resources</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-purple transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">Whitepapers</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">FAQs</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-purple transition">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-purple mt-1 flex-shrink-0" size={18}/>
                <span>C-203, AI Delivery Center,<br/>Sitapura Industrial Area,<br/>Jaipur, Rajasthan - 302022, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-purple flex-shrink-0" size={18}/>
                <span>+91 72300 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-purple flex-shrink-0" size={18}/>
                <a href="mailto:hello@jaipuraidc.com" className="hover:text-white transition">hello@jaipuraidc.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © 2024 Jaipur AI Delivery Center. All Rights Reserved.
        </div>
      </footer> */}
    </div>
  );
}
// // app/page.tsx

// import CTA from "@/components/CTA/CTA";
// import Ecosystem from "@/components/Ecosystem/Ecosystem";
// import CoreFeatures from "@/components/Features/CoreFeatures";
// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import Hero from "@/components/Hero/Hero";
// import Industries from "@/components/Industries/Industries";
// // import NewsletterPopup from "@/components/newsletter/Popup";
// import ProductGrid from "@/components/Products/ProductGrid";
// import Whyus from "@/components/Whyus/Whyus";


// export default function HomePage() {
//   return (
//     <div className="">
      
//       <main className="flex flex-col pt-[64px] ">
//         {/* <NewsletterPopup/> */}
//         {/* Hero Section */}
//         <Hero />

//         {/* Ecosystem Overview */}
//         <Ecosystem />

//         {/* Industry-Specific CRM Products */}
//         <ProductGrid />

//         {/* Core Platform Features */}
//         <CoreFeatures />

//         {/* Industries Served */}
//         <Industries />

//         {/* Why Choose ibigdata */}
//         <Whyus />

//         {/* Call To Action */}
//         <CTA />
//       </main>

     
//     </div>
//   );
// }
