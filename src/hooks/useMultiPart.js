import { useState } from "react";
import axios from "axios";


const UseMultiPart = () => {
  const [data, setData] = useState();

  const FileData = async (Img) => {
    try {
      const response = await fetch(Img);
      const blob = await response.blob();
      console.log("Blob size:", blob.size);

      const formData = new FormData();
      formData.append("file", blob, "filename.png");

      console.log("FormData contents:", [...formData.entries()]);

      const res = await axios.post("http://3.38.174.165:5001/detect", formData);

      if (res.status === 200) {
        console.log("서버 응답 데이터:", res.data);
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
