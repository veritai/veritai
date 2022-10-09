import {IndexMainWrapper} from "./IndexMain.styled";
import {RoleCardOrganism} from "../../organisms/RoleCardOrganism/RoleCard.organism";
import walletIcon from '../../../assets/walletIcon.svg'
import {SpanAtom} from "../../atoms/SpanAtom/Span.atom";
import { useAccount } from '@web3modal/react';
import {useRouter} from "next/router";
import { useEffect } from "react";
import connectIMG from "../../../assets/pictures/connectPicture.png";


export const IndexMainSection = () => {
    const { address, isConnected } = useAccount();
    const router = useRouter();

    if (isConnected) {
        router.push('/welcome');
    }

    return (
        <IndexMainWrapper>
            <h1>WELCOME TO
                <SpanAtom
                    color={'#52EB70'}
                    text={'VERITAI'}
                />
            </h1>
            <p>REAL IDENTITY</p>
            <RoleCardOrganism
                cardTitle='To start, connect to your wallet directly from the button'
                iconButtonSrc={walletIcon.src}
                iconText='Connect'
                connectButton={true}
                srcIMG={connectIMG.src}
            />
        </IndexMainWrapper>
    )
}
