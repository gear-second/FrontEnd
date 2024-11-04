import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReportBox from "../pages/ReportBox/ReportBox";
import KakaoMap from "../components/KakaoMap";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/reportbox" element={<ReportBox />} />
        <Route path="/kakaomap" element={<KakaoMap />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
