import { motion } from "framer-motion";
import { Brain, Code2, Cpu } from "lucide-react";

const areas = [
  {
    num: "01",
    icon: Brain,
    title: "AI / Machine Learning",
    description: "Building intelligent systems that understand data — NLP pipelines, recommendation engines, and predictive models deployed in real-world applications.",
    tags: ["NLP", "Recommendation Systems", "Predictive Models", "Research"],
  },
  {
    num: "02",
    icon: Code2,
    title: "Full Stack Engineering",
    description: "End-to-end product development — clean backend architecture, REST APIs, and scalable multi-service platforms with Firebase and Node.js.",
    tags: ["Node.js", "Flask", "REST APIs", "Firebase"],
  },
  {
    num: "03",
    icon: Cpu,
    title: "Systems & Problem Solving",
    description: "Deep algorithmic reasoning applied to complex problems — from competitive DSA to distributed infrastructure analysis and anomaly detection.",
    tags: ["DSA", "Graph Algorithms", "System Design", "Security"],
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-violet-400 mb-4 block">
            What I Build
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-white">
            Engineering focus.<br />
            <span className="text-white/30">Three domains.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)", borderRadius: "1rem", overflow: "hidden" }}>
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 transition-all duration-300"
              style={{ background: "hsl(240, 25%, 4%)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.04)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "hsl(240, 25%, 4%)";
              }}
            >
              {/* Number */}
              <div className="text-xs font-mono text-white/15 mb-6">{area.num}</div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}>
                <area.icon className="w-5 h-5 text-violet-400" />
              </div>

              <h3 className="text-base font-bold text-white mb-3">{area.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6">{area.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {area.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
