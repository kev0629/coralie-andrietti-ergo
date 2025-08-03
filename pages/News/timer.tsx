import Body from "../../components/Body";
import Section from "../../components/Section";
import articlesData from "../../pages/api/articles.json";
import Image from "next/image";
import timer from "../../public/pictures/articles/timer_coco.png";

interface Article {
  id: number;
  slug: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

interface TimerProps {
  article: Article;
}

export default function Timer({ article }: TimerProps) {
  if (!article) {
    return (
      <Body>
        <Section title="Article non trouvé">
          <p>Désolé, cet article n&apos;a pas pu être trouvé.</p>
        </Section>
      </Body>
    );
  }

  return (
    <Body>
      <Section title={article.title}>
        <div className="centered-content">
          <Image
            src={timer}
            alt="timer"
            width={1920 / 2}
            height={1080 / 2}
            placeholder="blur"
          />
        </div>
        <br />
        Sûrement un de mes outils préférés, le minuteur à rebours ou timer est
        une minuterie visuelle qui permet de montrer le temps restant à
        l’enfant.
        <br />
        <br />
        Ces petites horloges, qui rappellent beaucoup le design de nos réveils
        d’il y a quelques années, sont équipées d’un disque de couleur qui va
        rétrécir au fur et à mesure que le temps passe. Cet outil permet de
        faciliter la gestion du temps.
        <br />
        <br />
        J’utilise le miens au cabinet mais il m’arrive souvent de le préconiser
        aux parents et aux enseignants pour qu’ils l’utilisent à la maison ou à
        l’école. Il suffit de simplement de régler la durée souhaitée et le
        temps restant affiché va progressivement diminuer jusqu’à un petit bip
        sonore qui marquera la fin du temps.
        <br />
        <br />
        <u>Exemples d’utilisation :</u>
        <br />
        <br />
        <b>- Gérer le temps pour une tâche définie :</b>
        <br />
        Lors de certaines tâches de la vie quotidienne, certains enfants vont
        trop vite ou au contraire ne mettent pas assez de temps. La minuterie
        peut aider l’enfant à maintenir le brossage des dents pendant 3 minutes
        ou au contraire de ne pas traîner trop longtemps sous la douche.
        <br />
        <br />
        <b>- Gestion des transitions :</b>
        <br />
        Passer d’une activité « plaisir » à une activité imposée est difficile
        pour tout le monde mais encore plus pour les enfants. La présence d’un
        timer permet à l’enfant de visualiser le temps de loisir qu’il lui reste
        avant de passer à une autre tâche.
        <br />
        <br />
        <b>- Faciliter le maintien de la concentration :</b>
        <br />
        Lors des devoirs notamment, l’utilisation de la minuterie est très
        intéressante pour que l’enfant voit combien de temps il doit maintenir
        son effort pour rester concentrer.
        <br />
        <br />
        <b>- Gérer le temps sur écran :</b>
        <br />
        L’adulte et l’enfant décide conjointement d’une durée d’écran, lorsque
        le minuteur sonne, alors il est temps d’arrêter l’activité sur écran.
        L’enfant voit le temps défiler et l’arrêt du jeux/de la vidéo est moins
        difficile. Info en + : quelques minutes avant la sonnerie, je vous
        conseille de venir vous asseoir à côté de votre enfant afin qu’il sorte
        doucement du monde virtuel et revienne dans le monde réel.
        <br />
        <br />
        <b>- Patienter :</b>
        <br />
        Dans la vie de tous les jours, certains temps de la journée sont moins
        rythmés. Par exemple, avant le repas du soir, les parents sont occupés,
        il faut patienter jusqu’à ce que le repas soit prêt. Le minuteur permet
        à l’enfant de visualiser le temps d’attente.
        <br />
        <br />
        Il y a encore plein d’autres façons d’utiliser le minuteur !<br />
        <br />
        Attention, certes l’outil est déclinable dans plein de fonctions mais
        l’utilisation doit rester ponctuelle afin de ne pas constamment rythmer
        et contrôler la vie de l’enfant.
        <br />
      </Section>
    </Body>
  );
}

export async function getStaticProps() {
  const article = articlesData.find((a) => a.slug === "timer");

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
}
