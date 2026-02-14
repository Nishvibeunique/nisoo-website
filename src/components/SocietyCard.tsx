// FILE: src/components/SocietyCard.tsx

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Users } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { cn } from '../lib/utils';

interface SocietyCardProps {
  name: string;
  description: string;
  members: number;
  category: string;
  gradient?: string;
}

export function SocietyCard({
  name,
  description,
  members,
  category,
  gradient = 'from-neon-cyan/20 to-neon-purple/20',
}: SocietyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="cursor-pointer"
    >
      <GlassCard
        className={cn(
          'h-full border-2 transition-all duration-300',
          'hover:shadow-glow-lg hover:border-neon-cyan/40 dark:hover:border-neon-cyan/30',
          `bg-gradient-to-br ${gradient}`
        )}
      >
        <div style={{ transform: 'translateZ(50px)' }} className="relative">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/20 dark:bg-black/20 inline-block mb-3">
            {category}
          </span>
          <h3 className="text-xl font-bold mb-2" style={{ transform: 'translateZ(25px)' }}>
            {name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2" style={{ transform: 'translateZ(15px)' }}>
            {description}
          </p>
          <div
            className="flex items-center gap-2 text-sm text-slate-500"
            style={{ transform: 'translateZ(20px)' }}
          >
            <Users className="w-4 h-4 text-neon-cyan" />
            <span>{members} members</span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
