import {RoleCardFile, RoleCardIMG, RoleCardText, RoleCardWrapper} from "./RoleCard.styled";
import {IconButtonMolecule} from "../../molecules/IconButtonMolecule/IconButton.molecule";
import {ConnectButton} from "@web3modal/react";
import React, {MouseEventHandler, useState } from "react";
const keccak256 = require("keccak256");

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

    const [fileHash, setFileHash] = useState(''); 

    const {iconButtonSrc, cardTitle, iconText, connectButton = false, srcIMG, onClick, isCardIMGenabled = true} = props;

    var loadFile = (event) => {
        // const fileHash = keccak256(event.target.files[0]);
        const fileHash = keccak256("xxx");
        setFileHash(fileHash);
        window.fileHash = fileHash;
	    // image.src = URL.createObjectURL(event.target.files[0]);
    }

    return (
        <RoleCardWrapper>
            <RoleCardText>{cardTitle}</RoleCardText>
            {
                !isCardIMGenabled &&
                <RoleCardFile>
                    <label htmlFor="avatar">Choose a profile picture:
                        <input type="file"
                                onChange={(e) => loadFile(e)}
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
