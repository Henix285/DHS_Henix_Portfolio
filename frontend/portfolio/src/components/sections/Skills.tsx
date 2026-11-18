import { motion } from "framer-motion";
import { SiPython, SiNodedotjs, SiFlask, SiFirebase, SiGit, SiGithub, SiCplusplus } from "react-icons/si";
import { Code2, Brain, Cpu, Database, ShieldCheck, Wrench } from "lucide-react";

interface Skill {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  glow: string;
  borderColor: string;
  tagClass: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Programming Languages",
    icon: Code2,
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.25)",
    borderColor: "rgba(245,158,11,0.35)",
    tagClass: "bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "Java" },
      { name: "C" },
    ],
  },
  {
    label: "AI / Machine Learning",
    icon: Brain,
    gradient: "from-slate-500 to-indigo-500",
    glow: "rgba(115,126,158,0.13)",
    borderColor: "rgba(132,142,172,0.22)",
    tagClass: "bg-indigo-500/10 text-indigo-200 border border-indigo-400/20 hover:bg-indigo-500/15",
    skills: [
      { name: "Machine Learning" },
      { name: "NLP" },
      { name: "Recommendation Systems" },
      { name: "Data-driven Models" },
    ],
  },
  {
    label: "Core CS",
    icon: Cpu,
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.25)",
    borderColor: "rgba(16,185,129,0.35)",
    tagClass: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "OOP" },
      { name: "Problem Solving" },
      { name: "Graph Algorithms" },
    ],
  },
  {
    label: "Backend / Web",
    icon: Database,
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.25)",
    borderColor: "rgba(6,182,212,0.35)",
    tagClass: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js" },
      { name: "Flask", icon: SiFlask },
      { name: "REST APIs" },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    label: "Tools",
    icon: Wrench,
    gradient: "from-rose-500 to-pink-500",
    glow: "rgba(244,63,94,0.25)",
    borderColor: "rgba(244,63,94,0.35)",
    tagClass: "bg-rose-500/15 text-rose-300 border border-rose-500/30 hover:bg-rose-500/25",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    label: "Emerging Technologies",
    icon: ShieldCheck,
    gradient: "from-rose-500 to-violet-500",
    glow: "rgba(217,70,239,0.18)",
    borderColor: "rgba(217,70,239,0.3)",
    tagClass: "bg-rose-500/10 text-rose-800 dark:text-rose-200 border border-rose-500/25 hover:bg-rose-500/15",
    skills: [
      { name: "Cybersecurity" },
      { name: "Blockchain" },
      { name: "DevOps" },
      { name: "Cloud Computing" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
            Toolkit
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Skills
          </h2>
            <div className="max-w-3xl mx-auto space-y-2 text-muted-foreground leading-relaxed">
              <p>
                Continuously exploring emerging technologies across AI/ML, full-stack development, cloud computing, DevOps, and software engineering.
              </p>
              <p className="text-sm">
                I enjoy learning new tools, experimenting with modern tech stacks, and building practical projects—especially as I continue learning AI/ML—to create innovative, scalable, and impactful solutions.
              </p>
            </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: "var(--glass-bg)",
                border: `1px solid ${cat.borderColor}`,
                boxShadow: `0 0 30px ${cat.glow}, 0 4px 20px var(--panel-shadow)`,
                backdropFilter: "blur(20px)",
              }}
            >
              <div className={`h-0.5 bg-gradient-to-r ${cat.gradient}`} />
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% -20%, ${cat.glow} 0%, transparent 60%)` }} />

              <div className="p-6 relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: `0 0 15px ${cat.glow}` }}>
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground/90">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.06 }}
                      className={`inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-default ${cat.tagClass}`}
                    >
                      {skill.icon && <skill.icon className="w-3.5 h-3.5" />}
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
