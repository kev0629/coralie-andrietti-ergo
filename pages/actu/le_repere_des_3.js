
import Body from '../../component/Body'
import Section from '../../component/Section'
import articles from '../api/articles'

export default function LeRepereDes3() {
    return (
        <Body>
            <Section title={articles[0].title}>
            <div dangerouslySetInnerHTML={{__html: articles[0].body}}></div>
            </Section>
        </Body>
    )}