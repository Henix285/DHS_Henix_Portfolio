import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePhoto from "@assets/RA2411003020229_DHS_1777902381606.jpg";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "AI / ML Engineer",
  "Full Stack Developer",
  "Hackathon Winner",
  "Research & Patent Author",
  "Problem Solver",
];

const stats = [
  { value: "9.71", label: "CGPA", suffix: "" },
  { value: "1st", label: "Hack2Future", suffix: "" },
  { value: "2", label: "Patents Filed", suffix: "+" },
  { value: "4", label: "Live Projects", suffix: "" },
];

const floatingTags = [
  { label: "Python", x: "8%", y: "20%", delay: 0 },
  { label: "NLP", x: "80%", y: "15%", delay: 0.4 },
  { label: "Node.js", x: "85%", y: "75%", delay: 0.8 },
  { label: "ML", x: "6%", y: "72%", delay: 1.2 },
  { label: "Firebase", x: "50%", y: "88%", delay: 0.6 },
  { label: "DSA", x: "72%", y: "48%", delay: 1.0 },
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
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Primary glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating tech tags */}
      {floatingTags.map((tag) => (
        <motion.div
          key={tag.label}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: tag.delay + 1, duration: 0.6 },
            scale: { delay: tag.delay + 1, duration: 0.6 },
            y: { delay: tag.delay + 1.5, duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur border border-border/60 text-xs font-semibold text-muted-foreground shadow-lg"
          style={{ left: tag.x, top: tag.y }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          {tag.label}
        </motion.div>
      ))}

      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 max-w-6xl">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Open to Internship Opportunities
          </motion.div>

          {/* Name */}
          <div className="space-y-1">
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tight uppercase">
              Hari Supriya<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-blue-400">
                Daraboina
              </span>
            </h1>

            {/* Cycling role */}
            <div className="h-9 flex items-center mt-2">
              <span className="text-muted-foreground text-lg font-medium mr-2">—</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-foreground/90 text-xl md:text-2xl font-semibold">
            Hi, I'm Henix — a developer focused on building intelligent, real-world systems.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            I work across AI, machine learning, and full stack development to create scalable, data-driven applications that solve meaningful problems.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="h-12 px-8 text-base font-bold rounded-full group shadow-lg shadow-primary/20" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold rounded-full border-border/60 hover:bg-secondary/50 hover:border-primary/40 transition-all" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold rounded-full gap-2 border-primary/40 hover:bg-primary/5 hover:border-primary/70 transition-all shadow-md" asChild>
              <a href="/resume.pdf" download="Hari_Supriya_Daraboina_Resume.pdf">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-6 pt-2 border-t border-border/40"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-black text-foreground">
                  {s.value}<span className="text-primary">{s.suffix}</span>
                </span>
                <span className="text-xs text-muted-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto flex items-center justify-center"
        >
          {/* Outer decorative ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-primary/10 border-dashed"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-[290px] h-[290px] md:w-[360px] md:h-[360px] rounded-full border border-violet-500/10 border-dashed"
            />
          </div>

          {/* Glow behind photo */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/20 blur-3xl" />

          {/* Photo container */}
          <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Corner accent blobs */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-500 opacity-60 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full bg-violet-500/50 blur-xl" />

            {/* Tilted frame — rotates slightly, flattens on hover */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/40 shadow-2xl shadow-primary/25 bg-card rotate-3"
            >
              <img
                src={profilePhoto}
                alt="Hari Supriya Daraboina"
                className="w-full h-full object-cover object-top"
                data-testid="img-profile"
              />
              {/* Subtle gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#what-i-do" className="text-muted-foreground/50 hover:text-muted-foreground transition-colors">
          <ChevronDown className="w-7 h-7" />
        </a>
      </motion.div>
    </section>
  );
}
