'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import MagneticButton from '@/components/ui/MagneticButton';

const links = [
  { label: '01 Servicios', href: '#servicios' },
  { label: '02 Trabajo', href: '#trabajo' },
  { label: '03 Nosotros', href: '#nosotros' },
  { label: '04 Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(7,7,9,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" data-cursor="hover">
            <div className="relative w-7 h-7">
              <Image src="/logo-white.png" alt="Flinvent" fill className="object-contain" />
            </div>
            <span className="font-syne font-bold text-[15px] tracking-wider text-white group-hover:opacity-80 transition-opacity duration-200">
              FLINVENT
            </span>
          </a>

          {/* Nav links desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                data-cursor="hover"
                className="font-dm text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <MagneticButton
            href="#contacto"
            className="hidden md:flex items-center px-5 py-2 rounded-full border border-cyan-400/40 text-cyan-400 font-dm text-sm hover:bg-cyan-400 hover:text-[#070709] hover:font-medium transition-all duration-250"
          >
            Iniciar proyecto →
          </MagneticButton>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen((o) => !o)}
            data-cursor="hover"
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white"
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#070709]/98 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-10"
          >
            {links.map(({ label, href }, i) => (
              <motion.button
                key={href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => scrollTo(href)}
                className="font-syne font-bold text-5xl text-white hover:text-cyan-400 transition-colors duration-200"
              >
                {label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <MagneticButton
                href="#contacto"
                className="px-6 py-3 rounded-full border border-cyan-400/40 text-cyan-400 font-dm text-base"
                onClick={() => setOpen(false)}
              >
                Iniciar proyecto →
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
