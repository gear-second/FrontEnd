import React, { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";

function KakaoMap({ onAddressFetch, onCoordinatesFetch }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [location, setLocation] = useState({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    // Kakao Map SDK 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_KEY}&libraries=services,clusterer`;
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    // 현재 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          fetchAddress(latitude, longitude);
          // 위도와 경도 전달
          if (typeof onCoordinatesFetch === "function") {
            onCoordinatesFetch({ lat: latitude, lng: longitude });
          }
        },
        (error) => {
          console.error("위치 정보를 가져오지 못했습니다.", error);
        }
      );
    } else {
      console.error("Geolocation을 지원하지 않는 브라우저입니다.");
    }
  }, []);

  const fetchAddress = (lat, lng) => {
    if (window.kakao && window.kakao.maps) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      const coord = new window.kakao.maps.LatLng(lat, lng);
      geocoder.coord2Address(
        coord.getLng(),
        coord.getLat(),
        (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const address = result[0].address;
            const administrativeDistrict = `${address.region_1depth_name} ${address.region_2depth_name}`;
            const detailAddress = address.road_address
              ? address.road_address.address_name
              : `${address.region_3depth_name} ${address.main_address_no}` +
                (address.sub_address_no ? `-${address.sub_address_no}` : "");

            if (typeof onAddressFetch === "function") {
              onAddressFetch({ administrativeDistrict, detailAddress });
            }
          }
        }
      );
    }
  };

  return (
    isLoaded && (
      <Map
        center={location}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "16px",
        }}
        level={3}
      />
    )
  );
}

export default KakaoMap;
