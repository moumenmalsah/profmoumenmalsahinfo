/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmed Reda",
    role: "Étudiant, 3APIC",
    content: "Les cours de Professeur Malsah sont incroyablement clairs et interactifs. Grâce à ses ressources, j'ai pu maîtriser le développement web en un temps record.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
  },
  {
    name: "Dr. Fatima Zahra",
    role: "Collègue, Inspectrice Pédagogique",
    content: "Une approche innovante de l'enseignement de l'informatique. Ses supports numériques sont une référence en matière de design pédagogique au Maroc.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
  },
  {
    name: "Yassine Elmouali",
    role: "Ancien Élève, Étudiant Ingénieur",
    content: "C'est lui qui m'a donné le goût de la programmation. Sa passion est communicative et son accompagnement va bien au-delà du simple cours magistral.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yassine",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-[10px] mb-4">Témoignages</h2>
          <h3 className="text-4xl font-black mb-6 text-slate-900 dark:text-white leading-tight">La réussite <span className="text-emerald-600 underline underline-offset-8">partagée.</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl relative group shadow-sm hover:shadow-xl transition-all"
            >
              <div className="absolute top-6 right-6 text-emerald-500 opacity-10 group-hover:opacity-40 transition-opacity">
                <Quote size={20} />
              </div>
              
              <div className="flex gap-1 mb-4 text-amber-500">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
              </div>

              <p className="text-slate-600 dark:text-slate-400 font-medium text-sm mb-6 leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
                  <img src={t.avatar} alt={t.name} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
