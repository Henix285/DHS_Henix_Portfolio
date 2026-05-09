import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePhoto from "@assets/RA2411003020229_DHS_1777902381606.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Terminal } from "@/components/Terminal";

const roles = [
  "AI / ML Engineer",
  "Full Stack Developer",
  "Hackathon Winner",
  "Patent Author",
  "Problem Solver",
];

const stats = [
  { value: "9.71", label: "CGPA" },
  { value: "1st", label: "Hack2Future" },
  { value: "2+", label: "Patents Filed" },
  { value: "4", label: "Live Systems" },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — identity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-7"
          >
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)",
                color: "#a78bfa",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400" />
              </span>
              Open to Internship Opportunities
            </motion.div>

            {/* Name + Role */}
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.0] uppercase">
                <span className="block text-white/90">Hari Supriya</span>
                <span className="block shimmer-name">Daraboina</span>
              </h1>
              <div className="h-8 flex items-center mt-4">
                <span className="text-white/25 mr-3 font-light">—</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.35 }}
                    className="text-base font-semibold text-violet-400"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-white/50 text-base leading-relaxed max-w-md font-light">
              Building intelligent systems at the intersection of AI, machine learning, and full stack engineering. Focused on real products that solve real problems.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all group"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.3)",
                }}
              >
                View Systems
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.95)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                }}
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-8 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-white/40 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Terminal + Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4"
          >
            {/* Photo */}
            <div className="flex items-center gap-4 mb-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
                style={{
                  border: "1px solid rgba(124,58,237,0.3)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.2)",
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Hari Supriya Daraboina"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile"
                />
              </motion.div>
              <div>
                <p className="text-sm font-semibold text-white/80">Henix</p>
                <p className="text-xs text-white/40">AI Engineer · SRM Institute</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </div>
            </div>

            {/* SIGNATURE ELEMENT: Interactive Terminal */}
            <Terminal />

            <p className="text-xs text-center text-white/20" style={{ fontFamily: "var(--font-mono)" }}>
              Interactive — click terminal and type commands
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#what-i-do" className="flex flex-col items-center gap-1.5 text-white/20 hover:text-white/50 transition-colors">
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
