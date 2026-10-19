import { motion } from "framer-motion";
import profilePhoto from "@assets/Screenshot_2026-10-19_at_9.03.45_AM_1792380838767.png";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "9.73", label: "CGPA · Through Sem 4", color: "from-slate-200 to-slate-400" },
  { value: "1st", label: "Hack2Future", color: "from-amber-400 to-orange-400" },
  { value: "2+", label: "Patents Filed", color: "from-rose-400 to-pink-400" },
  { value: "4", label: "Live Projects", color: "from-cyan-400 to-blue-400" },
];

const portraitCircleClass =
  "absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border pointer-events-none";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
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
              background: "rgba(255,255,255,0.045)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 4px 18px rgba(0,0,0,0.16)"
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-foreground/85">
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

            <div className="flex items-center mt-3">
              <span className="text-muted-foreground text-xl font-light mr-3">—</span>
              <span className="text-lg md:text-xl font-bold text-slate-300">
                AI/ML Learner · Full-Stack Developer
              </span>
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
                background: "linear-gradient(135deg, #28766d, #356b82)",
                boxShadow: "0 5px 18px rgba(32,105,99,0.18)"
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

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto flex items-center justify-center"
        >
          {/* Photo container */}
          <div className="relative flex items-center justify-center w-60 h-[18rem] md:w-72 md:h-[23rem] lg:w-80 lg:h-[25rem]">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <motion.div
                animate={{ x: [0, 7, 0], y: [0, -5, 0] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                className={portraitCircleClass}
                style={{
                  left: "50%",
                  top: "50%",
                  translate: "-50% -50%",
                  marginLeft: "clamp(-58px, -4vw, -18px)",
                  marginTop: "clamp(-40px, -3vw, -12px)",
                  borderColor: "rgba(83,194,190,0.48)",
                }}
              />
              <motion.div
                animate={{ x: [0, -6, 0], y: [0, 6, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className={portraitCircleClass}
                style={{
                  left: "50%",
                  top: "50%",
                  translate: "-50% -50%",
                  marginLeft: "clamp(18px, 4vw, 56px)",
                  marginTop: "clamp(12px, 2.5vw, 36px)",
                  borderColor: "rgba(91,145,190,0.36)",
                }}
              />
              <motion.div
                animate={{ x: [0, 5, 0], y: [0, -7, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className={portraitCircleClass}
                style={{
                  left: "50%",
                  top: "50%",
                  translate: "-50% -50%",
                  marginLeft: "clamp(-14px, -1vw, -4px)",
                  marginTop: "clamp(22px, 4vw, 56px)",
                  borderColor: "rgba(220,177,112,0.32)",
                }}
              />
            </div>
            <div
              className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(6,182,212,0.20) 0%, rgba(139,116,169,0.06) 45%, transparent 72%)",
                filter: "blur(24px)",
              }}
            />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              whileHover={{ scale: 1.015 }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 200, damping: 20 },
              }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.35)"
              }}
            >
              <img
                src={profilePhoto}
                alt="Hari Supriya Daraboina"
                className="w-full h-full object-cover object-[center_18%]"
                data-testid="img-profile"
              />
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
