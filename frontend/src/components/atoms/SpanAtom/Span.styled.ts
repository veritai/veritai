import styled from "styled-components";

interface SpanProps {
    color?: string;
}

export const SpanWrapper = styled.span`
  color: ${({color}) => color};
  padding-left: 1rem;
`;
