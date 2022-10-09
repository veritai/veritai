import {SetupMainWrapper} from "./SetupMain.styled";
import {RoleCardOrganism} from "../../organisms/RoleCardOrganism/RoleCard.organism";

import idICON from '../../../assets/nickNameICON.svg';
import {useContractWrite, useWaitForTransaction} from "@web3modal/react";
import {soulAbi} from '../../crypto/soul_abi';
const {MerkleTree} = require("merkletreejs");
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
    return merkleTree.getRoot();
}

export const SetupMainSection = () => {

    const root = createMerkleTree();

    const {data, error, write} = useContractWrite({
        addressOrName: '0xBAe4120557Bbef4b1052e934d6b9Bd22e2c77EA0',
        contractInterface: soulAbi,
        functionName: 'mint',
        args: [root], //times 10 cuz decimals, gotta fix this
    })

    const {isLoading, isSuccess} = useWaitForTransaction({
        hash: data?.hash,
    });

    const sendTx = () => {
        console.log('yo')
        write().then(r => console.log(r));
    }

    console.log({data, isSuccess});

    return (
        <SetupMainWrapper>
            <RoleCardOrganism
                cardTitle='Upload your Government ID'
                iconButtonSrc={idICON.src}
                iconText='Get my SBT'
                onClick={() => sendTx()}
                isCardIMGenabled={false}
            />
        </SetupMainWrapper>
    )
}
