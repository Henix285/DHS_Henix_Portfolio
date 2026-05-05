import { motion } from "framer-motion";
import { Trophy, Shield, MessageSquare, TrendingUp, Network } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  context: string;
  video?: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  glow: string;
  borderColor: string;
  techClass: string;
  badge?: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  noVideo?: boolean;
  noVideoLabel?: string;
}

const projects: Project[] = [
  {
    title: "ClusterNodes",
    tagline: "Graph-based distributed systems analysis",
    description: "Built a graph-based distributed systems analysis prototype using BFS, DFS and Dijkstra's algorithm. Visualized node interactions for infrastructure monitoring and anomaly insights.",
    tech: ["Python", "Graph Algorithms", "BFS/DFS", "Dijkstra", "Visualization"],
    context: "Winner — Hack2Future 2.0, IIIT Dharwad",
    video: "/videos/clusternodes.mp4",
    icon: Network,
    gradient: "from-amber-500 to-orange-400",
    glow: "rgba(245,158,11,0.25)",
    borderColor: "rgba(245,158,11,0.4)",
    techClass: "bg-amber-500/15 text-amber-300 border border-amber-500/25",
    badge: "1st Prize Winner",
    badgeIcon: Trophy,
  },
  {
    title: "InfraScan",
    tagline: "Phishing detection with behavioral analysis",
    description: "Developed a phishing detection system using behavioral and metadata-based signals. Enabled risk scoring and anomaly-based threat identification for real-time security.",
    tech: ["Python", "Machine Learning", "Security", "Anomaly Detection"],
    context: "Developed at Prismatic 2K26",
    video: "/videos/infrascan.mp4",
    icon: Shield,
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.22)",
    borderColor: "rgba(6,182,212,0.35)",
    techClass: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/25",
  },
  {
    title: "TextFlow Assist",
    tagline: "NLP-powered intelligent text assistance",
    description: "NLP-based text flow assistant built during ShadowFox Internship. Leverages natural language processing for smart text analysis and assistance.",
    tech: ["Python", "NLP", "Machine Learning", "Flask"],
    context: "ShadowFox Internship — December 2025",
    video: "/videos/textflow.mp4",
    icon: MessageSquare,
    gradient: "from-violet-500 to-purple-500",
    glow: "rgba(139,92,246,0.22)",
    borderColor: "rgba(139,92,246,0.35)",
    techClass: "bg-violet-500/15 text-violet-300 border border-violet-500/25",
  },
  {
    title: "Loan Approval Predictor",
    tagline: "ML model for intelligent loan decisions",
    description: "Machine learning predictor for loan approval using financial data and feature engineering. Built functional prototype with model evaluation and real-world data patterns.",
    tech: ["Python", "Scikit-learn", "Pandas", "ML Modeling"],
    context: "ShadowFox Internship — December 2025",
    video: "/videos/loanapproval.mp4",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.22)",
    borderColor: "rgba(16,185,129,0.35)",
    techClass: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/25",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real systems. Real demos. Every project solves a meaningful problem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${project.borderColor}`,
                boxShadow: `0 0 40px ${project.glow}, 0 8px 30px rgba(0,0,0,0.4)`,
                backdropFilter: "blur(20px)",
              }}
              data-testid={`card-project-${project.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`} />
              {/* Hover top glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% -10%, ${project.glow} 0%, transparent 60%)` }} />

              {/* Video */}
              <div className="relative aspect-video overflow-hidden" style={{ background: "rgba(0,0,0,0.4)" }}>
                {project.video && !project.noVideo ? (
                  <video
                    controls
                    muted
                    loop
                    playsInline
                    className={`w-full h-full ${project.title === "ClusterNodes" ? "object-contain bg-black" : "object-cover"}`}
                    data-testid={`video-${project.title.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center"
                    style={{ background: `radial-gradient(circle, ${project.glow} 0%, transparent 70%)` }}>
                    <project.icon className="w-12 h-12 text-muted-foreground/40 mb-3" />
                    <span className="text-xs text-muted-foreground/60 font-medium">{project.noVideoLabel ?? "Demo"}</span>
                  </div>
                )}
                {project.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black shadow-lg"
                      style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)", boxShadow: "0 0 20px rgba(245,158,11,0.5)" }}>
                      {project.badgeIcon && <project.badgeIcon className="w-3.5 h-3.5 text-amber-950" />}
                      <span className="text-amber-950">{project.badge}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    style={{ boxShadow: `0 0 15px ${project.glow}` }}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black leading-tight">{project.title}</h3>
                    <p className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className={`text-xs px-2.5 py-1 rounded-lg font-semibold ${project.techClass}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground/60 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  {project.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
