import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeUp } from "./FadeUp";
import svgPaths from "../../../imports/DiheirPage/svg-0y7pwhlwwq";
import imgHome02 from "../../../component/home/home_02.jpg";
import diheirVideo from "../../../component/home/diheir.mp4";

gsap.registerPlugin(ScrollTrigger);
import imgDiheirLogoOg1 from "../../../imports/DiheirPage/6d5a74bfc1553599c2a801c8101c6cb39296d489.png";
import imgImage40 from "../../../component/brand/olive_tree.png";
import imgImage49 from "../../../component/brand/tree.png";
import imgFrame10 from "../../../imports/DiheirPage/f6c122e00214ef423f256922a9b11476fb7caf94.png";
import imgFrame11 from "../../../component/brand/1st_Generation.png";
import imgFrame12 from "../../../component/brand/2st_Generation.png";
import imgRectangle30 from "../../../imports/DiheirPage/bb2168780e98686f4106636159df49ad9cfffbe4.png";
import imgFrame14 from "../../../component/service/service_The_First_Principle.png";
import imgFrame16 from "../../../component/service/service_Jewelry_Resetting_Service.png";
import imgFrame17 from "../../../component/service/service_Craftsmanship.png";
import imgFrame19 from "../../../component/service/service_Jewelry_as_Legacy.png";
import imgFrame21 from "../../../component/service/service_Invisible_Precision.png";
import imgFrame31 from "../../../imports/DiheirPage/7b4847eb3b70aa6c950d8c0a99d5e9d65020736e.png";
import imgRectangle14 from "../../../imports/DiheirPage/d607e82960f594901d1144ba4728728d07dbd59a.png";
import imgRectangle15 from "../../../imports/DiheirPage/d228ad0703d949dc5b2bbdd884d5d247cf9c0046.png";
import imgRectangle18 from "../../../imports/DiheirPage/7116551fc77e8e74ffac985596b8727be0d14354.png";
import imgRectangle26 from "../../../imports/DiheirPage/230c7a22bbc55fa05fa494e84cf1588c7c692150.png";
import imgServiceLeft from "../../../component/service/service_left.png";
import imgServiceRight from "../../../component/service/service_right.png";
import imgRectangle20 from "../../../imports/DiheirPage/8d5f1fbbe62a4f0dad74eb1cda60623ed43b461f.png";
import imgCollection from "../../../component/collection/collection_bg.jpg";
import coreMo01 from "../../../component/service/core_mo_01.jpg";
import coreMo02 from "../../../component/service/core_mo_02.jpg";
import coreMo03 from "../../../component/service/core_mo_03.jpg";
import coreMo04 from "../../../component/service/core_mo_04.jpg";
import coreMo05 from "../../../component/service/core_mo_05.jpg";
import imgLOV01 from "../../../component/collection/LOV_Collection_01.jpg";
import imgLOV02 from "../../../component/collection/LOV_Collection_02.jpg";
import imgLOV03 from "../../../component/collection/LOV_Collection_03.jpg";
import imgRectangle23 from "../../../imports/DiheirPage/805a32b6d14e895fdc339ccbfbf2a6d65c0472d0.png";
import imgRectangle24 from "../../../imports/DiheirPage/f8ceae5a06aaed2f11c4300828d3be4956a4a8ce.png";
import imgRectangle25 from "../../../imports/DiheirPage/2890547f2c366d8ee61f84efdf3fc34e63ebd59c.png";
import imgRectangle32 from "../../../imports/DiheirPage/8057f4096d22cfbe18e5fc4ec672f03037245848.png";
import imgFooter from "../../../component/footer/footer_structure.png";
import imgDiheirspaceBg from "../../../component/diheirspace/diheirspace.jpg";
import imgServiceBg from "../../../component/service/service.jpg";

/**
 * 디에르(DIHEIR) 랜딩 페이지 — 전체 흐름(flex/grid) 기반 반응형 버전.
 * 지정 브레이크포인트: 1400 / 1038 / 768 / 430 / 390.
 * 원본은 1920px 절대 위치 디자인이라, 데스크탑 외 뷰는 콘텐츠를
 * 세로로 스택하고 타이포를 clamp()로 유연하게 축소하여 재구성했다.
 */

/* ------------------------------ 공용 유틸리티 ----------------------------- */

const SERIF = "font-serif";
const SANS = "font-sans";

/* ---------------------------------- Nav ---------------------------------- */

import imgDiheirLogoOg1 from "../../../imports/DiheirPage/Diheir_Logo.png";

function NavLogo({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <svg
      className={`h-[clamp(min(28px,3.6458vw),3vw,44px)] w-auto ${className}`}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 190 59"
      aria-label="DIHEIR"
      onClick={onClick}
    >
      <g clipPath="url(#clip0_1_336)" id="logo">
        <g id="Group">
          <path d={svgPaths.pdc4dd00} fill="white" />
          <path d={svgPaths.p374e80} fill="white" />
          <path d={svgPaths.p114a4080} fill="white" />
        </g>
        <path d={svgPaths.p3467340} fill="white" />
        <path d={svgPaths.p15c6e900} fill="white" />
        <g id="Group_2">
          <path d={svgPaths.p34c34000} fill="white" />
          <path d={svgPaths.p1212a780} fill="white" />
        </g>
        <path d={svgPaths.p1ac89a00} fill="white" />
        <path d={svgPaths.p2e1d7200} fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_1_336">
          <rect fill="white" height="59" width="190" />
        </clipPath>
      </defs>
    </svg>
  );
}

function useLightNav() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.elementsFromPoint(window.innerWidth / 2, 40);
      const isLightSection = elements.some(el => el.classList.contains('light-section') || el.closest('.light-section'));
      setIsLight(isLightSection);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return isLight;
}

