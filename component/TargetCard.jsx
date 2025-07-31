import React from 'react';
import { motion } from 'framer-motion';

export default function TargetCard({ icon, title, children }) {
  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-md text-center h-full transform hover:-translate-y-2 transition-transform duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-primary mx-auto mb-4 w-16 h-16 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-dark mb-3">{title}</h3>
      <div className="text-gray-600">
        {children}
      </div>
    </motion.div>
  );
}
