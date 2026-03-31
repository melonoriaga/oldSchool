import { useEffect, useMemo, useState } from 'react';
import { NAV_FULL, filterNavFull } from '../siteNav';

type Variant = 'header' | 'fab';

export function MobileNavScrollInner({
  open,
  variant,
  onSelectSection,
  searchInputId,
}: {
  open: boolean;
  variant: Variant;
  onSelectSection: (id: string) => void;
  searchInputId: string;
}) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const filtered = useMemo(() => filterNavFull(NAV_FULL, query), [query]);

  const px = variant === 'header' ? 'px-6' : 'px-5 sm:px-6';
  const rowClass =
    variant === 'header'
      ? 'min-h-12 py-3'
      : 'min-h-11 py-2.5 text-sm';

  return (
    <>
      <div className="border-b-2 border-black bg-[var(--os-paper)]">
        <label htmlFor={searchInputId} className="sr-only">
          Buscar sección
        </label>
        <input
          id={searchInputId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="BUSCAR…"
          autoComplete="off"
          className={`w-full border-0 bg-transparent ${px} py-3 font-black uppercase tracking-wide outline-none placeholder:text-black/35 focus:bg-black/[0.04]`}
        />
      </div>
      <div className="flex flex-col">
        {filtered.length === 0 ? (
          <p className={`${px} py-4 text-sm font-bold text-black/45`}>Sin coincidencias.</p>
        ) : (
          filtered.map((link, index) => (
            <button
              key={link.sectionNum}
              type="button"
              onClick={() => onSelectSection(link.id)}
              aria-label={`Ir a sección ${link.sectionNum}, ${link.label}`}
              className={`flex w-full cursor-pointer flex-wrap items-baseline gap-x-1 gap-y-0.5 text-left font-bold transition-colors hover:bg-black/[0.06] ${rowClass} ${px} ${
                index < filtered.length - 1 ? 'border-b-2 border-black' : ''
              }`}
            >
              <span className="shrink-0 font-black tabular-nums text-black/38">
                {String(link.sectionNum).padStart(2, '0')}
              </span>
              <span className="shrink-0 text-black/28" aria-hidden>
                /
              </span>
              <span className="min-w-0 flex-1">{link.label}</span>
            </button>
          ))
        )}
      </div>
    </>
  );
}
