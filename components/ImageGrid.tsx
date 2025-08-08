import Image from 'next/image';

const ImageCard = ({ i, text, answer, src }: { i: number; text: string; answer: string; src: string }) => {
  return (
    <div className="group h-80 w-80 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image
            src={`/pictures/${src}`}
            alt={`Image ${i}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-80 rounded-b-xl flex items-center justify-center">
            <p className="text-center text-base font-semibold text-gray-800 whitespace-pre-line">{text}</p>
          </div>
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
          <Image
            src={`/pictures/${src}`}
            alt={`Image ${i} back`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute inset-0 bg-white bg-opacity-90 rounded-xl"></div>
          <p className="relative text-center text-lg text-black whitespace-pre-line p-4">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const ImageGrid = () => {
  const images = [
    { id: 1, text: "Pour quel âge ?", answer: "Le cabinet accueille vos enfants du nourisson à l’âge adulte.", src: "pour-quel-age.png" },
    { id: 2, text: "C’est remboursé ?", answer: "L’ergothérapie n’est hélàs toujours pas remboursée par la sécurité sociale.", src: "remboursement-securite-sociale.png" },
    { id: 3, text: "Comment financer les séances?", answer: "Certaines aides (MDPH) ou certaines mutelles peuvent rembourser les séances de vos enfants.", src: "financement-seances-ergo.png" },
    { id: 4, text: "Doit-on forcèment faire un bilan ?", answer: "Il est indispensable de faire un bilan avant de commencer des séances.\nLe bilan permet de repérer les besoins de votre enfant, ses points forts et ses points faibles. La rééducation ne peut avoir lieu sans connaître les compétences de votre enfant et les besoins de votre famille.", src: "bilan-ergo-obligatoire.png" },
    { id: 5, text: "Combien faut-il de séances ?", answer: "Ouille ouille ouille ! Question difficile !\n\nTout dépend des objectifs à atteindre, de la motivation de l’enfant, l’asiduité etc\nParfois 2,3 séances suffisentparfois il faut plusieurs mois de séances.", src: "combien-de-seances-ergo.png" },
    { id: 6, text: "Pourquoi aller voir un ergothérapeute pour des difficultés d’écriture ?", answer: "L’ergo est le spécialiste de l’activité.  Il pourra comprendre l’origine des difficultés rencontrées en écriture manuelle et les diverses répercussions. Il proposera une rééducation adaptée et des adaptations si nécessaire (lignage des feuilles, guide doigts, changement de stylo…).", src: "ergo-difficultes-ecriture.png" },
    { id: 7, text: "Pourquoi aller voir un ergothérapeute pour mettre en place un ordinateur ?", answer: "L’ergothérapeute est incollable en aide technique. Il va préconiser l’outil et les logiciels adaptés aux capacités de votre enfant. Il va ensuite apprendre à l’enfant à maitrîser son outil grâce à des msies en situations concrétes.", src: "ergo-aide-ordinateur.png" },
    { id: 8, text: "Ergothérapeute ou Psychomotricien ? Quelles différences ?", answer: "Le psychomotricien intervient au niveau des troubles psychomoteurs pour offrir un équilibre psycho-corporel tandis que l’ergothérapeute travaille sur la fonctionnalité et la compensation pour arriver à une autonomie et/ou une indépendance dans les activités de la vie quotidienne, scolaire ou de loisirs.", src: "ergo-vs-psychomotricien.png" },
  ];

  return (
    <section id="faq" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Questions fréquentes</h2>
          <div className="mt-2 w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {images.map((image) => (
            <ImageCard key={image.id} i={image.id} text={image.text} answer={image.answer} src={image.src} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
