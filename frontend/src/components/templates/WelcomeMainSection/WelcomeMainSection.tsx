import {WelcomeMainCardsWrapper, WelcomeMainWrapper} from "./WelcomeMain.styled";
import {RoleCardOrganism} from "../../organisms/RoleCardOrganism/RoleCard.organism";
import walletIcon from "../../../assets/walletIcon.svg";
import issuerIMG from "../../../assets/pictures/issuerPic.png";
import recoverIMG from "../../../assets/pictures/recoverPic.png";
import userTokensIMG from "../../../assets/pictures/userTokensPic.png";
import setUpIMG from "../../../assets/pictures/setUpPic.png";

import setupICON from "../../../assets/setupICON.svg";
import recoverICON from "../../../assets/recoverICON.svg";
import userProfileICON from "../../../assets/userProfileICON.svg";
import issuerICON from "../../../assets/issuerICON.svg";

import {useRouter} from "next/router";
import { soulAbi } from '../../crypto/soul_abi';
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

export const WelcomeMainSection = () => {
    const router = useRouter();
    return (
        <WelcomeMainWrapper>
            <WelcomeMainCardsWrapper>
                <RoleCardOrganism
                    cardTitle='New? Let’s start'
                    iconButtonSrc={setupICON.src}
                    iconText='Set my ID'
                    srcIMG={setUpIMG.src}
                    width='15.rem'
                    onClick={() => router.push("/setup")}
                />
                <RoleCardOrganism
                    cardTitle='Process to recover'
                    iconButtonSrc={recoverICON.src}
                    iconText='Recover ID'
                    srcIMG={recoverIMG.src}
                    width='15.rem'
                    onClick={() => router.push("/recover")}
                />
                <RoleCardOrganism
                    cardTitle='User Tokens'
                    iconButtonSrc={userProfileICON.src}
                    iconText='Profile'
                    srcIMG={userTokensIMG.src}
                    width='15.rem'
                    onClick={() => router.push("/profile")}
                    // onClick={handleClick}
                />
                <RoleCardOrganism
                    cardTitle='Issuer Dashboard'
                    iconButtonSrc={issuerICON.src}
                    iconText='Issuer'
                    srcIMG={issuerIMG.src}
                    width='15.rem'
                    onClick={() => router.push("/issuer")}
                />
            </WelcomeMainCardsWrapper>
        </WelcomeMainWrapper>
    )
}
