import { motion } from "framer-motion";
import profilePhoto from "@assets/Screenshot_2026-10-19_at_9.03.45_AM_1792380838767.png";
import { ArrowRight, Award, ChevronDown, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "9.73", label: "CGPA · Through Sem 4", color: "from-teal-500 to-cyan-400" },
  { value: "1st", label: "Hack2Future", color: "from-amber-400 to-orange-400" },
  { value: "2+", label: "Patents Filed", color: "from-rose-400 to-pink-400" },
  { value: "5+", label: "Live Projects", color: "from-cyan-400 to-blue-400" },
];

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
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              boxShadow: "0 4px 18px var(--panel-shadow)"
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
              <span className="text-lg md:text-xl font-bold text-muted-foreground">
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
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
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
            style={{ borderTop: "1px solid var(--glass-border)" }}
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
          <div className="portrait-window-scene relative flex items-center justify-center w-64 h-[20rem] md:w-80 md:h-[25rem] lg:w-[23rem] lg:h-[29rem]">
            <motion.div
              className="portrait-window-stack"
              aria-hidden="true"
            >
              <span className="portrait-window-stack__panel portrait-window-stack__panel--rear" />
              <span className="portrait-window-stack__panel portrait-window-stack__panel--middle" />
            </motion.div>
            <div
              className="portrait-window-card relative z-10 w-full h-full"
            >
              <span className="portrait-window-card__float-outline" aria-hidden="true" />
              <div className="portrait-window-card__surface">
                <div className="portrait-window-card__chrome" aria-hidden="true">
                  <span className="portrait-window-card__control portrait-window-card__control--one" />
                  <span className="portrait-window-card__control portrait-window-card__control--two" />
                  <span className="portrait-window-card__control portrait-window-card__control--three" />
                </div>
                <div className="portrait-window-card__photo">
                  <img
                    src={profilePhoto}
                    alt="Hari Supriya Daraboina"
                    className="w-full h-full object-cover object-[center_18%]"
                    data-testid="img-profile"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-3 left-1 sm:-left-3 z-20 inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold shadow-lg backdrop-blur-xl"
              style={{
                background: "var(--glass-bg)",
                borderColor: "var(--glass-border)",
                boxShadow: "0 12px 30px var(--panel-shadow)",
              }}
            >
              <Award className="h-4 w-4 shrink-0 text-teal-500" />
              <span className="truncate text-foreground">
                AISES 2026 <span className="text-muted-foreground">·</span> Best Paper
              </span>
            </div>
            <div
              className="absolute -top-3 right-1 z-20 inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-semibold shadow-lg backdrop-blur-xl sm:-right-4"
              style={{
                background: "var(--glass-bg)",
                borderColor: "rgba(245,158,11,0.42)",
                boxShadow: "0 12px 30px var(--panel-shadow)",
              }}
            >
              <Trophy className="h-4 w-4 shrink-0 text-amber-500" />
              <span className="truncate text-foreground">Hack2Future · 1st Prize</span>
            </div>
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
