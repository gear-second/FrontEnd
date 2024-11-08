import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KakaoMap from "../components/KakaoMap";
import Tutorial from "../pages/Tutorial/Tutorial";
import ReportBox from "../pages/ReportBox/ReportBox";
import Simulation from "../pages/Simulation/Simulation";



const AppRouter = () => {
  return (
    <Router>
      <Routes>

        <Route path="/simulation" element={<Simulation />}></Route>

        <Route path="/kakaomap" element={<KakaoMap />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/reportbox" element={<ReportBox />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
