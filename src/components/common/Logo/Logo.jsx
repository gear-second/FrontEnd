import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/gif/logo.gif'; // gif 파일 경로

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // 화면 중앙에 배치
`;

const LogoImage = styled.img`
  max-width: 20%; // 반응형 디자인을 위해 최대 너비 설정
  height: auto; // 비율을 유지하도록 높이 자동 설정
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
