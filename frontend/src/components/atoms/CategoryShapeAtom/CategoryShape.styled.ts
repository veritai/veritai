import styled from "styled-components";

export const CategoryShapeWrapper = styled.div`
  position: relative;
  display: flex;
  width: 14.5rem;
  background-color: #0070f3;
  height: 14.5rem;
  border-radius: 50%;
  border: 0.2rem solid #BF4E4E;
`;

export const CategoryShapeIMG = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

export const CategoryShapeBorder = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 16.2rem;
  height: 16.2rem;
  border: 0.2rem solid #BF4E4E;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin: 0 auto;
`;
