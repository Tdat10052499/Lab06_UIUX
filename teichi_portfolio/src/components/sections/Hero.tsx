import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import portfolioData from "../../../app.context.json";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 text-center lg:py-32">
      {/* Additional Glow effects specific to Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[0%] left-[20%] w-[50%] h-[50%] rounded-full bg-vibe-plum/20 blur-[150px]" />
        <div className="absolute bottom-[0%] right-[10%] w-[40%] h-[40%] rounded-full bg-vibe-indigo/10 blur-[130px]" />
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-vibe-magenta/10 blur-[100px]" />
      </div>


      <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 rounded-full border border-vibe-indigo/50 bg-vibe-purple-dark/30 px-4 py-1.5 text-xs font-medium text-vibe-accent-bright backdrop-blur-md shadow-[0_0_15px_rgba(170,93,198,0.2)]">
          <Sparkles className="h-3.5 w-3.5" />
          {portfolioData.role} @ {portfolioData.university}
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white leading-none">
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibe-indigo via-vibe-magenta to-vibe-accent-bright animate-gradient-x">
            {portfolioData.name}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Crafting digital worlds with a <span className="text-white italic">{portfolioData.vibe}</span> vibe.
          Specialized in high-performance web and IoT systems.
        </p>

        {/* Skill tags using font-mono as requested */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          {portfolioData.skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center rounded-xl bg-vibe-accent-bright px-8 py-4 text-sm font-bold text-white transition overflow-hidden shadow-[0_0_20px_rgba(170,93,198,0.4)] hover:shadow-[0_0_30px_rgba(170,93,198,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-vibe-indigo/50 bg-vibe-purple-dark/20 px-8 py-4 text-sm font-bold text-white transition hover:bg-vibe-purple-dark/40 backdrop-blur-sm"
          >
            Let's Collaborate
          </Link>
        </div>
      </div>
    </section>
  );
}
