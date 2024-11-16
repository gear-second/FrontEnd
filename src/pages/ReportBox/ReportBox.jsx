import React, { useState, useEffect } from "react";
import * as C from "./ReportBoxStyle";
import KakaoMap from "../../components/KakaoMap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ReportBox = () => {
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = `${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${today.getDate().toString().padStart(2, "0")}`;

  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });
  const [address, setAddress] = useState({
    administrativeDistrict: "",
    detailAddress: "",
  });
  const [time, setTime] = useState({
    hours: today.getHours().toString().padStart(2, "0"),
    minutes: today.getMinutes().toString().padStart(2, "0"),
    seconds: today.getSeconds().toString().padStart(2, "0"),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours().toString().padStart(2, "0"),
        minutes: now.getMinutes().toString().padStart(2, "0"),
        seconds: now.getSeconds().toString().padStart(2, "0"),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sendReport = async () => {
    const location = encodeURIComponent(
      `${address.administrativeDistrict} ${address.detailAddress}`
    );

    try {
      const response = await axios.get(
        `http://localhost:8080/sms?location=${location}`
      );
      console.log("신고 요청 성공:", response.data);
    } catch (error) {
      console.error("신고 요청 실패:", error);
    }
  };

  useEffect(() => {
    if (
      coordinates.lat &&
      coordinates.lng &&
      address.administrativeDistrict &&
      address.detailAddress
    ) {
      sendReport();
    }
  }, [coordinates, address]);

  return (
    <C.PageContent>
      <C.TopContainer>
        <C.ArrowImg onClick={() => navigate("/tutorial")} />
        <C.PageText>신고 접수함</C.PageText>
      </C.TopContainer>
      <C.ReportContainer>
        <C.AlarmImg />
        <C.LocationText>
          <C.AdministrativeDistrict>
            {address.administrativeDistrict}
          </C.AdministrativeDistrict>
          <C.DetailAddress>{address.detailAddress}</C.DetailAddress>
        </C.LocationText>
        <C.TimeContainer>
          <C.PageDate>{formattedDate}</C.PageDate>
          <C.TimeText>{`${time.hours}:${time.minutes}:${time.seconds}`}</C.TimeText>
        </C.TimeContainer>
      </C.ReportContainer>
      <C.ContentContainer>
        <C.SuccessAlarm>
          <C.SmallAlarmImg />
          <C.SuccessText>접수가 완료되었습니다.</C.SuccessText>
        </C.SuccessAlarm>
        <C.MapContainer>
          <KakaoMap
            onAddressFetch={(address) => setAddress(address)}
            onCoordinatesFetch={(coordinates) => setCoordinates(coordinates)}
          />
          <C.CoordinatesOverlay>
            <C.MarkerImg />
            <C.CoordinatesTextContainer>
              <C.CoordinatesText>위도: {coordinates.lat}</C.CoordinatesText>
              <C.CoordinatesText>경도: {coordinates.lng}</C.CoordinatesText>
            </C.CoordinatesTextContainer>
          </C.CoordinatesOverlay>
          <C.OverlayContainer>
            <C.MapLocationText>
              <C.MapAdministrativeDistrict>
                {address.administrativeDistrict}
              </C.MapAdministrativeDistrict>
              <C.MapDetailAddress>{address.detailAddress}</C.MapDetailAddress>
            </C.MapLocationText>
            <C.MapSuccessAlarm>
              접수 완료
              <C.CheckImg />
            </C.MapSuccessAlarm>
          </C.OverlayContainer>
        </C.MapContainer>
      </C.ContentContainer>
    </C.PageContent>
  );
};

export default ReportBox;
