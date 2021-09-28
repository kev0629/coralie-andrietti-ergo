import React from "react"
import Image from "next/image"
import Link from 'next/link'
import logo_title from "../public/pictures/Logo_title.svg"
import Burger from "../public/pictures/burger.svg"

export default function Navbar (){
    return(
        <div className="nav">
                <Link href="/">
                    <a>
                        <Image src={logo_title} className="logo-nav" width={200} height={170} alt='Coralie Andrietti logo'/>
                    </a>
                </Link>
                <ul className="nav-titles">
                    <li id='Presentation' className="nav-title">Présentation</li>
                    <li id='news' className="nav-title"><Link href='/actu'>Actualités</Link></li>
                    <li id='what' className="nav-title">Qu'est-ce que c'est ?</li>
                    <li id='who' className="nav-title">Pour qui ?</li>
                    <li id='when' className="nav-title">Quand consulter</li>
                    <li id='following' className="nav-title">Accompagnement</li>
                    <li id='localisation' className="nav-title">Localisation</li>
                </ul>
                <div className='burger'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#4D9393">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </div>
                
        </div>
    )
}