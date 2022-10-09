import styled from "styled-components";

export const RoleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 35.4rem;
  padding: 3%;
  height: 41.9rem;
  background: linear-gradient(180deg, #322DC1 0%, #170F34 100%);
  border-radius: 1.8rem;
`;

export const RoleCardText = styled.h2`
  //font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const RoleCardIMG = styled.img`
    height: 20rem;
`;
