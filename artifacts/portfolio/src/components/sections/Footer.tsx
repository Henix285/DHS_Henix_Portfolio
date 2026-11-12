import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-10"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(139,116,169,0.025) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}favicon.png`}
            alt=""
            aria-hidden="true"
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/15"
          />
          <div>
            <span className="font-bold text-lg text-foreground/90">Henix</span>
            <p className="text-xs text-muted-foreground/50 mt-0.5">Hari Supriya Daraboina © 2026</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {[
            {
              href: "https://github.com/Henix285",
              icon: Github,
              label: "GitHub",
              color: "hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
            },
            {
              href: "https://www.linkedin.com/in/hari-supriya-daraboina-799618327/",
              icon: Linkedin,
              label: "LinkedIn",
              color: "hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",
            },
            {
              href: "https://mail.google.com/mail/?view=cm&to=daraboinaharisupriya@gmail.com&su=Hello%20Henix%20%E2%80%94%20Let%27s%20Connect&body=Hi%20Hari%20Supriya%2C%0A%0A",
              icon: Mail,
              label: "Email",
              color: "hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.18)]",
            },
          ].map(({ href, icon: Icon, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-muted-foreground/50 transition-all duration-200 ${color}`}
              data-testid={`link-${label.toLowerCase()}-footer`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
