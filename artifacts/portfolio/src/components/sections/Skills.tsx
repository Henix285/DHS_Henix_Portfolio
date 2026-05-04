import { motion } from "framer-motion";
import { SiPython, SiNodedotjs, SiFlask, SiFirebase, SiGit, SiGithub } from "react-icons/si";
import { Terminal } from "lucide-react";

interface Skill {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  level: number;
}

interface SkillCategory {
  prefix: string;
  label: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    prefix: "lang",
    label: "Programming Languages",
    color: "text-yellow-400",
    skills: [
      { name: "Python", icon: SiPython, level: 90 },
      { name: "C++", level: 78 },
      { name: "Java", level: 75 },
      { name: "C", level: 72 },
    ],
  },
  {
    prefix: "ai",
    label: "AI / Machine Learning",
    color: "text-violet-400",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "NLP", level: 82 },
      { name: "Recommendation Systems", level: 78 },
      { name: "Data-driven Models", level: 80 },
    ],
  },
  {
    prefix: "core",
    label: "Core CS",
    color: "text-emerald-400",
    skills: [
      { name: "Data Structures & Algorithms", level: 88 },
      { name: "Object-Oriented Programming", level: 84 },
      { name: "Problem Solving", level: 90 },
      { name: "Graph Algorithms", level: 82 },
    ],
  },
  {
    prefix: "web",
    label: "Backend / Web",
    color: "text-cyan-400",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 80 },
      { name: "Express.js", level: 78 },
      { name: "Flask", icon: SiFlask, level: 76 },
      { name: "Firebase", icon: SiFirebase, level: 75 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    prefix: "tools",
    label: "Tools",
    color: "text-pink-400",
    skills: [
      { name: "Git", icon: SiGit, level: 85 },
      { name: "GitHub", icon: SiGithub, level: 85 },
    ],
  },
];

function SkillBar({ skill, color, delay }: { skill: Skill; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {skill.icon && <skill.icon className={`w-3.5 h-3.5 ${color}`} />}
          <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
            {skill.name}
          </span>
        </div>
        <span className={`text-xs font-bold font-mono ${color}`}>{skill.level}%</span>
      </div>
      <div className="h-1 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${
            color === "text-yellow-400"
              ? "from-yellow-500 to-orange-400"
              : color === "text-violet-400"
              ? "from-violet-500 to-indigo-500"
              : color === "text-emerald-400"
              ? "from-emerald-500 to-teal-500"
              : color === "text-cyan-400"
              ? "from-cyan-500 to-blue-500"
              : "from-pink-500 to-rose-400"
          }`}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span className="text-[18vw] font-black text-foreground/[0.02] leading-none tracking-tighter uppercase">
          SKILLS
        </span>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Toolkit</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Built through<br />
            <span className="text-muted-foreground/50">real projects.</span>
          </h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0d0d14] border border-border/60 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-5 py-3 bg-[#111119] border-b border-border/40">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <div className="flex items-center gap-1.5 ml-4 text-muted-foreground/50 text-xs font-mono">
              <Terminal className="w-3 h-3" />
              henix@portfolio — skills.sh
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm space-y-8">
            <div>
              <span className="text-emerald-400">henix</span>
              <span className="text-muted-foreground/60">@portfolio</span>
              <span className="text-muted-foreground/40">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-muted-foreground/40">$ </span>
              <span className="text-foreground">./display-skills --all --with-levels</span>
            </div>

            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-muted-foreground/40">#</span>
                  <span className={`font-bold ${cat.color}`}>{cat.prefix}</span>
                  <span className="text-muted-foreground/40">→</span>
                  <span className="text-muted-foreground text-xs">{cat.label}</span>
                </div>
                <div className="pl-4 border-l border-border/30 space-y-3">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      color={cat.color}
                      delay={ci * 0.1 + si * 0.06}
                    />
                  ))}
                </div>
              </motion.div>
            ))}

            <div className="text-muted-foreground/40 text-xs">
              <span className="text-emerald-400">✓</span> All systems operational. Continuous learning in progress...
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
