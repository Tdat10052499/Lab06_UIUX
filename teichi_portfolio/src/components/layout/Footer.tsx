import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";
import { Globe, Mail } from "lucide-react";

// Custom Brand Icons (removed in lucide-react 1.0+)
const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

import portfolioData from "../../../app.context.json";

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "github": return <Github className="h-4 w-4" />;
    case "linkedin": return <Linkedin className="h-4 w-4" />;
    case "twitter": return <Twitter className="h-4 w-4" />;
    case "email": return <Mail className="h-4 w-4" />;
    default: return <Globe className="h-4 w-4" />;
  }
};

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-vibe-indigo/20 bg-vibe-dark/40 backdrop-blur-md py-12 px-6 lg:px-12 mt-auto overflow-hidden">
      {/* Footer subtle highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-vibe-indigo/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="text-sm font-bold tracking-widest text-vibe-accent-bright uppercase">
            {portfolioData.name}
          </div>
          <div className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} — Built with <span className="text-vibe-magenta transition-colors hover:text-vibe-accent-bright">Next.js & Tailwind v4</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-vibe-purple-dark bg-vibe-purple-dark/20 text-slate-400 transition-all hover:text-vibe-accent-bright hover:border-vibe-accent-bright hover:bg-vibe-accent-bright/5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {getIcon(social.name)}
              <span className="text-xs font-semibold">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-vibe-indigo/40 font-mono">
          {portfolioData.vibe}
        </p>
      </div>
    </footer>
  );
}
