
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'

export default function QuandConsulter() {
    var articleIndex = 2
    return (
        <Body>
            <Section title={articles[articleIndex].title}>
            <div dangerouslySetInnerHTML={{__html: articles[articleIndex].body}}></div>
            </Section>
        </Body>
    )}