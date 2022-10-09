require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_URL, DEPLOYER_PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'polygonMumbai',
  networks: {
    polygonMumbai: {
      url: ALCHEMY_URL,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
    },
    polygon: {
      url: ALCHEMY_URL,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
    }
  },
};
