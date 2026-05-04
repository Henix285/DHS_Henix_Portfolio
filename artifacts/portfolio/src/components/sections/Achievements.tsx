import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star, GraduationCap, FileText, Award } from "lucide-react";
import hackathonPhoto from "@assets/img_1777899583077.jpeg";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="tabular-nums">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.span
            initial={{ from: 0 }}
            animate={{ opacity: 1 }}
          >
            {value}{suffix}
          </motion.span>
        </motion.span>
      ) : (
        <span>0{suffix}</span>
      )}
    </span>
  );
}

function CountUp({ target, decimals = 0, suffix = "" }: { target: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span
        initial={{ opacity: 1 }}
        animate={isInView ? {} : {}}
      >
        {isInView ? (
          <motion.span
            initial={0}
            animate={target}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {({ latest }: { latest: number }) =>
              latest.toFixed(decimals)
            }
          </motion.span>
        ) : (
          <span>0</span>
        )}
      </motion.span>
      {suffix}
    </span>
  );
}

function CGPACounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400"
      >
        9.71
      </motion.span>
    </span>
  );
}

const certifications = [
  { icon: Award, title: "IBM AI Certification", desc: "Artificial Intelligence — IBM" },
  { icon: Star, title: "NPTEL Java", desc: "Programming in Java — Score: 78%" },
  { icon: Award, title: "Ethical Hacking", desc: "Google Developer Student Clubs" },
  { icon: Award, title: "Game Dev Workshop", desc: "CloudCon Club" },
];

const research = [
  {
    title: "RapidClaim — Patent In Progress",
    desc: "AI-assisted claim processing using OCR and LLM pipelines. Research manuscript and patent filing in progress.",
    tag: "Research Paper",
  },
  {
    title: "Bhojantra — Patent In Progress",
    desc: "Patent filing in progress for multi-service platform architecture proposed in project work.",
    tag: "Patent",
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
            Recognition earned through competition, academics, and research.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Hackathon win */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-card border border-yellow-500/20 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-400" />
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
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Team "Core Logic" won First Prize of Rs. 50,000 for ClusterNodes — a graph-based distributed systems analysis platform using BFS, DFS and Dijkstra's algorithm.
              </p>
              <div className="relative rounded-xl overflow-hidden border border-yellow-500/20 shadow-lg">
                <img
                  src={hackathonPhoto}
                  alt="Hack2Future 2.0 Winner — Team Core Logic"
                  className="w-full h-52 object-cover object-center"
                  data-testid="img-hackathon-win"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white text-xs font-medium">Team Core Logic — Hack2Future 2.0, IIIT Dharwad</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CGPA */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative bg-card border border-violet-500/20 rounded-2xl overflow-hidden shadow-xl p-8 flex-1"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20 mb-1">
                    Academic Excellence
                  </span>
                  <h3 className="text-xl font-bold">SRM Institute of Science and Technology</h3>
                  <p className="text-muted-foreground text-sm">B.Tech CSE — 3rd Semester, 2026</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <CGPACounter />
                <p className="text-muted-foreground text-sm mt-1">CGPA out of 10</p>
              </div>
            </motion.div>

            {/* Research */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 space-y-4"
            >
              <h3 className="font-bold flex items-center gap-2 text-lg">
                <FileText className="w-5 h-5 text-primary" />
                Research & Innovations
              </h3>
              {research.map((r) => (
                <div key={r.title} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-1">
                      {r.tag}
                    </span>
                    <p className="text-sm font-semibold">{r.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-bold mb-4 text-muted-foreground uppercase tracking-widest text-sm">Certifications & Activities</h3>
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
