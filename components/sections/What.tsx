import React from "react";
import PillarCard from "@/components/ui/PillarCard";
import { pillarCards, solutions } from "@/constants/content/whatContent";

export default function What() {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-lg text-gray-700 mb-10">
        L’ergothérapeute est un professionnel de santé intervenant dans les
        secteurs sanitaire, médico-social et social pour aider toute personne,
        quel que soit son âge ou sa situation, à maintenir, restaurer ou
        développer son autonomie dans ses activités quotidiennes. Il agit à
        travers l’activité, l’adaptation de l’environnement, la rééducation et
        le conseil afin que la personne puisse faire ce qu’elle veut ou doit
        faire, de façon sûre, efficace et indépendante.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {pillarCards.map((card, index) => (
          <PillarCard key={index} icon={<card.icon size={36} />} title={card.title}>
            <p>{card.content}</p>
          </PillarCard>
        ))}
      </div>

      <div className="gap-8 items-center bg-white p-8 rounded-xl shadow-sm">
        <div className="text-left space-y-4 text-gray-700">
          <h3 className="text-2xl font-bold text-dark mb-4">
            {solutions.title}
          </h3>
          {solutions.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="text-xs text-gray-500 pt-2">
            {solutions.citation}
          </p>
        </div>
      </div>
    </div>
  );
}