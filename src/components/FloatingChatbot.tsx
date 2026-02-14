// FILE: src/components/FloatingChatbot.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function FloatingChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 md:bottom-8 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center shadow-glow hover:shadow-glow-hover transition-shadow"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="AI Chatbot"
      >
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-neon-cyan"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <MessageCircle className="w-6 h-6 text-white relative z-10" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-36 md:bottom-24 right-6 z-50 w-80 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 p-4 shadow-soft dark:shadow-soft-dark"
            >
              <p className="text-sm font-medium mb-2">AI Assistant</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Ask me anything about societies, events, or get personalized recommendations!
              </p>
              <input
                type="text"
                placeholder="Type your question..."
                className="w-full px-4 py-2 rounded-2xl bg-white/5 dark:bg-black/5 border border-white/10 outline-none focus:border-neon-cyan/50 text-sm"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
