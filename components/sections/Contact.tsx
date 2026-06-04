'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import SplitText from '@/components/ui/SplitText';

const projectTypes = ['Web App', 'Mobile', 'IA / Agentes', 'SaaS', 'UX/UI', 'Consultoría'];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');

  const toggle = (t: string) =>
    setSelected((s) => s.includes(t) ? s.filter((x) => x !== t) : [...s, t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1400);
  };

  const socials = [
    { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/flinvent' },
    { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/company/flinvent' },
    { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/flinvent' },
    { icon: TwitterIcon, label: 'Twitter / X', href: 'https://twitter.com/flinvent' },
  ];

  return (
    <section id="contacto" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Mega headline */}
        <div className="mb-16">
          <h2 className="font-syne font-bold leading-tight" style={{ fontSize: 'clamp(40px,5vw,72px)' }}>
            <span className="block text-slate-100">
              <SplitText text="¿Listo para construir" delay={0.05} />
            </span>
            <span className="block">
              <SplitText text="algo extraordinario?" className="gradient-text" delay={0.2} />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Floating label fields */}
            {[
              { id: 'name', label: 'Nombre', type: 'text', required: true },
              { id: 'email', label: 'Email', type: 'email', required: true },
              { id: 'company', label: 'Empresa', type: 'text', required: false },
              { id: 'budget', label: 'Presupuesto estimado', type: 'text', required: false },
            ].map(({ id, label, type, required }) => (
              <div key={id} className="relative group">
                <input
                  id={id}
                  name={id}
                  type={type}
                  required={required}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/15 pt-6 pb-2 text-slate-100 font-dm text-base outline-none focus:border-cyan-400 transition-colors duration-200"
                />
                <label
                  htmlFor={id}
                  className="absolute top-2 left-0 font-dm text-slate-500 text-sm peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-cyan-400 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-[11px] transition-all duration-200"
                >
                  {label}
                </label>
              </div>
            ))}

            {/* Textarea */}
            <div className="relative group">
              <textarea
                id="message"
                name="message"
                placeholder=" "
                required
                rows={4}
                className="peer w-full bg-transparent border-b border-white/15 pt-6 pb-2 text-slate-100 font-dm text-base outline-none resize-none focus:border-cyan-400 transition-colors duration-200"
              />
              <label
                htmlFor="message"
                className="absolute top-2 left-0 font-dm text-slate-500 text-sm peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-cyan-400 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-[11px] transition-all duration-200"
              >
                ¿Qué necesitás construir?
              </label>
            </div>

            {/* Project type chips */}
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  data-cursor="hover"
                  onClick={() => toggle(t)}
                  className={`px-3 py-1.5 rounded-full border font-dm text-sm transition-all duration-200 ${
                    selected.includes(t)
                      ? 'bg-cyan-400/10 border-cyan-400/40 text-cyan-400'
                      : 'bg-transparent border-white/15 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              data-cursor="hover"
              className={`relative w-full py-4 rounded-xl font-dm font-semibold text-base overflow-hidden transition-all duration-250 ${
                status === 'success'
                  ? 'bg-emerald-500 text-white'
                  : status === 'error'
                  ? 'bg-red-500/20 border border-red-500 text-red-400'
                  : 'bg-cyan-400 text-[#070709] hover:bg-cyan-300'
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'success' && <CheckCircle className="w-4 h-4" />}
                {status === 'idle' && 'Enviar mensaje →'}
                {status === 'loading' && 'Enviando...'}
                {status === 'success' && '¡Mensaje recibido! Te contactamos pronto.'}
                {status === 'error' && 'Error. Intentá de nuevo.'}
              </span>
            </button>
          </form>

          {/* Right info */}
          <div className="flex flex-col gap-8">
            {/* Email */}
            <div>
              <p className="font-dm text-sm text-slate-500 mb-2 uppercase tracking-widest">Contacto directo</p>
              <a
                href="mailto:hola@flinvent.net"
                className="font-fraunces italic text-[28px] text-slate-100 hover:text-cyan-400 transition-colors duration-200"
                data-cursor="hover"
              >
                hola@flinvent.net
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="flex items-center gap-3 text-slate-500 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  <Icon />
                  <span className="font-dm text-sm">{label}</span>
                </a>
              ))}
            </div>

            {/* Details */}
            <div className="space-y-2">
              <p className="font-dm text-sm text-slate-500">📍 Buenos Aires, Argentina 🇦🇷</p>
              <p className="font-dm text-sm text-slate-500">🕐 Lun–Vie 9:00–18:00 ART</p>
              <p className="font-dm text-sm text-slate-500">⚡ Respondemos en menos de 24hs</p>
            </div>

            {/* Status badge */}
            <motion.div
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 w-fit"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-slow" />
              <span className="font-mono text-sm text-emerald-400">Aceptando proyectos para Q3 2025</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
