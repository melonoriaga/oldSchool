import type { CSSProperties } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
};

/** Editorial grid image — b&w, cubre celda */
export function OsFigure({ src, alt, className = '', style }: Props) {
  return (
    <figure className={`m-0 h-full min-h-[12rem] w-full overflow-hidden border-black ${className}`}>
      <ImageWithFallback
        src={src}
        alt={alt}
        className="h-full w-full object-cover grayscale"
        loading="lazy"
        style={style}
      />
    </figure>
  );
}
