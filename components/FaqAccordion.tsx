import AccordionItem from "./AccordionItem";

const FaqAccordion = () => {
  const faqItems = [
    {
      id: 1,
      question: "Pour quel âge ?",
      answer: "Le cabinet accueille vos enfants du nourisson à l’âge adulte.",
    },
    {
      id: 2,
      question: "C’est remboursé ?",
      answer:
        "L’ergothérapie n’est hélàs toujours pas remboursée par la sécurité sociale.",
    },
    {
      id: 3,
      question: "Comment financer les séances?",
      answer:
        "Certaines aides (MDPH) ou certaines mutelles peuvent rembourser les séances de vos enfants.",
    },
    {
      id: 4,
      question: "Doit-on forcèment faire un bilan ?",
      answer:
        "Il est indispensable de faire un bilan avant de commencer des séances.\nLe bilan permet de repérer les besoins de votre enfant, ses points forts et ses points faibles. La rééducation ne peut avoir lieu sans connaître les compétences de votre enfant et les besoins de votre famille.",
    },
    {
      id: 5,
      question: "Combien faut-il de séances ?",
      answer:
        "Ouille ouille ouille ! Question difficile !\n\nTout dépend des objectifs à atteindre, de la motivation de l’enfant, l’asiduité etc\nParfois 2,3 séances suffisentparfois il faut plusieurs mois de séances.",
    },
    {
      id: 6,
      question:
        "Pourquoi aller voir un ergothérapeute pour des difficultés d’écriture ?",
      answer:
        "L’ergo est le spécialiste de l’activité.  Il pourra comprendre l’origine des difficultés rencontrées en écriture manuelle et les diverses répercussions. Il proposera une rééducation adaptée et des adaptations si nécessaire (lignage des feuilles, guide doigts, changement de stylo…).",
    },
    {
      id: 7,
      question:
        "Pourquoi aller voir un ergothérapeute pour mettre en place un ordinateur ?",
      answer:
        "L’ergothérapeute est incollable en aide technique. Il va préconiser l’outil et les logiciels adaptés aux capacités de votre enfant. Il va ensuite apprendre à l’enfant à maitrîser son outil grâce à des msies en situations concrétes.",
    },
    {
      id: 8,
      question: "Ergothérapeute ou Psychomotricien ? Quelles différences ?",
      answer:
        "Le psychomotricien intervient au niveau des troubles psychomoteurs pour offrir un équilibre psycho-corporel tandis que l’ergothérapeute travaille sur la fonctionnalité et la compensation pour arriver à une autonomie et/ou une indépendance dans les activités de la vie quotidienne, scolaire ou de loisirs.",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 md:gap-8">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} title={item.question}>
            <p className="whitespace-pre-line">{item.answer}</p>
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
