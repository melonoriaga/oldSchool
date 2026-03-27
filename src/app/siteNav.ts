export type SiteNavLink = { label: string; id: string };

/** Enlaces visibles en el header desktop (compacto). */
export const NAV_DESKTOP: SiteNavLink[] = [
  { label: 'INICIO', id: 'hero' },
  { label: 'CONCEPTO', id: 'concepto' },
  { label: 'EXPERIENCIA', id: 'producto' },
  { label: 'BARILOCHE', id: 'bariloche' },
  { label: 'COMUNIDAD', id: 'comunidad' },
  { label: 'FAQ', id: 'faq' },
  { label: 'MUSEO', id: 'museo' },
];

/** Listado completo: drawer mobile y menú flotante. */
export const NAV_FULL: SiteNavLink[] = [
  { label: 'INICIO', id: 'hero' },
  { label: 'CONCEPTO', id: 'concepto' },
  { label: 'GENERACIONES', id: 'generaciones' },
  { label: 'EXPERIENCIA', id: 'producto' },
  { label: 'FORMATO', id: 'formato' },
  { label: 'BARILOCHE', id: 'bariloche' },
  { label: 'COMUNIDAD', id: 'comunidad' },
  { label: 'TESTIMONIOS', id: 'testimonios' },
  { label: 'FAQ', id: 'faq' },
  { label: 'PRECIO', id: 'precio' },
  { label: 'MUSEO', id: 'museo' },
  { label: 'POSTULACIÓN', id: 'postulacion' },
];
