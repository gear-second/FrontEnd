import React, { useEffect, useRef, useState } from "react";
import SampleImage from "../../assets/imgs/sample.png";
import * as C from "./style";
import Video from "../../assets/video/Video.mp4";
import UseMultiPart from "../../hooks/useMultiPart";
import crash from "../../assets/imgs/crash.png";

const Simulation = () => {
  const videoRef = useRef(null); // useRef로 비디오 DOM 참조 생성
  const isPausedAtFive = useRef(false); // 5초에서 이미 일시 정지했는지 확인용

  const { FileData, data } = UseMultiPart(); // 커스텀 훅 사용
  const [isUploading, setIsUploading] = useState(false); // 업로드 상태 관리

  const [solve, setSolve] = useState(false);

  // 업로드 처리 핸들러
  const handleUpload = () => {
    setTimeout(() => {
      setSolve(true);
      setIsUploading(true); // 업로드 시작
      FileData(SampleImage).finally(() => setIsUploading(false)); // 업로드 후 상태 초기화
    }, 1000);
  };

  useEffect(() => {
    if (data) {
    }
  }, [data]);
  useEffect(() => {
    const video = videoRef.current; // 비디오 DOM 요소 참조
    console.log(isUploading);

    if (video) {
      const handleTimeUpdate = () => {
        const currentTime = Math.floor(video.currentTime);

        if (currentTime === 7 && !isPausedAtFive.current) {
          video.pause(); // 5초에서 일시 정지
          isPausedAtFive.current = true; // 중복 실행 방지
          setTimeout(() => {
            video.play(); // 1초 후 다시 재생
          }, 1000);
            handleUpload();
        } 
        // 12초 이상일 때 0초로 되감기
        if (video.currentTime >= 12) {
          video.currentTime = 0;
          setSolve(false);
          isPausedAtFive.current = false; // 초기화
          video.play();
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);

      // Cleanup 이벤트 리스너
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []); // 컴포넌트 마운트 시 한 번 실행

  return (
    <C.Wrapper>
      <C.MainWrapper>
        <video
          ref={videoRef} // useRef를 video 태그에 연결
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "90%", marginTop: -50 }}
        >
          <source src={Video} type="video/mp4" />
        </video>
        {solve ? <C.Img src={crash}></C.Img> : <div></div>}
      </C.MainWrapper>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <button
          onClick={handleUpload}
          disabled={isUploading}
          style={{
            padding: "10px 20px",
            backgroundColor: isUploading ? "#ccc" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: isUploading ? "not-allowed" : "pointer",
          }}
        >
          {isUploading ? "Uploading..." : "Upload Sample File"}
        </button>

        {data ? (
          <div style={{ marginTop: "20px" }}>
            <h2>Server Response:</h2>
            <pre
              style={{
                backgroundColor: "#f4f4f4",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                overflowX: "auto",
              }}
            >
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        ) : (
          <p style={{ marginTop: "20px" }}>
            Click the button above to see the server response.
          </p>
        )}
      </div>
    </C.Wrapper>
  );
};

export default Simulation;
