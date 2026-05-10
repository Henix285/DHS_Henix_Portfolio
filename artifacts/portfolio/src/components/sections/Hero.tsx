import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePhoto from "@assets/RA2411003020229_DHS_1777902381606.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "AI / ML Engineer",
  "Full Stack Developer",
  "Hackathon Winner",
  "Research & Patent Author",
  "Problem Solver",
];

const stats = [
  { value: "9.71", label: "CGPA", color: "from-violet-400 to-purple-400" },
  { value: "1st", label: "Hack2Future", color: "from-amber-400 to-orange-400" },
  { value: "2+", label: "Patents Filed", color: "from-rose-400 to-pink-400" },
  { value: "4", label: "Live Projects", color: "from-cyan-400 to-blue-400" },
];

const floatingTags = [
  { label: "Python", x: "6%", y: "22%", delay: 0, color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300" },
  { label: "NLP", x: "80%", y: "14%", delay: 0.4, color: "from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-300" },
  { label: "Node.js", x: "84%", y: "76%", delay: 0.8, color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300" },
  { label: "ML", x: "5%", y: "70%", delay: 1.2, color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300" },
  { label: "Firebase", x: "50%", y: "90%", delay: 0.6, color: "from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-300" },
  { label: "DSA", x: "73%", y: "50%", delay: 1.0, color: "from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-300" },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Floating tech tags */}
      {floatingTags.map((tag) => (
        <motion.div
          key={tag.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { delay: tag.delay + 1, duration: 0.6 },
            scale: { delay: tag.delay + 1, duration: 0.6 },
            y: { delay: tag.delay + 1.5, duration: 3.5 + tag.delay, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${tag.color} backdrop-blur-sm border text-xs font-bold shadow-lg shadow-black/30`}
          style={{ left: tag.x, top: tag.y }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current inline-block opacity-80" />
          {tag.label}
        </motion.div>
      ))}

      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 max-w-6xl">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.1))",
              border: "1px solid rgba(139,92,246,0.4)",
              boxShadow: "0 0 20px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.1)"
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">
              Open to Internship Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black leading-[1.0] tracking-tight uppercase">
              <span className="block text-foreground/90">Hari Supriya</span>
              <span className="block shimmer-text">
                Daraboina
              </span>
            </h1>

            {/* Cycling role */}
            <div className="h-10 flex items-center mt-3">
              <span className="text-muted-foreground text-xl font-light mr-3">—</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-foreground/90 text-xl font-semibold">
              Hi, I'm Henix — building intelligent, real-world systems.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              I work across AI, machine learning, and full stack development to create scalable, data-driven applications that solve meaningful problems.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="h-12 px-8 text-base font-bold rounded-full group relative overflow-hidden border-0"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                boxShadow: "0 0 30px rgba(124,58,237,0.4), 0 4px 15px rgba(0,0,0,0.3)"
              }}
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base font-semibold rounded-full transition-all"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)"
              }}
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6 pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${s.color}`}>
                  {s.value}
                </span>
                <span className="text-xs text-muted-foreground font-medium mt-0.5">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto flex items-center justify-center"
        >
          {/* Multi-color rotating rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full"
              style={{ border: "1px dashed rgba(139,92,246,0.3)" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="w-[300px] h-[300px] md:w-[370px] md:h-[370px] rounded-full"
              style={{ border: "1px dashed rgba(6,182,212,0.2)" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="w-[250px] h-[250px] md:w-[310px] md:h-[310px] rounded-full"
              style={{ border: "1px dashed rgba(244,63,94,0.15)" }}
            />
          </div>

          {/* Multi-color glow */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(6,182,212,0.15) 50%, transparent 70%)", filter: "blur(30px)" }} />

          {/* Photo container */}
          <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Accent blobs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl opacity-70 blur-2xl"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }} />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-60 blur-xl"
              style={{ background: "linear-gradient(135deg, #f43f5e, #a855f7)" }} />
            <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full opacity-50 blur-xl"
              style={{ background: "#22d3ee" }} />

            {/* Tilted frame */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden rotate-3 shadow-2xl"
              style={{
                border: "2px solid rgba(139,92,246,0.5)",
                boxShadow: "0 0 60px rgba(139,92,246,0.3), 0 0 120px rgba(6,182,212,0.1), 0 25px 50px rgba(0,0,0,0.5)"
              }}
            >
              <img
                src={profilePhoto}
                alt="Hari Supriya Daraboina"
                className="w-full h-full object-cover object-top"
                data-testid="img-profile"
              />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, transparent 60%)" }} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#what-i-do" className="flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground transition-colors">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
