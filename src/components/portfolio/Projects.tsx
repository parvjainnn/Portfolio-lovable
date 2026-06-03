import { useEffect, useState, useCallback } from "react";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
      "Analyzed 48,000+ NYC Airbnb listings to surface pricing trends, location demand gaps, and host behavior patterns. Built 12 visualizations revealing a 34% price premium in verified listings. Delivered as a reproducible Jupyter notebook.",
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
      "Sharpened storytelling through data — learned that the best EDA isn't about more charts, it's about the right ones.",
    role: "Solo project — owned data cleaning, analysis, visualization, and write-up.",
    future: ["Add interactive Plotly dashboards", "Model price prediction with regression", "Deploy as a Streamlit app"],
    href: "https://github.com/parvjainnn/Airbnb_DataAnalysis",
  },
  {
    title: "Plant Disease Detection",
    description: "Deep learning classifier that identifies 38 plant disease categories from leaf images with 93%+ test accuracy. Trained on the PlantVillage dataset using transfer learning with TensorFlow/Keras. Built for real-world agricultural use.",
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
      "Practical exposure to the full ML lifecycle — from dataset hygiene to deployment-ready models.",
    role: "Solo project — model architecture, training, and evaluation.",
    future: ["Mobile app integration", "Real-time camera inference", "Expand to more crops"],
    href: "https://github.com/parvjainnn/Plant_Disease_Detection",
  },
  {
    title: "HealthTwin AI",
    description: "LLM-powered personal health assistant that builds a digital model of the user's wellbeing and delivers personalized insights. React frontend with FastAPI backend. Designed for people who want proactive, not reactive, health awareness.",
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
      "Bridging AI quality with UX — even great models fail without trust, clarity, and tight feedback loops.",
    role: "Full-stack — backend, prompt engineering, and frontend integration.",
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
    setTimeout(() => setLoading(false), 300);
  }, []);

  const close = useCallback(() => setActiveIdx(null), []);
  const navProject = useCallback((dir: 1 | -1) => {
    setActiveIdx((cur) => {
      if (cur === null) return cur;
      const next = (cur + dir + projects.length) % projects.length;
      setImgIdx(0);
      setLoading(true);
      setTimeout(() => setLoading(false), 250);
      return next;
    });
  }, []);

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
    <section id="projects" style={{ padding: "var(--sp-20) 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1200, padding: "0 var(--sp-8)" }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-label" style={{ marginBottom: "var(--sp-6)" }}
        >
          <span className="num">05</span> — Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="display-heading" style={{ marginBottom: "var(--sp-4)" }}
        >
          Selected work.
        </motion.h2>
        <p style={{ color: "var(--text-muted)", fontSize: 16, marginBottom: "var(--sp-12)" }}>
          A few things I've built recently.
        </p>

        <div className="grid grid-cols-1" style={{ gap: "var(--sp-6)" }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              role="button"
              tabIndex={0}
              onClick={() => open(i)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); } }}
              data-cursor
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col md:flex-row overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
                minHeight: 240,
                transition: "border-color 200ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
            >
              {/* Image */}
              <div
                className="md:w-2/5"
                style={{ overflow: "hidden", height: 200, flexShrink: 0 }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full md:h-full"
                  style={{ objectFit: "cover", height: "100%", minHeight: 200 }}
                />
              </div>
              {/* Content */}
              <div
                className="md:w-3/5 flex flex-col justify-between"
                style={{ padding: "var(--sp-8)" }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: "var(--text-muted)",
                      marginBottom: "var(--sp-3)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                      marginBottom: "var(--sp-3)",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "var(--sp-5)",
                    }}
                  >
                    {p.description}
                  </p>
                  <div className="flex flex-wrap" style={{ gap: "var(--sp-2)", marginBottom: "var(--sp-6)" }}>
                    {p.tech.slice(0, 5).map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center" style={{ gap: "var(--sp-5)" }}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center"
                      style={{
                        gap: 6,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: "var(--text-muted)",
                        transition: "color 150ms ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a
                      href={p.demo || "#"}
                      target={p.demo ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      onClick={(e) => { if (!p.demo) e.preventDefault(); e.stopPropagation(); }}
                      className="inline-flex items-center"
                      style={{
                        gap: 6,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: "var(--text-muted)",
                        transition: "color 150ms ease",
                        opacity: p.demo ? 1 : 0.6,
                      }}
                      onMouseEnter={(e) => { if (p.demo) e.currentTarget.style.color = "var(--text-primary)"; }}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                  <span
                    className="case-study-link inline-flex items-center"
                    style={{
                      gap: 6,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: 13,
                      color: "var(--accent)",
                      transition: "color 150ms ease",
                    }}
                  >
                    View case study
                    <span
                      className="case-arrow"
                      style={{
                        display: "inline-block",
                        transition: "transform 150ms ease",
                      }}
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "var(--sp-6)" }}>
          <a
            href="https://github.com/parvjainnn"
            target="_blank"
            rel="noreferrer noopener"
            data-cursor
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: 14,
              color: "var(--text-muted)",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            More on GitHub →
          </a>
        </div>
      </div>

      <style>{`
        .group:hover .case-arrow { transform: translateX(4px); }
      `}</style>

      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[80] flex items-start sm:items-center justify-center p-2 sm:p-6 overflow-y-auto"
            style={{ background: "rgba(8, 11, 15, 0.85)" }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden my-4 sm:my-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                <button
                  onClick={() => navProject(-1)}
                  aria-label="Previous"
                  className="h-10 w-10 rounded-md flex items-center justify-center"
                  style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => navProject(1)}
                  aria-label="Next"
                  className="h-10 w-10 rounded-md flex items-center justify-center"
                  style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }}
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  onClick={close}
                  aria-label="Close"
                  className="h-10 w-10 rounded-md flex items-center justify-center"
                  style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative aspect-[16/8] overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.gallery[imgIdx]}
                    src={active.gallery[imgIdx]}
                    alt={active.title}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                  {active.gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      aria-label={`Image ${i + 1}`}
                      style={{
                        height: 4,
                        width: i === imgIdx ? 20 : 6,
                        borderRadius: 2,
                        background: i === imgIdx ? "var(--accent)" : "rgba(240, 246, 252, 0.3)",
                        transition: "all 200ms",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto">
                {loading ? (
                  <div className="flex items-center justify-center" style={{ padding: "var(--sp-24) 0" }}>
                    <Loader2 className="animate-spin" size={24} style={{ color: "var(--accent)" }} />
                  </div>
                ) : (
                  <div style={{ padding: "var(--sp-8) var(--sp-10)" }}>
                    <p style={{ color: "var(--text-muted)", fontSize: 12, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "var(--sp-3)" }}>
                      Case Study
                    </p>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 32, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: "var(--sp-6)" }}>
                      {active.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "var(--sp-8)" }}>
                      {active.overview}
                    </p>

                    {[
                      { label: "Problem", body: <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{active.problem}</p> },
                      {
                        label: "Features",
                        body: (
                          <ul className="grid sm:grid-cols-2" style={{ gap: "var(--sp-2)" }}>
                            {active.features.map((f) => (
                              <li key={f} style={{ color: "var(--text-secondary)", fontSize: 14, display: "flex", gap: 8 }}>
                                <span style={{ color: "var(--accent)" }}>→</span>{f}
                              </li>
                            ))}
                          </ul>
                        ),
                      },
                      {
                        label: "Tech Stack",
                        body: (
                          <div className="flex flex-wrap" style={{ gap: "var(--sp-2)" }}>
                            {active.tech.map((t) => <span key={t} className="skill-tag">{t}</span>)}
                          </div>
                        ),
                      },
                      { label: "Challenges", body: <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{active.challenges}</p> },
                      { label: "Learnings", body: <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>{active.learnings}</p> },
                      { label: "Role", body: <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>{active.role}</p> },
                    ].map(({ label, body }) => (
                      <div key={label} style={{ marginBottom: "var(--sp-8)" }}>
                        <h4 className="section-label" style={{ marginBottom: "var(--sp-3)" }}>{label}</h4>
                        {body}
                      </div>
                    ))}

                    <a
                      href={active.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center"
                      style={{
                        gap: 8,
                        background: "var(--accent)",
                        color: "#080B0F",
                        fontWeight: 600,
                        fontSize: 14,
                        padding: "12px var(--sp-6)",
                        borderRadius: "var(--radius-md)",
                      }}
                    >
                      <Github size={16} /> View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
