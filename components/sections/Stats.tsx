'use client';
import { useCountUp } from '@/hooks/useCountUp';

function StatItem({
  value,
  suffix = '',
  label,
  color,
  isISO,
}: {
  value: number;
  suffix?: string;
  label: string;
  color: 'cyan' | 'violet';
  isISO?: boolean;
}) {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });
  const colorClass = color === 'cyan' ? 'text-cyan-400' : 'text-violet-400';

  return (
    <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className={`font-syne font-bold ${colorClass} leading-none tabular-nums`}
        style={{ fontSize: 'clamp(48px,6vw,80px)' }}
      >
        {isISO ? 'ISO' : `${count}${suffix}`}
      </span>
      {isISO && (
        <span className={`font-syne font-bold text-2xl ${colorClass}`}>9001 & 27001</span>
      )}
      <span className="font-dm text-sm text-slate-500 uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#0A0B0E] border-t border-b border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          <StatItem value={15} suffix="+" label="Años de track record" color="cyan" />
          <StatItem value={250} suffix="+" label="Proyectos entregados" color="violet" />
          <StatItem value={98} suffix="%" label="Satisfacción de clientes" color="cyan" />
          <StatItem value={0} label="Certificados" color="violet" isISO />

          {/* Vertical dividers */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="hidden md:block absolute top-0 bottom-0 w-px bg-white/[0.05]"
              style={{ left: `${i * 25}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
