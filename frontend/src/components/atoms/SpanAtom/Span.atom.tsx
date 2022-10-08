import {SpanWrapper} from "./Span.styled";

interface Props {
    text: string;
    color: string;
}

export const SpanAtom = ( props: Props) => {

    const {text, color} = props;

    return (
        <SpanWrapper
            color={color}
        >
            {text}
        </SpanWrapper>
    )
}
