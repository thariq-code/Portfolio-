import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "./Reveal";

const STATUS = [
  "Initializing neural core…",
  "Loading knowledge graph…",
  "Calibrating vision systems…",
  "Syncing model weights…",
  "Systems ready.",
];

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 2300;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const status = STATUS[Math.min(STATUS.length - 1, Math.floor(progress / 21))];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04060f]"
      exit={{ opacity: 0, scale: 1.06, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,124,255,0.16),rgba(139,92,246,0.08)_45%,transparent_70%)]" />

      {/* neural mark */}
      <div className="relative mb-10 flex h-28 w-28 items-center justify-center">
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-transparent [background:conic-gradient(from_0deg,transparent_0_60%,rgba(34,211,238,0.55)_75%,transparent_90%)] [mask:radial-gradient(farthest-side,transparent_calc(100%_-_1.5px),black_calc(100%_-_1px))]" />
        <div className="absolute inset-3 animate-spin-slower rounded-full border border-transparent [background:conic-gradient(from_180deg,transparent_0_50%,rgba(139,92,246,0.5)_70%,transparent_85%)] [mask:radial-gradient(farthest-side,transparent_calc(100%_-_1.5px),black_calc(100%_-_1px))]" />
        <svg viewBox="0 0 64 64" className="relative h-16 w-16">
          <defs>
            <linearGradient id="loader-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#4f7cff" />
              <stop offset="0.5" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {[
              [20, 20, 44, 16],
              [44, 16, 48, 40],
              [48, 40, 24, 46],
              [24, 46, 20, 20],
              [20, 20, 48, 40],
              [44, 16, 24, 46],
            ].map(([x1, y1, x2, y2], i) => (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#loader-g)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: "easeInOut" }}
              />
            ))}
            {[
              [20, 20, 4.4],
              [44, 16, 3.4],
              [48, 40, 4.4],
              [24, 46, 3.4],
            ].map(([cx, cy, r], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                fill="url(#loader-g)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.45,
                  delay: 0.35 + i * 0.12,
                  type: "spring",
                  stiffness: 300,
                  damping: 16,
                }}
              />
            ))}
          </motion.g>
        </svg>
      </div>

      {/* progress readout */}
      <div className="font-mono text-5xl font-semibold tabular-nums tracking-tight text-white md:text-6xl">
        {progress}
        <span className="text-gradient">%</span>
      </div>

      <div className="mt-6 h-px w-56 overflow-hidden rounded-full bg-white/10 md:w-72">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.p
        key={status ?? "loader-status"}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 font-mono text-xs tracking-[0.3em] text-slate-500"
      >
        {(status ?? "").toUpperCase()}
      </motion.p>

      <div className="absolute bottom-8 left-8 hidden font-mono text-[10px] tracking-[0.25em] text-slate-600 md:block">
        TAJ // NEURAL PORTFOLIO v2.0
      </div>
      <div className="absolute bottom-8 right-8 hidden font-mono text-[10px] tracking-[0.25em] text-slate-600 md:block">
        EST. 2026 — COIMBATORE
      </div>
    </motion.div>
  );
}
