// Tutorial.js
import React, { useState, useEffect } from "react";
import * as C from "./TutorialStyle";
import { useNavigate } from "react-router-dom";

import tutorial1 from "../../assets/imgs/tutorial1.png";
import tutorial2 from "../../assets/imgs/tutorial2.png";
import tutorial3 from "../../assets/imgs/tutorial3.png";
import tutorial4 from "../../assets/imgs/tutorial4.png";

import load from "../../assets/imgs/whatisthis.png";

import report from "../../assets/imgs/Report.png";

const images = [tutorial1, tutorial2, tutorial3, tutorial4];
const imageTexts = [
  "브래이크를 한 번에 깊게 밟아주세요.",
  "기어를 중립으로 놓아주세요.",
  "사이드 브레이크를 올려주세요.",
  "시동을 끄고 브레이크를 밟아주세요",
];

const Tutorial = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false); // 이미지를 로드할지 여부
  const [isFinished, setIsFinished] = useState(false); // 마지막 이미지 표시 여부
  const navigate = useNavigate();

  useEffect(() => {
    if (!isImageLoaded || isFinished) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          setIsFinished(true); // 마지막 이미지에 도달 시 isFinished 설정
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 5000); // 2초마다 이미지 전환

    return () => clearInterval(interval);
  }, [isImageLoaded, isFinished]);

  useEffect(() => {
    // 이미지가 로드되었고 끝나지 않았을 때 TTS 실행
    if (isImageLoaded && !isFinished) {
      readText(imageTexts[currentImageIndex]);
    }
  }, [currentImageIndex, isImageLoaded, isFinished]);

  const handleLoadImages = () => {
    setIsImageLoaded(true); // O 버튼 클릭 시 이미지 로드 시작
  };

  const handleNavigateHome = () => {
    navigate("/"); // 홈 페이지로 이동
  };

  const handleReportPage = () => {
    navigate('/reportBox'); // '/report' 경로로 네비게이트
  };

  const readText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <C.TutorialContainer>
      <C.ReportImg onClick={handleReportPage} src={report} alt={`reportbox`} />
      <C.FirstImage src={load} alt="Load Guide" />
      {isImageLoaded ? (
        isFinished ? (
          <div>끝</div>
        ) : (
          <C.GuideContainer>
            <C.Image
              src={images[currentImageIndex]}
              alt={`Tutorial Image ${currentImageIndex + 1}`}
            />
          </C.GuideContainer>
        )
      ) : (
        <C.StyledDiv>
          <C.Text>위험한 상황입니까?</C.Text>
          <C.ButtonContainer>
            <C.OButton onClick={handleLoadImages}>Yes</C.OButton>
            <C.XButton onClick={handleNavigateHome}>No</C.XButton>
          </C.ButtonContainer>
        </C.StyledDiv>
      )}
    </C.TutorialContainer>
  );
};

export default Tutorial;
