import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-menta-primary text-menta-bg pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-menta-accent rounded-full flex items-center justify-center text-white font-display italic text-xl">
                M
              </div>
              <span className="font-display text-2xl tracking-tighter font-bold uppercase">Menta</span>
            </Link>
            <p className="text-menta-bg/60 text-sm leading-relaxed">
              Agencia de marketing especializada en la industria gastronómica. Creamos experiencias que se saborean.
            </p>
          </div>

          <div>
            <h4 className="font-display italic text-lg mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm text-menta-bg/60">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/nosotras" className="hover:text-white transition-colors">Nosotras</Link></li>
              <li><Link to="/recurso" className="hover:text-white transition-colors">Recurso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display italic text-lg mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm text-menta-bg/60">
              <li>Branding</li>
              <li>Producción Audiovisual</li>
              <li>Social Media</li>
              <li>Diseño de Menús</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display italic text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-menta-bg/60">
              <li className="flex items-center gap-3"><Mail size={16} /> hola@menta.agency</li>
              <li className="flex items-center gap-3"><Phone size={16} /> +34 600 000 000</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> Madrid, España</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-menta-bg/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Menta Agencia Gastronómica. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-menta-bg/60 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-menta-bg/60 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
