import React from "react";
import Image from "next/image";
import cabinet_picture from "@/public/pictures/photo-cabinet-ergotherapie-exterieur.png";

const GoogleMapEmbed = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""; // Fallback to empty string
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Coralie+ANDRIETTI+Ergothérapeute,Le+Cannet`;

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Google Map Coralie Andrietti"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapSrc}
      ></iframe>
    </div>
  );
};

export default function Localisation() {
  const gmapLink =
    "https://www.google.com/maps/place/Coralie+ANDRIETTI+Ergoth%C3%A9rapeute/data=!3m1!4b1!4m2!3m1!1s0x12cdd58e043b1ed1:0x51932fb1d3a7312e";

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Info and Picture */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-dark mb-2">
              Le cabinet se situe au :
            </h3>
            <a
              href={gmapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <p>Le Parc Victoria, Bâtiment B, 1er Étage</p>
              <p>5 Chemin de Garibondy</p>
              <p>06110 Le Cannet, France</p>
            </a>
          </div>
          <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
            <Image
              src={cabinet_picture}
              alt="Photo du cabinet d'ergothérapie"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Column: Map */}
        <div className="h-full">
          <GoogleMapEmbed />
        </div>
      </div>
    </div>
  );
}
