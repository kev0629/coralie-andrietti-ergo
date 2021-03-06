
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'
import Image from 'next/image'

import feuille1 from '../../public/pictures/articles/feuille1.jpg'
import feuille2 from '../../public/pictures/articles/feuille2.png'
import feuille3 from '../../public/pictures/articles/feuille3.png'
import feuille4 from '../../public/pictures/articles/feuille4.png'

export default function placerSaFeuilles() {
    var articleIndex = 4
    return (
        <Body>
            <Section title={articles[articleIndex].title}>
                <div className="centered-content">Petit truc et astuce facile à mettre en place pour faciliter le geste graphique N°1</div><br/>
                Lorsque j’étais à l’école primaire, ma maîtresse m’avait appris à placer ma feuille bien droite devant moi pour écrire (cf photo ci-dessous).<br/>
                <div className='centered-content'>
                    <Image 
                        src={feuille1} 
                        alt='feuille droite' 
                        width={556/2} 
                        height={641/2} 
                        placeholder='blur'/>
                </div>
               
                <br/>
                <b> Aujourd’hui, ergothérapeute, je déconseille cette façon de placer sa feuille pour plusieurs raisons.</b>
                <ul>
                    <li>
                        Placer sa feuille verticalement devant soi <b>contraint davantage l’enfant à croiser sa ligne médiane :</b>
                    </li>
                </ul>
                Franchir la ligne médiane désigne la capacité à dépasser une ligne imaginaire qui sépare le corps en deux parties (moitié gauche et moitié droite). 
                Il s’agit donc d’aller un peu plus du côté gauche avec son bras droit ou un peu plus à droite avec son bras gauche. Exemple concret : 
                au foot, le joueur peut tirer avec son pied gauche pour envoyer la balle à droite du coup la jambe gauche va croiser la ligne médiane et tirer à droite. 
                Franchir la ligne médiane désigne la capacité à dépasser une ligne imaginaire qui sépare le corps en deux parties (moitié gauche et moitié droite). 
                Il s’agit donc d’aller un peu plus du côté gauche avec son bras droit ou un peu plus à droite avec son bras gauche. Exemple concret : au foot, 
                le joueur peut tirer avec son pied gauche pour envoyer la balle à droite du coup la jambe gauche va croiser la ligne médiane et tirer à droite.<br/>
                <div className='centered-content'>
                    <Image 
                            src={feuille2} 
                            alt='football' 
                            // width={556/2} 
                            // height={641/2} 
                            placeholder='blur'/>
                </div>
                <ul>
                    <li>
                        Placer sa feuille verticalement <b>limite les mouvements proximaux du bras scripteur :</b>
                    </li>
                </ul>
                Les mouvements proximaux sont les mouvements produits par les muscles au niveau de l’épaule grâce aux articulations entre plusieurs os : humérus, clavicule et omoplate. 
                Ces mouvements assurent la stabilité du bras pour l’écriture.
                <ul>
                    <li>
                        Placer sa feuille verticalement devant soi <b>limite la dextérité manuelle :</b>
                    </li>
                </ul>
                L’écriture est le résultat de tous petits mouvements distaux des doigts, c’est-à-dire de tous petits gestes du bout des doigts. Il faut avoir un déliement suffisant des doigts pour pouvoir manier son stylo. 
                Le bon positionnement du bras est indispensable pour pouvoir effectuer des mouvements fins avec les doigts.<br/>
                <br/>
                <u>CONSEILS D’ERGO POUR BIEN PLACER SA FEUILLE :</u><br/>
                <br/>
                Placer sa feuille dans le prolongement du bras :
                <div className='centered-content'>
                    <Image 
                            src={feuille3} 
                            alt='feuille angle' 
                            width={1920/4} 
                            height={1080/4} 
                            placeholder='blur'/>
                </div>
                <div className='centered-content'>
                    <Image 
                            src={feuille4} 
                            alt='feuille angle 2' 
                            // width={556/2} 
                            // height={641/2} 
                            placeholder='blur'/>
                </div>
                NB : Ces conseils peuvent améliorer le graphisme mais ils ne remplacent pas une analyse plus précise des difficultés graphiques chez un ergothérapeute.
            </Section>
        </Body>
    )}