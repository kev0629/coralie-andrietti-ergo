import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Body from '../../component/Body';
import Section from '../../component/Section';
import articles from '../api/articles.json';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Body>
        <Section title="Article non trouvé">
          <p>Désolé, cet article n&apos;a pas pu être trouvé.</p>
          <div className="text-center mt-8">
            <Link href="/News" passHref legacyBehavior>
              <motion.a className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90">
                Voir tous les articles
              </motion.a>
            </Link>
          </div>
        </Section>
      </Body>
    );
  }

  return (
    <Body>
      <Head>
        <title>{`${article.title} - Coralie Andrietti`}</title>
        <meta name="description" content={article.description} />
      </Head>
      <Section title={article.title}>
        <div className="max-w-3xl mx-auto">
            <p className="text-gray-500 text-center mb-8">Publié le {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            {/* This is where you would render the actual article content */}
            {/* For now, it just shows a placeholder */}
            <div className="prose lg:prose-xl max-w-none mx-auto">
                <p>Le contenu de l&apos;article pour &quot;{article.title}&quot; sera affiché ici.</p>
                <p>Pour l&apos;instant, les anciennes pages comme <code>{article.slug}.jsx</code> sont toujours utilisées. Il faudra migrer leur contenu ici.</p>
            </div>

            <div className="text-center mt-12">
                <Link href="/News" passHref legacyBehavior>
                    <motion.a
                    className="inline-block bg-gray-200 text-dark font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-all"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    >
                    &larr; Voir tous les articles
                    </motion.a>
                </Link>
            </div>
        </div>
      </Section>
    </Body>
  );
}
