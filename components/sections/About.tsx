'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';

const differentiators = [
  { title: 'AI-Native desde el día uno', desc: 'No como feature, como mentalidad de trabajo' },
  { title: 'Boutique por diseño — máxima atención', desc: '3 proyectos simultáneos máximo' },
  { title: 'ISO 9001 & 27001 certificados', desc: 'Calidad y seguridad auditadas externamente' },
];

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="nosotros" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] text-cyan-400 mb-4"
          >
            05 — Nosotros
          </motion.p>

          <h2 className="font-syne font-bold leading-tight mb-8" style={{ fontSize: 'clamp(40px,5vw,64px)' }}>
            <span className="text-slate-100 block">
              <SplitText text="Un studio," delay={0.05} />
            </span>
            <span className="block">
              <SplitText
                text="no una fábrica."
                className="font-fraunces italic text-cyan-400"
                delay={0.2}
              />
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5 mb-10"
          >
            <p className="font-dm text-base text-slate-400 leading-relaxed">
              Somos un equipo pequeño y deliberadamente así. En Flinvent creemos que el mejor
              software lo hace gente que entiende profundamente el problema — no equipos de cien
              personas donde nadie conoce el producto entero.
            </p>
            <p className="font-dm text-base text-slate-400 leading-relaxed">
              Trabajamos con un máximo de 3 proyectos simultáneos. Cuando entramos a un proyecto,
              realmente entramos. AI-native desde el primer día: no como buzzword, sino como parte
              de cómo pensamos, diseñamos y construimos.
            </p>
          </motion.div>

          {/* Differentiators */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 mb-10"
          >
            {differentiators.map(({ title, desc }) => (
              <li key={title} className="flex gap-3">
                <span className="text-cyan-400 mt-0.5 flex-shrink-0">✦</span>
                <div>
                  <span className="font-dm font-medium text-slate-200">{title}</span>
                  <span className="font-dm text-sm text-slate-500 block">{desc}</span>
                </div>
              </li>
            ))}
          </motion.ul>

          <MagneticButton
            href="#contacto"
            className="inline-flex items-center px-7 py-3.5 rounded-xl bg-transparent border border-white/15 text-slate-300 font-dm hover:bg-white/5 hover:border-white/25 hover:text-white transition-all duration-250"
          >
            Iniciá tu proyecto →
          </MagneticButton>
        </div>

        {/* Right — card */}
        <motion.div ref={cardRef} style={{ y }}>
          <div className="bg-surface border border-white/[0.07] rounded-2xl p-8 flex flex-col justify-between h-[480px] relative overflow-hidden">
            {/* Top */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">FLINVENT STUDIO</span>
              <span className="flex items-center gap-1.5 font-dm text-[12px] text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-slow" />
                Aceptando proyectos
              </span>
            </div>

            {/* Center — monogram */}
            <div className="flex flex-col items-center justify-center flex-1 py-8">
              <div className="flex items-end leading-none select-none">
                <span className="font-syne font-bold text-[120px] text-slate-100 leading-none">F</span>
                <span className="font-fraunces italic font-bold text-[120px] text-cyan-400 leading-none -ml-4">L</span>
              </div>
              <div className="w-full h-px bg-white/[0.07] my-4" />
              <span className="font-dm text-sm text-slate-500">Buenos Aires · Argentina</span>
            </div>

            {/* Bottom */}
            <div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { v: '15 años', l: 'Experiencia' },
                  { v: '250+', l: 'Proyectos' },
                  { v: 'ISO 9001', l: 'Calidad' },
                  { v: 'ISO 27001', l: 'Seguridad' },
                ].map(({ v, l }) => (
                  <div key={v} className="bg-white/[0.03] rounded-lg px-3 py-2">
                    <div className="font-syne font-bold text-sm text-slate-200">{v}</div>
                    <div className="font-mono text-[10px] text-slate-600">{l}</div>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-full">
                <span className="font-dm text-xs text-slate-400">Worldwide · Remote 🌍</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
