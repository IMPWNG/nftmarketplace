import { useMoralis } from "react-moralis";
import { Container, Heading } from '@chakra-ui/layout';

import { Auth } from "../src/components/Auth";
import Layout from "../src/components/Layout";
  
export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Auth />

    return (
      <Layout>
      <Container className="bg-black items-center">
        <Heading mb={6} className="flex justify-center text-blue-700 lg:text-3xl border-blue-600 border-b-2	text-bold">
          Welcome to your NFT Marketplace
        </Heading>
      </Container>
      </Layout>
    );
}  