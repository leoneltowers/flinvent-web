export default function MarqueeStrip() {
  const items = [
    'UX/UI Design', 'Desarrollo Web', 'Mobile Apps', 'Agentes IA',
    'SaaS a Medida', 'Staff Augmentation', 'ISO 9001', 'ISO 27001',
    '15 Años', '250+ Proyectos',
  ];
  const doubled = [...items, ...items];

  return (
    <div className="border-t border-white/[0.06] border-b overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 font-syne font-bold text-[13px] text-white/25 tracking-widest uppercase px-6">
            {item}
            <span className="text-white/15">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
