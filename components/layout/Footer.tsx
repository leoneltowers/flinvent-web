'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const marqueeText = [
  'Construimos el futuro digital', 'AI-Native Studio', 'Buenos Aires, ARG',
  '15 Años', '250+ Proyectos', 'ISO 9001 & 27001',
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [30, -10]);

  const doubled = [...marqueeText, ...marqueeText];

  const socials = [
    { icon: GithubIcon, href: 'https://github.com/flinvent', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://linkedin.com/company/flinvent', label: 'LinkedIn' },
    { icon: InstagramIcon, href: 'https://instagram.com/flinvent', label: 'Instagram' },
    { icon: TwitterIcon, href: 'https://twitter.com/flinvent', label: 'Twitter' },
  ];

  return (
    <footer ref={ref} className="border-t border-white/[0.05] overflow-hidden">
      {/* Marquee top */}
      <div className="border-b border-white/[0.06] overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 font-syne font-bold text-[13px] text-white/20 tracking-widest uppercase px-6">
              {item}
              <span className="text-white/10">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Wordmark parallax */}
      <div className="relative overflow-hidden py-8 select-none pointer-events-none">
        <motion.p
          style={{ y: wordmarkY, fontSize: 'clamp(100px,15vw,200px)' }}
          className="font-syne font-bold text-center tracking-[0.1em] text-white/[0.03]"
          aria-hidden="true"
        >
          FLINVENT
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative w-6 h-6">
                <Image src="/logo-white.png" alt="Flinvent" fill className="object-contain" />
              </div>
              <span className="font-syne font-bold text-sm tracking-wider text-white">FLINVENT</span>
            </div>
            <p className="font-dm text-sm text-slate-600 mb-4">Studio boutique AI-native</p>
            <p className="font-dm text-xs text-slate-700">© 2025 Flinvent · Todos los derechos reservados</p>
          </div>

          {/* Servicios */}
          <div>
            <p className="font-mono text-[11px] text-slate-600 uppercase tracking-widest mb-4">Servicios</p>
            <ul className="space-y-2.5">
              {['UX/UI Design', 'Desarrollo Web', 'Mobile Apps', 'Agentes IA', 'SaaS a Medida', 'Staff Aug'].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="font-dm text-sm text-slate-500 hover:text-white transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="font-mono text-[11px] text-slate-600 uppercase tracking-widest mb-4">Empresa</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Trabajo', href: '#trabajo' },
                { label: 'Contacto', href: '#contacto' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="font-dm text-sm text-slate-500 hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Redes */}
          <div>
            <p className="font-mono text-[11px] text-slate-600 uppercase tracking-widest mb-4">Legal</p>
            <ul className="space-y-2.5 mb-6">
              {['Privacidad', 'Términos'].map((l) => (
                <li key={l}>
                  <a href="#" className="font-dm text-sm text-slate-500 hover:text-white transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-cursor="hover"
                  className="text-slate-600 hover:text-white transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] py-6 flex items-center justify-between">
          <span className="font-dm text-xs text-slate-700">Built with care · Buenos Aires, ARG</span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-600">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-slow" />
            Sistema online
          </span>
        </div>
      </div>
    </footer>
  );
}
