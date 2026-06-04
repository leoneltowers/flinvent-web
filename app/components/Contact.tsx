'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0f0f1e]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Contáctanos
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos ayudarte
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📧</span> Email
              </h3>
              <p className="text-gray-400">info@flinvent.net</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📱</span> WhatsApp
              </h3>
              <p className="text-gray-400">+54 9 1234 5678</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span> Ubicación
              </h3>
              <p className="text-gray-400">Buenos Aires, Argentina</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:border-primary outline-none transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:border-primary outline-none transition-colors"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Tu teléfono"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:border-primary outline-none transition-colors"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-black/40 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:border-primary outline-none transition-colors resize-none"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all"
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
