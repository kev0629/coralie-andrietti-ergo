import React from "react";
import Image from "next/image";

interface PresentationProps {
  openModalPres: () => void;
}

export default function Presentation({ openModalPres }: PresentationProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="relative w-full max-w-lg h-auto aspect-square mt-20">
        <Image
          src="/pictures/logo-coralie-andrietti-ergo-accueil.svg"
          alt="Logo Coralie Andrietti"
          fill
          className="object-contain"
          priority
        />
      </div>
      <button onClick={openModalPres} className="mt-28 bg-gray-500 bg-opacity-50 text-white font-bold py-6 px-16 text-2xl rounded-full shadow-xl hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all transform hover:scale-110">
        Me contacter
      </button>
    </div>
  );
}