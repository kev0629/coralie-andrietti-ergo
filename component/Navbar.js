import React from "react"
import Image from "next/image"

import logo_title from "../public/pictures/Logo_title.svg"

export default function Navbar (){
    return(
        <div className="nav">
            <Image src={logo_title} className="logo-nav" width={170} height={170} alt='Coralie Andrietti logo'/>
                <ul className="nav-titles">
                    <li className="nav-title">Présentation</li>
                    <li className="nav-title">Actualités</li>
                    <li className="nav-title">Qu'est-ce que c'est ?</li>
                    <li className="nav-title">Pour qui ?</li>
                    <li className="nav-title">Quand consulter</li>
                    <li className="nav-title">Accompagnement</li>
                    <li className="nav-title">Localisation</li>
                </ul>
        </div>
    )
}