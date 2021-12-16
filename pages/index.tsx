import { useMoralis } from "react-moralis";
import { Container, Heading } from '@chakra-ui/layout';

import { Auth } from "../components/Auth";
import { Layout } from "../components/sections/layout";
import Chains from "../components/ui/chains";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Auth />

    return (
      <>
      <Layout>
        <Container className="bg-black items-center">
          <Heading mb={6} className="flex justify-center text-blue-700 lg:text-3xl border-blue-600 border-b-2	text-bold">
            Welcome to your NFT Marketplace
            <Chains />
          </Heading>
        </Container>
      </Layout>
      </>
    );
}  