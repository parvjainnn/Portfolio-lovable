import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { CursorGlow } from "./CursorGlow";
import { Instagram, Twitter, Github, Linkedin, Mail } from "lucide-react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen text-foreground" style={{ background: "var(--gradient-hero)" }}>
      <CursorGlow />
      <Navbar />
      {children}
      <footer className="border-t border-border mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Parv Jain. Crafted with care.</p>
          <div className="flex items-center gap-4">
            {[
              { href: "mailto:preeti.parv17@gmail.com", icon: Mail, label: "Email" },
              { href: "https://github.com/parvjainnn", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/parvjainnn", icon: Linkedin, label: "LinkedIn" },
              { href: "https://x.com/parvjainnn", icon: Twitter, label: "X" },
              { href: "https://instagram.com/parvjainnn", icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="hover:text-foreground transition">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
