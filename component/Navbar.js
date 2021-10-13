import React from "react"
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from "next/router"
import logo_title from "../public/pictures/Logo_title.svg"
import Burger from "../public/pictures/burger.svg"
import {Link as ScrollLink} from 'react-scroll'
import Route from "./Route"

export default function Navbar (){
    const router = useRouter()
    console.log(router)
    return(
        <div className="nav">
                <Route to='home' link='/#home' nav={false}>
                    <Image src={logo_title} className="logo-nav" width={200} height={170} alt='Coralie Andrietti logo'/>
                </Route>    
                <ul className="nav-titles">

                    <Route to='home' link='/' nav={true}>
                        <li id='Presentation' className='nav-title'>
                            Présentation
                        </li>
                    </Route>  
                    <Route to='actu' link='/#actu' nav={true}>
                        <li id='news' className='nav-title'>
                            Actualités
                        </li>
                    </Route>
                    <Route to='What' link='/#What' nav={true}>
                        <li id='what' className='nav-title'>
                            Qu'est-ce que c'est ?
                        </li>
                    </Route>
                    <Route to='Who' link='/#Who' nav={true}>
                        <li id='who' className='nav-title'>
                            Pour qui ?
                        </li>
                    </Route>
                    <Route to='When' link='/#When' nav={true}>
                        <li id='when' className='nav-title'>
                            Quand consulter   
                        </li>
                    </Route>
                    <Route to='Follow' link='/#Follow' nav={true}>
                        <li id='following' className='nav-title'>
                            Accompagnement
                        </li>
                    </Route>
                    <Route to='Localisation' link='/#Localisation' nav={true}>
                        <li id='localisation' className='nav-title'>
                            Localisation
                        </li>
                    </Route>
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