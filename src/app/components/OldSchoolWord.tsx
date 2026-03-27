interface OldSchoolWordProps {
  className?: string;
  registered?: boolean;
  uppercase?: boolean;
}

export function OldSchoolWord({
  className = '',
  registered = true,
  uppercase = false,
}: OldSchoolWordProps) {
  const label = uppercase ? 'OLD SCHOOL' : 'Old School';

  return (
    <span className={`os-title-capra text-[var(--os-navy)] whitespace-nowrap ${className}`}>
      {label}
      {registered ? '®' : ''}
    </span>
  );
}
