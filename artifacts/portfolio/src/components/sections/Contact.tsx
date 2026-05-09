import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Copy, Check } from "lucide-react";

const EMAIL = "daraboinaharisupriya@gmail.com";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=Hello%20Henix%20%E2%80%94%20Let%27s%20Connect&body=Hi%20Hari%20Supriya%2C%0A%0A`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "hari-supriya-daraboina",
    href: "https://www.linkedin.com/in/hari-supriya-daraboina-799618327/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Henix285",
    href: "https://github.com/Henix285",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93915 40096",
    href: "tel:+919391540096",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-violet-400 mb-4 block">
            Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Let's build something.
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm">
            Open to internship opportunities, collaborations, and interesting conversations. I respond to every message.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl p-8 text-center mb-5 relative overflow-hidden"
          style={{
            background: "rgba(124,58,237,0.06)",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
          data-testid="link-email-cta"
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% -20%, rgba(124,58,237,0.1) 0%, transparent 60%)" }} />
          <p className="text-xs font-mono text-white/30 mb-2">Primary contact</p>
          <p className="text-lg md:text-2xl font-black text-white mb-5">{EMAIL}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=Hello%20Henix%20%E2%80%94%20Let%27s%20Connect&body=Hi%20Hari%20Supriya%2C%0A%0A`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all"
              style={{ background: "linear-gradient(135deg, #7c3aed, #5b21b6)", boxShadow: "0 0 20px rgba(124,58,237,0.25)" }}
            >
              <Mail className="w-4 h-4" />
              Send via Gmail
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.6)" }}
            >
              {copied ? <><Check className="w-4 h-4 text-emerald-400" /><span className="text-emerald-400">Copied!</span></> : <><Copy className="w-4 h-4" />Copy Email</>}
            </button>
          </div>
        </motion.div>

        {/* Resume */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl p-5 mb-5 flex flex-col sm:flex-row items-center justify-between gap-4 card-glass"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}>
              <Download className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">Resume</p>
              <p className="text-xs text-white/35">Skills · Projects · Experience</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>
              <ExternalLink className="w-3.5 h-3.5" />
              View
            </a>
            <a href="/resume.pdf" download="Hari_Supriya_Daraboina_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}>
              <Download className="w-3.5 h-3.5" />
              Download
            </a>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.06 }}
              whileHover={{ y: -3 }}
              className="flex flex-col gap-1.5 p-4 rounded-xl card-glass group"
              data-testid={`link-contact-${link.label.toLowerCase()}`}
            >
              <link.icon className="w-4 h-4 text-violet-400/60 group-hover:text-violet-400 transition-colors" />
              <p className="text-xs text-white/30 font-mono">{link.label}</p>
              <p className="text-xs font-semibold text-white/60 group-hover:text-white/90 transition-colors truncate">{link.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
