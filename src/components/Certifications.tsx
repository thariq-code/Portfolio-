import { motion, useScroll, useSpring } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { useRef } from "react";
import { certifications } from "../data/profile";
import { cn } from "../utils/cn";
import Chapter from "./Chapter";
import Icon from "./Icon";
import { EASE } from "./Reveal";

export default function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="certifications" className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
      <div className="pointer-events-none absolute right-10 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <Chapter
        num="04"
        kicker="Validation"
        title={
          <>
            Proof, <span className="text-gradient">certified</span>
          </>
        }
        sub="Formal training from IBM, Infosys, IIT Hyderabad's IHUB Robotics, and GUVI × HCL — the foundations that turned curiosity into capability."
      />

      <div ref={trackRef} className="relative">
        {/* spine */}
        <div className="absolute left-[19px] top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[19px] top-0 h-full w-px origin-top bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400 shadow-[0_0_16px_rgba(99,102,241,0.8)] md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-10 md:space-y-14">
          {certifications.map((cert, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={cert.title}
                className={cn(
                  "relative flex items-start gap-6 pl-14 md:w-1/2 md:pl-0",
                  left
                    ? "md:mr-auto md:pr-14 md:text-right"
                    : "md:ml-auto md:pl-14"
                )}
              >
                {/* node */}
                <span
                  className={cn(
                    "absolute left-[7px] top-1 flex h-[26px] w-[26px] items-center justify-center rounded-full border border-white/15 bg-[#0a0e22] md:top-0",
                    left ? "md:left-auto md:-right-[13px]" : "md:-left-[13px]"
                  )}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      background: cert.grad[0],
                      boxShadow: `0 0 12px ${cert.grad[0]}`,
                    }}
                  />
                </span>

                <motion.div
                  initial={{ opacity: 0, y: 34, x: left ? -24 : 24, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="card-glow group w-full rounded-2xl glass p-6 transition-transform duration-500 hover:-translate-y-1"
                >
                  <div
                    className={cn(
                      "flex items-center gap-3",
                      left ? "md:flex-row-reverse" : ""
                    )}
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/10"
                      style={{
                        background: `linear-gradient(135deg, ${cert.grad[0]}30, ${cert.grad[1]}1c)`,
                      }}
                    >
                      <Icon name={cert.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-slate-400">
                        <BadgeCheck className="h-3 w-3 text-emerald-400" />
                        {cert.issuerShort}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-200">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500">{cert.issuer}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
