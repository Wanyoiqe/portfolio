import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  Sparkles, 
  Terminal, 
  Code2, 
  Layout, 
  ShieldCheck, 
  Heart, 
  ChevronRight,
  Globe,
  Layers,
  Monitor,
  Smartphone
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<{ [key: string]: string }>({
    '01': 'staff',
    '02': 'threats',
    '03': 'shop',
    '04': 'branding'
  });

  const toggleTab = (projId: string, tabKey: string) => {
    setActiveTab(prev => ({ ...prev, [projId]: tabKey }));
  };

  const projects = [
    {
      id: '01',
      title: 'THIKA HEALTH NEXUS',
      category: 'Healthcare Management Platform',
      overview: 'A comprehensive healthcare management platform designed to help patients and healthcare staff manage appointments, digital health records, automated notifications, and clinical administration seamlessly.',
      url: 'https://thika-health-nexus.vercel.app/',
      tabs: [
        { id: 'staff', label: 'Consent Management', detail: 'Real-time patient check-ins & vitals tracking' },
        { id: 'records', label: 'Health Records', detail: 'Encrypted medical history & lab result viewer' },
        { id: 'schedule', label: 'Appointments', detail: 'Interactive calendar & doctor scheduling' }
      ]
    },
    {
      id: '02',
      title: 'SAFEMONEY — SCAM AWARE HUB',
      category: 'Mobile Money Fraud Detection & Awareness',
      overview: 'An AI-powered web platform designed to help users detect mobile money fraud and phishing attempts. Features an automated SMS Scanner that analyzes message text, calculates risk scores, and provides key educational insights.',
      url: 'https://scam-aware-hub.vercel.app/',
      tabs: [
        { id: 'scanner', label: 'SMS Scanner', detail: 'AI-powered text analysis and fraud risk scoring' },
        { id: 'report', label: 'Report Portal', detail: 'Community mobile money fraud submission hub' },
        { id: 'awareness', label: 'Awareness Hub', detail: 'Educational guides on common mobile money scams' }
      ]
    },
    {
      id: '03',
      title: 'LAVENDER HAVEN',
      category: 'Community Support & Resource Platform',
      overview: 'A digital platform built to foster stronger communities through connection, shared experiences, and support. Features integrated community events, an online resource library, gallery showcases, and donation portals.',
      url: 'https://lavender-haven-studio.vercel.app/',
      tabs: [
        { id: 'events', label: 'Events Hub', detail: 'Community gatherings and workshop scheduling' },
        { id: 'gallery', label: 'Media Gallery', detail: 'Visual archives of community projects and stories' },
        { id: 'library', label: 'Resource Library', detail: 'Accessible educational materials & guides' }
      ]
    },
    {
      id: '04',
      title: 'PERSONAL PORTFOLIO',
      category: 'Client Branding & Custom Portfolio Design',
      overview: 'A bespoke portfolio website built for a real-world client—an environmental advocate and regenerative agriculture champion. Demonstrates my capability to deliver tailored visual identity, dark forest editorial aesthetics, rich typography, and custom UI components for personal brands.',
      url: 'https://personal-portfolio-henna-psi-79.vercel.app/', 
      tabs: [
        { id: 'hero', label: 'Client Hero UI', detail: 'Editorial typography layout with location tagging & dual CTAs' },
        { id: 'expertise', label: 'Custom Expertise Grid', detail: 'Tailored breakdown of client impact, advocacy & field skills' },
        { id: 'portfolio', label: 'Impact Gallery', detail: 'High-contrast visual storytelling & fieldwork documentation' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#12151a] text-slate-200 antialiased selection:bg-slate-700 selection:text-slate-100">
      {/* STICKY NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#12151a]/85 border-b border-slate-800/60 transition-all duration-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-wide text-slate-100 hover:text-emerald-400 transition-colors">
            Mercy Wanyoike
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#work" className="hover:text-slate-100 transition-colors">Work</a>
            <a href="#about" className="hover:text-slate-100 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-100 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-slate-100 transition-colors">Contact</a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#181d24] border-b border-slate-800 px-6 py-6 space-y-4 text-slate-300">
            <a 
              href="#work" 
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-slate-100 transition-colors text-base"
            >
              Work
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-slate-100 transition-colors text-base"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-slate-100 transition-colors text-base"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-slate-100 transition-colors text-base"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-32 px-6 border-b border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for UI/UX & Developer roles
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-100 mb-2 leading-none">
              Mercy Wanyoike
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-emerald-400/90 mb-8 tracking-tight">
              Developer
            </h2>

            <p className="max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed font-normal mb-10">
              I build intuitive, visually engaging digital experiences and bring ideas to life through code and thoughtful design.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#work" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-slate-200 text-slate-900 font-medium hover:bg-white transition-all text-sm group"
              >
                View My Work
                <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-slate-700 bg-slate-800/40 text-slate-300 font-medium hover:bg-slate-800 hover:text-slate-100 transition-all text-sm"
              >
                Get In Touch
              </a>
            </div>

            {/* Subtle Editorial Accent Visual */}
            <div className="mt-20 pt-8 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-500 uppercase tracking-widest font-mono">
              <div>UI/UX Focus</div>
              <div>Frontend Dev</div>
              <div>CS Foundation</div>
              <div>Clean Systems</div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-28 px-6 border-b border-slate-800/50 bg-[#161a21]/50">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80 mb-4 block">01 / Background</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 mb-12">About Me</h2>

            <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="md:col-span-8 space-y-6 text-slate-300 text-lg leading-relaxed font-normal">
                <p>
                  I'm a Computer Science professional with a growing focus on UI/UX design and digital experiences. I enjoy turning ideas and complex requirements into interfaces that are clear, intuitive, and visually engaging.
                </p>
                <p>
                  My background in software development gives me an understanding of how digital products are built, allowing me to think about both the user's experience and the technical side of implementation.
                </p>
              </div>

              <div className="md:col-span-4 p-6 rounded-xl bg-[#1d222b]/80 border border-slate-800/80 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Focus Areas</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    User-Centered Interface Design
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Modern Responsive React Frontend
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Clean Component Architecture
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Design Systems & Hierarchy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="py-28 px-6 border-b border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80 mb-4 block">02 / Portfolio</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100 mb-3">Selected Work</h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-xl">
                A selection of digital experiences I've designed and built.
              </p>
            </div>

            <div className="space-y-32">
              {projects.map((project, index) => {
                const isEven = index % 2 === 1;
                const activeTabKey = activeTab[project.id];
                const activeTabObj = project.tabs.find(t => t.id === activeTabKey) || project.tabs[0];

                return (
                  <div 
                    key={project.id}
                    className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isEven ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    {/* Text Column */}
                    <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:col-start-8' : ''}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-emerald-400/90 bg-emerald-950/50 border border-emerald-800/50 px-2.5 py-0.5 rounded">
                          {project.id}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 leading-relaxed text-base">
                        {project.overview}
                      </p>

                      <div className="pt-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-slate-100 hover:text-emerald-400 transition-colors group"
                        >
                          View Live Project
                          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                      </div>
                    </div>

                    {/* Mockup Column */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="rounded-xl bg-[#161a22] border border-slate-800/90 shadow-2xl overflow-hidden group">
                        {/* Browser Top Bar */}
                        <div className="px-4 py-3 bg-[#1d222b] border-b border-slate-800/80 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                          </div>

                          <div className="flex-1 max-w-xs bg-[#12151a] border border-slate-800 rounded px-3 py-1 text-xs text-slate-400 truncate font-mono text-center">
                            {project.url}
                          </div>

                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-100 transition-colors"
                            aria-label="Open link in new tab"
                          >
                            <ExternalLink size={14} />
                          </a>
                        </div>

                        {/* View Switcher Tabs */}
                        <div className="p-3 bg-[#13171e] border-b border-slate-800/60 flex items-center gap-2 overflow-x-auto text-xs">
                          {project.tabs.map(tab => (
                            <button
                              key={tab.id}
                              onClick={() => toggleTab(project.id, tab.id)}
                              className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap ${
                                activeTabKey === tab.id
                                  ? 'bg-slate-800 text-slate-100 border border-slate-700'
                                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>

                        {/* Interactive Screen Preview */}
                        <div className="p-6 sm:p-8 bg-[#12151a] min-h-[260px] flex flex-col justify-between relative overflow-hidden">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400/90">
                                Feature Preview / {activeTabObj.label}
                              </span>
                              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                Live View
                              </div>
                            </div>

                            <div className="p-4 rounded-lg bg-[#1a1f28] border border-slate-800 text-sm text-slate-300">
                              <p className="font-medium text-slate-200 mb-1">{activeTabObj.label}</p>
                              <p className="text-slate-400 text-xs">{activeTabObj.detail}</p>
                            </div>

                            {/* Stylized Interface Skeleton */}
                            <div className="grid grid-cols-3 gap-3 pt-2">
                              <div className="h-16 rounded bg-slate-800/50 border border-slate-800/80 p-2 space-y-1.5">
                                <div className="h-2 w-12 bg-slate-700 rounded"></div>
                                <div className="h-2 w-8 bg-emerald-500/30 rounded"></div>
                              </div>
                              <div className="h-16 rounded bg-slate-800/50 border border-slate-800/80 p-2 space-y-1.5">
                                <div className="h-2 w-16 bg-slate-700 rounded"></div>
                                <div className="h-2 w-10 bg-slate-700/50 rounded"></div>
                              </div>
                              <div className="h-16 rounded bg-slate-800/50 border border-slate-800/80 p-2 space-y-1.5">
                                <div className="h-2 w-10 bg-slate-700 rounded"></div>
                                <div className="h-2 w-14 bg-slate-700/50 rounded"></div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                            <span>Demonstrating UI structure & interaction flow</span>
                            <span className="font-mono">React / Tailwind</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-28 px-6 border-b border-slate-800/50 bg-[#161a21]/50">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80 mb-4 block">03 / Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100 mb-16">Skills</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* UI/UX Category - Strong Visual Emphasis */}
              <div className="p-8 rounded-xl bg-[#1d232d] border-2 border-emerald-600/30 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono uppercase tracking-wider rounded-bl">
                  Primary Focus
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <Layout size={22} className="text-emerald-400" />
                  <h3 className="text-xl font-bold text-slate-100">UI/UX Design</h3>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    'UI Design', 'UX Design',
                    'Wireframing', 'User Flows',
                    'Prototyping', 'Responsive Design',
                    'Interaction Design', 'Visual Hierarchy'
                  ].map(skill => (
                    <div 
                      key={skill}
                      className="px-3 py-2 rounded bg-[#151820] border border-slate-700/60 text-slate-200 font-medium text-xs flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontend Category */}
              <div className="p-8 rounded-xl bg-[#181d25] border border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 size={22} className="text-slate-300" />
                  <h3 className="text-xl font-bold text-slate-100">Frontend</h3>
                </div>

                <div className="flex flex-wrap gap-2 text-sm">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Git'].map(skill => (
                    <div 
                      key={skill}
                      className="px-3 py-2 rounded bg-[#12151a] border border-slate-800 text-slate-300 text-xs font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Category */}
              <div className="p-8 rounded-xl bg-[#181d25] border border-slate-800">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal size={22} className="text-slate-300" />
                  <h3 className="text-xl font-bold text-slate-100">Technical</h3>
                </div>

                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    'Python', 
                    'Networking Fundamentals', 
                    'Cybersecurity Fundamentals', 
                    'AWS Fundamentals'
                  ].map(skill => (
                    <div 
                      key={skill}
                      className="px-3 py-2 rounded bg-[#12151a] border border-slate-800 text-slate-300 text-xs font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEYOND THE INTERFACE */}
        <section className="py-24 px-6 border-b border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80 block">04 / Perspective</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">Beyond the Interface</h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Outside of building web interfaces and exploring design systems, I enjoy analyzing emerging tech trends, refining my problem-solving skills in software engineering, and continually learning how thoughtful design makes complex technology accessible to everyone.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/80 block">05 / Get In Touch</span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-100">
              Let's create something meaningful.
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              I'm open to UI/UX opportunities, collaborations, and conversations about digital products.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
              <a 
                href="mailto:mercywanyoike741@gmail.com" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181d25] border border-slate-800 hover:border-slate-700 hover:text-slate-100 transition-all"
              >
                <Mail size={16} className="text-emerald-400" />
                mercywanyoike741@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/mercy-wanyoike-89119a27a" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181d25] border border-slate-800 hover:border-slate-700 hover:text-slate-100 transition-all"
              >
                <Linkedin size={16} className="text-emerald-400" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Wanyoiqe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181d25] border border-slate-800 hover:border-slate-700 hover:text-slate-100 transition-all"
              >
                <Github size={16} className="text-emerald-400" />
                GitHub
              </a>
            </div>

            <div className="pt-6">
              <a 
                href="mailto:mercywanyoike@example.com" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-200 text-slate-900 font-semibold hover:bg-white transition-all text-base group shadow-lg"
              >
                Get In Touch
                <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-800/80 bg-[#0e1014] text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-semibold text-slate-300 text-sm">Mercy Wanyoike</div>
            <div>Developer</div>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="#work" className="hover:text-slate-200 transition-colors">Work</a>
            <span>·</span>
            <a href="#about" className="hover:text-slate-200 transition-colors">About</a>
            <span>·</span>
            <a href="#skills" className="hover:text-slate-200 transition-colors">Skills</a>
            <span>·</span>
            <a href="#contact" className="hover:text-slate-200 transition-colors">Contact</a>
          </div>

          <div className="font-mono">
            Copyright © 2026
          </div>
        </div>
      </footer>
    </div>
  );
}