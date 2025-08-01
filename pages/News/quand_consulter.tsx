import Body from "../../components/Body";
import Section from "../../components/Section";
import articles from "../api/articles.json";
import Image from "next/image";
import quand1 from "../../public/pictures/articles/quand1.jpeg";
import quand2 from "../../public/pictures/articles/quand2.jpeg";
import quand3 from "../../public/pictures/articles/quand3.jpeg";

export default function QuandConsulter() {
  var articleIndex = 2;
  return (
    <Body>
      <Section title={articles[articleIndex].title}>
        Ce sont sûrement les questions les plus fréquentes qui me sont posées
        lorsque je dois intervenir dans les écoles.
        <br />
        Quasiment à chacune de mes interventions, un enseignant m’aborde pour me
        parler d’un élève qui lui paraît avoir des difficultés.
        <br />
        Systématiquement, l’enseignant me demande mon avis sur la pertinence
        d’envoyer cet enfant consulter un ergothérapeute.
        <br />
        <div className="centered-content">
          <Image
            src={quand1}
            alt="maternelle"
            width={1389 / 1.5}
            height={1965 / 1.5}
            placeholder="blur"
          />
          <br />
          <Image
            src={quand2}
            alt="primaire"
            width={1389 / 1.5}
            height={1965 / 1.5}
            placeholder="blur"
          />
          <br />
          <Image
            src={quand3}
            alt="collège lycée"
            width={1389 / 1.5}
            height={1965 / 1.5}
            placeholder="blur"
          />
        </div>
        <br />
        Merci aux ergothérapeutes qui sont à l’origine de ces fiches pour aider
        les enseignants en milieu scolaire. J’espère que leur diffusion
        permettra une action précoce auprès des bambins, enfants et adolescents
        que nous suivons dans leur cursus scolaire.
        <br />
      </Section>
    </Body>
  );
}
