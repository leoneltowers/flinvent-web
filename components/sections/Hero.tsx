'use client';
import { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';

const NeuralCanvas = lazy(() => import('@/components/three/NeuralCanvas'));

export default function Hero() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowEnd = navigator.hardwareConcurrency < 4;
    if (!prefersReduced && !isLowEnd && window.innerWidth >= 768) {
      setShowCanvas(true);
    }
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Transition to embedded layout right when the spin starts
    const timer = setTimeout(() => {
      setIsFullScreen(false);
    }, 3400);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 md:gap-8 items-center py-20 md:py-0">
        {/* Left — text */}
        <div className="flex flex-col gap-6 relative z-10 pointer-events-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-slow" />
            <span className="font-mono text-[11px] text-slate-400">AI-Native Studio · Buenos Aires, ARG</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-syne font-extrabold leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}>
            <span className="block overflow-hidden pb-[0.15em]">
              <SplitText text="Construimos" className="text-slate-100" delay={0.15} />
            </span>
            <span className="block overflow-hidden pb-[0.15em]">
              <SplitText text="el futuro" className="text-slate-100" delay={0.22} />
            </span>
            <span className="block overflow-hidden pb-[0.15em]">
              <SplitText text="digital." className="gradient-text" delay={0.29} />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-dm text-lg text-slate-400 max-w-lg leading-relaxed"
          >
            Studio boutique AI-native. Diseñamos y desarrollamos productos digitales
            que escalan. 15 años de track record, 250+ proyectos entregados.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton
              href="#trabajo"
              className="inline-flex items-center px-7 py-3.5 rounded-xl bg-cyan-400 text-[#070709] font-dm font-semibold hover:bg-cyan-300 transition-all duration-250"
            >
              Ver nuestro trabajo
            </MagneticButton>
            <MagneticButton
              href="#contacto"
              className="inline-flex items-center px-7 py-3.5 rounded-xl bg-transparent border border-white/15 text-slate-300 font-dm hover:bg-white/5 hover:border-white/25 hover:text-white transition-all duration-250"
            >
              Hablar con nosotros →
            </MagneticButton>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-8 border-t border-white/5 pt-6 mt-2"
          >
            {[
              { num: '15+', label: 'Años' },
              { num: '250+', label: 'Proyectos' },
              { num: 'ISO 9001', label: 'Certificado' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-syne font-bold text-[28px] text-white">{num}</span>
                <span className="font-dm text-[11px] text-slate-500 uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — canvas */}
        <div className="hidden md:block w-full h-[600px] relative z-0">
          {showCanvas ? (
            <motion.div
              layout
              className={isFullScreen ? "fixed inset-0 pointer-events-none opacity-80" : "absolute inset-0 pointer-events-none opacity-100"}
              transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
            >
              <Suspense fallback={<HeroGradientFallback />}>
                <NeuralCanvas />
              </Suspense>
            </motion.div>
          ) : (
            <HeroGradientFallback />
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 200 ? 0 : 1 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" />
        </motion.div>
        <span className="font-mono text-[10px] text-slate-600 tracking-widest uppercase rotate-90 mt-2">SCROLL</span>
      </motion.div>
    </section>
  );
}

function HeroGradientFallback() {
  return (
    <motion.div
      className="w-full h-full rounded-2xl"
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.08) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)',
      }}
    />
  );
}
