import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech — Computer Science & Engineering",
    institution: "SRM Institute of Science and Technology",
    period: "2024 – 2028",
    score: "9.71",
    unit: "CGPA",
    featured: true,
  },
  {
    icon: BookOpen,
    degree: "Class XII — State Board",
    institution: "Sri Chaitanya Junior College",
    period: "Completed",
    score: "87",
    unit: "%",
    featured: false,
  },
  {
    icon: Award,
    degree: "Class X — CBSE",
    institution: "Dr.K.K.R.Gowtham Secondary School",
    period: "Completed",
    score: "84",
    unit: "%",
    featured: false,
  },
];

export function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-violet-400 mb-4 block">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Academic foundation.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-5 p-6 rounded-2xl card-glass relative overflow-hidden"
              style={edu.featured ? { borderColor: "rgba(124,58,237,0.2)" } : {}}
            >
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)" }} />

              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: edu.featured ? "rgba(124,58,237,0.12)" : "rgba(255,255,255,0.04)",
                  border: edu.featured ? "1px solid rgba(124,58,237,0.25)" : "1px solid rgba(255,255,255,0.07)",
                }}>
                <edu.icon className={`w-5 h-5 ${edu.featured ? "text-violet-400" : "text-white/30"}`} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-sm">{edu.degree}</h3>
                <p className="text-sm text-white/40 mt-0.5">{edu.institution}</p>
                <p className="text-xs text-white/20 mt-0.5 font-mono">{edu.period}</p>
              </div>

              <div className="flex-shrink-0">
                <span className={`text-3xl font-black ${edu.featured ? "text-violet-400" : "text-white/40"}`}>
                  {edu.score}
                </span>
                <span className={`text-base font-bold ${edu.featured ? "text-violet-400/70" : "text-white/25"}`}>
                  {edu.unit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
