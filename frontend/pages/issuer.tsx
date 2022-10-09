import {NextPage} from "next";
import {IconButtonMolecule} from "../src/components/molecules/IconButtonMolecule/IconButton.molecule";
import React from "react";

import exampleICON from '../src/assets/contactIcon.svg';

const handleOnClick = () => {
console.log('click');
}

const Issuer: NextPage = () => {
    return (
        <>
            <IconButtonMolecule
                iconText = 'Button'
                src={exampleICON.src}
                backgroundColor={'#322DC1'}
                borderColor={'#322DC1'}
                iconWidth='1.8rem'
                color={'#FFFFFF'}
                // width={'25.0rem'}
                height={'6.2rem'}
                onClick={handleOnClick}
            />
        </>
    )
}

export default Issuer
