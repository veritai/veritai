import {HeaderWrapper, IconWrapper} from "./Header.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import {IconButtonMolecule} from "../../molecules/IconButtonMolecule/IconButton.molecule";

import logo from '../../../../src/assets/veritaiLOGO.svg'
import contactIcon from '../../../../src/assets/contactIcon.svg'
import walletIcon from '../../../../src/assets/walletIcon.svg'

import { useAccount } from '@web3modal/react'
import { useDisconnect } from '@web3modal/react'

export const HeaderLayout = () => {
    const disconnect = useDisconnect()
    // disconnect()
    const { address, isConnected } = useAccount()

    return (
        <HeaderWrapper>
            <IconWrapper>
                <IconAtom
                    src={logo.src}
                    alt='logo'
                    width={'2.853rem'}
                />
                <h2>Veritai</h2>
            </IconWrapper>
            { isConnected &&
                <div>
                    <IconAtom src={walletIcon.src} alt='wallet logo'/>
                    <p>{address}</p>
                </div>
            }
            { !isConnected &&
                <IconButtonMolecule
                    iconWidth='1.8rem'
                    src={contactIcon.src}
                    iconText='Contact'
                    backgroundColor={'#322DC1'}
                    borderColor={'#322DC1'}
                    color='white'
                />
            }
        </HeaderWrapper>
    )
}
