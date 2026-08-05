import { marqueeItems } from "../data/profile";

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className={`flex w-max items-center gap-10 whitespace-nowrap ${
        reverse ? "animate-marquee-rev" : "animate-marquee"
      }`}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10">
          <span
            className={`font-display text-2xl font-semibold uppercase tracking-wide md:text-3xl ${
              i % 2 === 0 ? "text-slate-200" : "text-stroke"
            }`}
          >
            {item}
          </span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-cyan-400/70" fill="currentColor">
            <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative z-10 overflow-hidden border-y border-white/5 bg-white/[0.015] py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#04060f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#04060f] to-transparent" />
      <div className="edge-fade-x">
        <Row />
      </div>
      <div className="edge-fade-x mt-6 opacity-60">
        <Row reverse />
      </div>
    </section>
  );
}
