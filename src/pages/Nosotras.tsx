import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Nosotras = () => {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-display text-7xl md:text-8xl tracking-tighter mb-8 italic">
              Menta <br /> es Pasión.
            </h1>
            <p className="text-xl text-menta-primary/70 leading-relaxed mb-8">
              Somos una agencia boutique nacida de la necesidad de elevar la comunicación gastronómica. No solo hacemos marketing; entendemos el producto, el servicio y la experiencia del cliente.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-px bg-menta-accent mt-3" />
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Nuestra Misión</h3>
                  <p className="text-menta-primary/60">Hacer que cada marca gastronómica tenga una voz propia y auténtica.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-px bg-menta-accent mt-3" />
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm mb-2">Nuestra Visión</h3>
                  <p className="text-menta-primary/60">Ser el referente creativo de la industria horeca en el mercado hispano.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/menta-team/800/1000"
              alt="Nosotras"
              className="rounded-3xl shadow-2xl grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-menta-accent text-white p-10 rounded-2xl hidden md:block">
              <p className="text-4xl font-display italic mb-2">+10 años</p>
              <p className="text-xs uppercase tracking-[0.2em] opacity-80">De experiencia combinada</p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <section>
          <h2 className="font-display text-5xl italic mb-16">El Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Ana García", role: "Directora Creativa", img: "https://picsum.photos/seed/ana/400/500" },
              { name: "Elena Sanz", role: "Estratega Digital", img: "https://picsum.photos/seed/elena/400/500" },
              { name: "Carla Ruiz", role: "Productora Audiovisual", img: "https://picsum.photos/seed/carla/400/500" },
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-display text-2xl italic">{member.name}</h3>
                <p className="text-sm uppercase tracking-widest text-menta-primary/40">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
