import React, { useState } from "react";
import * as C from "./style";
import Exel from "../../assets/imgs/icons/exel.png";
import Break from "../../assets/imgs/icons/break.png";
import Handle from "../../assets/imgs/icons/handle.png";
import Side from "../../assets/imgs/icons/side.png";



const Simulation = () => {
  const [clickedStates, setClickedStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleImageClick = (index) => {
    const newStates = [...clickedStates];

    if (index === 0) {
      newStates[0] = !newStates[0];
      newStates[1] = false;
    } else if (index === 1) {
      newStates[1] = !newStates[1];
      newStates[0] = false;
    } else {
      newStates[index] = !newStates[index];
    }

    setClickedStates(newStates);
    console.log("이미지 상태:", newStates);
  };

  return (
    <C.Wrapper>
      <C.MainWrapper>
        
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
          <img
            src={Exel}
            alt="엑셀"
            style={{
              width: 100,
              height: 100,
              border: "solid",
              borderRadius: 100,
              filter: clickedStates[0]
                ? "brightness(0.7) saturate(100%) sepia(100%) hue-rotate(-10deg)"
                : "none",
              opacity: clickedStates[0] ? 0.8 : 1,
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(0)}
          />
          <img
            src={Break}
            alt="브레이크"
            style={{
              width: 100,
              height: 100,
              border: "solid",
              borderRadius: 100,
              filter: clickedStates[1]
                ? "brightness(0.7) saturate(100%) sepia(100%) hue-rotate(-10deg)"
                : "none",
              opacity: clickedStates[1] ? 0.8 : 1,
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(1)}
          />
          <img
            src={Handle}
            alt="기어"
            style={{
              width: 100,
              height: 100,
              border: "solid",
              borderRadius: 100,
              filter: clickedStates[2]
                ? "brightness(0.7) saturate(100%) sepia(100%) hue-rotate(-10deg)"
                : "none",
              opacity: clickedStates[2] ? 0.8 : 1,
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(2)}
          />
          <img
            src={Side}
            alt="사이드 브레이크"
            style={{
              width: 100,
              height: 100,
              border: "solid",
              borderRadius: 200,
              filter: clickedStates[3]
                ? "brightness(0.7) saturate(100%) sepia(100%) hue-rotate(-10deg)"
                : "none",
              opacity: clickedStates[3] ? 0.8 : 1,
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(3)}
          />
        </div>
      </C.MainWrapper>
    </C.Wrapper>
  );
};

export default Simulation;