import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function TeacherBtn() {
  return (
    <motion.a
      href="/teacher"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 w-12 h-12 bg-emerald-600 rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer z-40"
      title="Espace Enseignant"
    >
      <GraduationCap size={22} strokeWidth={2} />
    </motion.a>
  );
}
