import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tutorial from "../pages/Tutorial/Tutorial";
import ReportBox from "../pages/ReportBox/ReportBox";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tutorial" element={<Tutorial />}></Route>
        <Route path="/reportBox" element={<ReportBox />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
