import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { skillCategories, skills } from "../data/profile";
import { cn } from "../utils/cn";
import Chapter from "./Chapter";
import Icon from "./Icon";
import { EASE } from "./Reveal";

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.cat === active);

  return (
    <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      {/* ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />

      <Chapter
        num="02"
        kicker="Capabilities"
        title={
          <>
            A neural toolkit, <span className="text-gradient">finely tuned</span>
          </>
        }
        sub="Nineteen instruments across the AI/ML spectrum — from the mathematics to the frameworks, the data wrangling to the deployment layer."
      />

      {/* category filter */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
        {skillCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "relative rounded-full px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors duration-300",
              active === cat
                ? "text-white"
                : "glass text-slate-400 hover:text-white"
            )}
          >
            {active === cat && (
              <motion.span
                layoutId="skill-pill"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 shadow-[0_0_28px_-6px_rgba(139,92,246,0.8)]"
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* skill cards */}
      <motion.div layout className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -10 }}
              transition={{ duration: 0.5, delay: i * 0.03, ease: EASE }}
              className="card-glow group relative overflow-hidden rounded-2xl glass p-5 transition-transform duration-500 hover:-translate-y-2"
            >
              {/* hover sheen */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(240px_circle_at_var(--x,50%)_0%,rgba(139,92,246,0.16),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-4 flex items-center justify-between">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 via-violet-500/25 to-cyan-400/25 ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:ring-cyan-400/40">
                  <Icon
                    name={skill.icon}
                    className="h-5 w-5 text-cyan-200 transition-transform duration-500 group-hover:rotate-6"
                  />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600 transition-colors duration-300 group-hover:text-slate-400">
                  {skill.cat}
                </span>
              </div>

              <h3 className="font-display text-sm font-semibold leading-snug text-white md:text-base">
                {skill.name}
              </h3>

              {/* proficiency bar */}
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.lvl}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.04, ease: EASE }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400"
                />
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-slate-600">
                <span>PROFICIENCY</span>
                <span className="text-slate-400">{skill.lvl}%</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
