import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

type Colors = {
  primary: string;
  accent: string;
  muted: string;
};

function getThemeColors(): Colors {
  const styles = getComputedStyle(document.documentElement);

  const primary = styles.getPropertyValue("--primary").trim();
  const accent = styles.getPropertyValue("--accent").trim();
  const muted = styles.getPropertyValue("--muted-foreground").trim();

  return {
    primary: primary ? `hsl(${primary})` : "transparent",
    accent: accent ? `hsl(${accent})` : "transparent",
    muted: muted ? `hsl(${muted})` : "transparent",
  };
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isReduced = prefersReducedMotion();
    let colors = getThemeColors();
    let isDark = document.documentElement.classList.contains("dark");

    const particles: Particle[] = [];
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(2, window.devicePixelRatio || 1);

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = Math.max(28, Math.min(120, Math.floor((w * h) / 22000)));
      while (particles.length > targetCount) particles.pop();
      while (particles.length < targetCount) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: 1 + Math.random() * 1.6,
        });
      }

      if (isReduced) drawFrame();
    };

    const drawFrame = () => {
      // Clear
      ctx.clearRect(0, 0, w, h);

      // Slightly stronger visibility in light theme
      const lineAlphaBase = isDark ? 0.10 : 0.16;
      const nodeAlphaBase = isDark ? 0.55 : 0.72;
      const gridAlphaBase = isDark ? 0.05 : 0.07;

      // Scroll-linked parallax (very subtle)
      const scrollY = window.scrollY || 0;
      const parallaxY = Math.max(-80, Math.min(80, scrollY * 0.02));

      // Update particle positions
      if (!isReduced) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -50) p.x = w + 50;
          if (p.x > w + 50) p.x = -50;
          if (p.y < -50) p.y = h + 50;
          if (p.y > h + 50) p.y = -50;
        }
      }

      const maxDist = Math.min(170, Math.max(110, Math.floor(Math.min(w, h) * 0.22)));
      const maxDist2 = maxDist * maxDist;

      // Lines
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > maxDist2) continue;

          const t = 1 - d2 / maxDist2;
          const alpha = lineAlphaBase * t;

          // Keep colors tied to the theme variables (no hard-coded palette).
          ctx.strokeStyle = (i + j) % 2 === 0 ? colors.primary : colors.accent;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y + parallaxY);
          ctx.lineTo(b.x, b.y + parallaxY);
          ctx.stroke();
        }
      }

      // Nodes
      ctx.globalAlpha = nodeAlphaBase;
      for (const p of particles) {
        const glow = (Math.sin((p.x + p.y) * 0.01) + 1) / 2;
        ctx.fillStyle = glow > 0.5 ? colors.accent : colors.primary;
        ctx.beginPath();
        ctx.arc(p.x, p.y + parallaxY, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Very faint grid hint (dev/architecture vibe)
      ctx.globalAlpha = gridAlphaBase;
      ctx.strokeStyle = colors.muted;
      ctx.lineWidth = 1;
      const grid = 80;
      for (let x = 0; x <= w; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
    };

    const step = () => {
      drawFrame();
      if (isReduced) {
        rafRef.current = null;
        return;
      }
      rafRef.current = window.requestAnimationFrame(step);
    };

    const reducedMql = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const onReducedChange = () => {
      const next = prefersReducedMotion();
      const wasReduced = isReduced;
      isReduced = next;

      // If we just entered reduced mode, stop looping after one redraw.
      // If we just exited reduced mode, restart the animation loop.
      if (!wasReduced && next) {
        if (rafRef.current) {
          window.cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
        drawFrame();
      }
      if (wasReduced && !next && !rafRef.current) {
        rafRef.current = window.requestAnimationFrame(step);
      }
    };

    const observer = new MutationObserver(() => {
      colors = getThemeColors();
      isDark = document.documentElement.classList.contains("dark");
      if (isReduced) drawFrame();
    });

    resize();

    if (reducedMql) {
      reducedMql.addEventListener?.("change", onReducedChange);
    }

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "style"] });

    // Start (or just draw once if reduced motion is enabled)
    if (isReduced) {
      drawFrame();
    } else {
      rafRef.current = window.requestAnimationFrame(step);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      if (reducedMql) {
        reducedMql.removeEventListener?.("change", onReducedChange);
      }
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 opacity-[0.24] dark:opacity-[0.16]" style={{ background: "var(--gradient-glow)" }} />
    </div>
  );
};

export default BackgroundAnimation;
