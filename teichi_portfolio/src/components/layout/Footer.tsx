import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";
import { Github, Linkedin, Twitter } from "lucide-react";

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "github": return <Github className="h-5 w-5" />;
    case "linkedin": return <Linkedin className="h-5 w-5" />;
    case "twitter": return <Twitter className="h-5 w-5" />;
    default: return null;
  }
};

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-10 px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-medium text-muted-foreground">
          © {new Date().getFullYear()} My Portfolio. Built with Next.js, Tailwind, and TypeScript.
        </div>
        
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="text-muted-foreground transition-all hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {getIcon(social.name)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
