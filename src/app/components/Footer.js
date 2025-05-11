'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-indigo-700 text-stone-300 px-6 py-10 mt-auto"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">À propos</h4>
          <ul className="space-y-1 text-sm">
            <li>Notre mission</li>
            <li>Équipe</li>
            <li>Partenaires</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Ressources</h4>
          <ul className="space-y-1 text-sm">
            <li>Blog</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>Email : contact@edunova.fr</li>
            <li>Téléphone : +33 1 23 45 67 89</li>
            <li>Adresse : 123 Rue de l'Éducation, Paris</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} EduNova — Université Numérique. Tous droits réservés.
      </div>
    </motion.footer>
  )
}
