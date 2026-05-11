import { useEffect, useState, useCallback } from "react";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "./TiltCard";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

type Project = {
  title: string;
  description: string;
  overview: string;
  problem: string;
  features: string[];
  tech: string[];
  image: string;
  gallery: string[];
  process: string[];
  challenges: string;
  learnings: string;
  role: string;
  future: string[];
  href: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Airbnb Data Analysis",
    description:
      "Exploratory data analysis of Airbnb listings - uncovering pricing trends, location insights, and host patterns through clean visualizations.",
    overview:
      "An end-to-end EDA project on the Airbnb NYC dataset focused on translating raw listing data into actionable insights for hosts and travelers.",
    problem:
      "Airbnb listings vary wildly by neighborhood, room type, and host behavior. The goal was to surface what really drives price, demand, and review activity.",
    features: [
      "Cleaning & preprocessing 40k+ listings",
      "Geo-distribution heatmaps by neighborhood",
      "Price vs. room type & availability analysis",
      "Top hosts and review trend detection",
      "Outlier handling and feature engineering",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    image: p1,
    gallery: [p1, p2, p3],
    process: [
      "Loaded and audited dataset for nulls and anomalies",
      "Cleaned price, location, and host columns",
      "Built univariate and bivariate visualizations",
      "Layered geo-plots over neighborhood groups",
      "Synthesized findings into a narrative report",
    ],
    challenges:
      "Skewed price distributions and inconsistent location data required custom cleaning and log-transformations to make trends interpretable.",
    learnings:
      "Sharpened storytelling through data - learned that the best EDA isn't about more charts, it's about the right ones.",
    role: "Solo project - owned data cleaning, analysis, visualization, and write-up.",
    future: ["Add interactive Plotly dashboards", "Model price prediction with regression", "Deploy as a Streamlit app"],
    href: "https://github.com/parvjainnn/Airbnb_DataAnalysis",
  },
  {
    title: "Plant Disease Detection",
    description: "AI-based system that detects plant diseases from leaf images using deep learning and image processing.",
    overview:
      "A computer vision pipeline that classifies leaf images into healthy or diseased categories to help farmers act early.",
    problem:
      "Crop diseases cause major yield loss; manual diagnosis is slow and inconsistent. A reliable image-based detector can scale expert knowledge.",
    features: [
      "Image preprocessing & augmentation",
      "CNN classifier across multiple disease classes",
      "Confidence scoring per prediction",
      "Lightweight inference for low-resource devices",
    ],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    image: p2,
    gallery: [p2, p1, p3],
    process: [
      "Collected and labeled leaf image dataset",
      "Built augmentation pipeline (flip, rotate, zoom)",
      "Trained CNN with transfer learning",
      "Tuned hyperparameters and evaluated F1",
      "Exported model for inference",
    ],
    challenges:
      "Class imbalance and visually similar disease patterns required careful augmentation and a deeper backbone to improve accuracy.",
    learnings:
      "Practical exposure to the full ML lifecycle - from dataset hygiene to deployment-ready models.",
    role: "Solo project - model architecture, training, and evaluation.",
    future: ["Mobile app integration", "Real-time camera inference", "Expand to more crops"],
    href: "https://github.com/parvjainnn/Plant_Disease_Detection",
  },
  {
    title: "HealthTwin AI",
    description: "AI-powered health assistant providing personalized insights, predictions, and a digital twin of your wellbeing.",
    overview:
      "A digital health twin that synthesizes user data into personalized insights using LLMs and predictive modeling.",
    problem:
      "Health data is scattered and hard to interpret. Users need a single, intelligent layer that translates signals into clear next steps.",
    features: [
      "Conversational health assistant (LLM-powered)",
      "Personal metric tracking",
      "Predictive risk insights",
      "Digital twin profile",
    ],
    tech: ["Python", "LLM", "FastAPI", "React", "AI"],
    image: p3,
    gallery: [p3, p2, p1],
    process: [
      "Defined user personas & data schema",
      "Prototyped LLM prompt flows",
      "Built API with FastAPI",
      "Integrated insights into a clean UI",
      "Iterated on response quality",
    ],
    challenges:
      "Designing prompts that stay safe and grounded while still feeling personal required tight guardrails and structured outputs.",
    learnings:
      "Bridging AI quality with UX - even great models fail without trust, clarity, and tight feedback loops.",
    role: "Full-stack - backend, prompt engineering, and frontend integration.",
    future: ["Wearable integrations", "Long-term memory & trends", "Clinician-mode dashboards"],
    href: "https://github.com/parvjainnn/HealthTwin_AI",
  },
];

