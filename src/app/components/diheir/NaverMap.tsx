import React, { useEffect, useRef, useState, useCallback } from 'react';

export default function NaverMap({ className }: { className?: string }) {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const locationRef = useRef<any>(null);
  const [showReturn, setShowReturn] = useState(false);

  const INITIAL_ZOOM = 17;

  const checkMarkerVisible = useCallback(() => {
    if (!mapRef.current || !locationRef.current) return;
    const bounds = mapRef.current.getBounds();
    const isVisible = bounds.hasPoint(locationRef.current);
    setShowReturn(!isVisible);
  }, []);

  const handleReturn = useCallback(() => {
    if (!mapRef.current || !locationRef.current) return;
    mapRef.current.setCenter(locationRef.current);
    mapRef.current.setZoom(INITIAL_ZOOM);
    setShowReturn(false);
  }, []);

  const handleZoomIn = useCallback(() => {
    if (!mapRef.current) return;
    mapRef.current.setZoom(mapRef.current.getZoom() + 1);
  }, []);

  const handleZoomOut = useCallback(() => {
    if (!mapRef.current) return;
    mapRef.current.setZoom(mapRef.current.getZoom() - 1);
  }, []);

  useEffect(() => {
    if (!window.naver || !window.naver.maps || !mapElement.current) return;
    
    const location = new window.naver.maps.LatLng(37.525547, 127.042738);
    locationRef.current = location;
    
    const map = new window.naver.maps.Map(mapElement.current, {
      center: location,
      zoom: INITIAL_ZOOM,
      minZoom: 7,
      zoomControl: false,
    });
    mapRef.current = map;

    const marker = new window.naver.maps.Marker({
      position: location,
      map: map,
    });
    markerRef.current = marker;

    // 지도 이동/줌 시 마커 가시성 체크
    window.naver.maps.Event.addListener(map, 'idle', checkMarkerVisible);

    return () => {
      window.naver.maps.Event.clearListeners(map, 'idle');
    };
  }, [checkMarkerVisible]);

  const btnBase: React.CSSProperties = {
    width: 32,
    height: 32,
    border: '1px solid rgba(68,68,41,0.25)',
    backgroundColor: 'rgba(255,255,255,0.92)',
    color: '#444429',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1,
    userSelect: 'none',
    transition: 'background-color 0.15s',
    backdropFilter: 'blur(4px)',
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mapElement} className={className || "w-full h-full"} />

      {/* +/- 줌 버튼 (우측 하단) */}
      <div style={{
        position: 'absolute',
        bottom: 12,
        right: 12,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 6,
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
        zIndex: 10,
      }}>
        <button
          onClick={handleZoomIn}
          style={{ ...btnBase, borderBottom: 'none', borderRadius: '6px 6px 0 0' }}
          aria-label="확대"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="7" y1="2" x2="7" y2="12" />
            <line x1="2" y1="7" x2="12" y2="7" />
          </svg>
        </button>
        <button
          onClick={handleZoomOut}
          style={{ ...btnBase, borderRadius: '0 0 6px 6px' }}
          aria-label="축소"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="2" y1="7" x2="12" y2="7" />
          </svg>
        </button>
      </div>

      {/* 돌아가기 버튼 (마커가 화면 밖일 때만 표시) */}
      {showReturn && (
        <button
          onClick={handleReturn}
          style={{
            position: 'absolute',
            bottom: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '6px 14px',
            backgroundColor: 'rgba(68,68,41,0.88)',
            color: '#fff',
            border: 'none',
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 500,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            zIndex: 10,
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(4px)',
            transition: 'opacity 0.2s',
            letterSpacing: '0.02em',
          }}
          aria-label="디에르 위치로 돌아가기"
        >
          ↩ 디에르 위치로
        </button>
      )}
    </div>
  );
}

declare global {
  interface Window {
    naver: any;
  }
}
