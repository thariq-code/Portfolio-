import { ArrowUp, Heart, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#03040c]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 font-display text-xs font-bold text-white">
            TA
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-white">
              {profile.name}
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
              AI / ML Engineer — Class of 2026
            </p>
          </div>
        </div>

        <p className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-slate-500">
          ENGINEERED WITH
          <Heart className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" />
          AND CURIOSITY · © 2026
        </p>

        <div className="flex items-center gap-3">
          {[
            { href: profile.github, icon: GithubIcon, label: "GitHub" },
            { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.7)]"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 text-white shadow-[0_0_24px_-6px_rgba(139,92,246,0.8)] transition-transform duration-300 hover:-translate-y-1"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
