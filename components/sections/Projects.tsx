'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import SplitText from '@/components/ui/SplitText';

const projects = [
  {
    index: '01 / 04',
    title: 'FinTrack Pro',
    category: 'SaaS Fintech',
    year: '2024',
    desc: 'Dashboard analytics + gestión de portafolios para fintech regulado.',
    stack: ['Next.js', 'PostgreSQL', 'Stripe'],
    accent: '#00E5FF',
    pattern: 'grid',
    url: '#',
  },
  {
    index: '02 / 04',
    title: 'MediConnect',
    category: 'App Mobile',
    year: '2024',
    desc: 'Telemedicina B2C con videollamadas y gestión de turnos en tiempo real.',
    stack: ['React Native', 'Node.js', 'WebRTC'],
    accent: '#8B5CF6',
    pattern: 'circles',
    url: '#',
  },
  {
    index: '03 / 04',
    title: 'LegalAI',
    category: 'Agente IA',
    year: '2023',
    desc: 'Agente LLM para análisis de contratos y detección de riesgos legales.',
    stack: ['Claude API', 'LangChain', 'Vector DB'],
    accent: '#FF6B35',
    pattern: 'mesh',
    url: '#',
  },
  {
    index: '04 / 04',
    title: 'ShipFast',
    category: 'SaaS',
    year: '2023',
    desc: 'Boilerplate SaaS multi-tenant con todo configurado desde el día uno.',
    stack: ['Next.js', 'Prisma', 'Resend'],
    accent: '#64748B',
    pattern: 'diagonal',
    url: '#',
  },
];

function PatternBG({ type, accent }: { type: string; accent: string }) {
  if (type === 'grid') return (
    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke={accent} strokeWidth="0.5" />
      </pattern></defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
  if (type === 'circles') return (
    <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
      {[80, 160, 240, 320].map((r) => (
        <circle key={r} cx="50%" cy="50%" r={r} fill="none" stroke={accent} strokeWidth="0.8" />
      ))}
    </svg>
  );
  if (type === 'mesh') return (
    <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 6 }, (_, i) =>
        Array.from({ length: 6 }, (_, j) => (
          <circle key={`${i}-${j}`} cx={`${i * 20 + 10}%`} cy={`${j * 20 + 10}%`} r="2" fill={accent} />
        ))
      )}
    </svg>
  );
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1={`${i * 9}%`} y1="0%" x2={`${i * 9 + 50}%`} y2="100%" stroke={accent} strokeWidth="0.8" />
      ))}
    </svg>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    if (window.innerWidth < 768) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="trabajo" className="py-24">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] text-cyan-400 mb-4"
        >
          03 — Trabajo
        </motion.p>
        <h2 className="font-syne font-bold leading-tight mb-4" style={{ fontSize: 'clamp(40px,5vw,64px)' }}>
          <SplitText text="Proyectos que importan." className="text-slate-100" />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-dm text-lg text-slate-500"
        >
          Cada proyecto, una solución real a un problema real.
        </motion.p>
      </div>

      {/* Desktop: GSAP pinned horizontal scroll */}
      {!isMobile ? (
        <div ref={containerRef} className="overflow-hidden">
          <div ref={trackRef} className="flex items-center pl-[10vw] gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.index} project={p} />
            ))}
            {/* End card */}
            <div className="flex-shrink-0 w-[300px] h-[480px] rounded-2xl border border-white/[0.05] border-dashed flex items-center justify-center mr-[10vw]">
              <div className="text-center">
                <p className="font-dm text-slate-600 text-sm mb-2">Más proyectos en camino</p>
                <span className="text-white/20 text-2xl">→</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-6 flex flex-col gap-6">
          {projects.map((p) => <ProjectCard key={p.index} project={p} />)}
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project: p }: { project: typeof projects[0] }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="view"
      className="flex-shrink-0 w-[380px] md:w-[450px] h-[480px] rounded-2xl border border-white/[0.07] relative overflow-hidden group block"
      style={{ background: '#0F1014' }}
    >
      {/* Pattern BG */}
      <PatternBG type={p.pattern} accent={p.accent} />

      {/* Hover border */}
      <div
        className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderColor: `${p.accent}40` }}
      />

      {/* Corner brackets on hover */}
      {[
        'top-3 left-3 border-t border-l',
        'top-3 right-3 border-t border-r',
        'bottom-3 left-3 border-b border-l',
        'bottom-3 right-3 border-b border-r',
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute w-4 h-4 ${cls} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{ borderColor: p.accent }}
        />
      ))}

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-7"
        style={{ background: 'linear-gradient(to top, #070709 0%, rgba(7,7,9,0.9) 50%, transparent 100%)' }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-[11px] text-cyan-400/70">{p.index}</span>
          <span className="font-mono text-[11px] text-slate-600">{p.year} · {p.category}</span>
        </div>
        <h3 className="font-fraunces italic font-bold text-3xl text-slate-100 mt-2">{p.title}</h3>
        <p className="font-dm text-sm text-slate-500 mt-1 line-clamp-2">{p.desc}</p>
        <div className="flex items-end justify-between mt-4">
          <div className="flex gap-2 flex-wrap">
            {p.stack.map((t) => (
              <span key={t} className="font-mono text-xs bg-white/[0.08] text-slate-400 px-2 py-0.5 rounded">{t}</span>
            ))}
          </div>
          <span
            className="font-dm text-sm group-hover:translate-x-1 transition-transform duration-200 inline-block"
            style={{ color: p.accent }}
          >
            Live →
          </span>
        </div>
      </div>
    </a>
  );
}
