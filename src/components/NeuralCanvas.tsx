import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number; hue: number };
type Stream = { a: number; b: number; t: number; speed: number; hue: number };

const PALETTE = [
  { r: 79, g: 124, b: 255 }, // neon blue
  { r: 139, g: 92, b: 246 }, // violet
  { r: 34, g: 211, b: 238 }, // cyan
];

/**
 * Full-screen interactive neural field: drifting nodes, synapse connections,
 * traveling data pulses and a mouse-reactive gravitational glow.
 */
export default function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    let nodes: Node[] = [];
    let streams: Stream[] = [];
    let running = true;

    const spawnStream = (): Stream => {
      const a = Math.floor(Math.random() * nodes.length);
      let b = Math.floor(Math.random() * nodes.length);
      while (b === a) b = Math.floor(Math.random() * nodes.length);
      return {
        a,
        b,
        t: Math.random(),
        speed: 0.004 + Math.random() * 0.009,
        hue: Math.floor(Math.random() * PALETTE.length),
      };
    };

    const init = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = reduced
        ? 26
        : Math.max(42, Math.min(92, Math.floor((w * h) / 17000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.6 + 0.7,
        hue: Math.floor(Math.random() * PALETTE.length),
      }));
      streams = Array.from({ length: reduced ? 5 : 14 }, () => spawnStream());
    };

    const onResize = () => init();

    const onMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    const onLeave = () => {
      mouse.tx = -9999;
      mouse.ty = -9999;
    };

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      // ease mouse
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      // move nodes (gentle drift)
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;

        // soft mouse attraction
        const dxm = mouse.x - n.x;
        const dym = mouse.y - n.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 190 && dm > 0.001) {
          const f = (1 - dm / 190) * 0.028;
          n.vx += (dxm / dm) * f;
          n.vy += (dym / dm) * f;
        }
        // damp velocity back to baseline
        n.vx *= 0.994;
        n.vy *= 0.994;
      }

      // synapse connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 150) {
            const alpha = (1 - d / 150) * 0.16;
            const c = PALETTE[a.hue];
            ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const c = PALETTE[n.hue];
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // mouse synapses
      if (mouse.x > -1000) {
        for (const n of nodes) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 230) {
            const alpha = (1 - d / 230) * 0.5;
            const c = PALETTE[1];
            ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(139,92,246,0.85)";
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // data streams — glowing pulses traveling along synapses
      for (const s of streams) {
        s.t += s.speed;
        if (s.t > 1) {
          Object.assign(s, spawnStream());
          continue;
        }
        const a = nodes[s.a];
        const b = nodes[s.b];
        if (!a || !b) continue;
        const px = a.x + (b.x - a.x) * s.t;
        const py = a.y + (b.y - a.y) * s.t;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len;
        const uy = dy / len;
        const c = PALETTE[s.hue];

        // trail
        const trail = ctx.createLinearGradient(
          px - ux * 26,
          py - uy * 26,
          px,
          py
        );
        trail.addColorStop(0, `rgba(${c.r},${c.g},${c.b},0)`);
        trail.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0.9)`);
        ctx.strokeStyle = trail;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(px - ux * 26, py - uy * 26);
        ctx.lineTo(px, py);
        ctx.stroke();

        // head
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},0.95)`;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };

    init();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduced) raf = requestAnimationFrame(step);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
