// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
  // const SoulFactory = await hre.ethers.getContractFactory("Soul");
  // const SoulContract = await SoulFactory.deploy();

  // console.log({"Soulcontract address": SoulContract.address});

  // await SoulContract.deployed();

  const AttestationFactory = await hre.ethers.getContractFactory("AttestationNFT");
  const AttestationContract = await AttestationFactory.deploy();

  console.log({"AttestationContract address": AttestationContract.address});

  await AttestationContract.deployed();
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
