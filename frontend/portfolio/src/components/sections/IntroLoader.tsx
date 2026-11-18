import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NetworkGraphic } from "@/components/sections/NetworkMoment";

const loadingStages = [
  { threshold: 22, label: "Connecting the dots" },
  { threshold: 50, label: "Bringing ideas together" },
  { threshold: 78, label: "Preparing the experience" },
  { threshold: 96, label: "Almost ready" },
  { threshold: 100, label: "Ready to explore" },
];

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [takingOff, setTakingOff] = useState(false);
  const reduceMotion = useReducedMotion();
  const onCompleteRef = useRef(onComplete);
  const takeoffStarted = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const duration = reduceMotion ? 350 : 1800;
    const startedAt = performance.now();
    let frame = 0;
    let completionTimer = 0;
    let onCompleteTimer = 0;

    const updateProgress = (now: number) => {
      const nextProgress = Math.min(100, ((now - startedAt) / duration) * 100);
      setProgress(Math.floor(nextProgress));
      if (nextProgress >= 93 && !takeoffStarted.current) {
        takeoffStarted.current = true;
        setTakingOff(true);
      }

      if (nextProgress >= 100) return;

      frame = requestAnimationFrame(updateProgress);
    };

    completionTimer = window.setTimeout(() => {
      setProgress(100);
      if (!takeoffStarted.current) {
        takeoffStarted.current = true;
        setTakingOff(true);
      }
      onCompleteTimer = window.setTimeout(
        () => onCompleteRef.current(),
        reduceMotion ? 0 : 900,
      );
    }, duration);

    frame = requestAnimationFrame(updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(completionTimer);
      window.clearTimeout(onCompleteTimer);
    };
  }, [reduceMotion]);

  useEffect(() => {
    const phoenix = new Image();
    phoenix.src = `${import.meta.env.BASE_URL}phoenix-bird.png`;
  }, []);

  const stage = loadingStages.find(({ threshold }) => progress < threshold) ?? loadingStages.at(-1)!;

  return (
    <motion.div
      role="region"
      aria-label="Portfolio loading screen"
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.28, ease: "easeOut" }}
      className="editorial-loader fixed inset-0 z-[100] flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="loader-layout">
        <p className="loader-overline">
          Portfolio <span>·</span> Loading
        </p>

        <div className="loader-visual">
          <NetworkGraphic className="loader-network-graphic" />
          <span className="loader-orbit loader-orbit--one" />
          <span className="loader-orbit loader-orbit--two" />
          <motion.img
            src={`${import.meta.env.BASE_URL}phoenix-bird.png`}
            alt=""
            className="loader-phoenix-image"
            initial={{ y: 48, opacity: 0, scale: 0.72 }}
            animate={takingOff
              ? { y: "-105vh", opacity: 0, scale: 1.14, rotate: -4 }
              : { y: 0, opacity: 1, scale: 1, rotate: 0 }}
            transition={takingOff
              ? {
                y: { duration: reduceMotion ? 0 : 1, ease: [0.2, 0.72, 0.28, 1] },
                opacity: { duration: reduceMotion ? 0 : 0.2, delay: reduceMotion ? 0 : 0.76, ease: "easeOut" },
                scale: { duration: reduceMotion ? 0 : 0.9, ease: "easeOut" },
                rotate: { duration: reduceMotion ? 0 : 0.9, ease: "easeOut" },
              }
              : { duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
          />
        </div>
        <p className="loader-caption">
          Excited to know
        </p>

        <div className="loader-progress-wrap">
          <div className="loader-progress-label">
            <p role="status" aria-live="polite">
              {stage.label}
            </p>
            <span>{progress}%</span>
          </div>
          <div
            className="loader-progress-track"
            role="progressbar"
            aria-label="Portfolio loading progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <motion.div
              className="loader-progress"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.12, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
