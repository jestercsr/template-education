"use client";
import React, { useState } from "react";
import { FaCode, FaPlay, FaHeart, FaRegClock, FaUsers } from "react-icons/fa6";
import { IoColorPalette } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { GoZap } from "react-icons/go";

export default function Home() {
  const [wishlist, setWishlist] = useState({});

  const courses = [
    {
      id: 1,
      title: "React Avancé: Build Real Apps",
      instructor: "Sarah Mitchell",
      category: "Développement",
      level: "Avancé",
      rating: 4.9,
      reviews: 2341,
      students: 15420,
      price: 89,
      originalPrice: 129,
      image: "bg-gradient-to-br from-blue-400 to-indigo-600",
      duration: "24h",
    },
    {
      id: 2,
      title: "Design Web UI/UX Moderne",
      instructor: "Alex Johnson",
      category: "Design",
      level: "Intermédiaire",
      rating: 4.8,
      reviews: 1856,
      students: 12300,
      price: 79,
      originalPrice: 119,
      image: "bg-gradient-to-br from-purple-400 to-pink-500",
      duration: "18h",
    },
    {
      id: 3,
      title: "Python pour Data Science",
      instructor: "Dr. James Chen",
      category: "Data Science",
      level: "Débutant",
      rating: 4.7,
      reviews: 3012,
      students: 18900,
      price: 99,
      originalPrice: 149,
      image: "bg-gradient-to-br from-indigo-400 to-blue-500",
      duration: "32h",
    },
    {
      id: 4,
      title: "JavaScript ES6+ Masterclass",
      instructor: "Emma Davis",
      category: "Développement",
      level: "Débutant",
      rating: 4.9,
      reviews: 2567,
      students: 21340,
      price: 69,
      originalPrice: 109,
      image: "bg-gradient-to-br from-yellow-400 to-orange-500",
      duration: "20h",
    },
    {
      id: 5,
      title: "Figma Design System Complet",
      instructor: "Lisa Wong",
      category: "Design",
      level: "Intermédiaire",
      rating: 4.8,
      reviews: 1423,
      students: 9870,
      price: 79,
      originalPrice: 119,
      image: "bg-gradient-to-br from-pink-400 to-purple-500",
      duration: "16h",
    },
    {
      id: 6,
      title: "Machine Learning avec TensorFlow",
      instructor: "Prof. Michael Park",
      category: "Data Science",
      level: "Avancé",
      rating: 4.9,
      reviews: 1834,
      students: 8650,
      price: 129,
      originalPrice: 179,
      image: "bg-gradient-to-br from-indigo-500 to-purple-600",
      duration: "40h",
    },
  ];

  const categories = [
    {
      name: "Développement",
      icon: FaCode,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Design",
      icon: IoColorPalette,
      color: "from-pink-500 to-purple-600",
    },
    { name: "Data Science", icon: GoZap, color: "from-orange-500 to-red-600" },
  ];

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="bg-white text-gray-900">
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
            Apprenez Sans Limites
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Accédez à des milliers de cours en ligne créés par les meilleurs
            experts du secteur
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Rechercher un cours..."
              className="flex-1 px-6 py-3 rounded-lg border-2 border-indigo-200 focus:border-indigo-600 focus:outline-none transition"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
              Rechercher
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-indigo-200">
            {[
              { label: "Étudiants", value: "500K+" },
              { label: "Cours", value: "2500+" },
              { label: "Certificats", value: "100K+" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Explorer par catégorie</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className={`p-8 rounded-xl bg-gradient-to-br ${cat.color} text-white cursor-pointer hover:shadow-xl hover:-translate-y-1 transition group`}
                >
                  <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-2xl font-bold">{cat.name}</h3>
                  <p className="text-white/80 mt-2">Découvrir →</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Nos Meilleurs Cours
              </h2>
              <p className="text-gray-600 mt-2">
                Sélection des cours les plus populaires
              </p>
            </div>
            <button className="hidden md:block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition">
              Voir tous les cours
            </button>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-indigo-200 transition group cursor-pointer"
              >
                {/* Course Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <div className={`w-full h-full ${course.image}`}></div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition">
                    <div className="opacity-0 group-hover:opacity-100 transition">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                        <FaPlay
                          size={24}
                          className="text-indigo-600 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                      {course.category}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(course.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition"
                  >
                    <FaHeart
                      size={18}
                      className={
                        wishlist[course.id]
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }
                    />
                  </button>
                </div>

                {/* Course Info */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    {course.instructor}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <IoIosStar key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {course.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({course.reviews})
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                    <span className="flex items-center gap-1">
                      <FaRegClock size={16} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUsers size={16} />
                      {(course.students / 1000).toFixed(1)}K
                    </span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        ${course.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ${course.originalPrice}
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition text-sm">
                      S'inscrire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Restez informé des nouveaux cours
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Recevez une notification dès que nous lançons un nouveau cours dans
            vos domaines d'intérêt
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:shadow-xl transition">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
