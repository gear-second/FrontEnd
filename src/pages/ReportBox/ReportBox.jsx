import React, { useState, useEffect } from "react";
import * as C from "./ReportBoxStyle";
import KakaoMap from "../../components/KakaoMap";
import { useNavigate } from "react-router-dom";

const ReportBox = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });
  const navigate = useNavigate();

  const [time, setTime] = useState({
    hours: today.getHours().toString().padStart(2, "0"),
    minutes: today.getMinutes().toString().padStart(2, "0"),
    seconds: today.getSeconds().toString().padStart(2, "0"),
  });

  const [address, setAddress] = useState({
    administrativeDistrict: "",
    detailAddress: "",
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

  const handleAddressFetch = ({ administrativeDistrict, detailAddress }) => {
    setAddress({ administrativeDistrict, detailAddress });
  };

  const handleCoordinatesFetch = ({ lat, lng }) => {
    setCoordinates({ lat, lng });
  };

  return (
    <React.Fragment>
      <C.PageContent>
        <C.TopContainer>
          <C.ArrowImg onClick={()=>{navigate('/tutorial')}}/>
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
            <C.PageDate>{`${month}/${day}`}</C.PageDate>
            <C.TimeText>{`${time.hours} : ${time.minutes} : ${time.seconds}`}</C.TimeText>
          </C.TimeContainer>
        </C.ReportContainer>
        <C.ContentContainer>
          <C.SuccessAlarm>
            <C.SmallAlarmImg />
            <C.SuccessText>접수가 완료되었습니다.</C.SuccessText>
          </C.SuccessAlarm>
          <C.MapContainer>
            <KakaoMap
              onAddressFetch={handleAddressFetch}
              onCoordinatesFetch={handleCoordinatesFetch}
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
                <C.MapadministrativeDistrict>
                  {address.administrativeDistrict}
                </C.MapadministrativeDistrict>
                <C.MapdetailAddress>{address.detailAddress}</C.MapdetailAddress>
              </C.MapLocationText>
              <C.MapSuccessAlarm>
                급발진 접수완료
                <C.CheckImg />
              </C.MapSuccessAlarm>
            </C.OverlayContainer>
          </C.MapContainer>
        </C.ContentContainer>
      </C.PageContent>
    </React.Fragment>
  );
};

export default ReportBox;
