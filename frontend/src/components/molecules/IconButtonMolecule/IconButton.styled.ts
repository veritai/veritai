import styled from "styled-components";

type IconButtonPropsT = {
    backgroundColor: string;
}

export const IconButtonWrapper = styled.button<IconButtonPropsT>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  column-gap: 1rem;
  border-radius: 5rem;
  background-color: ${({backgroundColor}) => backgroundColor};
  border: 0.1rem solid ${({borderColor}) => borderColor};
  color: ${({color}) => color};
  width: ${({width}) => width};
  height: ${({height}) => height};
  &:hover {
    color: ${({color}) => color};
    background-color: transparent;
    border: 0.1rem solid ${({color}) => color};
  }
`;
