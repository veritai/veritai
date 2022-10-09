import styled from "styled-components";

export const UploadFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10rem;
  width: 35.4rem;
  height: 38rem;
`;

export const UploadFileTitle = styled.div`
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

export const UploadFileContent = styled.div`
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

export const UploadFile = styled.div`
  border: 0.3rem dashed #ffffff;
  width: 100%;
  height: inherit;
`;
