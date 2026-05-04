import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Machine Learning Intern (Virtual)",
    company: "ShadowFox",
    period: "December 2025",
    highlights: [
      "Developed TextFlow Assist — an NLP-powered text assistance tool",
      "Built Loan Approval Predictor using ML concepts and financial data modeling",
      "Created functional prototypes with hands-on exposure to model development and evaluation",
    ],
    accentFrom: "from-violet-500",
    accentTo: "to-indigo-500",
    tag: "NLP & ML",
  },
  {
    role: "ML Engineer Intern (Virtual)",
    company: "UPLYX Solutions",
    period: "June – July 2025",
    highlights: [
      "Built a music recommender system using data-driven recommendation techniques",
      "Applied ML concepts for personalized song suggestions at scale",
      "Designed recommendation pipelines based on user behavior and content signals",
    ],
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-500",
    tag: "Recommendation Systems",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Hands-on industry exposure through meaningful internships in AI and ML.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-1 w-12 h-12 rounded-xl bg-gradient-to-br ${exp.accentFrom} ${exp.accentTo} flex items-center justify-center shadow-lg`}>
                  <Briefcase className="w-5 h-5 text-white" />
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className={`text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r ${exp.accentFrom} ${exp.accentTo}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium bg-gradient-to-r ${exp.accentFrom} ${exp.accentTo} text-white`}>
                        {exp.tag}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${exp.accentFrom} ${exp.accentTo}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
