import {IndexMainWrapper} from "./IndexMain.styled";
import {RoleCardOrganism} from "../../organisms/RoleCardOrganism/RoleCard.organism";
import walletIcon from '../../../assets/walletIcon.svg'
import {SpanAtom} from "../../atoms/SpanAtom/Span.atom";


export const IndexMainSection = () => {
    return (
        <IndexMainWrapper>
            <h1>WELCOME TO
                <SpanAtom
                    color={'#52EB70'}
                    text={'VERITARI'}
                />
            </h1>
            <p>REAL IDENTITY</p>
            <RoleCardOrganism
                cardTitle='To start connect to your wallet direclty from the button'
                iconButtonSrc={walletIcon.src}
                iconText='Connect'
                connectButton={true}
            />
        </IndexMainWrapper>
    )
}
