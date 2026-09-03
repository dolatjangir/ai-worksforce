import React from 'react';
import { 
  Mail, Phone, Linkedin, Twitter, Youtube, Facebook, 
  Users, Zap, ShieldCheck, Tag, Clock, Shield, Globe, 
  Database, Search, Bot, Headset, Rocket, UserCheck, 
  Cpu, Maximize, DollarSign, Activity, Building2, Heart, 
  GraduationCap, Landmark, ShoppingCart, Scale, Briefcase, 
  Truck, Plane, Megaphone, MapPin, ArrowRight
} from 'lucide-react';

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
      <section className="relative w-full overflow-hidden bg-brand-dark">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80')" }}
        />
        
        <div className="relative z-10 px-4 md:px-12 pt-20 pb-40 md:pt-32 md:pb-48 max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[60%] lg:w-[50%]">
            <span className="inline-block bg-brand-purple/20 text-brand-purple-light border border-brand-purple/30 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-6">
              AI-POWERED. HUMAN-DRIVEN. RESULT-FOCUSED.
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your AI Workforce & <br/>Automation Partner <br/>
              <span className="text-brand-purple-light">from India</span>
            </h1>
            <p className="text-slate-300 text-lg mb-10 max-w-xl">
              We help global businesses scale with AI-powered operations, data intelligence, and automation services delivered by our trained teams from Jaipur.
            </p>
            
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 border-t border-slate-700/50 pt-8">
              <div>
                <Users className="text-brand-purple-light mb-2" size={24}/>
                <div className="text-white font-bold text-lg">100+</div>
                <div className="text-slate-400 text-xs">Dedicated Seats</div>
              </div>
              <div>
                <Zap className="text-brand-purple-light mb-2" size={24}/>
                <div className="text-white font-bold text-lg">AI-Powered</div>
                <div className="text-slate-400 text-xs">Delivery</div>
              </div>
              <div>
                <ShieldCheck className="text-brand-purple-light mb-2" size={24}/>
                <div className="text-white font-bold text-lg">Secure &</div>
                <div className="text-slate-400 text-xs">Compliant</div>
              </div>
              <div>
                <Tag className="text-brand-purple-light mb-2" size={24}/>
                <div className="text-white font-bold text-lg">Cost Effective</div>
                <div className="text-slate-400 text-xs">High Quality</div>
              </div>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-purple hover:bg-brand-purple-light text-white px-8 py-3 rounded font-semibold transition">
                Explore Services
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-brand-dark px-8 py-3 rounded font-semibold transition">
                Book a Free Consultation
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col justify-end items-end w-[40%] text-right pt-20">
             <h2 className="text-slate-300/40 font-black text-6xl uppercase leading-none text-right">
                AI <br/>DELIVERED. <br/>IMPACT <br/>MULTIPLIED.
             </h2>
          </div>
        </div>

        {/* Floating Stats Bar */}
        {/* <div className="absolute bottom-0 left-0 w-full px-4 md:px-12 flex justify-end transform translate-y-1/2 hidden md:flex z-20">
          <div className="bg-white rounded-xl shadow-xl flex items-center justify-between p-6 gap-12 w-full max-w-4xl mr-12">
            <div className="flex items-center gap-4">
              <div className="bg-brand-purple/10 p-3 rounded-full"><Users className="text-brand-purple" size={24}/></div>
              <div>
                <div className="font-bold text-brand-dark text-xl">100+</div>
                <div className="text-slate-500 text-sm">Team Size</div>
              </div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-purple/10 p-3 rounded-full"><Clock className="text-brand-purple" size={24}/></div>
              <div>
                <div className="font-bold text-brand-dark text-xl">24/7</div>
                <div className="text-slate-500 text-sm">Operations</div>
              </div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-purple/10 p-3 rounded-full"><Shield className="text-brand-purple" size={24}/></div>
              <div>
                <div className="font-bold text-brand-dark text-xl">99.9%</div>
                <div className="text-slate-500 text-sm">Data Security</div>
              </div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-purple/10 p-3 rounded-full"><Globe className="text-brand-purple" size={24}/></div>
              <div>
                <div className="font-bold text-brand-dark text-xl">Global</div>
                <div className="text-slate-500 text-sm">Clientele</div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Trusted By Section */}
      <section className="bg-slate-50 pt-32 pb-8 px-4 md:px-12 border-b border-slate-200">
        <div className="text-center mb-8">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trusted by Businesses & Agencies Worldwide</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
           {/* Mock Logos since we can't use images */}
           {['AIVIO', 'LeadGenius', 'PropertyMax', 'medixpro', 'ScaleSphere', 'DigitalPeak', 'CRMBoost'].map((logo, i) => (
             <div key={i} className="flex items-center gap-2 text-slate-800 font-bold text-xl">
               <div className="w-6 h-6 bg-slate-300 rounded-sm"></div>
               {logo}
             </div>
           ))}
        </div>
      </section>

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
