import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

export const Recurso = () => {
  const resources = [
    {
      title: "Guía de Fotografía Gastronómica",
      description: "Consejos prácticos para capturar tus platos con el móvil.",
      type: "PDF",
      size: "4.2 MB"
    },
    {
      title: "Checklist para Aperturas",
      description: "Todo lo que necesitas antes de abrir las puertas de tu local.",
      type: "XLSX",
      size: "1.1 MB"
    },
    {
      title: "Tendencias Gastronómicas 2026",
      description: "Hacia dónde va el mercado y cómo adaptarte.",
      type: "PDF",
      size: "8.5 MB"
    }
  ];

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <h1 className="font-display text-7xl md:text-8xl tracking-tighter mb-8 italic">
            Recursos <br /> Gratuitos
          </h1>
          <p className="text-xl text-menta-primary/60 max-w-2xl mx-auto leading-relaxed">
            Compartimos nuestro conocimiento para ayudarte a crecer. Descarga nuestras guías y herramientas exclusivas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-menta-line hover:shadow-2xl transition-all group"
            >
              <div className="w-12 h-12 bg-menta-accent/10 text-menta-accent rounded-xl flex items-center justify-center mb-8 group-hover:bg-menta-accent group-hover:text-white transition-colors">
                <FileText size={24} />
              </div>
              <h3 className="font-display text-2xl italic mb-4">{resource.title}</h3>
              <p className="text-menta-primary/60 text-sm mb-8 leading-relaxed">
                {resource.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-menta-line">
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">
                  {resource.type} • {resource.size}
                </span>
                <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-menta-accent hover:text-menta-primary transition-colors">
                  Descargar <Download size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="mt-32 bg-menta-accent rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <ExternalLink size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-5xl md:text-6xl italic mb-8">¿Quieres más?</h2>
            <p className="text-xl text-white/80 max-w-xl mx-auto mb-12">
              Suscríbete a nuestra newsletter gastronómica y recibe recursos exclusivos cada mes.
            </p>
            <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:bg-white/20 transition-all placeholder:text-white/40"
              />
              <button className="bg-white text-menta-accent px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-menta-primary hover:text-white transition-all">
                Suscribirme
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
