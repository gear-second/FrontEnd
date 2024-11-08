import React, { useState, useEffect } from "react";
import * as C from "./TutorialStyle";
import { useNavigate } from "react-router-dom";

import tutorial1 from "../../assets/imgs/tutorial1.png";
import tutorial2 from "../../assets/imgs/tutorial2.png";
import tutorial3 from "../../assets/imgs/tutorial3.png";
import tutorial4 from "../../assets/imgs/tutorial4.png";


import Exel from "../../assets/imgs/icons/exel.png";
import Side from "../../assets/imgs/icons/side.png";
import Handle from "../../assets/imgs/icons/handle.png";
import Break from "../../assets/imgs/icons/break.png";
import Gear from "../../assets/imgs/icons/gear.png";

import Video from "../../assets/video/Video.mp4";


import report from "../../assets/imgs/Report.png";
import UseSpeachToText from "../../hooks/useSpeachToText";

// 이미지와 텍스트 데이터를 배열로 저장
const Object = [
  {
    img: tutorial1,
    text: "브래이크를 한 번에 깊게 밟아주세요.",
  },
  {
    img: tutorial2,
    text: "기어를 중립으로 놓아주세요",
  },
  {
    img: tutorial3,
    text: "사이드 브레이크를 올려주세요.",
  },
  {
    img: tutorial4,
    text: "시동을 끄고 브레이크를 밟아주세요",
  },
];

const Tutorial = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // 이미지가 로드된 후 텍스트를 읽어주는 기능
    if (isImageLoaded) {
      readText(Object[currentImageIndex].text);

  const [isFinished, setIsFinished] = useState(false);
  const { toggleListening, transcript, listening } = UseSpeachToText();

  const navigate = useNavigate();


    return () => clearInterval(interval);
  }, [isImageLoaded, isFinished]);

  useEffect(() => {
    if (isImageLoaded && !isFinished) {
      readText(imageTexts[currentImageIndex]);

    }
  }, [isImageLoaded, currentImageIndex]);
  const handleLoadImages = () => {
    setIsImageLoaded(true);
    setCurrentImageIndex(currentImageIndex + 1); // Yes 버튼 클릭 시 인덱스 증가
  };

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

  const handleImageClick = (index) => {
    // 클릭한 아이콘의 인덱스가 현재 인덱스보다 클 경우에만 이동
    if (index === currentImageIndex + 1) {
      setCurrentImageIndex(index);
      setIsImageLoaded(true); // 이미지 로드 상태를 true로 변경
    }
  };

  return (
    <C.TutorialContainer>

      <C.ReportImg onClick={handleReportPage} src={report} alt={`reportbox`} />

      <video autoPlay loop muted playsInline style={{ width: 400, height: "auto" }}>
        <source src={Video} type="video/mp4" />
      </video>


      {isImageLoaded ? (
        currentImageIndex < Object.length ? (
          <C.GuideContainer>

            <C.Image src={Object[currentImageIndex].img} alt={`Tutorial Image ${currentImageIndex + 1}`} />

          </C.GuideContainer>
        ) : (
          <div>끝</div>
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

      {/* 첫 번째 이미지에서는 아이콘 버튼 숨기기 */}
      {currentImageIndex > 0 && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            bottom: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10%",
          }}
        >
          {[Exel, Break, Gear, Side, Handle].map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`icon-${index}`}
              style={{
                width: 100,
                height: 100,
                border: "solid",
                borderRadius: 100,
                opacity: index === currentImageIndex ? 0.8 : 1,
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(index)} // 클릭 시 해당 인덱스로 이동
            />
          ))}
        </div>
      )}
    </C.TutorialContainer>
  );
};

export default Tutorial;
