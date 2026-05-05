import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Henix
          </span>
          <p className="text-xs text-muted-foreground mt-0.5">Hari Supriya Daraboina © 2026</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Henix285"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-github-footer"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/hari-supriya-daraboina-799618327/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-linkedin-footer"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=daraboinaharisupriya@gmail.com&su=Hello%20Henix%20%E2%80%94%20Let%27s%20Connect&body=Hi%20Hari%20Supriya%2C%0A%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-email-footer"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
