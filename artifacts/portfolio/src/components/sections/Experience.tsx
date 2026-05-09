import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    num: "02",
    role: "Machine Learning Intern",
    company: "ShadowFox",
    type: "Virtual Internship",
    period: "December 2025",
    location: "Remote",
    highlights: [
      "Developed TextFlow Assist — NLP-powered text assistance tool",
      "Built Loan Approval Predictor using ML and financial data modeling",
      "Created functional prototypes with hands-on model development",
    ],
    tag: "NLP & ML",
  },
  {
    num: "01",
    role: "ML Engineer Intern",
    company: "UPLYX Solutions",
    type: "Virtual Internship",
    period: "June – July 2025",
    location: "Remote",
    highlights: [
      "Built a music recommender system using data-driven techniques",
      "Applied ML for personalized song suggestions at scale",
      "Designed pipelines based on user behavior and content signals",
    ],
    tag: "Recommendation Systems",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-violet-400 mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Industry exposure<br />
            <span className="text-white/25">that matters.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group rounded-2xl p-7 card-glass relative overflow-hidden"
            >
              {/* Left accent */}
              <div className="absolute left-0 top-6 bottom-6 w-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(124,58,237,0.6), transparent)" }} />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-black text-white/08 leading-none hidden sm:block mt-1 group-hover:text-white/12 transition-colors">
                    {exp.num}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa" }}>
                        {exp.tag}
                      </span>
                      <span className="text-xs text-white/25 font-mono">{exp.type}</span>
                    </div>
                    <h3 className="text-lg font-black text-white">{exp.role}</h3>
                    <p className="text-sm font-semibold text-violet-400">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-xs text-white/30 flex-shrink-0 font-mono">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 ml-0 sm:ml-14">
                {exp.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-white/40">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-500/50 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
