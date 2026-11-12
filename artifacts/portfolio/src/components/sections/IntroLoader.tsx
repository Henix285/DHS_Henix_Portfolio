import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const loadingStages = [
  { threshold: 22, label: "Waking the embers" },
  { threshold: 50, label: "Gathering the sparks" },
  { threshold: 78, label: "Preparing the experience" },
  { threshold: 96, label: "Almost ready" },
  { threshold: 100, label: "Taking flight" },
];

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();
  const onCompleteRef = useRef(onComplete);
  const completionStarted = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const duration = reduceMotion ? 550 : 2500;
    const startedAt = performance.now();
    let frame = 0;

    const updateProgress = (now: number) => {
      const nextProgress = Math.min(100, ((now - startedAt) / duration) * 100);
      setProgress(Math.floor(nextProgress));

      if (nextProgress >= 100) return;

      frame = requestAnimationFrame(updateProgress);
    };

    frame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  useEffect(() => {
    if (progress < 100 || completionStarted.current) return;
    const timer = setTimeout(() => {
      completionStarted.current = true;
      onCompleteRef.current();
    }, reduceMotion ? 0 : 300);
    return () => clearTimeout(timer);
  }, [progress, reduceMotion]);

  useEffect(() => {
    const phoenix = new Image();
    phoenix.src = `${import.meta.env.BASE_URL}phoenix-bird.png`;
  }, []);

  const stage = loadingStages.find(({ threshold }) => progress < threshold) ?? loadingStages.at(-1)!;

  return (
    <motion.div
      role="region"
      aria-label="Portfolio loading screen"
      exit={{ y: reduceMotion ? 0 : "-100%", opacity: reduceMotion ? 0 : 1 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.65, ease: [0.76, 0, 0.24, 1] }}
      className="phoenix-loader fixed inset-0 z-[100] flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{ background: "var(--page-base)" }}
    >
      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <p className="mb-4 text-[11px] font-bold tracking-[0.32em] text-muted-foreground uppercase sm:text-xs">
          Portfolio · Loading
        </p>

        <div className="phoenix-loader-scene" aria-hidden="true">
          <div className="phoenix-loader-orbit phoenix-loader-orbit--outer" />
          <div className="phoenix-loader-orbit phoenix-loader-orbit--inner" />
          <img
            src={`${import.meta.env.BASE_URL}phoenix-bird.png`}
            alt=""
            className={`phoenix-loader-bird${progress >= 92 ? " phoenix-loader-bird--rising" : ""}`}
          />
          <span className="phoenix-loader-spark phoenix-loader-spark--one" />
          <span className="phoenix-loader-spark phoenix-loader-spark--two" />
          <span className="phoenix-loader-spark phoenix-loader-spark--three" />
          <span className="phoenix-loader-spark phoenix-loader-spark--four" />
        </div>

        <div className="mt-1 w-full max-w-xs sm:max-w-sm">
          <div className="mb-3 flex items-center justify-between gap-4 text-xs sm:text-sm">
            <p className="min-w-0 text-left font-medium text-muted-foreground" role="status" aria-live="polite">
              {stage.label}
            </p>
            <span className="shrink-0 font-semibold tabular-nums text-foreground">{progress}%</span>
          </div>
          <div
            className="phoenix-loader-track"
            role="progressbar"
            aria-label="Portfolio loading progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <motion.div
              className="phoenix-loader-progress"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.12, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
