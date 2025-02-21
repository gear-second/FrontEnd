import React, { useState, useEffect } from "react";
import "./App.css";
import AppRouter from './router/router';
import Logo from './components/common/Logo/Logo';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // 3초 후에 로딩 상태 변경
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <>
      {loading ? <Logo /> : <AppRouter />}
    </>
  );
}

export default App;
