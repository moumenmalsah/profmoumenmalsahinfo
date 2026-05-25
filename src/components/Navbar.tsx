/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen, User, Briefcase, GraduationCap, Mail, Globe } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '#home', icon: Globe },
  { name: 'À Propos', href: '#about', icon: User },
  { name: 'Compétences', href: '#skills', icon: Briefcase },
  { name: 'Ressources', href: '#resources', icon: BookOpen },
  { name: 'Portfolio', href: '#portfolio', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 px-4' : 'py-4 px-6'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass shadow-lg px-6 py-2' : 'bg-transparent px-0 py-0'
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md shadow-emerald-200">MM</div>
            <div>
              <h1 className={`text-lg font-bold leading-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>Malsah Moumen</h1>
              <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Professeur d'Informatique</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100/20"
            >
              Contactez-moi
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 md:hidden glass rounded-2xl shadow-xl overflow-hidden z-40"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-700 hover:bg-brand-primary hover:text-white transition-all group"
                >
                  <link.icon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href="#resources"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-4 bg-brand-primary text-white rounded-xl text-center font-bold shadow-lg"
                >
                  Ressources Pédagogiques
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
