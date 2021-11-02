import React from "react";
import Image from "next/image";
import { Link } from "next/link";
//import cabinetPicture from './../public/pictures/office.png'
import map from '../public/pictures/map.png'

export default function Localisation(){

    return(
        <>  

            <div className='g1-1'>
                <div className='centered-content'>
                    {/* <Image src={cabinetPicture}
                           alt='coralie Andrietti'
                           width={450}
                           height={300}
                           placeholder='blur'/> */}
                </div>
                <div className='centered-content'>
                    <p className='text-size-mid'>Le cabinet se situe au :</p>
                    {/* <Link href={gmapLink} passHref={true}> */}
                    <p className='text-size-high'>Résidence l'Estérel entrée A</p>
                    <p className='text-size-high'>100 chemin de l'Olivet</p>
                    <p className='text-size-high'>06110 le Cannet</p>
                    <p className='text-size-high'>France</p>
                    {/* </Link> */}
                    <p>Petit coup de pouce : l'entrée se situe entre l'auto-école Colette et le salon de coiffure " le salon d'Élodie"</p>
                </div>
            </div>
            <div className='centered-content'>
                <Image src={map} 
                       alt='map'
                       width={2800}
                       height={1000}
                       placeholder='blur'/>
            </div>
            
            
        </>
    )
}