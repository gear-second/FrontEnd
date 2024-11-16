import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainWrapper = styled.div`
  display: flex;
  
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  position: absolute;
  opacity: 0.5;
  width: 1000px;
  height: auto;
  transition: opacity 0.5s ease-in-out;
`;