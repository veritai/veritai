import {
    PerofileTokensContentWrapper,
    ProfileTokensCatergoryWrapper,
    ProfileTokensWrapper,
} from "./ProfileToken.styled";
import {CategoryShapeAtom} from "../../atoms/CategoryShapeAtom/CategoryShape.atom";

import categoryIMG from '../../../assets/pictures/issuerPic.png';
import {PropertyDataOrganism} from "../../organisms/PropertyDataOrganism/PropertyData.organism";

export const ProfileTokensSection = () => {
    return (
        <ProfileTokensWrapper>
            <ProfileTokensCatergoryWrapper>
                <h2>Categories</h2>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={categoryIMG.src}/>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={categoryIMG.src}/>
            </ProfileTokensCatergoryWrapper>
            <PerofileTokensContentWrapper>
                <h2>NFts & SBTs</h2>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={categoryIMG.src}/>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={categoryIMG.src}/>
                <CategoryShapeAtom
                    alt='Category Icon'
                    src={categoryIMG.src}/>
            </PerofileTokensContentWrapper>
            <PropertyDataOrganism/>
        </ProfileTokensWrapper>
    )
}
