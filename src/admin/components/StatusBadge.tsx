import type { StatusConfig } from '../types';

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface StatusBadgeProps {
  status: string;
  config: StatusConfig;
}

export function StatusBadge({ config }: StatusBadgeProps) {
  const { label, color } = config;
  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
      style={{
        backgroundColor: hexToRgba(color, 0.12),
        borderColor: hexToRgba(color, 0.3),
        color,
      }}
    >
      {label}
    </span>
  );
}

/** Dot indicator (for table rows) */
export function StatusDot({ color }: { color: string }) {
  return (
    <span
      className="inline-block h-2 w-2 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}
