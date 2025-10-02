import React from "react";
import { FiPhoneCall, FiFileText, FiRepeat } from "react-icons/fi"; // Using react-icons for modern icons
import { motion } from "framer-motion";

interface StepCardProps {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}

const StepCard = ({ icon, title, children, isLast = false }: StepCardProps) => (
  <div className="flex">
    {/* Icon and Vertical Line */}
    <div className="flex flex-col items-center mr-6">
      <div className="flex-shrink-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      {!isLast && <div className="w-px h-full bg-gray-300 mt-2"></div>}
    </div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-lg shadow-md w-full mb-8"
    >
      <h3 className="text-2xl font-bold text-dark mb-3">{title}</h3>
      <div className="text-gray-600 space-y-3">{children}</div>
    </motion.div>
  </div>
);

export default function Following() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <StepCard
        icon={<FiPhoneCall size={24} />}
        title="1. Prise de contact & analyse des besoins"
      >
        <p>
          Le premier contact, souvent par téléphone, nous permet d’échanger sur
          vos besoins et de déterminer si un accompagnement en ergothérapie est
          pertinent.
        </p>
      </StepCard>

      <StepCard
        icon={<FiFileText size={24} />}
        title="2. Le Bilan d'ergothérapie"
      >
        <p>
          Le bilan a lieu au cabinet et vise à définir des objectifs clairs et
          personnalisés. Il met en lumière les compétences à développer ainsi
          que les points forts sur lesquels nous nous appuierons.
        </p>
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>
            <b>Pour les enfants :</b> Le bilan dure environ 3 heures. La
            présence des parents est souhaitée au début pour créer un cadre
            rassurant et définir ensemble les attentes.
          </li>
          <li>
            <b>Pour les adultes :</b> Le bilan dure environ 1h30.
          </li>
        </ul>
      </StepCard>

      <StepCard
        icon={<FiRepeat size={24} />}
        title="3. Les Séances de suivi"
        isLast={true}
      >
        <p>
          Suite au bilan, des séances de rééducation sont mises en place pour
          atteindre les objectifs fixés. Elles durent généralement 45 minutes.
        </p>
        <p className="mt-2">
          Les séances peuvent se dérouler au cabinet, à domicile, à l’école ou
          en institution, en fonction des besoins spécifiques de chaque
          personne.
        </p>
      </StepCard>
    </div>
  );
}
