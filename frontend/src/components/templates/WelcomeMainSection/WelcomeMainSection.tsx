import {WelcomeMainCardsWrapper, WelcomeMainWrapper} from "./WelcomeMain.styled";
import {RoleCardOrganism} from "../../organisms/RoleCardOrganism/RoleCard.organism";
import walletIcon from "../../../assets/walletIcon.svg";
import issuerIMG from "../../../assets/pictures/issuerPic.png";
import recoverIMG from "../../../assets/pictures/recoverPic.png";
import userTokensIMG from "../../../assets/pictures/userTokensPic.png";
import setUpIMG from "../../../assets/pictures/setUpPic.png";
import {useRouter} from "next/router";
import { useContractWrite, useWaitForTransaction } from '@web3modal/react';
import { soulAbi } from '../../crypto/soul_abi';
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

export const WelcomeMainSection = () => {

    const router = useRouter();
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log('element clicked')}

    const root = createMerkleTree();
    
    const { data, error, write } = useContractWrite({
        addressOrName: '0xBAe4120557Bbef4b1052e934d6b9Bd22e2c77EA0',
        contractInterface: soulAbi,
        functionName: 'mint',
        args: [root], //times 10 cuz decimals, gotta fix this
    })

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    const sendTx = () => {
        console.log('yo')
        // write();
    }

    console.log({data});

    return (
        <WelcomeMainWrapper>
            <WelcomeMainCardsWrapper>
                <RoleCardOrganism
                    handleClick={sendTx}
                    cardTitle='New? Let’s start'
                    iconButtonSrc={walletIcon.src}
                    iconText='Set my ID'
                    srcIMG={setUpIMG.src}
                    width='15.rem'
                />
                <RoleCardOrganism
                    cardTitle='Process to recover'
                    iconButtonSrc={walletIcon.src}
                    iconText='Recover ID'
                    srcIMG={recoverIMG.src}
                    width='15.rem'
                />
                <RoleCardOrganism
                    cardTitle='User Tokens'
                    iconButtonSrc={walletIcon.src}
                    iconText='Profile'
                    srcIMG={userTokensIMG.src}
                    width='15.rem'
                    onClick={() => router.push("/profile")}
                    // onClick={handleClick}
                />
                <RoleCardOrganism
                    cardTitle='Issuer Dashboard'
                    iconButtonSrc={walletIcon.src}
                    iconText='Issuer'
                    srcIMG={issuerIMG.src}
                    width='15.rem'
                />
            </WelcomeMainCardsWrapper>
        </WelcomeMainWrapper>
    )
}
