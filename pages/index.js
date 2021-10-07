import Head from 'next/head'
import Section from '../component/Section'
import Body from '../component/Body'
import Presentation from '../component/Presentation'
import What from '../component/What'
import Who from '../component/Who'
import When from '../component/When'
import Following from '../component/Following'
import Localisation from '../component/Localisation'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Coralie Andriettie ergothérapeute</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Section >
          <Presentation/>
        </Section>
        <Section title="Acutalités" id='actu'>  
        </Section>
        <Section title="Qu'est-ce que l'ergothérapie ?" id="What">
        <What/>
        </Section>
        <Section title="Pour qui ?" id='Who'>
          <Who/>
        </Section>
        <Section title="Quand consulter" id='When'>
          <When/>
        </Section>
        <Section title="Accompagnement ergothérapeutique" id='Follow'>
          <Following/>
        </Section>
        <Section title="Localisation" id='Localisation'>
          <Localisation/>
        </Section>
      </Body>
        
    </div>
  )
}
