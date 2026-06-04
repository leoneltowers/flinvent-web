'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: 'Desarrollo Personalizado',
    description: 'Soluciones a medida para tu negocio con tecnología de punta',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Plataformas SaaS',
    description: 'Aplicaciones escalables y seguras en la nube',
    icon: '☁️',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Inteligencia Artificial',
    description: 'Implementa IA para automatizar y potenciar tu negocio',
    icon: '🤖',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Diseño UX/UI',
    description: 'Interfaces modernas y experiencias excepcionales',
    icon: '🎨',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0f0f1e]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Nuestros Servicios
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Transforma tu negocio con nuestras soluciones innovadoras
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group"
            >
              <motion.div
                className={`p-8 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className="relative p-8 border border-gray-700 rounded-2xl hover:border-primary transition-colors duration-300 bg-black/40 backdrop-blur-sm">
                <motion.div
                  animate={{
                    y: hoveredId === service.id ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                </motion.div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-primary hover:text-cyan-300 font-semibold flex items-center gap-2"
                >
                  Saber más →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
