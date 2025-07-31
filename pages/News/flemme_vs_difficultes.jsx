
import Body from '../../components/Body'
import Section from '../../components/Section'
import articles from '../api/articles'
import Image from 'next/image'
import arrow from '../../public/pictures/arrow-right.svg'
import flemme1 from '../../public/pictures/articles/flemme1.png'
import flemme2 from '../../public/pictures/articles/flemme2.jpg'
import flemme3 from '../../public/pictures/articles/flemme3.jpg'
import flemme4 from '../../public/pictures/articles/flemme4.png'

export default function FlemmeVsDif() {
    var articleIndex = 7
    return (
        <Body>
            <Section title={articles[articleIndex].title}>
                <div className='centered-content'>
                <Image
                        src={flemme1}
                        alt='flemme vs difficulté'
                        width={6000/12}
                        height={4000/12}
                        placeholder='blur'/>
                </div>
                <p className='centered-content'>
                En tant qu’ergo, je suis très souvent confrontée à des enfants qui semblent 
                « avoir la flemme » ou « freiner des quatre fers » quand je leur présente une activité. 
                Parfois même, ces réactions peuvent aller jusqu’à des comportements difficiles comme : 
                être agressif envers moi ou eux-mêmes, ignorer les consignes, bouder, pleurer, se replier sur eux-mêmes …
                </p>
                <br />
                <p className='centered-content' style={{fontSize:18}}>
                    Et si ces comportements étaient en fait un signal d’alarme de difficultés ?
                </p>
                <p>
                    Et bien oui ! Dans la majorité des cas les comportements difficiles sont dus à des difficultés. 
                </p>
                <p>
                    Par exemple:
                </p>
                <div className='g03-1'>
                    <div className='centered-content'>
                        <Image
                        src={flemme2}
                        alt='flemme vs difficulté'
                        width={293/3}
                        height={586/3}
                        placeholder='blur'/>
                    </div>
                    <div>
                        <p style={{fontStyle:"italic"}}>
                        {"Lorenzo, fait vivre un enfer à sa maman lors des devoirs. Les devoirs sont devenus un moment de tension dans la famille. Il faut dire, qu’en tant que parent, nous avons une certaine pression de devoir « faire bien » vis-à-vis de l’école."}
                        </p>
                        <p>
                        <Image width={16} height={16} alt='arrow' src={arrow}/>{"Après un bilan, il s’est avéré que Lorenzo avait de réels troubles grapho-moteurs et que l’écriture lors des devoirs était tout simplement l’effort de trop dans sa journée d’écolier ! En effet, Lorenzo faisait de gros efforts toute la journée en classe pour écrire et cela le fatiguait énormément. Quand sa maman lui demandait d’écrire une fois de plus le soir pour les devoirs, c’était la goutte d’eau qui faisait déborder le vase."}
                        </p>
                        </div>
                    </div>
                    <div className='g1-03'>
                        <div>
                            <p>
                                {"Sarah-Lou, 8 ans, fait tout pour éviter de découper, de colorier, de faire des perles. C’est une enfant qui s’intéresse davantage à la lecture, elle aime faire des expériences scientifiques. "}
                            </p>
                            <p>
                            <Image width={16} height={16} alt='arrow' src={arrow}/>{"Au cours du bilan, il a été décelé que Sarah-Lou avait des difficultés de motricité fine. Du coup, toutes les activités qui nécessitaient de la motricité fine étaient, en fait, difficiles pour elle.  C’est probablement pour cela qu’elle « rechignait » à les faire que ce soit à la maison ou à l'école. "}
                            </p>
                        </div>
                        <div className='centered-content'>
                            <Image
                                src={flemme3}
                                alt='flemme vs difficulté'
                                width={424/3}
                                height={461/3}
                                placeholder='blur'/>
                        </div> 
                </div>
                <p style={{fontStyle:"italic"}}></p>
                <p style={{textIndent: 25}}>
                    {"Lorenzo et Sarah-Lou ne sont que 2 exemples parmi tant d'autres."} 
                    {"En effet inconsciemment l'enfant développe souvent des systèmes de défense, des"} 
                    {"systèmes d'échappatoires pour éviter de faire les activités dans lesquelles il a du mal."} 
                    {"Ce qu'il faut retenir, c'est qu’un enfant fait toujours du mieux qu'il peut avec les moyens,"} 
                    {"les compétences et les connaissances qu’il a. Si l'enfant se désorganisé c'est qu'il y a quelque"} 
                    {"chose qui ne va pas pour lui : "}<b>{"il y a toujours une raison derrière le comportement de l'enfant."}</b> 
                </p>
                <p style={{textIndent: 25}}>
	            {"Parfois, ces comportements difficiles peuvent même être liés à des troubles encore non diagnostiqués"} 
                {"tel que le TDAH, le TSA, le haut potentiel, les troubles sensoriels, les troubles des apprentissages etc."} 
                {"Dans d'autres cas, les comportements difficiles seront peut-être juste liés à un tout petit retard de "}
                {"développement de certaines compétences sans qu'il y ait forcément de pathologie sous-jacente."} 
                </p>
                <p className='centered-content' style={{fontSize:18}}>
                    <b>
                    {"Parents, c'est vous qui connaissez le mieux votre enfant. Si vous avez le moindre questionnement sur un "}
                    {"comportement difficile chez votre enfant parlez-en à votre médecin celui-ci vous orientera vers le professionnel adapté."}
                    </b> 
                </p>
                <br />
                <div className='centered-content'>
                <Image
                        src={flemme4}
                        alt='flemme vs difficulté'
                        width={6000/12}
                        height={4000/12}
                        placeholder='blur'/>
                </div>
                
            </Section>
        </Body>
    )}