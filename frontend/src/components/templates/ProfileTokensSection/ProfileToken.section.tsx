import {
    PerofileTokensContentWrapper,
    ProfileTokensCatergoryWrapper,
    ProfileTokensWrapper,
} from "./ProfileToken.styled";
import {CategoryShapeAtom} from "../../atoms/CategoryShapeAtom/CategoryShape.atom";

import categoryIMG from '../../../assets/pictures/issuerPic.png';
import {PropertyDataOrganism} from "../../organisms/PropertyDataOrganism/PropertyData.organism";
import { useAccount } from '@web3modal/react';
import { useEffect } from "react";

// Usage

import axios from 'axios';

export const ProfileTokensSection = () => {
    const { address, isConnected } = useAccount();

    console.log({address});

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
                    src={categoryIMG.src}/>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={categoryIMG.src}/>
            </ProfileTokensCatergoryWrapper>
            <PerofileTokensContentWrapper>
                <h2>NFts & SBTs</h2>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={categoryIMG.src}/>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={categoryIMG.src}/>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={categoryIMG.src}/>
            </PerofileTokensContentWrapper>
            <PropertyDataOrganism/>
        </ProfileTokensWrapper>
    )
}
