import React from "react";
import TargetCard from "@/components/ui/TargetCard";
import { targetCards } from "@/constants/content/whoContent";

export default function Who() {
  return (
    <div className="max-w-6xl mx-auto">
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        L’ergothérapeute intervient à tous moments de la vie. Il est conseillé
        de consulter dès que certaines activités quotidiennes sont difficiles à
        réaliser. Que ce soit pour :
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {targetCards.map((card) => (
          <TargetCard
            key={card.id}
            icon={<card.icon size={48} />}
            title={card.title}
          >
            <p>{card.content}</p>
          </TargetCard>
        ))}
      </div>
      <p className="text-center text-sm text-gray-500 mt-12 max-w-3xl mx-auto">
        Ce listing est loin d’être exhaustif. N’hésitez pas à nous contacter
        pour savoir si vos difficultés, ou celles de votre enfant, font partie
        de notre champ de compétences. Nous pourrons, au besoin, vous rediriger
        vers d’autres professionnels.
      </p>
    </div>
  );
}
