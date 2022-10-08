import {RoleCardWrapper} from "./RoleCard.styled";
import {IconButtonMolecule} from "../../molecules/IconButtonMolecule/IconButton.molecule";
import {ConnectButton} from "@web3modal/react";

// import { ConnectButton, useConnectModal } from '@web3modal/react'


interface Props {
    iconButtonSrc: string;
    cardTitle: string;
    iconText: string;
}

export const RoleCardOrganism = (props: Props) => {

    // const { isOpen, open, close } = useConnectModal()

    const {iconButtonSrc, cardTitle, iconText, } = props;

    return (
        <RoleCardWrapper>
            <h3>{cardTitle}</h3>
            <IconButtonMolecule
                iconText = {iconText}
                src={iconButtonSrc}
                backgroundColor={'#8E83AA'}
                borderColor={'#8E83AA'}
                iconWidth='1.8rem'
                color={'#FFFFFF'}
                width={'25.0rem'}
                height={'6.2rem'}
                onClick={() => console.log('click')}
            />
            <ConnectButton />
        </RoleCardWrapper>
    )
}
