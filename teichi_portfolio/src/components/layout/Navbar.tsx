"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [lang, setLang] = useState("EN");
  
  const toggleLang = () => {
    if (lang === "EN") setLang("JP");
    else if (lang === "JP") setLang("VN");
    else setLang("EN");
  };

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex w-full max-w-4xl items-center justify-between rounded-full border border-vibe-indigo/20 bg-deep-dark/50 px-4 sm:px-6 py-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(7,3,28,0.7)] transition-all duration-500 hover:border-vibe-indigo/40 hover:bg-deep-dark/70 hover:shadow-[0_8px_32px_rgba(170,93,198,0.15)] overflow-hidden relative">
        
        {/* Glow effect in background */}
        <div className="absolute inset-x-0 top-0 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-vibe-accent-bright/50 to-transparent shadow-[0_0_10px_rgba(170,93,198,0.6)]"></div>

        {/* Left: Tên */}
        <Link href="/" className="group text-sm sm:text-base font-bold tracking-tight text-foreground transition-all hover:text-vibe-accent-bright hidden min-[400px]:block">
          <span className="text-vibe-accent-bright">H</span>ồ <span className="text-vibe-accent-bright">D</span>u <span className="text-vibe-accent-bright">T</span>uấn <span className="text-vibe-accent-bright">Đ</span>ạt
        </Link>
        <Link href="/" className="group text-sm font-bold tracking-tight text-vibe-accent-bright transition-all hover:text-foreground md:hidden min-[400px]:hidden">
          H.D.T.Đ
        </Link>
        
        {/* Middle: Links */}
        <div className="flex items-center justify-center gap-3 sm:gap-8 mx-auto">
          <Link href="#projects" className="text-[11px] sm:text-sm font-medium text-slate-300 hover:text-vibe-accent-bright transition-all hover:-translate-y-0.5">
            #Projects
          </Link>
          <Link href="#about" className="text-[11px] sm:text-sm font-medium text-slate-300 hover:text-vibe-accent-bright transition-all hover:-translate-y-0.5">
            #About
          </Link>
          <Link href="#contact" className="text-[11px] sm:text-sm font-medium text-slate-300 hover:text-vibe-accent-bright transition-all hover:-translate-y-0.5">
            #Contact
          </Link>
        </div>

        {/* Right: Language Switcher */}
        <button 
          onClick={toggleLang}
          className="group flex items-center gap-1 sm:gap-1.5 rounded-full border border-vibe-purple-dark bg-vibe-purple-dark/40 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-slate-400 transition-all duration-300 hover:border-vibe-magenta/60 hover:bg-vibe-magenta/20 hover:shadow-[0_0_15px_rgba(93,43,126,0.5)]"
        >
          <span className={lang === "EN" ? "text-vibe-accent-bright" : "group-hover:text-vibe-accent-bright"}>EN</span>
          <span className="text-slate-600 font-normal">|</span>
          <span className={lang === "JP" ? "text-vibe-accent-bright" : "group-hover:text-vibe-accent-bright"}>JP</span>
          <span className="text-slate-600 font-normal">|</span>
          <span className={lang === "VN" ? "text-vibe-accent-bright" : "group-hover:text-vibe-accent-bright"}>VN</span>
        </button>
        
      </nav>
    </div>
  );
}
