import Body from "../../components/Body";
import Section from "../../components/Section";
import articles from "../api/articles.json";
import Image from "next/image";
import papPps from "../../public/pictures/articles/pap_pps.png";

export default function papPpps() {
  let articleIndex = 3;
  return (
    <Body>
      <Section title={articles[articleIndex].title}>
        <div className="centered-content">
          <Image
            src={papPps}
            alt="what_plan"
            width={565 * 1.3}
            height={679 * 1.3}
            placeholder="blur"
            className="profile-pic"
          />
        </div>
        Mon enfant rencontre des difficultés à l’école, il faut adapter sa
        scolarité et lui apporter de l’aide. Que dois-je faire ?<br />
        <br />
        Le PAP (Plan d’Accompagnement Personnalisé) et le PPS (projet
        Personnalisé de Scolarisation) sont des dispositifs qui peuvent être mis
        en place de la maternelle au lycée. Ils permettent de :
        <ul>
          <li>
            faire l’inventaire des répercussions scolaires des difficultés de
            votre enfant et ainsi ;
          </li>
          <li>
            concevoir des adaptations et des aides en fonction des difficultés.
          </li>
        </ul>
        <u>PAP ou PPS : quelles différences ?</u>
        <br />
        <br />
        Le PAP est interne à l’école. Il est écrit et validé avec l’enseignant,
        le médecin scolaire, les parents et idéalement les professionnels qui
        suivent l’enfant. Il ne passe donc pas par la MPDH.
        <br />
        Le PAP peut être proposé par les parents ou les enseignants lorsque les
        difficultés de l’enfant se révèlent être durables.
        <br />
        <br />
        Le directeur de l’école est le garant de ce PAP, il assure sa mise en
        œuvre et son suivi. Cela signifie qu’en cas de mauvaise mise en place
        des mesures préconisées dans le PAP, c’est au directeur qu’il faudra
        s’adresser.
        <br />
        <br />
        Le PPS doit être validé auprès de la MPDH. Une partie du document à
        envoyer à la MPDH sera rempli lors d’une réunion pluridisciplinaire, il
        s’agit du Geva-Sco. Le PPS est parfois proposé en deuxième intention
        d’un PAP qui se révèlerait insuffisant.
        <br />
        Le PPS est proposé lorsque les difficultés visibles sont générées par un
        trouble, au sens médical du terme. Parfois il est proposé en deuxième
        intention d’un PAP lorsqu’un diagnostic a été posé.
        <br />
        <br />
        L’enseignant référent (professionnel de la MPDH) est le garant du PPS,
        il en assure le suivi et la mise en œuvre.
        <br />
        <br />
        Le PPS permet d’aller plus loin dans les adaptations proposées à
        l’enfant. Il permet notamment l’attribution d’aide humaine (AVS ou
        AESH), l’orientation dans des cursus scolaires plus pertinents pour
        l’enfant (classe ULISS, SEGPA...) ou encore la mise en place de matériel
        adapté ou de mobilier (ordinateur, tablette, siège moulé sur mesure
        ...).
        <br />
        <br />A noter, il existe aussi d’autres types d’aménagements
        pédagogiques :
        <ul>
          <li>
            Le PPRE (Programme personnalisé de réussite éducative) : il concerne
            les élèves qui ont des difficultés à acquérir certaines notions du
            socle commun de connaissances, de compétences et de culture et qui
            risquent de ne pas les maîtriser en fin de cycle. Si les difficultés
            perdurent, alors un PAP remplace le PPRE.
          </li>
          <li>
            Le PAI (Projet d’accueil individualisé) : il concerne les enfants
            atteints d’un trouble de santé invalidant (maladie chronique,
            allergie, intolérance alimentaire). Son but est d’assurer la
            sécurité de l’élève et comporte un protocole d’urgence à suivre en
            cas de problème de santé.
          </li>
        </ul>
        <div className="note">source : aefe.fr</div>
      </Section>
    </Body>
  );
}
