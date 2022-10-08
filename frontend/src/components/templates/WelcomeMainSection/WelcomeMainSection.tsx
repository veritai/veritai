import {WelcomeMainCardsWrapper, WelcomeMainWrapper} from "./WelcomeMain.styled";
import {RoleCardOrganism} from "../../organisms/RoleCardOrganism/RoleCard.organism";
import walletIcon from "../../../assets/walletIcon.svg";

export const WelcomeMainSection = () => {
    return (
        <WelcomeMainWrapper>
            <WelcomeMainCardsWrapper>
                <RoleCardOrganism
                    cardTitle='New? Let’s start'
                    iconButtonSrc={walletIcon.src}
                    iconText='Set my ID'
                />
                <RoleCardOrganism
                    cardTitle='Process to recover'
                    iconButtonSrc={walletIcon.src}
                    iconText='Recover ID'
                />
                <RoleCardOrganism
                    cardTitle='User Tokens'
                    iconButtonSrc={walletIcon.src}
                    iconText='Profile'
                />
                <RoleCardOrganism
                    cardTitle='Issuer Dashboard'
                    iconButtonSrc={walletIcon.src}
                    iconText='Issuer'
                />
            </WelcomeMainCardsWrapper>
        </WelcomeMainWrapper>
    )
}
