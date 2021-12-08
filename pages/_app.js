import React from 'react'
import Head from "next/head";
import '../styles/globals.css';
import Link from 'next/link';
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
    return (
      <React.Fragment>
        <Head>
          <meta name="theme-color" content="#3c1742" />
        </Head>
           <Component {...pageProps} />
      </React.Fragment>
    );
  }
export default MyApp
