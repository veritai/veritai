import {RoleCardIMG, RoleCardText, RoleCardWrapper} from "./RoleCard.styled";
import {IconButtonMolecule} from "../../molecules/IconButtonMolecule/IconButton.molecule";
import {ConnectButton} from "@web3modal/react";
import srcIMG from '../../../../src/assets/pictures/connectPicture.png'

// import { ConnectButton, useConnectModal } from '@web3modal/react'


interface Props {
    iconButtonSrc: string;
    cardTitle: string;
    iconText: string;
    connectButton?: boolean;
}

export const RoleCardOrganism = (props: Props) => {

    // const { isOpen, open, close } = useConnectModal()

    const {iconButtonSrc, cardTitle, iconText, connectButton = false } = props;

    return (
        <RoleCardWrapper>
            <RoleCardText>{cardTitle}</RoleCardText>
            <RoleCardIMG src={srcIMG.src} alt="Role Card Image"/>
            {
                !connectButton &&
                <IconButtonMolecule
                    iconText = {iconText}
                    src={iconButtonSrc}
                    backgroundColor={'#322DC1'}
                    borderColor={'#322DC1'}
                    iconWidth='1.8rem'
                    color={'#FFFFFF'}
                    // width={'25.0rem'}
                    height={'6.2rem'}
                    onClick={() => console.log('click')}
                />
            }
            {
                connectButton && <ConnectButton />
            }
        </RoleCardWrapper>
    )
}
