import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAIL = "daraboinaharisupriya@gmail.com";

const contactLinks = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93915 40096",
    href: "tel:+919391540096",
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.25)",
    borderColor: "rgba(6,182,212,0.3)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hari-supriya-daraboina",
    href: "https://www.linkedin.com/in/hari-supriya-daraboina-799618327/",
    gradient: "from-blue-500 to-sky-400",
    glow: "rgba(59,130,246,0.25)",
    borderColor: "rgba(59,130,246,0.3)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Henix285",
    href: "https://github.com/Henix285",
    gradient: "from-gray-400 to-gray-500",
    glow: "rgba(156,163,175,0.2)",
    borderColor: "rgba(156,163,175,0.25)",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 60%)" }} />

      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-3 block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
            Say Hello
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to build something together? Reach out directly — I respond to every message.
          </p>
        </motion.div>

        {/* Primary email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 relative rounded-2xl overflow-hidden text-center p-8"
          style={{
            background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(6,182,212,0.06))",
            border: "1px solid rgba(139,92,246,0.35)",
            boxShadow: "0 0 60px rgba(139,92,246,0.2), 0 8px 30px rgba(0,0,0,0.4)",
            backdropFilter: "blur(20px)",
          }}
          data-testid="link-email-cta"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500" />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% -20%, rgba(139,92,246,0.15) 0%, transparent 60%)" }} />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", boxShadow: "0 0 30px rgba(139,92,246,0.5)" }}>
              <Mail className="w-8 h-8 text-white" />
            </div>
            <p className="text-xs text-muted-foreground mb-1 font-bold uppercase tracking-widest">Email Me</p>
            <p className="text-xl md:text-2xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-pink-300 to-cyan-300 break-all">
              {EMAIL}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="rounded-full gap-2 font-bold w-full sm:w-auto border-0 text-white"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  boxShadow: "0 0 25px rgba(124,58,237,0.4)",
                }}
                asChild
              >
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=Hello%20Henix%20%E2%80%94%20Let%27s%20Connect&body=Hi%20Hari%20Supriya%2C%0A%0A`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-4 h-4" />
                  Send via Gmail
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleCopy}
                className="rounded-full gap-2 font-bold w-full sm:w-auto transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Resume banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-6 relative rounded-2xl overflow-hidden p-6"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 20px rgba(124,58,237,0.35)" }}>
                <Download className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-base">My Resume</p>
                <p className="text-sm text-muted-foreground">Skills · Projects · Experience — all in one place.</p>
              </div>
            </div>

            <div className="flex gap-3 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full gap-2 font-semibold"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Read Online
                </a>
              </Button>
              <Button
                size="sm"
                className="rounded-full gap-2 font-bold border-0 text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 15px rgba(124,58,237,0.35)" }}
                asChild
              >
                <a href="/resume.pdf" download="Hari_Supriya_Daraboina_Resume.pdf">
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Other contact links */}
        <div className="grid sm:grid-cols-3 gap-4">
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
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 rounded-xl p-4 transition-all group"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${link.borderColor}`,
                boxShadow: `0 0 20px ${link.glow}, 0 4px 15px rgba(0,0,0,0.3)`,
                backdropFilter: "blur(16px)",
              }}
              data-testid={`link-contact-${link.label.toLowerCase()}`}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center flex-shrink-0 shadow`}
                style={{ boxShadow: `0 0 15px ${link.glow}` }}>
                <link.icon className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium">{link.label}</p>
                <p className="text-sm font-bold truncate text-foreground/80 group-hover:text-foreground transition-colors">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
