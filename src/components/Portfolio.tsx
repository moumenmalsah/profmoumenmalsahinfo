/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Code, Palette, Cpu, Shield, Database, Tag } from 'lucide-react';
import { getPortfolio } from '../lib/data';

const categories = [
  "Tous",
  "Supports Pédagogiques",
  "Projets Éducatifs",
  "Développement Web",
  "Intelligence Artificielle",
  "Programmation",
];

const catIcons: Record<string, any> = {
  "Développement Web": Code,
  "Intelligence Artificielle": Cpu,
  "Supports Pédagogiques": Tag,
  "Projets Éducatifs": Shield,
  "Programmation": Database,
};

export default function Portfolio() {
  const [filter, setFilter] = useState("Tous");
  const [projects, setProjects] = useState(getPortfolio);

  useEffect(() => {
    const handleStorage = () => setProjects(getPortfolio());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const filteredProjects = projects.filter(p => filter === "Tous" || p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative bg-white ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Portfolio & Projets
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Réalisations & <span className="text-gradient">Innovations</span>
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-brand-primary text-white shadow-lg' 
                    : 'bg-slate-100  text-slate-600  hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id || project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group bg-slate-50  border border-slate-200  rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                   <div className="flex items-center gap-2 mb-4">
                      <span className="bg-emerald-100  text-emerald-700  text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-widest">{project.category}</span>
                   </div>
                   
                   <h4 className="text-xl font-bold text-slate-900  mb-3">{project.title}</h4>
                   <p className="text-slate-500  text-sm mb-6 line-clamp-2 leading-relaxed">{project.desc}</p>
                   
                   <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-bold px-2 py-1 bg-white  border border-slate-200  text-slate-500  rounded uppercase tracking-wider">{t}</span>
                      ))}
                   </div>
                   
                   <motion.button
                     whileHover={{ x: 5 }}
                     className="w-full py-2.5 bg-slate-900  group-hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2"
                   >
                     Consulter
                     <ExternalLink size={14} />
                   </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
