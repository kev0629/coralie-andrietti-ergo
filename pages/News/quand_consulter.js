
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'

export default function QuandConsulter() {
    var articleIndex = 2
    return (
        <Body>
            <Section title={articles[articleIndex].title}>
                Ce sont sûrement les questions les plus fréquentes qui me sont posées lorsque je dois intervenir dans les écoles.<br/>
                Quasiment à chacune de mes interventions, un enseignant m’aborde pour me parler d’un élève qui lui paraît avoir des difficultés.<br/>
                Systématiquement, l’enseignant me demande mon avis sur la pertinence d’envoyer cet enfant consulter un ergothérapeute.<br/>
                <br/>
                Merci aux ergothérapeutes qui sont à l’origine de ces fiches pour aider les enseignants en milieu scolaire. 
                J’espère que leur diffusion permettra une action précoce auprès des bambins, enfants et adolescents que nous suivons dans leur cursus scolaire.<br/>
            </Section>
        </Body>
    )}