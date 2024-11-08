import React, { useState, useEffect } from "react";
import * as C from "./TutorialStyle";
import { useNavigate } from "react-router-dom";

import tutorial1 from "../../assets/imgs/tutorial1.png";
import tutorial2 from "../../assets/imgs/tutorial2.png";
import tutorial3 from "../../assets/imgs/tutorial3.png";
import tutorial4 from "../../assets/imgs/tutorial4.png";

// import Video from "../../assets/calarm.mp4";
import Exel from "../../assets/imgs/icons/exel.png";
import Side from "../../assets/imgs/icons/side.png";
import Handle from "../../assets/imgs/icons/handle.png";
import Break from "../../assets/imgs/icons/break.png";
import Gear from "../../assets/imgs/icons/gear.png";

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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [clickedStates, setClickedStates] = useState([false, false, false, false]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isImageLoaded) return;

    const interval = setInterval(() => {
      if (currentImageIndex < images.length - 1) {
          setCurrentImageIndex((prevIndex) => prevIndex + 1);
        
      } else {
        clearInterval(interval);
      }
    }, 3000);

    readText(imageTexts[currentImageIndex]);

    return () => clearInterval(interval);
  }, [isImageLoaded, currentImageIndex]);

  const handleLoadImages = () => {
    setIsImageLoaded(true);
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleReportPage = () => {
    navigate("/reportBox");
  };

  const readText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleImageClick = (index) => {
    const newStates = [...clickedStates];
    newStates[index] = !newStates[index];
    setClickedStates(newStates);
    setCurrentImageIndex(index);
  };

  return (
    <C.TutorialContainer>
      <C.ReportImg onClick={handleReportPage} src={report} alt="reportbox" />
      {/* <video
        style={{
          width: "50vw",
          height: "35vh",
          objectFit: "cover",
          marginBottom: 100,
          position: "absolute",
          top: "8%",
        }}
        autoPlay
        muted
        loop
      >
        <source src={Video} type="video/mp4" />
      </video> */}
      {isImageLoaded ? (
        currentImageIndex < images.length ? (
          <C.GuideContainer>
            <C.Image
              src={images[currentImageIndex]}
              alt={`Tutorial Image ${currentImageIndex + 1}`}
            />
          </C.GuideContainer>
        ) : (
          <div>끝</div>
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
              filter: clickedStates[index]
                ? "brightness(0.7) saturate(100%) sepia(100%) hue-rotate(-10deg)"
                : "none",
              opacity: clickedStates[index] ? 0.8 : 1,
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </C.TutorialContainer>
  );
};

export default Tutorial;
