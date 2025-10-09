import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';

// Interface pour typer les données d'un post Instagram
interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  permalink: string;
}

const Instagram = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch('/api/instagram');
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts.');
        }
        const data = await response.json();
        // On ne garde que les 8 premiers posts et on filtre les vidéos
        setPosts(data.data.filter((post: InstagramPost) => post.media_type !== 'VIDEO').slice(0, 8));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <Section title="Retrouvez-moi sur Instagram" subtitle="Dernières publications">
      <div className="container mx-auto px-4">
        {loading && <p className="text-center">Chargement des posts...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {posts.map((post) => (
              <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" className="block group">
                <img 
                  src={post.media_url} 
                  alt={post.caption || 'Post Instagram'} 
                  className="w-full h-full object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity"
                />
              </a>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
            <a
                href="https://www.instagram.com/coralie.andrietti.ergo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
                Suivre @coralie.andrietti.ergo
            </a>
        </div>
      </div>
    </Section>
  );
};

export default Instagram;
