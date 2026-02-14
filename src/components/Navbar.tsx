// FILE: src/components/Navbar.tsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, ChevronDown, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '../lib/utils';

interface NavbarProps {
  sidebarCollapsed: boolean;
}

export function Navbar({ sidebarCollapsed }: NavbarProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'sticky top-0 z-30 h-16 rounded-3xl mx-4 mt-4 mb-2 backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 flex items-center justify-between px-6',
        sidebarCollapsed ? 'md:ml-24' : 'md:ml-72'
      )}
    >
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div
          className={cn(
            'flex-1 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 dark:bg-black/5 border transition-all duration-300',
            searchFocused
              ? 'border-neon-cyan/50 shadow-glow'
              : 'border-white/10 dark:border-white/5'
          )}
        >
          <Search className="w-5 h-5 text-slate-500 shrink-0" />
          <input
            type="search"
            placeholder="Search societies, events..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-slate-500"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <motion.button
          className="relative p-2.5 rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
        </motion.button>

        <ThemeToggle />

        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 p-2 rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
          >
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-neon-cyan/50 to-neon-purple/50 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <ChevronDown
              className={cn('w-4 h-4 transition-transform', profileOpen && 'rotate-180')}
            />
          </button>

          <AnimatePresence>
            {profileOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setProfileOpen(false)}
                  aria-hidden="true"
                />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-56 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 py-2 z-50 shadow-soft dark:shadow-soft-dark"
                >
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">john@college.edu</p>
                  </div>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 dark:hover:bg-white/5">
                    Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 dark:hover:bg-white/5">
                    Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 dark:hover:bg-white/5 text-red-400">
                    Sign out
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
