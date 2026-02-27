import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Nosotras', path: '/nosotras' },
  { name: 'Contacto', path: '/contacto' },
  { name: 'Recurso', path: '/recurso' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-menta-line bg-menta-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-menta-accent rounded-full flex items-center justify-center text-white font-display italic text-xl group-hover:scale-110 transition-transform">
            M
          </div>
          <span className="font-display text-2xl tracking-tighter font-bold uppercase">Menta</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-colors hover:text-menta-accent",
                location.pathname === link.path ? "text-menta-accent" : "text-menta-primary/60"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="bg-menta-primary text-menta-bg px-6 py-2 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-menta-accent transition-colors flex items-center gap-2"
          >
            Empecemos <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-menta-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-menta-bg border-b border-menta-line md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-2xl font-display italic transition-colors",
                    location.pathname === link.path ? "text-menta-accent" : "text-menta-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
