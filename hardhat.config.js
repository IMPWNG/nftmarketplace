require("@nomiclabs/hardhat-waffle");

const fs = require("fs");

const privateKey = fs.readFileSync(".secret").toString().trim()
const projectId = "99fe2671319547ea9845d350d9e93c7a";

module.exports = {
  networks: {
    hardhat: {
      chainId:1337
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    },
    mainnet:{
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
  },
  solidity: "0.8.4",
};
