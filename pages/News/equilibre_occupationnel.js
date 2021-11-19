
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'

export default function EquilibreOccupationnel() {
    var articleIndex = 5
    return (
        <Body>
            <Section title={articles[articleIndex].title}>
            <div dangerouslySetInnerHTML={{__html: articles[articleIndex].body}}></div>
            </Section>
        </Body>
    )}