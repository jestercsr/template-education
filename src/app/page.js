'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="h-[75vh] flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Apprenez à votre rythme
        </motion.h2>
        <p className="text-gray-600 text-lg">Des cours en ligne pour tous les niveaux</p>
      </section>

      <section className="px-6 py-16">
        <motion.h3 className="text-2xl font-semibold mb-8">Cours populaires</motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-44 bg-gray-200 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
