import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Chapter from "./Chapter";
import Reveal, { EASE } from "./Reveal";

const CHANNELS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    accent: "#4f7cff",
    note: "Fastest response",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
    accent: "#22d3ee",
    note: "WhatsApp available",
  },
  {
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    icon: GithubIcon,
    accent: "#a78bfa",
    note: "Code & experiments",
  },
  {
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    icon: LinkedinIcon,
    accent: "#60a5fa",
    note: "Let's connect",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      {/* closing glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-blue-600/15 via-violet-600/15 to-cyan-500/15 blur-[120px]" />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] px-6 py-16 backdrop-blur-xl md:px-16 md:py-24">
        {/* inner grid */}
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        <div className="relative">
          <Chapter
            num="06"
            kicker="Transmission"
            align="center"
            title={
              <>
                Let's build what's <span className="text-gradient">next</span>
              </>
            }
            sub="I'm actively seeking my first full-time opportunity in AI & Machine Learning. If you're looking for someone who ships, learns and cares about the details — my inbox is open."
          />

          {/* terminal transmission card */}
          <Reveal className="mx-auto mb-14 max-w-xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070a18]/90 shadow-[0_0_60px_-20px_rgba(79,124,255,0.5)]">
              <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-[10px] tracking-[0.2em] text-slate-500">
                  thariq@neural-core: ~
                </span>
              </div>
              <div className="space-y-2.5 px-5 py-6 font-mono text-[13px] leading-relaxed md:text-sm">
                <p className="text-slate-400">
                  <span className="text-emerald-400">➜</span>{" "}
                  <span className="text-cyan-300">init</span> --career
                  ai_ml_engineer --first-role
                </p>
                <p className="text-slate-500">
                  loading profile... <span className="text-emerald-400">✓</span>
                </p>
                <p className="text-slate-500">
                  loading projects... <span className="text-emerald-400">✓</span>
                </p>
                <p className="text-slate-500">
                  loading passion... <span className="text-emerald-400">✓✓✓</span>
                </p>
                <p className="text-slate-300">
                  <span className="text-emerald-400">➜</span>{" "}
                  <span className="text-cyan-300">send</span> --to{" "}
                  <span className="text-white">recruiters</span> --msg{" "}
                  <span className="text-violet-300">
                    "let's build something intelligent"
                  </span>
                </p>
                <p className="text-slate-500">
                  awaiting connection... <span className="animate-blink text-cyan-300">▊</span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* channel cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CHANNELS.map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="card-glow group relative flex flex-col items-start gap-4 rounded-2xl glass p-6 transition-transform duration-500 hover:-translate-y-2"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${ch.accent}1f` }}
                >
                  <ch.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                    {ch.label}
                  </p>
                  <p className="mt-1.5 truncate font-display text-sm font-semibold text-white md:text-base">
                    {ch.value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{ch.note}</p>
                </div>
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-slate-600 transition-all duration-300 group-hover:text-cyan-300" />
              </motion.a>
            ))}
          </div>

          {/* mega CTA */}
          <Reveal delay={0.15} className="mt-14 text-center">
            <a
              href={`mailto:${profile.email}?subject=Opportunity%20for%20Thariq%20Arsath%20J&body=Hi%20Thariq,%20we%20came%20across%20your%20portfolio%20and%20would%20love%20to%20talk.`}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 px-10 py-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-[0_0_60px_-12px_rgba(139,92,246,0.9)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_80px_-10px_rgba(34,211,238,0.9)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Send className="h-4 w-4" />
              Start the conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600">
              Typically responds within 24 hours
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
