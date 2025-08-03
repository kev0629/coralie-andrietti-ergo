import Body from "../../components/Body";
import Section from "../../components/Section";
import articlesData from "../../pages/api/articles.json";
import Image from "next/image";
import repere from "../../public/pictures/articles/reperes.png";

interface Article {
  id: number;
  slug: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

interface LeRepereDes3Props {
  article: Article;
}

export default function LeRepereDes3({ article }: LeRepereDes3Props) {
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
            src={repere}
            alt="le repère des 3-6-9-12"
            width={2474 / 2}
            height={1750 / 2}
            placeholder="blur"
          />
        </div>
        <b>Pas d’écran avant 3 ans:</b>
        <br />
        Éviter le plus possible les contacts de l’enfant avec les écrans.
        Privilégiez plutôt les jeux ou les livres. Préférez les activités qui
        stimulent les sens et la découverte. Si l’utilisation d’un écran a tout
        de même lieu, alors ce sera de façon conjointe avec vous.
        <br />
        <br />
        <b>Pas de console de jeu portable avant 6 ans:</b>
        <br />
        Fixez des règles d’utilisation des écrans: créneaux horaires, jours de
        la semaine, pourquoi ne pas utiliser un timer pour limiter le temps.
        L’utilisation d’un écran sera toujours dans le salon, surtout pas dans
        la chambre seul. Incitez votre enfant à effectuer d’autres activités,
        par exemple des activités extérieures ou des jeux de société à
        plusieurs.
        <br />
        <br />
        <b>Pas d’Internet avant 9 ans:</b>
        <br />
        L’usage de l’ordinateur, de la tablette ou de la console continue dans
        le salon afin de permettre encore une surveillance parentale. Le temps
        d’écran est toujours limité et contrôlé. L’usage d’internet doit se
        faire sous surveillance. L’usage doit impérativement être accompagné
        d’explications sur les 3 risques principaux d’internet qui sont:
        <ul>
          <li>Tout ce qui est publié sur internet est visible de tous.</li>
          <li>Tout ce qui a été publié y restera définitivement.</li>
          <li>Il ne faut pas croire tout ce que l’on trouve sur internet.</li>
        </ul>
        <br />
        <b>Internet seul à partir de 12 ans:</b>
        <br />
        L’enfant peut accéder aux réseaux sociaux mais, là encore, la guidance
        et les explications parentales sont indispensables. Il faut également
        convenir d’horaires prédéfinis de navigation, pourquoi ne pas mettre en
        place un système contrôle parental etc.
        <br />
        <br />
        <div className="note">Plus d’info sur: sergetisseron.com</div>
      </Section>
    </Body>
  );
}

export async function getStaticProps() {
  const article = articlesData.find((a) => a.slug === "le_repere_des_3");

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
