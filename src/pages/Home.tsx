import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/src/constants';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-menta-accent bg-menta-accent/10 px-3 py-1 rounded-full">
                Agencia Gastronómica
              </span>
            </div>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter mb-8">
              CREAMOS <br />
              <span className="italic text-menta-accent">SABORES</span> <br />
              VISUALES.
            </h1>
            <p className="text-lg md:text-xl text-menta-primary/70 max-w-md mb-10 leading-relaxed">
              Especialistas en transformar marcas gastronómicas en experiencias memorables que conquistan el paladar y la vista.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/servicios"
                className="bg-menta-primary text-menta-bg px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-menta-accent transition-all flex items-center gap-3 group"
              >
                Nuestros Servicios
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border border-menta-primary/20 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-menta-primary hover:text-menta-bg transition-all flex items-center gap-3 group">
                <Play size={18} fill="currentColor" />
                Showreel
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-menta-accent/5 rounded-3xl -rotate-6 scale-95" />
            <img
              src="https://picsum.photos/seed/food1/800/800"
              alt="Gastronomy"
              className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-menta-line">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="#2d5a4c" color="#2d5a4c" />
                ))}
              </div>
              <p className="font-display italic text-lg leading-tight">
                "Transformaron nuestro <br /> restaurante por completo."
              </p>
              <p className="text-xs uppercase tracking-widest mt-4 text-menta-primary/40">
                — Chef Alejandro M.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview - Data Grid Style */}
      <section className="py-32 border-t border-menta-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="font-display text-5xl md:text-6xl tracking-tighter mb-4 italic">Servicios</h2>
              <p className="text-menta-primary/60 max-w-sm uppercase text-xs tracking-[0.2em]">
                Soluciones integrales para el sector horeca y marcas de alimentación.
              </p>
            </div>
            <Link to="/servicios" className="text-sm uppercase tracking-widest font-bold border-b-2 border-menta-accent pb-1 hover:text-menta-accent transition-colors">
              Ver todos los servicios
            </Link>
          </div>

          <div className="border-t border-menta-primary">
            <div className="data-row opacity-50 py-4">
              <span className="col-header">#</span>
              <span className="col-header">Servicio</span>
              <span className="col-header">Especialidad</span>
              <span className="col-header">Impacto</span>
            </div>
            {SERVICES.slice(0, 5).map((service, idx) => (
              <div key={service.id} className="data-row group">
                <span className="font-mono text-sm opacity-40 group-hover:opacity-100">0{idx + 1}</span>
                <span className="font-display text-xl md:text-2xl italic">{service.title}</span>
                <span className="text-sm opacity-60 group-hover:opacity-100 self-center">Gastronomía</span>
                <span className="text-sm font-mono self-center text-right md:text-left">ALTO</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Nosotras Teaser */}
      <section className="py-32 bg-menta-primary text-menta-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 text-[20rem] font-display italic opacity-5 select-none pointer-events-none">
              M
            </div>
            <h2 className="font-display text-6xl md:text-7xl tracking-tighter mb-8 leading-none">
              SOMOS <br />
              <span className="italic text-menta-accent">NOSOTRAS.</span>
            </h2>
            <p className="text-xl text-menta-bg/70 mb-10 leading-relaxed">
              Un equipo de mentes creativas apasionadas por el buen comer y el mejor comunicar. Entendemos el lenguaje de la cocina y lo traducimos al mundo digital.
            </p>
            <Link
              to="/nosotras"
              className="inline-flex items-center gap-4 text-sm uppercase tracking-widest font-bold group"
            >
              Conoce al equipo
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-menta-accent group-hover:border-menta-accent transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/team1/400/600" alt="Team" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/team2/400/600" alt="Team" className="rounded-2xl mt-12 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </div>
  );
};
