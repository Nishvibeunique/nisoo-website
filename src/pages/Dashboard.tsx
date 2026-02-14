// FILE: src/pages/Dashboard.tsx

import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { StatCard } from '../components/StatCard';
import { GlassCard } from '../components/GlassCard';
import { Users, Calendar, TrendingUp, Activity } from 'lucide-react';

const lineData = [
  { name: 'Jan', events: 12, members: 45 },
  { name: 'Feb', events: 19, members: 62 },
  { name: 'Mar', events: 15, members: 78 },
  { name: 'Apr', events: 22, members: 95 },
  { name: 'May', events: 28, members: 120 },
  { name: 'Jun', events: 24, members: 145 },
];

const pieData = [
  { name: 'Tech', value: 35, color: '#00f5ff' },
  { name: 'Cultural', value: 25, color: '#a855f7' },
  { name: 'Sports', value: 20, color: '#22c55e' },
  { name: 'Literary', value: 15, color: '#f59e0b' },
  { name: 'Others', value: 5, color: '#64748b' },
];

const recentActivity = [
  { id: 1, action: 'New member joined', society: 'Tech Club', time: '2m ago' },
  { id: 2, action: 'Event created', society: 'Cultural Society', time: '15m ago' },
  { id: 3, action: 'Meeting scheduled', society: 'Sports Club', time: '1h ago' },
  { id: 4, action: 'Budget approved', society: 'Literary Club', time: '2h ago' },
];

const upcomingEvents = [
  { id: 1, name: 'Hackathon 2025', date: 'Feb 15', society: 'Tech Club' },
  { id: 2, name: 'Music Night', date: 'Feb 18', society: 'Cultural' },
  { id: 3, name: 'Sports Day', date: 'Feb 22', society: 'Sports Club' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Dashboard() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h1 variants={itemVariants} className="text-2xl font-bold">
        Dashboard
      </motion.h1>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <motion.div variants={itemVariants}>
          <StatCard title="Total Societies" value={24} icon={Users} trend={12} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard title="Active Events" value={8} icon={Calendar} trend={25} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard title="Members" value={1250} icon={TrendingUp} trend={8} suffix="+" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard title="This Month" value={42} icon={Activity} trend={-5} suffix=" events" />
        </motion.div>
      </motion.div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">Activity Overview</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="name" stroke="currentColor" className="text-sm" />
                  <YAxis stroke="currentColor" className="text-sm" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '1rem',
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(12px)',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="events"
                    stroke="#00f5ff"
                    strokeWidth={2}
                    dot={{ fill: '#00f5ff' }}
                    name="Events"
                  />
                  <Line
                    type="monotone"
                    dataKey="members"
                    stroke="#a855f7"
                    strokeWidth={2}
                    dot={{ fill: '#a855f7' }}
                    name="Members"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">Society Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: '1rem',
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(12px)',
                    }}
                    formatter={(value: number) => [`${value}%`, '']}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>

      <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3 px-4 rounded-2xl bg-white/5 dark:bg-black/5 hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                >
                  <div>
                    <p className="font-medium text-sm">{item.action}</p>
                    <p className="text-xs text-slate-500">{item.society}</p>
                  </div>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3 px-4 rounded-2xl bg-white/5 dark:bg-black/5 hover:bg-white/10 dark:hover:bg-black/10 transition-colors border-l-4 border-neon-cyan"
                >
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.society}</p>
                  </div>
                  <span className="text-sm font-medium text-neon-cyan">{item.date}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
