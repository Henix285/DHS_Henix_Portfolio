import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import profilePhoto from "@assets/Screenshot_2026-10-19_at_9.03.45_AM_1792380838767.png";
import { ArrowRight, Award, ChevronDown, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "9.73", label: "CGPA · Through Sem 4", color: "from-teal-500 to-cyan-400" },
  { value: "1st", label: "Hack2Future", color: "from-amber-400 to-orange-400" },
  { value: "2+", label: "Patents Filed", color: "from-rose-400 to-pink-400" },
  { value: "5+", label: "Live Projects", color: "from-cyan-400 to-blue-400" },
];

const portraitCircleClass =
  "absolute rounded-full border pointer-events-none";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useSpring(0, { stiffness: 260, damping: 24, mass: 0.3 });
  const pointerY = useSpring(0, { stiffness: 260, damping: 24, mass: 0.3 });
  const portraitX = useTransform(pointerX, (value) => value * 0.2);
  const portraitY = useTransform(pointerY, (value) => value * 0.2);
  const portraitRotateX = useTransform(pointerY, [-64, 64], [8, -8]);
  const portraitRotateY = useTransform(pointerX, [-64, 64], [-8, 8]);

  const handlePortraitPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 128);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 128);
  };

  const resetPortraitPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

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
          onPointerMove={handlePortraitPointerMove}
          onPointerLeave={resetPortraitPointer}
        >
          {/* Photo container */}
          <div className="relative flex items-center justify-center w-60 h-[18rem] md:w-72 md:h-[23rem] lg:w-80 lg:h-[25rem]">
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ x: pointerX, y: pointerY }}
              aria-hidden="true"
            >
              <motion.div
                animate={reduceMotion ? undefined : {
                  x: [0, 16, -8, 0],
                  y: [0, -12, 8, 0],
                  rotate: [0, 120, 240, 360],
                  scale: [1, 1.035, 0.985, 1],
                }}
                transition={{
                  x: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                }}
                className={`${portraitCircleClass} h-[300px] w-[300px] md:h-[380px] md:w-[380px] lg:h-[460px] lg:w-[460px]`}
                style={{
                  left: "50%",
                  top: "50%",
                  translate: "-50% -50%",
                  marginLeft: "clamp(-58px, -4vw, -18px)",
                  marginTop: "clamp(-40px, -3vw, -12px)",
                  borderColor: "rgba(45,166,155,0.86)",
                  borderWidth: "1.5px",
                  boxShadow: "0 0 22px rgba(45,166,155,0.2), inset 0 0 16px rgba(45,166,155,0.07)",
                }}
              >
                <motion.span
                  className="absolute inset-0"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                >
                  <span
                    className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300"
                    style={{ boxShadow: "0 0 12px rgba(45, 212, 191, 0.85), 0 0 24px rgba(45, 212, 191, 0.45)" }}
                  />
                </motion.span>
              </motion.div>
              <motion.div
                animate={reduceMotion ? undefined : {
                  x: [0, -12, 12, 0],
                  y: [0, 10, -8, 0],
                  rotate: [0, -120, -240, -360],
                  scale: [1, 0.97, 1.035, 1],
                }}
                transition={{
                  x: { duration: 19, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 19, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 39, repeat: Infinity, ease: "linear" },
                  scale: { duration: 19, repeat: Infinity, ease: "easeInOut" },
                }}
                className={`${portraitCircleClass} h-[340px] w-[340px] md:h-[420px] md:w-[420px] lg:h-[500px] lg:w-[500px]`}
                style={{
                  left: "50%",
                  top: "50%",
                  translate: "-50% -50%",
                  marginLeft: "clamp(18px, 4vw, 56px)",
                  marginTop: "clamp(12px, 2.5vw, 36px)",
                  borderColor: "rgba(72,139,173,0.78)",
                  borderStyle: "dashed",
                  boxShadow: "0 0 16px rgba(72,139,173,0.14)",
                }}
              >
                <motion.span
                  className="absolute inset-0"
                  animate={reduceMotion ? undefined : { rotate: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                >
                  <span
                    className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300"
                    style={{ boxShadow: "0 0 10px rgba(125, 211, 252, 0.85), 0 0 22px rgba(125, 211, 252, 0.4)" }}
                  />
                </motion.span>
              </motion.div>
              <motion.div
                animate={reduceMotion ? undefined : {
                  x: [0, 10, -10, 0],
                  y: [0, 12, -6, 0],
                  rotate: [0, 120, 240, 360],
                  scale: [1, 1.04, 0.97, 1],
                }}
                transition={{
                  x: { duration: 23, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 23, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 48, repeat: Infinity, ease: "linear" },
                  scale: { duration: 23, repeat: Infinity, ease: "easeInOut" },
                }}
                className={`${portraitCircleClass} h-[380px] w-[380px] md:h-[460px] md:w-[460px] lg:h-[540px] lg:w-[540px]`}
                style={{
                  left: "50%",
                  top: "50%",
                  translate: "-50% -50%",
                  marginLeft: "clamp(-14px, -1vw, -4px)",
                  marginTop: "clamp(22px, 4vw, 56px)",
                  borderColor: "rgba(210,159,91,0.64)",
                  borderStyle: "dotted",
                  boxShadow: "0 0 18px rgba(210,159,91,0.15)",
                }}
              >
                <motion.span
                  className="absolute inset-0"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                >
                  <span
                    className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300"
                    style={{ boxShadow: "0 0 9px rgba(252, 211, 77, 0.8), 0 0 20px rgba(252, 211, 77, 0.4)" }}
                  />
                </motion.span>
              </motion.div>
            </motion.div>
            <motion.div
              style={{
                border: "1px solid var(--portrait-border)",
                boxShadow: "var(--portrait-shadow)",
                x: portraitX,
                y: portraitY,
                rotateX: portraitRotateX,
                rotateY: portraitRotateY,
                transformPerspective: 900,
              }}
              whileHover={reduceMotion ? undefined : { scale: 1.025 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={profilePhoto}
                alt="Hari Supriya Daraboina"
                className="w-full h-full object-cover object-[center_18%]"
                data-testid="img-profile"
              />
            </motion.div>
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
