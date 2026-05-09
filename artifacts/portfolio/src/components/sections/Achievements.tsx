import { motion } from "framer-motion";
import { Trophy, FileText, Users, Award, Star } from "lucide-react";
import hackathonPhoto from "@assets/img_1777899583077.jpeg";
import prismaticPhoto from "@assets/Screenshot_2026-04-12_at_9.39.42_PM_1777900377667.png";
import innothonPhoto from "@assets/Screenshot_2026-04-24_at_11.35.54_AM_1777900377673.png";

const certs = [
  { icon: Award, title: "IBM AI Certification", desc: "Artificial Intelligence — IBM" },
  { icon: Star, title: "NPTEL Java", desc: "Programming in Java — 78%" },
  { icon: Award, title: "Ethical Hacking", desc: "Google Developer Student Clubs" },
  { icon: Award, title: "Game Dev Workshop", desc: "CloudCon Club" },
];

const events = [
  { title: "Prismatic 2K26", desc: "Built InfraScan — phishing detection system", photo: prismaticPhoto, date: "Apr 2026" },
  { title: "INNOTHON '25 Finals", desc: "Reached finals at KCG College of Technology", photo: innothonPhoto, date: "Sep 2025" },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-violet-400 mb-4 block">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Earned, not claimed.
          </h2>
        </motion.div>

        {/* Hack2Future hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: "1px solid rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.03)" }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-5"
                style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", color: "#fbbf24" }}>
                <Trophy className="w-3.5 h-3.5" />
                First Prize — National Hackathon
              </span>
              <h3 className="text-2xl font-black text-white mb-1">Hack2Future 2.0</h3>
              <p className="text-sm text-white/40 mb-5">IIIT Dharwad — April 5, 2026</p>
              <p className="text-sm text-white/55 leading-relaxed">
                Team "Core Logic" won <span className="text-amber-400 font-semibold">₹50,000 First Prize</span> for ClusterNodes — a graph-based distributed systems analysis platform built with BFS, DFS and Dijkstra's algorithm.
              </p>
            </div>
            <div className="relative min-h-[220px] overflow-hidden">
              <img src={hackathonPhoto} alt="Hack2Future 2.0" className="w-full h-full object-cover object-center" data-testid="img-hackathon-win" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,6,18,0.7) 0%, transparent 60%)" }} />
            </div>
          </div>
        </motion.div>

        {/* Research cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {[
            {
              title: "RapidClaim",
              subtitle: "Research Paper + Patent In Progress",
              desc: "AI-assisted insurance claim processing using OCR and LLM pipelines to automate claim handling workflows.",
              tags: ["Research Paper", "Patent"],
            },
            {
              title: "Bhojantra",
              subtitle: "Patent In Progress",
              desc: "Patent filing in progress for multi-service platform architecture — Node.js + Firebase with secure transaction validation.",
              tags: ["Patent"],
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 card-glass"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}>
                  <FileText className="w-4.5 h-4.5 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <p className="text-xs text-violet-400/70">{item.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-white/45 leading-relaxed mb-4">{item.desc}</p>
              <div className="flex gap-2">
                {item.tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon events */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden card-glass"
            >
              <div className="relative h-36 overflow-hidden">
                <img src={ev.photo} alt={ev.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(9,9,18,0.9) 0%, transparent 70%)" }} />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">{ev.title}</p>
                    <p className="text-xs text-white/50">{ev.desc}</p>
                  </div>
                  <span className="text-xs text-white/40 flex-shrink-0 ml-2">{ev.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono text-white/25 uppercase tracking-widest mb-4">Certifications</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 p-4 rounded-xl card-glass"
              >
                <cert.icon className="w-4 h-4 text-violet-400/60 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white/75">{cert.title}</p>
                  <p className="text-xs text-white/35 mt-0.5">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
