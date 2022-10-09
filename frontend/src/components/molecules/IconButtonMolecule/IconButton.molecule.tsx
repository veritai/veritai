import {IconButtonWrapper} from "./IconButton.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";

interface Props {
    src: string;
    iconText: string;
    iconWidth: string;
    backgroundColor: string;
    borderColor: string;
    color: string;
    width?: string;
    height?: string;
    onClick: () => void;
}

export const IconButtonMolecule = ( props: Props) => {

    const { iconText, src, iconWidth, backgroundColor, borderColor, color, width = 'fit-content', height = '', onClick} = props;

    return(
        <IconButtonWrapper
            backgroundColor={`${backgroundColor}`}
            borderColor={`${borderColor}`}
            color={`${color}`}
            width={`${width}`}
            height={`${height}`}
            onClick={onClick}
            // onClick={ () => console.log('clicked')}
        >
            <IconAtom
                width={`${iconWidth}`}
                src={src}
                alt='button icon'
            />
            {iconText}
        </IconButtonWrapper>
    )
}
