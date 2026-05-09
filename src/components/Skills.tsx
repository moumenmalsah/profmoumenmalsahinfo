/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Code2, Network, Terminal, LayoutPanelLeft, Cpu, ShieldCheck, Sigma, Binary, Palette, Sliders } from 'lucide-react';

const skills = [
  { name: 'Développement Web', level: 95, icon: Code2, color: 'emerald' },
  { name: 'Réseaux Informatiques', level: 85, icon: Network, color: 'emerald' },
  { name: 'Programmation (Python/C++)', level: 92, icon: Terminal, color: 'emerald' },
  { name: 'Bureautique Avancée', level: 98, icon: LayoutPanelLeft, color: 'emerald' },
  { name: 'Intelligence Artificielle', level: 80, icon: Cpu, color: 'emerald' },
  { name: 'Cybersécurité', level: 75, icon: ShieldCheck, color: 'emerald' },
  { name: 'Algorithmique', level: 92, icon: Sigma, color: 'emerald' },
  { name: 'Technologies Éducatives', level: 95, icon: Binary, color: 'emerald' },
  { name: 'Design Pédagogique', level: 88, icon: Palette, color: 'emerald' },
  { name: 'Présentation Multimédia', level: 94, icon: Sliders, color: 'emerald' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Expertise Technologique</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">{skill.name}</span>
                <span className="text-xs font-bold text-emerald-600 font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 + idx * 0.05 }}
                  className="h-full bg-emerald-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Background Icons */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-5">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border-[1px] border-brand-primary rounded-full"
           />
           <div className="absolute top-1/4 left-10 text-brand-primary"><Code2 size={120} /></div>
           <div className="absolute bottom-1/4 right-10 text-brand-primary"><Network size={120} /></div>
           <div className="absolute top-10 right-1/4 text-brand-primary"><Cpu size={120} /></div>
        </div>
      </div>
    </section>
  );
}
