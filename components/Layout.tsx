import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Head>
        <title>The Plant Boutique</title>
        <meta
          name="The Plant Boutique"
          content="chic handcrafted plant accessories."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
