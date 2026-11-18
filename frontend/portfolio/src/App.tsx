import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
import { NetworkMoment } from "@/components/sections/NetworkMoment";
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
        className="reading-progress"
        style={{ scaleX: progress }}
      />
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.2 }}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
            className="back-to-top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

function LivingAtmosphere() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const cursorX = useMotionValue(-400);
  const cursorY = useMotionValue(-400);
  const smoothCursorX = useSpring(cursorX, { stiffness: 105, damping: 19, mass: 0.7 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 105, damping: 19, mass: 0.7 });
  const cursorCenterX = useTransform(smoothCursorX, (value) => value + 170);
  const cursorCenterY = useTransform(smoothCursorY, (value) => value + 170);
  const cursorHover = useMotionValue(1);
  const cursorScale = useSpring(cursorHover, { stiffness: 260, damping: 18 });
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothPointerX = useSpring(pointerX, { stiffness: 82, damping: 19 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 82, damping: 19 });
  const farLayerOffset = useMotionValue(0);
  const midLayerOffset = useMotionValue(0);
  const farLayerY = useSpring(farLayerOffset, { stiffness: 75, damping: 16 });
  const midLayerY = useSpring(midLayerOffset, { stiffness: 85, damping: 16 });
  const cursorOpacity = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduceMotion) return;
    farLayerOffset.set(progress * 180);
    midLayerOffset.set(progress * 280);
  });

  useEffect(() => {
    if (reduceMotion) return;
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cursorX.set(event.clientX - 170);
      cursorY.set(event.clientY - 170);
      pointerX.set((event.clientX / window.innerWidth - 0.5) * 26);
      pointerY.set((event.clientY / window.innerHeight - 0.5) * 21);
      const target = event.target instanceof Element ? event.target.closest("a, button, [role='button'], video") : null;
      cursorHover.set(target ? 1.4 : 1);
      cursorOpacity.set(1);
      document.documentElement.classList.add("has-custom-cursor");
    };
    const handlePointerLeave = () => {
      cursorOpacity.set(0);
      cursorHover.set(1);
      document.documentElement.classList.remove("has-custom-cursor");
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handlePointerLeave);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("keydown", handlePointerLeave);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("keydown", handlePointerLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [cursorHover, cursorOpacity, cursorX, cursorY, pointerX, pointerY, reduceMotion]);

  return (
    <>
      <div
        className="ambient-interaction-layer"
        aria-hidden="true"
      >
        <motion.div className="ambient-mesh ambient-mesh--one" style={{ y: farLayerY, x: smoothPointerX }} />
        <motion.div className="ambient-mesh ambient-mesh--two" style={{ y: midLayerY, x: smoothPointerX }} />
        <motion.div className="ambient-mesh ambient-mesh--three" style={{ y: farLayerY, x: smoothPointerX }} />
        <motion.div
          className="ambient-orbit ambient-orbit--one"
          style={{ y: farLayerY, x: smoothPointerX }}
        />
        <motion.div
          className="ambient-orbit ambient-orbit--two"
          style={{ y: midLayerY, x: smoothPointerY }}
        />
        <motion.div
          className="cursor-aura cursor-aura--visible"
          style={{ x: smoothCursorX, y: smoothCursorY, opacity: cursorOpacity }}
        />
        <span className="ambient-star ambient-star--one" />
        <span className="ambient-star ambient-star--two" />
        <span className="ambient-star ambient-star--three" />
        <span className="ambient-star ambient-star--four ambient-star--flare" />
        <span className="ambient-star ambient-star--five" />
        <span className="ambient-star ambient-star--six ambient-star--flare" />
        <span className="ambient-star ambient-star--seven" />
        <span className="ambient-star ambient-star--eight" />
      </div>
      <div className="custom-cursor-layer" aria-hidden="true">
        <motion.span
          className="custom-cursor-ring"
          style={{ x: cursorCenterX, y: cursorCenterY, opacity: cursorOpacity, scale: cursorScale }}
        />
        <motion.span
          className="custom-cursor-dot"
          style={{ x: cursorCenterX, y: cursorCenterY, opacity: cursorOpacity }}
        />
      </div>
    </>
  );
}

function Home() {
  return (
    <div className="site-shell">
      <LivingAtmosphere />
      <Navbar />
      <ScrollExperience />
      <main>
        <Hero />
        <NetworkMoment />
        <WhatIDo />
        <Achievements />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
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
        <AnimatePresence>
          {entered ? (
            <div key="portfolio">
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
