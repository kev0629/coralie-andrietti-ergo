import React from "react";
import Image from "next/image";

export default function When(){
    return(
        <>
            <p><u>Chez l’enfant : </u></p>
             Il est recommandé de consulter un ergothérapeute dès le repérage ou la suspicion :
            <div className='g1-03'>
                
                <div>
                    <ul>
                        <li>De difficultés dans les activités de la vie quotidienne (repas, toilette, habillage…)</li>
                        <li>De difficultés dans le comportement ludique, d’exploration et dans les interactions (peu d’intérêt pour les activités proposées, jeux atypiques…)</li>
                        <li>De retard des acquisitions motrices (difficultés de préhension, de gestualité, de dextérité…)</li>
                        <li>De troubles de l’intégration sensorielle (hypo/hypersensibilité)</li>
                        <li>De difficultés d’acquisition des attendus scolaires et préscolaires (pré-graphisme, graphisme, utilisation des ustensiles de la trousse, géométrie …)</li>
                    </ul>
                </div>
                <div className='centered-content'>
                    <Image src='/../public/pictures/img_when.jpg'alt='title coralie ergo' width={150} height={100}/>
                </div>
            </div>
        
            <p><u>Chez l’adulte et la personne âgée:</u> </p>
            <p>Il est recommandé de consulter un ergothérapeute dès le repérage ou l’arrivée de difficultés dans les activités de la vie quotidienne qui peuvent être liées à un handicap de naissance,
                un handicap acquis,
                l’apparition d’une maladie ou le vieillissement normal de la personne.</p>
                <div className='g03-1'>
                    <div className='centered-content'><Image src='/../public/pictures/img_when_2.jpg'alt='title coralie ergo' width={180} height={100}/></div>
                    <div>
                        <ul>
                            <li>De difficultés dans les activités de la vie quotidienne (s’alimenter, s’habiller seul…)</li>
                            <li>De difficultés dans les activités productives (aller au travail, être bien positionné à son bureau, accomplir sa journée de travail…)</li>
                            <li>De difficultés dans les activités de loisirs</li>
                            <li>De difficultés pour accéder à son domicile (difficultés pour rentrer dans la baignoire, pour se relever des toilettes …)</li>
                            <li>Des difficultés à accomplir ses rôles sociaux (tenir un bébé dans les bras, écrire une lettre à un proche …)</li>
                        </ul>
                    </div>
                </div>
                
               
        </>
    )
}