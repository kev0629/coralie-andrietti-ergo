import React from 'react';
import AccordionItem from './AccordionItem';

export default function When() {
  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-center text-gray-600 mb-8">
        Il est recommandé de consulter un ergothérapeute dès le repérage ou la suspicion de difficultés. Voici quelques exemples de situations où l&apos;ergothérapie peut aider.
      </p>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <AccordionItem title="Chez l’enfant">
          <p className="mb-2 font-semibold">Dès l’apparition de difficultés dans :</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Les activités de la vie quotidienne (repas, toilette, habillage…).</li>
            <li>Le comportement ludique, d’exploration et les interactions (peu d’intérêt pour les activités, jeux atypiques…).</li>
            <li>Les acquisitions motrices (difficultés de préhension, de gestualité, de dextérité…).</li>
            <li>L’intégration sensorielle (hypo ou hypersensibilité à certains stimuli).</li>
            <li>Les apprentissages scolaires et préscolaires (graphisme, utilisation des outils, géométrie…).</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Chez l’adulte et la personne âgée">
          <p className="mb-2 font-semibold">En cas de difficultés dans les activités quotidiennes liées à :</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Un handicap de naissance ou un handicap acquis.</li>
            <li>L’apparition d’une maladie (neurologique, rhumatismale, etc.).</li>
            <li>Le vieillissement naturel de la personne.</li>
          </ul>
          <p className="mt-4 mb-2 font-semibold">Exemples de difficultés :</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>S’alimenter, s’habiller seul, ou réaliser sa toilette.</li>
            <li>Les activités productives (aller au travail, être bien positionné à son bureau, accomplir sa journée de travail…).</li>
            <li>Les activités de loisirs.</li>
            <li>L’aménagement du domicile (entrer dans la baignoire, se relever des toilettes…).</li>
            <li>Tenir son rôle social (s’occuper d’un proche, écrire une lettre, etc.).</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
}