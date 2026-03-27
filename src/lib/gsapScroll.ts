/** Reversible section reveals on scroll (unwind when scrolling up). */
export const stReveal = {
  toggleActions: 'play none none reverse' as const,
};

/**
 * ScrollTrigger start positions (viewport % from top).
 * Use high values so animations begin as soon as the block entra por abajo,
 * instead of waiting for `top 75%` (muy tarde, sensación de “lag”).
 */
export const stStart = {
  /** Número grande / cabecera de sección */
  heroMark: 'top 92%',
  /** Títulos y bloque principal */
  title: 'top 90%',
  /** Párrafos y listas */
  body: 'top 88%',
  /** Piezas chicas (asteriscos, ítems) */
  detail: 'top 93%',
} as const;
