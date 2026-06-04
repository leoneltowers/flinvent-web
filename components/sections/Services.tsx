'use client';
import { motion } from 'framer-motion';
import TiltCard from '@/components/ui/TiltCard';
import SplitText from '@/components/ui/SplitText';

const services = [
  {
    num: '01',
    title: 'UX/UI Design',
    desc: 'Interfaces que no solo se ven bien: convierten. Research, wireframes, prototipos interactivos y handoff listo para desarrollo.',
    tags: ['Figma', 'Principle', 'Framer', 'Research', 'Prototyping'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Desarrollo Web',
    desc: 'Apps web rápidas, escalables y maintainables. TypeScript-first, testing incluido, arquitectura que dura.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Mobile Apps',
    desc: 'iOS y Android nativos o cross-platform. Performance de app nativa, velocidad de desarrollo cross-platform.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Agentes IA',
    desc: 'Automatizamos workflows complejos con LLMs. Agentes que piensan, razonan y actúan en tu nombre.',
    tags: ['OpenAI', 'Claude', 'LangChain', 'RAG', 'Vertex AI'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" />
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'SaaS a Medida',
    desc: 'Construimos tu producto SaaS de punta a punta. Multi-tenancy, billing, onboarding — todo incluido.',
    tags: ['SaaS', 'Multi-tenant', 'Stripe', 'Auth', 'Analytics'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Staff Augmentation',
    desc: 'Sumamos seniors a tu equipo cuando más los necesitás. Sin fricciones, sin curva de aprendizaje, desde el día uno.',
    tags: ['Senior Devs', 'React', 'Python', 'AWS', 'Remoto'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] text-cyan-400 mb-4"
          >
            02 — Servicios
          </motion.p>
          <h2 className="font-syne font-bold leading-tight mb-4" style={{ fontSize: 'clamp(40px,5vw,64px)' }}>
            <SplitText text="Todo lo que tu producto necesita." className="text-slate-100" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-dm text-lg text-slate-500"
          >
            De la idea al lanzamiento. Cada capa, cubierta.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full">
                <div className="bg-surface border border-white/[0.07] rounded-2xl p-7 h-full flex flex-col hover:border-cyan-500/25 hover:-translate-y-1 transition-all duration-350 group"
                  style={{ boxShadow: 'none' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,229,255,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-cyan-400">{s.icon}</span>
                    <span className="font-mono text-5xl font-bold text-white/[0.06] leading-none">{s.num}</span>
                  </div>

                  <h3 className="font-syne font-bold text-xl text-slate-100 mb-2">{s.title}</h3>
                  <p className="font-dm text-[15px] text-slate-500 leading-relaxed flex-1">{s.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 font-mono text-xs bg-white/5 text-slate-500 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
