import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/src/constants';
import * as Icons from 'lucide-react';

export const Servicios = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h1 className="font-display text-7xl md:text-8xl tracking-tighter mb-8 italic">
            Nuestros <br /> Servicios
          </h1>
          <p className="text-xl text-menta-primary/60 max-w-2xl leading-relaxed">
            Ofrecemos un ecosistema completo de soluciones para marcas gastronómicas. Desde el concepto inicial hasta la ejecución diaria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-menta-line border border-menta-line">
          {SERVICES.map((service, idx) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-menta-bg p-12 hover:bg-menta-primary hover:text-menta-bg transition-colors group"
              >
                <div className="mb-8 text-menta-accent group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={40} strokeWidth={1.5} />}
                </div>
                <h3 className="font-display text-3xl mb-4 italic">{service.title}</h3>
                <p className="text-menta-primary/60 group-hover:text-menta-bg/60 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-12 flex justify-between items-end">
                  <span className="font-mono text-xs opacity-20 group-hover:opacity-40">0{idx + 1}</span>
                  <button className="text-xs uppercase tracking-widest font-bold border-b border-current pb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Saber más
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
