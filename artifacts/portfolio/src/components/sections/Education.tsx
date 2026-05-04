import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech — Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology",
    period: "2024 – 2028",
    score: "9.71 CGPA",
    scoreLabel: "3rd Semester, 2026",
    accentFrom: "from-violet-500",
    accentTo: "to-indigo-500",
    featured: true,
  },
  {
    icon: BookOpen,
    degree: "Class XII — State Board",
    institution: "Sri Chaitanya Junior College",
    period: "Completed",
    score: "87%",
    scoreLabel: "Percentage",
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-500",
    featured: false,
  },
  {
    icon: Award,
    degree: "Class X — CBSE",
    institution: "Dr.K.K.R.Gowtham Secondary School",
    period: "Completed",
    score: "84%",
    scoreLabel: "Percentage",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    featured: false,
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Background</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A strong academic foundation powering real-world innovation.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative bg-card border rounded-2xl overflow-hidden shadow-lg ${
                edu.featured ? "border-violet-500/30" : "border-border"
              }`}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${edu.accentFrom} ${edu.accentTo}`} />
              <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.accentFrom} ${edu.accentTo} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <edu.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground/60 mt-0.5">{edu.period}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${edu.accentFrom} ${edu.accentTo}`}>
                    {edu.score}
                  </p>
                  <p className="text-xs text-muted-foreground">{edu.scoreLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
