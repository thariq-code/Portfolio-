import { motion } from "framer-motion";
import { GraduationCap, MapPin, Rocket, Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import Chapter from "./Chapter";
import Reveal, { EASE } from "./Reveal";

function NeuralOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* soft core glow */}
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(79,124,255,0.4),rgba(139,92,246,0.22)_45%,transparent_70%)] blur-2xl" />

      {/* orbit rings */}
      <div className="absolute inset-0 rounded-full border border-white/8" />
      <div className="absolute inset-[10%] rounded-full border border-dashed border-blue-400/25" />
      <div className="absolute inset-[24%] rounded-full border border-violet-400/25" />

      {/* rotating gradient ring */}
      <div className="absolute inset-0 animate-spin-slow rounded-full [background:conic-gradient(from_0deg,transparent_0_55%,rgba(34,211,238,0.6)_72%,transparent_88%)] [mask:radial-gradient(farthest-side,transparent_calc(100%_-_2px),black_calc(100%_-_1px))]" />
      <div className="absolute inset-[10%] animate-spin-slower rounded-full [background:conic-gradient(from_140deg,transparent_0_40%,rgba(139,92,246,0.55)_62%,transparent_80%)] [mask:radial-gradient(farthest-side,transparent_calc(100%_-_2px),black_calc(100%_-_1px))]" />

      {/* orbiting satellites */}
      <div className="absolute inset-0 animate-orbit">
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_4px_rgba(34,211,238,0.7)]" />
      </div>
      <div className="absolute inset-0 animate-orbit-rev">
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_14px_3px_rgba(139,92,246,0.7)]" />
      </div>

      {/* pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="absolute h-40 w-40 animate-pulse-ring rounded-full border border-blue-400/40" />
        <span className="absolute h-40 w-40 animate-pulse-ring rounded-full border border-cyan-400/40 [animation-delay:1.4s]" />
      </div>

      {/* core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[radial-gradient(circle_at_32%_28%,#93b4ff,#4f7cff_38%,#5b21b6_78%,#1e1b4b)] shadow-[0_0_80px_-10px_rgba(99,102,241,0.85),inset_0_2px_24px_rgba(255,255,255,0.25)]">
          <GraduationCap className="h-12 w-12 text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.5)]" />
        </div>
      </div>

      {/* floating chips */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-strong absolute -left-2 top-[14%] rounded-2xl px-4 py-3 text-left shadow-xl md:-left-8"
      >
        <p className="font-display text-2xl font-bold text-white">85%</p>
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">
          Academic Score
        </p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="glass-strong absolute -right-2 top-[44%] rounded-2xl px-4 py-3 text-left shadow-xl md:-right-10"
      >
        <p className="font-display text-sm font-semibold text-white">GUVI × HCL</p>
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300">
          GenZen AI/ML Program
        </p>
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
        className="glass-strong absolute bottom-[12%] left-1/2 -translate-x-1/2 rounded-2xl px-4 py-3 text-left shadow-xl"
      >
        <p className="font-display text-sm font-semibold text-white">9+ Projects</p>
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300">
          Built from scratch
        </p>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <Chapter
        num="01"
        kicker="Origin"
        title={
          <>
            The human behind <span className="text-gradient">the model</span>
          </>
        }
        sub="Every great system starts with a question. Mine began with: what happens when machines learn to think?"
      />

      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* story */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-300/80">
              <Sparkles className="h-3.5 w-3.5" />
              Who I am
            </div>
            <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
              I'm{" "}
              <span className="font-display font-semibold text-white">
                Thariq Arsath J
              </span>
              , a recent{" "}
              <span className="text-white">
                B.Sc. Artificial Intelligence & Machine Learning
              </span>{" "}
              graduate from{" "}
              <span className="text-white">
                Shri Nehru Maha Vidyalaya College of Arts and Science
              </span>
              , Bharathiar University — graduating with an overall academic
              score of <span className="font-semibold text-cyan-300">85%</span>.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 leading-relaxed text-slate-400">
              Beyond the classroom, I completed the{" "}
              <span className="text-slate-200">
                GUVI × HCL GenZen Artificial Intelligence & Machine Learning
                Program
              </span>{" "}
              — an industry-aligned journey through the full AI/ML lifecycle:
              from messy datasets to feature engineering, model training and
              evaluation.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 leading-relaxed text-slate-400">
              I've built <span className="text-slate-200">9+ projects</span> —
              from detecting fraudulent transactions and deepfake scams to
              predicting stock prices and building an object-detection system
              inspired by Tesla Autopilot. I'm now actively looking for my{" "}
              <span className="text-cyan-300">first full-time opportunity</span>{" "}
              as a Machine Learning or AI Engineer, where I can learn fast,
              ship real systems and grow with a great team.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300">
                <GraduationCap className="h-3.5 w-3.5 text-blue-400" />
                B.Sc. AI & ML · 85%
              </span>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300">
                <Rocket className="h-3.5 w-3.5 text-violet-400" />
                GUVI × HCL GenZen Certified
              </span>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                {profile.location}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-blue-400 to-transparent" />
              <p className="font-display text-lg italic text-slate-300">
                "Curiosity, clean data, and relentless iteration — that's how I
                build."
              </p>
            </div>
          </Reveal>
        </div>

        {/* orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: EASE }}
          className="order-1 lg:order-2"
        >
          <NeuralOrb />
        </motion.div>
      </div>
    </section>
  );
}
