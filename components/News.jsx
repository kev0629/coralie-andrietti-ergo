import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import articles from '../pages/api/articles.json';
import ArticleCard from './ArticleCard';

export default function News() {
  // Sort articles by date in descending order and take the 4 most recent
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <div className="text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {recentArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <Link href="/News" passHref legacyBehavior>
        <motion.a
          className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all"
          whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
          whileTap={{ scale: 0.98 }}
        >
          Voir toutes les actualités
        </motion.a>
      </Link>
    </div>
  );
}