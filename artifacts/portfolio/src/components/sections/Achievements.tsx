import { motion } from "framer-motion";
import { Trophy, Star, Award, FileText, Users } from "lucide-react";
import hackathonPhoto from "@assets/img_1777899583077.jpeg";
import prismaticPhoto from "@assets/Screenshot_2026-04-12_at_9.39.42_PM_1777900377667.png";
import innothonPhoto from "@assets/Screenshot_2026-04-24_at_11.35.54_AM_1777900377673.png";

const certifications = [
  { icon: Award, title: "IBM AI Certification", desc: "Artificial Intelligence — IBM" },
  { icon: Star, title: "NPTEL Java", desc: "Programming in Java — Score: 78%" },
  { icon: Award, title: "Ethical Hacking", desc: "Google Developer Student Clubs" },
  { icon: Award, title: "Game Dev Workshop", desc: "CloudCon Club" },
];

const research = [
  {
    title: "RapidClaim — Research Paper & Patent In Progress",
    desc: "Designing AI-assisted claim processing workflow using OCR and LLM pipelines. Research manuscript and patent filing currently in progress.",
    tag: "Research + Patent",
  },
  {
    title: "Bhojantra — Patent In Progress",
    desc: "Patent filing in progress for multi-service platform architecture proposed in project work.",
    tag: "Patent",
  },
];

const participations = [
  {
    title: "Prismatic 2K26",
    subtitle: "Hackathon Participant",
    desc: "Developed InfraScan — a phishing detection system using behavioral and metadata-based signals with anomaly-based threat identification.",
    photo: prismaticPhoto,
    date: "April 2026",
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-500",
  },
  {
    title: "INNOTHON '25 Final",
    subtitle: "Hackathon Participant",
    desc: "Reached the finals of INNOTHON '25, organized by KCG College of Technology — Department of Computer Science and Engineering, September 26–27, 2025.",
    photo: innothonPhoto,
    date: "September 2025",
    accentFrom: "from-emerald-500",
    accentTo: "to-teal-500",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Highlights</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Recognition earned through competition, research, and relentless building.
          </p>
        </motion.div>

        {/* Main win */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-card border border-yellow-500/20 rounded-2xl overflow-hidden shadow-xl mb-8"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-400" />
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-400 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-300 border border-yellow-500/20 mb-1">
                    First Prize — National Hackathon
                  </span>
                  <h3 className="text-xl font-bold">Hack2Future 2.0 Winner</h3>
                  <p className="text-muted-foreground text-sm">IIIT Dharwad — April 5, 2026</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Team "Core Logic" won First Prize of <span className="text-yellow-300 font-semibold">Rs. 50,000</span> for ClusterNodes — a graph-based distributed systems analysis platform using BFS, DFS and Dijkstra's algorithm.
              </p>
            </div>
            <div className="relative overflow-hidden min-h-[220px]">
              <img
                src={hackathonPhoto}
                alt="Hack2Future 2.0 Winner — Team Core Logic"
                className="w-full h-full object-cover object-center"
                data-testid="img-hackathon-win"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent md:block hidden" />
              <div className="absolute bottom-3 left-4">
                <p className="text-white text-xs font-medium drop-shadow">Team Core Logic — Hack2Future 2.0</p>
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
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:border-primary/30 transition-colors"
            >
              <div className={`h-0.5 bg-gradient-to-r ${p.accentFrom} ${p.accentTo}`} />
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.photo}
                  alt={p.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-card/80 backdrop-blur border border-border text-muted-foreground">
                    <Users className="w-3 h-3" />
                    Participant
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold">{p.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium bg-gradient-to-r ${p.accentFrom} ${p.accentTo} text-white flex-shrink-0`}>
                    {p.date}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RapidClaim — featured research card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-card border border-violet-500/30 rounded-2xl overflow-hidden shadow-xl mb-6"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-400 to-blue-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
          <div className="p-8 relative">
            <div className="flex flex-wrap items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    Research Paper In Progress
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Patent In Progress
                  </span>
                </div>
                <h3 className="text-xl font-bold">RapidClaim</h3>
                <p className="text-muted-foreground text-sm">AI-Assisted Insurance Claim Processing System</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Designing an AI-assisted claim processing workflow using <span className="text-foreground font-medium">OCR and LLM pipelines</span> to automate and accelerate insurance claim handling. Research manuscript and patent filing are both currently in progress.
            </p>
          </div>
        </motion.div>

        {/* Bhojantra patent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-card border border-pink-500/20 rounded-2xl overflow-hidden shadow-lg mb-8"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-rose-400" />
          <div className="p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center shadow flex-shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-300 border border-pink-500/20">
                  Patent In Progress
                </span>
              </div>
              <h3 className="font-bold">Bhojantra</h3>
              <p className="text-sm text-muted-foreground mt-1">Patent filing in progress for the multi-service platform architecture — a Node.js + Firebase system with secure transaction validation.</p>
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
          <h3 className="text-sm font-bold mb-4 text-muted-foreground uppercase tracking-widest">Certifications & Activities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 flex items-start gap-3 hover:border-primary/30 transition-colors"
              >
                <cert.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">{cert.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
