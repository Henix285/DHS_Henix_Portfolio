import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-10"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(139,92,246,0.15)",
      }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div>
          <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
            Henix
          </span>
          <p className="text-xs text-muted-foreground/50 mt-0.5">Hari Supriya Daraboina © 2026</p>
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
              color: "hover:text-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]",
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
