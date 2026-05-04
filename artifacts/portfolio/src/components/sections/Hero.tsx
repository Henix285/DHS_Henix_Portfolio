import { motion } from "framer-motion";
import profilePhoto from "@assets/Screenshot_2026-05-03_at_2.25.01_PM_1777899566281.png";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight uppercase">
              Hari Supriya<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 font-black">
                Daraboina
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-foreground">
              Hi, I'm Henix — a developer focused on building intelligent, real-world systems.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              I work across AI, machine learning, and full stack development to create scalable, data-driven applications that solve meaningful problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 text-base font-semibold rounded-full group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold rounded-full border-border hover:bg-secondary/50" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-auto max-w-md w-full aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent rounded-full blur-[60px] animate-pulse" />
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-border/50 bg-card p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src={profilePhoto} 
              alt="Hari Supriya Daraboina" 
              className="w-full h-full object-cover rounded-[1.5rem]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.5rem]" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#what-i-do" className="text-muted-foreground hover:text-foreground transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
