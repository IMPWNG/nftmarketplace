import React from 'react'
import { MoralisProvider } from "react-moralis";
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';

// Change to use .env
const appId = "L8kuo2v3DlsVmjGfmKNYWZq3W0ZQQSdADNav4hum";
const serverUrl = "https://zz6umijjwcmt.usemoralis.com:2053/server";

function MyApp({ Component, pageProps }) {
    return (
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </MoralisProvider>
    );
  }
export default MyApp
 