'use client';
import { motion } from 'framer-motion';
import React from 'react'

export default function Navbar() {
  return (
    <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-8 py-4 flex justify-between items-center bg-indigo-600 text-white shadow sticky top-0 z-50"
    >
      <h1 className="text-2xl font-semibold"><a href="/">🎓 EduNova</a></h1>
      <div className="flex gap-6 text-sm font-medium">
        <a href="/" className="hover:underline">Accueil</a>
        <a href="/cours" className="hover:underline">Cours</a>
        <a href="#" className="hover:underline">Inscriptions</a>
      </div>
    </motion.nav>
  )
}
