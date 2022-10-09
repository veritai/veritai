import { useEffect } from 'react';
import { useContractWrite, useWaitForTransaction } from '@web3modal/react';
import { soulAbi } from './soul_abi';
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const createMerkleTree = () => {
  let hashes = [
    "0x...",
    "jdfljsdfjlkdsf",
    "asldjalksjd"
  ]

  // Hash addresses to get the leaves
  let leaves = hashes.map(hash => keccak256(hash))
  
  // Create tree
  let merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: true})
  // Get root
  let rootHash = merkleTree.getRoot()
  return rootHash;
}


const MintId = () => {
  const root = createMerkleTree();

  const { data, error, isLoading, write } = useContractWrite({
    addressOrName: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    contractInterface: soulAbi,
    functionName: 'mint',
    args: [root], //times 10 cuz decimals, gotta fix this
  })

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    write()
  }, []);

  return null;

}