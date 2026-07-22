import { motion, useScroll, useTransform, useMotionValue } from "motion/react";
import React, { useRef, useEffect, useState } from "react";
import { FadeUp } from "../../app/components/diheir/FadeUp";
import svgPaths from "./svg-0y7pwhlwwq";
import imgHome01 from "../../component/home/home_01.jpg";
import imgHome2 from "./cbdc3fda0a03584386d0d1906c0dfd906aed7cde.png";
import imgHome02 from "../../component/home/home_02.jpg";
import imgHome3 from "./36a67817dc4e7412039c119b93fc8808d1d6ea67.png";
import imgDiheirLogoOg1 from "./6d5a74bfc1553599c2a801c8101c6cb39296d489.png";
import imgImage40 from "../../component/brand/olive_tree.png";
import imgImage49 from "../../component/brand/tree.png";
import imgFrame7 from "./d5c1d2100b9a6dcfa8bf3f0a60b5fe5cfd4d41a9.png";
import imgFrame8 from "./60d3b967594c3f9b4e5cb10e82c78e8eaef102cc.png";
import imgFrame9 from "./ba07f5994c6e2c4cb5830e9dfdcc07b0592e26f3.png";
import imgFrame10 from "./f6c122e00214ef423f256922a9b11476fb7caf94.png";
import imgFrame11 from "../../component/brand/1st_Generation.png";
import imgFrame12 from "../../component/brand/2st_Generation.png";
import imgRectangle30 from "./bb2168780e98686f4106636159df49ad9cfffbe4.png";
import imgService from "../../component/service/service.jpg";
import imgRectangle26 from "./230c7a22bbc55fa05fa494e84cf1588c7c692150.png";
import imgServiceLeft from "../../component/service/service_left.png";
import imgServiceRight from "../../component/service/service_right.png";
import imgFrame13 from "./7f861cbe047e3416f9ef1ce171b951d3673257a6.png";
import imgFrame14 from "../../component/service/service_The_First_Principle.png";
import coreMo01 from "../../component/service/core_mo_01.jpg";
import coreMo02 from "../../component/service/core_mo_02.jpg";
import coreMo03 from "../../component/service/core_mo_03.jpg";
import coreMo04 from "../../component/service/core_mo_04.jpg";
import coreMo05 from "../../component/service/core_mo_05.jpg";
import imgFrame15 from "./48c1a41ecbf53b79a81ec159489fccd6a950109b.png";
import imgFrame16 from "../../component/service/service_Jewelry_Resetting_Service.png";
import imgFrame17 from "../../component/service/service_Craftsmanship.png";
import imgFrame18 from "./6da6efef1bd105a442f258fa1c69a58a1c0e3b9e.png";
import imgFrame19 from "../../component/service/service_Jewelry_as_Legacy.png";
import imgFrame20 from "./9340202c3cd21d9164e557370a5ae877f0a49e6e.png";
import imgFrame21 from "../../component/service/service_Invisible_Precision.png";
import imgFrame31 from "./7b4847eb3b70aa6c950d8c0a99d5e9d65020736e.png";
import imgFrame32 from "./088f6bf9a8b1f83b63ab149ec51685c1f13b88ad.png";
import imgRectangle12 from "./88ea27b2777c1421cad2903ae4bc26702d861192.png";
import imgRectangle13 from "./0fd786dd9ccc53298c1e4563dda47d3e0fe76ff5.png";
import imgRectangle14 from "./d607e82960f594901d1144ba4728728d07dbd59a.png";
import imgRectangle15 from "./d228ad0703d949dc5b2bbdd884d5d247cf9c0046.png";
import imgRectangle16 from "./e5e6f92efb68cbcb68654f09bb6a678e2d261c95.png";
import imgRectangle17 from "./9f139ef2c228b0dd37220f97986d577631f4d21e.png";
import imgRectangle18 from "./7116551fc77e8e74ffac985596b8727be0d14354.png";
import imgRectangle19 from "./41d68358cddd72a8174d4984bd5971f2e87bd66a.png";
import imgRectangle20 from "./8d5f1fbbe62a4f0dad74eb1cda60623ed43b461f.png";
import imgCollection from "./1737e05b9e3e913f53d06449d2d1e12005c3a99b.png";
import imgCollection1 from "./0196438ee351bad6e621bc694c3c4fe6ef047f32.png";
import imgLOV01 from "../../component/collection/LOV_Collection_01.jpg";
import imgLOV02 from "../../component/collection/LOV_Collection_02.jpg";
import imgLOV03 from "../../component/collection/LOV_Collection_03.jpg";
import imgRectangle21 from "./05f82a08005a73ec12adaac9024fdaa2a8561a53.png";
import imgRectangle22 from "./e41d5196719563558533d5be1e1c3a14a805950b.png";
import imgRectangle23 from "./805a32b6d14e895fdc339ccbfbf2a6d65c0472d0.png";
import imgRectangle24 from "./f8ceae5a06aaed2f11c4300828d3be4956a4a8ce.png";
import imgRectangle25 from "./2890547f2c366d8ee61f84efdf3fc34e63ebd59c.png";
import imgRectangle27 from "./ee0be8605dcfa0476e8fd767d548fe235dd2d48e.png";
import imgRectangle28 from "./6e296036b962edb2929d2daf8cd921088e536e86.png";
import imgRectangle29 from "./4a616fbe7a5c9bd2845339c464e5ac938dc29483.png";
import imgRectangle31 from "./95994d08cd016e6055be24728aea048e8ad894ce.png";
import imgRectangle32 from "./8057f4096d22cfbe18e5fc4ec672f03037245848.png";
import imgRectangle33 from "./e19c734920c828b722f44e1c5e71443b1b472fca.png";
import imgFooter from "../../component/footer/footer_structure.png";
import imgDiheirspaceBg from "../../component/diheirspace/diheirspace.jpg";

function Logo() {
  return (
    <div className="absolute h-[186px] left-[660px] top-[447px] w-[600px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 186">
        <g clipPath="url(#clip0_1_451)" id="logo">
          <g id="Group">
            <path d={svgPaths.p93b5d80} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2525ea00} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p14319500} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
          <path d={svgPaths.p2031470} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p21087400} fill="var(--fill-0, white)" id="Vector_5" />
          <g id="Group_2">
            <path d={svgPaths.p2e414e80} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p3b659400} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
          <path d={svgPaths.p11f0e600} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p254aa200} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_1_451">
            <rect fill="white" height="186" width="600" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Removed HomeSection as it's now imported and rendered globally in DiheirLanding.

