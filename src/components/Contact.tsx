/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Twitter, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-[0.02] pointer-events-none">
        <Globe size={800} className="mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-[10px] mb-4">Contactez-moi</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white leading-tight">Restons <span className="text-emerald-600 underline underline-offset-8">Connectés</span></h3>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-12 leading-relaxed max-w-md font-medium">
              Que vous soyez élève, parent ou collègue, n'hésitez pas à me contacter pour toute question ou proposition de collaboration.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-base font-bold text-slate-800 dark:text-white">moumenmalsah@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Localisation</p>
                  <p className="text-base font-bold text-slate-800 dark:text-white">Maroc</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
               <p className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px]">Suivez mon travail</p>
               <div className="flex gap-3">
                  {[Facebook, Linkedin, Twitter].map((Icon, idx) => (
                    <motion.a 
                      key={idx}
                      href="#"
                      whileHover={{ y: -3, color: '#059669' }}
                      className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 transition-all border border-slate-200 dark:border-slate-800 flex items-center justify-center"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Nom</label>
                   <input type="text" placeholder="Ahmed Alaoui" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                   <input type="email" placeholder="ahmed@gmail.com" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Sujet</label>
                 <input type="text" placeholder="Proposition de collaboration..." className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
              </div>
              
              <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                 <textarea rows={4} placeholder="Votre message ici..." className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-emerald-600 text-white rounded-lg font-bold shadow-lg shadow-emerald-200/50 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 text-sm"
              >
                Envoyer le Message
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
