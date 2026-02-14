// FILE: src/components/Sidebar.tsx

import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/societies', icon: Users, label: 'Societies' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/ai', icon: Sparkles, label: 'AI Insights' },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <>
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 80 : 280 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="hidden md:flex flex-col fixed left-0 top-0 h-full z-40 rounded-3xl m-4 backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 overflow-visible"
      >
        <div className="flex flex-col h-full py-6 relative overflow-hidden rounded-3xl">
          <div className="px-4 flex items-center justify-between mb-8">
            <AnimatePresence mode="wait">
              {!collapsed ? (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CS</span>
                  </div>
                  <span className="font-semibold text-lg">Society Hub</span>
                </motion.div>
              ) : (
                <motion.div
                  key="logo-icon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-10 h-10 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center mx-auto"
                >
                  <span className="text-white font-bold text-lg">CS</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <nav className="flex-1 flex flex-col gap-2 px-3">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300',
                    isActive
                      ? 'bg-neon-cyan/20 dark:bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan'
                      : 'hover:bg-white/10 dark:hover:bg-white/5',
                    collapsed && 'justify-center px-2'
                  )
                }
              >
                <Icon className="w-5 h-5 shrink-0" />
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-medium"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </nav>

          <button
            onClick={onToggle}
            className={cn(
              'mx-3 mt-4 flex items-center justify-center gap-2 py-3 rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors',
              collapsed ? 'px-2' : 'px-4'
            )}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Collapse</span>
              </>
            )}
          </button>
        </div>
      </motion.aside>
    </>
  );
}
