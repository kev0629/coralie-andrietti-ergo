import React from "react"

export default function Footer (){
    return(
        <footer className="footer">
            <div className="wrapper">
                
                <div className='one'>
                    <div>MENTIONS LÉGALE</div>
                    <div>Propriétaire du site</div>
                    <div>Mme Coralie ANDRIETTI</div>
                    <div>{"Adresse : 100 chemin de l'Olivet 06110 le Cannet"}</div>
                    <div>Tel : 06 64 43 62 60</div>
                    <div>Email : coralie.andrietti@gmail.com</div>
                    <div></div>
                    <div>Créateur du site</div>
                    <div>Site réalisé et géré par Kevin Saffioti</div>
                    <div>Hébergement chez o2switch</div>
                </div>


                <div className='two'>
                    <div>CONTACT</div>
                    <div>
                        <div>{"Adresse :   100 chemin de l'Olivet, 06110 le Cannet, France"}</div>
                        <div>Téléphone :     06.64.43.62.60</div>
                        <div>Email :     coralie.andrietti@gmail.com</div>
                    </div>
                </div>
            </div>

        </footer>
    )
}