import React from "react";
import Image from "next/image";
import follow_pic from '../public/pictures/img_follow.png'

export default function Following(){
    return(
        <>  
        <div className='g03-1'>
            <div className='centered-content'><Image src={follow_pic} alt='coralie Andrietti'  width={225} height={255} placeholder='blur'/></div>
            <div>
                <p> Le bilan d’ergothérapie a lieu au cabinet et a pour but de déterminer les objectifs d’accompagnement.<br /><br />
				<u>Pour les bilans pédiatriques,</u> la présence d'un ou des parents est préférable pour la première partie du bilan afin de déterminer ensemble les attentes de la famille et de l’enfant. De plus, la présence des parents crée un cadre rassurant qui va mettre l'enfant plus à l'aise avant de continuer le bilan seul avec l'ergothérapeute.  <br />
			    Il faut compter environ 3h de bilan au total.<br /><br />
                <u>Pour les bilans adultes,</u> il faut compter environ 1h30 de bilan.<br /><br />
				Le bilan va mettre en évidence les compétences à développer de la personne mais également ses points forts.   <br />
                Des séances seront mises en place afin d’amener la personne vers la réalisation des objectifs préalablement fixés avec elle suite au bilan. Les séances peuvent avoir lieu à l’école, en cabinet, en institution ou à domicile dans certains cas. En général, les séances durent 45 minutes. </p>
            </div>
        </div>
            
            
        </>
    )
}