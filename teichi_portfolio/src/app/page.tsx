import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Additional sections can be added here */}
      <section className="bg-slate-50 py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Projects</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                A selection of my best work across design and development.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project card placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                <div className="aspect-video w-full rounded-2xl bg-slate-100 mb-6 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-20" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Project {i}</h3>
                <p className="text-slate-600 text-sm mb-4">
                  A revolutionary web application built with Next.js and Tailwind CSS.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 px-2 py-1 bg-blue-50 rounded-full">Next.js</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 px-2 py-1 bg-purple-50 rounded-full">TypeScript</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
