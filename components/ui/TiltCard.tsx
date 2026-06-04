'use client';
import { useRef, ReactNode, useState } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, show: false });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.x + rect.width / 2;
    const cy = rect.y + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -8;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 8;
    setTransform(`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`);
    setSpotlight({
      x: e.clientX - rect.x,
      y: e.clientY - rect.y,
      show: true,
    });
  };

  const onMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    setSpotlight((s) => ({ ...s, show: false }));
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform,
        transition: transform === '' ? 'none' : transform.includes('0deg') ? 'transform 0.5s ease' : 'transform 0.1s ease',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {spotlight.show && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(300px circle at ${spotlight.x}px ${spotlight.y}px, rgba(0,229,255,0.04), transparent)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
