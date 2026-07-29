import React, { useEffect, useRef } from 'react';

export default function NaverMap({ className }: { className?: string }) {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if naver maps API is loaded
    if (!window.naver || !window.naver.maps || !mapElement.current) return;
    
    // 서울시 강남구 도산대로59길 16 (청담동, 테이블2025)
    const location = new window.naver.maps.LatLng(37.525547, 127.042738);
    
    const map = new window.naver.maps.Map(mapElement.current, {
      center: location,
      zoom: 17, // 확대 정도 (17 is good for street level)
      minZoom: 7,
    });

    // 핀(마커) 추가
    new window.naver.maps.Marker({
      position: location,
      map: map,
    });
  }, []);

  return <div ref={mapElement} className={className || "w-full h-full"} />;
}

declare global {
  interface Window {
    naver: any;
  }
}