export function Nav({ hideLogo }: { hideLogo?: boolean }) {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const pointerEvents = useTransform(scrollY, [0, 100], ["none", "auto"]);

  const isLight = useLightNav();

  return (
    <motion.nav
      className="glass fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[clamp(min(20px,2.6042vw),5vw,80px)] py-4"
      data-name="nav"
      style={{
        opacity: navOpacity,
        pointerEvents: pointerEvents as any,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
        backdropFilter: "blur(40px) saturate(180%)",
        WebkitBackdropFilter: "blur(40px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.15), inset 0 1px rgba(255,255,255,0.35)",
      }}
    >
      <div className="relative group">
        {isLight ? (
          <img 
            src={imgDiheirLogoOg1} 
            alt="DIHEIR" 
            className={`h-[clamp(min(28px,3.6458vw),3vw,44px)] w-auto cursor-pointer object-contain ${hideLogo ? "opacity-0" : ""}`} 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        ) : (
          <NavLogo className={`cursor-pointer ${hideLogo ? "opacity-0" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        )}
        <div className="absolute left-0 top-[100%] mt-4 flex flex-col gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto bg-black/40 backdrop-blur-md px-[32px] py-[28px] rounded-2xl border border-white/10 shadow-xl min-w-[200px]">
          {["home", "brand", "Services", "Reservation"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`${SERIF} capitalize text-white hover:text-[#bdbea7] transition-colors text-[24px] tracking-[-0.48px] cursor-pointer`}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <p className={`${SERIF} capitalize ${isLight ? "text-[#3a3a3c]" : "text-white"} tracking-[-0.64px] cursor-pointer hover:text-[#bdbea7] transition-colors`} style={{ fontSize: "clamp(min(18px,2.3438vw),2vw,32px)" }}>
        Contact
      </p>
    </motion.nav>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function HeroLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className || "w-[clamp(min(240px,31.25vw),55vw,600px)] h-auto"}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 600 186"
      aria-label="DIHEIR"
    >
      <g clipPath="url(#clip0_1_451)" id="logo">
        <g id="Group">
          <path d={svgPaths.p93b5d80} fill="white" />
          <path d={svgPaths.p2525ea00} fill="white" />
          <path d={svgPaths.p14319500} fill="white" />
        </g>
        <path d={svgPaths.p2031470} fill="white" />
        <path d={svgPaths.p21087400} fill="white" />
        <g id="Group_2">
          <path d={svgPaths.p2e414e80} fill="white" />
          <path d={svgPaths.p3b659400} fill="white" />
        </g>
        <path d={svgPaths.p11f0e600} fill="white" />
        <path d={svgPaths.p254aa200} fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_1_451">
          <rect fill="white" height="186" width="600" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ScrollAnimatedLogo() {
  const { scrollY } = useScroll();
  const [bounds, setBounds] = useState({ w: typeof window !== "undefined" ? window.innerWidth : 1920, h: typeof window !== "undefined" ? window.innerHeight : 1080 });
  const isLight = useLightNav();

  useEffect(() => {
    const update = () => setBounds({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollRange = [0, Math.min(bounds.h * 0.5, 400)];

  const startW = Math.min(Math.max(240, bounds.w * 0.55), 600);
  const startH = startW / 3.2258;
  const startX = bounds.w / 2 - startW / 2;
  const startY = bounds.h / 2 - startH / 2;

  const endH = Math.min(Math.max(28, bounds.w * 0.03), 44);
  const endW = endH * 3.2258;
  const endX = Math.min(Math.max(20, bounds.w * 0.05), 80);
  const endY = 16;

  const x = useTransform(scrollY, scrollRange, [startX, endX]);
  const y = useTransform(scrollY, scrollRange, [startY, endY]);
  const width = useTransform(scrollY, scrollRange, [startW, endW]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x,
        y,
        width,
        zIndex: 60,
      }}
      className="pointer-events-none flex items-center justify-center"
    >
      {isLight ? (
        <img src={imgDiheirLogoOg1} alt="DIHEIR" className="w-full h-auto object-contain transition-opacity duration-300" />
      ) : (
        <HeroLogo className="w-full h-auto transition-opacity duration-300" />
      )}
    </motion.div>
  );
}

export function HomeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const home02Ref = useRef<HTMLElement>(null);

  // 총 프레임 수 (Python 스크립트로 추출된 수)
  const FRAME_COUNT = 230;

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx2d = canvas.getContext("2d", { alpha: false });
    
    // 1. 이미지 프리로드 (메모리에 올려두기)
    const images: HTMLImageElement[] = [];
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // import.meta.env.BASE_URL을 사용하여 GitHub Pages 배포 시 하위 경로 문제 해결
      img.src = `${import.meta.env.BASE_URL}frames/${i.toString().padStart(4, '0')}.webp`;
      images.push(img);
    }

    // 2. 프록시 객체 (스크롤에 따라 프레임 인덱스를 보간)
    const proxy = { frame: 0 }; // 0부터 FRAME_COUNT - 1까지

    // DPR 인식 캔버스 리사이징
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      if (ctx2d) ctx2d.scale(dpr, dpr);
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // object-fit: cover 처럼 그리기
    const drawCover = (img: HTMLImageElement) => {
      if (!ctx2d) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = canvas.width / dpr;
      const ch = canvas.height / dpr;
      const vw = img.width || 1920;
      const vh = img.height || 1080;
      const imgRatio = vw / vh;
      const canvasRatio = cw / ch;
      let dw: number, dh: number, dx: number, dy: number;
      if (canvasRatio > imgRatio) {
        dw = cw;
        dh = cw / imgRatio;
        dx = 0;
        dy = (ch - dh) / 2;
      } else {
        dh = ch;
        dw = ch * imgRatio;
        dx = (cw - dw) / 2;
        dy = 0;
      }
      ctx2d.drawImage(img, dx, dy, dw, dh);
    };

    // 3. 렌더 루프
    let rafId: number;
    const render = () => {
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(proxy.frame)));
      const img = images[frameIndex];
      
      if (img && img.complete && img.naturalWidth > 0) {
        drawCover(img);
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    // 4. GSAP 스크롤 동기화
    const gsapCtx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1,  // 즉각적이고 매우 부드러운 반응
        }
      });

      // 스크롤 시 프레임 0 -> 298 로 맵핑
      scrollTl.to(proxy, {
        frame: FRAME_COUNT - 1,
        ease: "none",
        duration: 1.0,
      }, 0);

    }, containerRef);

    // --- home_02 핀 및 등장 모션 ---
    let pinTrigger: ScrollTrigger | null = null;
    let swoopTrigger: ScrollTrigger | null = null;
    if (home02Ref.current) {
      // 훅 위로 올라오는 등장 모션
      const swoopAnim = gsap.fromTo(home02Ref.current,
        { y: 150 },
        {
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: home02Ref.current,
            start: "top 90%", // 화면 하단에 보이기 시작할 때
            toggleActions: "play none none reverse",
          }
        }
      );
      swoopTrigger = swoopAnim.scrollTrigger as ScrollTrigger;

      // 빠른 스크롤 관성 방지용 랜딩패드
      pinTrigger = ScrollTrigger.create({
        trigger: home02Ref.current,
        start: "top top",
        end: "+=100vh",
        pin: true,
        pinSpacing: true,
      });
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(rafId);
      gsapCtx.revert();
      if (swoopTrigger) swoopTrigger.kill();
      if (pinTrigger) pinTrigger.kill();
    };
  }, []);

  return (
    <>
      {/* 이미지 시퀀스 스크롤 영역 */}
      <div id="home" ref={containerRef} className="relative w-full h-[1000vh]">
        <div 
          className="sticky top-0 w-full h-[100vh] min-h-[520px] overflow-hidden" 
          data-name="home_section"
        >
          
          {/* home_01 */}
          <section
            className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]"
            data-name="home_01"
          >
            {/* Canvas 시퀀스 렌더러 */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
              <canvas ref={canvasRef} className="block w-full h-full" />
            </div>
            
            {/* Overlays and Hero Content */}
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end pb-[40px]">
              <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.6) 100%)" }} />
              
              {/* Subtle Dust Particles (CSS based) */}
              <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none opacity-40">
                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjMiLz4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjAuNSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC41Ii8+CiAgPGNpcmNsZSBjeD0iMzUwIiBjeT0iMTAwIiByPSIxLjUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMiIvPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjMzMCIgcj0iMCIgZmlsbD0iI2ZmYiIgb3BhY2l0eT0iMC40Ii8+CiAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMjgwIiByPSIwLjUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4=')] bg-repeat animate-[dustMove_60s_linear_infinite]" />
              </div>

              {/* Film Grain */}
              <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')" }} />
            </div>
          </section>

        </div>
      </div>

      {/* home_02 — ScrollTrigger pin으로 고정 (빠른 스크롤 관성 방지) */}
      <section
        ref={home02Ref}
        className="relative w-full h-[100vh]"
        data-name="home_02"
      >
        <img alt="" src={imgHome02} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
      </section>
    </>
  );
}

/* ------------------------------ Brand identity ---------------------------- */

function TreeGroup1() {
  return (
    <div className="absolute inset-[0_0_32.23%_0]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192.999 119.95">
        <g>
          <path d={svgPaths.p2451eb00} fill="#383629" />
          <path d={svgPaths.p770c80} fill="#383629" />
          <path d={svgPaths.p1e123b80} fill="#383629" />
          <path d={svgPaths.p2ad0df40} fill="#383629" />
          <path d={svgPaths.p2ce67480} fill="#383629" />
          <path d={svgPaths.p6132500} fill="#383629" />
          <path d={svgPaths.p2f580900} fill="#383629" />
          <path d={svgPaths.p9d6cf30} fill="#383629" />
          <path d={svgPaths.p2285c600} fill="#383629" />
          <path d={svgPaths.p3b9bfe00} fill="#383629" />
          <path d={svgPaths.p1d80da00} fill="#383629" />
          <path d={svgPaths.p22c49a00} fill="#383629" />
          <path d={svgPaths.p3460d300} fill="#383629" />
          <path d={svgPaths.p20af1a00} fill="#383629" />
          <path d={svgPaths.p3d657400} fill="#383629" />
          <path d={svgPaths.p30586300} fill="#383629" />
          <path d={svgPaths.p13db9600} fill="#383629" />
          <path d={svgPaths.p18371500} fill="#383629" />
          <path d={svgPaths.p296f3900} fill="#383629" />
          <path d={svgPaths.p7a21600} fill="#383629" />
          <path d={svgPaths.p31491280} fill="#383629" />
          <path d={svgPaths.pe2a4d80} fill="#383629" />
          <path d={svgPaths.p3ef5b230} fill="#383629" />
          <path d={svgPaths.pf75f4f0} fill="#383629" />
          <path d={svgPaths.p3847a140} fill="#383629" />
          <path d={svgPaths.p194ffb00} fill="#383629" />
          <path d={svgPaths.p2fc1a000} fill="#383629" />
          <path d={svgPaths.p106a7900} fill="#383629" />
          <path d={svgPaths.p39745880} fill="#383629" />
          <path d={svgPaths.p2bc5a800} fill="#383629" />
          <path d={svgPaths.p178e4000} fill="#383629" />
          <path d={svgPaths.p1237f900} fill="#383629" />
          <path d={svgPaths.p17e0bb00} fill="#383629" />
          <path d={svgPaths.p6dd5f40} fill="#383629" />
          <path d={svgPaths.p360f8f00} fill="#383629" />
          <path d={svgPaths.p10576900} fill="#383629" />
          <path d={svgPaths.p8094100} fill="#383629" />
          <path d={svgPaths.p3aa278f0} fill="#383629" />
          <path d={svgPaths.p4ba8380} fill="#383629" />
          <path d={svgPaths.p5fd00} fill="#383629" />
          <path d={svgPaths.p2fc62800} fill="#383629" />
          <path d={svgPaths.p3e68b6f0} fill="#383629" />
          <path d={svgPaths.pc5fae80} fill="#383629" />
          <path d={svgPaths.p172c9980} fill="#383629" />
          <path d={svgPaths.p39f7bb80} fill="#383629" />
          <path d={svgPaths.pe4ab000} fill="#383629" />
          <path d={svgPaths.p1a841900} fill="#383629" />
          <path d={svgPaths.p3d7e270} fill="#383629" />
          <path d={svgPaths.p3d220740} fill="#383629" />
          <path d={svgPaths.p4f50b00} fill="#383629" />
          <path d={svgPaths.p1d5bea00} fill="#383629" />
          <path d={svgPaths.p20021f80} fill="#383629" />
          <path d={svgPaths.p115a2400} fill="#383629" />
          <path d={svgPaths.p1e162980} fill="#383629" />
          <path d={svgPaths.p2ca57f0} fill="#383629" />
          <path d={svgPaths.pf743f00} fill="#383629" />
          <path d={svgPaths.p74664f0} fill="#383629" />
          <path d={svgPaths.p391c4b00} fill="#383629" />
          <path d={svgPaths.p1a2b2d80} fill="#383629" />
          <path d={svgPaths.p26bfed00} fill="#383629" />
        </g>
      </svg>
    </div>
  );
}

