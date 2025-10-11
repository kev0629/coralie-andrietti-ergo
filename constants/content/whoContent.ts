import { i } from "framer-motion/client";
import { FiUsers, FiHeart, FiShield, FiActivity } from "react-icons/fi";

export const targetCards = [
  {
    icon: FiUsers,
    title: "Enfants & Adolescents",
    content:
      "Du bébé à l’adolescent, ayant un simple retard de développement ou des troubles avérés.",
    id: 0,
  },
  {
    icon: FiHeart,
    title: "Personnes Âgées",
    content: "Pour les personnes avançant en âge.",
    id: 1,
  },
  {
    icon: FiShield,
    title: "Prévention des risques",
    content:
      "Pour prévenir et limiter les risques et les impacts des aléas de la vie.",
    id: 2,
  },
  {
    icon: FiActivity,
    title: "Handicap & Maladie",
    content:
      "Pour les personnes présentant des déficiences acquises (maladie ou accident) ou de naissance.",
    id: 3,
  },
];
