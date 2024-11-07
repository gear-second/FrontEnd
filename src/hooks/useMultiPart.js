import { useState } from "react";
import axios from "axios";
import Img from "../assets/imgs/calarmImg.png";

const UseMultiPart = () => {
  const [data, setData] = useState();

  const FileData = async () => {
    try {
      // 파일을 URL에서 다운로드
      const response = await fetch(Img); // Img는 파일 URL이어야 합니다
      const blob = await response.blob(); // 파일을 Blob 객체로 변환
      const formData = new FormData();
      formData.append("file", blob, "filename.jpg"); // 서버에 보낼 때 파일 이름 지정

      const res = await axios.post("http://3.38.174.165:5001/detect", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  return {
    FileData,
    data,
  };
};

export default UseMultiPart;
