import {PropertyDataProperties, PropertyDataTitle, PropertyDataWrapper} from "./PropertyData.styled";
import {TokenPropertyAtom} from "../../atoms/TokenPropertyAtom/TokenProperty.atom";

export const PropertyDataOrganism = () => {
    return (
        <PropertyDataWrapper>
            <PropertyDataTitle>
                <h3>Category</h3>
                <h3>NFT or SBT Name</h3>
            </PropertyDataTitle>
            <PropertyDataProperties>
                <TokenPropertyAtom
                    propertyKey='key'
                    propertyValue='value'
                />
            </PropertyDataProperties>
        </PropertyDataWrapper>
    )
}
