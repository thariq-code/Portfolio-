import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  FileDown,
  Send,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";
import { profile } from "../data/profile";
import { downloadResume } from "../lib/resume";
import Counter from "./Counter";
import { EASE } from "./Reveal";

const NAME = "Thariq Arsath J";
const TITLE_WORDS = [
  "Aspiring",
  "AI",
  "&",
  "Machine",
  "Learning",
  "Engineer",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const springConfig = { stiffness: 90, damping: 28, mass: 0.35 };
  const contentYSmooth = useSpring(contentY, springConfig);
  const contentOpacitySmooth = useSpring(contentOpacity, springConfig);
  const glowYSmooth = useSpring(glowY, springConfig);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-20"
    >
      {/* cinematic light beams */}
      <motion.div style={{ y: glowYSmooth }} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[560px] w-[420px] -rotate-[24deg] bg-gradient-to-b from-blue-600/25 via-blue-500/8 to-transparent blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-[520px] w-[380px] rotate-[20deg] bg-gradient-to-b from-violet-600/22 via-violet-500/8 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-[100%] bg-cyan-500/10 blur-[120px]" />
        <div className="absolute left-[12%] top-[16%] h-64 w-64 rounded-full bg-blue-500/15 blur-[100px]" />
        <div className="absolute right-[14%] top-[46%] h-72 w-72 rounded-full bg-violet-500/14 blur-[110px]" />
      </motion.div>

      <motion.div
        style={{ y: contentYSmooth, opacity: contentOpacitySmooth }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center"
        transition={{ ease: EASE, duration: 0.8 }}
      >
        {/* status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-300 md:text-[11px]">
            Open to full-time AI/ML roles
          </span>
        </motion.div>

        {/* system line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-5 font-mono text-[11px] tracking-[0.45em] text-cyan-300/80 md:text-xs"
        >
          // SYSTEM ONLINE — PORTFOLIO 2026
        </motion.p>

        {/* name — letter reveal */}
        <h1
          className="font-display font-bold leading-[0.98] tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 10.5vw, 8.5rem)" }}
        >
          {NAME.split(" ").map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap">
              {word.split("").map((ch, ci) => (
                <span
                  key={ci}
                  className="inline-block overflow-hidden pb-[0.08em] align-bottom"
                >
                  <motion.span
                    initial={{ y: "115%", rotate: 6, opacity: 0, filter: "blur(14px)" }}
                    animate={{ y: 0, rotate: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.45 + (wi * word.length + ci) * 0.035,
                      ease: EASE,
                    }}
                    className="inline-block will-change-transform"
                  >
                    {ch}
                  </motion.span>
                </span>
              ))}
              {wi < NAME.split(" ").length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-gradient ml-3 inline-block animate-blink"
            aria-hidden="true"
          >
            _
          </motion.span>
        </h1>

        {/* title — word reveal */}
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {TITLE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.9 + i * 0.09, ease: EASE }}
              className={
                i >= 2
                  ? "font-display text-xl font-semibold text-shimmer md:text-3xl"
                  : "font-display text-xl font-medium text-slate-300 md:text-3xl"
              }
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35, ease: EASE }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base"
        >
          {profile.tagline}{" "}
          <span className="text-slate-500">
            Recent B.Sc. AI & ML graduate · 85% · GUVI × HCL GenZen certified.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(139,92,246,0.9)] sm:w-auto"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <Sparkles className="h-4 w-4" />
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <button
            onClick={() => downloadResume()}
            className="group flex w-full items-center justify-center gap-2.5 rounded-full glass px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.7)] sm:w-auto"
          >
            <FileDown className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:translate-y-0.5" />
            Download Resume
          </button>

          <a
            href="#contact"
            className="group flex w-full items-center justify-center gap-2 px-4 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition-colors duration-300 hover:text-cyan-300 sm:w-auto"
          >
            <Send className="h-4 w-4" />
            Contact
            <span className="h-px w-6 bg-slate-600 transition-all duration-300 group-hover:w-10 group-hover:bg-cyan-400" />
          </a>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.7, ease: EASE }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl glass md:grid-cols-4"
        >
          {profile.stats.map((s, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-1 bg-white/[0.02] px-4 py-6 transition-colors duration-500 hover:bg-white/[0.05]"
            >
              <span className="font-display text-3xl font-bold text-white md:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-slate-500">
          Scroll to explore
        </span>
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400"
          />
        </span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce text-slate-600" />
      </motion.a>
    </section>
  );
}
