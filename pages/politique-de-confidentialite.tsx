import React from "react";
import Body from "@/components/layout/Body";
import Section from "@/components/ui/Section";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <Body>
      <Head>
        <title>
          Politique de confidentialité | Coralie Andrietti Ergothérapeute
        </title>
      </Head>
      <Section title="Politique de confidentialité">
        <div className="max-w-4xl mx-auto p-4 md:p-8 text-left">
          <p className="mb-4">Dernière mise à jour : 27 septembre 2025</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">1. Introduction</h2>
          <p className="mb-4">
            Bienvenue sur le site de Coralie Andrietti, ergothérapeute. La
            protection de vos données personnelles est une priorité. Cette
            politique de confidentialité a pour but de vous informer sur la
            manière dont nous collectons, utilisons et protégeons vos données.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            2. Collecte des données
          </h2>
          <p className="mb-4">
            Nous collectons des données lorsque vous utilisez notre formulaire
            de contact ou lorsque vous naviguez sur notre site. Les données
            collectées peuvent inclure votre nom, votre adresse e-mail et votre
            numéro de téléphone.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            3. Utilisation des cookies
          </h2>
          <p className="mb-4">
            Ce site utilise des cookies pour améliorer votre expérience de
            navigation et pour analyser le trafic. Un cookie est un petit
            fichier texte stocké sur votre ordinateur. Vous avez le choix
            d&apos;accepter ou de refuser les cookies via la bannière qui
            s&apos;affiche lors de votre première visite.
          </p>
          <div className="mb-4">
            Les cookies que nous utilisons nous permettent de :
            <ul className="list-disc list-inside ml-4">
              <li>Mesurer l&apos;audience de notre site de manière anonyme.</li>
              <li>Personnaliser votre expérience de navigation.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-6 mb-2">4. Vos droits</h2>
          <p className="mb-4">
            Conformément à la loi &quot;Informatique et Libertés&quot; et au
            RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
            de suppression et d&apos;opposition au traitement de vos données
            personnelles. Pour exercer ces droits, vous pouvez nous contacter à
            l&apos;adresse e-mail suivante : [adresse e-mail de contact].
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-2">
            5. Modifications de la politique de confidentialité
          </h2>
          <p className="mb-4">
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Les modifications seront publiées sur
            cette page.
          </p>
        </div>
      </Section>
    </Body>
  );
};

export default PrivacyPolicy;
