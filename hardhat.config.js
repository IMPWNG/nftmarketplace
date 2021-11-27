require("@nomiclabs/hardhat-waffle");

const projetId = "99fe2671319547ea9845d350d9e93c7a";

module.exports = {
  networks: {
    harhat: {
      chainId:1337
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`
      account:[]
    },
    mainnet:{
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`
    },
  },
  solidity: "0.8.4",
};
