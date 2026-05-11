import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { ServicePage, ServiceProject } from "@/components/portfolio/ServicePage";

export const Route = createFileRoute("/video")({
  component: VideoPage,
  head: () => ({
    meta: [
      { title: "Video Editing - Parv Jain" },
      { name: "description", content: "Cinematic video editing, reels, ads, and motion graphics by Parv Jain." },
      { property: "og:title", content: "Cinematic Video Editing - Parv Jain" },
      { property: "og:description", content: "Reels, ads, promos, transitions, and motion graphics." },
    ],
  }),
});

const projects: ServiceProject[] = [
  {
    id: "brand-promo",
    title: "Aurora - Brand Promo",
    category: "Promo",
    description: "60-second cinematic brand film with original color grade and sound design.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    cover: "bg-[radial-gradient(ellipse_at_center,_oklch(0.5_0.2_300/0.6),_oklch(0.1_0.02_260))]",
    meta: { duration: "0:60" },
    details: {
      overview: "A 60s cinematic film for Aurora's launch - slow push-ins, soft golden grade, ambient pad layered with subtle foley.",
      process: ["Brief & mood reel", "Edit assembly", "Sound design", "Color grade", "Final master"],
      challenges: "Footage was shot on three different cameras - matching grade was the heaviest lift.",
      outcome: "Used as the hero asset across YouTube, IG, and the home page.",
    },
  },
  {
    id: "reel-fashion",
    title: "Fashion Reel Series",
    category: "Reels",
    description: "Beat-synced fashion reels with kinetic transitions for a streetwear brand.",
    tools: ["Premiere Pro", "After Effects"],
    cover: "bg-[radial-gradient(ellipse_at_top,_oklch(0.6_0.25_350/0.6),_oklch(0.1_0.02_260))]",
    meta: { duration: "0:15" },
    details: {
      overview: "5-reel series cut to a single track - each reel its own micro-story but visually consistent.",
      process: ["Music selection", "Beat mapping", "Cut & transitions", "Type animation"],
      outcome: "1.2M combined views, 14k saves.",
    },
  },
  {
    id: "ad-saas",
    title: "SaaS Product Ad",
    category: "Ads",
    description: "30-second product ad with screen recordings, mockups, and motion graphics.",
    tools: ["After Effects", "Premiere Pro", "Figma"],
    cover: "bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.55_0.22_220/0.6),_oklch(0.1_0.02_260))]",
    meta: { duration: "0:30" },
    details: {
      overview: "Punchy SaaS ad - problem, product, proof, CTA. Tight pacing under 30s.",
      process: ["Storyboard", "Screen capture", "Mockup compositing", "Motion graphics", "VO mix"],
    },
  },
  {
    id: "motion-logo",
    title: "Animated Logo Pack",
    category: "Motion Graphics",
    description: "Three logo animations - minimal, kinetic, and cinematic variants.",
    tools: ["After Effects"],
    cover: "bg-[radial-gradient(ellipse_at_center,_oklch(0.7_0.2_180/0.5),_oklch(0.1_0.02_260))]",
    meta: { duration: "0:05" },
    details: {
      overview: "A logo animation kit so the brand can pick its mood per platform.",
      process: ["Logo audit", "Rig & key", "Easing pass", "Render variants"],
    },
  },
  {
    id: "wedding-film",
    title: "Wedding Highlight Film",
    category: "Cinematic",
    description: "3-minute cinematic wedding highlight - handheld, warm, narrative.",
    tools: ["DaVinci Resolve", "Premiere Pro"],
    cover: "bg-[radial-gradient(ellipse_at_top_left,_oklch(0.6_0.18_60/0.6),_oklch(0.1_0.02_260))]",
    meta: { duration: "3:12" },
    details: {
      overview: "Edited around the couple's vows - every cut earns its place.",
      process: ["Footage cull", "Story spine", "Music sync", "Color grade", "Audio polish"],
    },
  },
  {
    id: "event-recap",
    title: "Tech Event Recap",
    category: "Promo",
    description: "90-second recap of a 2-day tech summit - fast, energetic, on-brand.",
    tools: ["Premiere Pro", "After Effects"],
    cover: "bg-[radial-gradient(ellipse_at_center,_oklch(0.55_0.22_275/0.6),_oklch(0.1_0.02_260))]",
    meta: { duration: "1:30" },
    details: {
      overview: "Recap film cut for social - vertical and landscape masters delivered.",
      process: ["Footage review", "Highlight selects", "Music & pacing", "Brand graphics", "Multi-format export"],
    },
  },
];

function VideoPage() {
  return (
    <PageShell>
      <ServicePage
        eyebrow="Video - Visual Storytelling"
        title="Cinematic Video Editing &"
        highlight="Visual Storytelling."
        subtitle="Reels, ads, promos, transitions, and motion graphics - produced with a director's eye for pacing, sound design, and color."
        accent="bg-gradient-to-br from-primary/15 via-accent/10 to-cyan-400/15"
        stats={[
          { value: "120+", label: "Edits Shipped" },
          { value: "5M+", label: "Combined Views" },
          { value: "30+", label: "Brands" },
          { value: "4K", label: "Master Quality" },
        ]}
        process={[
          { step: "Brief", desc: "Goals, audience, references, and a clear deliverable list." },
          { step: "Assembly", desc: "Story-first rough cut - pacing locked before polish." },
          { step: "Polish", desc: "Sound design, color grade, motion graphics." },
          { step: "Master", desc: "Multi-format exports tuned per platform." },
        ]}
        testimonials={[
          { quote: "The grade alone made our brand feel premium. Worth every minute.", author: "Devika R.", role: "Brand Director" },
          { quote: "Fastest reel turnaround we've worked with - and somehow still cinematic.", author: "Yash K.", role: "Creator" },
          { quote: "Sound design was the unlock. Felt like a real ad, not a TikTok.", author: "Mira S.", role: "Founder" },
        ]}
        categories={["Promo", "Reels", "Ads", "Motion Graphics", "Cinematic"]}
        projects={projects}
      />
    </PageShell>
  );
}
