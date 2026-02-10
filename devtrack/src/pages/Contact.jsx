// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-slate-900 dark:text-[#e6edf3] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Let's talk engineering.
            </h1>
            <p className="text-xl text-slate-600 dark:text-[#8b949e] mb-12 leading-relaxed max-w-md">
              Have questions about our AI engine or custom enterprise deployments? Our team is ready to help.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Support Email</h4>
                  <p className="text-slate-500 dark:text-[#8b949e] text-sm">support@vora.io</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Headquarters</h4>
                  <p className="text-slate-500 dark:text-[#8b949e] text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-slate-50 dark:bg-[#161b22] p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-[#30363d] shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e] mb-2">Subject</label>
                <select className="block w-full bg-white dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-lg py-2.5 px-4 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-blue-500 appearance-none">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Enterprise Quote</option>
                  <option>Partnerships</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e] mb-2">Message</label>
                <textarea rows="5" className="block w-full bg-white dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-lg py-2.5 px-4 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400 dark:placeholder-[#484f58]" placeholder="How can we help?"></textarea>
              </div>

              <button type="submit" className="w-full bg-slate-900 dark:bg-[#f0f6fc] text-white dark:text-[#1f2328] py-3 px-4 rounded-lg font-bold text-sm hover:bg-slate-800 dark:hover:bg-white transition-all">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;