// FILE: src/components/ThemeToggle.tsx

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 flex items-center justify-center overflow-hidden hover:shadow-glow hover:border-neon-cyan/50 transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : 180,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
            y: isDark ? -20 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute"
        >
          <Sun className="w-6 h-6 text-amber-400" strokeWidth={2} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : -180,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
            y: isDark ? 0 : 20,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute"
        >
          <Moon className="w-6 h-6 text-slate-300" strokeWidth={2} />
        </motion.div>
      </div>
    </motion.button>
  );
}