function TreeGroup2() {
  return (
    <div className="absolute inset-[63.37%_43.25%_3.96%_35.13%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.7328 57.8253">
        <g>
          <path d={svgPaths.p5dca400} fill="#383629" />
          <path d={svgPaths.p2fc73d80} fill="#383629" />
        </g>
      </svg>
    </div>
  );
}

function TreeGroup3() {
  return (
    <div className="absolute inset-[73.12%_41.64%_1.85%_38.52%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.3064 44.2932">
        <g>
          <path d={svgPaths.p3563f100} fill="#383629" />
          <path d={svgPaths.p3563f100} fill="#383629" />
          <path d={svgPaths.pd45d400} fill="#383629" />
          <path d={svgPaths.p36fe9c0} fill="#383629" />
          <path d={svgPaths.p1630ef00} fill="#383629" />
          <path d={svgPaths.p1f901900} fill="#383629" />
          <path d={svgPaths.pc964900} fill="#383629" />
          <path d={svgPaths.p35e70b00} fill="#383629" />
          <path d={svgPaths.p37161200} fill="#383629" />
          <path d={svgPaths.p1630ef00} fill="#383629" />
        </g>
      </svg>
    </div>
  );
}

function TreeGroup4() {
  return (
    <div className="absolute inset-[80.09%_34.96%_1.7%_34.48%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.979 32.228">
        <g>
          <path d={svgPaths.p31999880} fill="#383629" />
          <path d={svgPaths.p15ce8800} fill="#383629" />
          <path d={svgPaths.p32103400} fill="#383629" />
          <path d={svgPaths.p374418f0} fill="#383629" />
        </g>
      </svg>
    </div>
  );
}

function TreeGroup5() {
  return (
    <div className="absolute inset-[6.75%_3.11%_-0.01%_1.16%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.763 165.075">
        <g>
          <path d={svgPaths.p265b1700} fill="#383629" />
          <path d={svgPaths.p45ee000} fill="#383629" />
          <path d={svgPaths.p27efc480} fill="#383629" />
          <path d={svgPaths.pee49c00} fill="#383629" />
          <path d={svgPaths.p2049f380} fill="#383629" />
        </g>
      </svg>
    </div>
  );
}

/* OliveBranchEmblem: exact copy of desktop Layer (Group + Group4 + Group5) */
function OliveBranchEmblem() {
  return (
    <div className="relative shrink-0 opacity-30 overflow-clip" style={{ width: 193, height: 177 }}>
      <TreeGroup1 />
      <TreeGroup2 />
      <TreeGroup3 />
      <TreeGroup4 />
      <TreeGroup5 />
    </div>
  );
}

/* DiheirTextLogo: exact copy of desktop Layer1 */
function DiheirTextLogo() {
  return (
    <div className="relative shrink-0" style={{ width: 388, height: 119 }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 388 119">
        <g clipPath="url(#clip0_badge)" opacity="0.3">
          <g>
            <path d={svgPaths.p4a32100} fill="#383629" />
            <path d={svgPaths.p316fa080} fill="#383629" />
            <path d={svgPaths.p2612d700} fill="#383629" />
          </g>
          <path d={svgPaths.p28c7800} fill="#383629" />
          <path d={svgPaths.pc811680} fill="#383629" />
          <g>
            <path d={svgPaths.p32a84f80} fill="#383629" />
            <path d={svgPaths.p182bab80} fill="#4D4D4D" />
          </g>
          <path d={svgPaths.p3ed06400} fill="#383629" />
          <path d={svgPaths.p900fb70} fill="#383629" />
        </g>
        <defs>
          <clipPath id="clip0_badge">
            <rect fill="white" height="119" width="388" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

/* GraceBadge: exact copy of desktop Frame11 structure, self-scaling */
function GraceBadge() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / 650);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full aspect-square bg-[#bdbea7] overflow-hidden relative">
      <div className="absolute inset-0 origin-top-left" style={{ width: 650, height: 650, transform: `scale(${scale})` }}>
        <div className="w-full h-full flex items-center justify-center p-[120px]">
          <div className="flex flex-col items-center gap-[20px] w-[388px]">
            <div className="flex flex-col items-center gap-[60px] w-full">
              <OliveBranchEmblem />
              <DiheirTextLogo />
            </div>
            <p className={`${SERIF} capitalize opacity-30 text-[#383629] text-[30px] text-center tracking-[-0.6px] w-full`}>
              Grace in every moment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandIdentity() {
  return (
    <section id="brand" className="relative w-full overflow-hidden bg-[#f7f7ec] px-[clamp(min(20px,2.6042vw),5vw,40px)] py-[clamp(min(60px,7.8125vw),12vw,140px)] flex flex-col gap-[clamp(min(40px,5.2083vw),10vw,80px)] light-section" data-name="brand_identity">
      {/* 1. Top title */}
      <div className="relative w-full flex flex-col pt-[20px] pb-[40px]">
        {/* Background Logo */}
        <FadeUp delay={0.1} className="absolute left-0 top-[25%] w-[115%] pointer-events-none z-0">
          <img src={imgDiheirLogoOg1} className="w-full h-auto object-contain opacity-[0.24]" alt="" />
        </FadeUp>
        
        {/* Foreground Text */}
        <div className="relative z-10 w-full flex flex-col">
          <FadeUp>
            <h2 className={`${SERIF} tracking-[-0.5px] leading-[1.1]`} style={{ fontSize: "clamp(min(48px, 6.25vw), 14vw, 100px)" }}>
              <span className="text-[#383629]">D</span><span className="text-[#bdbea7]">iamond</span>
            </h2>
          </FadeUp>
          <div className="w-full flex justify-end mt-[-2vw]">
            <FadeUp delay={0.2}>
              <h2 className={`${SERIF} tracking-[-0.5px] leading-[1.1] flex items-center pr-[1vw]`} style={{ fontSize: "clamp(min(48px, 6.25vw), 14vw, 100px)" }}>
                <span className="text-[#bdbea7] font-light text-[0.7em] mr-[0.2em] mb-[0.1em]">+</span>
                <span className="text-[#383629]">Heir</span>
                <span className="text-[#bdbea7]">loom</span>
              </h2>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* 2. Intro paragraph */}
      <FadeUp className="mt-[-10px]">
        <p className={`${SANS} text-[#383629] text-[clamp(min(12px,1.5625vw),3.2vw,16px)] leading-[1.8] tracking-[-0.44px]`}>
          디에르는 가보라는 키워드에서 모티브를 얻어<br />
          세대를 넘어 이어지는 가치와 기억을 담기 위해 탄생한 브랜드입니다.
        </p>
      </FadeUp>

      {/* 3. Images */}
      <div className="relative w-full aspect-[3/4] flex justify-center mt-[10px]">
        <FadeUp className="w-[80%] h-full ml-[-10%]">
          <img alt="" src={imgImage40} className="w-full h-full object-cover" />
        </FadeUp>
        <FadeUp delay={0.2} className="absolute -bottom-[5%] -right-[2%] w-[55%] max-w-[250px]">
          <img alt="" src={imgImage49} className="w-full h-auto drop-shadow-2xl" />
        </FadeUp>
      </div>

      {/* 4. Right aligned text */}
      <FadeUp className="flex justify-end mt-[20px]">
        <p className={`${SANS} text-[#383629] text-[clamp(min(12px,1.5625vw),3.2vw,16px)] leading-[1.8] tracking-[-0.44px] text-right break-keep`}>
          사계절 푸른 올리브나무는 강인한 생명력으로 결실과 승리, 장수와 풍요를 상징합니다.<br />
          디에르는 올리브나무가 지닌 깊은 의미를 모든 디자인에 담아냅니다.<br />
          시간이 흘러도 변하지 않는 가치와 아름다움을 전하며,<br />
          사랑과 기억을 잇는 가보를 만들어갑니다.
        </p>
      </FadeUp>

      {/* 5. Left text + Right Grace Badge */}
      <div className="flex w-full items-end justify-between gap-[5%] mt-[40px]">
        <FadeUp className="flex-1">
          <p className={`${SANS} text-[#383629] text-[clamp(min(12px,1.5625vw),3.2vw,16px)] leading-[1.8] tracking-[-0.44px] break-keep`}>
            보석은 단순한 장신구가 아니라<br />
            가족의 역사와 사람의 시간을 담아<br />
            다음 세대로 이어지는 상징이 될 수 있다고 믿습니다.
          </p>
        </FadeUp>
        <FadeUp delay={0.2} className="w-[45%] max-w-[320px]">
          <GraceBadge />
        </FadeUp>
      </div>

      {/* 6. Footer Text Timeless Green Grove */}
      <div className="relative w-full mt-[12vw] pb-[5vw]">
        {/* Background text - Timeless + Green Grove stacked with Korean text between them */}
        <div className="w-full flex flex-col">
          <FadeUp>
            <p className="font-serif capitalize leading-none tracking-[-0.04em] whitespace-nowrap text-[rgba(189,190,167,0.2)]" style={{ fontSize: "clamp(min(60px,7.8125vw), 17vw, 150px)" }}>
              Timeless
            </p>
          </FadeUp>
          
          <div className="w-full flex justify-end mt-[3vw] mb-[3vw]">
            <FadeUp delay={0.1}>
              <p className={`${SANS} text-[#383629] text-[clamp(min(12px,1.5625vw),3.2vw,16px)] leading-[1.8] tracking-[-0.44px] text-right break-keep`}>
                시간이 흘러도 변하지 않는 감정과 가치, 디에르는 그 영속성을 이야기합니다.<br />
                디에르에 당신의 스토리가 담깁니다.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <p className="font-serif capitalize leading-none tracking-[-0.04em] whitespace-nowrap text-[rgba(189,190,167,0.2)]" style={{ fontSize: "clamp(min(60px,7.8125vw), 17vw, 150px)" }}>
              Green Grove
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Brand heritage ---------------------------- */

interface GenerationCardData {
  id: string;
  image: string;
  title: string;
  kr: string;
  en: string;
}

const GENERATIONS: GenerationCardData[] = [
  {
    id: "gen1",
    image: imgFrame11,
    title: "1st Generation",
    kr: "외할아버지의 동광당(동대문)",
    en: "Donggwangdang Jewelry (Dongdaemun)",
  },
  {
    id: "gen2",
    image: imgFrame12,
    title: "2st Generation",
    kr: "부모님의 삼정사(대구 교동시장 1호 금방)",
    en: "Our Parents' Samjeongsa (The First Jewelry Store in Daegu Gyodong Market)",
  },
  {
    id: "gen3",
    image: imgFrame10,
    title: "3st Generation",
    kr: "3남매의 도로시(1등 주얼리 쇼핑몰)",
    en: "Korea's Leading Online Jewelry Store",
  },
];

function GenerationCard({ data, index }: { data: GenerationCardData; index: number }) {
  return (
    <FadeUp delay={index * 0.15}>
      <div className="relative flex w-full max-[768px]:aspect-[4/5] aspect-[3/4] md:h-[clamp(min(324px,42vw),37.8vw,540px)] flex-col justify-end overflow-hidden">
        <img alt="" src={data.image} className="absolute inset-0 size-full object-cover" />
        <div
          className="relative mt-auto flex flex-col gap-2 p-[clamp(min(20px,2.6042vw),4vw,40px)] capitalize leading-[1.1]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow:
              "0 20px 40px rgba(0,0,0,0.15), inset 0 1px rgba(255,255,255,0.35)",
          }}
        >
          <p className={`${SERIF} text-[#efefe1] tracking-[-0.8px] max-[768px]:text-[3.6458vw]`} style={{ fontSize: "clamp(min(24px,3.125vw),2.6vw,40px)" }}>{data.title}</p>
          <p className={`${SANS} text-[#d4d4b9] max-[768px]:text-[12px]`} style={{ fontSize: "clamp(min(13px,1.6927vw),1.1vw,16px)" }}>{data.kr}</p>
          <p className="font-sans font-light text-[#d4d4b9] max-[768px]:text-[12px]" style={{ fontSize: "clamp(min(12px,1.4323vw),0.9vw,12px)" }}>{data.en}</p>
        </div>
      </div>
    </FadeUp>
  );
}

function BrandHeritage() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7ec] px-[clamp(min(20px,2.6042vw),5vw,100px)] py-[clamp(min(60px,7.8125vw),15vw,120px)] light-section" data-name="brand_heritage">
      {/* 80 years background text */}
      <div className="pointer-events-none absolute inset-x-0 top-[10vh] w-full flex justify-center z-0">
        <div className="relative flex items-end justify-center w-full max-w-[1720px]">
          <span className={`${SERIF} leading-[0.8] text-[#bdbea7] opacity-[0.4] mr-[4vw]`} style={{ fontSize: "clamp(120px, 42vw, 820px)", letterSpacing: "-0.05em" }}>80</span>
          <span className={`${SERIF} leading-none text-[#bdbea7] opacity-[0.4] mb-[2vw] ml-[-8vw]`} style={{ fontSize: "clamp(50px, 17vw, 340px)" }}>Years</span>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1720px] flex-col items-center">
        {/* A Family Legacy header */}
        <FadeUp className="self-end text-right">
          <p className={`${SERIF} mb-[clamp(min(60px,7.8125vw),15vw,100px)] capitalize text-[#787957] tracking-[-0.6px] max-[768px]:text-[2.0833vw] max-[768px]:mt-[10vw]`} style={{ fontSize: "clamp(min(14px,1.8229vw),2vw,30px)" }}>
            A Family Legacy<br />Crafted Over 80 Years
          </p>
        </FadeUp>

        {/* Generation cards: 3 col on desktop (md+), 1 col on mobile (<md) */}
        <div className="grid w-[90%] grid-cols-1 md:grid-cols-3 gap-[clamp(min(20px,2.6042vw),4vw,40px)]">
          {GENERATIONS.map((g, index) => (
            <GenerationCard key={g.id} data={g} index={index} />
          ))}
        </div>

        {/* DIHEIR by DOROCY */}
        <FadeUp delay={0.2} className="w-full">
          <p className={`${SERIF} mt-[clamp(min(80px,10.4167vw),20vw,140px)] w-full text-center capitalize text-[#9f9f8b] opacity-[0.24] whitespace-nowrap max-[768px]:text-[9.5vw]`} style={{ fontSize: "clamp(min(36px,4.6875vw),10vw,220px)", letterSpacing: "-0.02em" }}>
            DIHEIR By DOROCY
          </p>
        </FadeUp>

        {/* Description text */}
        <FadeUp delay={0.3}>
          <div className={`${SANS} mt-[clamp(min(40px,5.2083vw),8vw,80px)] flex flex-col gap-[clamp(min(20px,2.6042vw),5vw,32px)] text-center text-[#383629] tracking-[-0.48px] max-[768px]:text-[1.5625vw]`} style={{ fontSize: "clamp(min(12px,1.5625vw),1.6vw,24px)" }}>
            <p className="leading-[1.8]">
              <span className="font-semibold">디에르(DIHEIR)</span>는<br className="md:hidden" />
              프리미엄 주얼리 디자인 하우스 '도로시(DOROCY)'에서 새롭게 전개하는<br className="hidden md:block" />
              <span className="font-semibold">하이 주얼리 브랜드</span>입니다.
            </p>
            <p className="leading-[1.8] text-[#555]">
              더 멋진 디자인과 더 높은 완성도의 작품을 만들고 싶다는<br className="md:hidden" />
              도로시의 순수 열정은 디에르를 탄생시킨 원동력이었습니다.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* --------------------------- Services (designer) -------------------------- */

