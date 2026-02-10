import React from 'react';
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-slate-900 dark:text-[#e6edf3] font-sans selection:bg-blue-500/30 transition-colors duration-300">
      
      {/* 1. NAVIGATION */}
      <nav className="border-b border-slate-200 dark:border-[#30363d] bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">VORA</span>
            <div className="hidden md:flex gap-6 text-sm text-slate-500 dark:text-[#8b949e]">
              <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition">Features</a>
              <a href="#solutions" className="hover:text-slate-900 dark:hover:text-white transition">Solutions</a>
              <Link to="/contact" className="hover:text-slate-900 dark:hover:text-white transition">Contact</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-slate-600 dark:text-[#8b949e] hover:text-slate-900 dark:hover:text-white transition">Log in</Link>
            <Link to="/signup" className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-1.5 rounded-md text-sm font-semibold transition shadow-sm">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#23863608_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,#23863610_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-linear-to-b from-slate-900 via-slate-800 to-slate-500 dark:from-white dark:to-[#8b949e] bg-clip-text text-transparent">
            Project management for the modern engineer.
          </h1>
          <p className="text-xl text-slate-600 dark:text-[#8b949e] mb-10 leading-relaxed">
            Vora bridges the gap between your GitHub workflow and executive oversight. 
            Automated tracking, AI-powered velocity insights, and seamless team sync.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 dark:bg-[#f0f6fc] text-white dark:text-[#1f2328] px-8 py-3 rounded-md font-bold hover:bg-slate-800 dark:hover:bg-white transition shadow-lg">
              Start Building — It's free
            </button>
            <button className="bg-white dark:bg-[#21262d] border border-slate-200 dark:border-[#30363d] text-slate-600 dark:text-[#c9d1d9] px-8 py-3 rounded-md font-bold hover:bg-slate-50 dark:hover:bg-[#30363d] transition">
              Book A Demo
            </button>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-[#30363d]">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Built for High-Velocity Teams</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Instant Sync */}
          <div className="p-8 rounded-xl border border-slate-200 dark:border-[#30363d] bg-slate-50/50 dark:bg-[#161b22] hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Instant Sync</h3>
            <p className="text-slate-600 dark:text-[#8b949e] text-sm leading-relaxed">Connected to GitHub. Your tasks update the moment you push code. No manual entry required.</p>
          </div>

          {/* Bug Prediction */}
          <div className="p-8 rounded-xl border border-slate-200 dark:border-[#30363d] bg-slate-50/50 dark:bg-[#161b22] hover:border-red-500/50 transition-colors">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Bug Prediction</h3>
            <p className="text-slate-600 dark:text-[#8b949e] text-sm leading-relaxed">Our AI analyzes feature descriptions to flag potential edge cases and security flaws before you write code.</p>
          </div>

          {/* Smart Notifications */}
          <div className="p-8 rounded-xl border border-slate-200 dark:border-[#30363d] bg-slate-50/50 dark:bg-[#161b22] hover:border-green-500/50 transition-colors">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Signal Notifications</h3>
            <p className="text-slate-600 dark:text-[#8b949e] text-sm leading-relaxed">Get notified on priority shifts and deployment successes via email or dashboard without the noise.</p>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS SECTION */}
      <section id="solutions" className="bg-white dark:bg-[#0d1117] py-24 border-t border-slate-200 dark:border-[#30363d] transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Intelligence at every stage of the lifecycle.</h2>
              
              <div className="flex gap-6">
                <div className="text-blue-600 dark:text-blue-500 font-mono text-xl">01</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Adaptive Stack Suggestions</h4>
                  <p className="text-slate-600 dark:text-[#8b949e] text-sm leading-relaxed">
                    Vora analyzes your requirements and suggests the optimal tech stack. It intelligently balances industry best practices with the languages your team already masters.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-purple-600 dark:text-purple-500 font-mono text-xl">02</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Blocker Mitigation</h4>
                  <p className="text-slate-600 dark:text-[#8b949e] text-sm leading-relaxed">
                    Identified a complex dependency? Vora suggests pre-vetted libraries or architectural patterns to bypass common engineering hurdles.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-green-600 dark:text-green-500 font-mono text-xl">03</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Neural Velocity Tracking</h4>
                  <p className="text-slate-600 dark:text-[#8b949e] text-sm leading-relaxed">
                    Move beyond simple burn-down charts. Track actual technical debt vs. feature progress with real-time GitHub data analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="bg-slate-50 dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] rounded-2xl p-8 shadow-xl dark:shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all"></div>
               <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-[#0d1117] rounded-lg border border-slate-200 dark:border-[#30363d]">
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400">OPTIMIZING STACK...</span>
                    <span className="text-[10px] text-slate-400 dark:text-[#8b949e]">DONE</span>
                  </div>
                  <div className="p-4 bg-white dark:bg-[#0d1117] rounded-lg border border-slate-200 dark:border-[#30363d]">
                    <p className="text-xs font-bold text-slate-900 dark:text-white mb-1 uppercase">Recommended Engine</p>
                    <p className="text-sm text-slate-500 dark:text-[#8b949e]">Next.js + Tailwind + Prisma (based on high-scale requirement)</p>
                  </div>
                  <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/20">
                    <p className="text-xs font-bold text-red-600 dark:text-red-400 mb-1 uppercase tracking-widest">Potential Bug Detected</p>
                    <p className="text-sm text-slate-500 dark:text-[#8b949e]">Async race condition possible in 'auth.js' line 42.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-slate-200 dark:border-[#30363d] py-16 bg-slate-50 dark:bg-[#010409] transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2">
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 block">VORA</span>
            <p className="text-slate-500 dark:text-[#8b949e] text-sm max-w-xs leading-relaxed">
              Dev-centric project management. Built for speed, fueled by intelligence, and designed for the next era of development.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase text-slate-900 dark:text-white tracking-widest mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-[#8b949e]">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Changelog</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase text-slate-900 dark:text-white tracking-widest mb-6">Support</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-[#8b949e]">
              <li><a href="/contact" className="hover:text-slate-900 dark:hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">API Status</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xs uppercase text-slate-900 dark:text-white tracking-widest mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-[#8b949e]">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 dark:border-[#30363d] flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 dark:text-[#8b949e] text-xs">
          <p>© {new Date().getFullYear()} Vora. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Twitter / X</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;