import {CategoryShapeAtom} from "../../atoms/CategoryShapeAtom/CategoryShape.atom";
import {ProfileUserContent, ProfileUserSubWrapper, ProfileUserWrapper} from "./ProfileUser.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import walletIcon from "../../../assets/walletIcon.svg";
import nickNameICON from "../../../assets/nickNameICON.svg";
import {useAccount} from "@web3modal/react";

import userSBT from '../../../assets/pictures/userSBT.png';

export const ProfileUserSection = () => {

    const {address, isConnected} = useAccount()
    const result = address.slice(-5);

    const userNickName = 'User Nickname';

    return (
        <ProfileUserWrapper>
            <CategoryShapeAtom
                src={userSBT.src} alt='wallet logo'
            />
            <ProfileUserSubWrapper>
                <ProfileUserContent>
                    <IconAtom src={walletIcon.src} alt='wallet logo'/>
                    <p>{`...${result}`}</p>
                </ProfileUserContent>
                <ProfileUserContent>
                    <IconAtom src={nickNameICON.src} alt='wallet logo'/>
                    <p>{userNickName}</p>
                </ProfileUserContent>
            </ProfileUserSubWrapper>
        </ProfileUserWrapper>
    )
}
