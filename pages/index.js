import { useMoralis } from "react-moralis";
import { Container, Heading } from '@chakra-ui/layout';

import { Auth } from "./Auth";
  
export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    return (
      <div>
        <Heading className="flex justify-center text-blue-700 lg:text-3xl border-blue-600 border-b-2	text-bold" />
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