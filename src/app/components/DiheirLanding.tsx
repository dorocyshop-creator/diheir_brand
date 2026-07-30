import { useEffect, useState, useRef, useCallback } from "react";
import ResponsiveDiheirPage, { Nav, ScrollAnimatedLogo, HomeSection } from "./diheir/DiheirPage";
import {
  BrandIdentity,
  BrandHeritage,
  ServicesDesigner,
  ServicesCore,
  Collection,
  Diheirspace,
  Footer,
} from "../../imports/DiheirPage";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * 1920px 고정 PC 레이아웃을 transform: scale()로 축소하는 래퍼.
 * CSS zoom과 달리 vh/vw 단위와 충돌하지 않아 태블릿에서도 안정적이다.
 */
function ScaledPCLayout({ children }: { children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);

  const updateScale = useCallback(() => {
    setScale(Math.min(1, window.innerWidth / 1920));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  // ResizeObserver로 내부 콘텐츠 실제 높이를 추적
  useEffect(() => {
    if (!innerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContentHeight(entry.contentRect.height);
      }
    });
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        // scale 적용 후 실제로 차지해야 할 높이를 명시
        height: contentHeight * scale,
        position: "relative",
      }}
    >
      <div
        ref={innerRef}
        style={{
          width: 1920,
          transformOrigin: "center top",
          transform: `scale(${scale})`,
          position: "absolute",
          top: 0,
          left: "50%",
          marginLeft: -960,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * 디에르 랜딩 페이지 래퍼 (하이브리드 반응형).
 */
export function DiheirLanding() {
  useEffect(() => {
    // Lenis ↔ GSAP ScrollTrigger 동기화
    const lenis = new Lenis({
      autoRaf: false,       // GSAP ticker가 직접 구동
      duration: 0.8,        // 관성 줄여서 빠른 스크롤 시 오버슈트 방지
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Lenis 스크롤 이벤트 → ScrollTrigger 위치 업데이트
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ticker → Lenis raf 구동 (완벽한 동기화)
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-[#f7f7ec]">
      {/* 고정 요소 (Logo & Nav)는 화면 전체를 덮는 z-index를 가지므로 공통 적용 */}
      <ScrollAnimatedLogo />
      <Nav hideLogo={true} />

      {/* 전체 해상도에 공통 적용되는 스크롤 Home 섹션 (100vh 고정) */}
      <HomeSection />

      {/* 데스크탑/태블릿(≥960px): 원본 1920 레이아웃을 transform: scale()로 축소 */}
      <div className="relative hidden md:block w-full overflow-clip">
        <ScaledPCLayout>
          <BrandIdentity />
          <BrandHeritage />
          <ServicesDesigner />
        </ScaledPCLayout>

        {/* ServicesCore는 내부에 자체적으로 scale 처리 및 순수 CSS sticky 적용 */}
        <ServicesCore scale={Math.min(1, typeof window !== 'undefined' ? window.innerWidth / 1920 : 1)} />

        <ScaledPCLayout>
          <Collection />
          <Diheirspace />
          <Footer />
        </ScaledPCLayout>
      </div>

      {/* 모바일(<960px): 스와이프 가능한 전체 모바일 레이아웃 */}
      <div className="block md:hidden">
        <ResponsiveDiheirPage />
      </div>
    </div>
  );
}
