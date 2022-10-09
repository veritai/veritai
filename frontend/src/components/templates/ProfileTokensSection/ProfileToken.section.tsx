import {
    PerofileTokensContentWrapper,
    ProfileTokensCatergoryWrapper,
    ProfileTokensWrapper,
} from "./ProfileToken.styled";
import {CategoryShapeAtom} from "../../atoms/CategoryShapeAtom/CategoryShape.atom";

import categoryIMG from '../../../assets/pictures/issuerPic.png';
import ccIMG from '../../../assets/pictures/ccIMG.png';
import poapIMG from '../../../assets/pictures/poapDEVCON.png';
import vacineIMG from '../../../assets/pictures/covidVacine.png';

import medicalICON from '../../../assets/medicalICON.png';
import eventsICON from '../../../assets/eventsICON.png';
import idICON from '../../../assets/idICON.png';

import {PropertyDataOrganism} from "../../organisms/PropertyDataOrganism/PropertyData.organism";
import { useAccount } from '@web3modal/react';
import { useEffect, useState } from "react";

// Usage


import axios from 'axios';

export const ProfileTokensSection = () => {
    const { address, isConnected } = useAccount();

    const [currentNfts, setCurrentNfts] = useState([
        {
            name: 'Vaxination',
            properties: {
                description: '2nd covid booster',
                nftURL: 'https://www.google.com',
                category: 'Medical records',
            },
        },
        {
            name: 'Devcon POAP',
            properties: {
                description: 'Proof of attendence at devcon',
                nftURL: 'https://www.google.com',
                category: 'Events',
            },
        },
        {
            name: 'Proof of humanity',
            properties: {
                description: 'PoH NFT',
                nftURL: 'https://www.google.com',
                category: 'Personal IDENTITY',
            },
        },

    ]);

    useEffect(() => {
        if (address) {
            const options = {
                method: 'GET',
                url: `https://deep-index.moralis.io/api/v2/${address}/nft`,
                params: {chain: 'mumbai', format: 'decimal'},
                headers: {accept: 'application/json', 'X-API-Key': 'test'}
              };

            axios
            .request(options)
            .then(function (response) {
                setCurrentNfts(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
        }
    }, [isConnected]);



    return (
        <ProfileTokensWrapper>
            <ProfileTokensCatergoryWrapper>
                <h2>Categories</h2>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={medicalICON.src}/>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={eventsICON.src}/>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={idICON.src}/>
            </ProfileTokensCatergoryWrapper>
            <PerofileTokensContentWrapper>
                <h2>NFts & SBTs</h2>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={ccIMG.src}/>
            </PerofileTokensContentWrapper>
            <PropertyDataOrganism/>
        </ProfileTokensWrapper>
    )
}
