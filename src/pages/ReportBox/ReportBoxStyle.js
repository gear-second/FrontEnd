import styled from "styled-components";
import AlarmImgSrc from "../../assets/image/alarm.svg";
import ArrowImgSrc from "../../assets/image/arrow.svg";
import CheckImgSrc from "../../assets/image/check.svg";
import MarkerImgSrc from "../../assets/image/marker.svg";

const Text = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

export const PageContent = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  width: 100vw;
  text-align: center;
  margin-top: 16px;
  align-items: center;
`;

export const PageText = styled.h2`
  margin-left: 40vw;
`;

export const ArrowImg = styled.img.attrs({
  src: ArrowImgSrc,
  alt: "ArrowImg",
})`
  margin-left: 80px;
`;

// 신고 컨테이너
export const ReportContainer = styled.div`
  width: 100vw;
  height: 9vh;
  background-color: #ffe5e5;
  border: 1px solid #ff0000;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const AlarmImg = styled.img.attrs({
  src: AlarmImgSrc,
  alt: "AlarmImg",
})`
  width: 60px;
  margin-left: 84px;
`;

export const SmallAlarmImg = styled.img.attrs({
  src: AlarmImgSrc,
  alt: "AlarmImg",
})`
  width: 44px;
`;

export const LocationText = styled.div`
  margin-left: 12px;
`;

export const AdministrativeDistrict = styled(Text)``;

export const DetailAddress = styled(Text)`
  font-size: 18px;
  margin-top: 4px;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: 120px;
`;

export const PageDate = styled(Text)``;

export const TimeText = styled(Text)`
  margin-top: 4px;
`;

// 성공 알림과 지도 스타일
export const ContentContainer = styled.div``;

export const SuccessAlarm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const SuccessText = styled(Text)`
  font-size: 18px;
  margin-top: 12px;
  margin-left: 12px;
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px auto;
  border-radius: 20px;
  position: relative;
  width: 900px;
  height: 500px;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 40px 16px;
  border-radius: 0 0 10px 10px;
  font-weight: bold;
  z-index: 10;
  width: 868px;
`;

export const MapLocationText = styled.div``;

export const MapAdministrativeDistrict = styled(Text)`
  font-size: 20px;
  margin-left: 12px;
`;

export const MapDetailAddress = styled(Text)`
  font-size: 30px;
  margin-top: 8px;
  margin-left: 12px;
`;

export const MapSuccessAlarm = styled.div`
  width: 156px;
  height: 32px;
  background-color: #335ac0;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: 12px;
`;

export const CheckImg = styled.img.attrs({
  src: CheckImgSrc,
  alt: "CheckImg",
})`
  width: 24px;
  margin-left: 4px;
  margin-right: -8px;
`;

export const CoordinatesOverlay = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 10;
  display: flex;
`;

export const CoordinatesTextContainer = styled.div``;

export const CoordinatesText = styled(Text)`
  margin-top: 2px;
`;

export const MarkerImg = styled.img.attrs({
  src: MarkerImgSrc,
  alt: "MarkerImg",
})`
  width: 25px;
  margin-right: 8px;
`;
