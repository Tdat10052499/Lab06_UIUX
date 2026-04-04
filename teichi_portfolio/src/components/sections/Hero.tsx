import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 text-center lg:py-32 overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-purple-400 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/50 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur-sm animate-fade-in shadow-sm dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300">
          Open for New Projects
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
          Building Digital <span className="text-blue-600">Experiences</span> that Matter.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer specializing in creating modern, 
          user-centric applications with the latest web technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 shadow-lg shadow-slate-200"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
