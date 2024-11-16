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

import crash from "../../assets/imgs/crash.png";
import rotateHandle from "../../assets/imgs/rotateHandle.png";

import report from "../../assets/imgs/Report.png";
import UseSpeachToText from "../../hooks/useSpeachToText";

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
  {
    img: crash,
    text: "앞 차와 충돌하기",
  },
  {
    img: rotateHandle,
    text: "핸들을 돌려주세요",
  },
];

const Tutorial = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isVoiceDisabled, setIsVoiceDisabled] = useState(false); // 음성 인식 비활성화 상태 추가
  const { toggleListening, transcript, listening } = UseSpeachToText();

  const navigate = useNavigate();

  useEffect(() => {
    // 음성 인식이 비활성화되었으면 더 이상 작동하지 않게 처리
    if (!isVoiceDisabled) {
      console.log(listening);
      console.log(transcript);

      toggleListening(); // 음성 인식 시작
    }
  }, [isVoiceDisabled]); // isVoiceDisabled가 변경되면만 호출

  useEffect(() => {
    // 이미지가 로드된 후 텍스트를 읽어주는 기능
    if (isImageLoaded && currentImageIndex < Object.length + 1) {
      readText(Object[currentImageIndex - 1].text);
      console.log(currentImageIndex)
    }
    if (currentImageIndex == 5){
      setIsFinished(true);
    }
  }, [isImageLoaded, currentImageIndex]);



  const handleLoadImages = () => {
    if(currentImageIndex == 5){
      console.log(currentImageIndex)
      setCurrentImageIndex(0)
      return;
    }

    if (currentImageIndex < Object.length) {
      // Object 배열의 마지막 요소까지 증가
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
      setIsImageLoaded(true);
    } else {
      // 마지막 이미지를 로드한 후 종료 상태로 설정
      setIsFinished(true);
    }
  };

  useEffect(() => {
    // 음성 인식 결과에 따라 이미지 변경
    if (transcript.trim().includes("네") && !isVoiceDisabled) {
      handleLoadImages(); // "네"를 말했을 때와 같은 방식으로 처리
      setIsVoiceDisabled(true); // "네" 인식 후 음성 인식 비활성화
    } else if (transcript.trim().includes("아니요")) {
      setIsImageLoaded(false); // 음성으로 '아니요'를 인식했을 때
    }
  }, [transcript]);

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleReportPage = () => {
    navigate("/reportBox");
  };

  const readText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance); // 음성 합성
  };

  const handleImageClick = (index) => {
    // 클릭한 아이콘의 인덱스가 현재 인덱스보다 클 경우에만 이동
    if (index === currentImageIndex) {
      setCurrentImageIndex(index + 1);
      setIsImageLoaded(true); // 이미지 로드 상태를 true로 변경
    }
  };

  return (
    <C.TutorialContainer>
      <C.ReportImg onClick={handleReportPage} src={report} alt="reportbox" />

      {/* 이미지가 로드되었고, 아직 끝에 도달하지 않았다면 이미지와 텍스트 표시 */}
      {isImageLoaded ? (
        !isFinished ? (
          <C.GuideContainer>
            <C.Image
              src={Object[currentImageIndex - 1]?.img}
              alt={`Tutorial Image ${currentImageIndex + 1}`}
            />
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
            <span style={{ fontSize: 16, color: "#919191" }}>
              음성 인식 중입니다.
            </span>
          </div>

          <C.ButtonContainer>
            {/* Yes 버튼 클릭 시 이미지 로드 */}
            <C.OButton onClick={handleLoadImages}>Yes</C.OButton>
            <C.XButton onClick={handleNavigateHome}>No</C.XButton>
          </C.ButtonContainer>
        </C.StyledDiv>
      )}

      {/* 첫 번째 이미지에서는 아이콘 버튼 숨기기 */}
      {currentImageIndex > 0 && ( // currentImageIndex가 1 이상일 때만 아이콘 버튼을 보여줌
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
