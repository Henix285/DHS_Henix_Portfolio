import { motion } from "framer-motion";
import { Trophy, Star, Award, FileText, Users } from "lucide-react";
import hackathonPhoto from "@assets/img_1777899583077.jpeg";
import prismaticPhoto from "@assets/Screenshot_2026-04-12_at_9.39.42_PM_1777900377667.png";
import innothonPhoto from "@assets/Screenshot_2026-04-24_at_11.35.54_AM_1777900377673.png";

const certifications = [
  { icon: Award, title: "IBM AI Certification", desc: "Artificial Intelligence — IBM", color: "from-cyan-500 to-blue-500", glow: "rgba(6,182,212,0.2)", tagClass: "text-cyan-300" },
  { icon: Star, title: "NPTEL Java", desc: "Programming in Java — Score: 78%", color: "from-amber-500 to-orange-500", glow: "rgba(245,158,11,0.2)", tagClass: "text-amber-300" },
  { icon: Award, title: "Ethical Hacking", desc: "Google Developer Student Clubs", color: "from-rose-500 to-pink-500", glow: "rgba(244,63,94,0.2)", tagClass: "text-rose-300" },
  { icon: Award, title: "Game Dev Workshop", desc: "CloudCon Club", color: "from-emerald-500 to-teal-500", glow: "rgba(16,185,129,0.2)", tagClass: "text-emerald-300" },
];

const participations = [
  {
    title: "Prismatic 2K26",
    subtitle: "Hackathon Participant",
    desc: "Developed InfraScan — a phishing detection system using behavioral and metadata-based signals with anomaly-based threat identification.",
    photo: prismaticPhoto,
    date: "April 2026",
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.2)",
    borderColor: "rgba(6,182,212,0.3)",
  },
  {
    title: "INNOTHON '25 Final",
    subtitle: "Hackathon Finalist",
    desc: "Reached the finals of INNOTHON '25, organized by KCG College of Technology — Department of Computer Science and Engineering, September 26–27, 2025.",
    photo: innothonPhoto,
    date: "September 2025",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.2)",
    borderColor: "rgba(16,185,129,0.3)",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
            Highlights
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Achievements
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Recognition earned through competition, research, and relentless building.
          </p>
        </motion.div>

        {/* Hack2Future — main win */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden mb-8"
          style={{
            background: "rgba(245,158,11,0.05)",
            border: "1px solid rgba(245,158,11,0.35)",
            boxShadow: "0 0 60px rgba(245,158,11,0.2), 0 8px 30px rgba(0,0,0,0.4)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-300" />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 100% 50%, rgba(245,158,11,0.08) 0%, transparent 60%)" }} />
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)", boxShadow: "0 0 25px rgba(245,158,11,0.5)" }}>
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black mb-2"
                    style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#fcd34d" }}>
                    First Prize — National Hackathon
                  </span>
                  <h3 className="text-2xl font-black">Hack2Future 2.0 Winner</h3>
                  <p className="text-muted-foreground text-sm">IIIT Dharwad — April 5, 2026</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Team "Core Logic" won First Prize of{" "}
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  Rs. 50,000
                </span>{" "}
                for ClusterNodes — a graph-based distributed systems analysis platform using BFS, DFS and Dijkstra's algorithm.
              </p>
            </div>
            <div className="relative overflow-hidden min-h-[220px]">
              <img
                src={hackathonPhoto}
                alt="Hack2Future 2.0 Winner — Team Core Logic"
                className="w-full h-full object-cover object-center"
                data-testid="img-hackathon-win"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,6,2,0.8)] via-transparent to-transparent md:block hidden" />
              <div className="absolute bottom-3 left-4">
                <p className="text-white text-xs font-semibold drop-shadow-lg">Team Core Logic — Hack2Future 2.0</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hackathon participations */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {participations.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${p.borderColor}`,
                boxShadow: `0 0 30px ${p.glow}, 0 4px 20px rgba(0,0,0,0.3)`,
                backdropFilter: "blur(20px)",
              }}
            >
              <div className={`h-0.5 bg-gradient-to-r ${p.gradient}`} />
              <div className="relative h-48 overflow-hidden">
                <img src={p.photo} alt={p.title} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(8,6,16,0.9) 0%, rgba(8,6,16,0.3) 60%, transparent 100%)" }} />
                <div className="absolute bottom-3 left-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ background: "rgba(10,8,20,0.8)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
                    <Users className="w-3 h-3" />
                    Participant
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-black text-base">{p.title}</h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold bg-gradient-to-r ${p.gradient} text-white flex-shrink-0`}>
                    {p.date}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RapidClaim research */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden mb-5"
          style={{
            background: "rgba(139,92,246,0.05)",
            border: "1px solid rgba(139,92,246,0.35)",
            boxShadow: "0 0 40px rgba(139,92,246,0.2), 0 4px 20px rgba(0,0,0,0.3)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-indigo-400 to-blue-500" />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 0% 50%, rgba(139,92,246,0.08) 0%, transparent 60%)" }} />
          <div className="p-8 relative">
            <div className="flex flex-wrap items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", boxShadow: "0 0 20px rgba(139,92,246,0.4)" }}>
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black"
                    style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.4)", color: "#c4b5fd" }}>
                    Research Paper In Progress
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black"
                    style={{ background: "rgba(79,70,229,0.15)", border: "1px solid rgba(79,70,229,0.4)", color: "#a5b4fc" }}>
                    Patent In Progress
                  </span>
                </div>
                <h3 className="text-xl font-black">RapidClaim</h3>
                <p className="text-muted-foreground text-sm">AI-Assisted Insurance Claim Processing System</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Designing an AI-assisted claim processing workflow using{" "}
              <span className="text-violet-300 font-semibold">OCR and LLM pipelines</span>{" "}
              to automate and accelerate insurance claim handling. Research manuscript and patent filing are both currently in progress.
            </p>
          </div>
        </motion.div>

        {/* Bhojantra patent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden mb-10"
          style={{
            background: "rgba(244,63,94,0.04)",
            border: "1px solid rgba(244,63,94,0.3)",
            boxShadow: "0 0 25px rgba(244,63,94,0.15), 0 4px 20px rgba(0,0,0,0.3)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-400" />
          <div className="p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #f43f5e, #ec4899)", boxShadow: "0 0 15px rgba(244,63,94,0.35)" }}>
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black mb-1"
                style={{ background: "rgba(244,63,94,0.12)", border: "1px solid rgba(244,63,94,0.3)", color: "#fda4af" }}>
                Patent In Progress
              </span>
              <h3 className="font-black text-base">Bhojantra</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Patent filing in progress for the multi-service platform architecture — a Node.js + Firebase system with secure transaction validation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xs font-bold mb-5 text-muted-foreground uppercase tracking-[0.3em]">Certifications & Activities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${cert.glow.replace("0.2", "0.3")}`,
                  boxShadow: `0 0 20px ${cert.glow}, 0 4px 15px rgba(0,0,0,0.3)`,
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className={`h-0.5 bg-gradient-to-r ${cert.color}`} />
                <div className="p-4 flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 shadow`}>
                    <cert.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${cert.tagClass}`}>{cert.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
