import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "daraboinaharisupriya@gmail.com",
    href: "mailto:daraboinaharisupriya@gmail.com",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93915 40096",
    href: "tel:+919391540096",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hari-supriya-daraboina",
    href: "https://www.linkedin.com/in/hari-supriya-daraboina",
    accent: "from-blue-500 to-sky-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/HariSupriyaDaraboina",
    href: "https://github.com/HariSupriyaDaraboina",
    accent: "from-gray-500 to-gray-400",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-bottom-left -z-10" />
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">Say Hello</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to build something together? Reach out directly — I respond to every message.
          </p>
        </motion.div>

        {/* Primary email CTA */}
        <motion.a
          href="mailto:daraboinaharisupriya@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block mb-8 bg-gradient-to-r from-primary/20 to-blue-500/10 border border-primary/30 rounded-2xl p-8 text-center group hover:border-primary/60 transition-all shadow-lg hover:shadow-primary/10"
          data-testid="link-email-cta"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <p className="text-sm text-muted-foreground mb-1 font-medium uppercase tracking-widest">Email Me</p>
          <p className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
            daraboinaharisupriya@gmail.com
          </p>
          <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold">
            Open Email Client
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.a>

        {/* Resume banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-8 relative overflow-hidden bg-gradient-to-br from-primary/10 via-blue-500/5 to-violet-500/10 border border-primary/25 rounded-2xl p-6"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-4 left-8 w-20 h-20 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-base">My Resume</p>
                <p className="text-sm text-muted-foreground">Skills · Projects · Experience — all in one place.</p>
              </div>
            </div>

            <div className="flex gap-3 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full gap-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 font-semibold"
                asChild
              >
                <a href="https://drive.google.com/file/d/1example/view" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Read Online
                </a>
              </Button>
              <Button
                size="sm"
                className="rounded-full gap-2 bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 font-semibold shadow-lg shadow-primary/20"
                asChild
              >
                <a href="https://drive.google.com/uc?export=download&id=1example" download>
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Other contact links */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-all group"
              data-testid={`link-contact-${link.label.toLowerCase()}`}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.accent} flex items-center justify-center flex-shrink-0 shadow`}>
                <link.icon className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">{link.label}</p>
                <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{link.value}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary/60 ml-auto flex-shrink-0 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
