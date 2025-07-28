import "../styles/globals.css";
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Portafolio de Christopher Valdivia</title>
        <meta name="description" content="Desarrollador Full Stack Junior" />
        <meta property="og:title" content="Christopher Valdivia - Portafolio" />
        <meta property="og:description" content="Desarrollador Full Stack Junior" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);