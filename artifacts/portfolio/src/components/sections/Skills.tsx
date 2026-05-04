import { motion } from "framer-motion";
import { SiPython, SiNodedotjs, SiFlask, SiFirebase, SiGit, SiGithub, SiJavascript, SiCplusplus } from "react-icons/si";
import { Code2, Brain, Cpu, Database, Wrench } from "lucide-react";

interface Skill {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  accentFrom: string;
  accentTo: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Programming Languages",
    icon: Code2,
    accentFrom: "from-yellow-500",
    accentTo: "to-orange-400",
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
    accentFrom: "from-violet-500",
    accentTo: "to-indigo-500",
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
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
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
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-500",
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
    accentFrom: "from-pink-500",
    accentTo: "to-rose-500",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Toolkit</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A curated stack built through real projects and competitions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.accentFrom} ${cat.accentTo} flex items-center justify-center shadow`}>
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-sm">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground/80 hover:border-primary/30 hover:text-foreground transition-colors"
                  >
                    {skill.icon && <skill.icon className="w-3.5 h-3.5" />}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
