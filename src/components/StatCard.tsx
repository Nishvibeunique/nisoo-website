// FILE: src/components/StatCard.tsx

import type { ComponentType } from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { cn } from '../lib/utils';

interface StatCardProps {
  title: string;
  value: number;
  icon: ComponentType<{ className?: string }>;
  trend?: number;
  suffix?: string;
  className?: string;
}

function useCountUp(end: number, duration = 1500, startOnMount = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOnMount) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, startOnMount]);

  return count;
}

export function StatCard({ title, value, icon: Icon, trend, suffix = '', className }: StatCardProps) {
  const displayValue = useCountUp(value);

  return (
    <GlassCard className={cn('relative overflow-hidden', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</p>
          <motion.p
            key={displayValue}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            {displayValue}
            {suffix}
          </motion.p>
          {trend !== undefined && (
            <p
              className={cn(
                'text-sm mt-1',
                trend >= 0 ? 'text-emerald-500' : 'text-red-500'
              )}
            >
              {trend >= 0 ? '+' : ''}{trend}% from last month
            </p>
          )}
        </div>
        <div className="p-3 rounded-2xl bg-neon-cyan/10 dark:bg-neon-cyan/5">
          <Icon className="w-6 h-6 text-neon-cyan" />
        </div>
      </div>
    </GlassCard>
  );
}
