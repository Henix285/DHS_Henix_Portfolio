import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { IntroLoader } from "@/components/sections/IntroLoader";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Achievements } from "@/components/sections/Achievements";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const queryClient = new QueryClient();

function ScrollExperience() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const reduceMotion = useReducedMotion();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setShowBackToTop(value > 480);
  });

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[90] h-[3px] origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, #24b7a4, #42a5d5, #f1a04e)",
        }}
      />
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 16, scale: 0.82 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.86 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.24 }}
            whileHover={reduceMotion ? undefined : { y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
            className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-3 z-50 flex h-12 w-12 items-center justify-center rounded-full border text-foreground shadow-xl backdrop-blur-xl transition-colors hover:text-teal-500 sm:bottom-7 sm:right-7"
            style={{
              background: "var(--glass-bg)",
              borderColor: "var(--glass-border)",
              boxShadow: "0 12px 30px var(--panel-shadow)",
            }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

function Home() {
  return (
    <div className="min-h-screen text-foreground relative overflow-x-hidden">
      {/* Fixed aurora layer — persists across entire page */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Deep background */}
        <div className="absolute inset-0" style={{ background: "var(--page-base)" }} />
        {/* Aurora blobs */}
        <div className="aurora-1 absolute top-[-20%] left-[-15%] w-[70vw] h-[70vw] rounded-full"
          style={{ background: "var(--aurora-one)" }} />
        <div className="aurora-2 absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] rounded-full"
          style={{ background: "var(--aurora-two)" }} />
        <div className="aurora-3 absolute bottom-[10%] left-[-10%] w-[55vw] h-[55vw] rounded-full"
          style={{ background: "var(--aurora-three)" }} />
        <div className="aurora-4 absolute bottom-[-15%] right-[0%] w-[65vw] h-[65vw] rounded-full"
          style={{ background: "var(--aurora-four)" }} />
        <div className="aurora-5 absolute top-[50%] left-[30%] w-[45vw] h-[45vw] rounded-full"
          style={{ background: "var(--aurora-five)" }} />
        {/* Fine grid overlay */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: "var(--grid-opacity)",
          }} />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <WhatIDo />
        <Achievements />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {entered ? (
            <div key="portfolio">
              <ScrollExperience />
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
                <Router />
              </WouterRouter>
            </div>
          ) : (
            <IntroLoader key="intro" onComplete={() => setEntered(true)} />
          )}
        </AnimatePresence>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
