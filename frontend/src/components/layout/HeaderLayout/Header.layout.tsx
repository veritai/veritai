import {HeaderAdressWrapper, HeaderWrapper, IconWrapper} from "./Header.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import {IconButtonMolecule} from "../../molecules/IconButtonMolecule/IconButton.molecule";

import logo from '../../../../src/assets/veritaiLOGO.svg'
import contactIcon from '../../../../src/assets/contactIcon.svg'
import walletIcon from '../../../../src/assets/walletIcon.svg'
import logoutIcon from '../../../../src/assets/logoutIcon.svg'

import {useAccount} from '@web3modal/react'
import {useDisconnect} from '@web3modal/react'
import {useRouter} from "next/router";

export const HeaderLayout = () => {
    const {address, isConnected} = useAccount()
    const result = address.slice(-5);

    const disconnect = useDisconnect()

    const router = useRouter();

    const handleDisconnect = () => {
        disconnect();
        router.push("/").then(r => console.log('User is disconnected, redirecting to profile page'));

    }

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
            {isConnected &&
                <HeaderAdressWrapper>
                    <IconAtom src={walletIcon.src} alt='wallet logo'/>
                    <p>{`...${result}`}</p>
                    <a onClick={() => handleDisconnect()}>
                        <IconAtom src={logoutIcon.src} alt='logout logo'/>
                    </a>
                </HeaderAdressWrapper>
            }
            {!isConnected &&
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
