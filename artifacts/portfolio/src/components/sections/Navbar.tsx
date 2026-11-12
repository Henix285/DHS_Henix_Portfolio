import { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
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
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    try {
      return window.localStorage.getItem("henix-theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem("henix-theme", theme);
    } catch {
      // The selected theme still works for this session when storage is unavailable.
    }
  }, [theme]);

  const ThemeToggle = () => (
    <button
      type="button"
      onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "light"}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      data-testid="button-theme-toggle"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--nav-border)",
        boxShadow: "var(--nav-shadow)",
      } : {}}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="inline-flex items-center gap-2.5 font-bold text-xl tracking-tight">
          <img
            src={`${import.meta.env.BASE_URL}favicon.png`}
            alt=""
            aria-hidden="true"
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/15 shadow-[0_2px_14px_rgba(245,158,11,0.16)]"
          />
          <span className="text-foreground/90">Henix</span>
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
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-300/70 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <ThemeToggle />
          <Button
            size="sm"
            className="ml-2 rounded-full gap-1.5 font-bold border-0 text-white"
            style={{
              background: "linear-gradient(135deg, #28766d, #356b82)",
              boxShadow: "0 4px 14px rgba(32,105,99,0.18)",
            }}
            asChild
          >
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Hari_Supriya_Daraboina_Resume.pdf">
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "var(--nav-bg)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--nav-border)",
            }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border last:border-0"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Hari_Supriya_Daraboina_Resume.pdf"
                className="flex items-center gap-2 text-sm font-bold py-2 text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                <Download className="w-4 h-4 text-primary" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
