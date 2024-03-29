import React from "react";
import Image from "next/image";
import who_pic from "../public/pictures/img_who.png";

export default function Who() {
  return (
    <>
      L’ergothérapeute intervient à tous moments de la vie : enfants, adultes,
      personnes âgées. Il est conseillé de voir un ergothérapeute dès lors que
      certaines activités de la vie quotidienne sont difficiles à réaliser. Que
      ce soit pour :
      <br />
      <div className="g03-1">
        <div className="centered-content">
          <Image
            src={who_pic}
            alt="title coralie ergo"
            placeholder="blur"
            width={200}
            height={200}
          />
        </div>
        <div>
          <ul>
            <li>des personnes avançant en âge</li>
            <li>des personnes pratiquant des activités à risque</li>
            <li>
              des enfants ayant des troubles du développement et des
              apprentissages
            </li>
            <li>
              des personnes présentant des déficiences acquises (maladie ou
              accident) ou de naissance.
            </li>
          </ul>
        </div>
      </div>
      Ce listing est loin d’être exhaustif, n’hésitez pas à contacter un
      ergothérapeute pour savoir si vos difficultés, ou celles de votre enfant,
      font partie de son champ de compétences. L’ergothérapeute pourra, au
      besoin, vous rediriger vers d’autres professionnels.
    </>
  );
}
