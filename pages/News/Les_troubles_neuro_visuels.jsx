import Body from '../../components/Body'
import Section from '../../components/Section'
import articles from '../api/articles'
import Image from 'next/image'
import arrow from '../../public/pictures/arrow-right.svg'
import trouble1 from '../../public/pictures/articles/trouble1.jpg'
import trouble2 from '../../public/pictures/articles/trouble2.jpg'

import React from 'react'

export default function Les_troubles_neuro_visuels() {
    var articleIndex = 6
    return (
        <Body>
            <Section title={articles[articleIndex].title}>
                <div className='g03-1'>
                <div>
                    <div className='centered-content' style={{paddingTop:'20%'}}><Image src={trouble1} width={461/3} height={681/3} /></div>
                    
                </div>
                    <p style={{padding:20}}>
                        Les troubles neuro-visuels sont souvent méconnus par les enfants eux-mêmes et leurs familles. 
                        Ces troubles sont en effet « invisibles » pour les enfants car ces derniers grandissent sans savoir 
                        que leur vision est déficitaire puisqu’ils n’ont pas de point de comparaison. 
                        Un adulte peut détecter que sa vue baisse car il peut comparer avec ses capacités antérieures. 
                        Chez l’enfant, il n’y aura donc pas de plainte visuelle car pas de signal d’alerte pour lui.<br/>
                        <br/>
                        En ergothérapie pédiatrique, ce sont des troubles que nous observons beaucoup lors des bilans. 
                        Par exemple, cela est très fréquent chez les enfants présentant des troubles « dys », 
                        des TSA (troubles du spectre de l’autisme) ou TDAH (trouble déficit de l’attention +/- hyperactivité et impulsivité) etc.<br/>
                    </p>
                </div>
            
                <br/>
                Et c’est vrai, quand on ne travaille pas spécifiquement dans le domaine, 
                c’est un vocabulaire qui n’est pas très digeste … J’espère que ce petit topo pourra vous éclairer !<br/>
                <br/>
                <u><b className='centered-content'>Concrètement qu’est-ce que c’est ? </b></u>
                <br/>
                Les troubles neuro-visuels sont tous interdépendants les uns des autres mais ils peuvent être, grossièrement, classés en plusieurs catégories : <br/>
                <br/>
                <u><b style={{fontSize:20}}>1{")"} Certains items plutôt perceptifs :</b></u>
                <ul>
                    <li>L’aspect oculomoteur « comment je regarde » </li>
                </ul>
                L’oculo-motricité correspond à l’ensemble des mouvements oculaires. 
                Il s’agit par exemple de la <b>fixation</b> : capacité à regarder fixement un objet et de le placer dans la partie centrale du champ visuel. 
                <b>Les saccades</b> permettent de regarder d’un objet à un autre rapidement. 
                <b>La poursuite oculaire</b> permet de suivre du regard un objet en mouvement.<br/>
                <br/> 
                <Image width={16} height={16} alt='arrow' src={arrow}/> 
                En bilan, l’ergothérapeute va, par exemple, v
                érifier que l’enfant (selon l’âge) peut suivre un objet en mouvement devant ses yeux, qu’il peut passer d’un objet à un autre avec son regard… 
                <ul>
                    <li>L’aspect visuo-perceptif « Quoi ? »</li>
                </ul>
                Le visuo-perceptif est un processus d’analyse et de synthèse d’informations visuelles qui permet <b>la reconnaissance des objets, 
                des formes, des couleurs et des tailles.</b> <br />
                <Image width={16} height={16} alt='arrow' src={arrow}/> 
                En bilan, l’ergothérapeute va , 
                par exemple, demander à l’enfant  (selon l’âge) de reconnaître des formes et de les désigner, 
                de retrouver des formes géométriques parmi plusieurs figures enchevêtrées …
                <ul>
                    <li>L’aspect visuo-spatial « Où ? » </li>
                </ul>
                La composante visuo-spatiale permet le traitement de <b>l’orientation visuelle ou l’emplacement des objets dans l’espace.</b>
                Ainsi, grâce à cette compétence, nous pouvons situer les objets par rapport à des repères dans l’espace. Exemple : 
                si deux objets sont devant nous, nous sommes capables de savoir quel est le plus près et le plus éloigné de nous.<br/>
                <br/>
                <Image width={16} height={16} alt='arrow' src={arrow}/> En bilan, l’ergothérapeute va, par exemple, 
                demander à l’enfant (selon l’âge) de situer des éléments visuels les uns par rapport aux autres, 
                vérifier les notions de rotation mentale … <br/>
                <br/>
                <u><b style={{fontSize:20}}>2{")"}	Certains items plutôt moteurs :</b><br/></u>
                <br/>
                Le visuo-moteur consiste à organiser les informations visuelles en mouvements adaptés. Exemple : 
                quand nous surlignons un groupe de mot dans un texte avec un surligneur.  <br/>
                <br/>
                <Image width={16} height={16} alt='arrow' src={arrow}/> 
                En bilan, l’ergothérapeute va, par exemple, 
                demander à l’enfant (selon l’âge) de réaliser un tracé sans dépasser avec un stylo, d’enfiler une perle …
                <ul>
                    <li>L’aspect visuo-constructif « Je peux construire »</li>
                </ul>
                <div className='g1-03'>
                    <div >
                        <div >Le visuo-constructif consiste à intégrer un ensemble d’éléments perçus visuellement en un tout cohérent par le biais d’une réponse motrice. 
                        Par exemple : les capacités à dessiner spontanément ou à partir d’un modèle, à construite avec des pièces de bois ou des cubes, à réaliser des puzzles.</div>
                    </div>
                    <div>
                        <Image src={trouble2} width={482/3} height={323/3}></Image>
                    </div>
                </div>
                <Image width={16} height={16} alt='arrow' src={arrow}/> En bilan, l’ergothérapeute va, par exemple, 
                demander à l’enfant (selon l’âge), de recopier une figure complexe depuis un modèle, de construire des figures avec des cubes … <br/>
                <br/>
                <u><b className='centered-content'>Quels indices pour les familles ?</b> </u><br/>
                <ul>
                    <li>L’enfant a du mal à fixer ou à suivre des yeux quelqu’un ou quelque chose qui se déplace.</li>
                    <li>L’enfant a du mal à trouver ses affaires alors qu’elles se trouvent à un endroit « logique et visible». </li>
                    <li>Difficultés de lecture</li>
                    <li>Difficultés d’orthographe </li>
                    <li>Difficultés graphiques (écriture et géométrie) : écrire sur la ligne, recopier d’un plan à un autre … </li>
                    <li>Difficultés dans les calculs : chiffres mal alignés, chiffres écrits à l’envers… </li>
                    <li>...</li>
                </ul>

                <u><b className='centered-content'>Que faire ?</b></u>
                <br/>
                Si vous avez l’impression de repérer des difficultés chez votre enfant, parlez-en à votre médecin. 
                Le médecin orientera vers le professionnel de santé le plus adapté aux difficultés de votre enfant.<br/>
                <br/>
                <div className='note'>
                    Sources :<br/>
                    {"Rauch et Savage (1997) ; (Jeannerod, 1994, p. 217). ; Boller et al. (1984) Benton (1979) ; (Chokron & Marendaz, 2005). Milner & Goodale, 2008). (Ungerleider & Mishkin, 1982)."}
                </div>
                
            </Section>
        </Body>
    )
}
