/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, ChevronRight, User } from 'lucide-react';

const posts = [
  {
    title: "Le futur de l'Intelligence Artificielle dans les écoles marocaines",
    desc: "Comment l'IA va transformer la façon dont nous enseignons et apprenons l'informatique.",
    date: "15 Mai, 2024",
    category: "Actualités",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "5 conseils pour réussir son projet de fin d'année en 3APIC",
    desc: "Méthodologie, outils et astuces pour impressionner le jury avec votre projet informatique.",
    date: "10 Avr, 2024",
    category: "Conseils",
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Pourquoi apprendre le Python dès le collège ?",
    desc: "Découvrez les avantages de ce langage polyvalent et accessible pour les débutants.",
    date: "22 Mar, 2024",
    category: "Programmation",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Blog() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-[10px] mb-4">Actualités & Blog</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">Partage de <span className="text-emerald-600">Savoir.</span></h3>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-white flex items-center gap-2 transition-all shadow-sm hover:shadow-md text-xs"
          >
            Tous les articles
            <ChevronRight size={16} />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5">
                 <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-emerald-500 text-white rounded text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                 </div>
              </div>
              
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                 <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-emerald-500" />
                    {post.date}
                 </div>
              </div>

              <h4 className="text-lg font-bold mb-3 group-hover:text-emerald-600 transition-colors leading-snug text-slate-900 dark:text-white">
                {post.title}
              </h4>
              
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 font-medium mb-4">
                {post.desc}
              </p>
              
              <div className="flex items-center gap-1 text-emerald-600 font-bold text-[11px] group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                Lire plus
                <ChevronRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
