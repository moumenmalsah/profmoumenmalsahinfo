import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LogIn, Lock, Mail, Calendar, User, ArrowLeft, Trash2 } from 'lucide-react';

const PASSWORD = 'prof2026';

interface Message {
  nom: string;
  email: string;
  sujet: string;
  message: string;
  date: string;
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === PASSWORD) {
      onLogin();
    } else {
      setErr('Mot de passe incorrect');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 w-full max-w-md"
      >
        <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Lock size={28} className="text-emerald-600" />
        </div>
        <h1 className="text-2xl font-black text-center text-slate-900 mb-2">Espace Enseignant</h1>
        <p className="text-slate-400 text-sm text-center mb-8 font-medium">Connectez-vous pour accéder au tableau de bord</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Mot de passe</label>
            <input
              type="password"
              value={pw}
              onChange={(e) => { setPw(e.target.value); setErr(''); }}
              placeholder="Entrez votre mot de passe"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              autoFocus
            />
          </div>
          {err && <p className="text-red-500 text-sm font-medium">{err}</p>}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
          >
            <LogIn size={18} />
            Se connecter
          </motion.button>
        </form>

        <a href="/" className="block text-center mt-6 text-sm text-slate-400 hover:text-emerald-600 transition-colors font-medium">
          ← Retour au site
        </a>
      </motion.div>
    </div>
  );
}

function Dashboard() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const msgs = JSON.parse(localStorage.getItem('contact_messages') || '[]');
    setMessages(msgs.reverse());
  }, []);

  const clearMessages = () => {
    localStorage.removeItem('contact_messages');
    setMessages([]);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <a href="/" className="text-sm text-slate-400 hover:text-emerald-600 transition-colors font-medium flex items-center gap-1 mb-2">
              <ArrowLeft size={14} /> Retour au site
            </a>
            <h1 className="text-3xl font-black text-slate-900">Tableau de Bord</h1>
            <p className="text-slate-400 text-sm font-medium mt-1">Gérez les messages de votre portfolio</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Messages</p>
              <p className="text-2xl font-black text-slate-900">{messages.length}</p>
            </div>
            {messages.length > 0 && (
              <button
                onClick={clearMessages}
                className="p-3 bg-white rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition-all"
                title="Tout effacer"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="text-center py-20">
            <Mail size={48} className="mx-auto text-slate-300 mb-4" />
            <p className="text-slate-400 text-lg font-medium">Aucun message pour le moment</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <User size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{msg.nom}</h3>
                      <p className="text-xs text-slate-400">{msg.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Calendar size={12} />
                    {formatDate(msg.date)}
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Sujet</span>
                  <p className="text-sm font-medium text-slate-700 mt-1">{msg.sujet}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed">{msg.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeacherPanel() {
  const [loggedIn, setLoggedIn] = useState(() => sessionStorage.getItem('teacher_logged') === 'true');

  const login = () => {
    sessionStorage.setItem('teacher_logged', 'true');
    setLoggedIn(true);
  };

  if (!loggedIn) return <LoginForm onLogin={login} />;
  return <Dashboard />;
}
