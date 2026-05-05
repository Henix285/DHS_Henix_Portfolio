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
  accentFrom: string;
  accentTo: string;
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
    accentFrom: "from-yellow-500",
    accentTo: "to-orange-400",
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
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-500",
  },
  {
    title: "TextFlow Assist",
    tagline: "NLP-powered intelligent text assistance",
    description: "NLP-based text flow assistant built during ShadowFox Internship. Leverages natural language processing for smart text analysis and assistance.",
    tech: ["Python", "NLP", "Machine Learning", "Flask"],
    context: "ShadowFox Internship — December 2025",
    video: "/videos/textflow.mp4",
    icon: MessageSquare,
    accentFrom: "from-violet-500",
    accentTo: "to-purple-500",
  },
  {
    title: "Loan Approval Predictor",
    tagline: "ML model for intelligent loan decisions",
    description: "Machine learning predictor for loan approval using financial data and feature engineering. Built functional prototype with model evaluation and real-world data patterns.",
    tech: ["Python", "Scikit-learn", "Pandas", "ML Modeling"],
    context: "ShadowFox Internship — December 2025",
    video: "/videos/loanapproval.mp4",
    icon: TrendingUp,
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real systems. Real demos. Every project solves a meaningful problem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/5"
              data-testid={`card-project-${project.title.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accentFrom} ${project.accentTo}`} />

              {/* Video or placeholder */}
              <div className="relative aspect-video bg-background/50 overflow-hidden">
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
                    Your browser does not support this video.
                  </video>
                ) : (
                  <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${project.accentFrom}/10 ${project.accentTo}/5`}>
                    <project.icon className="w-12 h-12 text-muted-foreground/40 mb-3" />
                    <span className="text-xs text-muted-foreground/60 font-medium">
                      {project.noVideoLabel ?? "Demo"}
                    </span>
                  </div>
                )}
                {project.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-500 text-yellow-950 shadow-lg">
                      {project.badgeIcon && <project.badgeIcon className="w-3.5 h-3.5" />}
                      {project.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.accentFrom} ${project.accentTo} flex items-center justify-center flex-shrink-0 shadow`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                    <p className={`text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r ${project.accentFrom} ${project.accentTo}`}>
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground border-t border-border/50 pt-3">{project.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
