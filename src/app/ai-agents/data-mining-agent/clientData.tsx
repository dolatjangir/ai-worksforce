// app/data-mining-agent/page.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Database,
  Search,
  Filter,
  BarChart3,
  PieChart,
  TrendingUp,
  Globe,
  Zap,
  Target,
  Layers,
  Brain,
  Shield,
  CheckCircle2,
  ArrowRight,
  Star,
  Sparkles,
  Play,
  Pause,
  RefreshCw,
  ChevronRight,
  Bot,
  Download,
  FileText,
  Eye,
  Lock,
  Server,
  Cpu,
  Activity,
  MoreHorizontal,
  X
} from 'lucide-react';
export default function DataMiningAgentLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [miningStatus, setMiningStatus] = useState<'idle' | 'mining' | 'complete'>('idle');
  const [progress, setProgress] = useState(0);
  const [insights, setInsights] = useState<{type: string, value: string, trend: 'up' | 'down'}[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [email, setEmail] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const startMining = () => {
    setMiningStatus('mining');
    setProgress(0);
    setInsights([]);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setMiningStatus('complete');
          setInsights([
            { type: 'Customer Churn Risk', value: '23% identified', trend: 'down' },
            { type: 'High-Value Segments', value: '4 discovered', trend: 'up' },
            { type: 'Revenue Opportunity', value: '$2.4M potential', trend: 'up' },
            { type: 'Anomalies Detected', value: '12 flagged', trend: 'down' }
          ]);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };
  // Verify these supplied performance figures before publication.
  const stats = [
    { value: '10M+', label: 'Data Points Processed', subtext: 'Data mining' },
    { value: '99.9%', label: 'Data Accuracy', subtext: 'AI-powered validation' },
    { value: '50×', label: 'Faster Data Research', subtext: 'vs manual analysis' },
    { value: '24/7', label: 'AI-Powered Intelligence', subtext: 'Real-time alerts' },
  ];
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Data Mining",
      description: "Discover valuable information from large and complex datasets with AI-powered data mining. Identify relevant businesses, prospects, market signals, patterns, and opportunities while reducing manual research.",
      stat: 'AI',
      statLabel: 'Data Mining'
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Smart Data Cleaning & Enrichment",
      description: "Clean, organize, and enrich your business data with AI. Identify incomplete, duplicate, outdated, and inconsistent records and turn fragmented information into accurate, usable datasets.",
      stat: 'AI',
      statLabel: 'Data Enrichment'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Predictive Business Analytics",
      description: "Turn business data into actionable insights with AI-powered analysis. Identify customer patterns, market trends, prospect opportunities, and business signals.",
      stat: 'AI',
      statLabel: 'Business Intelligence'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy-First Data Mining",
      description: "Build valuable business intelligence with responsible data processing, structured workflows, data quality controls, and privacy-conscious practices.",
      stat: 'Privacy',
      statLabel: 'Responsible Data Processing'
    }
  ];
  const dataSources = [
    { name: 'CRM', icon: <Database className="w-5 h-5" />, status: 'connected', records: '2.4M' },
    { name: 'Website', icon: <Globe className="w-5 h-5" />, status: 'connected', records: '890K' },
    { name: 'Analytics', icon: <BarChart3 className="w-5 h-5" />, status: 'connected', records: '5.1M' },
    { name: 'Social', icon: <Activity className="w-5 h-5" />, status: 'connected', records: '1.2M' },
    { name: 'Support', icon: <FileText className="w-5 h-5" />, status: 'syncing', records: '456K' },
    { name: 'Sales', icon: <TrendingUp className="w-5 h-5" />, status: 'connected', records: '3.8M' },
  ];
  const testimonials = [
    {
      quote: "From sales and marketing to research and operations, AI-powered data mining helps teams transform information into actionable business intelligence.",
      author: "B2B Data Mining; AI Prospect Data",
      role: "AI Data Mining Use Cases",
      metric: "Faster Research",
      metricLabel: " • Smarter Prospecting",
      avatar: "B2B",
      gradient: "from-[var(--color-primary-500)] to-[var(--color-primary-700)]"
    },
    {
      quote: "Turn raw and scattered business data into actionable intelligence with AI-powered data mining, analysis, enrichment, and automation. Our AI data mining solutions help businesses discover valuable information, identify prospects, understand markets, enrich business data, and make faster data-driven decisions.",
      author: "AI Lead Database; AI Market Intelligence",
      role: "AI Data Mining Use Cases",
      metric: "Actionable Insights",
      metricLabel: " • Scalable Intelligence",
      avatar: "AI",
      gradient: "from-[var(--color-secondary-500)] to-[var(--color-secondary-700)]"
    },
    {
      quote: "Build valuable business intelligence with responsible data processing, structured workflows, data quality controls, and privacy-conscious practices.",
      author: "AI Data Enrichment; AI Research & Data Analysis",
      role: "AI Data Mining Use Cases",
      metric: "Better Data Quality",
      metricLabel: " • Data-Driven Decisions",
      avatar: "BI",
      gradient: "from-[var(--color-primary-400)] to-[var(--color-secondary-500)]"
    }
  ];
  return (
    <main className="min-h-screen bg-[var(--color-primary-50)] text-[var(--color-primary-900)] font-sans overflow-x-hidden selection:bg-[var(--color-primary-200)] selection:text-[var(--color-primary-900)]">
      {/* Background Effects - Tailwind Only */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,204,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        {/* Animated Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full mix-blend-multiply blur-[100px] opacity-30 animate-pulse bg-[var(--color-primary-300)] transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x * 30}%`,
            top: `${mousePosition.y * 30}%`
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply blur-[100px] opacity-20 animate-pulse bg-[var(--color-secondary-300)] transition-all duration-500 ease-out"
          style={{
            right: `${(1 - mousePosition.x) * 20}%`,
            bottom: `${(1 - mousePosition.y) * 20}%`,
            animationDelay: '2s'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-100)]/30 via-transparent to-[var(--color-secondary-100)]/30" />
      </div>
      {/* HERO SECTION */}
         <section ref={heroRef} 
                 className="relative min-h-screen flex items-center px-4 py-20 overflow-hidden perspective-1000">
                <div className="max-w-7xl mx-auto w-full relative z-10">
                  <div className="grid lg:grid-cols-12  items-center">
                      {/* Left: Content */}
                         <div
                           className={`lg:col-span-7 xl:col-span-7 transition-all order-2 lg:order-1 py-10 duration-1000 ${
                             isVisible
                               ? "opacity-100 translate-y-0"
                               : "opacity-0 translate-y-10"
                           }`}
                         >
                           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold  leading-[0.9] mb-8 tracking-tight text-[var(--color-primary-800)]">
AI Data Mining &{" "} <br/>
                             <span className="relative inline-block">
                               <span className="text-gradient animate-gradient">
                             Business Intelligence 
                               </span>                       
                             </span>
                           </h1>
                           <p className="text-lg sm:text-xl text-[#0057ad] mb-10 max-w-xl leading-relaxed font-light">
                     Turn complex business data into actionable insights, qualified prospects, market intelligence, and growth opportunities with AI-powered data mining.             <span className="text-[#0066cc] font-medium">
                               {" "}
                             
                             </span>
                           </p>
                          {/* Email Capture */}
                                       <div className="flex flex-col sm:flex-row gap-4 max-w-lg mb-8">
                                         <div className="flex-1 relative">
                                           <input 
                                             type="email" 
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             placeholder="Enter your email"
                                             className="w-full px-6 py-3 rounded-2xl bg-white border-2 border-[#99ccff] text-[#003871] placeholder:text-[#3399ff] focus:outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-[#cce5ff] transition-all text-lg shadow-sm"
                                           />
                                         </div>
                                         <button className="px-4 py-2 rounded-2xl bg-[#0066cc] hover:bg-[#0057ad] text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#cce5ff] flex items-center justify-center gap-2 group whitespace-nowrap">
                                          Start Data Mining
                                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                         </button>
                                       </div>
                           {/* Features */}
                           <div className="flex items-center gap-6 text-sm text-[#0066cc] flex-wrap">
                             <div className="flex items-center gap-2">
                               <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                               <span>Free 14-day trial</span>
                             </div>
                             <div className="flex items-center gap-2">
                               <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                               <span>No credit card</span>
                             </div>
                             <div className="flex items-center gap-2">
                               <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                               <span>5-min setup</span>
                             </div>
                           </div>
                         </div>
                    {/* Right: Property Matching Interface */}
                  <div
                className={`lg:col-span-5 xl:col-span-5  relative  order-1 lg:order-2 sm:right-10  flex items-center justify-center transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative transform-style-3d">
                  <img
                    src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774342812/data-mining_susfki.png"
                    alt="AI Robot"
                    className="w-[100%] max-w-none lg:w-[90%] xl:w-[70%] object-contain translate-x-2 lg:translate-x-10"
                  />
                </div>
              </div>
                  </div>
                   {/* Stats Bar */}
               <div className={`mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                 {stats.map((stat, idx) => (
                   <div key={idx} className="glass rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 group border border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] shadow-sm hover:shadow-md">
                     <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform inline-block">
                       {stat.value}
                     </div>
                     <div className="text-sm font-semibold text-[var(--color-primary-900)] mb-1">{stat.label}</div>
                     <div className="text-xs text-[var(--color-primary-600)]">{stat.subtext}</div>
                   </div>
                 ))}
               </div>
                </div>
              </section>
      {/* FEATURES - Bento Grid */}
      <section className="relative py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-sm font-medium text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Capabilities</span>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
              AI Data Mining &{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h2>
            <p className="text-lg text-[var(--color-primary-700)]">
              Turn raw and scattered business data into actionable intelligence with AI-powered data mining, analysis, enrichment, and automation. Our AI data mining solutions help businesses discover valuable information, identify prospects, understand markets, enrich business data, and make faster data-driven decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`bg-white/70 backdrop-blur-xl rounded-3xl p-8 hover:bg-white transition-all duration-500 group border border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] shadow-sm hover:shadow-lg ${idx === 0 || idx === 3 ? 'lg:col-span-2' : ''}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-primary-200)] flex items-center justify-center text-[var(--color-primary-600)] mb-6 group-hover:scale-110 transition-transform border border-[var(--color-primary-300)]">
                  {feature.icon}
                </div>
                <div className="flex items-end gap-3 mb-3">
                  <h3 className="text-xl font-bold text-[var(--color-primary-900)]">{feature.title}</h3>
                  <span className="text-xl font-bold text-[var(--color-primary-600)] mb-1">{feature.stat}</span>
                </div>
                <p className="text-[var(--color-primary-700)] leading-relaxed mb-4">{feature.description}</p>
                <div className="text-xs text-[var(--color-primary-600)] font-medium uppercase tracking-wider">{feature.statLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section className="relative py-10 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-medium text-[var(--color-primary-600)] uppercase tracking-widest mb-4">How It Works</span>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
              From Raw Data to{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-[var(--color-primary-400)] via-[var(--color-secondary-400)] to-[var(--color-primary-600)]" />
            {[
              {
                step: '01',
                icon: <Database className="w-6 h-6" />,
                title: 'Connect Your Data',
                description: 'Bring together data from your CRM, databases, websites, spreadsheets, business systems, and other relevant sources.'
              },
              {
                step: '02',
                icon: <Cpu className="w-6 h-6" />,
                title: 'AI Mines & Enriches',
                description: 'AI processes large datasets, discovers relevant information, cleans records, identifies patterns, and enriches business and prospect data.'
              },
              {
                step: '03',
                icon: <PieChart className="w-6 h-6" />,
                title: 'Insights Delivered',
                description: 'Transform processed data into actionable intelligence for sales, marketing, research, operations, and strategic decision-making.'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 h-full hover:bg-white transition-all duration-500 border border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] shadow-sm hover:shadow-lg">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[var(--color-primary-300)]">
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-100)] flex items-center justify-center text-[var(--color-primary-600)] mb-6 border border-[var(--color-primary-200)]">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-primary-900)] mb-3">{item.title}</h3>
                    <p className="text-[var(--color-primary-700)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* DATA SOURCES SHOWCASE */}
      <section className="relative py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-medium text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Integrations</span>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
              Connect Your{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                Business Data
              </span>
            </h2>
            <p className="text-xl text-[var(--color-primary-700)] max-w-2xl mx-auto">
              Bring data from multiple sources together to create a unified foundation for AI data mining, data enrichment, and business intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["CRM Data", "Business Databases", "Websites", "Spreadsheets", "Sales Data", "Marketing Data", "Customer Data", "Market Data", "Prospect Data", "Research Data", "Analytics Data", "Internal Business Data"].map((source, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 hover:bg-white transition-all duration-500 group border border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] shadow-sm hover:shadow-lg text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-primary-200)] flex items-center justify-center text-[var(--color-primary-600)] mx-auto mb-3 group-hover:scale-110 transition-transform border border-[var(--color-primary-300)]">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-primary-900)]">{source}</h3>
              </div>
            ))}
          </div>
          {/* Security Badge */}
          <div className="mt-12 bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-[var(--color-primary-200)] shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center shadow-lg shadow-[var(--color-primary-300)]">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-primary-900)]">Enterprise-Grade Data Security</h3>
                  <p className="text-[var(--color-primary-600)]">Secure data processing, controlled access, privacy-conscious workflows, and responsible data handling for your business information.</p>
                </div>
              </div>
              <div className="flex gap-4">
                {['Data Quality', 'Privacy', 'Responsible Handling', 'Controlled Access'].map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm font-medium border border-[var(--color-primary-200)]">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="relative py-10 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-medium text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Business Intelligence</span>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
              Data Teams Trust{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                AI-Powered Intelligence
              </span>
            </h2>
            <p className="text-xl text-[var(--color-primary-700)]">From sales and marketing to research and operations, AI-powered data mining helps teams transform information into actionable business intelligence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 relative group hover:bg-white transition-all duration-500 border border-[var(--color-primary-200)] hover:border-[var(--color-primary-400)] shadow-sm hover:shadow-lg">
                <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform`}>
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white text-sm font-bold mb-4`}>
                    <TrendingUp className="w-4 h-4" />
                    {testimonial.metric} {testimonial.metricLabel}
                  </div>
                  <p className="text-[var(--color-primary-800)] text-lg leading-relaxed">{testimonial.quote}</p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-primary-200)]">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-primary-900)]">{testimonial.author}</div>
                    <div className="text-sm text-[var(--color-primary-600)]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ANALYTICS SHOWCASE */}
      <section className="relative py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-medium text-[var(--color-primary-600)] uppercase tracking-widest mb-4">Analytics</span>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
              Visualize Your{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h2>
            <p className="text-xl text-[var(--color-primary-700)]">Transform mined data into dashboards, trends, reports, and actionable insights that help your team understand what is happening and what to do next.</p>
          </div>
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-[var(--color-primary-200)] shadow-lg">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Chart 1 */}
              <div className="bg-[var(--color-primary-50)] rounded-2xl p-6 border border-[var(--color-primary-200)]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-[var(--color-primary-900)]">Revenue Trends</h4>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">+24%</span>
                </div>
                <div className="h-32 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-[var(--color-primary-600)] to-[var(--color-primary-400)] rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-[var(--color-primary-600)]">
                  <span>Jan</span>
                  <span>Dec</span>
                </div>
              </div>
              {/* Chart 2 */}
              <div className="bg-[var(--color-primary-50)] rounded-2xl p-6 border border-[var(--color-primary-200)]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-[var(--color-primary-900)]">Segment Analysis</h4>
                </div>
                <div className="flex items-center justify-center h-32">
                  <div className="relative w-28 h-28">
                    <div className="absolute inset-0 rounded-full border-8 border-[var(--color-primary-600)]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 60%)' }} />
                    <div className="absolute inset-0 rounded-full border-8 border-[var(--color-secondary-500)]" style={{ clipPath: 'polygon(0 60%, 100% 60%, 100% 85%, 0 85%)' }} />
                    <div className="absolute inset-0 rounded-full border-8 border-[var(--color-primary-300)]" style={{ clipPath: 'polygon(0 85%, 100% 85%, 100% 100%, 0 100%)' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[var(--color-primary-900)]">4</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-2 text-xs">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--color-primary-600)]"></span>Enterprise</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[var(--color-secondary-500)]"></span>Mid-Market</span>
                </div>
              </div>
              {/* Chart 3 */}
              <div className="bg-[var(--color-primary-50)] rounded-2xl p-6 border border-[var(--color-primary-200)]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-[var(--color-primary-900)]">Market Signals</h4>
                  <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full">3 New</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Customer demand shift', severity: 'high' },
                    { label: 'Revenue trend change', severity: 'medium' },
                    { label: 'Market activity change', severity: 'low' }
                  ].map((alert, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-white rounded-lg border border-[var(--color-primary-200)]">
                      <span className={`w-2 h-2 rounded-full ${
                        alert.severity === 'high' ? 'bg-red-500 animate-pulse' : 
                        alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <span className="text-sm text-[var(--color-primary-700)] flex-1">{alert.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Secondary CTA recommendations require new controls and are not added to preserve the supplied layout. */}
      {/* The referenced FAQ sheet was not attached; no FAQ text has been invented. */}
      {/* FINAL CTA */}
      <section className="relative py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden border border-[var(--color-primary-300)] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-100)]/50 via-[var(--color-secondary-100)]/50 to-[var(--color-primary-100)]/50"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-primary-200)]/30 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[var(--color-primary-300)] animate-pulse">
                <Database className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-[var(--color-primary-900)]">
                Unlock Your{' '}
                <span className="bg-gradient-to-r from-[var(--color-primary-600)] via-[var(--color-secondary-600)] to-[var(--color-primary-800)] bg-clip-text text-transparent">
                  Data's Potential
                </span>
              </h2>
              <p className="text-xl text-[var(--color-primary-700)] mb-10 max-w-2xl mx-auto">
                Turn raw business data into actionable intelligence with AI-powered data mining, data enrichment, prospect research, and business intelligence automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 rounded-xl bg-white border-2 border-[var(--color-primary-200)] text-[var(--color-primary-900)] placeholder:text-[var(--color-primary-400)] focus:outline-none focus:border-[var(--color-primary-600)] focus:ring-4 focus:ring-[var(--color-primary-100)] transition-all shadow-sm"
                />
                <button className="px-8 py-4 rounded-xl bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[var(--color-primary-200)] whitespace-nowrap">
                  Start Data Mining
                </button>
              </div>
              <p className="text-sm text-[var(--color-primary-600)]">
                Free 14-day trial • No credit card • Process up to 1M records free
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}