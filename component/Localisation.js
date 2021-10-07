import React from "react";
import Image from "next/image";

export default function Localisation(){
    return(
        <>  
            <Image src='/../public/pictures/office.png'alt='coralie Andrietti'  width={450} height={300}/>
            <p>Le cabinet se situe au :</p>
            <h4>Résidence l'Estérel entrée A</h4>
            <h4>100 chemin de l'Olivet</h4>
            <h4>06110 le Cannet</h4>
            <h4>France</h4>
        </>
    )
}