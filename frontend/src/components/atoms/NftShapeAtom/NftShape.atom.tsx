import {NFTshapeBorder, NFTshapeIMG, NFTshapeWrapper} from "./NftShape.styled";


interface NFTshapeProps {
    src: string;
    alt: string;

}
export const NFTshapeAtom = ( props: NFTshapeProps) => {

    const {src, alt} = props;

    return (
        <NFTshapeWrapper>
            <NFTshapeIMG src={src} alt={alt}/>
            <NFTshapeBorder></NFTshapeBorder>
        </NFTshapeWrapper>
    )
}
