import Body from "../../components/Body";
import Section from "../../components/Section";
import Image from "next/image";
import articles from "../../pages/api/articles.json";

import inclusion from "../../public/pictures/articles/inclusion.png";
import exclusion from "../../public/pictures/articles/exclusion.png";
import integration from "../../public/pictures/articles/integration.png";
import separation from "../../public/pictures/articles/separation.png";

interface Article {
  id: number;
  slug: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

export default function Inclusion() {
  var articleIndex = 9;
  return (
    <Body>
      <Section title={articles[articleIndex].title}>
        <div className="centered-content">
          <p>
            <b style={{ fontSize: 20 }}>
              L’inclusion est un terme que l’on utilise souvent dans notre vie
              quotidienne. En tant qu’ergothérapeute, l’inclusion n’est pas
              seulement un « terme », l’inclusion fait partie de nos combats.
            </b>
          </p>
          <ul>
            <li>
              <b style={{ fontSize: 20 }}>
                <u>L’inclusion</u>
              </b>{" "}
              c’est : «{" "}
              <i>
                faire en sorte que notre société considère l’ensemble des
                personnes en situation de handicap comme « normal »
              </i>
              . A ce jour, l’inclusion est le terme retenu dans les textes
              officiels.
            </li>
          </ul>
        </div>
        <p style={{ textIndent: 20 }}>
          Ainsi, pour être dans l’inclusion, chaque personne doit pouvoir
          accéder normalement à tout ce qui est normal de pouvoir avoir : avoir
          un logement accessible, accéder à n’importe quel commerce, être
          scolarisé, étudier, travailler, avoir une vie sentimentale, affective
          et sexuelle, accéder à la culture …
        </p>
        <div className="centered-content">
          <Image
            src={inclusion}
            alt="inclusion"
            width={616 / 2}
            height={562 / 2}
          />
        </div>
        <p>
          <u>Exemple :</u> Les immeubles récents sont obligatoirement
          accessibles depuis la loi du 11 février 2005 qui prône l’égalité des
          droits et des chances, la participation et la citoyenneté des
          personnes en situation de handicap.
        </p>
        <p>
          Toutefois, malgré une nette progression de l’inclusion dans notre
          quotidien, actuellement, les personnes en situation de handicap sont
          encore confrontées à :
        </p>
        <ul>
          <li>
            <b style={{ fontSize: 20 }}>
              <u>L’exclusion :</u>
            </b>{" "}
            les personnes sont mises à l’écart d’un ensemble. D’après le conseil
            national des politiques de lutte contre la pauvreté et l’exclusion
            sociale, l’exclusion correspond à{" "}
            <i>
              « non-réalisation des droits sociaux de base garantis par la loi »
            </i>
            .
          </li>
        </ul>
        <div className="centered-content">
          <i>
            Selon l’INSEE « 41% de jeunes handicapés affirment souffrir de
            discrimination, notamment dans le milieu professionnel ».
          </i>
          <br />
          <Image
            src={exclusion}
            alt="exclusion"
            width={628 / 2}
            height={570 / 2}
          />
        </div>
        <p>
          <u>Exemple (qui existe réellement) :</u> dans un bar à Montpellier,
          les toilettes « handicapées » sont accessibles après quelques marches
          d’escaliers … Finalement, les personnes n’ont donc accès à aucun WC.
        </p>
        <ul>
          <li>
            <b style={{ fontSize: 20 }}>
              <u>La séparation :</u>
            </b>{" "}
            acte de séparer, est très présente dans notre société actuelle.
          </li>
        </ul>
        <div className="centered-content">
          <Image
            src={separation}
            alt="separation"
            width={608 / 2}
            height={570 / 2}
          />
        </div>
        <p>
          <u>Anecdote, malheureusement, observée :</u> pour rentrer chez lui, un
          père de famille en fauteuil roulant, doit passer par les garages, qui
          ne comportent aucune marche, au lieu d’accéder à son appartement par
          le hall principal pourvu de quelques marches.
        </p>
        <ul>
          <li>
            <b style={{ fontSize: 20 }}>
              <u>L’intégration</u>
            </b>
            , revient à dire que les personnes en situation de handicap sont
            intégrées dans notre société. D’après le philosophe Lalande
            l’intégration est l’
            <i>
              « établissement d’une interdépendance plus étroite entre les
              membres d’une société »
            </i>
            .{" "}
          </li>
        </ul>
        <div className="centered-content">
          <Image
            src={integration}
            alt="integration"
            width={608 / 2}
            height={558 / 2}
          />
        </div>
        <p>
          <u>Exemple :</u> Les écoles accueillent des élèves en situation de
          handicap dans des classes spécialisées (ULIS, SEGPA). Ces enfants sont
          donc intégrés dans le système scolaire classique plutôt que d’être
          dans des établissements spécialisés.
        </p>
        <p>
          Or, être intégrée ce n’est pas suffisant. Être « intégré » dans un
          ensemble marque une différence entre les personnes. L’intégration est
          déjà, certes, un progrès dans notre prise en compte du handicap, mais
          elle n’est pas encore suffisante. L’inclusion doit être notre objectif
          ultime.
        </p>
        <br />
        <div className="centered-content" style={{ fontSize: 20 }}>
          <b>
            L’inclusion est encore loin d’être généralisée. Depuis des années,
            la société incite la personne en situation de handicap à s’adapter à
            son environnement. Nous, ergothérapeutes, mais aussi tous les
            métiers qui s’articulent autour du handicap, nous souhaitons et nous
            nous battons pour que ce soit la société qui s’adapte aux personnes
            en situation de handicap.
          </b>
        </div>
        <br />
        <br />
        <p className="note">
          Sources : déclaration de Madrid 2022 ; insee.fr ; Les personnes en
          situation de handicap – Claude Hamonet ; légifrance.gouv.fr ;
          handicap.gouv.fr
        </p>
      </Section>
    </Body>
  );
}
