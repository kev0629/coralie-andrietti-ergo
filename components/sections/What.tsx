import React from "react";
import PillarCard from "@/components/ui/PillarCard";
import { FiUser, FiActivity, FiHome } from "react-icons/fi";

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
        <PillarCard icon={<FiUser size={36} />} title="La Personne">
          <p>
            Chaque personne est unique. L’évaluation tient compte des forces,
            des difficultés et des facteurs psychosociaux qui influencent la
            capacité à agir au quotidien. 
          </p>
        </PillarCard>
        <PillarCard icon={<FiActivity size={36} />} title="L'Activité">
          <p>
            Vos occupations donnent un sens à votre vie. Nous travaillons
            ensemble pour réaliser les activités qui vous tiennent à cœur. 
          </p>
        </PillarCard>
        <PillarCard icon={<FiHome size={36} />} title="L'Environnement">
          <p>
            L’environnement peut être un obstacle ou un soutien. Son analyse
            permet d’identifier des adaptations et des aménagements favorisant
            l’autonomie et la participation. 
          </p>
        </PillarCard>
      </div>

      <div className="gap-8 items-center bg-white p-8 rounded-xl shadow-sm">
        <div className="text-left space-y-4 text-gray-700">
          <h3 className="text-2xl font-bold text-dark mb-4">
            Trouver des solutions pour relever les défis du quotidien
          </h3>
          <p>
            Qu’il s’agisse d’une blessure, d’une maladie, d’une déficience ou
            d’un simple retard de développement, l’ergothérapie accompagne toute
            personne dont les capacités à agir au quotidien sont limitées — pour
            travailler, étudier, se déplacer, prendre soin de soi ou simplement
            profiter de ses activités.
          </p>
          <p>
            Notre rôle est de trouver avec vous des solutions pour surmonter ces
            barrières, vous permettre d&apos;agir, de retrouver votre rôle
            social et ainsi de mener une vie plus satisfaisante.
          </p>
          <p className="text-xs text-gray-500 pt-2">
            D’après l&apos;Association Nationale Française des Ergothérapeutes
            (ANFE).
          </p>
        </div>
      </div>
    </div>
  );
}
