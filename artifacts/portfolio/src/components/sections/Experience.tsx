import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

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
    gradient: "from-violet-500 to-fuchsia-500",
    glow: "rgba(139,92,246,0.2)",
    borderColor: "rgba(139,92,246,0.3)",
    dotColor: "bg-violet-400",
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
    glow: "rgba(6,182,212,0.2)",
    borderColor: "rgba(6,182,212,0.3)",
    dotColor: "bg-cyan-400",
    tag: "Recommendation Systems",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span className="text-[16vw] font-black leading-none tracking-tighter uppercase"
          style={{ color: "rgba(255,255,255,0.02)" }}>
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
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
            Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Industry exposure<br />
            <span className="text-muted-foreground/40">that matters.</span>
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
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${exp.borderColor}`,
                boxShadow: `0 0 30px ${exp.glow}, 0 4px 20px rgba(0,0,0,0.3)`,
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Left accent bar */}
              <div className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${exp.gradient}`} />
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 0% 50%, ${exp.glow} 0%, transparent 50%)` }} />

              <div className="pl-8 pr-6 py-7 relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b ${exp.gradient} opacity-15 group-hover:opacity-30 transition-opacity leading-none hidden sm:block mt-1`}>
                      {exp.num}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs font-black px-2.5 py-0.5 rounded-full bg-gradient-to-r ${exp.gradient} text-white`}
                          style={{ boxShadow: `0 0 12px ${exp.glow}` }}>
                          {exp.tag}
                        </span>
                        <span className="text-xs text-muted-foreground border border-white/10 rounded-full px-2.5 py-0.5 bg-white/5">
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
                    <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${exp.dotColor}`} />
                      {h}
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