interface ServiceCardData {
  id: string;
  image: string;
  title: string[];
  desc: React.ReactNode;
}

const SERVICES: ServiceCardData[] = [
  { 
    id: "comfort", image: imgFrame14, title: ["The First Principle", "– Comfort Fit"],
    desc: <>“편안하지 않다면, 디에르는 디자인하지 않습니다.”<br/>디에르가 가장 먼저 고민하는 것은 디자인 이전의 감각입니다.<br/>손끝이 처음 반지를 마주하는 순간,<br/>오랜 시간 함께했을 때의 편안함과 자연스러움<br/>그리고 일상 속에서 잊은 듯 스며드는 착용감.<br/>설계 기준 0.1mm의 차이에서 착용의 편안함이 완성됩니다.<br/>디에르는 착용의 모든 순간을 설계합니다.</>
  },
  { 
    id: "resetting", image: imgFrame16, title: ["Jewelry Resetting Service"],
    desc: <>디에르의 전문 주얼리 디자이너는<br/>고객님의 의미 있는 보석이 더욱 가치 있도록<br/>리세팅 서비스를 제공해 드립니다.<br/>고객의 취향과 의미를 반영한<br/>커스터마이징 서비스를 더해,<br/>디에르 주얼리는 세대를 잇는 이야기로 완성됩니다.</>
  },
  { 
    id: "craft", image: imgFrame17, title: ["Craftsmanship"],
    desc: <>디에르의 작품들은<br/>주얼리 명장님들의 정교한 세공을 통해 완성됩니다.<br/>완벽한 비율과 균형,<br/>섬세한 디테일.<br/>편안한 착용감까지 아우르는 완성도.<br/>세대를 이어 전해지는 작품들은<br/>그 스토리와 사랑이 같이 전달되어야 합니다.<br/>가보의 가치는 타협하지 않는 장인 정신을 통해 완성됩니다.</>
  },
  { 
    id: "legacy", image: imgFrame19, title: ["Jewelry as Legacy"],
    desc: <>디에르는 ‘유산’을 물질이 아닌 감정으로 바라봅니다.<br/>부모에서 자녀로,<br/>사랑하는 사람에게로 이어지는 이야기,<br/>그리고 오래도록 기억으로 남는 순간들.<br/>디에르는주얼리를 통해<br/>사람과 사람 사이의 시간을 연결하고자 합니다.</>
  },
  { 
    id: "precision", image: imgFrame21, title: ["Invisible Precision", "– Comfort Fit for Size"],
    desc: <>- 총 180개의 14K 옐로우 골드 사이즈 링 -<br/><br/>2.5mm부터 5.0mm까지 7가지 폭의 밴드를 사이즈 반지로 제작하여,<br/>고객이 가장 자연스러운 감각을 찾을 수 있도록 했습니다.<br/>오랜 시간 곁에 머무를 반지와 함께할 고객님을 위한<br/>디에르의 배려이자 철학입니다.</>
  },
];

