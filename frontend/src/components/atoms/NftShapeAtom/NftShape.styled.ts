import styled from "styled-components";

export const NFTshapeWrapper = styled.div`
  position: relative;
  display: flex;
  width: 14.5rem;
  background-color: #0070f3;
  height: 14.5rem;
  border: 0.2rem solid #BF4E4E;
  border-radius: 10rem;
  clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%);


`;

export const NFTshapeIMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: inherit;
  border-radius: 10rem;
  clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%);


`;

export const NFTshapeBorder = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 16.2rem;
  height: 16.2rem;
  border: 0.2rem solid #BF4E4E;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  border-radius: 10rem;
  clip-path: polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%);



`;
