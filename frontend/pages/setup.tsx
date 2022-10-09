import {NextPage} from "next";
import React from "react";

import {ProfileUserSection} from "../src/components/templates/ProfileUserSection/ProfileUser.section";
import {SetupMainSection} from "../src/components/templates/SetupMainSection/SetupMain.section";

import { soulAbi } from '../src/components/crypto/soul_abi';
import { useContractWrite, useWaitForTransaction } from '@web3modal/react';
const {MerkleTree} = require("merkletreejs")
const keccak256 = require("keccak256")

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
    let rootHash = merkleTree.getRoot();
    let leaf = keccak256("asldjalksjd");
    let proof = merkleTree.getHexProof(leaf);
    return {rootHash, leaf, proof};
  }

const handleOnClick = () => {
    console.log('click');
}

const SetUp: NextPage = () => {
    // const router = useRouter();
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log('element clicked')}

    const root = createMerkleTree();
    
    const { data, error, write } = useContractWrite({
        addressOrName: '0xBAe4120557Bbef4b1052e934d6b9Bd22e2c77EA0',
        contractInterface: soulAbi,
        functionName: 'mint',
        args: [root], //times 10 cuz decimals, gotta fix this
    });

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    const sendTx = () => {
        console.log('yo')
        write();
    }
    return (
        <>
            <ProfileUserSection/>
            <SetupMainSection/>
        </>
    )
}

export default SetUp
