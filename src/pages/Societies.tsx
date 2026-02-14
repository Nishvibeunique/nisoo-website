// FILE: src/pages/Societies.tsx

import { motion } from 'framer-motion';
import { SocietyCard } from '../components/SocietyCard';

const societies = [
  {
    id: 1,
    name: 'Tech Club',
    description: 'Building the future with code. Workshops, hackathons, and mentorship for aspiring developers.',
    members: 320,
    category: 'Technical',
    gradient: 'from-neon-cyan/20 to-neon-purple/20',
  },
  {
    id: 2,
    name: 'Cultural Society',
    description: 'Celebrating diversity through music, dance, drama, and art. Annual cultural fest and weekly meets.',
    members: 245,
    category: 'Cultural',
    gradient: 'from-amber-500/20 to-rose-500/20',
  },
  {
    id: 3,
    name: 'Sports Club',
    description: 'From cricket to chess. Regular tournaments, fitness sessions, and inter-college competitions.',
    members: 410,
    category: 'Sports',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 4,
    name: 'Literary Club',
    description: 'Poetry, prose, and debate. Open mics, writer workshops, and publication opportunities.',
    members: 125,
    category: 'Literary',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 5,
    name: 'Photography Society',
    description: 'Capture moments, tell stories. Camera tutorials, photo walks, and exhibition showcases.',
    members: 89,
    category: 'Arts',
    gradient: 'from-pink-500/20 to-fuchsia-500/20',
  },
  {
    id: 6,
    name: 'Environmental Club',
    description: 'Sustainability initiatives, tree plantations, and awareness campaigns for a greener campus.',
    members: 156,
    category: 'Social',
    gradient: 'from-lime-500/20 to-green-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Societies() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold">Societies</h1>
        <p className="text-slate-500 dark:text-slate-400">
          {societies.length} societies • Explore and join
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {societies.map((society) => (
          <motion.div key={society.id} variants={itemVariants}>
            <SocietyCard
              name={society.name}
              description={society.description}
              members={society.members}
              category={society.category}
              gradient={society.gradient}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
