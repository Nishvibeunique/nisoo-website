// FILE: src/pages/AI.tsx

import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

const recommendations = [
  { id: 1, title: 'Tech Club', reason: 'Based on your interest in programming', match: 95 },
  { id: 2, title: 'Literary Club', reason: 'You enjoy creative writing', match: 88 },
  { id: 3, title: 'Photography Society', reason: 'Matches your design skills', match: 82 },
];

export function AI() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-bold">AI Insights</h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard className="relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { x: -80, y: -40 },
              { x: 60, y: -60 },
              { x: -120, y: 20 },
              { x: 100, y: 30 },
              { x: -40, y: 50 },
              { x: 80, y: -20 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-neon-cyan"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: pos.x,
                  y: pos.y,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  left: '50%',
                  top: '50%',
                }}
              />
            ))}
          </div>

          <div className="relative flex items-start gap-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="p-3 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 shrink-0"
            >
              <Sparkles className="w-8 h-8 text-neon-cyan" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold mb-2">Personalized Society Recommendations</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4">
                Our AI has analyzed your interests and activity to suggest societies that match your
                profile. Explore below and join communities that align with your goals.
              </p>
              <div className="space-y-3">
                {recommendations.map((rec, i) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 dark:bg-black/5 hover:bg-white/10 dark:hover:bg-black/10 transition-colors cursor-pointer group"
                  >
                    <div>
                      <p className="font-medium">{rec.title}</p>
                      <p className="text-sm text-slate-500">{rec.reason}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-neon-cyan">{rec.match}% match</span>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
