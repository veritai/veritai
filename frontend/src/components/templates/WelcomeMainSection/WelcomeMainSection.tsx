import {WelcomeMainCardsWrapper, WelcomeMainWrapper} from "./WelcomeMain.styled";
import {RoleCardOrganism} from "../../organisms/RoleCardOrganism/RoleCard.organism";
import walletIcon from "../../../assets/walletIcon.svg";
import issuerIMG from "../../../assets/pictures/issuerPic.png";
import recoverIMG from "../../../assets/pictures/recoverPic.png";
import userTokensIMG from "../../../assets/pictures/userTokensPic.png";
import setUpIMG from "../../../assets/pictures/setUpPic.png";
import {useRouter} from "next/router";

export const WelcomeMainSection = () => {
    const router = useRouter();
    return (
        <WelcomeMainWrapper>
            <WelcomeMainCardsWrapper>
                <RoleCardOrganism
                    cardTitle='New? Let’s start'
                    iconButtonSrc={walletIcon.src}
                    iconText='Set my ID'
                    srcIMG={setUpIMG.src}
                    width='15.rem'
                    onClick={() => router.push("/setup")}
                />
                <RoleCardOrganism
                    cardTitle='Process to recover'
                    iconButtonSrc={walletIcon.src}
                    iconText='Recover ID'
                    srcIMG={recoverIMG.src}
                    width='15.rem'
                    onClick={() => router.push("/recover")}
                />
                <RoleCardOrganism
                    cardTitle='User Tokens'
                    iconButtonSrc={walletIcon.src}
                    iconText='Profile'
                    srcIMG={userTokensIMG.src}
                    width='15.rem'
                    onClick={() => router.push("/profile")}
                    // onClick={handleClick}
                />
                <RoleCardOrganism
                    cardTitle='Issuer Dashboard'
                    iconButtonSrc={walletIcon.src}
                    iconText='Issuer'
                    srcIMG={issuerIMG.src}
                    width='15.rem'
                    onClick={() => router.push("/issuer")}
                />
            </WelcomeMainCardsWrapper>
        </WelcomeMainWrapper>
    )
}
