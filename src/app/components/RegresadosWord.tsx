import regresadsColor from '@/assets/01logos/RegresadsColor.png';

interface RegresadosWordProps {
  variant?: 'image' | 'split';
  className?: string;
}

export function RegresadosWord({ variant = 'image', className = '' }: RegresadosWordProps) {
  if (variant === 'split') {
    return (
      <span className={`inline-block font-black uppercase leading-none tracking-tight ${className}`}>
        REGRESADOS
      </span>
    );
  }

  return (
    <img
      src={regresadsColor}
      alt="Regresados"
      className={`inline-block h-[0.9em] w-auto max-w-none align-[-0.06em] ${className}`}
    />
  );
}
