import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "@/context/ModalContext";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import AppContext from "@/context/AppContext";
import { useEffect, useState } from "react";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  const [mainModalIsOpen, setMainModalIsOpen] = useState(true);
  const [isCookieAccepted, setIsCookieAccepted] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const isAccepted = getCookieConsentValue("coralie-andrietti-ergo-cookie-consent");
    setIsCookieAccepted(isAccepted === "true");
  }, []);

  useEffect(() => {
    if (isClient && !isCookieAccepted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isClient, isCookieAccepted]);

  return (
    <AppContext.Provider value={{ mainModalIsOpen, setMainModalIsOpen }}>
      <ModalProvider>
        {isClient && !isCookieAccepted && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
            }}
          />
        )}
        <Component {...pageProps} />
        <CookieConsent
          location="bottom"
          buttonText="J'accepte"
          declineButtonText="Je refuse"
          cookieName="coralie-andrietti-ergo-cookie-consent"
          style={{ background: "#2B373B", zIndex: 1001 }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          declineButtonStyle={{ fontSize: "13px" }}
          expires={150}
          enableDeclineButton
          onAccept={() => setIsCookieAccepted(true)}
        >
          Ce site utilise des cookies pour améliorer l&apos;expérience
          utilisateur.
          <Link href="/politique-de-confidentialite" style={{ color: "#a9d6e5" }}>
            En savoir plus
          </Link>
        </CookieConsent>
      </ModalProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
