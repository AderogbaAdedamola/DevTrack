import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-slate-900 dark:text-[#e6edf3] font-sans flex flex-col justify-center pb-2 px-6 lg:px-8 transition-colors duration-300">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Sign in to your Vora Account
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-[#8b949e]">
          Access your projects and AI insights
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-110">
        {/* The Login Card */}
        <div className="bg-slate-50 dark:bg-[#161b22] py-10 px-8 shadow-xl dark:shadow-2xl border border-slate-200 dark:border-[#30363d] rounded-2xl transition-colors duration-300">
          
          {/* Social Logins */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-md bg-white dark:bg-[#21262d] border border-slate-300 dark:border-[#30363d] text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-[#30363d] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Continue with GitHub
            </button>
            
            <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-md bg-white dark:bg-[#21262d] border border-slate-300 dark:border-[#30363d] text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-[#30363d] transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M24 12.273c0-.877-.078-1.72-.224-2.533H12.273v4.793h6.577a5.622 5.622 0 01-2.44 3.687v3.065h3.947c2.31-2.126 3.643-5.257 3.643-8.913z"/><path fill="#FBBC05" d="M12.273 24c3.242 0 5.961-1.077 7.948-2.915l-3.947-3.065c-1.092.733-2.488 1.166-4.001 1.166-3.076 0-5.68-2.078-6.61-4.87H1.723v3.136C3.704 21.4 7.7 24 12.273 24z"/><path fill="#34A853" d="M5.663 14.316a7.375 7.375 0 010-4.632V6.548H1.723a11.996 11.996 0 000 10.904l3.94-3.136z"/><path fill="#4285F4" d="M12.273 4.808c1.763 0 3.346.605 4.59 1.798l3.443-3.443C18.23 1.144 15.514 0 12.273 0 7.7 0 3.704 2.6 1.723 6.548l3.94 3.136c.93-2.792 3.534-4.876 6.61-4.876z"/></svg>
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-[#30363d]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="bg-slate-50 dark:bg-[#161b22] px-3 text-slate-500 dark:text-[#8b949e] transition-colors duration-300">Or secure email login</span>
            </div>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e] mb-2">
                Work Email
              </label>
              <input 
                type="email" 
                autoComplete="email" 
                required 
                className="block w-full bg-white dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-lg py-2.5 px-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#484f58] focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8b949e]">
                  Password
                </label>
                <a href="#" className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition">
                  Forgot?
                </a>
              </div>
              <input 
                type="password" 
                autoComplete="current-password" 
                required 
                className="block w-full bg-white dark:bg-[#0d1117] border border-slate-300 dark:border-[#30363d] rounded-lg py-2.5 px-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-[#484f58] focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#238636] text-white py-2.5 px-4 rounded-lg font-bold text-sm hover:bg-[#2ea043] focus:ring-2 focus:ring-[#238636] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0d1117] transition-all transform active:scale-[0.98]"
            >
              Sign in to Vora 
            </button>
          </form>
        </div>

        {/* Bottom Footer */}
        <p className="mt-8 text-center text-sm text-slate-500 dark:text-[#8b949e]">
          Don't have an account?{' '}
          <Link to="/signup" className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition">
            Start a free trial
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;