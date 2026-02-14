// FILE: src/components/BottomNav.tsx

import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/societies', icon: Users, label: 'Societies' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/ai', icon: Sparkles, label: 'AI' },
];

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 pb-6 safe-area-pb backdrop-blur-xl bg-white/10 dark:bg-black/10 border-t border-white/20 dark:border-white/10">
      <div className="flex items-center justify-around rounded-3xl bg-white/5 dark:bg-black/5 p-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300',
                isActive
                  ? 'bg-neon-cyan/20 text-neon-cyan'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              )
            }
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
