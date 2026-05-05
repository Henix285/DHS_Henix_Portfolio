import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech — Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology",
    period: "2024 – 2028",
    score: "9.71",
    unit: "CGPA",
    gradient: "from-violet-500 to-fuchsia-500",
    glow: "rgba(139,92,246,0.25)",
    borderColor: "rgba(139,92,246,0.4)",
    featured: true,
  },
  {
    icon: BookOpen,
    degree: "Class XII — State Board",
    institution: "Sri Chaitanya Junior College",
    period: "Completed",
    score: "87",
    unit: "%",
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.2)",
    borderColor: "rgba(6,182,212,0.3)",
    featured: false,
  },
  {
    icon: Award,
    degree: "Class X — CBSE",
    institution: "Dr.K.K.R.Gowtham Secondary School",
    period: "Completed",
    score: "84",
    unit: "%",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.2)",
    borderColor: "rgba(16,185,129,0.3)",
    featured: false,
  },
];

export function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span className="text-[12vw] font-black leading-none tracking-tighter uppercase"
          style={{ color: "rgba(255,255,255,0.02)" }}>
          EDUCATION
        </span>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Background
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Academic roots<br />
            <span className="text-muted-foreground/40">run deep.</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: edu.featured ? "rgba(139,92,246,0.05)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${edu.borderColor}`,
                boxShadow: `0 0 ${edu.featured ? "40px" : "20px"} ${edu.glow}, 0 4px 20px rgba(0,0,0,0.3)`,
                backdropFilter: "blur(20px)",
              }}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${edu.gradient}`} />
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 0% 50%, ${edu.glow} 0%, transparent 50%)` }} />

              <div className="pl-8 pr-6 py-6 flex flex-col sm:flex-row sm:items-center gap-5 relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                  style={{ boxShadow: `0 0 20px ${edu.glow}` }}>
                  <edu.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-base leading-tight">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground/40 mt-0.5">{edu.period}</p>
                </div>

                <div className="flex-shrink-0 text-right">
                  <span className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${edu.gradient}`}
                    style={{ filter: `drop-shadow(0 0 10px ${edu.glow})` }}>
                    {edu.score}
                  </span>
                  <span className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${edu.gradient}`}>
                    {edu.unit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
