import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "What I Do", href: "#what-i-do" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: "rgba(8,8,20,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(139,92,246,0.15)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.4), 0 0 60px rgba(139,92,246,0.05)",
      } : {}}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="font-bold text-xl tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
            Henix
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium relative group"
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <Button
            size="sm"
            className="ml-2 rounded-full gap-1.5 font-bold border-0 text-white"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              boxShadow: "0 0 20px rgba(124,58,237,0.35)",
            }}
            asChild
          >
            <a href="/resume.pdf" download="Hari_Supriya_Daraboina_Resume.pdf">
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(8,8,20,0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(139,92,246,0.2)",
            }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-white/5 last:border-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Hari_Supriya_Daraboina_Resume.pdf"
                className="flex items-center gap-2 text-sm font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400"
                onClick={() => setMenuOpen(false)}
              >
                <Download className="w-4 h-4 text-violet-400" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
