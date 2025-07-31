import "../styles/globals.css";
import "../styles/style_modal.css";
import React from "react";
import AppContext from "../components/AppContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [mainModalIsOpen, setMainModalIsOpen] = React.useState(true);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AppContext.Provider value={{ mainModalIsOpen, setMainModalIsOpen }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
