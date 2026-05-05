import { motion } from "framer-motion";
import { Brain, Code2, Cpu } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI / Machine Learning",
    badge: "Strongest Differentiator",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    glow: "rgba(139,92,246,0.3)",
    borderColor: "rgba(139,92,246,0.4)",
    items: [
      "NLP & Natural Language Processing",
      "Recommendation Systems",
      "Data-driven predictive models",
      "Research & Patent-level innovation",
    ],
    itemColors: ["bg-violet-500/20 text-violet-300 border-violet-500/30", "bg-purple-500/20 text-purple-300 border-purple-500/30", "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30", "bg-violet-500/20 text-violet-300 border-violet-500/30"],
    description: "Building intelligent systems that understand and learn from data — from NLP pipelines to custom ML models deployed in real-world applications.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    badge: "Real Products",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    glow: "rgba(6,182,212,0.25)",
    borderColor: "rgba(6,182,212,0.4)",
    items: [
      "Backend systems (Node.js, Flask)",
      "REST APIs & Firebase",
      "Web application architecture",
      "Scalable multi-service platforms",
    ],
    itemColors: ["bg-cyan-500/20 text-cyan-300 border-cyan-500/30", "bg-blue-500/20 text-blue-300 border-blue-500/30", "bg-indigo-500/20 text-indigo-300 border-indigo-500/30", "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"],
    description: "Translating ideas into production-ready software — full backend ownership from schema to deployment, with clean API design and robust integrations.",
  },
  {
    icon: Cpu,
    title: "Problem Solving & Systems",
    badge: "Algorithmic Thinking",
    gradient: "from-emerald-500 via-teal-500 to-green-500",
    glow: "rgba(16,185,129,0.25)",
    borderColor: "rgba(16,185,129,0.4)",
    items: [
      "DSA — graphs, trees, algorithms",
      "Distributed system design",
      "Infrastructure monitoring",
      "Phishing & anomaly detection",
    ],
    itemColors: ["bg-emerald-500/20 text-emerald-300 border-emerald-500/30", "bg-teal-500/20 text-teal-300 border-teal-500/30", "bg-green-500/20 text-green-300 border-green-500/30", "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"],
    description: "Applying deep algorithmic reasoning to design efficient, scalable systems — from competitive DSA to distributed infrastructure analysis.",
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-28 relative overflow-hidden">
      {/* Section accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            What I Do
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Three domains.
            <br />
            <span className="shimmer-text">One mission.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${service.borderColor}`,
                boxShadow: `0 0 40px ${service.glow}, 0 4px 20px rgba(0,0,0,0.3)`,
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Top gradient bar */}
              <div className={`h-0.5 bg-gradient-to-r ${service.gradient}`} />

              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.glow} 0%, transparent 60%)` }} />

              <div className="p-7 relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  style={{ boxShadow: `0 0 20px ${service.glow}` }}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Badge */}
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border mb-4 bg-gradient-to-r ${service.gradient} bg-opacity-10`}
                  style={{ background: `linear-gradient(135deg, ${service.glow}, transparent)`, borderColor: service.borderColor, color: "white" }}>
                  {service.badge}
                </span>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, j) => (
                    <span
                      key={item}
                      className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full border ${service.itemColors[j % service.itemColors.length]}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
