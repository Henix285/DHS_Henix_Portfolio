import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Fixed aurora layer — persists across entire page */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="aurora-1 absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)" }} />
        <div className="aurora-2 absolute top-[25%] right-[-15%] w-[50vw] h-[50vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)" }} />
        <div className="aurora-3 absolute bottom-[15%] left-[-5%] w-[42vw] h-[42vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(244,63,94,0.1) 0%, transparent 70%)" }} />
        <div className="aurora-4 absolute bottom-[-10%] right-[5%] w-[50vw] h-[50vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }} />
        <div className="aurora-5 absolute top-[55%] left-[35%] w-[35vw] h-[35vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />
        {/* Fine grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />
      </div>

      <div className="relative z-10">
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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
