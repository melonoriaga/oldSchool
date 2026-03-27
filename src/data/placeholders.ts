/** Placeholder photography — reemplazar por assets finales */
export const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80',
  'https://images.unsplash.com/photo-1483922041117-385038247885?w=800&q=80',
  'https://images.unsplash.com/photo-1520637836862-4d197d17c13a?w=800&q=80',
  'https://images.unsplash.com/photo-1470071459603-1151156874f2?w=800&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
  'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80',
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
  'https://images.unsplash.com/photo-1498550744921-75a798b018e7?w=800&q=80',
  'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80',
] as const;

export function placeholderByIndex(i: number): string {
  return PLACEHOLDER_IMAGES[i % PLACEHOLDER_IMAGES.length]!;
}
