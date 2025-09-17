// src/components/Landing.jsx
import React, { useEffect, useRef, useState } from "react";

function Landing({ onLogin }) {
  const heroRef = useRef(null);
  const partnersRef = useRef(null);
  const [heroBox, setHeroBox] = useState({ top: 0, left: 0, width: 384, height: 256 });
  const [partnersBox, setPartnersBox] = useState({ top: 0, left: 0, width: 448, height: 200 });
  const inset = 12; // visual inset so boxes match perceived image bounds

  useEffect(() => {
    const updateBoxes = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setHeroBox({
          top: Math.round(rect.top),
          left: Math.round(rect.left),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        });
      }
      if (partnersRef.current) {
        const rect = partnersRef.current.getBoundingClientRect();
        setPartnersBox({
          top: Math.round(rect.top),
          left: Math.round(rect.left),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        });
      }
    };

    updateBoxes();
    const ro = new ResizeObserver(updateBoxes);
    if (heroRef.current) ro.observe(heroRef.current);
    if (partnersRef.current) ro.observe(partnersRef.current);
    window.addEventListener("resize", updateBoxes, { passive: true });
    window.addEventListener("scroll", updateBoxes, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateBoxes);
      window.removeEventListener("scroll", updateBoxes);
    };
  }, []);
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Fixed background shapes */}
      <div
        className="hidden sm:block pointer-events-none fixed rounded-2xl bg-teal-200/60 -z-10"
        style={{
          top: heroBox.top + inset + "px",
          left: heroBox.left + inset + "px",
          width: Math.max(0, heroBox.width - inset * 2),
          height: Math.max(0, heroBox.height - inset * 2),
        }}
      />
      <div
        className="hidden sm:block pointer-events-none fixed rounded-2xl bg-teal-300/50 -z-10"
        style={{
          top: partnersBox.top + inset + "px",
          left: partnersBox.left + inset + "px",
          width: Math.max(0, partnersBox.width - inset * 2),
          height: Math.max(0, partnersBox.height - inset * 2),
        }}
      />

      {/* Top Nav */}
      <header className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="assets/images/logo.png" alt="Logo" className="w-7 h-7" />
          <span className="font-semibold text-slate-800">SuperKalam</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Home</a>
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onLogin}
            className="px-4 py-2 text-xs rounded-full border border-slate-300 text-slate-700 hover:bg-white bg-slate-100"
          >
            Login
          </button>
          <button className="hidden sm:inline-flex px-4 py-2 text-xs rounded-full bg-emerald-500 text-white shadow hover:bg-emerald-600">
            Start Preparing
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 leading-tight">
              Ace Your Engineering Interviews with AI-Powered Preparation
            </h1>
            <p className="text-slate-500 mt-4">
              Prepare for your dream engineering job with our AI-driven platform. Get
              personalized feedback, practice with realistic mock interviews, and master
              technical and aptitude tests.
            </p>
            <div className="mt-6">
              <button className="px-5 py-3 rounded-full bg-emerald-500 text-white text-sm shadow hover:bg-emerald-600">
                Start Preparing Now
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              ref={heroRef}
              src="assets/images/Container (2).png"
              alt="Hero illustration"
              className="w-full max-w-lg rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-center text-xl font-semibold text-slate-800">Key Features</h2>
          <p className="text-center text-slate-400 text-sm mt-2">Everything you need to land your dream job.</p>
          <div className="mt-10">
            <img
              src="assets/images/Container (1).png"
              alt="Key features overview"
              className="w-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-center text-xl font-semibold text-slate-800">What Our Users Say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* Ethan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-0 shadow-sm text-sm text-slate-600">
              <img src="assets/images/testimonial-ethan.png" alt="Ethan testimonial" className="w-full" />
            </div>
            {/* Sophia */}
            <div className="rounded-2xl border border-slate-200 bg-white p-0 shadow-sm text-sm text-slate-600">
              <img src="assets/images/testimonial-sophia.png" alt="Sophia testimonial" className="w-full" />
            </div>
            {/* Liam */}
            <div className="rounded-2xl border border-slate-200 bg-white p-0 shadow-sm text-sm text-slate-600">
              <img src="assets/images/testimonial-liam.png" alt="Liam testimonial" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-center text-2xl font-semibold text-slate-100">Our Partner Colleges</h2>
          <p className="text-center text-slate-400 text-sm mt-2">We are trusted by leading institutions across the country.</p>
          <div className="mt-10">
            <img ref={partnersRef} src="assets/images/Section - Copy.png" alt="Partner colleges" className="w-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500">
          © 2024 SuperKalam. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Landing;


