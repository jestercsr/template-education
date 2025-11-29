"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiMenu5Line } from "react-icons/ri";
import { HiXMark } from "react-icons/hi2";
import { GrFormSearch } from "react-icons/gr";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-b border-indigo-100 sticky top-0 z-50 backdrop-blur-md bg-white/95"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
            EduPro
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="/"
              className="hover:text-indigo-600 transition font-medium"
            >
              Accueil
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 transition font-medium"
            >
              Cours
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 transition font-medium"
            >
              Instructeurs
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 transition font-medium"
            >
              Communauté
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg transition">
              <GrFormSearch size={20} />
            </button>
            <button className="px-6 py-2 text-indigo-600 font-semibold hover:bg-indigo-50 rounded-lg transition hidden md:block">
              Connexion
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition hidden md:block">
              S'inscrire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <HiXMark size={24} />
              ) : (
                <RiMenu5Line size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-indigo-100 pt-4 space-y-2">
            <a href="/" className="block py-2 hover:text-indigo-600">
              Accueil
            </a>
            <a href="#" className="block py-2 hover:text-indigo-600">
              Cours
            </a>
            <a href="#" className="block py-2 hover:text-indigo-600">
              Instructeurs
            </a>
            <a href="#" className="block py-2 hover:text-indigo-600">
              Communauté
            </a>
            <button className="w-full mt-4 px-4 py-2 text-indigo-600 font-semibold hover:bg-indigo-50 rounded-lg transition">
              Connexion
            </button>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg">
              S'inscrire
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
