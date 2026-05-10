import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { ServicePage, ServiceProject } from "@/components/portfolio/ServicePage";

export const Route = createFileRoute("/graphics")({
  component: GraphicsPage,
  head: () => ({
    meta: [
      { title: "Graphic Design --- Parv Jain" },
      { name: "description", content: "Branding, posters, thumbnails, and social creatives by Parv Jain --- modern graphic design with intent and craft." },
      { property: "og:title", content: "Graphic Design --- Parv Jain" },
      { property: "og:description", content: "Branding, posters, thumbnails, and social creatives --- designed with intent." },
    ],
  }),
});

const projects: ServiceProject[] = [
  {
    id: "brand-aurora",
    title: "Aurora --- Brand Identity",
    category: "Branding",
    description: "Full identity system for a wellness skincare brand: logo, palette, typography, and stationery.",
    tools: ["Illustrator", "Photoshop", "Figma"],
    cover: "bg-gradient-to-br from-fuchsia-500/40 via-primary/30 to-accent/30",
    details: {
      overview: "Aurora needed an identity that felt clinical yet warm. We built a soft, luminous brand system anchored by a custom monogram and a serif/sans pairing.",
      process: ["Discovery & moodboarding", "Logo exploration (40+ sketches)", "Type & color system", "Stationery & packaging mockups", "Brand guidelines doc"],
      palette: ["#0E1116", "#F4ECE2", "#D8B6A4", "#7E6BD9"],
      typography: ["Canela Display", "Inter"],
      challenges: "Balancing minimalism with warmth --- neutral tones can feel sterile.",
      outcome: "Brand launched with +38% engagement on first campaign.",
      images: { before: "bg-gradient-to-br from-zinc-700 to-zinc-900", after: "bg-gradient-to-br from-rose-300 via-fuchsia-400 to-primary" },
    },
  },
  {
    id: "thumb-yt",
    title: "YouTube Thumbnail Series",
    category: "Thumbnails",
    description: "Bold, high-CTR thumbnails for a tech educator --- improved click-through by 2.4x.",
    tools: ["Photoshop", "Figma"],
    cover: "bg-gradient-to-br from-amber-400/40 via-rose-500/30 to-primary/30",
    details: {
      overview: "Designed a repeatable thumbnail framework: strong face crop, contrast badge, three-color palette per series.",
      process: ["A/B test current designs", "Define visual hierarchy", "Build a Figma component kit", "Iterate on first 10 uploads"],
      palette: ["#FF3D71", "#FFD166", "#0E1116"],
      typography: ["Druk Wide", "Inter"],
      outcome: "Average CTR jumped from 4.1% to 9.8% in 30 days.",
    },
  },
  {
    id: "poster-fest",
    title: "Indie Music Festival Poster",
    category: "Posters",
    description: "Type-led poster system for a 3-day indie festival --- print + digital.",
    tools: ["Illustrator", "Photoshop"],
    cover: "bg-gradient-to-br from-violet-600/50 via-primary/30 to-cyan-400/30",
    details: {
      overview: "A typographic system that scales from A2 print to Instagram stories without losing impact.",
      process: ["Type exploration", "Grid system", "Print proofing", "Digital adaptation"],
      palette: ["#1A0B2E", "#E94560", "#F0A500"],
      typography: ["Migra", "PP Neue Montreal"],
    },
  },
  {
    id: "social-launch",
    title: "Product Launch Creatives",
    category: "Social Creatives",
    description: "10-post Instagram launch carousel for a SaaS product, motion-ready.",
    tools: ["Figma", "Photoshop", "After Effects"],
    cover: "bg-gradient-to-br from-cyan-400/40 via-primary/30 to-fuchsia-500/30",
    details: {
      overview: "Launch carousel built around a single visual motif --- gradient mesh --- animated for reels.",
      process: ["Narrative outline", "Visual motif", "Frame design", "Motion pass"],
      palette: ["#00D9FF", "#7E6BD9", "#FF3D71"],
    },
  },
  {
    id: "logo-studio",
    title: "Studio Monogram",
    category: "Branding",
    description: "A geometric monogram for a creative studio --- built on a strict 8pt grid.",
    tools: ["Illustrator"],
    cover: "bg-gradient-to-br from-emerald-400/40 via-primary/20 to-accent/30",
    details: {
      overview: "Pure geometry --- no curves outside the grid. The mark works at 16px and on a billboard.",
      process: ["Grid setup", "Form exploration", "Optical correction", "Lockup variants"],
      palette: ["#0E1116", "#FFFFFF", "#10B981"],
    },
  },
  {
    id: "ui-visuals",
    title: "Dashboard UI Visuals",
    category: "UI Visuals",
    description: "Marketing visuals for a fintech dashboard --- animated screens and product shots.",
    tools: ["Figma", "Photoshop"],
    cover: "bg-gradient-to-br from-blue-500/40 via-primary/30 to-cyan-400/30",
    details: {
      overview: "Hero visuals that show the product in motion --- perspective tilts, gradient backgrounds, soft glows.",
      process: ["Product audit", "Composition sketches", "Render & polish"],
      palette: ["#0B1220", "#3B82F6", "#22D3EE"],
    },
  },
];

function GraphicsPage() {
  return (
    <PageShell>
      <ServicePage
        eyebrow="Graphics --- Visual Identity"
        title="Graphic Design &"
        highlight="Brand Creativity."
        subtitle="Branding systems, posters, thumbnails, social creatives, and digital assets --- designed with intent, balance, and a modern aesthetic that scales across every surface."
        accent="bg-gradient-to-br from-fuchsia-500/15 via-primary/10 to-accent/15"
        stats={[
          { value: "60+", label: "Projects" },
          { value: "20+", label: "Brands" },
          { value: "2.4x", label: "Avg CTR Lift" },
          { value: "100%", label: "Hand-crafted" },
        ]}
        process={[
          { step: "Discover", desc: "Audit, references, and a tight creative brief." },
          { step: "Explore", desc: "Sketch wide, refine fast --- divergence before convergence." },
          { step: "Design", desc: "Pixel-precise execution with type and grid systems." },
          { step: "Deliver", desc: "Source files, guidelines, and ready-to-use exports." },
        ]}
        testimonials={[
          { quote: "Parv turned our messy moodboard into a real brand. Fast and thoughtful.", author: "Riya S.", role: "Founder, Aurora" },
          { quote: "Best thumbnails we've shipped. CTR doubled overnight.", author: "Karan M.", role: "Tech Educator" },
          { quote: "Type system is chef's kiss. Carries our whole campaign.", author: "Aman P.", role: "Marketing Lead" },
        ]}
        categories={["Branding", "Posters", "Thumbnails", "Social Creatives", "UI Visuals"]}
        projects={projects}
      />
    </PageShell>
  );
}
