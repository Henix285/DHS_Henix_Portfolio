import { motion } from "framer-motion";
import { Trophy, Shield, MessageSquare, TrendingUp, Network, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "clusternodes",
    title: "ClusterNodes",
    tagline: "Graph-based distributed systems analysis",
    description: "Graph-based distributed systems analysis prototype using BFS, DFS and Dijkstra's algorithm. Visualized node interactions for infrastructure monitoring and anomaly insights.",
    tech: ["Python", "Graph Algorithms", "BFS/DFS", "Dijkstra"],
    badge: "1st Prize — ₹50,000",
    context: "Hack2Future 2.0 — IIIT Dharwad",
    video: "/videos/clusternodes.mp4",
    icon: Network,
    isWinner: true,
  },
  {
    id: "infrascan",
    title: "InfraScan",
    tagline: "Phishing detection & behavioral analysis",
    description: "Phishing detection system using behavioral and metadata-based signals. Enabled risk scoring and anomaly-based threat identification for real-time security.",
    tech: ["Python", "Machine Learning", "Anomaly Detection", "Security"],
    context: "Prismatic 2K26",
    video: "/videos/infrascan.mp4",
    icon: Shield,
    isWinner: false,
  },
  {
    id: "textflow",
    title: "TextFlow Assist",
    tagline: "NLP-powered text assistance engine",
    description: "NLP-based text flow assistant that leverages natural language processing for smart text analysis, corrections, and intelligent suggestions.",
    tech: ["Python", "NLP", "Flask"],
    context: "ShadowFox Internship",
    video: "/videos/textflow.mp4",
    icon: MessageSquare,
    isWinner: false,
  },
  {
    id: "loanapproval",
    title: "Loan Approval Predictor",
    tagline: "ML model for financial decision systems",
    description: "Machine learning predictor for loan approval using financial data and feature engineering. Built functional prototype with model evaluation and real-world data patterns.",
    tech: ["Python", "Scikit-learn", "Pandas", "ML Modeling"],
    context: "ShadowFox Internship",
    video: "/videos/loanapproval.mp4",
    icon: TrendingUp,
    isWinner: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-violet-400 mb-4 block">
              Live Systems
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Things I've shipped.
            </h2>
          </div>
          <p className="text-sm text-white/35 max-w-xs sm:text-right">
            Every project ships with a working demo. Real systems, not prototypes.
          </p>
        </motion.div>

        {/* Winner card — full width */}
        {projects.filter(p => p.isWinner).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group mb-6 rounded-2xl overflow-hidden relative"
            style={{
              background: "rgba(124,58,237,0.05)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
            data-testid={`card-project-${project.id}`}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Video */}
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[280px] overflow-hidden" style={{ background: "rgba(0,0,0,0.4)" }}>
                <video controls muted loop playsInline
                  className="w-full h-full object-contain bg-black"
                  data-testid={`video-${project.id}`}>
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", color: "#fbbf24" }}>
                    <Trophy className="w-3 h-3" />
                    {project.badge}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}>
                    <project.icon className="w-4.5 h-4.5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">{project.title}</h3>
                    <p className="text-xs text-violet-400">{project.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg font-medium"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-white/25">{project.context}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other projects — 3 col */}
        <div className="grid md:grid-cols-3 gap-4">
          {projects.filter(p => !p.isWinner).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden card-glass hover:border-violet-500/20 transition-all"
              data-testid={`card-project-${project.id}`}
            >
              {/* Video thumbnail */}
              <div className="relative aspect-video overflow-hidden" style={{ background: "rgba(0,0,0,0.3)" }}>
                <video muted loop playsInline
                  className="w-full h-full object-cover"
                  data-testid={`video-${project.id}`}
                  onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={e => (e.currentTarget as HTMLVideoElement).pause()}
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                {/* Play hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="text-xs text-white/50 font-mono">hover to play</div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.15)" }}>
                    <project.icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-violet-400/70">{project.tagline}</p>
                  </div>
                </div>
                <p className="text-xs text-white/40 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded font-medium"
                      style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-white/20">{project.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
