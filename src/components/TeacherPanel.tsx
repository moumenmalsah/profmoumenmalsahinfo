import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  LogIn, Lock, Mail, Calendar, User, ArrowLeft, Trash2, BookOpen,
  Briefcase, FileText, Plus, Edit3, X, Save, Book, Play,
  Layers, Code, Palette, Cpu, Shield, Database, Tag
} from 'lucide-react';
import { getResources, saveResources, getPortfolio, savePortfolio, getBlog, saveBlog } from '../lib/data';

const PASSWORD = 'prof2026';

interface Message {
  nom: string; email: string; sujet: string; message: string; date: string;
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === PASSWORD) { onLogin(); } else { setErr('Mot de passe incorrect'); }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 w-full max-w-md">
        <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6"><Lock size={28} className="text-emerald-600" /></div>
        <h1 className="text-2xl font-black text-center text-slate-900 mb-2">Espace Enseignant</h1>
        <p className="text-slate-400 text-sm text-center mb-8 font-medium">Connectez-vous pour accéder au tableau de bord</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Mot de passe</label>
            <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setErr(''); }} placeholder="Entrez votre mot de passe" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all" autoFocus />
          </div>
          {err && <p className="text-red-500 text-sm font-medium">{err}</p>}
          <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2">
            <LogIn size={18} /> Se connecter
          </motion.button>
        </form>
        <a href="#/" className="block text-center mt-6 text-sm text-slate-400 hover:text-emerald-600 transition-colors font-medium">← Retour au site</a>
      </motion.div>
    </div>
  );
}

