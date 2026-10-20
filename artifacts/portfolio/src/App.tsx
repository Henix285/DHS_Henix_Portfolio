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
