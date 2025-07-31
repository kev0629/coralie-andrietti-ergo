import React from 'react';
import Head from 'next/head';
import Body from '../../component/Body';
import Section from '../../component/Section';
import articles from '../api/articles.json';
import ArticleCard from '../../component/ArticleCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AllNewsPage() {
  // Sort articles by date in descending order
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Body>
      <Head>
        <title>Toutes les actualités - Coralie Andrietti</title>
        <meta name="description" content="Parcourez toutes les actualités et articles publiés par Coralie Andrietti, ergothérapeute." />
      </Head>
      <Section title="Toutes les actualités">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/#actu" passHref legacyBehavior>
            <motion.a
              className="inline-block bg-gray-200 text-dark font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              &larr; Retour à l'accueil
            </motion.a>
          </Link>
        </div>
      </Section>
    </Body>
  );
}