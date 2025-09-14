// src/components/Login.jsx
import React, { useState } from "react";
import Background from "../../assets/images/Background.png";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin();
  };
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Soft teal background blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-teal-200 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-teal-300 blur-3xl opacity-60" />

      {/* Centered Card */}
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <div className="rounded-3xl bg-white shadow-2xl border border-slate-100">
          {/* Card header with logo */}
          <div className="flex items-center gap-2 px-6 sm:px-10 pt-6">
            <img src="assets/images/logo.png" alt="Logo" className="w-7 h-7" />
            <span className="text-sm sm:text-base font-semibold text-slate-700">Interview PrepAi</span>
          </div>

          {/* Card body grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 p-6 sm:p-10">
            {/* Left Illustration */}
            <div className="flex items-center justify-center">
              <img
                src="assets/images/Illustration.png"
                alt="Login Illustration"
                className="max-w-[520px] w-full h-auto"
              />
            </div>

            {/* Right Form */}
            <div className="max-w-md w-full md:ml-auto">
              <h2 className="text-3xl font-semibold text-slate-800">Welcome Back:)</h2>
              <p className="text-slate-400 text-sm mt-3 mb-8 leading-relaxed">
                To keep connected with us please login with your personal information by
                email address and password.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Email */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    {/* Mail icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zm0 0l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full rounded-xl bg-slate-100 pl-10 pr-10 py-3 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-emerald-500">
                    {/* Check icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>

                {/* Password */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    {/* Lock icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 11H7a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2zm-2 0V7a3 3 0 10-6 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full rounded-xl bg-slate-100 pl-10 pr-20 py-3 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-0 px-3 text-xs text-slate-500 hover:text-slate-700"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                    Remember Me
                  </label>
                  <a href="#" className="hover:underline">Forgot Password?</a>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button type="submit" className="px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700">
                    Login Now
                  </button>
                  <button type="button" className="px-5 py-2 rounded-full bg-white text-slate-600 text-sm font-medium border border-slate-200 shadow-sm hover:bg-slate-50">
                    Create Account
                  </button>
                </div>

                <div className="pt-4">
                  <p className="text-xs text-slate-400 mb-3">Or you can join with</p>
                  <div className="flex items-center gap-3">
                    <button type="button" className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-sm hover:bg-slate-50">
                      <img src="assets/images/google-icon.png" alt="Google" className="h-4 w-4" />
                    </button>
                    <button type="button" className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-sm hover:bg-slate-50">
                      <img src="assets/images/facebook-icon.png" alt="Facebook" className="h-4 w-4" />
                    </button>
                    <button type="button" className="h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-sm hover:bg-slate-50">
                      <img src="assets/images/twitter-icon.png" alt="Twitter" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
