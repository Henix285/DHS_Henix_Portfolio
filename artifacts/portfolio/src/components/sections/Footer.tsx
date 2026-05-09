import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-black text-white">Henix<span className="text-violet-400">.</span></span>
          <p className="text-xs text-white/25 mt-0.5">Hari Supriya Daraboina © 2026</p>
        </div>
        <div className="flex items-center gap-5">
          {[
            { href: "https://github.com/Henix285", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/hari-supriya-daraboina-799618327/", icon: Linkedin, label: "LinkedIn" },
            {
              href: "https://mail.google.com/mail/?view=cm&to=daraboinaharisupriya@gmail.com&su=Hello%20Henix%20%E2%80%94%20Let%27s%20Connect&body=Hi%20Hari%20Supriya%2C%0A%0A",
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-violet-400 transition-colors duration-200"
              data-testid={`link-${label.toLowerCase()}-footer`}
            >
              <Icon className="w-4.5 h-4.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
