import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Variant = "accent" | "muted" | "text" | "success" | "dim";
type OutputLine = { text: string; variant: Variant };
type HistoryEntry = { cmd: string; output: OutputLine[] };

const PROMPT = "henix@portfolio:~$";

const COMMANDS: Record<string, OutputLine[]> = {
  help: [
    { text: "Available commands:", variant: "accent" },
    { text: "  whoami    — about me", variant: "text" },
    { text: "  projects  — live systems I've built", variant: "text" },
    { text: "  skills    — technical stack", variant: "text" },
    { text: "  contact   — reach me", variant: "text" },
    { text: "  clear     — reset terminal", variant: "text" },
  ],
  whoami: [
    { text: "Hari Supriya Daraboina (Henix)", variant: "accent" },
    { text: "AI Engineer · Full Stack Developer · Hackathon Winner", variant: "text" },
    { text: "─────────────────────────────────────────", variant: "dim" },
    { text: "  CGPA        9.71 / 10.00", variant: "text" },
    { text: "  Patents     2 (In Progress)", variant: "text" },
    { text: "  Projects    4 live systems", variant: "text" },
    { text: "  Award       Hack2Future — ₹50,000 First Prize", variant: "success" },
  ],
  projects: [
    { text: "Live Systems:", variant: "accent" },
    { text: "  [1]  ClusterNodes   — Graph-distributed analysis  ★ WINNER", variant: "success" },
    { text: "  [2]  InfraScan      — Phishing detection system", variant: "text" },
    { text: "  [3]  TextFlow       — NLP text assistance engine", variant: "text" },
    { text: "  [4]  LoanApproval   — ML financial predictor", variant: "text" },
    { text: "", variant: "dim" },
    { text: "  → Scroll to #projects to watch demos", variant: "dim" },
  ],
  skills: [
    { text: "Tech Stack:", variant: "accent" },
    { text: "  Languages    Python  ·  C++  ·  Java  ·  C", variant: "text" },
    { text: "  AI / ML      NLP  ·  Recommendation  ·  Predictive Models", variant: "text" },
    { text: "  Backend      Node.js  ·  Express  ·  Flask  ·  Firebase", variant: "text" },
    { text: "  Core CS      DSA  ·  Graph Algorithms  ·  System Design", variant: "text" },
    { text: "  Tools        Git  ·  GitHub", variant: "text" },
  ],
  contact: [
    { text: "Connect with me:", variant: "accent" },
    { text: "  email     daraboinaharisupriya@gmail.com", variant: "text" },
    { text: "  linkedin  hari-supriya-daraboina-799618327", variant: "text" },
    { text: "  github    github.com/Henix285", variant: "text" },
    { text: "", variant: "dim" },
    { text: "  → Or scroll to #contact for direct links", variant: "dim" },
  ],
};

const variantClass: Record<Variant, string> = {
  accent: "text-violet-400",
  muted: "text-white/40",
  dim: "text-white/25",
  text: "text-white/70",
  success: "text-emerald-400",
};

export function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [isAutoTyping, setIsAutoTyping] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-type "whoami" on mount
  useEffect(() => {
    const cmd = "whoami";
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setInput(cmd.slice(0, i));
        if (i >= cmd.length) {
          clearInterval(interval);
          setTimeout(() => {
            setHistory([{ cmd, output: COMMANDS[cmd] }]);
            setInput("");
            setIsAutoTyping(false);
            setTimeout(() => inputRef.current?.focus(), 100);
          }, 500);
        }
      }, 90);
    }, 800);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    const output = COMMANDS[cmd] ?? [
      { text: `command not found: "${cmd}"`, variant: "muted" as Variant },
      { text: `  Type "help" to see available commands.`, variant: "dim" as Variant },
    ];
    setHistory(prev => [...prev, { cmd: raw, output }]);
    setInput("");
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") runCommand(input);
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden select-none cursor-text font-mono text-sm"
      style={{
        background: "rgba(0,0,0,0.55)",
        border: "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 0 60px rgba(124,58,237,0.12), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
      onClick={() => !isAutoTyping && inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span className="flex-1 text-center text-xs" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-mono)" }}>
          henix@portfolio — terminal
        </span>
      </div>

      {/* Body */}
      <div className="p-4 h-72 overflow-y-auto terminal-scroll" style={{ fontFamily: "var(--font-mono)" }}>
        <p className="text-xs mb-3" style={{ color: "rgba(139,92,246,0.5)" }}>
          Henix CLI v1.0 &mdash; Type <span className="text-violet-400">"help"</span> for commands
        </p>

        <AnimatePresence>
          {history.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mb-3"
            >
              {/* Command line */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-violet-500 flex-shrink-0">{PROMPT}</span>
                <span className="text-white/90 text-xs">{entry.cmd}</span>
              </div>
              {/* Output */}
              {entry.output.map((line, j) => (
                <motion.p
                  key={j}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: j * 0.04, duration: 0.2 }}
                  className={`text-xs leading-relaxed whitespace-pre ${variantClass[line.variant]}`}
                >
                  {line.text || "\u00A0"}
                </motion.p>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Active input line */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-violet-500 flex-shrink-0">{PROMPT}</span>
          <span className="text-xs text-white/90">{input}</span>
          <span
            className="inline-block w-[7px] h-[14px] cursor-blink"
            style={{ background: isAutoTyping ? "rgba(139,92,246,0.6)" : "rgba(139,92,246,0.9)" }}
          />
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Hidden real input */}
      <input
        ref={inputRef}
        value={input}
        onChange={e => !isAutoTyping && setInput(e.target.value)}
        onKeyDown={handleKey}
        disabled={isAutoTyping}
        className="absolute opacity-0 pointer-events-none w-0 h-0"
        aria-hidden
      />
    </div>
  );
}
