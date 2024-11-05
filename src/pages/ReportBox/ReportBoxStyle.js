import styled from "styled-components";
import AlarmImgSrc from "../../assets/image/alarm.svg";
import ArrowImgSrc from "../../assets/image/arrow.svg";

export const PageContent = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  width: 100vw;
  text-align: center;
  margin-top: 16px;
  align-items: center;
`;

export const PageText = styled.div`
  margin-left: 40vw;
  font-size: 24px;
  font-weight: 700;
  padding: 8px;
`;

export const ArrowImg = styled.img.attrs({
  src: ArrowImgSrc,
  alt: "ArrowImg",
})`
  margin-left: 80px;
`;

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
  height: auto;
`;

export const LocationText = styled.div`
  margin-left: 12px;
`;

export const AdministrativeDistrict = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

export const DetailAddress = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: 120px;
`;

export const PageDate = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const TimeText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 4px;
`;

export const ContentContainer = styled.div``;

export const SuccessAlarm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const SuccessText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 12px;
  margin-left: 12px;
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  border-radius: 20px;
`;

// export const MapLocationContainer = styled.div`
//   width: 900px;
//   height: 140px;
//   background-color: red;
// `;

// export const MapAdministrativeDistrict = styled.div`
//   font-weight: 700;
//   font-size: 16px;
// `;

// export const MapDetailAddress = styled.div`
//   font-weight: 700;
//   font-size: 18px;
// `;
