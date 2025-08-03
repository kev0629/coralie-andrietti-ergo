import React from 'react';
import TargetCard from './TargetCard';
import { FiUsers, FiHeart, FiShield, FiActivity } from 'react-icons/fi';

export default function Who() {
  return (
    <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            L’ergothérapeute intervient à tous moments de la vie. Il est conseillé de consulter dès que certaines activités quotidiennes sont difficiles à réaliser. Que ce soit pour :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TargetCard 
                icon={<FiUsers size={48} />} 
                title="Enfants & Adolescents"
            >
                <p>Pour les enfants ayant des troubles du développement et des apprentissages.</p>
            </TargetCard>

            <TargetCard 
                icon={<FiHeart size={48} />} 
                title="Personnes Âgées"
            >
                <p>Pour les personnes avançant en âge.</p>
            </TargetCard>

            <TargetCard 
                icon={<FiShield size={48} />} 
                title="Prévention des risques"
            >
                <p>Pour les personnes pratiquant des activités à risque.</p>
            </TargetCard>

            <TargetCard 
                icon={<FiActivity size={48} />} 
                title="Handicap & Maladie"
            >
                <p>Pour les personnes présentant des déficiences acquises (maladie ou accident) ou de naissance.</p>
            </TargetCard>
        </div>
        <p className="text-center text-sm text-gray-500 mt-12 max-w-3xl mx-auto">
            Ce listing est loin d’être exhaustif, n’hésitez pas à me contacter pour savoir si vos difficultés, ou celles de votre enfant, font partie de mon champ de compétences. Je pourrai, au besoin, vous rediriger vers d’autres professionnels.
        </p>
    </div>
  );
}
