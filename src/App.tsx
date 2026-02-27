import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Servicios } from './pages/Servicios';
import { Nosotras } from './pages/Nosotras';
import { Contacto } from './pages/Contacto';
import { Recurso } from './pages/Recurso';
import { motion, AnimatePresence } from 'framer-motion';

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/servicios" element={<PageWrapper><Servicios /></PageWrapper>} />
              <Route path="/nosotras" element={<PageWrapper><Nosotras /></PageWrapper>} />
              <Route path="/contacto" element={<PageWrapper><Contacto /></PageWrapper>} />
              <Route path="/recurso" element={<PageWrapper><Recurso /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
