import React from "react";
import Image from "next/image";
import profilePic from '../public/pictures/0.jpeg'
import title from '../public/pictures/Coralie_ergo_tittle.png'

export default function Presentation(){
    return(
        <div className='centered-content'>
            <div className="profile-pic" style={{height: "auto"}}>
                <Image
                    src={profilePic}
                    alt='coralie Andrietti'
                    width={175}
                    height={203}
                    placeholder='blur'
                    className='profile-pic'
                    />
            </div>
            <div className='title'>
                    <Image 
                    src={title}
                    alt='title coralie ergo'
                    width={350}
                    height={90} 
                    />
            </div>
            <div>
                <button type="button" name="myButton" className='button'>Mon Parcours</button>
            </div>
            <div style={{fontSize:'20px'}}>
                <div style={{marginBottom:"25px",marginTop:"25px"}}>
                    <div>Séance sur RDV</div>
                    <div>En cabinet ou à domicile</div>
                </div>
                <div style={{marginBottom:"25px",marginTop:"25px"}}>
                    <div>Résidence l’Estérel</div>
                    <div> Bat A 100 chemin de l’Olivet</div>
                    <div>06110 Le Cannet </div>
                </div>
                <div style={{marginBottom:"25px",marginTop:"25px"}}>coralie.andrietti@gmail.com 06.64.43.62.60</div>
            </div>
            
        </div>
    )
}