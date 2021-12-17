import React from 'react'
import { MoralisProvider } from 'react-moralis'
import Web3Provider from '../context'
import { useRouter } from 'next/dist/client/router'
import Layout from '../components/sections/layout'

import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showLayout = router.pathname === '/' ? false : true ;
    
  return (
      <MoralisProvider appId={process.env.NEXT_PUBLIC_MORALIS_NFTMARKETPLACE_APP_ID} serverUrl={process.env.NEXT_PUBLIC_MORALIS_NFTMARKETPLACE_SERVER_URL}>
         <Web3Provider>
            {showLayout && <Layout />}
            <Component {...pageProps} />
        </Web3Provider>
      </MoralisProvider>
    );
  }
export default MyApp
 