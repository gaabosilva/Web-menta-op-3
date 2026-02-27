import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contacto = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-display text-7xl md:text-8xl tracking-tighter mb-8 italic">
              Hablemos <br /> de tu proyecto.
            </h1>
            <p className="text-xl text-menta-primary/60 mb-12 leading-relaxed">
              ¿Tienes un restaurante, una marca de comida o un proyecto gastronómico? Cuéntanos tu idea y veamos cómo podemos hacerla brillar.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-menta-line flex items-center justify-center group-hover:bg-menta-accent group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-menta-primary/40 mb-1">Email</p>
                  <p className="text-lg font-medium">hola@menta.agency</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-menta-line flex items-center justify-center group-hover:bg-menta-accent group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-menta-primary/40 mb-1">Teléfono</p>
                  <p className="text-lg font-medium">+34 600 000 000</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-menta-line flex items-center justify-center group-hover:bg-menta-accent group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-menta-primary/40 mb-1">Oficina</p>
                  <p className="text-lg font-medium">Madrid, España</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-menta-line"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold">Nombre</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-menta-line py-3 focus:outline-none focus:border-menta-accent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-menta-line py-3 focus:outline-none focus:border-menta-accent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Proyecto</label>
                <select className="w-full bg-transparent border-b border-menta-line py-3 focus:outline-none focus:border-menta-accent transition-colors">
                  <option>Branding</option>
                  <option>Producción Audiovisual</option>
                  <option>Social Media</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-menta-line py-3 focus:outline-none focus:border-menta-accent transition-colors resize-none"
                  placeholder="Cuéntanos un poco más..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-menta-primary text-menta-bg py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-menta-accent transition-all flex items-center justify-center gap-3 group"
              >
                Enviar Mensaje
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
