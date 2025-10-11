import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Article {
  slug: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { slug, title, date, imageUrl, description } = article;

  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <Link href={`/News/${slug}`} legacyBehavior>
        <a className="block">
          <div className="relative h-48 w-full">
            <Image
              src={imageUrl}
              alt={`Image pour l'article: ${title}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-dark mb-3 flex-grow">
              {title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <div className="mt-auto">
              <span className="font-semibold text-primary hover:text-opacity-80 transition-colors duration-300">
                Lire la suite &rarr;
              </span>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}
