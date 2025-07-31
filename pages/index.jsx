import Head from "next/head";
import Section from "../components/Section";
import Body from "../components/Body";
import Presentation from "../components/Presentation";
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

export default function Home({ datas }) {
  const [modalPresIsOpen, setPresIsOpen] = React.useState(false);

  function openModalPres() {
    setPresIsOpen(true);
  }

  function closeModalPres() {
    setPresIsOpen(false);
  }
  return (
    <div>
      <Head>
        <title>Coralie Andriettie ergothérapeute</title>
      </Head>
      <Modal datas={datas} />
      <ModalPres isOpen={modalPresIsOpen} closeModalPres={closeModalPres} />
      <Body>
        <Section id="home">
          <Presentation openModalPres={openModalPres} />
        </Section>
        <Section title="Actualités" id="actu">
          <News />
        </Section>
        <Section title="Qu'est-ce que l'ergothérapie ?" id="What">
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
    database_id: process.env.DATABASE_ID,
  });
  return {
    props: {
      datas: response.results.slice(0).reverse(),
    },
    revalidate: 1,
  };
}
