import { useEffect, useState } from "react";
import ResponsiveDiheirPage, { Nav, ScrollAnimatedLogo, HomeSection } from "./diheir/DiheirPage";
import OriginalDiheirPage from "../../imports/DiheirPage";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * 디에르 랜딩 페이지 래퍼 (하이브리드 반응형).
 */
export function DiheirLanding() {
  const [zoom, setZoom] = useState(1);

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

    const update = () => setZoom(Math.min(1, window.innerWidth / 1920));
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
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

      {/* 데스크탑(≥768px): 원본 1920 레이아웃 유지 및 비율만 축소 */}
      <div className="relative hidden md:block">
        <div className="mx-auto w-[1920px]" style={{ zoom }}>
          <OriginalDiheirPage />
        </div>
      </div>

      {/* 모바일(<768px): 스와이프 가능한 전체 모바일 레이아웃 */}
      <div className="block md:hidden">
        <ResponsiveDiheirPage />
      </div>
    </div>
  );
}
