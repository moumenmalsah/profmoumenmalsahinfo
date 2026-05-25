/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, History, Target, Users } from 'lucide-react';

const stats = [
  { label: 'Années d’expérience', value: '4+', icon: History, color: 'bg-blue-500' },
  { label: 'Ressources pédagogiques', value: '150+', icon: Target, color: 'bg-green-500' },
  { label: 'Projets éducatifs', value: '30+', icon: CheckCircle2, color: 'bg-brand-primary' },
  { label: 'Accompagnement', value: '1000+', icon: Users, color: 'bg-amber-500' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl" />
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-4 border-white  shadow-2xl">
              <img 
                src="../../public/about_me.jpg" 
                alt="Professeur Malsah Moumen" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-1 italic">Passion & Dévouement</p>
                <h3 className="text-2xl text-white font-serif font-bold">Inspirer la curiosité numérique</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-[10px] mb-4">À Propos de Moi</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-slate-900 ">
              Une vision moderne de <br />
              <span className="text-emerald-600">l'éducation numérique.</span>
            </h3>
            
            <p className="text-slate-500  text-base mb-8 leading-relaxed font-medium">
              Enseignant d'informatique au Maroc avec plus de 4 ans d'expérience, ma passion est de transmettre le savoir et d'accompagner mes élèves vers l'excellence.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="p-6 glass rounded-2xl border border-brand-primary/10 hover:border-brand-primary/30 transition-colors">
                 <p className="text-slate-700  italic text-lg leading-relaxed">
                   "Le plaisir d’enseigner réside dans le partage des connaissances et le développement des compétences technologiques de demain."
                 </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 bg-white  border border-slate-200  rounded-2xl group hover:shadow-xl transition-all shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-emerald-50  text-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <stat.icon size={18} />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 ">{stat.value}</h4>
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