function ServiceCard({ data, index }: { data: ServiceCardData; index: number }) {
  return (
    <FadeUp delay={index * 0.1}>
      <div className="group relative flex h-[clamp(min(420px,54.6875vw),45vw,680px)] w-[clamp(min(240px,31.25vw),34vw,490px)] max-[768px]:w-[39.0625vw] max-[768px]:h-[54.1667vw] shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-t-[400px] bg-[#d9d9d9] pb-[clamp(min(30px,3.9062vw),7vw,100px)] px-[clamp(min(10px,1.3021vw),2vw,40px)] text-center cursor-pointer">
        <img alt="" src={data.image} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
        <div className={`${SERIF} relative capitalize leading-[1.3] text-white tracking-[-0.8px] transition-opacity duration-500 group-hover:opacity-0`} style={{ fontSize: "clamp(min(28px,3.6458vw),2.4vw,40px)" }}>
          {data.title.map((line) => (
            <p key={line} className="mb-0 whitespace-nowrap">{line}</p>
          ))}
        </div>
        
        {/* Hover Content */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-[clamp(min(10px,1.3021vw),3vw,40px)] text-center z-10">
          <div className={`${SERIF} text-white tracking-[-0.64px] mb-[clamp(min(8px,1.0417vw),2vw,20px)] leading-tight`} style={{ fontSize: "clamp(min(24px,3.125vw),2.2vw,36px)" }}>
            {data.title.map((line) => (
              <p key={line} className="mb-0">{line}</p>
            ))}
          </div>
          <p className={`${SANS} text-[#d4d4b9] tracking-[-0.32px] leading-[1.6] max-[768px]:text-[12px]`} style={{ fontSize: "clamp(min(12px,1.5625vw),1.2vw,16px)" }}>
            {data.desc}
          </p>
        </div>
      </div>
    </FadeUp>
  );
}

function ServicesDesigner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileTotal = SERVICES.length;
  const prevCard = () => setMobileIndex((i) => (i - 1 + mobileTotal) % mobileTotal);
  const nextCard = () => setMobileIndex((i) => (i + 1) % mobileTotal);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const setScroll = () => {
        if (el.scrollLeft < 10) el.scrollLeft = el.scrollWidth / 2;
      };
      requestAnimationFrame(setScroll);
      setTimeout(setScroll, 100);
      setTimeout(setScroll, 500);
      setTimeout(setScroll, 1500);

      // Drag to scroll logic for desktop mouse users testing mobile view
      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      const onMouseDown = (e: MouseEvent) => {
        isDown = true;
        el.style.cursor = 'grabbing';
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
        el.style.scrollSnapType = 'none'; // disable snap while dragging
      };

      const onMouseLeave = () => {
        isDown = false;
        el.style.cursor = 'grab';
        el.style.scrollSnapType = 'x mandatory';
      };

      const onMouseUp = () => {
        isDown = false;
        el.style.cursor = 'grab';
        el.style.scrollSnapType = 'x mandatory';
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 1.5;
        el.scrollLeft = scrollLeft - walk;
      };

      el.addEventListener('mousedown', onMouseDown);
      el.addEventListener('mouseleave', onMouseLeave);
      el.addEventListener('mouseup', onMouseUp);
      el.addEventListener('mousemove', onMouseMove);

      return () => {
        el.removeEventListener('mousedown', onMouseDown);
        el.removeEventListener('mouseleave', onMouseLeave);
        el.removeEventListener('mouseup', onMouseUp);
        el.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, []);

  // 40 copies * 5 items = 200 items. Effectively infinite for manual swipe.
  const INFINITE_SERVICES = [...Array(40)].flatMap((_, i) => 
    SERVICES.map(s => ({ ...s, uniqueId: `${s.id}-${i}` }))
  );

  return (
    <section id="services" className="relative w-full overflow-hidden bg-[#f7f7ec]" data-name="Services_Designer">
      <div className="relative flex flex-col">
        
        {/* Top Content Wrapper (Provides bounded height for the background image) */}
        <div className="relative flex flex-col pt-[15vw] md:pt-[120px] pb-[calc(10vw+160px)] md:pb-[530px] w-full">
          <FadeUp duration={1.5} className="absolute inset-0 pointer-events-none z-0">
            <img alt="" src={imgServiceBg} className="w-full h-full object-cover" />
          </FadeUp>
          
          {/* Header Section (Scaled from PC) */}
          <div className="relative px-[5vw] md:px-[0px] w-full max-w-[1920px] mx-auto z-10 min-h-[35vw] md:min-h-[300px]">
          <FadeUp>
            <p className={`${SERIF} absolute left-[5vw] top-[3vw] max-[768px]:left-[3vw] max-[768px]:top-[2vw] capitalize text-[#9f9f8b] opacity-[0.45] leading-none pointer-events-none md:left-[calc(50%-489.5px)] md:top-[72px] md:-translate-x-1/2 whitespace-nowrap`} style={{ fontSize: "clamp(min(75px,9.7656vw),22vw,230px)", letterSpacing: "-0.02em" }}>High-End</p>
          </FadeUp>
          
          <div className="relative pt-[12vw] pl-[3vw] md:absolute md:left-[450px] md:top-[222px] md:-translate-x-1/2 md:pt-0 md:pl-0 z-10">
            <FadeUp delay={0.2}>
              <h2 className={`${SERIF} text-left capitalize text-[#383629] tracking-[-1.2px] leading-[1.2] whitespace-nowrap`} style={{ fontSize: "clamp(min(40px,5.2083vw),8vw,60px)" }}>
                Personal Design Consultation
              </h2>
            </FadeUp>
          </div>
          
          <div className="relative mt-[8vw] pr-[2vw] flex justify-end md:absolute md:left-[calc(50%-2px)] md:top-[198px] md:mt-0 md:pr-0 md:justify-start z-10">
            <FadeUp delay={0.3}>
              <p className={`${SANS} text-right md:text-left leading-[1.6] text-[#383629] tracking-[-0.36px] max-[768px]:text-[1.4323vw]`} style={{ fontSize: "clamp(min(11px,1.4323vw),2.6vw,18px)" }}>
                전속 디자이너가 매장에 상주하여<br />
                고객 한 분 한 분의 라이프스타일에 맞춘<br />
                큐레이션과 맞춤 제작(비스포크) 상담을 진행합니다.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Video Frame & Foliage Section */}
        <div className="relative mt-[15vw] md:mt-[400px] w-full flex justify-center z-10 pb-[10vw] md:pb-[150px]">
          {/* Glass background from PC version (Updated for mobile screenshot match) */}
          <FadeUp duration={1.0} className="w-[calc(100%-8vw)] md:w-[1200px] z-10 flex justify-center">
            <div 
              className="relative w-full aspect-[4/3] md:aspect-[2/1] rounded-[clamp(min(24px,3.125vw),6vw,32px)] flex items-center justify-center p-[5vw] md:px-[59px] md:py-[40px]"
              style={{
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              }}
            >
              {/* Video container */}
              <div className="relative w-full h-full rounded-[clamp(min(16px,2.0833vw),4vw,40px)] overflow-hidden bg-black/10">
                 {/* Use aspect-[9/16] to stretch the video vertically like the PC version, creating the 'fill' crop effect */}
                 <iframe
                    src="https://player.vimeo.com/video/1209697467?autoplay=1&loop=1&muted=1&background=1"
                    className="absolute top-1/2 left-1/2 w-full aspect-[9/16] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
              </div>
            </div>
          </FadeUp>

          {/* Foliage Images (Scaled and positioned to match Figma 1043x350 design) */}
          <div className="absolute top-[60%] md:top-[70%] inset-x-0 w-full z-20 pointer-events-none flex justify-between overflow-hidden">
            <FadeUp className="w-[60%] md:w-[40%] max-w-[600px] -ml-[10%]">
              <img alt="" className="w-full h-auto object-contain drop-shadow-2xl" src={imgServiceLeft} />
            </FadeUp>
            <FadeUp className="w-[60%] md:w-[40%] max-w-[600px] -mr-[10%]">
              <img alt="" className="w-full h-auto object-contain drop-shadow-2xl" src={imgServiceRight} />
            </FadeUp>
          </div>
        </div>
        </div> {/* End of Top Content Wrapper */}

        {/* Quality Jewelry & Cards */}
        <div className="relative -mt-[calc(10vw+160px)] md:-mt-[530px] pb-[clamp(min(60px,7.8125vw),8vw,120px)] pt-[25vw] md:pt-[350px] z-10">
          
          {/* Gradient Layer perfectly matching Figma CSS and simulating fixed container height */}
          <div className="absolute left-0 right-0 h-[1000px] -z-10 pointer-events-none max-[768px]:top-[10vw] md:top-[370px]" 
               style={{ background: "linear-gradient(180deg, rgba(193, 196, 173, 0.00) 0%, #C1C4AD 16%, #C1C4AD 98.76%)" }} />
               
          {/* Solid Layer to cover the remaining space below the gradient */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#c1c4ad] -z-10 pointer-events-none max-[768px]:top-[calc(10vw+1000px)] md:top-[1370px]" />
          
          <p className={`${SERIF} mb-[80px] md:mb-[120px] text-center capitalize text-[#f7f7ec] opacity-80 leading-none relative z-30 whitespace-nowrap`} style={{ fontSize: "clamp(min(64px,8.3333vw),18vw,230px)", letterSpacing: "-0.02em" }}>Quality Jewelry</p>
          {/* Mobile Carousel (one card at a time with arrows) */}
          <div className="md:hidden flex items-center justify-center gap-4 px-[5vw] pb-4 relative z-30">
            {/* Prev Arrow */}
            <button
              type="button"
              aria-label="이전"
              onClick={prevCard}
              className="shrink-0 flex size-[11vw] items-center justify-center rounded-full transition-colors hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
                backdropFilter: "blur(40px) saturate(180%)",
                WebkitBackdropFilter: "blur(40px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15), inset 0 1px rgba(255,255,255,0.35)",
              }}
            >
              <svg className="size-5 -rotate-90" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p17f09fe0} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Single Card */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                key={mobileIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="group relative w-full aspect-[3/4] shrink-0 flex flex-col items-center justify-end overflow-hidden rounded-t-[400px] bg-[#d9d9d9] pb-[8vw] px-[4vw] text-center cursor-pointer">
                  <img alt="" src={SERVICES[mobileIndex].image} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
                  <div className={`${SERIF} relative capitalize leading-[1.3] text-white tracking-[-0.8px] transition-opacity duration-500 group-hover:opacity-0`} style={{ fontSize: "clamp(20px,5.5vw,28px)" }}>
                    {SERVICES[mobileIndex].title.map((line) => (
                      <p key={line} className="mb-0 whitespace-nowrap">{line}</p>
                    ))}
                  </div>
                  {/* Hover Content */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-[5vw] text-center z-10">
                    <div className={`${SERIF} text-white tracking-[-0.64px] mb-[4vw] leading-tight`} style={{ fontSize: "clamp(18px,4.5vw,24px)" }}>
                      {SERVICES[mobileIndex].title.map((line) => (
                        <p key={line} className="mb-0">{line}</p>
                      ))}
                    </div>
                    <p className={`${SANS} text-[#d4d4b9] tracking-[-0.32px] leading-[1.6] text-[12px]`}>
                      {SERVICES[mobileIndex].desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              aria-label="다음"
              onClick={nextCard}
              className="shrink-0 flex size-[11vw] items-center justify-center rounded-full transition-colors hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
                backdropFilter: "blur(40px) saturate(180%)",
                WebkitBackdropFilter: "blur(40px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15), inset 0 1px rgba(255,255,255,0.35)",
              }}
            >
              <svg className="size-5 rotate-90" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p17f09fe0} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Desktop infinite scroll */}
          <div ref={scrollRef} className="hidden md:flex snap-x snap-mandatory gap-[clamp(min(12px,1.5625vw),2vw,27px)] overflow-x-auto px-[clamp(min(20px,2.6042vw),5vw,100px)] pb-4 hide-scrollbar cursor-grab relative z-30" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {INFINITE_SERVICES.map((s, index) => (
              <ServiceCard key={s.uniqueId} data={s} index={index % SERVICES.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Services (core) ---------------------------- */

function ServicesCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mobile scroll transforms (0 to 1 progress over 500vh)
  const op1 = useTransform(scrollYProgress, [0, 0.05, 0.18, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.05], [50, 0]);

  const op2 = useTransform(scrollYProgress, [0.2, 0.25, 0.38, 0.4], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.25], [50, 0]);

  const op3 = useTransform(scrollYProgress, [0.4, 0.45, 0.58, 0.6], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.45], [50, 0]);

  const op4 = useTransform(scrollYProgress, [0.6, 0.65, 0.78, 0.8], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.65], [50, 0]);

  const yMain = useTransform(scrollYProgress, [0.8, 0.9], ["100%", "0%"]);
  
  // Final expansion transforms for the central box (starts AFTER slide-up completes at 0.9)
  const boxScale = useTransform(scrollYProgress, [0.9, 1], [1, 1.3]);

  return (
    <section className="relative w-full bg-[#9f9f8b]" data-name="Services_core">
      
      {/* ================= MOBILE LAYOUT (<= 768px) ================= */}
      {/* Scrolljacking container: 500vh tall to allow scrolling */}
      <div ref={containerRef} className="md:hidden relative w-full h-[500vh]">
        {/* Sticky viewport that stays on screen */}
        <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center px-[5vw] overflow-hidden">
          <motion.div 
            style={{ scale: boxScale }}
            className="relative w-full max-w-[700px] aspect-[700/780] mx-auto overflow-hidden rounded-sm shadow-2xl bg-[#9f9f8b]"
          >
            <motion.div style={{ opacity: op1, y: y1 }} className="absolute inset-0">
              <img alt="" src={coreMo01} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div style={{ opacity: op2, y: y2 }} className="absolute inset-0">
              <img alt="" src={coreMo02} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div style={{ opacity: op3, y: y3 }} className="absolute inset-0">
              <img alt="" src={coreMo03} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div style={{ opacity: op4, y: y4 }} className="absolute inset-0">
              <img alt="" src={coreMo04} className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Main Central Image & Text appears LAST */}
            <motion.div style={{ y: yMain }} className="absolute inset-0 z-10 bg-[#9f9f8b]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <iframe
                  src="https://player.vimeo.com/video/1209697886?background=1&autoplay=1&loop=1&muted=1"
                  className="absolute top-1/2 left-1/2 w-[300%] h-[300%] md:w-[150%] md:h-[150%] -translate-x-1/2 -translate-y-1/2"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-[6vw] px-[6vw] text-center capitalize text-[#e7e8cf]">
                <div className={`${SERIF} leading-[1.3] tracking-[-1.28px]`} style={{ fontSize: "6vw" }}>
                  <p>“Jewelry becomes meaningful</p>
                  <p>When it carries memories beyond time”</p>
                </div>
                <p className={`${SANS} leading-[1.3] tracking-[-0.64px]`} style={{ fontSize: "3.5vw" }}>세대를 지나 기억으로 남는 주얼리, 디에르.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================= DESKTOP LAYOUT (>= 768px) ================= */}
      <div className="relative mx-auto hidden md:flex max-w-[1720px] flex-col items-center gap-[clamp(min(24px,3.125vw),4vw,60px)] px-[100px] py-[120px]">
        {/* 1. Main Central Image in the center */}
        <FadeUp delay={0.2} className="relative w-full md:w-[65%] items-center justify-center overflow-hidden z-10">
          <img alt="" src={imgFrame31} className="h-[clamp(min(400px,52.0833vw),35vw,700px)] w-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center capitalize text-[#e7e8cf]">
            <div className={`${SERIF} leading-[1.3] tracking-[-1.28px]`} style={{ fontSize: "clamp(min(28px,3.6458vw),4.5vw,64px)" }}>
              <p>“Jewelry becomes meaningful</p>
              <p>When it carries memories beyond time”</p>
            </div>
            <p className={`${SANS} leading-[1.3] tracking-[-0.64px]`} style={{ fontSize: "clamp(min(16px,2.0833vw),2.2vw,32px)" }}>세대를 지나 기억으로 남는 주얼리, 디에르.</p>
          </div>
        </FadeUp>

        {/* 2. 4 images floating around the center image */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <FadeUp delay={0.3} className="absolute left-[1%] top-[10%] w-[18%] pointer-events-auto">
            <img alt="" src={imgRectangle14} className="w-full h-auto aspect-[5/3] object-cover rounded-md drop-shadow-xl" />
          </FadeUp>
          <FadeUp delay={0.4} className="absolute right-[2%] top-[15%] w-[20%] pointer-events-auto">
            <img alt="" src={imgRectangle15} className="w-full h-auto aspect-[5/3] object-cover rounded-md drop-shadow-xl" />
          </FadeUp>
          <FadeUp delay={0.5} className="absolute left-[3%] top-[60%] w-[16%] pointer-events-auto">
            <img alt="" src={imgRectangle18} className="w-full h-auto aspect-[5/3] object-cover rounded-md drop-shadow-xl" />
          </FadeUp>
          <FadeUp delay={0.6} className="absolute right-[4%] top-[65%] w-[18%] pointer-events-auto">
            <img alt="" src={imgRectangle20} className="w-full h-auto aspect-[5/3] object-cover rounded-md drop-shadow-xl" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Collection ------------------------------- */

function ArrowButton({ direction }: { direction: "prev" | "next" }) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "이전" : "다음"}
      className="flex size-[clamp(min(52px,6.7708vw),5vw,72px)] items-center justify-center rounded-full transition-colors hover:brightness-110"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
        backdropFilter: "blur(40px) saturate(180%)",
        WebkitBackdropFilter: "blur(40px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.15), inset 0 1px rgba(255,255,255,0.35)",
      }}
    >
      <svg className={`size-6 ${direction === "prev" ? "-rotate-90" : "rotate-90"}`} fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p17f09fe0} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function Collection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#383629] px-[clamp(min(20px,2.6042vw),5vw,120px)] py-[clamp(min(60px,7.8125vw),8vw,130px)]" data-name="collection">
      <img alt="" src={imgCollection} className="pointer-events-none absolute inset-0 size-full object-cover opacity-40" />
      <div className="relative mx-auto flex max-w-[1680px] flex-col items-center gap-[clamp(min(32px,4.1667vw),5vw,60px)]">
        <FadeUp>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex flex-col items-center gap-2">
              <p className={`${SERIF} text-[#e5e5d4]`} style={{ fontSize: "clamp(min(16px,2.0833vw),2vw,24px)" }}>Lily Of the Valley</p>
              <p className={`${SERIF} text-[#e5e5d4]`} style={{ fontSize: "clamp(min(40px,5.2083vw),7vw,80px)" }}>LOV Collection</p>
            </div>
            <p className="font-sans font-light text-white" style={{ fontSize: "clamp(min(13px,1.6927vw),1.2vw,16px)" }}>은방울꽃의 꽃말, “틀림없이 행복해집니다”</p>
            <p className={`${SERIF} leading-[1.3] text-white tracking-[-0.4px]`} style={{ fontSize: "clamp(min(15px,1.9531vw),1.6vw,20px)" }}>
              The Lily of the Valley symbolizes a promise:<br />"Surely, Happiness Awaits You."
            </p>
          </div>
        </FadeUp>

        {/* Stacked Interactive Gallery */}
        <div className="relative w-[clamp(min(200px,26.0417vw),30vw,540px)] aspect-[9/10] mx-auto mt-8 cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
          
          {/* Left image (02) */}
          <motion.div
            animate={{ x: isOpen ? "calc(-100% - 16px)" : "-2%", y: "0%", rotate: isOpen ? 0 : -3, scale: isOpen ? 1 : 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 z-10"
          >
            <img alt="" src={imgLOV02} className="size-full rounded-sm object-cover shadow-[0px_10px_20px_0px_rgba(0,0,0,0.5)]" />
          </motion.div>

          {/* Right image (03) */}
          <motion.div
            animate={{ x: isOpen ? "calc(100% + 16px)" : "2%", y: "0%", rotate: isOpen ? 0 : 3, scale: isOpen ? 1 : 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 z-10"
          >
            <img alt="" src={imgLOV03} className="size-full rounded-sm object-cover shadow-[0px_10px_20px_0px_rgba(0,0,0,0.5)]" />
          </motion.div>

          {/* Center image (01) */}
          <motion.div
            animate={{ zIndex: 20, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 z-20"
          >
            <img alt="" src={imgLOV01} className="size-full rounded-sm object-cover shadow-[0px_20px_40px_0px_rgba(0,0,0,0.6)]" />
          </motion.div>

        </div>

        <div className="flex gap-4 mt-8 z-50 relative">
          <ArrowButton direction="prev" />
          <ArrowButton direction="next" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Diheir space ------------------------------ */

function PrivacyPolicyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-2xl bg-[#f7f7ec] p-6 md:p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
        <button className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black" onClick={onClose}>&times;</button>
        <h3 className="mb-4 text-xl font-bold text-[#383629]">개인정보 수집 및 이용 동의</h3>
        <div className="text-sm text-[#383629] space-y-4 leading-relaxed max-h-[70vh] overflow-y-auto">
          <p>디에르는 쇼룸 방문 예약 접수 및 상담 진행을 위하여 아래와 같이 개인정보를 수집·이용합니다.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>수집 항목:</strong> 이름, 연락처(전화번호), 이메일 주소, 희망 예약 일시, 문의 내용 및 요청사항</li>
            <li><strong>수집·이용 목적:</strong> 방문 예약의 접수·확인 및 확정 안내, 예약 일정의 변경·취소 관련 연락, 상담 준비 및 문의 응대</li>
            <li><strong>보유·이용 기간:</strong> 수집·이용 목적 달성 시까지. 단, 상법 및 기타 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당 법적 목적의 범위 내에서만 안전하게 보관·이용합니다.</li>
          </ul>
          <p>귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를 거부할 경우 방문 예약 접수 및 상담 진행이 제한될 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

function GoogleSubmitForm({ isMobile, onOpenPrivacyModal }: { isMobile: boolean, onOpenPrivacyModal: () => void }) {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [year, month, day] = date.split('-');
  const [isMarketingAgreed, setIsMarketingAgreed] = useState(false);
  
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9]/g, '');
    if (val.length > 3 && val.length <= 7) {
      val = val.replace(/(\d{3})(\d+)/, '$1-$2');
    } else if (val.length > 7) {
      val = val.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
    }
    setPhone(val);
  };

  // Responsive classes based on mobile or desktop
  const labelClass = isMobile ? "text-[clamp(20px,5.5vw,24px)]" : "text-[clamp(min(18px,2.34375vw),3vw,28px)]";
  const inputClass = isMobile ? "w-full pb-[2vw] focus:border-b-2" : "w-[64%] pb-[10px] text-[clamp(min(16px,2.083vw),2.5vw,24px)] focus:border-b-[3px]";
  const inputTextClass = isMobile ? "text-[clamp(14px,3.9vw,18px)]" : "text-[clamp(min(16px,2.083vw),2.5vw,24px)]";
  const rowClass = isMobile ? "flex flex-col gap-[2vw] w-full" : "flex items-center justify-between w-full";
  const gapClass = isMobile ? "gap-[32px] w-full" : "gap-[clamp(min(24px,3.125vw),4vw,44px)] w-[clamp(min(600px,78.125vw),80vw,800px)]";

  return (
    <>
      <iframe name="hidden_iframe" id="hidden_iframe" style={{display:'none'}} onLoad={() => {}} />
      <form 
        action="https://docs.google.com/forms/d/e/1FAIpQLSdk6sZtR3D9WEqknpSOKANA-DxMfnszfjWW8VjwO4QopDwIOA/formResponse" 
        method="POST" 
        target="hidden_iframe"
        className={`flex flex-col items-center w-full ${isMobile ? "gap-[40px]" : "gap-[clamp(min(30px,3.9062vw),4vw,60px)]"}`}
        onSubmit={(e) => {
           const form = e.currentTarget;
           setTimeout(() => {
             alert("예약이 정상적으로 접수되었습니다.");
             setDate("");
             setPhone("");
             setIsMarketingAgreed(false);
             form.reset();
           }, 500);
        }}
      >
        <div className={`flex flex-col ${gapClass}`}>
          <div className={rowClass}>
            <p className={`font-sans text-[#444429] ${labelClass}`}>이름</p>
            <input required type="text" name="entry.1054060175" placeholder="입력해주세요" className={`border-b border-[#383629]/40 bg-transparent text-[#444429] outline-none ${inputClass} ${inputTextClass}`} />
          </div>
          <div className={rowClass}>
            <p className={`font-sans text-[#444429] ${labelClass}`}>연락처</p>
            <input required type="tel" name="entry.2074802535" placeholder="숫자만 입력해주세요" value={phone} onChange={handlePhoneChange} maxLength={13} className={`border-b border-[#383629]/40 bg-transparent text-[#444429] outline-none ${inputClass} ${inputTextClass}`} />
          </div>
          <div className={rowClass}>
            <p className={`font-sans text-[#444429] ${labelClass}`}>방문일</p>
            <input required type="date" min={today} value={date} onChange={e => setDate(e.target.value)} className={`border-b border-[#383629]/40 bg-transparent text-[#444429] outline-none ${inputClass} ${inputTextClass}`} />
            <input type="hidden" name="entry.626727524_year" value={year || ''} />
            <input type="hidden" name="entry.626727524_month" value={month || ''} />
            <input type="hidden" name="entry.626727524_day" value={day || ''} />
          </div>
          <div className={rowClass}>
            <p className={`font-sans text-[#444429] ${labelClass}`}>이메일</p>
            <input required type="email" name="entry.134182212" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="이메일 주소에는 반드시 '@'가 포함되어야 합니다." placeholder="입력해주세요" className={`border-b border-[#383629]/40 bg-transparent text-[#444429] outline-none ${inputClass} ${inputTextClass}`} />
          </div>
          <div className={rowClass}>
            <p className={`font-sans text-[#444429] ${labelClass}`}>요청사항</p>
            <input type="text" name="entry.399277218" placeholder="입력해주세요" className={`border-b border-[#383629]/40 bg-transparent text-[#444429] outline-none ${inputClass} ${inputTextClass}`} />
          </div>
        </div>

        <div className={`flex items-center gap-3 w-full max-w-[800px] ${isMobile ? "mt-[2vw]" : "mt-0"}`}>
          <input id={`privacy-agree-${isMobile ? 'mobile' : 'desktop'}`} required type="checkbox" name="entry.831169210" value="네" className={`accent-[#383629] cursor-pointer shrink-0 ${isMobile ? "size-[3vw]" : "size-[clamp(min(16px,2.083vw),2.5vw,24px)]"}`} />
          <div className={`font-sans text-[#444429] flex items-center ${isMobile ? "text-[clamp(14px,4.5vw,18px)]" : "text-[clamp(min(18px,2.34375vw),3vw,28px)]"}`}>
            <button 
              type="button"
              onClick={onOpenPrivacyModal}
              className="underline underline-offset-4 hover:text-black transition-colors cursor-pointer"
            >
              개인정보 처리방침
            </button>
            <label htmlFor={`privacy-agree-${isMobile ? 'mobile' : 'desktop'}`} className="cursor-pointer ml-1">에 동의</label>
          </div>
        </div>

        <div className={`flex items-start gap-3 w-full max-w-[800px] ${isMobile ? "mt-[1vw]" : "mt-2"}`}>
          <input type="hidden" name="entry.430492874" value={isMarketingAgreed ? "네" : "아니오"} />
          <input id={`marketing-agree-${isMobile ? 'mobile' : 'desktop'}`} type="checkbox" checked={isMarketingAgreed} onChange={(e) => setIsMarketingAgreed(e.target.checked)} className={`accent-[#383629] cursor-pointer shrink-0 mt-1 ${isMobile ? "size-[3vw]" : "size-[clamp(min(16px,2.083vw),2.5vw,24px)]"}`} />
          <div className={`font-sans text-[#444429] flex items-center leading-[1.4] ${isMobile ? "text-[clamp(12px,3.2vw,14px)]" : "text-[clamp(min(13px,1.692vw),1.8vw,18px)]"}`}>
            <label htmlFor={`marketing-agree-${isMobile ? 'mobile' : 'desktop'}`} className="cursor-pointer">
              (선택) 이메일, 문자(SMS), 전화 또는 기타 전자적 수단을 통해 디에르의 제품, 서비스, 전시·행사, 프로모션 및 각종 소식을 수신하는 데 동의합니다.
            </label>
          </div>
        </div>

        <button type="submit" className={`bg-[#383629] text-white rounded-full flex items-center justify-center hover:bg-black transition-colors ${isMobile ? "w-[50%] h-[11vw] mt-[2vw]" : "h-[clamp(min(40px,5.2083vw),6vw,60px)] px-[clamp(min(24px,3.125vw),4vw,40px)]"}`}>
          <span className={`font-serif ${isMobile ? "text-[4vw]" : "text-[clamp(min(16px,2.083vw),2.5vw,24px)]"}`}>Reservation</span>
        </button>
      </form>
    </>
  );
}

function ReservationCard() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <FadeUp>
      <div
        className="relative mx-auto flex w-full max-w-[1000px] flex-col items-center gap-[clamp(min(40px,5.2083vw),6vw,100px)] rounded-[clamp(min(20px,2.6042vw),3vw,32px)] px-[clamp(min(24px,3.125vw),6vw,80px)] py-[clamp(min(48px,6.25vw),8vw,100px)] bg-[#AAA680]/20 backdrop-blur-[20px] transform-gpu will-change-transform"
      >
        <svg className="absolute inset-0 size-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="borderGradResponsive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="10%" stopColor="white" stopOpacity="0.1" />
              <stop offset="40%" stopColor="white" stopOpacity="0.8" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.8" />
              <stop offset="90%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" fill="none" stroke="url(#borderGradResponsive)" strokeWidth="2" style={{ width: "calc(100% - 2px)", height: "calc(100% - 2px)", rx: "clamp(19px, calc(3vw - 1px), 31px)" }} />
        </svg>
        <div className="relative z-10 flex w-full flex-col items-center gap-[clamp(min(30px,3.9062vw),4vw,60px)]">
          <p className={`${SERIF} text-center text-[#444429]`} style={{ fontSize: "clamp(min(40px,5.2083vw),7vw,80px)" }}>Reserve Appointment</p>
          
          <GoogleSubmitForm isMobile={false} onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />
        </div>
      </div>
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </FadeUp>
  );
}

function DiheirSpace() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <section id="reservation" className="relative w-full overflow-hidden bg-[#383629] px-[clamp(min(20px,2.6042vw),5vw,60px)] py-[clamp(min(60px,7.8125vw),8vw,120px)]" data-name="diheirspace">
      
      {/* ================= DESKTOP LAYOUT (> 768px) ================= */}
      <div className="hidden md:block">
        <FadeUp>
          <p className={`${SERIF} text-center capitalize text-[#9f9f8b] opacity-[0.12]`} style={{ fontSize: "30vw", letterSpacing: "-0.02em" }}>diheirspace</p>
        </FadeUp>

        <FadeUp delay={0.2} className="relative mx-auto mt-[clamp(min(24px,3.125vw),4vw,40px)] max-w-[1802px]">
          <img alt="디에르 청담 공간" src={imgDiheirspaceBg} className="aspect-[1802/945] w-full rounded-sm object-cover" />
        </FadeUp>

        <div className="relative mt-[clamp(-80px,-6vw,-40px)]">
          <ReservationCard />
        </div>

        <FadeUp delay={0.2} className="mx-auto mt-[clamp(min(40px,5.2083vw),6vw,80px)] flex max-w-[1000px] flex-col gap-6 px-[clamp(0px,4vw,40px)]">
          <p className={`${SERIF} capitalize text-[rgba(255,255,255,0.9)] tracking-[-0.8px]`} style={{ fontSize: "clamp(min(28px,3.6458vw),3vw,40px)" }}>DIHEIR Cheongdam</p>
          <div className={`${SANS} flex justify-between gap-6 text-[rgba(255,255,255,0.6)] tracking-[-0.4px]`}>
            <p className="leading-[1.3]">서울시 강남구 도산대로59길 16,<br />B1층 (청담동, 테이블2025)</p>
            <p className="leading-[1.3] text-right">AM 10:30 - PM 07:30 / 월·명절 연휴 휴무<br />Tel. 0507-1339-2520</p>
          </div>
        </FadeUp>
      </div>

      {/* ================= MOBILE LAYOUT (<= 768px) ================= */}
      <div className="md:hidden relative w-full flex flex-col items-center">
        <FadeUp className="flex justify-center w-full overflow-hidden">
          <p className={`${SERIF} text-center capitalize text-[#9f9f8b] opacity-[0.12] whitespace-nowrap leading-none`} style={{ fontSize: "18vw", letterSpacing: "-0.02em" }}>Diheirspace</p>
        </FadeUp>
        
        <FadeUp delay={0.1} className="relative w-full rounded-[6vw] overflow-hidden shadow-2xl">
          <img alt="디에르 청담 공간" src={imgDiheirspaceBg} className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
          
          <div className="relative z-10 flex flex-col w-full p-[5vw] py-[10vw] gap-[10vw]">
            {/* The Form Box */}
            <div className="flex w-full flex-col items-center rounded-[4vw] bg-[#c5c6b6]/85 px-[6vw] py-[8vw] backdrop-blur-md shadow-xl border border-white/40">
              <p className={`${SERIF} text-center text-[#383629] mb-[8vw] leading-none`} style={{ fontSize: "7vw" }}>Reserve Appointment</p>
              
              <GoogleSubmitForm isMobile={true} onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />
            </div>
            
            <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
            
            {/* Address Info */}
            <div className="flex flex-col gap-[3vw] text-[rgba(255,255,255,0.95)]">
              <p className={`${SERIF} tracking-[-0.5px] leading-none`} style={{ fontSize: "6vw" }}>DIHEIR Cheongdam</p>
              <div className={`${SANS} flex flex-row justify-between gap-[2vw] text-[rgba(255,255,255,0.8)] tracking-[-0.3px]`} style={{ fontSize: "2vw" }}>
                <p className="leading-[1.4]">서울시 강남구 도산대로59길 16,<br />B1층 (청담동, 테이블2025)</p>
                <p className="leading-[1.4] text-right">AM 10:30 - PM 07:30 / 월·명절 연휴 휴무<br />Tel. 0507-1339-2520</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

    </section>
  );
}

