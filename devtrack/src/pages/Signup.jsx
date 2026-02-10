// src/pages/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-slate-900 dark:text-[#e6edf3] font-sans flex flex-col justify-center py-12 px-6 lg:px-8 transition-colors duration-300">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 mb-4">
          Step 1: Create Account
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Join the next era of dev.
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-[#8b949e]">
          Start your 14-day free trial. No credit card required.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-110">
        <div className="bg-slate-50  dark:bg-[#161b22] py-10 px-8 shadow-xl dark:shadow-2xl border border-slate-200 dark:border-[#30363d] rounded-2xl">
          
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-md bg-white dark:bg-[#21262d] border border-slate-300 dark:border-[#30363d] text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-[#30363d] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Sign up with GitHub
            </button>
          </div>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-[#30363d]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="bg-slate-50 dark:bg-[#161b22] px-3 text-slate-500 dark:text-[#8b949e]">Or use work email</span>
            </div>
          </div>

          <form className="mt-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e] mb-2">First Name</label>
                <input type="text" required className="block w-full bg-white dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-lg py-2.5 px-4 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-blue-500" placeholder="Linus" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e] mb-2">Last Name</label>
                <input type="text" required className="block w-full bg-white dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-lg py-2.5 px-4 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-blue-500" placeholder="Torvalds" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e] mb-2">Work Email</label>
              <input type="email" required className="block w-full bg-white dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-lg py-2.5 px-4 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-blue-500" placeholder="linus@linux.org" />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e] mb-2">Password</label>
              <input type="password" required className="block w-full bg-white dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-lg py-2.5 px-4 text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-blue-500" placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full bg-[#238636] text-white py-3 px-4 rounded-lg font-bold text-sm hover:bg-[#2ea043] transition-all transform active:scale-[0.98]">
              Create Account
            </button>
          </form>
          
          <p className="mt-6 text-[11px] text-[#8b949e] text-center leading-relaxed">
            By signing up, you agree to our <a href="#" className="underline hover:text-white">Terms</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>.
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-[#8b949e]">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;