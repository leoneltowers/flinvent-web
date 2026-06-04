'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Gestión Empresarial',
    category: 'ERP',
    description: 'Plataforma integral de gestión para PyMEs',
    image: '📊',
  },
  {
    id: 2,
    title: 'App Móvil de Logística',
    category: 'Mobile',
    description: 'Seguimiento de entregas en tiempo real',
    image: '📱',
  },
  {
    id: 3,
    title: 'Dashboard Analítico',
    category: 'Analytics',
    description: 'Visualización de datos empresariales',
    image: '📈',
  },
  {
    id: 4,
    title: 'E-commerce Personalizado',
    category: 'E-commerce',
    description: 'Tienda online con IA recomendadora',
    image: '🛍️',
  },
  {
    id: 5,
    title: 'CRM Inteligente',
    category: 'CRM',
    description: 'Gestión de clientes con machine learning',
    image: '👥',
  },
  {
    id: 6,
    title: 'Plataforma Educativa',
    category: 'EdTech',
    description: 'LMS con gamificación integrada',
    image: '🎓',
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['ERP', 'Mobile', 'Analytics', 'E-commerce', 'CRM', 'EdTech'];
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#0f0f1e] to-[#1a1a2e]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Proyectos Destacados
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Conoce las soluciones que hemos desarrollado para nuestros clientes
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === null
                ? 'bg-primary text-white'
                : 'border border-gray-600 text-gray-300 hover:border-primary'
            }`}
          >
            Todos
          </motion.button>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white'
                  : 'border border-gray-600 text-gray-300 hover:border-primary'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-xl bg-black/40 border border-gray-700 hover:border-primary transition-colors"
            >
              <motion.div
                className="aspect-square flex items-center justify-center text-8xl bg-gradient-to-br from-primary/20 to-cyan-500/20 group-hover:from-primary/40 group-hover:to-cyan-500/40 transition-all duration-300"
              >
                {project.image}
              </motion.div>
              <div className="p-6">
                <span className="text-primary text-sm font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {project.description}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-4 text-primary hover:text-cyan-300 font-semibold flex items-center gap-2"
                >
                  Ver detalle →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
