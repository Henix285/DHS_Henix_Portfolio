import { motion } from "framer-motion";
import { Brain, Code2, Cpu } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Brain,
    title: "AI / Machine Learning",
    badge: "Strongest Differentiator",
    gradient: "from-violet-500 to-indigo-500",
    glow: "shadow-violet-500/20",
    items: [
      "NLP & Natural Language Processing",
      "Recommendation Systems",
      "Data-driven predictive models",
      "Research & Patent-level innovation",
    ],
    description:
      "Building intelligent systems that understand and learn from data — from NLP pipelines to custom ML models deployed in real-world applications.",
  },
  {
    num: "02",
    icon: Code2,
    title: "Full Stack Development",
    badge: "Real Products",
    gradient: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
    items: [
      "Backend systems (Node.js, Flask)",
      "REST APIs & Firebase",
      "Web application architecture",
      "Scalable multi-service platforms",
    ],
    description:
      "Translating ideas into production-ready software — full backend ownership from schema to deployment, with clean API design and robust integrations.",
  },
  {
    num: "03",
    icon: Cpu,
    title: "Problem Solving & Systems",
    badge: "Algorithmic Thinking",
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
    items: [
      "DSA — graphs, trees, algorithms",
      "Distributed system design",
      "Infrastructure monitoring",
      "Phishing & anomaly detection",
    ],
    description:
      "Applying deep algorithmic reasoning to design efficient, scalable systems — from competitive DSA to distributed infrastructure analysis.",
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-28 relative overflow-hidden">
      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span className="text-[18vw] font-black text-foreground/[0.02] leading-none tracking-tighter uppercase">
          EXPERTISE
        </span>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            What I Do
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Three domains.
            <br />
            <span className="text-muted-foreground/50">One mission.</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ scale: 1.01 }}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-transparent hover:shadow-xl ${s.glow} transition-all duration-300 cursor-default`}
            >
              {/* Hover gradient fill */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
              />
              {/* Left accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${s.gradient}`}
              />

              <div className="pl-8 pr-6 py-7 grid md:grid-cols-[auto_1fr_1.4fr] gap-6 items-center">
                {/* Number */}
                <span
                  className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b ${s.gradient} opacity-20 group-hover:opacity-40 transition-opacity leading-none hidden md:block`}
                >
                  {s.num}
                </span>

                {/* Title + icon */}
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span
                      className={`inline-block text-xs font-bold px-2 py-0.5 rounded-md bg-gradient-to-r ${s.gradient} text-white mb-2`}
                    >
                      {s.badge}
                    </span>
                    <h3 className="text-xl font-black leading-tight">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 max-w-xs leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span
                        className={`h-1.5 w-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${s.gradient}`}
                      />
                      {item}
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
