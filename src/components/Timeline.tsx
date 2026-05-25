/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, Award, Star, TrendingUp, Sparkles } from 'lucide-react';

const milestones = [
  {
    year: '2020',
    title: 'Début dans l’enseignement',
    desc: 'Lancement de ma carrière pédagogique avec une vision centrée sur l’innovation digitale.',
    icon: Calendar,
  },
  {
    year: '2021',
    title: 'Expérience Pédagogique',
    desc: 'Développement de nouvelles méthodes d’apprentissage hybrides et interactives.',
    icon: Award,
  },
  {
    year: '2022',
    title: 'Projets Réalisés',
    desc: 'Mise en place de plateformes de ressources numériques pour les élèves du secondaire.',
    icon: Star,
  },
  {
    year: '2023',
    title: 'Innovation Numérique',
    desc: 'Intégration de l’IA et des nouvelles technologies dans le cursus informatique national.',
    icon: TrendingUp,
  },
  {
    year: '2024+',
    title: 'Développement Continu',
    desc: 'Accompagnement constant vers l’excellence numérique et l’épanouissement des compétences.',
    icon: Sparkles,
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-slate-50  relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-[10px] mb-4">Mon Parcours</h2>
          <h3 className="text-4xl font-black mb-6 text-slate-900 ">Évolution <span className="text-emerald-600 underline underline-offset-8">Professionnelle.</span></h3>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-emerald-200  hidden md:block" />

          <div className="space-y-12">
            {milestones.map((ms, idx) => (
              <motion.div
                key={ms.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year Bubble */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white  rounded-full border-2 border-emerald-500 z-20 hidden md:flex items-center justify-center text-emerald-600 font-bold shadow-md">
                   <ms.icon size={16} />
                </div>

                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                  <div className={`bg-white  p-6 rounded-2xl border border-slate-200  hover:shadow-lg transition-all relative group shadow-sm ${idx % 2 !== 0 ? 'flex flex-col items-end' : ''}`}>
                    <span className="text-emerald-600 font-mono font-bold text-xl mb-1 block">{ms.year}</span>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors text-slate-900  uppercase tracking-tight">{ms.title}</h4>
                    <p className="text-slate-500  leading-relaxed text-xs md:text-sm font-medium">
                      {ms.desc}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
