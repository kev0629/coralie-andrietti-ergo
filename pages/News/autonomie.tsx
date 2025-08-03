import Body from "../../components/Body";
import Section from "../../components/Section";
import articlesData from "../../pages/api/articles.json"; // Renamed to avoid conflict with 'articles' prop

interface Article {
  id: number;
  slug: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

interface AutonomieProps {
  article: Article;
}

export default function Autonomie({ article }: AutonomieProps) {
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
        <p style={{ textIndent: 20 }}>
          Dans la vie de tous les jours, nous utilisons ces termes sans
          réellement les distinguer, et pourtant … En ergothérapie, ces deux
          termes vont de pair mais sont complétement différents !
        </p>
        <p style={{ textIndent: 10 }}>{"   1)	Autonomie"}</p>
        <p style={{ textIndent: 20 }}>
          D’origine grecque, l’autonomie vient d’<i>« autos »</i> qui signifie{" "}
          <i>soi-même</i> et <i>« nomos »</i> qui signifie <i>« la loi »</i>. On
          pourrait alors définir l’autonomie comme la capacité et/ou le droit
          d’une personne à choisir elle-même les règles de sa conduite et
          l’orientation de ses actes. Finalement, l’autonomie c’est :
        </p>
        <ul>
          <li>Pouvoir conduire sa propre vie selon ses propres convictions</li>
          <li>Mener une existence conforme à sa personnalité,</li>
          <li>Exprimer son caractère dans la vie que l’on mène. </li>
        </ul>
        <p>
          Bref :{" "}
          <b>
            être autonome c’est choisir un genre de vie et prendre des décisions
            en conséquence.
          </b>
        </p>
        <p>
          En ergothérapie, quand nous travaillons sur l’autonomie c’est :
          accompagner, optimiser les capacités de choix, favoriser l’engagement
          dans les activités …
        </p>
        <p style={{ textIndent: 10 }}>{"   2)	Indépendance"}</p>
        <p style={{ textIndent: 20 }}>
          Du latin <i>« in »</i> qui signifie <i>« privé de »</i> et{" "}
          <i>« dependere » </i> qui signifie <i>« être suspendu à »</i>.
          L’indépendance est donc l’absence de dépendance. L’indépendance c’est
          faire seul sans être aidé. Ainsi, une personne indépendante effectue
          seule les actes de la vie quotidienne. Être indépendant c’est faire
          des gestes pour répondre à des besoins donnés.
        </p>
        <p>
          Bref :{" "}
          <b>
            être indépendant c’est avoir la capacité physique de faire quelque
            chose.{" "}
          </b>
        </p>
        <p>
          En ergothérapie, quand nous travaillons sur l’indépendance c’est :
          rééduquer certaines capacités physiques, c’est adapter l’environnement
          etc.
        </p>
        <p className="flex justify-center my-4" style={{ fontSize: 25 }}>
          <b>PETIT QUIZZ :</b>
        </p>
        <p>
          CAS 1 : Madame S. a une démence de type ALZHEIMER, avec des troubles
          de la mémoire mais cette atteinte n’a pas de répercussion sur la
          réalisation des gestes de la vie quotidienne, elle mange seule, fait
          sa toilette seule. En revanche, si son fils ne l’appelle pas à l’heure
          des repas, parfois elle oublie de manger.
        </p>
        <p className="flex justify-center my-4">
          <b>Est-elle autonome ? Est-elle indépendante ?</b>
        </p>
        <p>
          Réponse : Mme S est <b>indépendante</b> dans ses activités, elle mange
          seule par exemple. Par contre, Mme S <b>n’est pas autonome</b>, elle a
          besoin du rappel de son fils pour penser à manger.
        </p>
        <p>
          CAS 2 : Monsieur G a une maladie neuro-dégénérative, il a perdu la
          préhension (faculté à attraper des objets) et la marche. Il choisit de
          rentrer en institution car il comprend qu’il lui est maintenant
          difficile de vivre seul à son domicile.
        </p>
        <p className="flex justify-center my-4">
          <b>Est-elle autonome ? Est-elle indépendante ?</b>
        </p>
        <p>
          Réponse : M G <b>est dépendant</b>, il ne peut plus effectuer
          certaines activités seuls. Cependant, il est <b>autonome</b> : il fait
          des choix de vie.
        </p>
        <div className="note">
          L’autonomie: approche conceptuelle pour une meilleure pratique, Turlan
          N. in Journal d’ergothérapie 1999 <br />
          Autonomie, indépendance et maladie d’Alzheimer, Dassié V. in Journal
          d’ergothérapie 1999 <br />
          Eude des conceptions de l’activité en ergothérapie auprès des
          personnes âgées, Meyer S., in Journal d’ergothérapie 1996 <br />
          OMS 1994 Définition Qualité de vie <br />
          ENOTHE, 2004, Approaches to teaching and learning « practicals OT
          skills. Sharing best practice, Amsterdam <br />
        </div>
      </Section>
    </Body>
  );
}

export async function getStaticProps() {
  const article = articlesData.find((a) => a.slug === "autonomie");

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
