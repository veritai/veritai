import styled from "styled-components";
import exp from "constants";

export const PropertyDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PropertyDataTitle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38.1rem;
  height: 12rem;
  border: 0.05rem solid #ffffff;
  border-radius: 1.8rem;
  background-color: #170F34;
  top: -17%;
  margin: 0 auto;
`;

export const PropertyDataProperties = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;
  width: 48.8rem;
  height: 100%;
  border: 0.05rem solid #ffffff;
  border-radius: 1.8rem;
  padding: 9rem 4rem;
`;