function Group1() {
  return (
    <div className="absolute inset-[0_0_32.23%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192.999 119.95">
        <g id="Group">
          <path d={svgPaths.p2451eb00} fill="var(--fill-0, #383629)" id="Vector" />
          <path d={svgPaths.p770c80} fill="var(--fill-0, #383629)" id="Vector_2" />
          <path d={svgPaths.p1e123b80} fill="var(--fill-0, #383629)" id="Vector_3" />
          <path d={svgPaths.p2ad0df40} fill="var(--fill-0, #383629)" id="Vector_4" />
          <path d={svgPaths.p2ce67480} fill="var(--fill-0, #383629)" id="Vector_5" />
          <path d={svgPaths.p6132500} fill="var(--fill-0, #383629)" id="Vector_6" />
          <path d={svgPaths.p2f580900} fill="var(--fill-0, #383629)" id="Vector_7" />
          <path d={svgPaths.p9d6cf30} fill="var(--fill-0, #383629)" id="Vector_8" />
          <path d={svgPaths.p2285c600} fill="var(--fill-0, #383629)" id="Vector_9" />
          <path d={svgPaths.p3b9bfe00} fill="var(--fill-0, #383629)" id="Vector_10" />
          <path d={svgPaths.p1d80da00} fill="var(--fill-0, #383629)" id="Vector_11" />
          <path d={svgPaths.p22c49a00} fill="var(--fill-0, #383629)" id="Vector_12" />
          <path d={svgPaths.p3460d300} fill="var(--fill-0, #383629)" id="Vector_13" />
          <path d={svgPaths.p20af1a00} fill="var(--fill-0, #383629)" id="Vector_14" />
          <path d={svgPaths.p3d657400} fill="var(--fill-0, #383629)" id="Vector_15" />
          <path d={svgPaths.p30586300} fill="var(--fill-0, #383629)" id="Vector_16" />
          <path d={svgPaths.p13db9600} fill="var(--fill-0, #383629)" id="Vector_17" />
          <path d={svgPaths.p18371500} fill="var(--fill-0, #383629)" id="Vector_18" />
          <path d={svgPaths.p296f3900} fill="var(--fill-0, #383629)" id="Vector_19" />
          <path d={svgPaths.p7a21600} fill="var(--fill-0, #383629)" id="Vector_20" />
          <path d={svgPaths.p31491280} fill="var(--fill-0, #383629)" id="Vector_21" />
          <path d={svgPaths.pe2a4d80} fill="var(--fill-0, #383629)" id="Vector_22" />
          <path d={svgPaths.p3ef5b230} fill="var(--fill-0, #383629)" id="Vector_23" />
          <path d={svgPaths.pf75f4f0} fill="var(--fill-0, #383629)" id="Vector_24" />
          <path d={svgPaths.p3847a140} fill="var(--fill-0, #383629)" id="Vector_25" />
          <path d={svgPaths.p194ffb00} fill="var(--fill-0, #383629)" id="Vector_26" />
          <path d={svgPaths.p2fc1a000} fill="var(--fill-0, #383629)" id="Vector_27" />
          <path d={svgPaths.p106a7900} fill="var(--fill-0, #383629)" id="Vector_28" />
          <path d={svgPaths.p39745880} fill="var(--fill-0, #383629)" id="Vector_29" />
          <path d={svgPaths.p2bc5a800} fill="var(--fill-0, #383629)" id="Vector_30" />
          <path d={svgPaths.p178e4000} fill="var(--fill-0, #383629)" id="Vector_31" />
          <path d={svgPaths.p1237f900} fill="var(--fill-0, #383629)" id="Vector_32" />
          <path d={svgPaths.p17e0bb00} fill="var(--fill-0, #383629)" id="Vector_33" />
          <path d={svgPaths.p6dd5f40} fill="var(--fill-0, #383629)" id="Vector_34" />
          <path d={svgPaths.p360f8f00} fill="var(--fill-0, #383629)" id="Vector_35" />
          <path d={svgPaths.p10576900} fill="var(--fill-0, #383629)" id="Vector_36" />
          <path d={svgPaths.p8094100} fill="var(--fill-0, #383629)" id="Vector_37" />
          <path d={svgPaths.p3aa278f0} fill="var(--fill-0, #383629)" id="Vector_38" />
          <path d={svgPaths.p4ba8380} fill="var(--fill-0, #383629)" id="Vector_39" />
          <path d={svgPaths.p5fd00} fill="var(--fill-0, #383629)" id="Vector_40" />
          <path d={svgPaths.p2fc62800} fill="var(--fill-0, #383629)" id="Vector_41" />
          <path d={svgPaths.p3e68b6f0} fill="var(--fill-0, #383629)" id="Vector_42" />
          <path d={svgPaths.pc5fae80} fill="var(--fill-0, #383629)" id="Vector_43" />
          <path d={svgPaths.p172c9980} fill="var(--fill-0, #383629)" id="Vector_44" />
          <path d={svgPaths.p39f7bb80} fill="var(--fill-0, #383629)" id="Vector_45" />
          <path d={svgPaths.pe4ab000} fill="var(--fill-0, #383629)" id="Vector_46" />
          <path d={svgPaths.p1a841900} fill="var(--fill-0, #383629)" id="Vector_47" />
          <path d={svgPaths.p3d7e270} fill="var(--fill-0, #383629)" id="Vector_48" />
          <path d={svgPaths.p3d220740} fill="var(--fill-0, #383629)" id="Vector_49" />
          <path d={svgPaths.p4f50b00} fill="var(--fill-0, #383629)" id="Vector_50" />
          <path d={svgPaths.p1d5bea00} fill="var(--fill-0, #383629)" id="Vector_51" />
          <path d={svgPaths.p20021f80} fill="var(--fill-0, #383629)" id="Vector_52" />
          <path d={svgPaths.p115a2400} fill="var(--fill-0, #383629)" id="Vector_53" />
          <path d={svgPaths.p1e162980} fill="var(--fill-0, #383629)" id="Vector_54" />
          <path d={svgPaths.p2ca57f0} fill="var(--fill-0, #383629)" id="Vector_55" />
          <path d={svgPaths.pf743f00} fill="var(--fill-0, #383629)" id="Vector_56" />
          <path d={svgPaths.p74664f0} fill="var(--fill-0, #383629)" id="Vector_57" />
          <path d={svgPaths.p391c4b00} fill="var(--fill-0, #383629)" id="Vector_58" />
          <path d={svgPaths.p1a2b2d80} fill="var(--fill-0, #383629)" id="Vector_59" />
          <path d={svgPaths.p26bfed00} fill="var(--fill-0, #383629)" id="Vector_60" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[63.37%_43.25%_3.96%_35.13%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.7328 57.8253">
        <g id="Group">
          <path d={svgPaths.p5dca400} fill="var(--fill-0, #383629)" id="Vector" />
          <path d={svgPaths.p2fc73d80} fill="var(--fill-0, #383629)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[73.12%_41.64%_1.85%_38.52%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.3064 44.2932">
        <g id="Group">
          <path d={svgPaths.p3563f100} fill="var(--fill-0, #383629)" id="Vector" />
          <path d={svgPaths.p3563f100} fill="var(--fill-0, #383629)" id="Vector_2" />
          <path d={svgPaths.pd45d400} fill="var(--fill-0, #383629)" id="Vector_3" />
          <path d={svgPaths.p36fe9c0} fill="var(--fill-0, #383629)" id="Vector_4" />
          <path d={svgPaths.p1630ef00} fill="var(--fill-0, #383629)" id="Vector_5" />
          <path d={svgPaths.p1f901900} fill="var(--fill-0, #383629)" id="Vector_6" />
          <path d={svgPaths.pc964900} fill="var(--fill-0, #383629)" id="Vector_7" />
          <path d={svgPaths.p35e70b00} fill="var(--fill-0, #383629)" id="Vector_8" />
          <path d={svgPaths.p37161200} fill="var(--fill-0, #383629)" id="Vector_9" />
          <path d={svgPaths.p1630ef00} fill="var(--fill-0, #383629)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_0_1.85%_0]" data-name="Group">
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[80.09%_34.96%_1.7%_34.48%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.979 32.228">
        <g id="Group">
          <path d={svgPaths.p31999880} fill="var(--fill-0, #383629)" id="Vector" />
          <path d={svgPaths.p15ce8800} fill="var(--fill-0, #383629)" id="Vector_2" />
          <path d={svgPaths.p32103400} fill="var(--fill-0, #383629)" id="Vector_3" />
          <path d={svgPaths.p374418f0} fill="var(--fill-0, #383629)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[6.75%_3.11%_-0.01%_1.16%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.763 165.075">
        <g id="Group">
          <path d={svgPaths.p265b1700} fill="var(--fill-0, #383629)" id="Vector" />
          <path d={svgPaths.p45ee000} fill="var(--fill-0, #383629)" id="Vector_2" />
          <path d={svgPaths.p27efc480} fill="var(--fill-0, #383629)" id="Vector_3" />
          <path d={svgPaths.pee49c00} fill="var(--fill-0, #383629)" id="Vector_4" />
          <path d={svgPaths.p2049f380} fill="var(--fill-0, #383629)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="h-[177px] opacity-30 overflow-clip relative shrink-0 w-[193px]" data-name="Layer_1">
      <Group />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Layer1() {
  return (
    <div className="h-[119px] relative shrink-0 w-[388px]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 388 119">
        <g clipPath="url(#clip0_1_366)" id="Layer_1" opacity="0.3">
          <g id="Group">
            <path d={svgPaths.p4a32100} fill="var(--fill-0, #383629)" id="Vector" />
            <path d={svgPaths.p316fa080} fill="var(--fill-0, #383629)" id="Vector_2" />
            <path d={svgPaths.p2612d700} fill="var(--fill-0, #383629)" id="Vector_3" />
          </g>
          <path d={svgPaths.p28c7800} fill="var(--fill-0, #383629)" id="Vector_4" />
          <path d={svgPaths.pc811680} fill="var(--fill-0, #383629)" id="Vector_5" />
          <g id="Group_2">
            <path d={svgPaths.p32a84f80} fill="var(--fill-0, #383629)" id="Vector_6" />
            <path d={svgPaths.p182bab80} fill="var(--fill-0, #4D4D4D)" id="Vector_7" />
          </g>
          <path d={svgPaths.p3ed06400} fill="var(--fill-0, #383629)" id="Vector_8" />
          <path d={svgPaths.p900fb70} fill="var(--fill-0, #383629)" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_1_366">
            <rect fill="white" height="119" width="388" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0 w-full">
      <Layer />
      <Layer1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[388px]">
      <Frame9 />
      <p className="[word-break:break-word] capitalize font-dream leading-[1.3] not-italic opacity-30 relative shrink-0 text-[#383629] text-[30px] text-center tracking-[-0.6px] w-full">Grace in every moment</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#bdbea7] content-stretch flex items-center justify-center left-[1173px] p-[120px] size-[650px] top-[1756px]">
      <Frame10 />
    </div>
  );
}

function BrandIdentity() {
  return (
    <div id="brand" className="bg-[#f7f7ec] h-[2756px] overflow-clip relative shrink-0 w-[1920px] light-section" data-name="brand_identity">
      <p className="[word-break:break-word] absolute capitalize font-dream leading-none left-[25px] not-italic text-[300px] text-[rgba(189,190,167,0.2)] top-[2088px] tracking-[-6px] whitespace-nowrap">Timeless</p>
      <p className="[word-break:break-word] absolute capitalize font-dream leading-none left-[360px] not-italic text-[300px] text-[rgba(189,190,167,0.2)] top-[2406px] tracking-[-6px] whitespace-nowrap">Green Grove</p>
      <div className="absolute h-[634px] left-[172px] top-[226px] w-[1748px]" data-name="Diheir_Logo_og 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-24 pointer-events-none size-full" src={imgDiheirLogoOg1} />
      </div>
      <FadeUp className="absolute h-[1030px] left-[100px] top-[710px] w-[774px]">
        <div className="size-full" data-name="image 40">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[112.84%] left-0 max-w-none top-0 w-full" src={imgImage40} />
          </div>
        </div>
      </FadeUp>
      <FadeUp delay={0.1} className="[word-break:break-word] absolute capitalize font-serif leading-[0] left-[100px] not-italic text-[#383629] text-[0px] top-[200px] whitespace-nowrap">
        <span className="leading-[normal] text-[220px]">D</span>
        <span className="leading-[normal] text-[#bdbea7] text-[220px]">iamond</span>
      </FadeUp>
      <FadeUp delay={0.2} className="[word-break:break-word] absolute capitalize font-serif leading-[0] left-[807px] not-italic text-[#383629] text-[0px] top-[420px] whitespace-nowrap">
        <span className="leading-[normal] text-[#8e8f6f] text-[220px]">+</span>
        <span className="leading-[normal] text-[220px]">{` Heir`}</span>
        <span className="leading-[normal] text-[#bdbea7] text-[220px]">loom</span>
      </FadeUp>
      <FadeUp delay={0.2} className="[word-break:break-word] absolute capitalize font-sans leading-[0] left-[914px] not-italic text-[#383629] text-[22px] top-[1009px] tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0">디에르는 가보라는 키워드에서 모티브를 얻어</p>
        <p className="leading-[1.5]">세대를 넘어 이어지는 가치와 기억을 담기 위해 탄생한 브랜드입니다.</p>
      </FadeUp>
      <FadeUp delay={0.3} className="[word-break:break-word] absolute capitalize font-sans leading-[0] left-[100px] not-italic text-[#383629] text-[22px] top-[1886px] tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0">보석은 단순한 장신구가 아니라 가족의 역사와 사랑의 시간을 담아</p>
        <p className="leading-[1.5]">다음 세대로 이어지는 상징이 될 수 있다고 믿습니다.</p>
      </FadeUp>
      <FadeUp className="-translate-x-full [word-break:break-word] absolute capitalize font-sans leading-[1.5] left-[1823px] not-italic text-[#383629] text-[22px] text-right top-[1417px] tracking-[-0.44px] whitespace-pre">
        <p>
          사계절 푸른 올리브나무는 강인한 생명력으로 결실과 승리, 장수와 풍요를 상징합니다.
          <br aria-hidden />
          {` 디에르는 올리브나무가 지닌 깊은 의미를 모든 디자인에 담아냅니다.`}
          <br aria-hidden />
          {` 시간이 흘러도 변하지 않는 가치와 아름다움을 전하며,`}
          <br aria-hidden />
          {` 사랑과 기억을 잇는 가보를 만들어갑니다.`}
        </p>
      </FadeUp>
      <FadeUp className="-translate-x-full [word-break:break-word] absolute capitalize font-sans leading-[0] left-[calc(50%+187px)] not-italic text-[#383629] text-[22px] text-right top-[2159px] tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0">시간이 흘러도 변하지 않는 감정과 가치, 디에르는 그 영속성을 이야기합니다.</p>
        <p className="leading-[1.5]">디에르에 당신의 스토리가 담깁니다.</p>
      </FadeUp>
      <FadeUp delay={0.2} className="absolute left-[598px] size-[448px] top-[1438px]">
        <div className="size-full" data-name="image 49">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage49} />
        </div>
      </FadeUp>
      <Frame11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] capitalize content-stretch flex flex-col gap-[8px] items-start justify-center leading-[1.1] not-italic relative shrink-0 w-full">
      <p className="font-serif relative shrink-0 text-[#efefe1] text-[40px] tracking-[-0.8px] w-full">3st Generation</p>
      <p className="font-sans relative shrink-0 text-[#d4d4b9] text-[16px] tracking-[-0.32px] w-full">3남매의 도로시(1등 주얼리 쇼핑몰)</p>
      <p className="font-sans font-light relative shrink-0 text-[#d4d4b9] text-[12px] tracking-[-0.24px] w-full">{`Korea's Leading Online Jewelry Store`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-tl-[20px] rounded-tr-[20px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[40px] pt-[32px] px-[40px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <FadeUp delay={0.2} className="-translate-x-1/2 absolute content-stretch flex flex-col h-[600px] items-center justify-end left-1/2 pt-[424px] top-[588px] w-[560px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame7} />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame8} />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[100.03%] left-[-13.85%] max-w-none top-[-1.39%] w-[150.04%]" src={imgFrame9} />
        </div>
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame10} />
        <div className="absolute bg-gradient-to-b from-[65.017%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.6)]" />
      </div>
      <Frame5 />
    </FadeUp>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] capitalize content-stretch flex flex-col gap-[8px] items-start justify-center leading-[1.1] not-italic relative shrink-0 w-full">
      <p className="font-serif relative shrink-0 text-[#efefe1] text-[40px] tracking-[-0.8px] w-full">1st Generation</p>
      <p className="font-sans relative shrink-0 text-[#d4d4b9] text-[16px] tracking-[-0.32px] w-full">외할아버지의 동광당(동대문)</p>
      <p className="font-sans font-light relative shrink-0 text-[#d4d4b9] text-[12px] tracking-[-0.24px] w-full">Donggwangdang Jewelry (Dongdaemun)</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-tl-[20px] rounded-tr-[20px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[40px] pt-[30px] px-[40px] relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <FadeUp delay={0.1} className="absolute content-stretch flex flex-col h-[482px] items-center justify-end left-[150px] pt-[424px] top-[739px] w-[450px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[153.71%] left-[-1.13%] max-w-none top-[-15.74%] w-[102.9%]" src={imgFrame11} />
        </div>
        <div className="absolute bg-gradient-to-b from-[65.017%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.6)]" />
      </div>
      <Frame8 />
    </FadeUp>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] capitalize content-stretch flex flex-col gap-[8px] items-start justify-center not-italic relative shrink-0 w-full">
      <p className="font-serif leading-[1.1] relative shrink-0 text-[#efefe1] text-[40px] tracking-[-0.8px] w-full">2st Generation</p>
      <p className="font-sans leading-[1.1] relative shrink-0 text-[#d4d4b9] text-[16px] tracking-[-0.32px] w-full">부모님의 삼정사(대구 교동시장 1호 금방)</p>
      <div className="font-sans font-light leading-[0] relative shrink-0 text-[#d4d4b9] text-[12px] tracking-[-0.24px] w-full whitespace-pre-wrap">
        <p className="leading-[1.1] mb-0">{`Our Parents' Samjeongsa (The First Jewelry `}</p>
        <p className="leading-[1.1]">Store in Daegu Gyodong Market)</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-tl-[20px] rounded-tr-[20px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[40px] pt-[30px] px-[40px] relative size-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <FadeUp delay={0.3} className="absolute content-stretch flex flex-col h-[482px] items-center justify-end left-[1320px] pt-[424px] top-[739px] w-[450px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFrame12} />
        <div className="absolute bg-gradient-to-b from-[65.017%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.6)]" />
      </div>
      <Frame14 />
    </FadeUp>
  );
}

function BrandHeritage() {
  return (
    <div className="bg-[#f7f7ec] h-[2339px] overflow-visible relative shrink-0 w-[1920px] light-section" data-name="brand_heritage">
      <p className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-serif leading-[1.3] left-[calc(50%+576.5px)] not-italic opacity-24 text-[#bdbea7] text-[340px] text-center top-[401px] whitespace-nowrap">years</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-serif leading-[1.3] left-[calc(50%-533px)] not-italic opacity-24 text-[#bdbea7] text-[820px] text-center top-[-31px] tracking-[-41px] whitespace-nowrap">80</p>
      <FadeUp className="-translate-x-full [word-break:break-word] absolute capitalize font-serif leading-[1.3] left-[1818px] not-italic text-[#787957] text-[30px] text-right top-[171px] tracking-[-0.6px] whitespace-nowrap">
        <p>
          A Family Legacy
          <br aria-hidden />
          Crafted Over 80 Years
        </p>
      </FadeUp>
      <FadeUp delay={0.2} className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-dream leading-[1.3] left-[calc(50%+14.5px)] not-italic text-[rgba(159,159,139,0.24)] text-[220px] text-center top-[1448px] tracking-[-4.4px] whitespace-nowrap">
        DIHEIR by DOROCY
      </FadeUp>
      <FadeUp delay={0.3} className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-sans leading-[1.6] left-[calc(50%+0.5px)] not-italic text-[#383629] text-[24px] text-center top-[1756px] tracking-[-0.48px] whitespace-nowrap">
        <p className="mb-0 font-normal">
          <span className="font-semibold">디에르(DIHEIR)</span>는
          <br />
          프리미엄 주얼리 디자인 하우스 ‘도로시(DOROCY)’에서 새롭게 전개하는
          <br />
          <span className="font-semibold">하이 주얼리 브랜드</span>입니다.
        </p>
      </FadeUp>
      <div className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-sans leading-[0] left-[calc(50%-0.5px)] not-italic text-[#383629] text-[24px] text-center top-[2036px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0 font-normal">더 멋진 디자인과 더 높은 완성도의 작품을 만들고 싶다는</p>
        <p className="leading-[1.5] font-normal">도로시의 순수 열정은 디에르를 탄생시킨 원동력이었습니다.</p>
      </div>
      <Frame6 />
      <Frame7 />
      <Frame13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="group overflow-hidden content-stretch flex flex-col h-[680px] items-center justify-end pb-[100px] px-[100px] relative rounded-tl-[400px] rounded-tr-[400px] shrink-0 w-[490px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[400px] rounded-tr-[400px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-tl-[400px] rounded-tr-[400px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame13} />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame14} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-tl-[400px] rounded-tr-[400px]" />
      </div>
      <div className="[word-break:break-word] capitalize font-serif leading-[0] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-0.8px] whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0">
        <p className="leading-[1.3] mb-0 whitespace-pre">{`The First Principle `}</p>
        <p className="leading-[1.3] whitespace-pre">– Comfort Fit</p>
      </div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 content-stretch flex flex-col items-center justify-center pb-[40px] pt-[32px] px-[40px] size-full text-center">
        <p className="font-serif text-white text-[32px] tracking-[-0.64px] mb-[20px] leading-tight text-center">The First Principle<br/>– Comfort Fit</p>
        <p className="font-sans text-[#d4d4b9] text-[16px] tracking-[-0.32px] leading-[1.6] text-center">
          “편안하지 않다면, 디에르는 디자인하지 않습니다.”<br/>
          디에르가 가장 먼저 고민하는 것은 디자인 이전의 감각입니다.<br/>
          손끝이 처음 반지를 마주하는 순간,<br/>
          오랜 시간 함께했을 때의 편안함과 자연스러움<br/>
          그리고 일상 속에서 잊은 듯 스며드는 착용감.<br/>
          설계 기준 0.1mm의 차이에서 착용의 편안함이 완성됩니다.<br/>
          디에르는 착용의 모든 순간을 설계합니다.
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="group overflow-hidden content-stretch flex flex-col h-[680px] items-center justify-end pb-[100px] px-[43px] relative rounded-tl-[400px] rounded-tr-[400px] shrink-0 w-[490px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[400px] rounded-tr-[400px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-tl-[400px] rounded-tr-[400px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame13} />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame15} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-tl-[400px] rounded-tr-[400px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame16} />
      </div>
      <p className="[word-break:break-word] capitalize font-serif leading-[1.3] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-0.8px] whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0">Jewelry Resetting Service</p>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 content-stretch flex flex-col items-center justify-center pb-[40px] pt-[32px] px-[40px] size-full text-center">
        <p className="font-serif text-white text-[32px] tracking-[-0.64px] mb-[20px] leading-tight text-center">Jewelry Resetting<br/>Service</p>
        <p className="font-sans text-[#d4d4b9] text-[16px] tracking-[-0.32px] leading-[1.6] text-center">
          디에르의 전문 주얼리 디자이너는<br/>
          고객님의 의미 있는 보석이 더욱 가치 있도록<br/>
          리세팅 서비스를 제공해 드립니다.<br/>
          고객의 취향과 의미를 반영한<br/>
          커스터마이징 서비스를 더해,<br/>
          디에르 주얼리는 세대를 잇는 이야기로 완성됩니다.
        </p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="group overflow-hidden content-stretch flex flex-col h-[680px] items-center justify-end pb-[100px] pl-[125px] pr-[126px] relative rounded-tl-[400px] rounded-tr-[400px] shrink-0 w-[490px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[400px] rounded-tr-[400px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-tl-[400px] rounded-tr-[400px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame13} />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame17} />
      </div>
      <p className="[word-break:break-word] capitalize font-serif leading-[1.3] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-0.8px] whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0">Craftsmanship</p>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 content-stretch flex flex-col items-center justify-center pb-[40px] pt-[32px] px-[40px] size-full text-center">
        <p className="font-serif text-white text-[36px] tracking-[-0.72px] mb-[20px] leading-tight text-center">Craftsmanship</p>
        <p className="font-sans text-[#d4d4b9] text-[16px] tracking-[-0.32px] leading-[1.6] text-center">
          디에르의 작품들은<br/>
          주얼리 명장님들의 정교한 세공을 통해 완성됩니다.<br/>
          완벽한 비율과 균형,<br/>
          섬세한 디테일.<br/>
          편안한 착용감까지 아우르는 완성도.<br/>
          세대를 이어 전해지는 작품들은<br/>
          그 스토리와 사랑이 같이 전달되어야 합니다.<br/>
          가보의 가치는 타협하지 않는 장인 정신을 통해 완성됩니다.
        </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="group overflow-hidden content-stretch flex flex-col h-[680px] items-center justify-end pb-[100px] px-[99px] relative rounded-tl-[400px] rounded-tr-[400px] shrink-0 w-[490px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[400px] rounded-tr-[400px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-tl-[400px] rounded-tr-[400px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame13} />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame18} />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame19} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-tl-[400px] rounded-tr-[400px]" />
      </div>
      <p className="[word-break:break-word] capitalize font-serif leading-[1.3] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-0.8px] whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0">Jewelry as Legacy</p>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 content-stretch flex flex-col items-center justify-center pb-[40px] pt-[32px] px-[40px] size-full text-center">
        <p className="font-serif text-white text-[36px] tracking-[-0.72px] mb-[20px] leading-tight text-center">Jewelry as Legacy</p>
        <p className="font-sans text-[#d4d4b9] text-[16px] tracking-[-0.32px] leading-[1.6] text-center">
          디에르는 ‘유산’을 물질이 아닌 감정으로 바라봅니다.<br/>
          부모에서 자녀로,<br/>
          사랑하는 사람에게로 이어지는 이야기,<br/>
          그리고 오래도록 기억으로 남는 순간들.<br/>
          디에르는주얼리를 통해<br/>
          사람과 사람 사이의 시간을 연결하고자 합니다.
        </p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="group overflow-hidden content-stretch flex flex-col h-[680px] items-center justify-end pb-[100px] relative rounded-tl-[400px] rounded-tr-[400px] shrink-0 w-[490px]">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-tl-[400px] rounded-tr-[400px]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-tl-[400px] rounded-tr-[400px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame13} />
        <img alt="" className="absolute max-w-none object-cover rounded-tl-[400px] rounded-tr-[400px] size-full transition-transform duration-700 group-hover:scale-105" src={imgFrame20} />
        <div className="absolute inset-0 overflow-hidden rounded-tl-[400px] rounded-tr-[400px]">
          <img alt="" className="absolute h-[128.06%] left-[0.01%] max-w-none top-[-26.33%] w-full" src={imgFrame21} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-tl-[400px] rounded-tr-[400px]" />
      </div>
      <div className="[word-break:break-word] capitalize font-serif leading-[0] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-0.8px] whitespace-nowrap transition-opacity duration-500 group-hover:opacity-0">
        <p className="leading-[1.3] mb-0 whitespace-pre">{`Invisible Precision `}</p>
        <p className="leading-[1.3] whitespace-pre">– Comfort Fit for Size</p>
      </div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 content-stretch flex flex-col items-center justify-center pb-[40px] pt-[32px] px-[40px] size-full text-center">
        <p className="font-serif text-white text-[32px] tracking-[-0.64px] mb-[20px] leading-tight text-center">Invisible Precision<br/>– Comfort Fit for Size</p>
        <p className="font-sans text-[#d4d4b9] text-[16px] tracking-[-0.32px] leading-[1.6] text-center">
          - 총 180개의 14K 옐로우 골드 사이즈 링 -<br/><br/>
          2.5mm부터 5.0mm까지 7가지 폭의 밴드를 사이즈 반지로 제작하여,<br/>
          고객이 가장 자연스러운 감각을 찾을 수 있도록 했습니다.<br/>
          오랜 시간 곁에 머무를 반지와 함께할 고객님을 위한<br/>
          디에르의 배려이자 철학입니다.
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[27px] h-[680px] items-center justify-center left-[calc(50%+0.5px)] top-0">
      <Frame16 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

      // Drag to scroll logic for desktop mouse users
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

  return (

    <div 
      ref={scrollRef}
      className="absolute h-[680px] left-[calc(50%-2000px)] overflow-x-auto overflow-y-clip top-[1644px] w-[4000px] flex gap-[27px] px-[1140px] snap-x snap-mandatory hide-scrollbar cursor-grab"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {[...Array(40)].map((_, i) => (
        <React.Fragment key={i}>
          <div className="snap-center shrink-0"><Frame16 /></div>
          <div className="snap-center shrink-0"><Frame18 /></div>
          <div className="snap-center shrink-0"><Frame19 /></div>
          <div className="snap-center shrink-0"><Frame20 /></div>
          <div className="snap-center shrink-0"><Frame21 /></div>
        </React.Fragment>
      ))}
    </div>
  );
}

function ServicesDesigner() {
  return (
    <div id="services" className="bg-[#f7f7ec] h-[2550px] relative shrink-0 w-[1920px] light-section" data-name="Services_Designer">
      <div className="absolute h-[1224px] left-[calc(50%-2000px)] top-0 w-[4000px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-1/2 -translate-x-1/2 min-w-[1920px] w-full object-cover top-0" src={imgService} />
        </div>
      </div>
      <FadeUp className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-dream leading-[1.3] left-[calc(50%-489.5px)] not-italic text-[rgba(159,159,139,0.45)] text-[230px] text-center top-[72px] tracking-[-4.6px] whitespace-nowrap">High-End</FadeUp>
      <FadeUp delay={0.2} className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-dream leading-[1.3] left-[450px] not-italic text-[#383629] text-[60px] text-center top-[222px] tracking-[-1.2px] whitespace-nowrap">Personal Design Consultation</FadeUp>
      <FadeUp delay={0.3} className="[word-break:break-word] absolute capitalize font-sans leading-[0] left-[calc(50%-2px)] not-italic text-[#383629] text-[18px] top-[198px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0 whitespace-pre">
          {`전속 디자이너가 매장에 상주하여 `}
          <br aria-hidden />
          {`고객 한 분 한 분의 라이프스타일에 맞춘 `}
        </p>
        <p className="leading-[1.5] whitespace-pre">큐레이션과 맞춤 제작(비스포크) 상담을 진행합니다.</p>
      </FadeUp>
      <FadeUp duration={1.0} className="absolute bg-[rgba(160,160,160,0.2)] border-2 border-[rgba(255,255,255,0)] border-solid h-[600px] left-[360px] rounded-[32px] top-[371px] w-[1200px]" />
      <FadeUp duration={1.0} delay={0.1} className="-translate-x-1/2 absolute h-[520px] left-1/2 rounded-[40px] top-[411px] w-[1082px] overflow-hidden bg-black/10">
        <iframe
          src="https://player.vimeo.com/video/1209697467?autoplay=1&loop=1&muted=1&background=1"
          className="absolute top-1/2 left-1/2 w-full aspect-[9/16] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </FadeUp>
      <FadeUp className="absolute h-[538px] left-[-53px] top-[632px] w-[768px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <img alt="" className="w-full h-full object-contain" src={imgServiceLeft} />
        </div>
      </FadeUp>
      <FadeUp className="absolute h-[542px] left-[1258px] top-[660px] w-[735px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <img alt="" className="w-full h-full object-contain" src={imgServiceRight} />
        </div>
      </FadeUp>
      <div className="absolute bg-gradient-to-b from-[6.886%] from-[rgba(193,196,173,0)] h-[1598px] left-[calc(50%-2000px)] to-[#c1c4ad] to-[98.764%] top-[952px] via-[#c1c4ad] via-[12.98%] w-[4000px]" />
      <Frame />
      <FadeUp delay={0.2} className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-dream leading-[1.3] left-[calc(50%+161.5px)] not-italic opacity-80 text-[#f7f7ec] text-[230px] text-center top-[968px] tracking-[-4.6px] whitespace-nowrap">Quality Jewelry</FadeUp>
    </div>
  );
}

function Frame29() {
  return (
    <FadeUp delay={0.2} className="[word-break:break-word] capitalize content-stretch flex flex-col gap-[22px] items-center not-italic relative shrink-0 text-[#e7e8cf] text-center w-[1042px]">
      <div className="font-serif leading-[0] relative shrink-0 text-[64px] tracking-[-1.28px] w-full">
        <p className="leading-[1.3] mb-0">“Jewelry becomes meaningful</p>
        <p className="leading-[1.3]">When it carries memories beyond time”</p>
      </div>
      <p className="font-sans leading-[1.3] relative shrink-0 text-[32px] tracking-[-0.64px] w-full">세대를 지나 기억으로 남는 주얼리, 디에르.</p>
    </FadeUp>
  );
}

function Frame30({ clipPath, scale, textOpacity, vh, actualWidth = 1920 }: { clipPath?: any, scale?: any, textOpacity?: any, vh?: number, actualWidth?: number }) {
  return (
    <motion.div 
      className="absolute content-stretch flex flex-col items-center justify-center origin-center"
      style={{ 
        width: `${actualWidth}px`, 
        height: vh ? `${vh}px` : "1080px", 
        top: 0, 
        left: `calc(50% - ${actualWidth / 2}px)`,
        clipPath,
        scale
      }}
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1211853153?background=1&autoplay=1&loop=1&muted=1"
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1404 637' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.20000000298023224'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(4.2985e-15 31.85 -70.2 1.9503e-15 702 318.5)'><stop stop-color='rgba(231,232,207,1)' offset='0'/><stop stop-color='rgba(231,232,207,0)' offset='0.65835'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)" }} />
      </div>
      <motion.div style={{ opacity: textOpacity || 1 }}>
        <Frame29 />
      </motion.div>
    </motion.div>
  );
}

function Group6({ scrollYProgress, vh = 1080, actualWidth = 1920 }: { scrollYProgress?: any; vh?: number; actualWidth?: number }) {
  // 레이아웃 변경(width, height) 대신 GPU 가속을 받는 clip-path를 사용하여 렌더링 성능 최적화
  const startTop = (vh - 637) / 2;
  const horizontalInset = (actualWidth - 1404) / 2;
  const clipPath = useTransform(
    scrollYProgress, 
    [0, 0.7], 
    [`inset(${startTop}px ${horizontalInset}px ${startTop}px ${horizontalInset}px)`, "inset(0px 0px 0px 0px)"]
  );
  
  // 전체 컴포넌트 스케일을 원본과 동일하게 0.7에서 1로 확대
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.7, 1]);

  const leftX = useTransform(scrollYProgress, (val: number) => {
    let p = val / 0.7;
    if (p < 0) p = 0;
    if (p > 1) p = 1;
    return (-473 - (actualWidth - 1920) / 2) * p;
  });

  const rightX = useTransform(scrollYProgress, (val: number) => {
    let p = val / 0.7;
    if (p < 0) p = 0;
    if (p > 1) p = 1;
    return (465 + (actualWidth - 1920) / 2) * p;
  });
  const textOpacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);

  const centerY = vh / 2;
  const leftTopY = centerY - 389;
  const leftBottomY = centerY + 29;
  const rightTopY = centerY - 408;
  const rightBottomY = centerY + 47;

  return (
    <div className="absolute contents">
      <Frame30 clipPath={clipPath} scale={scale} textOpacity={textOpacity} vh={vh} actualWidth={actualWidth} />
      <motion.div style={{ x: rightX, top: rightTopY }} className="absolute h-[360px] left-[1515px] w-[600px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle12} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle13} />
          <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
            <img alt="" className="w-full h-full object-cover" src={coreMo01} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0)] inset-0" />
        </div>
      </motion.div>
      <motion.div style={{ x: rightX, top: rightBottomY }} className="absolute h-[360px] left-[1515px] w-[600px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle12} />
          <img alt="" className="absolute w-full h-full object-cover" src={coreMo02} />
          <div className="absolute bg-[rgba(0,0,0,0)] inset-0" />
        </div>
      </motion.div>
      <motion.div style={{ x: leftX, top: leftTopY }} className="absolute h-[360px] left-[-187px] w-[600px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle12} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle16} />
          <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
            <img alt="" className="w-full h-full object-cover" src={coreMo03} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0)] inset-0" />
        </div>
      </motion.div>
      <motion.div style={{ x: leftX, top: leftBottomY }} className="absolute h-[360px] left-[-187px] w-[600px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle12} />
          <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
            <img alt="" className="w-full h-full object-cover" src={coreMo04} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0)] inset-0" />
        </div>
      </motion.div>
    </div>
  );
}