export function Projects() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [imgIdx, setImgIdx] = useState(0);
  const [loading, setLoading] = useState(false);

  const open = useCallback((i: number) => {
    setActiveIdx(i);
    setImgIdx(0);
    setLoading(true);
    setTimeout(() => setLoading(false), 350);
  }, []);

  const close = useCallback(() => setActiveIdx(null), []);
  const navProject = useCallback(
    (dir: 1 | -1) => {
      setActiveIdx((cur) => {
        if (cur === null) return cur;
        const next = (cur + dir + projects.length) % projects.length;
        setImgIdx(0);
        setLoading(true);
        setTimeout(() => setLoading(false), 300);
        return next;
      });
    },
    [],
  );

  // body scroll lock + ESC / arrow keys
  useEffect(() => {
    if (activeIdx === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") navProject(1);
      if (e.key === "ArrowLeft") navProject(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIdx, close, navProject]);

  const active = activeIdx !== null ? projects[activeIdx] : null;

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">03 - Projects</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Selected work.</h2>
          </motion.div>
          <p className="text-muted-foreground max-w-md">
            A few things I've built recently - click any card to dive into the case study.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              type="button"
              onClick={() => open(i)}
              data-cursor
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-left"
            >
              <TiltCard className="glass rounded-3xl overflow-hidden shadow-card h-full flex flex-col group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-primary">
                    <Sparkles size={12} /> View case study →
                  </div>
                </div>
              </TiltCard>
            </motion.button>
          ))}
        </div>
      </div>

      {/* PREMIUM CASE-STUDY MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[80] bg-background/70 backdrop-blur-xl flex items-start sm:items-center justify-center p-2 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl glass rounded-3xl overflow-hidden my-4 sm:my-8 shadow-elegant"
            >
              {/* Top controls */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                <button
                  onClick={() => navProject(-1)}
                  aria-label="Previous project"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-foreground/10 transition"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => navProject(1)}
                  aria-label="Next project"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-foreground/10 transition"
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  onClick={close}
                  aria-label="Close"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-destructive/20 transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Hero / carousel */}
              <div className="relative aspect-[16/8] overflow-hidden bg-foreground/5">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.gallery[imgIdx]}
                    src={active.gallery[imgIdx]}
                    alt={active.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                {/* dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                  {active.gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      aria-label={`Image ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${i === imgIdx ? "w-6 bg-primary" : "w-1.5 bg-foreground/30 hover:bg-foreground/60"}`}
                    />
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Case Study</div>
                  <h3 className="font-display text-3xl sm:text-5xl font-bold leading-tight mt-1">{active.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="max-h-[60vh] overflow-y-auto">
                {loading ? (
                  <div className="flex items-center justify-center py-24">
                    <Loader2 className="animate-spin text-primary" size={28} />
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 sm:p-10 space-y-8"
                  >
                    <p className="text-base sm:text-lg leading-relaxed text-foreground/90">{active.overview}</p>

                    <Section title="Problem">
                      <p className="text-sm text-muted-foreground leading-relaxed">{active.problem}</p>
                    </Section>

                    <Section title="Features & Functionality">
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {active.features.map((f) => (
                          <li key={f} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-0.5">→</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </Section>

                    <Section title="Tech Stack">
                      <div className="flex flex-wrap gap-2">
                        {active.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:-translate-y-0.5 transition-all"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </Section>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Section title="Development Process">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {active.process.map((s, i) => (
                            <li key={s} className="flex gap-2">
                              <span className="text-primary font-mono text-[10px] mt-1">0{i + 1}</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Role & Contribution">
                        <p className="text-sm text-muted-foreground leading-relaxed">{active.role}</p>
                      </Section>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Section title="Challenges">
                        <p className="text-sm text-muted-foreground leading-relaxed">{active.challenges}</p>
                      </Section>
                      <Section title="Learnings & Outcome">
                        <p className="text-sm text-muted-foreground leading-relaxed">{active.learnings}</p>
                      </Section>
                    </div>

                    <Section title="Future Improvements">
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {active.future.map((f) => (
                          <li key={f} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-accent mt-0.5">✦</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </Section>

                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      <a
                        href={active.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-glow hover:opacity-95 hover:-translate-y-0.5 transition-all"
                      >
                        <Github size={15} /> View on GitHub
                      </a>
                      {active.demo && (
                        <a
                          href={active.demo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm font-medium hover:bg-foreground/10 transition-all"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h4 className="font-display text-xs uppercase tracking-widest text-primary mb-3">{title}</h4>
      {children}
    </motion.div>
  );
}