/* ────────── Resources Manager ────────── */
function ResourcesManager() {
  const [items, setItems] = useState(getResources);
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState<any>(null);
  const [form, setForm] = useState({ level: '2apic', type: 'PDF', title: '', slug: '', downloads: 0 });

  const refresh = () => setItems(getResources());

  const openNew = () => { setEdit(null); setForm({ level: '2apic', type: 'PDF', title: '', slug: '', downloads: 0 }); setShowForm(true); };
  const openEdit = (item: any) => { setEdit(item); setForm({ level: item.level, type: item.type, title: item.title, slug: item.slug, downloads: item.downloads }); setShowForm(true); };

  const save = () => {
    let updated;
    if (edit) {
      updated = items.map((i: any) => i.slug === edit.slug ? { ...form } : i);
    } else {
      updated = [...items, { ...form, slug: form.slug || form.title.toLowerCase().replace(/\s+/g, '-') }];
    }
    saveResources(updated);
    setShowForm(false);
    refresh();
  };

  const remove = (slug: string) => {
    saveResources(items.filter((i: any) => i.slug !== slug));
    refresh();
  };

  const levelColors: Record<string, string> = { '2apic': 'bg-blue-100 text-blue-700', '3apic': 'bg-emerald-100 text-emerald-700', tcl: 'bg-amber-100 text-amber-700' };
  const levelNames: Record<string, string> = { '2apic': '2APIC', '3apic': '3APIC', tcl: 'Tronc Commun' };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Ressources Pédagogiques</h2>
        <button onClick={openNew} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all"><Plus size={16} /> Ajouter</button>
      </div>
      {showForm && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-6 space-y-3">
          <div className="grid md:grid-cols-5 gap-3">
            <select value={form.level} onChange={e => setForm({ ...form, level: e.target.value })} className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="2apic">2APIC</option><option value="3apic">3APIC</option><option value="tcl">Tronc Commun</option>
            </select>
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="PDF">PDF</option><option value="Vidéo">Vidéo</option><option value="Exercice">Exercice</option><option value="Autre">Autre</option>
            </select>
            <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Titre" className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500 col-span-2" />
            <input value={form.downloads} onChange={e => setForm({ ...form, downloads: +e.target.value })} type="number" placeholder="Téléchargements" className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div className="flex gap-2">
            <button onClick={save} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-emerald-700"><Save size={16} /> {edit ? 'Modifier' : 'Ajouter'}</button>
            <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-200"><X size={16} /> Annuler</button>
          </div>
        </div>
      )}
      <div className="space-y-2">
        {items.map((item: any) => (
          <div key={item.slug} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4">
              <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-widest ${levelColors[item.level] || 'bg-slate-100 text-slate-600'}`}>{levelNames[item.level] || item.level}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">{item.type}</span>
              <span className="font-medium text-slate-800">{item.title}</span>
              <span className="text-xs text-slate-400">{item.downloads} téléch.</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openEdit(item)} className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"><Edit3 size={16} /></button>
              <button onClick={() => remove(item.slug)} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────── Portfolio Manager ────────── */
function PortfolioManager() {
  const [items, setItems] = useState(getPortfolio);
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState<any>(null);
  const [form, setForm] = useState({ title: '', category: 'Développement Web', desc: '', tech: '', img: '' });
  const categories = ["Supports Pédagogiques", "Projets Éducatifs", "Développement Web", "Intelligence Artificielle", "Programmation"];

  const refresh = () => setItems(getPortfolio());

  const openNew = () => { setEdit(null); setForm({ title: '', category: 'Développement Web', desc: '', tech: '', img: '' }); setShowForm(true); };
  const openEdit = (item: any) => { setEdit(item); setForm({ title: item.title, category: item.category, desc: item.desc, tech: item.tech.join(', '), img: item.img }); setShowForm(true); };

  const save = () => {
    const techArr = form.tech.split(',').map(t => t.trim()).filter(Boolean);
    let updated;
    if (edit) {
      updated = items.map((i: any) => i.id === edit.id ? { ...i, ...form, tech: techArr } : i);
    } else {
      updated = [...items, { id: 'p' + Date.now(), ...form, tech: techArr }];
    }
    savePortfolio(updated);
    setShowForm(false);
    refresh();
  };

  const remove = (id: string) => {
    savePortfolio(items.filter((i: any) => i.id !== id));
    refresh();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Réalisations & Innovations</h2>
        <button onClick={openNew} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-emerald-700"><Plus size={16} /> Ajouter</button>
      </div>
      {showForm && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-6 space-y-3">
          <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Titre du projet" className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} placeholder="Description" rows={2} className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          <input value={form.tech} onChange={e => setForm({ ...form, tech: e.target.value })} placeholder="Technologies (séparées par des virgules)" className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          <input value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} placeholder="URL de l'image" className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          <div className="flex gap-2">
            <button onClick={save} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-emerald-700"><Save size={16} /> {edit ? 'Modifier' : 'Ajouter'}</button>
            <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-200"><X size={16} /> Annuler</button>
          </div>
        </div>
      )}
      <div className="space-y-2">
        {items.map((item: any) => (
          <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <span className="text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-widest bg-emerald-100 text-emerald-700 shrink-0">{item.category}</span>
              <span className="font-medium text-slate-800 truncate">{item.title}</span>
              <span className="text-xs text-slate-400 truncate hidden md:inline">{item.desc}</span>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => openEdit(item)} className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"><Edit3 size={16} /></button>
              <button onClick={() => remove(item.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────── Blog Manager ────────── */
function BlogManager() {
  const [items, setItems] = useState(getBlog);
  const [showForm, setShowForm] = useState(false);
  const [edit, setEdit] = useState<any>(null);
  const [form, setForm] = useState({ title: '', desc: '', date: '', category: 'Actualités', img: '' });

  const refresh = () => setItems(getBlog());

  const openNew = () => { setEdit(null); setForm({ title: '', desc: '', date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }), category: 'Actualités', img: '' }); setShowForm(true); };
  const openEdit = (item: any) => { setEdit(item); setForm({ title: item.title, desc: item.desc, date: item.date, category: item.category, img: item.img }); setShowForm(true); };

  const save = () => {
    let updated;
    if (edit) {
      updated = items.map((i: any) => i.id === edit.id ? { ...i, ...form } : i);
    } else {
      updated = [...items, { id: 'b' + Date.now(), ...form }];
    }
    saveBlog(updated);
    setShowForm(false);
    refresh();
  };

  const remove = (id: string) => {
    saveBlog(items.filter((i: any) => i.id !== id));
    refresh();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Partage de Savoir (Blog)</h2>
        <button onClick={openNew} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-emerald-700"><Plus size={16} /> Ajouter</button>
      </div>
      {showForm && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-6 space-y-3">
          <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Titre de l'article" className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          <div className="grid md:grid-cols-2 gap-3">
            <input value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} placeholder="Date" className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="Actualités">Actualités</option><option value="Conseils">Conseils</option><option value="Programmation">Programmation</option>
            </select>
          </div>
          <textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} placeholder="Description" rows={2} className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          <input value={form.img} onChange={e => setForm({ ...form, img: e.target.value })} placeholder="URL de l'image" className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500" />
          <div className="flex gap-2">
            <button onClick={save} className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-emerald-700"><Save size={16} /> {edit ? 'Modifier' : 'Ajouter'}</button>
            <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-200"><X size={16} /> Annuler</button>
          </div>
        </div>
      )}
      <div className="space-y-2">
        {items.map((item: any) => (
          <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <span className="text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-widest bg-amber-100 text-amber-700 shrink-0">{item.category}</span>
              <span className="font-medium text-slate-800 truncate">{item.title}</span>
              <span className="text-xs text-slate-400 shrink-0">{item.date}</span>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => openEdit(item)} className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"><Edit3 size={16} /></button>
              <button onClick={() => remove(item.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────── Messages Manager ────────── */
function MessagesManager() {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    const msgs = JSON.parse(localStorage.getItem('contact_messages') || '[]');
    setMessages(msgs.reverse());
  }, []);

  const clearMessages = () => { localStorage.removeItem('contact_messages'); setMessages([]); };

  const formatDate = (dateStr: string) => new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Messages reçus</h2>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Messages</p>
            <p className="text-2xl font-black text-slate-900">{messages.length}</p>
          </div>
          {messages.length > 0 && <button onClick={clearMessages} className="p-3 bg-white rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition-all" title="Tout effacer"><Trash2 size={18} /></button>}
        </div>
      </div>
      {messages.length === 0 ? (
        <div className="text-center py-20"><Mail size={48} className="mx-auto text-slate-300 mb-4" /><p className="text-slate-400 text-lg font-medium">Aucun message pour le moment</p></div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center"><User size={18} className="text-emerald-600" /></div>
                  <div><h3 className="font-bold text-slate-900">{msg.nom}</h3><p className="text-xs text-slate-400">{msg.email}</p></div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400"><Calendar size={12} />{formatDate(msg.date)}</div>
              </div>
              <div className="mb-2"><span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Sujet</span><p className="text-sm font-medium text-slate-700 mt-1">{msg.sujet}</p></div>
              <div><p className="text-sm text-slate-600 leading-relaxed">{msg.message}</p></div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ────────── Dashboard with Tabs ────────── */
const tabs = [
  { id: 'messages', label: 'Messages', icon: Mail },
  { id: 'resources', label: 'Cours', icon: BookOpen },
  { id: 'portfolio', label: 'Réalisations', icon: Briefcase },
  { id: 'blog', label: 'Blog', icon: FileText },
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState('messages');

  useEffect(() => {
    const h = window.location.hash.replace('#', '');
    if (tabs.find(t => t.id === h)) setActiveTab(h);
  }, []);

  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <a href="#/" className="text-sm text-slate-400 hover:text-emerald-600 transition-colors font-medium flex items-center gap-1 mb-2">
              <ArrowLeft size={14} /> Retour au site
            </a>
            <h1 className="text-3xl font-black text-slate-900">Tableau de Bord</h1>
            <p className="text-slate-400 text-sm font-medium mt-1">Gérez votre portfolio et vos ressources</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shrink-0 ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
          {activeTab === 'messages' && <MessagesManager />}
          {activeTab === 'resources' && <ResourcesManager />}
          {activeTab === 'portfolio' && <PortfolioManager />}
          {activeTab === 'blog' && <BlogManager />}
        </motion.div>
      </div>
    </div>
  );
}

export default function TeacherPanel() {
  const [loggedIn, setLoggedIn] = useState(() => sessionStorage.getItem('teacher_logged') === 'true');
  const login = () => { sessionStorage.setItem('teacher_logged', 'true'); setLoggedIn(true); };
  if (!loggedIn) return <LoginForm onLogin={login} />;
  return <Dashboard />;
}
