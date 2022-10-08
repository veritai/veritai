import {IndexMainWrapper} from "./IndexMain.styled";
import {RoleCardOrganism} from "../../organisms/RoleCardOrganism/RoleCard.organism";
import walletIcon from '../../../assets/walletIcon.svg'


export const IndexMainSection = () => {
    return (
        <IndexMainWrapper>
            <h1>WELCOME TO<span>VERITAI</span></h1>
            <p>REAL IDENTITY</p>
            <RoleCardOrganism
                cardTitle='Wallet'
                iconButtonSrc={walletIcon.src}
                iconText='Connect'
            />
        </IndexMainWrapper>
    )
}
