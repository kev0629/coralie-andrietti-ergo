import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Interface pour typer les données d'un post Instagram
interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
}

const Instagram = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch("/api/instagram");
        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts.");
        }
        const data = await response.json();
        setPosts(
          data.data
            .filter((post: InstagramPost) => post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM")
            .slice(0, 12) // On prend un peu plus de posts pour le carrousel
        );
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <p className="text-center">Chargement du feed Instagram...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="pb-12" // Padding bottom pour la pagination
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={post.media_url}
                  alt={post.caption || "Post Instagram"}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {post.caption?.substring(0, 150)}
                    {post.caption && post.caption.length > 150 && "..."}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="text-center mt-8">
        <a
          href="https://www.instagram.com/coralie.andrietti.ergo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
          style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}
        >
          Suivre @coralie.andrietti.ergo sur Instagram
        </a>
      </div>
    </div>
  );
};

export default Instagram;
