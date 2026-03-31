/**
 * Rótulo de sección: índice + etiqueta única (`sectionNavLabel` / NAV_FULL). Va arriba del H2.
 */
interface SectionEyebrowProps {
  /** Orden en la página (01 = hero, 02 = primera sección debajo, …). */
  index: number;
  /** Misma cadena que en el menú móvil (p. ej. `sectionNavLabel(index)`). */
  label: string;
  /** `light` sobre fondos navy / cyan / naranja sólidos. */
  tone?: 'light' | 'dark';
  className?: string;
}

export function SectionEyebrow({
  index,
  label,
  tone = 'dark',
  className = '',
}: SectionEyebrowProps) {
  const num = String(index).padStart(2, '0');
  const toneCls = tone === 'light' ? 'text-white/42' : 'text-black/38';

  return (
    <p
      className={`os-section-eyebrow mb-2 max-w-full break-words font-sans text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.16em] sm:text-[0.65rem] ${toneCls} ${className}`}
    >
      <span className="tabular-nums">{num}</span>
      {' / '}
      {label}
    </p>
  );
}
