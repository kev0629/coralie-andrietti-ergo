import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
import Image from "next/image";

// Interface pour les données du post Instagram
interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  like_count: number;
  comments_count: number;
}

// Icône Instagram
const InstagramIcon = () => (
  <svg
    className="w-6 h-6 drop-shadow-md"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Instagram = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch("/api/instagram");
        if (!response.ok) {
          throw new Error("Échec de la récupération des posts Instagram.");
        }
        const data = await response.json();
        console.log("data:", data);
        setPosts(
          data.data
            .filter(
              (post: InstagramPost) =>
                post.media_type === "IMAGE" ||
                post.media_type === "CAROUSEL_ALBUM"
            )
            .slice(0, 12)
        );
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Une erreur inconnue est survenue.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  console.log("posts:", posts);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* En-tête */}
      <div className="flex items-center justify-between mb-8">
        <a
          href="https://www.instagram.com/coralie_andrietti_ergo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3"
        >
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-offset-2 ring-pink-500">
            <Image
              src="/pictures/photo-coralie-andrietti-ergotherapeute.jpeg"
              alt="Coralie Andrietti"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <p className="font-bold text-lg text-gray-800">
              coralie_andrietti_ergo
            </p>
            <p className="text-sm text-gray-500">Suivez-moi sur Instagram</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/coralie_andrietti_ergo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-semibold py-2 px-5 rounded-lg text-base hover:bg-blue-600 transition-colors hidden sm:block"
        >
          Suivre
        </a>
      </div>

      {/* Carrousel */}
      {loading && (
        <p className="text-center text-gray-500">
          Chargement du feed Instagram...
        </p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={1.2}
          centeredSlides={false}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2.5, spaceBetween: 25 },
            1024: { slidesPerView: 3.5, spaceBetween: 30 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={post.media_url}
                  alt={post.caption || "Post Instagram"}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-2 left-2 z-10">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-white">
                    <Image
                      src="/pictures/photo-coralie-andrietti-ergotherapeute.jpeg"
                      alt="Coralie Andrietti"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 z-10">
                  <InstagramIcon />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col items-center justify-center p-4 z-20">
                  <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-5 m-8">
                    <InstagramIcon />
                  </div>
                  <p className="text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-5">
                    {post.caption}
                  </p>
                  <div className="flex justify-center space-x-4 mt-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{post.like_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.836 8.836 0 01-4.43-1.262L3.438 17.45a1 1 0 01-1.34-1.48l1.658-2.53C2.63 12.042 2 10.08 2 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.837 13.22c.25.11.51.2.78.27a6.956 6.956 0 004.383 0c.27-.07.53-.16.78-.27a5.013 5.013 0 013.22 0c.25.11.51.2.78.27a6.956 6.956 0 004.383 0c.27-.07.53-.16.78-.27a5.013 5.013 0 013.22 0"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{post.comments_count}</span>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Instagram;
