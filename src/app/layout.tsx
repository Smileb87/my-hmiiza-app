import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hmiiza - Votre boutique en ligne</title>
        <meta
          name="description"
          content="Découvrez une large gamme de produits sur Hmiiza, votre boutique en ligne."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`bg-black text-gold ${inter.className}`} lang="fr">
        {children}
      </body>
    </>
  );
};

export default Layout;
