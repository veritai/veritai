import {RecoverMainWrapper} from "./RecoverMain.styled";
import idICON from "../../../assets/nickNameICON.svg";
import {RoleCardOrganism} from "../../organisms/RoleCardOrganism/RoleCard.organism";

export const RecoverMainSection = () => {
    return (
        <RecoverMainWrapper>
            <RoleCardOrganism
                cardTitle='Upload your Government ID'
                iconButtonSrc={idICON.src}
                iconText='Recover my SBT'
                onClick={() => console.log('yo')}
                isCardIMGenabled={false}
            />
        </RecoverMainWrapper>
    )
}
