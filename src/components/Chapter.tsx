import { motion } from "framer-motion";
import { EASE } from "./Reveal";

type ChapterProps = {
  num: string;
  kicker: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
};

export default function Chapter({
  num,
  kicker,
  title,
  sub,
  align = "left",
}: ChapterProps) {
  const center = align === "center";
  return (
    <div className={`relative mb-14 md:mb-20 ${center ? "text-center" : ""}`}>
      {/* ghost chapter number */}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE }}
        className={`text-stroke pointer-events-none absolute -top-6 select-none font-display text-[7rem] font-bold leading-none opacity-[0.08] md:-top-12 md:text-[12rem] ${
          center ? "left-1/2 -translate-x-1/2" : "right-0"
        }`}
      >
        {num}
      </motion.span>
      <div
        className={`mb-5 flex items-center gap-4 ${
          center ? "justify-center" : ""
        }`}
      >
        <motion.span
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-mono text-xs tracking-[0.35em] text-cyan-300/90"
        >
          / {num}
        </motion.span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className={`h-px w-16 origin-left bg-gradient-to-r from-cyan-400/70 to-transparent ${
            center ? "hidden" : ""
          }`}
        />
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
          className="font-mono text-[11px] uppercase tracking-[0.4em] text-slate-400"
        >
          {kicker}
        </motion.span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
        className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className={`mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg ${
            center ? "mx-auto" : ""
          }`}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
