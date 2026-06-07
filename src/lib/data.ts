const STORAGE_KEYS = {
  resources: 'teacher_resources',
  portfolio: 'teacher_portfolio',
  blog: 'teacher_blog',
};

const defaultResources = [
  { level: '2apic', type: 'PDF', title: "Cours d'Algorithmique", slug: 'algo-pdf', downloads: 1240 },
  { level: '2apic', type: 'Vidéo', title: 'Introduction au HTML', slug: 'html-intro-video', downloads: 850 },
  { level: '2apic', type: 'Exercice', title: 'TP Tableur Excel', slug: 'excel-tp', downloads: 620 },
  { level: '3apic', type: 'PDF', title: 'Base de données', slug: 'db-pdf', downloads: 2100 },
  { level: '3apic', type: 'Exercice', title: 'Exercices SQL', slug: 'sql-exercises', downloads: 1540 },
  { level: '3apic', type: 'Vidéo', title: 'Réseaux locaux (LAN)', slug: 'lan-video', downloads: 980 },
  { level: 'tcl', type: 'PDF', title: "Système d'exploitation", slug: 'os-pdf', downloads: 3200 },
  { level: 'tcl', type: 'Exercice', title: 'Maintenance PC', slug: 'pc-maint', downloads: 1100 },
  { level: 'tcl', type: 'Vidéo', title: 'Algorithmique Avancée', slug: 'algo-adv', downloads: 2500 },
];

const defaultPortfolio = [
  { id: 'p1', title: "Plateforme LearnIT", category: "Développement Web", desc: "Un LMS moderne pour les élèves du collège avec exercices interactifs.", tech: ["React", "Firebase", "Tailwind"], img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400" },
  { id: 'p2', title: "AI Math Assistant", category: "Intelligence Artificielle", desc: "Application de résolution de problèmes mathématiques par reconnaissance d'image.", tech: ["Python", "TensorFlow", "OpenCV"], img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400" },
  { id: 'p3', title: "Support Réseaux 3APIC", category: "Supports Pédagogiques", desc: "Guide complet sur la topologie des réseaux et administration locale.", tech: ["PowerPoint", "Canva", "Diagrams"], img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400" },
  { id: 'p4', title: "Cyber-Safe Junior", category: "Projets Éducatifs", desc: "Programme de sensibilisation aux dangers d'internet pour les collégiens.", tech: ["Atelier", "Design", "Social"], img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400" },
  { id: 'p5', title: "App de Gestion Scolaire", category: "Programmation", desc: "Logiciel de gestion des notes et absences pour les professeurs.", tech: ["Java", "SQL", "Swing"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
  { id: 'p6', title: "Workshop Web Design", category: "Développement Web", desc: "Série d'ateliers sur l'UI/UX design avec Figma et HTML/CSS.", tech: ["Figma", "Design", "CSS"], img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400" },
];

const defaultBlog = [
  { id: 'b1', title: "Le futur de l'IA dans les écoles marocaines", desc: "Comment l'IA va transformer la façon dont nous enseignons et apprenons l'informatique.", date: "15 Mai, 2024", category: "Actualités", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400" },
  { id: 'b2', title: "5 conseils pour réussir son projet de fin d'année en 3APIC", desc: "Méthodologie, outils et astuces pour impressionner le jury avec votre projet informatique.", date: "10 Avr, 2024", category: "Conseils", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400" },
  { id: 'b3', title: "Pourquoi apprendre le Python dès le collège ?", desc: "Découvrez les avantages de ce langage polyvalent et accessible pour les débutants.", date: "22 Mar, 2024", category: "Programmation", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" },
];

export function getData(key: string) {
  const stored = localStorage.getItem(key);
  if (stored) {
    try { return JSON.parse(stored); } catch { /* ignore */ }
  }
  return null;
}

export function getResources() {
  return getData(STORAGE_KEYS.resources) || defaultResources;
}

export function getPortfolio() {
  return getData(STORAGE_KEYS.portfolio) || defaultPortfolio;
}

export function getBlog() {
  return getData(STORAGE_KEYS.blog) || defaultBlog;
}

export function saveResources(data: any) {
  localStorage.setItem(STORAGE_KEYS.resources, JSON.stringify(data));
}

export function savePortfolio(data: any) {
  localStorage.setItem(STORAGE_KEYS.portfolio, JSON.stringify(data));
}

export function saveBlog(data: any) {
  localStorage.setItem(STORAGE_KEYS.blog, JSON.stringify(data));
}
