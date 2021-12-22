import { useMoralis } from "react-moralis";
import { Container, Heading } from '@chakra-ui/layout';

import Auth from "../components/sections/auth";
import Layout from "../components/sections/layout";
import ERC20Balance from "../components/ui/ERC20Balance";


const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
};

const Home = () => {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <Auth />
      </div>
    );
  }
    return (

      <Layout>
        <Container style={styles.content}>
          {/* <Heading mb={6} className="flex justify-center text-blue-700 lg:text-3xl border-blue-600 border-b-2	text-bold">
            Welcome to your NFT Marketplace
          </Heading> */}
          <ERC20Balance />
        </Container>
      </Layout>

    );
}  

export default Home;