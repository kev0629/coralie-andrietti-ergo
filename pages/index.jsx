import Head from "next/head";
import Section from "../component/Section";
import Body from "../component/Body";
import Presentation from "../component/Presentation";
import What from "../component/What";
import Who from "../component/Who";
import When from "../component/When";
import Following from "../component/Following";
import Localisation from "../component/Localisation";
import Modal from "../component/Modal";
import News from "../component/News";
import ModalPres from "../component/ModalPres";
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
  const databaseId = process.env.DATABASE_ID;
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
