interface ReAccentWordProps {
  word: string;
  tone?: 'orange' | 'cyan';
  className?: string;
}

export function ReAccentWord({ word, tone = 'orange', className = '' }: ReAccentWordProps) {
  const hasRePrefix = /^re/i.test(word);
  const toneClass = tone === 'cyan' ? 'text-[var(--os-cyan)]' : 'text-[var(--os-orange)]';

  if (!hasRePrefix) {
    return <span className={className}>{word}</span>;
  }

  return (
    <span className={className}>
      <span className={toneClass}>{word.slice(0, 2)}</span>
      {word.slice(2)}
    </span>
  );
}