/* --------------------------------- Footer --------------------------------- */

const FOOTER_LINKS = ["home", "Information", "Privacy Policy", "Terms of Use", "Quality Care", "contact"];

function YoutubeIcon() {
  return (
    <svg className="size-[clamp(min(48px,6.25vw),6vw,72px)]" fill="none" viewBox="0 0 72 72" aria-label="YouTube">
      <path d={svgPaths.p22cf2000} stroke="#C1C4AD" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="size-[clamp(min(48px,6.25vw),6vw,72px)] p-2.5" fill="none" viewBox="0 0 55.5 55.5" aria-label="Instagram">
      <path d={svgPaths.p2a5fff20} stroke="#C1C4AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p149a5a80} stroke="#C1C4AD" strokeWidth="1.5" />
      <path d="M44.25 11.28L44.28 11.247" stroke="#C1C4AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#383629] px-[clamp(min(20px,2.6042vw),6vw,110px)] py-[clamp(min(60px,7.8125vw),8vw,120px)]" data-name="footer">
      <FadeUp duration={1.5} y={30} className="pointer-events-none absolute inset-0 size-full">
        <img alt="" src={imgFooter} className="size-full object-contain object-bottom opacity-[0.12]" />
      </FadeUp>
      <div className="relative flex flex-col gap-[clamp(min(40px,5.2083vw),6vw,80px)]">
        <FadeUp duration={1.0}>
          <nav className={`${SERIF} flex flex-col gap-[clamp(min(20px,2.6042vw),3vw,60px)] capitalize text-[#c1c4ad] tracking-[-0.8px]`} style={{ fontSize: "clamp(min(24px,3.125vw),3vw,40px)" }}>
            {FOOTER_LINKS.map((link) => (
              <a key={link} href="#" className="w-fit transition-opacity hover:opacity-70">{link}</a>
            ))}
          </nav>
        </FadeUp>
        <FadeUp duration={1.0} delay={0.1}>
          <div className="flex flex-col gap-3">
            <p className={`${SERIF} capitalize text-[#c1c4ad] tracking-[-0.8px]`} style={{ fontSize: "clamp(min(24px,3.125vw),3vw,40px)" }}>SNS</p>
            <div className="flex items-center gap-6">
              <YoutubeIcon />
              <InstagramIcon />
            </div>
          </div>
        </FadeUp>
        <FadeUp margin="0px" duration={1.0} delay={0.2} className="mt-[clamp(min(40px,5.2083vw),6vw,80px)] w-full max-w-[1548px] self-center">
          <img alt="" src={imgDiheirLogoOg1} className="w-full object-contain" />
        </FadeUp>
      </div>
    </footer>
  );
}

/* --------------------------------- Page ----------------------------------- */

export default function DiheirPage() {
  return (
    <div className="relative w-full bg-[#f7f7ec]" data-name="diheir_page">
      <BrandIdentity />
      <BrandHeritage />
      <ServicesDesigner />
      <ServicesCore />
      <Collection />
      <DiheirSpace />
      <Footer />
    </div>
  );
}
