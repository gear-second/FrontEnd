import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KakaoMap from "../components/KakaoMap";
import Tutorial from "../pages/Tutorial/Tutorial";
import ReportBox from "../pages/ReportBox/ReportBox";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/kakaomap" element={<KakaoMap />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/reportBox" element={<ReportBox />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
