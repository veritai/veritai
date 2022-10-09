import {PropertyDataProperties, PropertyDataTitle, PropertyDataWrapper} from "./PropertyData.styled";
import {TokenPropertyAtom} from "../../atoms/TokenPropertyAtom/TokenProperty.atom";

export const PropertyDataOrganism = () => {
    return (
        <PropertyDataWrapper>
            <PropertyDataTitle>
                <h3>Medical Records</h3>
                <h3>Covid Vaccine III Doses</h3>
            </PropertyDataTitle>
            <PropertyDataProperties>
                <h2>Properties: </h2>
                <TokenPropertyAtom
                    propertyKey='Vaccine name'
                    propertyValue='Covid'
                />
                <TokenPropertyAtom
                    propertyKey='Date of application'
                    propertyValue='07/09/2021'
                />
                <TokenPropertyAtom
                    propertyKey='Place of application'
                    propertyValue='Sura Sao Paulo'
                />
                <TokenPropertyAtom
                    propertyKey='City of application'
                    propertyValue='Medellin'
                />
                <TokenPropertyAtom
                    propertyKey='Country of application'
                    propertyValue='Colombia'
                />
                <TokenPropertyAtom
                    propertyKey='Doctor in charge'
                    propertyValue='Elias Dercon'
                />
            </PropertyDataProperties>
        </PropertyDataWrapper>
    )
}
