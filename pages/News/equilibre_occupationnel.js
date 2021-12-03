
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'
import Image from 'next/image'
import equilibre1 from '../../public/pictures/articles/equilibre1.jpg'
import equilibre2 from '../../public/pictures/articles/equilibre2.jpg'

export default function EquilibreOccupationnel() {
    var articleIndex = 5
    return (
        <Body>
            <Section title={articles[articleIndex].title}>
                Bébé, enfant, ado, adultes ou personnes âgées, toutes nos journées sont rythmées par un grand nombre d’activités. 
                Ainsi, prendre son petit déjeuner, se brosser les dents, conduire, aller à l’école, aller au travail, jouer pendant la récréation, 
                faire du sport, lire le journal etc. sont des activités.<br/>
                <br/>
                <b>En ergothérapie, notre objectif est d’améliorer l’autonomie et l’indépendance de nos patients en facilitant la réalisation de leurs activités.</b><br/>
                <br/>
                Il existe différents types d’activités :
                <ul>
                    <li><u>les activités quotidiennes :</u> se coiffer, se raser, utiliser les couverts ...</li>
                    <li><u>les activités productives :</u> (liées à l’activité professionnelle, bénévole ou scolaire) faire une dictée, participer à une réunion, présenter un projet ...</li>
                    <li><u>les activités de loisirs :</u> nager, faire du vélo, regarder la télévision ...</li>
                </ul>
                Des études ont montré que s’engager dans des activités a un rôle essentiel pour être en bonne santé et avoir une qualité de vie satisfaisante. 
                Mais attention, il ne s’agit pas simplement de faire un certain nombre d’activité. 
                Il s’agit de faire un nombre d’activité suffisant certes mais surtout variées et qui permettent d’augmenter notre sentiment d’efficacité et notre estime de nous-même. 
                C’est ce que l’on appelle : <b style={{fontSize:18}}>l’équilibre occupationnel.</b><br/>
                <div className='centered-content'>
                   <Image 
                        src={equilibre2} 
                        alt='balance' 
                        width={556/2} 
                        height={641/2} 
                        placeholder='blur'/> 
                </div>
                
                L’équilibre occupationnel est <b>un équilibre entre le temps consacré à nos différentes activités </b>
                (quotidiennes, de productions, de loisirs et surtout de repos) <b>et la satisfaction que cela nous apporte.</b><br/>
                <br/>
                <div className='centered-content'>Plus facile à dire qu’à faire bien sûr !</div>
                <div className='centered-content' style={{fontSize:18}}>A votre avis, avez-vous un bon équilibre occupationnel ?</div>
                <div className='centered-content' style={{fontSize:18}}>Ou traversez-vous une période de déséquilibre occupationnel ?</div>
                <br/>
                A l’inverse, on peut parler de <b style={{fontSize:18}}>déséquilibre occupationnel</b>. Les blessures, les situations de handicap, les difficultés et/ou retards d’apprentissage, 
                les maladies ou tout simplement le vieillissement peuvent nous empêcher de faire certaines activités qui nous tiennent à cœur. 
                Ces évènements de la vie sont des facteurs qui peuvent entraîner des <b style={{fontSize:18}}>difficultés occupationnelles</b> allant parfois 
                jusqu’à un <b style={{fontSize:18}}>déséquilibre</b> occupationnel.

                <b style={{fontSize:18}}>Et bien sûr, quand des difficultés dans les activités sont constatées, il est vivement conseillé d’aller consulter un ergothérapeute.</b><br/>
                <br/>
                <Image src={equilibre1} alt='pierre equilibre' placeholder='blur'/>
                <div className='note'>
                    Sources :<br/>
                    Ay-Woan, Sarah, Lyinn, Tsyr-Jang &amp; Ping-Chuan, 2006; Glass, de Leon, Marottoli &amp; Berkman, 1999; Rudman, 2006 <br/>
                    Wagman, Håkansson et Björklund, 2012 <br/>
                    Krupa et al., 2009 <br/>
                </div>
            </Section>
        </Body>
    )}