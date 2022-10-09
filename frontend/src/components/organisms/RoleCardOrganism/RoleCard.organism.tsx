import {RoleCardFile, RoleCardIMG, RoleCardText, RoleCardWrapper} from "./RoleCard.styled";
import {IconButtonMolecule} from "../../molecules/IconButtonMolecule/IconButton.molecule";
import {ConnectButton} from "@web3modal/react";
import React, {MouseEventHandler} from "react";

interface Props {
    iconButtonSrc: string;
    cardTitle: string;
    iconText: string;
    connectButton?: boolean;
    srcIMG?: string;
    onClick: () => void;
    isCardIMGenabled?: boolean;
}

export const RoleCardOrganism = (props: Props) => {

    const {iconButtonSrc, cardTitle, iconText, connectButton = false, srcIMG, onClick, isCardIMGenabled = true} = props;

    return (
        <RoleCardWrapper>
            <RoleCardText>{cardTitle}</RoleCardText>
            {
                !isCardIMGenabled &&
                <RoleCardFile>
                    <label htmlFor="avatar">Choose a profile picture:
                        <input type="file"
                               id="avatar" name="avatar"
                               accept="image/png, image/jpeg"/>
                    </label>
                </RoleCardFile>
            }
            {isCardIMGenabled &&
                <RoleCardIMG src={srcIMG} alt="Role Card Image"/>
            }
            {
                !connectButton &&
                <IconButtonMolecule
                    iconText={iconText}
                    src={iconButtonSrc}
                    backgroundColor={'#322DC1'}
                    borderColor={'#322DC1'}
                    iconWidth='1.8rem'
                    color={'#FFFFFF'}
                    // width={'25.0rem'}
                    height={'6.2rem'}
                    onClick={onClick}
                />
            }
            {
                connectButton && <ConnectButton/>
            }
        </RoleCardWrapper>
    )
}
