require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const URL = process.env.URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: URL,
      accounts: [PRIVATE_KEY],
    },
  },
};