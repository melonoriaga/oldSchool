export type SiteNavLink = { label: string; id: string };

/** Ítem del drawer mobile y menú flotante: mismo índice que el rótulo en página. */
export type SiteNavFullLink = SiteNavLink & {
  sectionNum: number;
  /** Texto extra para el buscador (sin acentos obligatorio: se normaliza). */
  keywords?: string;
};

/** Enlaces visibles en el header desktop (compacto). */
export const NAV_DESKTOP: SiteNavLink[] = [
  { label: 'INICIO', id: 'hero' },
  { label: 'OLD SCHOOL', id: 'concepto' },
  { label: 'BARILOCHE', id: 'bariloche' },
  { label: 'LA IDEA', id: 'generaciones' },
  { label: 'HOTEL', id: 'sec-12' },
  { label: 'POSTULARME', id: 'postulacion' },
];

function normalizeForSearch(s: string): string {
  return s
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase();
}

/** Filtra el listado completo por etiqueta, número de sección, id de ancla o keywords. */
export function filterNavFull(links: SiteNavFullLink[], query: string): SiteNavFullLink[] {
  const q = normalizeForSearch(query.trim());
  if (!q) return links;
  return links.filter((link) => {
    const num = String(link.sectionNum);
    const numPad = num.padStart(2, '0');
    const haystack = normalizeForSearch(
      [link.label, num, numPad, link.id, link.keywords].filter(Boolean).join(' '),
    );
    return haystack.includes(q);
  });
}

/**
 * Listado completo en orden de scroll (01–27): drawer mobile y menú flotante.
 * `label` = línea única (antes kicker); `keywords` incluye categorías para búsqueda.
 */
export const NAV_FULL: SiteNavFullLink[] = [
  { label: 'INICIO', id: 'hero', sectionNum: 1 },
  { label: 'OLD SCHOOL', id: 'concepto', sectionNum: 2 },
  { label: 'BARILOCHE', id: 'bariloche', sectionNum: 3 },
  { label: 'REGRESADOS', id: 'generaciones', sectionNum: 4 },
  { label: 'LA IDEA', id: 'sec-09', sectionNum: 5 },
  { label: 'TRANSPORTE', id: 'formato', sectionNum: 6 },
  { label: 'HOTEL', id: 'sec-12', sectionNum: 7 },
  { label: 'GASTRONOMIA', id: 'sec-13', sectionNum: 8 },
  { label: 'EXCURSIONES', id: 'sec-14', sectionNum: 9 },
  { label: 'NOCHES', id: 'sec-15', sectionNum: 10 },
  { label: 'MOMENTOS WOW', id: 'sec-16', sectionNum: 11 },
  { label: 'PREGUNTAS FRECUENTES', id: 'testimonios', sectionNum: 12 },
  { label: 'SOLICITAR REUNION', id: 'comunidad', sectionNum: 13 },
  { label: 'POSTULARME', id: 'postulacion', sectionNum: 14 },
];

/** Etiqueta del rótulo `NN / …` en página y en menús; una por sección. */
export function sectionNavLabel(sectionNum: number): string {
  const labels: Record<number, string> = {
    1: 'INICIO',
    2: 'OLD SCHOOL',
    3: 'OLD SCHOOL',
    4: 'OLD SCHOOL',
    5: 'REGRESADOS',
    6: 'LA IDEA',
    7: 'LA IDEA',
    8: 'TRANSPORTE',
    9: 'TRANSPORTE',
    10: 'HOTEL',
    11: 'GASTRONOMIA',
    12: 'EXCURSIONES',
    13: 'NOCHES',
    14: 'MOMENTOS WOW',
    15: 'MOMENTOS WOW',
    16: 'MOMENTOS WOW',
    17: 'POSTULARME',
    18: 'PREGUNTAS FRECUENTES',
    19: 'MUSEO',
    20: 'POSTULARME',
  };
  return labels[sectionNum] ?? 'SECCION';
}
