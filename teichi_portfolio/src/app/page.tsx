import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Additional sections can be added here */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl relative inline-block">
                Featured Projects
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-vibe-accent rounded-full"></div>
              </h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl">
                A selection of my best work across design and development.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project card placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-3xl border border-vibe-indigo/30 bg-vibe-dark/40 backdrop-blur-md p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(93,43,126,0.3)] hover:border-vibe-accent hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-vibe-magenta/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
                <div className="aspect-video w-full rounded-2xl bg-vibe-deep/50 mb-6 relative overflow-hidden border border-vibe-indigo/20">
                   {/* Placeholder for project image */}
                   <div className="absolute inset-0 bg-gradient-to-br from-vibe-indigo/40 to-vibe-magenta/20 mix-blend-overlay group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-vibe-accent/30 flex items-center justify-center opacity-50">
                      <div className="w-2 h-2 rounded-full bg-vibe-accent animate-ping"></div>
                   </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-vibe-accent transition-colors">Project {i}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  A revolutionary web application built with modern architecture.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-vibe-cyan px-2 py-1 bg-vibe-cyan/10 border border-vibe-cyan/20 rounded-full">Next.js</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-vibe-accent px-2 py-1 bg-vibe-accent/10 border border-vibe-accent/20 rounded-full">TypeScript</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
