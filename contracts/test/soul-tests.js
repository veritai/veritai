const { expect, assert } = require("chai");
const { ethers, waffle } = require("hardhat");
const {MerkleTree} = require("merkletreejs")
const keccak256 = require("keccak256")

const deploySoulContract = async () => {
  const SoulFactory = await ethers.getContractFactory("Soul");
  const SoulContract = await SoulFactory.deploy();
  await SoulContract.deployed();
  return SoulContract;
}

const deployAttestationNftContract = async () => {
  const AttestationNFTFactory = await ethers.getContractFactory("AttestationNFT");
  const AttestationContract = await AttestationNFTFactory.deploy();
  await AttestationContract.deployed();
  return AttestationContract;
}

const generateSoul = async () => {
  const SoulContract = await deploySoulContract();

  let addresses = [
    "0x...",
    "jdfljsdfjlkdsf",
    "asldjalksjd"
  ]

  // Hash addresses to get the leaves
  let leaves = addresses.map(addr => keccak256(addr))
  
  // Create tree
  let merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true})
  // Get root
  let rootHash = merkleTree.getRoot()

  const soulId = await SoulContract.mint(rootHash);

  let leaf = keccak256("asldjalksjd");
  let proof = merkleTree.getHexProof(leaf);

  await SoulContract.checkValidity(proof, rootHash, leaf);

  // console.log({hash: await SoulContract.getRoot(0)});

  const [owner, newOwner] = await ethers.getSigners();
  const ogOwner = await SoulContract.ownerOf(1);
}

  const assertFailedTransaction = async (tx, errorMessage, thirdparam) => {
    let transactionFailed = false;
    try {
      await tx;
    } catch (error) {
      // console.log({err: error.message, thirdparam});
      if (error.message ===`VM Exception while processing transaction: reverted with reason string '${errorMessage}'`) {
        transactionFailed = true;
      }
    }
    expect(transactionFailed).to.equal(true);
  }

describe("Soul", function () {
  it("constructor: Should deploy the Soul contract without failing", async function() {
    const SoulContract = await deploySoulContract();
    expect(true)
  });

  it("should create new soul with merkle tree recovery", async function() {

    const SoulContract = await deploySoulContract();

    let addresses = [
      "0x...",
      "jdfljsdfjlkdsf",
      "asldjalksjd"
    ]
  
    // Hash addresses to get the leaves
    let leaves = addresses.map(addr => keccak256(addr))
    
    // Create tree
    let merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true})
    // Get root
    let rootHash = merkleTree.getRoot()

    const soulId = await SoulContract.mint(rootHash);

    console.log({soulId});
    
    // Pretty-print tree
    console.log(merkleTree.toString())
  });

  it("should transfer soul token with correct merkle proofs", async function() {
    const SoulContract = await deploySoulContract();

    let addresses = [
      "0x...",
      "jdfljsdfjlkdsf",
      "asldjalksjd"
    ]
  
    // Hash addresses to get the leaves
    let leaves = addresses.map(addr => keccak256(addr))
    
    // Create tree
    let merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true})
    // Get root
    let rootHash = merkleTree.getRoot()

    const soulId = await SoulContract.mint(rootHash);

    let leaf = keccak256("asldjalksjd");
    let proof = merkleTree.getHexProof(leaf);

    await SoulContract.checkValidity(proof, rootHash, leaf);

    // console.log({hash: await SoulContract.getRoot(0)});

    const [owner, newOwner] = await ethers.getSigners();
    const ogOwner = await SoulContract.ownerOf(1);

    await SoulContract.connect(newOwner).recoverSoul(1, proof, leaf);
    const currentSoulOwner = await SoulContract.ownerOf(1);
    console.log({originalOwner: owner.address, ogOwner, currentSoulOwner, address: newOwner.address});
  });

  it("should issue attestation nft", async function() {
    await generateSoul();
    const attestationContract = await deployAttestationNftContract();
  });

});