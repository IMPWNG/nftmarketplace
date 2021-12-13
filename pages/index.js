import { useState } from "react";
import { useMoralis } from "react-moralis";
import { Button } from '@chakra-ui/react';
import { Container, Heading } from '@chakra-ui/layout';

import Layout from "../src/components/Layout";
import Chains from "../src/components/Chains/Chains";
import { Auth } from "./Auth";
  
export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    return (
      <div>
        <Heading className="flex justify-center text-blue-700 lg:text-3xl border-blue-600 border-b-2	text-bold" />
        <Layout />
      </div>

    ); 
  };
    return (
      <Container className="items-center">
        <Heading mb={6} className="flex justify-center text-blue-700 lg:text-3xl border-blue-600 border-b-2	text-bold">
          Welcome to your NFT Marketplace
        </Heading>
        <Auth />
      </Container>
    );
}  