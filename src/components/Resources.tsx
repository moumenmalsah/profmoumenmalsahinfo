/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, FileText, Download, Play, Search, Filter, Layers, ExternalLink, X } from 'lucide-react';
import { getResources } from '../lib/data';

const levels = [
  { id: '2apic', name: '2APIC', description: 'Deuxième année du cycle secondaire collégial' },
  { id: '3apic', name: '3APIC', description: 'Troisième année du cycle secondaire collégial' },
  { id: 'tcl', name: 'Tronc Commun', description: 'Tronc Commun Littéraire et Scientifique' },
];

const typeIcons: Record<string, any> = {
  PDF: FileText, Vidéo: Play, Exercice: Book, Autre: Book,
};

export default function Resources() {
  const [activeLevel, setActiveLevel] = useState('2apic');
  const [searchTerm, setSearchTerm] = useState('');
  const [resources, setResources] = useState(getResources);
  const [viewer, setViewer] = useState<any>(null);

  useEffect(() => {
    const handleStorage = () => setResources(getResources());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const filteredResources = resources.filter(res =>
    res.level === activeLevel &&
    res.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="resources" className="py-24 bg-slate-50  relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5 -rotate-12">
        <Book size={400} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Espace Étudiant
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Ressources <span className="text-gradient">Pédagogiques</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600  max-w-2xl mx-auto text-lg mb-10"
          >
            Accédez à une bibliothèque complète de cours, d'exercices et de vidéos pour chaque niveau scolaire.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Rechercher un cours, exercice..." 
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white  border-none shadow-lg focus:ring-2 focus:ring-brand-primary transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <button className="flex items-center gap-2 px-6 py-3 glass rounded-2xl font-bold text-slate-700  hover:bg-white transition-all">
                <Filter size={20} />
                Filtres Avancés
             </button>
          </div>
        </div>

        {/* Level Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setActiveLevel(level.id)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 flex items-center gap-3 ${
                activeLevel === level.id 
                  ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20 scale-105' 
                  : 'glass text-slate-600  hover:bg-white'
              }`}
            >
              <Layers size={20} />
              {level.name}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           <AnimatePresence mode="wait">
            {filteredResources.map((res) => (
              <motion.div
                key={res.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white  p-5 rounded-2xl border border-slate-200  hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-slate-100  text-slate-600  text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-widest group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                      {res.level}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">{res.type}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-800  mb-2">{res.title}</h4>
                  <p className="text-xs text-slate-500  mb-6 font-medium">Informatique & Technologies</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-slate-600  bg-slate-50  border border-slate-100  p-2 rounded-lg">
                    {(() => { const Ic = typeIcons[res.type] || Book; return <Ic size={14} className="text-emerald-600" />; })()}
                    {res.downloads} téléchargements
                  </div>
                  <button onClick={() => setViewer(res)} className="w-full py-2 bg-slate-900  group-hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                    Consulter <ExternalLink size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
           </AnimatePresence>
        </div>
        
        {filteredResources.length === 0 && (
          <div className="text-center py-20 bg-white  rounded-[2.5rem] shadow-inner">
             <div className="w-20 h-20 bg-slate-100  rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search size={40} />
             </div>
             <p className="text-slate-500 font-medium">Aucun résultat trouvé pour votre recherche.</p>
          </div>
        )}
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {viewer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 md:p-8"
            onClick={() => setViewer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-900">{viewer.title}</h3>
                  <p className="text-xs text-slate-400">{viewer.type} — {viewer.level}</p>
                </div>
                <button onClick={() => setViewer(null)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 bg-slate-100 min-h-[60vh]">
                {viewer.url ? (
                  <iframe
                    src={viewer.url}
                    className="w-full h-full min-h-[60vh]"
                    title={viewer.title}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[60vh] text-slate-400">
                    <div className="text-center">
                      <FileText size={48} className="mx-auto mb-3 opacity-40" />
                      <p className="font-medium">Aucun fichier lié pour le moment</p>
                      <p className="text-xs mt-1">Ajoutez un lien PDF depuis l'espace enseignant</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
