import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Layers, Terminal } from "lucide-react";
import { useRef } from "react";
import { projects } from "../data/profile";
import { cn } from "../utils/cn";
import { GithubIcon } from "./BrandIcons";
import Chapter from "./Chapter";
import Icon from "./Icon";
import Reveal from "./Reveal";

function TiltPanel({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [9, -9]), { stiffness: 140, damping: 28 });
  const ry = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 140, damping: 28 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div style={{ perspective: 1100 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => {
          mx.set(0.5);
          my.set(0.5);
        }}
        style={{
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="relative h-full min-h-[260px] overflow-hidden rounded-3xl"
      >
      {/* gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${project.grad[0]}26, ${project.grad[1]}14 55%, #0b0e22)`,
        }}
      />
      {/* glow orbs */}
      <div
        className="absolute -left-10 -top-10 h-56 w-56 rounded-full blur-[90px] transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: project.grad[0], opacity: 0.35 }}
      />
      <div
        className="absolute -bottom-12 -right-8 h-52 w-52 rounded-full blur-[90px] transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: project.grad[1], opacity: 0.25 }}
      />

      {/* grid lines */}
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:44px_44px]" />

      {/* scanline */}
      <div className="pointer-events-none absolute inset-x-0 h-24 animate-scanline bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent" />

      {/* floating code chips */}
      <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] text-slate-400">
        <Terminal className="h-3.5 w-3.5" style={{ color: project.grad[0] }} />
        <span>model.train(</span>
        <span className="text-slate-600">epochs=100</span>
        <span>)</span>
      </div>
      <div className="absolute bottom-6 left-6 flex items-center gap-2 font-mono text-[10px] text-slate-500">
        <span className="text-emerald-400">▸</span>
        <span>loss:</span>
        <span style={{ color: project.grad[1] }}>0.021</span>
        <span className="text-slate-600">// converging…</span>
      </div>

      {/* big icon */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ transform: "translateZ(46px)" }}
      >
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-transform duration-500 group-hover:scale-110 md:h-28 md:w-28">
          <Icon
            name={project.icon}
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <div
            className="absolute inset-0 -z-10 rounded-3xl blur-2xl"
            style={{ background: `${project.grad[0]}55` }}
          />
        </div>
      </div>

      {/* index watermark */}
      <span className="absolute right-6 top-4 font-display text-6xl font-bold text-white/[0.06] md:text-7xl">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* corner tag */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-300 backdrop-blur-md">
        <Layers className="h-3 w-3" style={{ color: project.grad[0] }} />
        {project.tag}
      </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

      <Chapter
        num="03"
        kicker="Build Log"
        title={
          <>
            Systems I've <span className="text-gradient">engineered</span>
          </>
        }
        sub="Nine real projects — each one a question turned into a working system. Fraud detection, deepfake forensics, autonomous vision, and everything in between."
      />

      <div className="space-y-16 md:space-y-24">
        {projects.map((project, i) => {
          const even = i % 2 === 0;
          return (
            <div
              key={project.id}
              className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              {/* visual */}
              <Reveal
                x={even ? -60 : 60}
                y={0}
                className={cn(even ? "lg:order-1" : "lg:order-2")}
              >
                <TiltPanel project={project} index={i} />
              </Reveal>

              {/* content */}
              <Reveal
                delay={0.12}
                x={even ? 60 : -60}
                y={0}
                className={cn(even ? "lg:order-2" : "lg:order-1")}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: project.grad[0], boxShadow: `0 0 14px ${project.grad[0]}` }}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-transparent group-hover:[background:linear-gradient(90deg,#60a5fa,#a78bfa,#22d3ee)] group-hover:[background-clip:text] md:text-[2rem]">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">{project.blurb}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[10px] tracking-wide text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-6">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Source
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:gap-3"
                  >
                    View on GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      {/* closing line */}
      <Reveal delay={0.1} className="mt-20 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
          + more experiments running in the lab every week
        </p>
      </Reveal>
    </section>
  );
}
