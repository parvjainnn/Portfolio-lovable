import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Developer } from "@/components/portfolio/Developer";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { CodingProfiles } from "@/components/portfolio/CodingProfiles";
import { SocialMedia } from "@/components/portfolio/SocialMedia";
import { Socials } from "@/components/portfolio/Socials";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { CommandMenu } from "@/components/portfolio/CommandMenu";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Parv Jain - Developer, Designer & Creative Technologist" },
      { name: "description", content: "Premium portfolio of Parv Jain - engineer, graphic designer, and photo/video editor crafting cinematic, performant digital experiences." },
      { property: "og:title", content: "Parv Jain - Developer, Designer & Creative Technologist" },
      { property: "og:description", content: "Engineer-meets-creative. Java, DSA, data & AI projects alongside cinematic graphics, photo and video work." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen text-foreground overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 noise-overlay" />
      <CursorGlow />
      <CommandMenu />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Developer />
        <Projects />
        <Services />
        <CodingProfiles />
        <SocialMedia />
        <Socials />
      </div>
    </main>
  );
}
