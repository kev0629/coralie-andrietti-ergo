import React from "react";
import Image from "next/image";

export default function Following(){
    return(
        <>  
        <div className='g03-1'>
            <div className='centered-content'><Image src='/../public/pictures/img_follow.png'alt='coralie Andrietti'  width={150} height={170}/></div>
            <div>
                <p> Le bilan d’ergothérapie a lieu au cabinet et a pour but de déterminer les objectifs d’accompagnement.<br />
				Pour les bilans adultes, il faut compter environ 1h30 de bilan.<br />
				Pour les bilans pédiatriques, la présence des parents est recommandée afin de déterminer ensemble les attentes de la famille et de l’enfant.<br />
			    Il faut compter environ 3h de bilan au total. Ces 3h sont divisées en deux rendez-vous d’environ 1h30 chacun.<br />
				Des séances seront mises en place afin d’amener la personne vers la réalisation des objectifs préalablement fixés avec elle suite au bilan. Les séances peuvent avoir lieu à l’école, en cabinet, en institution ou à domicile dans certains cas.</p>
            </div>
        </div>
            
            
        </>
    )
}