import React, { forwardRef, useMemo, useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export const ImageWithFallback = forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  function ImageWithFallback(props, ref) {
    const [didError, setDidError] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [spot, setSpot] = useState({ x: '50%', y: '50%' });

    const { src, alt, style, className, ...rest } = props;

    const useChromaReveal = useMemo(
      () => (className ?? '').split(/\s+/).includes('grayscale'),
      [className],
    );

    const cleanClassName = useMemo(
      () => (className ?? '').replace(/\bgrayscale\b/g, '').replace(/\s+/g, ' ').trim(),
      [className],
    );

    const handleError = () => {
      setDidError(true);
    };

    const handleMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = `${Math.round(e.clientX - rect.left)}px`;
      const y = `${Math.round(e.clientY - rect.top)}px`;
      setSpot({ x, y });
    };

    if (didError) {
      return (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${cleanClassName}`}
          style={style}
          role="img"
          aria-label={alt}
        >
          <img src={ERROR_IMG_SRC} alt="" className="h-14 w-14 opacity-40" {...rest} data-original-url={src} />
        </div>
      );
    }

    if (!useChromaReveal) {
      return <img ref={ref} src={src} alt={alt} className={cleanClassName} style={style} {...rest} onError={handleError} />;
    }

    const mask = `radial-gradient(circle 150px at ${spot.x} ${spot.y}, transparent 0%, transparent 22%, rgba(0,0,0,0.18) 48%, rgba(0,0,0,0.42) 72%, rgba(0,0,0,0.7) 100%)`;

    return (
      <div
        className={`relative h-full w-full overflow-hidden ${cleanClassName}`}
        onPointerEnter={() => setIsHover(true)}
        onPointerMove={handleMove}
        onPointerLeave={() => setIsHover(false)}
        style={style}
      >
        <img
          ref={ref}
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          {...rest}
          onError={handleError}
        />
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundImage: `url("${src}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(1) brightness(0.78)',
            maskImage: isHover ? mask : 'none',
            WebkitMaskImage: isHover ? mask : 'none',
          }}
          aria-hidden
        />
      </div>
    );
  },
);
