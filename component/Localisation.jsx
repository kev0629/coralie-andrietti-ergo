import React from "react";
import Image from "next/image";
import Link from "next/link";
import cabinet_picture from '../public/pictures/office_pic_new.jpg'
import map from '../public/pictures/garibondy.png'

export default function Localisation(){
    const gmapLink = "https://www.google.com/maps/place/Coralie+ANDRIETTI+Ergoth%C3%A9rapeute/data=!3m1!4b1!4m2!3m1!1s0x12cdd58e043b1ed1:0x51932fb1d3a7312e"
    return(
        <>  

            <div className='g1-1'>
                <div className='centered-content'>
                    <Image src={cabinet_picture}
                           alt='coralie Andrietti'
                           width={450}
                           height={300}
                           placeholder='blur'/>
                </div>
                <div className='centered-content'>
                    <p className='text-size-mid'>Le cabinet se situe :</p>
                    {/* <Link href="https://www.google.com/maps/place/Coralie+ANDRIETTI+Ergoth%C3%A9rapeute/data=!3m1!4b1!4m2!3m1!1s0x12cdd58e043b1ed1:0x51932fb1d3a7312e" passHref={true}> */}
                    <Link href={gmapLink} passHref={true}>
                        <p className='text-size-high link'>Résidence Le Parc Victoria, Bâtiment B</p>
                    </Link>
                    <Link href={gmapLink} passHref={true}>
                    <p className='text-size-high link'>5 chemin de Garibondy</p>
                    </Link>
                    <Link href={gmapLink} passHref={true}>
                    <p className='text-size-high link'>06110 Le Cannet</p>
                    </Link>
                    <Link href={gmapLink} passHref={true}>
                    <p className='text-size-high link'>France</p>
                    </Link>
                    {/* </Link> */}
                    {/* <p>Petit coup de pouce : l'entrée se situe entre l'auto-école Colette et le salon de coiffure " le salon d'Élodie"</p> */}
                </div>
            </div>
            
            <div className='centered-content link'>
                <Link href={gmapLink} passHref={true}>
                    <Image src={map} 
                        alt='map'
                        width={2800}
                        height={1000}
                        placeholder='blur'/>
                </Link>
                
            </div>
            
            
        </>
    )
}