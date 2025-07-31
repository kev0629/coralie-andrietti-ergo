import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profilePic from '../public/pictures/0.jpeg';

export default function Presentation({ openModalPres }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4 text-center">
      {/* Profile Picture */}
      <div className="mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          <Image
            src={profilePic}
            alt="Coralie Andrietti"
            width={192} // Corresponds to w-48 in Tailwind
            height={192} // Corresponds to h-48 in Tailwind
            className="rounded-full object-cover border-4 border-white shadow-xl"
          />
        </motion.div>
      </div>

      {/* Name and Title */}
      <h1 className="text-4xl font-bold text-dark mb-1">
        Coralie Andrietti
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Ergothérapeute D.E
      </p>

      {/* Contact Information */}
      <div className="text-base text-gray-500 mb-8 space-y-2">
        <p>Séance sur RDV, en cabinet ou à domicile</p>
        <p>
          <a href="mailto:coralie.andrietti@gmail.com" className="hover:text-primary transition-colors">
            coralie.andrietti@gmail.com
          </a>
          <span className="mx-2">|</span>
          <span>06.64.43.62.60</span>
        </p>
        <p>5 Chemin de Garibondy, 06110 Le Cannet</p>
      </div>

      {/* Call to Action Button */}
      <motion.button
        onClick={openModalPres}
        className="bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all"
        whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
        whileTap={{ scale: 0.98 }}
      >
        Découvrir mon parcours
      </motion.button>
    </div>
  );
}
