import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaInstagram, FaHeart, FaComment } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  like_count: number;
  comments_count: number;
}

const Instagram = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const url = "https://www.instagram.com/coralie_andrietti_ergo";

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch("/api/instagram");
        if (!response.ok) {
          throw new Error("Échec de la récupération des posts Instagram.");
        }
        const data = await response.json();
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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* En-tête */}
      <div className="flex items-center justify-between mb-8">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3"
        >
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-offset-2 ring-pink-500">
            <Image
              src="/pictures/photo-coralie-andrietti-ergotherapeute.jpeg"
              alt="Coralie Andrietti"
              fill
              sizes="3.5rem"
              className="object-cover"
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
          href={url}
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
                  fill
                  sizes="(max-width: 640px) 83.33vw, (max-width: 1024px) 40vw, 28.57vw"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-4 left-4 z-10 flex items-center space-x-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-white">
                    <Image
                      src="/pictures/photo-coralie-andrietti-ergotherapeute.jpeg"
                      alt="Coralie Andrietti"
                      fill
                      sizes="2rem"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center space-x-1">
                    <p className="text-white font-bold text-sm drop-shadow-lg">
                      coralie_andrietti_ergo
                    </p>
                    <MdVerified className="text-blue-500" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 z-10">
                  <FaInstagram className="w-6 h-6 text-white drop-shadow-md" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col items-center justify-center p-4 z-20">
                  <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-5 m-8">
                    <FaInstagram className="text-white w-7 h-7" />
                  </div>
                  <p className="text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-5">
                    {post.caption}
                  </p>
                  <div className="flex justify-center space-x-4 mt-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-1">
                      <FaHeart />
                      <span>{post.like_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaComment />
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
