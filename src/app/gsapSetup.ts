import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Init once before any section mounts.
 * - `toggleActions`: sin reverse al subir (evita contenido en opacity 0).
 * No usar `limitCallbacks` ni `fastScrollEnd` aquí: rompen callbacks finos (p. ej. Header)
 * y el scroll se siente “a saltos” o no dispara onEnter/onLeaveBack.
 */
gsap.registerPlugin(ScrollTrigger);

// Evita que tweens `from` dejen elementos ocultos antes de activarse en scroll.
gsap.defaults({
  immediateRender: false,
  overwrite: 'auto',
});

ScrollTrigger.defaults({
  toggleActions: 'play none none none',
});

if (typeof window !== 'undefined') {
  const refresh = () => ScrollTrigger.refresh();
  // Un único refresh temprano y estable.
  requestAnimationFrame(() => requestAnimationFrame(refresh));
}

export { gsap, ScrollTrigger };
