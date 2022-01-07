import '../styles/globals.css'
import '../styles/style_modal.css'
import React, { useState } from "react";
import AppContext from "../component/AppContext";

function MyApp({ Component, pageProps }) {
  const [mainModalIsOpen, setMainModalIsOpen] = React.useState(true);
  return (
    <AppContext.Provider value={{ mainModalIsOpen, setMainModalIsOpen }}>
    <Component {...pageProps} />
    </AppContext.Provider>
    )
}

export default MyApp
