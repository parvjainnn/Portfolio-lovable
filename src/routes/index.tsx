import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Socials } from "@/components/portfolio/Socials";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Parv Jain — Developer & Creative Technologist" },
      { name: "description", content: "Portfolio of Parv Jain — engineering student, developer, and creative technologist crafting thoughtful, futuristic digital experiences." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen text-foreground" style={{ background: "var(--gradient-hero)" }}>
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Socials />
    </main>
  );
}
