import React, { useState, useEffect } from "react";
import * as C from "./TutorialStyle";
import { useNavigate } from "react-router-dom";

import tutorial1 from "../../assets/imgs/tutorial1.png";
import tutorial2 from "../../assets/imgs/tutorial2.png";
import tutorial3 from "../../assets/imgs/tutorial3.png";
import tutorial4 from "../../assets/imgs/tutorial4.png";

import Video from "../../assets/video/Video.mp4";

import report from "../../assets/imgs/Report.png";
import UseSpeachToText from "../../hooks/useSpeachToText";

const images = [tutorial1, tutorial2, tutorial3, tutorial4];
const imageTexts = [
  "브래이크를 한 번에 깊게 밟아주세요.",
  "기어를 중립으로 놓아주세요.",
  "사이드 브레이크를 올려주세요.",
  "시동을 끄고 브레이크를 밟아주세요",
];

const Tutorial = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const { toggleListening, transcript, listening } = UseSpeachToText();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isImageLoaded || isFinished) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          setIsFinished(true);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isImageLoaded, isFinished]);

  useEffect(() => {
    if (isImageLoaded && !isFinished) {
      readText(imageTexts[currentImageIndex]);
    }
  }, [currentImageIndex, isImageLoaded, isFinished]);

  useEffect(() => {
    toggleListening();
  }, []);

  useEffect(() => {
    // 음성 인식 결과가 "네"일 때 isImageLoaded를 true로 설정
    if (transcript.trim().includes("네")) {
      setIsImageLoaded(true);
    } else if (transcript.trim().includes("아니요")) {
      setIsImageLoaded(false); // 후에 이 코드 관련 처리 필요
    }
  }, [transcript]);

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleReportPage = () => {
    navigate("/reportBox");
  };

  console.log(`Transcript: "${transcript}"`);
  console.log("type", isImageLoaded);

  const readText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <C.TutorialContainer>
      <C.ReportImg onClick={handleReportPage} src={report} alt={`reportbox`} />

      <video autoPlay loop muted playsInline style={{ width: 400, height: "auto" }}>
        <source src={Video} type="video/mp4" />
      </video>

      {isImageLoaded ? (
        isFinished ? (
          <div>끝</div>
        ) : (
          <C.GuideContainer>
            <C.Image src={images[currentImageIndex]} alt={`Tutorial Image ${currentImageIndex + 1}`} />
          </C.GuideContainer>
        )
      ) : (
        <C.StyledDiv>
          <div
            style={{
              marginBottom: 30,
              display: "flex",
              flexDirection: "column",
              height: 60,
              width: 600,
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <C.Text>위험한 상황입니까?</C.Text>
            <span style={{ fontSize: 16, color: "#919191" }}>음성 인식 중입니다.</span>
          </div>

          <C.ButtonContainer>
            <C.OButton onClick={() => setIsImageLoaded(true)}>Yes</C.OButton>
            <C.XButton onClick={handleNavigateHome}>No</C.XButton>
          </C.ButtonContainer>
        </C.StyledDiv>
      )}
    </C.TutorialContainer>
  );
};

export default Tutorial;
