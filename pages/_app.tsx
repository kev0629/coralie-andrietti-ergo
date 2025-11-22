import "./../styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "@/context/ModalContext";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import AppContext from "@/context/AppContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  const [mainModalIsOpen, setMainModalIsOpen] = useState(true);
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  const [cookieChoiceMade, setCookieChoiceMade] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const isAccepted = getCookieConsentValue(
      "coralie-andrietti-ergo-cookie-consent"
    );
    if (isAccepted === "true") {
      setIsCookieAccepted(true);
      setCookieChoiceMade(true);
    } else if (isAccepted === "false") {
      setCookieChoiceMade(true);
    }
  }, []);

  useEffect(() => {
    if (!isCookieAccepted) return;

    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events, isCookieAccepted]);

  useEffect(() => {
    if (isClient && !cookieChoiceMade) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isClient, cookieChoiceMade]);

  return (
    <AppContext.Provider value={{ mainModalIsOpen, setMainModalIsOpen }}>
      <ModalProvider>
        {/* Google Analytics Scripts - Chargés uniquement si les cookies sont acceptés */}
        {isCookieAccepted && gtag.GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {isClient && !cookieChoiceMade && (
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
          onAccept={() => {
            setIsCookieAccepted(true);
            setCookieChoiceMade(true);
          }}
          onDecline={() => {
            setIsCookieAccepted(false);
            setCookieChoiceMade(true);
          }}
        >
          Ce site utilise des cookies pour améliorer l&apos;expérience
          utilisateur.{" "}
          <Link
            href="/politique-de-confidentialite"
            style={{ color: "#a9d6e5" }}
          >
            En savoir plus
          </Link>
        </CookieConsent>
      </ModalProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
