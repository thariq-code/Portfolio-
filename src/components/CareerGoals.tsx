import { motion } from "framer-motion";
import { ArrowUpRight, Crosshair, Globe2, Laptop, MapPin } from "lucide-react";
import { goals } from "../data/profile";
import Chapter from "./Chapter";
import Icon from "./Icon";
import { EASE } from "./Reveal";

const OPEN_TO = ["Remote", "Hybrid", "On-site", "Internship → Full-time", "Relocation"];

export default function CareerGoals() {
  return (
    <section id="goals" className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-1/3 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <Chapter
        num="05"
        kicker="Trajectory"
        title={
          <>
            Where I'm <span className="text-gradient">headed</span>
          </>
        }
        sub="One mission, several paths. I'm targeting roles where I can apply machine learning to real problems from day one — and grow into an engineer who ships intelligent products."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal, i) => (
          <motion.div
            key={goal.role}
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: EASE }}
            className="card-glow group relative overflow-hidden rounded-2xl glass p-6 transition-transform duration-500 hover:-translate-y-1.5"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="mb-5 flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 via-violet-500/25 to-cyan-400/25 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Icon name={goal.icon} className="h-6 w-6 text-cyan-200" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                Target {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="font-display text-lg font-semibold leading-snug text-white">
              {goal.role}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{goal.why}</p>

            <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600 transition-colors duration-300 group-hover:text-cyan-300">
              <Crosshair className="h-3.5 w-3.5" />
              Career target
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* availability banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/15 via-violet-600/15 to-cyan-500/15 p-8 backdrop-blur-xl md:p-10"
      >
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Laptop className="h-7 w-7 text-white" />
              <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[#0a0e22] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                Ready to start immediately
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                First full-time role in AI/ML — fast learner, high velocity, zero ego.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {OPEN_TO.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-200"
              >
                {tag.includes("Remote") || tag.includes("Hybrid") ? (
                  <Globe2 className="h-3 w-3 text-cyan-300" />
                ) : tag.includes("On-site") ? (
                  <MapPin className="h-3 w-3 text-blue-300" />
                ) : (
                  <Crosshair className="h-3 w-3 text-violet-300" />
                )}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
