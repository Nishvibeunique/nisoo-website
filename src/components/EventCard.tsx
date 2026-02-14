// FILE: src/components/EventCard.tsx

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { cn } from '../lib/utils';

type EventStatus = 'upcoming' | 'ongoing' | 'completed';

interface EventCardProps {
  name: string;
  date: string;
  venue: string;
  society: string;
  capacity: number;
  registered: number;
  status: EventStatus;
}

const statusConfig: Record<
  EventStatus,
  { label: string; className: string; pulse?: boolean }
> = {
  upcoming: {
    label: 'Upcoming',
    className: 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30',
    pulse: true,
  },
  ongoing: {
    label: 'Live',
    className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    pulse: true,
  },
  completed: {
    label: 'Completed',
    className: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
    pulse: false,
  },
};

export function EventCard({
  name,
  date,
  venue,
  society,
  capacity,
  registered,
  status,
}: EventCardProps) {
  const config = statusConfig[status];
  const percent = Math.min((registered / capacity) * 100, 100);

  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="group"
    >
      <GlassCard
        className={cn(
          'h-full border-2 transition-all duration-300',
          'hover:shadow-glow-lg hover:border-neon-purple/40 dark:hover:border-neon-purple/30',
          'hover:bg-gradient-to-br hover:from-neon-purple/5 hover:to-neon-cyan/5'
        )}
      >
        <div className="flex items-start justify-between mb-3">
          <span
            className={cn(
              'text-xs font-medium px-3 py-1 rounded-full border',
              config.className,
              config.pulse && 'animate-pulse'
            )}
          >
            {config.label}
          </span>
          <span className="text-xs text-slate-500">{society}</span>
        </div>

        <h3 className="text-xl font-bold mb-4 group-hover:text-neon-cyan transition-colors">
          {name}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar className="w-4 h-4 text-neon-cyan shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="w-4 h-4 text-neon-purple shrink-0" />
            <span>{venue}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              Capacity
            </span>
            <span className="font-medium">
              {registered}/{capacity}
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/20 dark:bg-black/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
            />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
