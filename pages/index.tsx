import Head from "next/head";
import Section from "../components/Section";
import Body from "../components/Body";
import Presentation from "../components/Presentation";
import FaqAccordion from "../components/FaqAccordion";
import What from "../components/What";
import Who from "../components/Who";
import When from "../components/When";
import Following from "../components/Following";
import Localisation from "../components/Localisation";
import Modal from "../components/Modal";
import News from "../components/News";
import ModalPres from "../components/ModalPres";
import React from "react";

import { Client } from "@notionhq/client";

interface DataItem {
  id: string;
  properties: {
    Name: {
      title: { plain_text: string }[];
    };
  };
}

interface HomeProps {
  datas: DataItem[];
}

import { useModal } from "../components/ModalContext";

export default function Home({ datas }: HomeProps) {
  const { toggleContactModal } = useModal();
  const [modalPresIsOpen, setModalPresIsOpen] = React.useState(false);

  function openModalPres() {
    setModalPresIsOpen(true);
  }

  function closeModalPres() {
    setModalPresIsOpen(false);
  }
  return (
    <div>
      <Head>
        <title>Ergothérapeute au Cannet, Cannes (06) | Rééducation de l'écriture</title>
        <meta name="description" content="Cabinet d'ergothérapie au Cannet (06). Prise en charge des troubles de l'écriture (dysgraphie) et de la motricité fine pour enfant et adulte." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "OccupationalTherapist",
            "name": "Coralie Andrietti - Ergothérapeute",
            "description": "Cabinet d'ergothérapie au Cannet (06). Prise en charge des troubles de l'écriture (dysgraphie) et de la motricité fine pour enfant et adulte.",
            "url": "https://coralie-andrietti-ergo.com",
            "telephone": "+33664436260",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5 chemin de garibondy, le parc victoria",
              "addressLocality": "Le Cannet",
              "postalCode": "06110",
              "addressCountry": "FR"
            },
            "areaServed": [
              "Le Cannet",
              "Cannes",
              "Vallauris",
              "Mandelieu-la-Napoule"
            ],
            "openingHours": "Mo-Fr 08:30-19:30"
          }`}
        </script>
      </Head>
      <Modal datas={datas} />
      <ModalPres isOpen={modalPresIsOpen} closeModalPres={closeModalPres} />
      <Body>
        <Section
          id="home"
          backgroundImage="/pictures/fond-presentation-coralie-andrietti.png"
          className="h-screen"
        >
          <Presentation openModalPres={toggleContactModal} />
        </Section>
        <Section title="Qu'est-ce que c'est ?" id="What">
          <What />
        </Section>
        <Section title="Pour qui ?" id="Who">
          <Who />
        </Section>
        <Section title="Quand consulter ?" id="When">
          <When />
        </Section>
        <Section title="Accompagnement ergothérapeutique" id="Follow">
          <Following />
        </Section>
        <Section title="Parlons-en" id="actu">
          <News />
        </Section>
        <Section title="Questions fréqentes" id="faq">
          <FaqAccordion />
        </Section>
        <Section title="Localisation" id="Localisation">
          <Localisation />
        </Section>
      </Body>
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  // const databaseId = process.env.DATABASE_ID;
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID as string,
  });
  return {
    props: {
      datas: response.results.slice(0).reverse(),
    },
    revalidate: 1,
  };
}
