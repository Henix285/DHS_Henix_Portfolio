import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    num: "02",
    role: "Machine Learning Intern",
    type: "Virtual Internship",
    company: "ShadowFox",
    period: "December 2025",
    location: "Remote",
    highlights: [
      "Developed TextFlow Assist — an NLP-powered text assistance tool",
      "Built Loan Approval Predictor using ML concepts and financial data modeling",
      "Created functional prototypes with hands-on exposure to model development",
    ],
    gradient: "from-violet-500 to-indigo-500",
    tag: "NLP & ML",
  },
  {
    num: "01",
    role: "ML Engineer Intern",
    type: "Virtual Internship",
    company: "UPLYX Solutions",
    period: "June – July 2025",
    location: "Remote",
    highlights: [
      "Built a music recommender system using data-driven recommendation techniques",
      "Applied ML for personalized song suggestions at scale",
      "Designed recommendation pipelines based on user behavior and content signals",
    ],
    gradient: "from-cyan-500 to-blue-500",
    tag: "Recommendation Systems",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-secondary/10">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span className="text-[16vw] font-black text-foreground/[0.025] leading-none tracking-tighter uppercase">
          WORK
        </span>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Experience</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Industry exposure<br />
            <span className="text-muted-foreground/50">that matters.</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${exp.gradient}`} />

              <div className="pl-8 pr-6 py-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    {/* Big number */}
                    <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b ${exp.gradient} opacity-20 group-hover:opacity-40 transition-opacity leading-none hidden sm:block mt-1`}>
                      {exp.num}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${exp.gradient} text-white`}>
                          {exp.tag}
                        </span>
                        <span className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-black">{exp.role}</h3>
                      <p className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.gradient}`}>
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 text-xs text-muted-foreground flex-shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                      <ArrowRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-transparent`}
                        style={{ color: `var(--tw-gradient-from, currentColor)` }}
                      />
                      <span className="flex items-start gap-2">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${exp.gradient}`} />
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