function useZoomScrollProgress(ref: React.RefObject<HTMLDivElement>) {
  const progressMotion = useMotionValue(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = rect.height - windowHeight;
      
      if (scrollableDistance <= 0) {
        progressMotion.set(0);
        return;
      }

      const scrolled = -rect.top;
      let p = scrolled / scrollableDistance;
      if (p < 0) p = 0;
      if (p > 1) p = 1;
      
      progressMotion.set(p);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref, progressMotion]);

  return progressMotion;
}

function ServicesCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useZoomScrollProgress(containerRef);
  const [vh, setVh] = useState(1080);
  const [actualWidth, setActualWidth] = useState(1920);

  useEffect(() => {
    const update = () => {
      const zoom = Math.min(1, window.innerWidth / 1920);
      setVh(window.innerHeight / zoom);
      setActualWidth(Math.max(1920, window.innerWidth));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div ref={containerRef} className="h-[3500px] relative shrink-0 w-[1920px] light-section" data-name="Services_core">
      <div className="sticky top-0 w-[1920px] overflow-visible" style={{ height: `${vh}px`, backgroundImage: "linear-gradient(90deg, rgb(159, 159, 139) 0%, rgb(159, 159, 139) 100%), linear-gradient(90deg, rgb(247, 247, 236) 0%, rgb(247, 247, 236) 100%)" }}>
        <Group6 scrollYProgress={scrollYProgress} vh={vh} actualWidth={actualWidth} />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-serif justify-center leading-[0] not-italic relative shrink-0 text-[#e5e5d4] text-[80px] text-center whitespace-nowrap">
        <p className="leading-[normal]">LOV Collection</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-serif justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#e5e5d4] text-[24px] w-[min-content]">
        <p className="leading-[normal]">Lily Of the Valley</p>
      </div>
      <Frame46 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      <Frame45 />
      <p className="[word-break:break-word] font-sans font-light leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white w-full">은방울꽃의 꽃말, “틀림없이 행복해집니다”</p>
    </div>
  );
}

function Frame48() {
  return (
    <FadeUp className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[531px]">
      <Frame47 />
      <p className="[word-break:break-word] font-serif leading-[1.3] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[-0.4px] whitespace-pre">
        The Lily of theValleysymbolizes apromise:
        <br aria-hidden />
        {` "Surely, Happiness AwaitsYou.“`}
      </p>
    </FadeUp>
  );
}

function Frame31() {
  return (
    <FadeUp delay={0.1} className="absolute content-stretch flex items-center justify-center left-[560px] p-[10px] top-0">
      <div className="h-[584px] relative shrink-0 w-[540px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle21} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle22} />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[107.65%] left-[-15.76%] max-w-none top-[-22.25%] w-[174.61%]" src={imgRectangle23} />
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

function Frame33() {
  return (
    <FadeUp delay={0.2} className="absolute content-stretch flex items-center justify-center left-[560px] p-[10px] top-0">
      <div className="h-[606px] relative shrink-0 w-[560px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle21} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle22} />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[131.22%] left-[-28.27%] max-w-none top-[-31.58%] w-[184.51%]" src={imgRectangle24} />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[102.99%] left-[26.24%] max-w-none top-[-14.03%] w-[83.54%]" src={imgRectangle25} />
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

function Frame32() {
  return (
    <FadeUp delay={0.3} className="absolute content-stretch flex items-center justify-center left-[560px] p-[10px] top-0">
      <div className="h-[606px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[560px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle21} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle22} />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[152.02%] left-[-41.19%] max-w-none top-[-42.44%] w-[213.75%]" src={imgRectangle24} />
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

function Frame49() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center left-[120px] top-[130px] w-[1680px]">
      <Frame48 />
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="content-stretch cursor-pointer flex h-[606px] items-center justify-center relative shrink-0 w-full group"
      >
        <motion.div
          animate={{ x: isOpen ? -580 : -15, y: "0%", rotate: isOpen ? 0 : -3, scale: isOpen ? 1 : 0.98 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute z-10"
        >
          <div className="h-[606px] relative shrink-0 w-[560px]">
            <img alt="" className="absolute size-full object-cover shadow-xl" src={imgLOV02} />
          </div>
        </motion.div>

        <motion.div
          animate={{ x: isOpen ? 580 : 15, y: "0%", rotate: isOpen ? 0 : 3, scale: isOpen ? 1 : 0.98 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute z-10"
        >
          <div className="h-[606px] relative shrink-0 w-[560px]">
            <img alt="" className="absolute size-full object-cover shadow-xl" src={imgLOV03} />
          </div>
        </motion.div>

        <motion.div
          animate={{ zIndex: 20, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute z-20"
        >
          <div className="h-[606px] relative shrink-0 w-[560px]">
            <img alt="" className="absolute size-full object-cover shadow-2xl" src={imgLOV01} />
          </div>
        </motion.div>
      </button>
    </div>
  );
}

function BitcoinIconsArrowUpOutline() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="flex-none rotate-90">
        <div className="relative size-[24px]" data-name="bitcoin-icons:arrow-up-outline">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="bitcoin-icons:arrow-up-outline">
              <path d={svgPaths.p17f09fe0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] content-stretch flex items-start left-[261px] p-[24px] rounded-[36px] size-[72px] top-[1027px] z-50">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[36px]" />
      <BitcoinIconsArrowUpOutline />
    </div>
  );
}

function BitcoinIconsArrowUpOutline1() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="-rotate-90 flex-none">
        <div className="relative size-[24px]" data-name="bitcoin-icons:arrow-up-outline">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="bitcoin-icons:arrow-up-outline">
              <path d={svgPaths.p17f09fe0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] content-stretch flex items-start left-[148px] p-[24px] rounded-[36px] size-[72px] top-[1027px] z-50">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[36px]" />
      <BitcoinIconsArrowUpOutline1 />
    </div>
  );
}

function Collection() {
  const [actualWidth, setActualWidth] = useState(1920);

  useEffect(() => {
    const update = () => {
      setActualWidth(Math.max(1920, window.innerWidth));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="h-[1200px] overflow-visible relative shrink-0 w-[1920px]" data-name="collection">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#383629] h-[1200px] left-[calc(50%-2000px)] top-0 w-[4000px]" />
        <div className="absolute h-full top-0 overflow-hidden" style={{ width: `${actualWidth}px`, left: `calc(50% - ${actualWidth / 2}px)` }}>
          <img alt="" className="absolute h-[133.33%] left-[0%] max-w-none top-[-12.46%] w-full object-cover" src={imgCollection} />
        </div>
        <div className="absolute h-full top-0 overflow-hidden" style={{ width: `${actualWidth}px`, left: `calc(50% - ${actualWidth / 2}px)` }}>
          <img alt="" className="absolute h-[120%] left-[0%] max-w-none top-[-7.22%] w-full object-cover" src={imgCollection1} />
        </div>
      </div>
      <Frame49 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-w-px not-italic relative text-[#444429] text-[28px]">
        <p className="leading-[normal]">이름</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <input
      type="text"
      placeholder="입력해주세요."
      className="content-stretch pb-[10px] relative shrink-0 w-[640px] border-b border-black bg-transparent font-sans text-[24px] text-[#444429] placeholder:text-[rgba(68,68,41,0.6)] outline-none focus:border-b-2"
    />
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[800px]">
      <Frame26 />
      <Frame28 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-w-px not-italic relative text-[#444429] text-[28px]">
        <p className="leading-[normal]">연락처</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <input
      type="text"
      placeholder="입력해주세요."
      className="content-stretch pb-[10px] relative shrink-0 w-[640px] border-b border-black bg-transparent font-sans text-[24px] text-[#444429] placeholder:text-[rgba(68,68,41,0.6)] outline-none focus:border-b-2"
    />
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[800px]">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-w-px not-italic relative text-[#444429] text-[28px]">
        <p className="leading-[normal]">방문일</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <input
      type="text"
      placeholder="입력해주세요."
      className="content-stretch pb-[10px] relative shrink-0 w-[640px] border-b border-black bg-transparent font-sans text-[24px] text-[#444429] placeholder:text-[rgba(68,68,41,0.6)] outline-none focus:border-b-2"
    />
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[800px]">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-w-px not-italic relative text-[#444429] text-[28px]">
        <p className="leading-[normal]">이메일</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <input
      type="text"
      placeholder="입력해주세요."
      className="content-stretch pb-[10px] relative shrink-0 w-[640px] border-b border-black bg-transparent font-sans text-[24px] text-[#444429] placeholder:text-[rgba(68,68,41,0.6)] outline-none focus:border-b-2"
    />
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[800px]">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-w-px not-italic relative text-[#444429] text-[28px]">
        <p className="leading-[normal]">요청사항</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <input
      type="text"
      placeholder="입력해주세요."
      className="content-stretch pb-[10px] relative shrink-0 w-[640px] border-b border-black bg-transparent font-sans text-[24px] text-[#444429] placeholder:text-[rgba(68,68,41,0.6)] outline-none focus:border-b-2"
    />
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[800px]">
      <Frame44 />
      <Frame50 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0">
      <Frame22 />
      <Frame34 />
      <Frame37 />
      <Frame40 />
      <Frame43 />
    </div>
  );
}

function Frame1() {
  return (
    <label className="content-stretch flex items-center gap-[12px] relative shrink-0 w-full cursor-pointer">
      <input type="checkbox" className="size-[24px] accent-[#383629] cursor-pointer" />
      <div className="[word-break:break-word] flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[#444429] text-[24px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 font-normal">개인정보 처리방침에 동의</p>
      </div>
    </label>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame24 />
      <Frame1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-serif justify-center leading-[0] not-italic relative shrink-0 text-[#444429] text-[80px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Reserve Appointment</p>
      </div>
      <Frame27 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#383629] content-stretch flex h-[60px] items-center justify-center pb-[16px] pl-[41px] pr-[40px] pt-[15px] relative rounded-[30px] shrink-0 w-[209px]">
      <div className="[word-break:break-word] flex flex-col font-serif justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Reservation</p>
      </div>
    </div>
  );
}

function PrivacyPolicyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-2xl bg-[#f7f7ec] p-6 md:p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
        <button className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black" onClick={onClose}>&times;</button>
        <h3 className="mb-4 text-xl font-bold text-[#383629]">개인정보 수집 및 이용 동의</h3>
        <div className="text-sm text-[#383629] space-y-4 leading-relaxed max-h-[70vh] overflow-y-auto text-left whitespace-normal">
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

function Frame23() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
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

  return (
    <FadeUp delay={0.2} className="-translate-x-1/2 absolute bg-[#c3c0b0] content-stretch flex flex-col gap-[100px] h-[945px] items-center justify-center left-1/2 px-[80px] py-[100px] top-[750px] w-[1000px] z-10">
      <iframe name="hidden_iframe" style={{display:'none'}} onLoad={() => {}} />
      <form 
        action="https://docs.google.com/forms/d/e/1FAIpQLSdk6sZtR3D9WEqknpSOKANA-DxMfnszfjWW8VjwO4QopDwIOA/formResponse" 
        method="POST" 
        target="hidden_iframe"
        className="content-stretch flex flex-col gap-[100px] items-center relative shrink-0 w-full"
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
        <div className="[word-break:break-word] flex flex-col font-serif justify-center leading-[0] not-italic relative shrink-0 text-[#444429] text-[80px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Reserve Appointment</p>
        </div>

        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0">
            
            {/* 이름 */}
            <div className="content-stretch flex items-center relative shrink-0 w-[800px]">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-w-px not-italic relative text-[#444429] text-[28px]"><p className="leading-[normal]">이름</p></div>
              </div>
              <input required type="text" name="entry.1054060175" placeholder="입력해주세요." className="content-stretch pb-[10px] relative shrink-0 w-[640px] border-b border-black bg-transparent font-sans text-[24px] text-[#444429] placeholder:text-[rgba(68,68,41,0.6)] outline-none focus:border-b-2" />
            </div>

            {/* 연락처 */}
            <div className="content-stretch flex items-center relative shrink-0 w-[800px]">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-w-px not-italic relative text-[#444429] text-[28px]"><p className="leading-[normal]">연락처</p></div>
              </div>
              <input required type="tel" name="entry.2074802535" placeholder="숫자만 입력해주세요." value={phone} onChange={handlePhoneChange} maxLength={13} className="content-stretch pb-[10px] relative shrink-0 w-[640px] border-b border-black bg-transparent font-sans text-[24px] text-[#444429] placeholder:text-[rgba(68,68,41,0.6)] outline-none focus:border-b-2" />
            </div>

            {/* 방문일 */}
            <div className="content-stretch flex items-center relative shrink-0 w-[800px]">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-w-px not-italic relative text-[#444429] text-[28px]"><p className="leading-[normal]">방문일</p></div>
              </div>
              <input required type="date" min={today} value={date} onChange={e => setDate(e.target.value)} className="content-stretch pb-[10px] relative shrink-0 w-[640px] border-b border-black bg-transparent font-sans text-[24px] text-[#444429] placeholder:text-[rgba(68,68,41,0.6)] outline-none focus:border-b-2" />
              <input type="hidden" name="entry.626727524_year" value={year || ''} />
              <input type="hidden" name="entry.626727524_month" value={month || ''} />
              <input type="hidden" name="entry.626727524_day" value={day || ''} />
            </div>

            {/* 이메일 */}
            <div className="content-stretch flex items-center relative shrink-0 w-[800px]">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-w-px not-italic relative text-[#444429] text-[28px]"><p className="leading-[normal]">이메일</p></div>
              </div>
              <input required type="email" name="entry.134182212" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="이메일 주소에는 반드시 '@'가 포함되어야 합니다." placeholder="입력해주세요." className="content-stretch pb-[10px] relative shrink-0 w-[640px] border-b border-black bg-transparent font-sans text-[24px] text-[#444429] placeholder:text-[rgba(68,68,41,0.6)] outline-none focus:border-b-2" />
            </div>

            {/* 요청사항 */}
            <div className="content-stretch flex items-center relative shrink-0 w-[800px]">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-w-px not-italic relative text-[#444429] text-[28px]"><p className="leading-[normal]">요청사항</p></div>
              </div>
              <input type="text" name="entry.399277218" placeholder="입력해주세요." className="content-stretch pb-[10px] relative shrink-0 w-[640px] border-b border-black bg-transparent font-sans text-[24px] text-[#444429] placeholder:text-[rgba(68,68,41,0.6)] outline-none focus:border-b-2" />
            </div>
          </div>

          <div className="content-stretch flex items-center gap-[12px] relative shrink-0 w-full">
            <input id="privacy-agree-desktop" required type="checkbox" name="entry.831169210" value="네" className="size-[24px] accent-[#383629] cursor-pointer shrink-0" />
            <div className="[word-break:break-word] flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[#444429] text-[28px] whitespace-nowrap">
              <p className="leading-[normal] mb-0 font-normal">
                <button 
                  type="button" 
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="underline underline-offset-4 hover:text-black transition-colors cursor-pointer"
                >
                  개인정보 처리방침
                </button>
                <label htmlFor="privacy-agree-desktop" className="cursor-pointer ml-1">에 동의</label>
              </p>
            </div>
          </div>

          <div className="content-stretch flex items-start gap-[12px] relative shrink-0 w-full mt-[-10px]">
            <input type="hidden" name="entry.430492874" value={isMarketingAgreed ? "네" : "아니오"} />
            <input id="marketing-agree-desktop" type="checkbox" checked={isMarketingAgreed} onChange={(e) => setIsMarketingAgreed(e.target.checked)} className="size-[24px] accent-[#383629] cursor-pointer shrink-0 mt-[2px]" />
            <div className="[word-break:break-word] flex flex-col font-sans justify-start leading-[1.4] not-italic relative text-[#444429] text-[18px]">
              <label htmlFor="marketing-agree-desktop" className="cursor-pointer font-normal">
                (선택) 이메일, 문자(SMS), 전화 또는 기타 전자적 수단을 통해 디에르의 제품, 서비스, 전시·행사, 프로모션 및 각종 소식을 수신하는 데 동의합니다.
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="bg-[#383629] content-stretch flex h-[60px] items-center justify-center pb-[16px] px-[40px] pt-[15px] relative rounded-[30px] shrink-0 cursor-pointer hover:bg-black transition-colors">
          <div className="[word-break:break-word] flex flex-col font-serif justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
            <p className="leading-[normal]">Reservation</p>
          </div>
        </button>
      </form>
      
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </FadeUp>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex font-sans items-center justify-between leading-[0] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.6)] tracking-[-0.4px] w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.3] mb-0 whitespace-pre">{`서울시 강남구 도산대로59길 16, `}</p>
        <p className="leading-[1.3] whitespace-pre">B1층 (청담동, 테이블2025)</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.3]">
          AM 10:30 - PM 07:30 / 월·명절 연휴 휴무
          <br aria-hidden />
          Tel. 0507-1339-2520
        </p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <FadeUp delay={0.2} className="[word-break:break-word] absolute content-stretch flex flex-col gap-[24px] items-start left-[459px] not-italic px-[40px] top-[1755px] w-[1000px]">
      <p className="capitalize font-serif leading-[1.3] relative shrink-0 text-[40px] text-[rgba(255,255,255,0.9)] tracking-[-0.8px] w-full">DIHEIR Cheongdam</p>
      <Frame53 />
    </FadeUp>
  );
}

function Diheirspace() {
  return (
    <div id="reservation" className="bg-[#383629] h-[2073px] overflow-clip relative shrink-0 w-[1920px]" data-name="diheirspace">
      <FadeUp className="-translate-x-1/2 [word-break:break-word] absolute capitalize font-dream leading-[1.3] left-[calc(50%-1px)] not-italic text-[rgba(159,159,139,0.12)] text-[300px] text-center top-[96px] tracking-[-6px] whitespace-nowrap">diheirspace</FadeUp>
      <FadeUp duration={1.5} className="absolute h-[945px] left-[59px] top-[410px] w-[1802px]">
        <img alt="" className="absolute max-w-none object-cover size-full rounded-sm pointer-events-none" src={imgDiheirspaceBg} />
      </FadeUp>
      <div className="-translate-x-1/2 absolute bg-[#AAA680]/20 backdrop-blur-[20px] transform-gpu will-change-transform h-[1244px] left-1/2 rounded-[32px] top-[695px] w-[1116px]">
        <svg className="absolute inset-0 size-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="borderGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="10%" stopColor="white" stopOpacity="0.1" />
              <stop offset="40%" stopColor="white" stopOpacity="0.8" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.8" />
              <stop offset="90%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="1114" height="1242" rx="31" fill="none" stroke="url(#borderGrad)" strokeWidth="2" />
        </svg>
      </div>
      <Frame23 />
      <Frame52 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="[word-break:break-word] capitalize content-stretch flex flex-col font-serif gap-[60px] items-start leading-[1.3] not-italic relative shrink-0 text-[#c1c4ad] text-[40px] tracking-[-0.8px] w-full">
      <p className="min-w-full relative shrink-0 w-[min-content]">home</p>
      <p className="relative shrink-0 whitespace-nowrap">Information</p>
      <p className="relative shrink-0 whitespace-nowrap">Privacy Policy</p>
      <p className="relative shrink-0 whitespace-nowrap">Terms of Use</p>
      <p className="relative shrink-0 whitespace-nowrap">Quality Care</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">contact</p>
    </div>
  );
}

function SiYoutubeLine() {
  return (
    <div className="relative shrink-0 size-[72px]" data-name="si:youtube-line">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="si:youtube-line">
          <path d={svgPaths.p22cf2000} id="Vector" stroke="var(--stroke-0, #C1C4AD)" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-1.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.5 55.5">
          <g id="Group">
            <path d={svgPaths.p2a5fff20} id="Vector" stroke="var(--stroke-0, #C1C4AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p149a5a80} id="Vector_2" stroke="var(--stroke-0, #C1C4AD)" strokeWidth="1.5" />
            <path d="M44.25 11.28L44.28 11.247" id="Vector_3" stroke="var(--stroke-0, #C1C4AD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconoirInstagram() {
  return (
    <div className="overflow-clip relative shrink-0 size-[72px]" data-name="iconoir:instagram">
      <Group7 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <SiYoutubeLine />
      <IconoirInstagram />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[168px]">
      <p className="[word-break:break-word] capitalize font-serif leading-[1.3] not-italic relative shrink-0 text-[#c1c4ad] text-[40px] tracking-[-0.8px] w-full">SNS</p>
      <Frame57 />
    </div>
  );
}

function Frame54() {
  return (
    <FadeUp duration={1.0} margin="0px 0px 2000px 0px" className="absolute content-stretch flex flex-col gap-[80px] items-start left-[110px] top-[469px] w-[224px]">
      <Frame55 />
      <Frame56 />
    </FadeUp>
  );
}

function Footer() {
  return (
    <div className="h-[1405px] overflow-clip relative shrink-0 w-[1920px]" data-name="footer">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#383629] inset-0" />
        <FadeUp duration={1.5} y={30} className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute inset-0 size-full object-contain object-[75%_center] opacity-12" src={imgFooter} />
        </FadeUp>
      </div>
      <FadeUp duration={1.0} delay={0.2} margin="0px 0px 2000px 0px" className="absolute h-[562px] left-[372px] top-[805px] w-[1548px]" data-name="Diheir_Logo_og 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDiheirLogoOg1} />
      </FadeUp>
      <Frame54 />
    </div>
  );
}

function Logo1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="h-[59px] relative shrink-0 w-[190px] cursor-pointer" data-name="logo" onClick={onClick}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 190 59">
        <g clipPath="url(#clip0_1_336)" id="logo">
          <g id="Group">
            <path d={svgPaths.pdc4dd00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p374e80} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p114a4080} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
          <path d={svgPaths.p3467340} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p15c6e900} fill="var(--fill-0, white)" id="Vector_5" />
          <g id="Group_2">
            <path d={svgPaths.p34c34000} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p1212a780} fill="var(--fill-0, white)" id="Vector_7" />
          </g>
          <path d={svgPaths.p1ac89a00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p2e1d7200} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
        <defs>
          <clipPath id="clip0_1_336">
            <rect fill="white" height="59" width="190" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-50">
      <div className="relative group cursor-pointer z-50">
        <Logo1 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        <div className="absolute left-0 top-[100%] mt-4 flex flex-col gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto bg-black/40 backdrop-blur-md px-[32px] py-[28px] rounded-2xl border border-white/10 shadow-xl min-w-[200px]">
          {["home", "brand", "Services", "Reservation"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="font-dream capitalize text-white hover:text-[#bdbea7] transition-colors text-[24px] tracking-[-0.48px] cursor-pointer">
              {item}
            </a>
          ))}
        </div>
      </div>
      <p className="[word-break:break-word] capitalize font-serif leading-[1.3] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.64px] whitespace-nowrap cursor-pointer hover:text-[#bdbea7] transition-colors">Contact</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 top-0 w-[1920px] z-[100]" data-name="nav">
      <div className="content-stretch flex flex-col items-center overflow-visible px-[80px] py-[16px] relative rounded-[inherit] size-full">
        <Frame58 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function DiheirPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="diheir_page">
      <BrandIdentity />
      <BrandHeritage />
      <ServicesDesigner />
      <ServicesCore />
      <Collection />
      <Diheirspace />
      <Footer />
    </div>
  );
}