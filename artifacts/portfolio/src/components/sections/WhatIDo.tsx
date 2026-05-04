import { motion } from "framer-motion";
import { Brain, Code2, Cpu } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI / Machine Learning",
    badge: "Strongest Differentiator",
    badgeColor: "text-violet-300 bg-violet-500/10 border-violet-500/20",
    accentFrom: "from-violet-500",
    accentTo: "to-indigo-500",
    items: [
      "NLP & Natural Language Processing",
      "Recommendation Systems",
      "Data-driven predictive models",
      "Research & Patent-level innovation",
    ],
    description: "Building intelligent systems that understand and learn from data — from NLP pipelines to custom ML models deployed in real-world applications.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    badge: "Real Products",
    badgeColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-500",
    items: [
      "Backend systems (Node.js, Flask)",
      "REST APIs & Firebase",
      "Web application architecture",
      "Scalable multi-service platforms",
    ],
    description: "Translating ideas into production-ready software — full backend ownership from schema to deployment, with clean API design and robust integrations.",
  },
  {
    icon: Cpu,
    title: "Problem Solving & Systems",
    badge: "Algorithmic Thinking",
    badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
    items: [
      "DSA — graphs, trees, algorithms",
      "Distributed system design",
      "Infrastructure monitoring",
      "Phishing & anomaly detection",
    ],
    description: "Applying deep algorithmic reasoning to design efficient, scalable systems — from competitive DSA to distributed infrastructure analysis.",
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Three domains. One mission: build intelligent, real-world systems that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card border border-border rounded-2xl p-8 overflow-hidden cursor-default"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accentFrom} ${service.accentTo} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accentFrom} ${service.accentTo} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accentFrom} ${service.accentTo} flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${service.badgeColor} mb-4`}>
                {service.badge}
              </span>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${service.accentFrom} ${service.accentTo}`} />
                    {item}
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
