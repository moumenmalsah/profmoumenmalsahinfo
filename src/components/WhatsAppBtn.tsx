/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBtn() {
  return (
    <motion.a
      href="https://wa.me/212000000000" // Placeholder phone
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-16 right-6 w-12 h-12 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer transition-transform"
    >
      <MessageCircle size={24} strokeWidth={2.5} />
    </motion.a>
  );
}
