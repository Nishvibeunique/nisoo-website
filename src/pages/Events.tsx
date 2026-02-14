// FILE: src/pages/Events.tsx

import { motion } from 'framer-motion';
import { EventCard } from '../components/EventCard';

const events = [
  {
    id: 1,
    name: 'Hackathon 2025',
    date: 'Feb 15, 9:00 AM',
    venue: 'Main Auditorium',
    society: 'Tech Club',
    capacity: 100,
    registered: 87,
    status: 'upcoming' as const,
  },
  {
    id: 2,
    name: 'Music Night - Acoustic Evening',
    date: 'Feb 18, 6:00 PM',
    venue: 'Amphitheater',
    society: 'Cultural Society',
    capacity: 200,
    registered: 200,
    status: 'ongoing' as const,
  },
  {
    id: 3,
    name: 'Sports Day 2025',
    date: 'Feb 22, 7:00 AM',
    venue: 'Sports Complex',
    society: 'Sports Club',
    capacity: 300,
    registered: 156,
    status: 'upcoming' as const,
  },
  {
    id: 4,
    name: 'Poetry Slam',
    date: 'Feb 10, 4:00 PM',
    venue: 'Library Hall',
    society: 'Literary Club',
    capacity: 80,
    registered: 80,
    status: 'completed' as const,
  },
  {
    id: 5,
    name: 'Photography Workshop',
    date: 'Feb 25, 2:00 PM',
    venue: 'Room 301',
    society: 'Photo Society',
    capacity: 40,
    registered: 32,
    status: 'upcoming' as const,
  },
  {
    id: 6,
    name: 'Green Campus Drive',
    date: 'Feb 28, 8:00 AM',
    venue: 'Campus Grounds',
    society: 'Environmental Club',
    capacity: 150,
    registered: 45,
    status: 'upcoming' as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Events() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold">Events</h1>
        <p className="text-slate-500 dark:text-slate-400">
          {events.filter((e) => e.status === 'upcoming').length} upcoming •{' '}
          {events.filter((e) => e.status === 'ongoing').length} live
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {events.map((event) => (
          <motion.div key={event.id} variants={itemVariants}>
            <EventCard
              name={event.name}
              date={event.date}
              venue={event.venue}
              society={event.society}
              capacity={event.capacity}
              registered={event.registered}
              status={event.status}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
