import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hmiiza - Your Online Store</title>
        <meta
          name="description"
          content="Discover a wide range of products at Hmiiza, your online store."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`bg-black text-gold ${inter.className}`} lang="en">
        {children}
      </body>
    </>
  );
};

export default Layout;
