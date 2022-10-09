import {TokenPropertyWrapper} from "./TokenProperty.styled";

interface TokenPropertyProps {
    propertyKey: string;
    propertyValue: string;
}

export const TokenPropertyAtom = ( props: TokenPropertyProps) => {

    const {propertyKey, propertyValue} = props;

    return (
        <TokenPropertyWrapper>
            <p>{`${propertyKey}: `}</p>
            <p>{propertyValue}</p>
        </TokenPropertyWrapper>
    )
}
