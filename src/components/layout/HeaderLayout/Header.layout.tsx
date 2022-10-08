import {HeaderWrapper} from "./Header.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";

import logo from '../../../../src/assets/veritaiLOGO.svg'
import ButtonAtom from "../../atoms/ButtonAtom/Button.atom";
import {IconButtonMolecule} from "../../molecules/IconButtonMolecule/IconButton.molecule";
import {RoleCardOrganism} from "../../organisms/RoleCardOrganism/RoleCard.organism";

export const HeaderLayout = () => {
    return (
        <HeaderWrapper>
            <IconAtom
                src={logo.src}
                alt='logo'
                width={'2.853rem'}
            />
            <IconButtonMolecule
                iconWidth='1.8rem'
                src={logo.src}
                iconText='Contactar'
            />
        </HeaderWrapper>
    )
}
