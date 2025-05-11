'use client';
import { motion } from 'framer-motion';

export default function CoursPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <section className="max-w-5xl mx-auto space-y-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="h-10 w-2/3 bg-gray-300 rounded animate-pulse mb-2" />
          <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="h-[300px] bg-gray-200 rounded-lg animate-pulse" />
        </motion.div>

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="h-4 bg-gray-100 rounded animate-pulse my-4"
          />
        ))}
      </section>
    </main>
  );
}
