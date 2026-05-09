/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, Mail, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-24 pb-12 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md shadow-emerald-200/20">MM</div>
              <span className="text-2xl font-bold tracking-tight">
                Malsah <span className="text-emerald-500">Moumen</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed italic text-lg">
              "L'éducation numérique est le plus bel héritage que nous puissions léguer aux générations futures."
            </p>
            <div className="flex gap-10">
               <div>
                  <h5 className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-3">Expérience</h5>
                  <p className="text-xl font-bold">4+ Années</p>
               </div>
               <div>
                  <h5 className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-3">Statut</h5>
                  <p className="text-xl font-bold">Enseignant</p>
               </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-primary rounded-full"></span>
              Liens Rapides
            </h4>
            <ul className="space-y-4">
              {['Accueil', 'À Propos', 'Compétences', 'Ressources', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand-primary transition-all rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-primary rounded-full"></span>
              Infos Pratiques
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-brand-primary mt-1"><Mail size={18} /></div>
                <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                   <p className="text-sm font-medium">moumenmalsah@gmail.com</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-brand-primary mt-1"><MapPin size={18} /></div>
                <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Localisation</p>
                   <p className="text-sm font-medium">Maroc</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Professeur Malsah Moumen. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-8">
             <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Mentions Légales</a>
             <button 
               onClick={scrollToTop}
               className="w-12 h-12 bg-white/5 hover:bg-brand-primary rounded-xl flex items-center justify-center transition-all group"
             >
               <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
