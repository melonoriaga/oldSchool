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
  { label: 'CONCEPTO', id: 'concepto' },
  { label: 'EXPERIENCIA', id: 'producto' },
  { label: 'BARILOCHE', id: 'bariloche' },
  { label: 'COMUNIDAD', id: 'comunidad' },
  { label: 'FAQ', id: 'faq' },
  { label: 'MUSEO', id: 'museo' },
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
  { label: 'INICIO', id: 'hero', sectionNum: 1, keywords: 'inicio home' },
  {
    label: 'CUERPO + INSTANTE',
    id: 'concepto',
    sectionNum: 2,
    keywords: 'concepto momento hubo',
  },
  {
    label: 'RETRO + PRESENCIA',
    id: 'sec-03',
    sectionNum: 3,
    keywords: 'concepto nostalgia reconexion retro',
  },
  {
    label: 'REGRESO + ANTES / DESPUÉS',
    id: 'sec-04',
    sectionNum: 4,
    keywords: 'concepto volves distinto',
  },
  {
    label: 'DESTINO + LATIDO',
    id: 'sec-05',
    sectionNum: 5,
    keywords: 'concepto egresados extranas',
  },
  { label: 'LUGAR + SÍMBOLO', id: 'bariloche', sectionNum: 6, keywords: 'bariloche simbolo' },
  {
    label: 'GENERACIONES',
    id: 'generaciones',
    sectionNum: 7,
    keywords: 'generaciones regresados cada generacion',
  },
  {
    label: 'IMPACTO + POSTVIAJE',
    id: 'producto',
    sectionNum: 8,
    keywords: 'experiencia viaje no termina',
  },
  {
    label: 'ORIGEN + PROPÓSITO',
    id: 'sec-09',
    sectionNum: 9,
    keywords: 'experiencia idea old school nace',
  },
  {
    label: 'FORMATO + EXCLUSIVO',
    id: 'formato',
    sectionNum: 10,
    keywords: 'formato cupos premium exclusivo',
  },
  {
    label: 'MEMORIA + OFICIO',
    id: 'sec-11',
    sectionNum: 11,
    keywords: 'experiencia disenamos pelicula memoria',
  },
  { label: 'RUTA + CÁPSULA', id: 'sec-12', sectionNum: 12, keywords: 'bariloche avion capsula' },
  {
    label: 'LOGÍSTICA SILENCIOSA',
    id: 'sec-13',
    sectionNum: 13,
    keywords: 'bariloche sistema invisible logistica',
  },
  { label: 'BASE + CORAZÓN', id: 'sec-14', sectionNum: 14, keywords: 'bariloche empieza' },
  { label: 'MESA + GRUPO', id: 'sec-15', sectionNum: 15, keywords: 'bariloche construye mesa' },
  {
    label: 'TERRITORIO + DÍAS',
    id: 'sec-16',
    sectionNum: 16,
    keywords: 'bariloche territorio dias',
  },
  { label: 'NOCHE + RITMO', id: 'sec-17', sectionNum: 17, keywords: 'bariloche musica noche' },
  {
    label: 'IMPACTO + MEMORIA',
    id: 'sec-18',
    sectionNum: 18,
    keywords: 'bariloche recuerdos impacto',
  },
  {
    label: 'CUERPO + PRESENCIA',
    id: 'sec-19',
    sectionNum: 19,
    keywords: 'experiencia visualizacion cuerpo',
  },
  {
    label: 'TRAYECTORIA + MARCA',
    id: 'sec-20',
    sectionNum: 20,
    keywords: 'experiencia confianza marca',
  },
  {
    label: 'INTENCIÓN + ENCUENTRO',
    id: 'comunidad',
    sectionNum: 21,
    keywords: 'comunidad casualidad llegaste aca',
  },
  {
    label: 'REGRESADOS DICEN',
    id: 'testimonios',
    sectionNum: 22,
    keywords: 'testimonios voces historias',
  },
  {
    label: 'PREGUNTAS FRECUENTES',
    id: 'faq',
    sectionNum: 23,
    keywords: 'faq dudas preguntas',
  },
  { label: 'PRECIO + SENTIDO', id: 'precio', sectionNum: 24, keywords: 'precio valor sentido' },
  {
    label: 'PRIMERA EDICIÓN',
    id: 'sec-25',
    sectionNum: 25,
    keywords: 'precio cupos limitados primera edicion',
  },
  {
    label: 'FOTOS + RECUERDOS',
    id: 'museo',
    sectionNum: 26,
    keywords: 'museo historias objetos fotos',
  },
  {
    label: 'POSTULÁ + CUPOS',
    id: 'postulacion',
    sectionNum: 27,
    keywords: 'postulacion inscripcion cupos',
  },
];

/** Etiqueta del rótulo `NN / …` en página y en menús; una por sección. */
export function sectionNavLabel(sectionNum: number): string {
  return NAV_FULL.find((l) => l.sectionNum === sectionNum)?.label ?? '';
}
