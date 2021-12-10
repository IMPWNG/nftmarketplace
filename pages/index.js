import Layout from "../src/components/Layout";
import { useMoralis } from "react-moralis";
import { Button } from '@chakra-ui/button';
import Chains from "../src/components/Chains/Chains";


import React from "react";

export default function Home() {
  const { authenticate, isAuthenticated, isAuthentificating, logout } = useMoralis();

  if (isAuthenticated) {
    return (
      <Layout>
        <h1 className="flex justify-center text-blue-700 lg:text-3xl border-blue-600 border-b-2	text-bold">Welcome to the IMP NFT MARKETPLACE</h1>
        <Chains />
      </Layout>
    ); 
  }
    return (
        <div>
              <Button isLoading={isAuthentificating} onClick={() => authenticate()} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Web 3 - Login</Button>
        </div>

    );
}  
