interface ReAccentWordProps {
  word: string;
  className?: string;
}

export function ReAccentWord({ word, className = '' }: ReAccentWordProps) {
  return <span className={className}>{word}</span>;
}
