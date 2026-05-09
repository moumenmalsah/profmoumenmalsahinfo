/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, BookOpen, ChevronRight, GraduationCap, Monitor, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="moroccan-pattern absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-100 dark:border-emerald-800"
          >
            <Sparkles size={14} />
            <span>Excellence Éducative au Maroc</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 text-slate-900 dark:text-white">
            Former les <span className="text-emerald-600 underline decoration-4 decoration-emerald-200 underline-offset-8">compétences</span> numériques <br /> 
            <span className="text-slate-400">de demain.</span>
          </h1>
          
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-8 max-w-lg leading-relaxed font-medium">
            Enseignant d'informatique passionné au Maroc avec 4+ ans d'expérience. Ma mission est de transmettre le savoir et accompagner mes élèves vers l'excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#portfolio"
              className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-xl shadow-emerald-200/50 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 text-sm"
            >
              Découvrir mon univers
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#resources"
              className="px-8 py-4 bg-white dark:bg-slate-800 rounded-xl font-bold text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm"
            >
              Ressources pédagogiques
              <BookOpen size={18} />
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Student" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-brand-primary">+1000</span>
              <span className="text-slate-500 dark:text-slate-400 ml-1">élèves accompagnés</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Main Visual */}
          <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto">
             <div className="absolute inset-0 bg-brand-primary rounded-[3rem] rotate-6 opacity-10 blur-2xl" />
             <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl glass transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="/src/hero.JPG" 
                  alt="Educational Background" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor size={20} className="text-brand-primary" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Formation Digitale</span>
                  </div>
                  <p className="text-lg font-serif">L'informatique est la langue du futur.</p>
                </div>
             </div>
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50"
          >
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Diplôme</p>
              <p className="text-sm font-bold text-slate-800 dark:text-white">Expert IT</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-10 z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50"
          >
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg flex items-center justify-center">
              <ChevronRight size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Expérience</p>
              <p className="text-sm font-bold text-slate-800 dark:text-white">4+ Années</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
