import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { ServicePage, ServiceProject } from "@/components/portfolio/ServicePage";

export const Route = createFileRoute("/photo")({
  component: PhotoPage,
  head: () => ({
    meta: [
      { title: "Photo Editing - Parv Jain" },
      { name: "description", content: "Cinematic photo editing, retouching, color grading, and AI enhancement by Parv Jain." },
      { property: "og:title", content: "Photo Editing - Parv Jain" },
      { property: "og:description", content: "Retouching, color grading, AI enhancement, background manipulation." },
    ],
  }),
});

const projects: ServiceProject[] = [
  {
    id: "portrait-cinematic",
    title: "Cinematic Portrait Series",
    category: "Portrait",
    description: "Moody cinematic portraits with custom color grade and skin retouch.",
    tools: ["Photoshop", "Lightroom"],
    cover: "bg-gradient-to-br from-amber-700/40 via-rose-700/30 to-zinc-900",
    details: {
      overview: "A series of cinematic portraits - teal & orange grade, soft skin retouch, no plastic.",
      process: ["Raw selects", "Frequency separation retouch", "Dodge & burn", "Color grade", "Sharpen for output"],
      palette: ["#1B1410", "#D9824B", "#3B5066"],
      images: { before: "bg-gradient-to-br from-zinc-600 to-zinc-800", after: "bg-gradient-to-br from-amber-700 via-rose-700 to-zinc-900" },
      challenges: "Maintaining skin texture while pushing contrast hard.",
      outcome: "Used in an editorial feature.",
    },
  },
  {
    id: "product-shots",
    title: "Product Photography Edits",
    category: "Product",
    description: "Clean e-comm product edits - perfect cutouts, soft shadows, true color.",
    tools: ["Photoshop", "Lightroom"],
    cover: "bg-gradient-to-br from-zinc-200/30 via-zinc-400/20 to-zinc-900",
    details: {
      overview: "Pack of 30 product images for an e-comm launch - consistent, sharp, and on-brand.",
      process: ["Pen-tool cutouts", "Cast shadow rebuild", "Color match to swatch", "Batch export"],
      images: { before: "bg-gradient-to-br from-zinc-700 to-zinc-800", after: "bg-gradient-to-br from-zinc-100 to-zinc-300" },
    },
  },
  {
    id: "ai-enhance",
    title: "AI Photo Enhancement",
    category: "AI Enhancement",
    description: "Restored & upscaled vintage prints to 4K with AI workflows + manual polish.",
    tools: ["Photoshop", "Topaz Photo AI", "Lightroom"],
    cover: "bg-gradient-to-br from-cyan-500/40 via-primary/30 to-fuchsia-500/30",
    details: {
      overview: "Upscaled and denoised old family photos, then hand-corrected color casts.",
      process: ["AI denoise & upscale", "Manual artifact cleanup", "Color restoration", "Final retouch"],
      images: { before: "bg-gradient-to-br from-zinc-500 to-zinc-700", after: "bg-gradient-to-br from-sky-300 via-primary to-fuchsia-400" },
    },
  },
  {
    id: "bg-manip",
    title: "Background Manipulation",
    category: "Compositing",
    description: "Surreal composites - subjects placed in dreamlike, color-graded scenes.",
    tools: ["Photoshop"],
    cover: "bg-gradient-to-br from-violet-700/50 via-primary/30 to-cyan-400/30",
    details: {
      overview: "Composite work with matched lighting, perspective, and grade.",
      process: ["Concept sketch", "Source asset hunt", "Masking & blending", "Light & shadow match", "Final grade"],
    },
  },
  {
    id: "wedding-edits",
    title: "Wedding Photo Suite",
    category: "Cinematic",
    description: "200+ photo wedding edit - warm cinematic grade, consistent across the day.",
    tools: ["Lightroom", "Photoshop"],
    cover: "bg-gradient-to-br from-rose-400/40 via-amber-500/30 to-zinc-900",
    details: {
      overview: "Built a custom preset for the day, then hand-tuned every keeper.",
      process: ["Preset build", "Cull & rate", "Per-image tune", "Selective retouch"],
    },
  },
  {
    id: "fashion-edit",
    title: "Fashion Editorial",
    category: "Editorial",
    description: "High-end fashion retouch with cinematic color and texture preservation.",
    tools: ["Photoshop", "Capture One"],
    cover: "bg-gradient-to-br from-fuchsia-600/40 via-primary/30 to-zinc-900",
    details: {
      overview: "Editorial set - clean retouch, bold grade, no over-smoothing.",
      process: ["Tether & cull", "Skin retouch", "Garment cleanup", "Final grade"],
    },
  },
];

function PhotoPage() {
  return (
    <PageShell>
      <ServicePage
        eyebrow="Photo - Visual Enhancement"
        title="Photo Editing &"
        highlight="Visual Enhancement."
        subtitle="Retouching, cinematic edits, color grading, AI enhancement, and background manipulation - every pixel earns its place."
        accent="bg-gradient-to-br from-amber-500/15 via-primary/10 to-rose-500/15"
        stats={[
          { value: "500+", label: "Photos Edited" },
          { value: "40+", label: "Clients" },
          { value: "4K+", label: "Export Quality" },
          { value: "100%", label: "Hand-tuned" },
        ]}
        process={[
          { step: "Cull", desc: "Pick the keepers - quality over quantity." },
          { step: "Retouch", desc: "Frequency separation, dodge & burn, no plastic skin." },
          { step: "Grade", desc: "Cinematic color built per shoot, not from a preset pack." },
          { step: "Export", desc: "Print-ready, web-optimized, format-perfect." },
        ]}
        testimonials={[
          { quote: "My portraits finally look like the version of me I see in the mirror.", author: "Anaya T.", role: "Creative" },
          { quote: "Restored prints from 1992. Looks better than the originals.", author: "Vikram J.", role: "Family Archive" },
          { quote: "Editorial-grade retouch at a fraction of agency rates.", author: "Tara N.", role: "Stylist" },
        ]}
        categories={["Portrait", "Product", "AI Enhancement", "Compositing", "Cinematic", "Editorial"]}
        projects={projects}
      />
    </PageShell>
  );
}
