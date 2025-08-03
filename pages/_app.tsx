import "../styles/globals.css";
import "../styles/style_modal.css";
import React from "react";
import AppContext from "../components/AppContext";
import Head from "next/head";
import dynamic from 'next/dynamic';
import { ModalProvider } from '../components/ModalContext';

import { AppProps } from 'next/app';

const DynamicContactModal = dynamic(() => import('../components/ContactModal'), {
  ssr: false
});

function MyApp({ Component, pageProps }: AppProps) {
  const [mainModalIsOpen, setMainModalIsOpen] = React.useState(true);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AppContext.Provider value={{ mainModalIsOpen, setMainModalIsOpen }}>
        <ModalProvider>
          <Component {...pageProps} />
          <DynamicContactModal />
        </ModalProvider>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;