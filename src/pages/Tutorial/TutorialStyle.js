// TutorialStyle.js
import styled from "styled-components";

export const TutorialContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const GuideContainer = styled.div`
  margin-top: 7vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  gap: 75px;
`;

export const FirstImage = styled.img`
  width: 150px;
  height: auto;
  transition: opacity 0.5s ease-in-out;
`;

export const reportContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-items: end;
  width: 100%;
`;

export const VideoBox = styled.video`
  width: 300px;
  height: auto;
  transition: opacity 0.5s ease-in-out;
`;

export const ReportImg = styled.img`
  width: 100px;
  height: auto;
  margin-left: 80%;
  margin-top: 3.5%;
  transition: opacity 0.5s ease-in-out;
`;

export const Image = styled.img`
  width: 600px;

  height: auto;
  transition: opacity 0.5s ease-in-out;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 2%;
`;

export const OButton = styled.button`
  padding: 60px 100px;
  font-size: 64px;
  font-weight: 700;
  cursor: pointer;
  background-color: #ffcdcd;
  border: none;
  color: #be1717;
  border-radius: 5px;
`;

export const XButton = styled.button`
  padding: 60px 100px;
  font-size: 64px;
  font-weight: 700;
  cursor: pointer;
  background-color: #c4d9ee;
  border: none;
  color: #525252;
  border-radius: 5px;
`;

export const Text = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
// Margin을 가진 div 스타일 컴포넌트
export const StyledDiv = styled.div`
  text-align: center;
  margin-top: 20%;
`;
