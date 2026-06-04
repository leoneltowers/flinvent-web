'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'view' | 'text'>('default');
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot && ring) {
        dot.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
        ring.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    const onStateChange = (e: Event) => {
      const target = e.target as HTMLElement;
      const state = target.dataset.cursor as typeof cursorState || 'hover';
      setCursorState(e.type === 'mouseenter' ? state : 'default');
    };

    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onStateChange);
      el.addEventListener('mouseleave', onStateChange);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 z-[9998] pointer-events-none transition-transform duration-75"
        style={{ opacity: cursorState === 'text' ? 0 : 1 }}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9997] flex items-center justify-center transition-all duration-200 ${
          cursorState === 'hover'
            ? 'scale-[1.8] bg-cyan-400/8 border-cyan-400/70'
            : cursorState === 'view'
            ? 'scale-[2.5] border-cyan-400/70 bg-transparent'
            : cursorState === 'text'
            ? 'scale-[0.3] bg-white border-white'
            : 'border-cyan-400/50'
        }`}
      >
        {cursorState === 'view' && (
          <span className="font-mono text-[7px] text-cyan-400 whitespace-nowrap">VER →</span>
        )}
      </div>
    </>
  );
}
