import React from 'react';
import { motion } from 'framer-motion';

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export default function PillarCard({ icon, title, children }: PillarCardProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg text-center h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-primary mx-auto mb-4 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
      <div className="text-gray-600 text-sm">
        {children}
      </div>
    </motion.div>
  );
}
