import {
    CategoryShapeBorder,
    CategoryShapeIMG,
    CategoryShapeWrapper,
} from "./CategoryShape.styled";

interface CategoryShapeProps {
    src: string;
    alt: string;
    isSelected?: boolean;

}
export const CategoryShapeAtom = ( props: CategoryShapeProps) => {

    const {src, alt, isSelected = false} = props;

    return (
        <CategoryShapeWrapper
            isSelected={false}
        >
            <CategoryShapeIMG src={src} alt={alt}/>
            {
                isSelected && <CategoryShapeBorder></CategoryShapeBorder>
            }
        </CategoryShapeWrapper>
    )
}
