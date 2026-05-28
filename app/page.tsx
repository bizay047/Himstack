
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Moon,
  Sun,
  ArrowRight,
  Globe,
  Cpu,
  Layers3,
  ShieldCheck,
} from "lucide-react";

export default function Page() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main
      className={
        darkMode
          ? "min-h-screen bg-[#03111c] text-white transition-all duration-500"
          : "min-h-screen bg-[#f4f9ff] text-black transition-all duration-500"
      }
    >
      {/* Navbar */}
      <header
        className={
          darkMode
            ? "border-b border-white/10 bg-[#03111c]"
            : "border-b border-black/10 bg-white"
        }
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/image.png"
              alt="HimStack"
              width={60}
              height={60}
            />

            <div>
              <h1 className="text-2xl font-black">
                HIMSTACK
              </h1>

              <p className="text-cyan-400 text-xs tracking-[4px]">
                PVT. LTD.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={
                darkMode
                  ? "p-3 rounded-full bg-white/10 hover:bg-white/20"
                  : "p-3 rounded-full bg-black/10 hover:bg-black/20"
              }
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="hidden md:flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all">
              Stay Updated
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Coming Soon
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            Smart Digital
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Solutions
            </span>
            For Businesses
          </h2>

          <p
            className={
              darkMode
                ? "mt-8 text-lg text-gray-300 leading-relaxed"
                : "mt-8 text-lg text-gray-700 leading-relaxed"
            }
          >
            HimStack builds modern ERP systems, SaaS platforms,
            AI applications, and business automation solutions
            for startups and enterprises.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all">
              Launching Soon
            </button>

            <button
              className={
                darkMode
                  ? "px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                  : "px-8 py-4 rounded-2xl border border-black/10 bg-black/5 hover:bg-black/10"
              }
            >
              Explore Vision
            </button>

          </div>

          {/* Email */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xl">

            <input
              type="email"
              placeholder="Enter your email"
              className={
                darkMode
                  ? "flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
                  : "flex-1 px-6 py-4 rounded-2xl bg-white border border-black/10 outline-none"
              }
            />

            <button className="px-7 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold">
              Notify Me
            </button>

          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div
              className={
                darkMode
                  ? "relative p-10 rounded-[40px] bg-white/5 border border-white/10"
                  : "relative p-10 rounded-[40px] bg-white border border-black/10"
              }
            >
              <Image
                src="/image.png"
                alt="HimStack"
                width={350}
                height={350}
                className="animate"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <Card
            darkMode={darkMode}
            icon={<Layers3 size={34} />}
            title="ERP Systems"
            desc="Enterprise management solutions."
          />

          <Card
            darkMode={darkMode}
            icon={<Globe size={34} />}
            title="SaaS Platforms"
            desc="Scalable cloud-based platforms."
          />

          <Card
            darkMode={darkMode}
            icon={<Cpu size={34} />}
            title="AI Applications"
            desc="Modern AI-powered business tools."
          />

          <Card
            darkMode={darkMode}
            icon={<ShieldCheck size={34} />}
            title="Automation"
            desc="Smart workflow automation systems."
          />

        </div>
      </section>

      {/* Footer */}
      <footer
        className={
          darkMode
            ? "border-t border-white/10 py-10"
            : "border-t border-black/10 py-10"
        }
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h3 className="text-2xl font-black">
              HIMSTACK
            </h3>

            <p
              className={
                darkMode
                  ? "text-gray-400 mt-3"
                  : "text-gray-600 mt-3"
              }
            >
              Building Nepal’s future digital ecosystem.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400">
              LinkedIn
            </a>

            <a href="#" className="hover:text-cyan-400">
              Facebook
            </a>

            <a href="#" className="hover:text-cyan-400">
              Instagram
            </a>
          </div>

        </div>

        <div
          className={
            darkMode
              ? "text-center text-gray-500 mt-10"
              : "text-center text-gray-600 mt-10"
          }
        >
          © 2026 HimStack Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function Card({
  icon,
  title,
  desc,
  darkMode,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  darkMode: boolean;
}) {
  return (
    <div
      className={
        darkMode
          ? "p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all"
          : "p-8 rounded-3xl bg-white border border-black/10 hover:border-cyan-400/40 transition-all"
      }
    >
      <div className="text-cyan-400 mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p
        className={
          darkMode
            ? "text-gray-400"
            : "text-gray-600"
        }
      >
        {desc}
      </p>
    </div>
  );
}
