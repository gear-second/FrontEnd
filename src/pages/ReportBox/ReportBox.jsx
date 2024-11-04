import React, { useState, useEffect } from "react";
import * as C from "./ReportBoxStyle";
import KakaoMap from "../../components/KakaoMap";

const ReportBox = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

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

  //주소 받아오는 함수
  const handleAddressFetch = ({ administrativeDistrict, detailAddress }) => {
    setAddress({ administrativeDistrict, detailAddress });
  };

  return (
    <React.Fragment>
      <C.PageContent>
        <C.TopContainer>
          <C.ArrowImg />
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
            <KakaoMap onAddressFetch={handleAddressFetch} />
          </C.MapContainer>
        </C.ContentContainer>
      </C.PageContent>
    </React.Fragment>
  );
};

export default ReportBox;
