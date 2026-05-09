import { motion } from "framer-motion";
import { SiPython, SiNodedotjs, SiFlask, SiFirebase, SiGit, SiGithub, SiCplusplus } from "react-icons/si";

const stack = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "Java" },
      { name: "C" },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "Machine Learning" },
      { name: "NLP" },
      { name: "Recommendation Systems" },
      { name: "Predictive Models" },
    ],
  },
  {
    category: "Core CS",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Graph Algorithms" },
      { name: "System Design" },
      { name: "OOP" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js" },
      { name: "Flask", icon: SiFlask },
      { name: "Firebase", icon: SiFirebase },
      { name: "REST APIs" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-violet-400 mb-4 block">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Tools of the trade.
          </h2>
        </motion.div>

        <div className="space-y-px rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {stack.map((row, i) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 transition-all duration-200"
              style={{
                background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.01)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.04)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.01)";
              }}
            >
              <div className="w-32 flex-shrink-0">
                <span className="text-xs font-mono font-medium text-violet-400/70">{row.category}</span>
              </div>
              <div className="flex flex-wrap gap-2 flex-1">
                {row.skills.map((skill, j) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.05 }}
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {skill.icon && <skill.icon className="w-3.5 h-3.5 opacity-70" />}
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
