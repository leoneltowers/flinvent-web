'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SplitText from '@/components/ui/SplitText';

const categories = {
  Frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Vue.js', icon: '💚' },
  ],
  Backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Go', icon: '🔵' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' },
    { name: 'MongoDB', icon: '🍃' },
  ],
  Mobile: [
    { name: 'React Native', icon: '📱' },
    { name: 'Flutter', icon: '💙' },
    { name: 'Swift', icon: '🍎' },
    { name: 'Kotlin', icon: '🟣' },
    { name: 'Expo', icon: '📦' },
  ],
  'IA / ML': [
    { name: 'OpenAI', icon: '🤖' },
    { name: 'Claude', icon: '🧠' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'Vertex AI', icon: '☁️' },
    { name: 'HuggingFace', icon: '🤗' },
  ],
  Cloud: [
    { name: 'AWS', icon: '☁️' },
    { name: 'GCP', icon: '🌐' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'Terraform', icon: '🏗️' },
  ],
  Design: [
    { name: 'Figma', icon: '🎭' },
    { name: 'Principle', icon: '🎬' },
    { name: 'Framer', icon: '🖼️' },
    { name: 'Adobe Suite', icon: '🎨' },
  ],
} as const;

type Category = keyof typeof categories;

export default function TechStack() {
  const [active, setActive] = useState<Category>('Frontend');
  const tabs = Object.keys(categories) as Category[];

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] text-cyan-400 mb-4"
        >
          04 — Stack
        </motion.p>
        <h2 className="font-syne font-bold leading-tight mb-12" style={{ fontSize: 'clamp(40px,5vw,64px)' }}>
          <SplitText text="Nuestro arsenal tecnológico." className="text-slate-100" />
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              data-cursor="hover"
              className={`px-4 py-2 rounded-full font-dm text-sm transition-all duration-200 ${
                active === tab
                  ? 'bg-cyan-400/10 border border-cyan-400/40 text-cyan-400'
                  : 'bg-white/[0.03] border border-white/[0.06] text-slate-500 hover:text-slate-300 hover:border-white/15'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Items */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {categories[active].map(({ name, icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="bg-surface border border-white/[0.06] rounded-xl p-4 flex items-center gap-3 group hover:border-white/15 hover:-translate-y-0.5 transition-all duration-250"
              data-cursor="hover"
            >
              <span className="text-xl grayscale group-hover:grayscale-0 transition-all duration-250">{icon}</span>
              <span className="font-dm text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-250">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
