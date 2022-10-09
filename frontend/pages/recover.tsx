import {NextPage} from "next";
import React from "react";
import { useContractWrite, useWaitForTransaction } from '@web3modal/react';
const keccak256 = require("keccak256");
const {MerkleTree} = require("merkletreejs");
import { soulAbi } from '../src/components/crypto/soul_abi';


import {ProfileUserSection} from "../src/components/templates/ProfileUserSection/ProfileUser.section";
import {RecoverMainSection} from "../src/components/templates/RecoverMainSection/RecoverMain.section";



const createMerkleTree = (fileHash) => {
    let hashes = [
      fileHash
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

// const getSoulId = () => {
//     const {rootHash, leaf, proof} = createMerkleTree();

//     const { data, error, write } = useContractWrite({
//         addressOrName: '0xBAe4120557Bbef4b1052e934d6b9Bd22e2c77EA0',
//         contractInterface: soulAbi,
//         functionName: 'getTokenForRoot',
//         args: [rootHash], //times 10 cuz decimals, gotta fix this
//     });

//     const { isLoading, isSuccess } = useWaitForTransaction({
//         hash: data?.hash,
//     });

//     const sendTx = () => {
//         console.log('yo')
//         write();
//     }
//     return (
//         null;
//     )
// }

const Recover: NextPage = () => {

    const handleOnClick = () => {
        console.log(window.fileHash);
        console.log('click');
    }

    if (!window.fileHash) {
        window.fileHash = 'xxx';
    }

    const {rootHash, leaf, proof} = createMerkleTree(window.fileHash);

    const { data, error, write } = useContractWrite({
        addressOrName: '0xBAe4120557Bbef4b1052e934d6b9Bd22e2c77EA0',
        contractInterface: soulAbi,
        functionName: 'recoverSoul',
        args: [1, proof, leaf], //times 10 cuz decimals, gotta fix this
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
            <RecoverMainSection/>
        </>
    )
}

export default Recover
