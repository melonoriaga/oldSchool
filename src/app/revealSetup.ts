/**
 * Centralized scroll-reveal system.
 * Replaces 130+ individual ScrollTrigger instances with 4 batch calls.
 * BatchTrigger fires callbacks when multiple elements enter the viewport at once,
 * then kills itself (once: true) → zero ongoing scroll overhead after initial pass.
 */
import { gsap, ScrollTrigger } from './gsapSetup';

let revealReady = false;

function setupReveal() {
  if (revealReady) return;
  revealReady = true;

  // ── Numbers: scale bounce ────────────────────────────────────────────────
  ScrollTrigger.batch('.os-brutal-num, .os-brutal-num-sub, [data-reveal="num"]', {
    onEnter: (batch) => {
      const els = batch.filter((el) => !el.closest('#hero'));
      if (!els.length) return;
      gsap.from(els, {
        opacity: 0,
        scale: 0.4,
        duration: 0.75,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        clearProps: 'all',
      });
    },
    start: 'top 92%',
    once: true,
  });

  // ── Section titles (h2) ──────────────────────────────────────────────────
  ScrollTrigger.batch('.os-section-h2', {
    onEnter: (batch) => {
      const els = batch.filter((el) => !el.closest('#hero'));
      if (!els.length) return;
      gsap.from(els, {
        opacity: 0,
        y: 28,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'all',
      });
    },
    start: 'top 90%',
    once: true,
  });

  // ── Kickers / subtitles: subtle fade ────────────────────────────────────
  ScrollTrigger.batch('.os-section-kicker', {
    onEnter: (batch) => {
      const els = batch.filter((el) => !el.closest('#hero'));
      if (!els.length) return;
      gsap.from(els, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power2.out',
        clearProps: 'opacity',
      });
    },
    start: 'top 92%',
    once: true,
  });

  // ── Photo zoom: scale 1.08 → 1 (os-grid-cover-cell already overflow:hidden) ──
  ScrollTrigger.batch('.os-grid-cover-img', {
    onEnter: (batch) => {
      gsap.from(batch, {
        scale: 1.08,
        duration: 1.4,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'all',
      });
    },
    start: 'top 94%',
    once: true,
  });

  ScrollTrigger.refresh();
}

if (typeof window !== 'undefined') {
  // Wait for React to render all components before scanning the DOM.
  requestAnimationFrame(() => requestAnimationFrame(setupReveal));
  // Extra safety pass for late-mounted or image-dependent layout shifts.
  setTimeout(setupReveal, 1200);
}
