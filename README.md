# deheir_page — 디에르(DIHEIR) 브랜드 페이지

> 작업 규칙은 `rule.md`를 따른다. 이 문서는 실제로 구현하고 확인한 내용만 적는다.
> "확인 필요"로 표시한 항목은 아직 확정되지 않은 사항이다.

---

## 1. 페이지 목적과 구현 범위

- 디에르(DIHEIR)의 브랜드·컬렉션·쇼룸을 소개하고 쇼룸 방문 예약(네이버 예약)으로 연결하는 **브랜드 페이지**다.
- 온라인 판매 쇼핑몰이 아니다. 상품 구매, 장바구니, 결제, 주문, 배송, 재고, 회원가입·로그인, 가격, 할인, 상품 옵션은 **구현하지 않았다.**
- 결과물은 PC·모바일을 통합한 반응형 `index.html` 1개다. 하위 페이지, 모달, 예약폼은 만들지 않았다(시안에 없음).
- 기술 스택: HTML5 + CSS3 + 순수 JavaScript. React, JSX, TypeScript, 프레임워크, Tailwind, Bootstrap, 라이브러리, npm, 빌드 과정을 쓰지 않는다.
  - 참고: 이 저장소 루트(`../`)는 Figma Make의 React/Vite 기본 프로젝트지만 `deheir_page/`는 그것과 **무관하게 독립 실행**되며 루트의 어떤 파일도 참조하지 않는다.
- CSS는 `<head>`의 `<style>` 한 곳, JS는 본문 하단의 `<script>` 한 곳에 있다. 외부 CSS·JS 파일은 없다.

## 2. 실행 방법

- `deheir_page/index.html`을 브라우저에서 바로 열면 된다(`file://`). 설치·빌드는 필요 없다.
- 정적 서버에 `deheir_page/` 폴더를 통째로 올려도 된다. 에셋 경로는 모두 `component/...` 상대경로다.
- 인터넷 연결은 외부 링크(네이버 예약, 네이버 지도)를 열 때만 필요하다. 페이지 자체는 외부 리소스를 불러오지 않는다.

## 3. 실제 폴더 및 파일 구조

```
deheir_page/
├─ index.html                 HTML + <style> + <script> + 인라인 SVG(히어로 원형 텍스트)
├─ README.md
├─ rule.md                    사용자 요구사항 원문 + Ponytail 최소 구현 원칙
└─ component/
   ├─ font/
   │  ├─ DreamAvenue/         (비어 있음 — 폰트 파일 미제공, 7항 참고)
   │  └─ NotoSerifKR/NotoSerifKR-VF.ttf
   └─ img/
      ├─ 01_home/             home_img.jpg, Group_6_pc.svg, Group_6_mo.svg
      ├─ 02_brand_identity/   image_40.png, image_49.png, Layer_1_2_pc.svg, Layer_1_2_mo.svg,
      │                       Layer_1_Group_1~5.svg
      ├─ 03_brand_heritage/   Frame_10.jpg, Frame_11_pc.png, Frame_11_mo.png, Frame_12.png
      ├─ 04_Services_core/    Rectangle_12.jpg, Rectangle_13.png, Rectangle_14.png, Rectangle_15.png
      ├─ 05_Services_Designer/ Services_Designer.jpg, 개체.png, 개체_2.png, 디에르_0379(m)_결_1.png,
      │                       ChatGPT_Image_2026년_7월_23일_오후_01_22_58_1.png,
      │                       ChatGPT_Image_2026년_7월_23일_오후_02_02_22_1.png, Frame_13~17.png
      ├─ 06_collection/       collection.png, Rectangle_16.png, Rectangle_18.png, Rectangle_19.png
      ├─ 07_diheirspace/      Rectangle_20.jpg, Rectangle_36.png
      ├─ diheir_floating/     img.jpg, Frame_99.png, Frame_100.jpg, Frame_101.jpg,
      │                       Union.svg, Union_2.svg, Vector_pc.svg, Vector_mo.svg, logp.svg
      ├─ icon/                deheir_favicon.png, deheir_favicon_i.png, teenyicons_left/right-outline(_2).svg, bitcoin-icons_arrow-up-outline.svg
      └─ logo/                logo_pc.svg, logo_mo.svg, Diheir_Logo_og.png, Diheir Logo.png
```

- 폴더명은 피그마 섹션 프레임명에 위→아래 순서 번호를 붙였고, 파일명은 피그마 레이어명을 따랐다. PC·모바일 전용 에셋만 `_pc`/`_mo`를 붙였다.
- 추출 원본 중 확장자가 실제 형식과 다른 파일은 실제 형식(JPEG/PNG/SVG)에 맞는 확장자로 바꿔 저장했다.
- `index.html`이 참조하는 모든 `component/` 경로가 실제 파일과 대소문자까지 일치하는지 스크립트로 대조했고, 참조되지 않는 파일은 없다.
- 용량 참고: `01_home/home_img.jpg`(약 15.7MB), `03_brand_heritage/Frame_10.jpg`(약 12.8MB)는 원본 해상도 그대로다. 운영 적용 전 화질 확인 후 리사이즈·압축을 권장한다(확인 필요).

## 4. 확인한 피그마 PC·모바일 프레임

Figma MCP(`get_design_context`, 스크린샷)로 실제 프레임·레이어 속성에 접근해 확인했다.

- 파일 키: `wldCg850YxaUQJi9JW0NXe`
- PC 프레임: node `3:115` (너비 1920)
- 모바일 프레임: node `3:470` (너비 768)
- 같은 파일의 예약 랜딩페이지 시안은 사용하지 않았다.
- 시안에 지정된 모션(motion context)은 비어 있어서 애니메이션을 추가하지 않았다.
- **재확인(동일 요청 재수신 시):** PC `3:115`, 모바일 `3:470`의 design context와 motion context를 다시 받아 현재 `index.html`과 대조했다.
  - motion context: PC·모바일 모두 `{"nodes":[]}` → 모션 없음 유지.
  - 텍스트: 시안의 텍스트 노드(PC 82개, 모바일 77개)가 모두 `index.html`에 그대로 있다. 예외는 footer에서 잘려 보이지 않는 메뉴·SNS 문구뿐이다(15항).
  - 에셋: 화면에 보이는 에셋은 모두 `component/img/`의 파일과 바이트 단위로 같다. 같은 파일이 없는 항목은 다음과 같고, 모두 화면에 보이지 않거나 같은 그래픽을 다른 방식으로 분할 export한 것이다.
    - 불투명 이미지 아래에 깔린 레이어: home의 `imgHomeImg`, heritage 카드의 `Frame7~9`, collection의 `imgCollection`
    - 잘려서 보이지 않는 footer의 YouTube·Instagram 아이콘
    - 모바일 brand_identity 올리브 나무 그래픽(`Layer_1` 3:500): 벡터 75조각으로 export된다. PC와 같은 그림이라 PC 그룹 SVG(`Layer_1_Group_1~5.svg`)를 재사용한다.
    - 모바일 floating의 `Union`(3:736): 내용이 빈 SVG(`<g>`만 있음)로 export된다.

## 5. 피그마 섹션과 에셋 경로의 대응 관계

| 섹션 (PC / 모바일 node) | HTML 클래스 | 에셋 폴더 |
|---|---|---|
| nav (3:389 / 3:754) | `.diheir-nav` | `img/logo/logo_pc.svg`, `logo_mo.svg` |
| home (3:116 / 3:471) | `.diheir-home` | `img/01_home/` |
| brand_identity (3:132 / 3:485) | `.diheir-identity` | `img/02_brand_identity/` |
| brand_heritage (3:248 / 3:601) | `.diheir-heritage` | `img/03_brand_heritage/` |
| Services_core (3:273 / 3:626) | `.diheir-core` | `img/04_Services_core/` |
| Services_Designer (3:283 / 3:631) | `.diheir-designer` | `img/05_Services_Designer/` |
| collection (3:308 / 3:654) | `.diheir-collection` | `img/06_collection/` |
| diheirspace (3:330 / 3:676), `id="reservation"` | `.diheir-space` | `img/07_diheirspace/`, 매장 사진은 `01_home/home_img.jpg` |
| footer (3:366 / 3:710) | `.diheir-footer` | `img/logo/Diheir_Logo_og.png` |
| floating (3:404 / 3:733) | `.diheir-floating` | `img/diheir_floating/`, `img/icon/` |

- diheirspace의 매장 사진은 피그마에서도 home과 같은 `home_img` 이미지가 채워져 있어 같은 파일을 재사용했다(대체 이미지가 아님).
- **사용자 요청으로 시안과 다르게 한 부분:** brand_identity의 올리브나무 그루터기 이미지(`image_49.png`, `.diheir-identity__img49`)는 시안에 바깥 그림자(drop shadow)가 있지만, 사용자 요청에 따라 PC·모바일 모두 그림자를 뺐다.

## 6. PC·모바일 반응형 기준

- **PC 레이아웃: 1024px 이상**, 1920 프레임 기준. **모바일 레이아웃: 1023px 이하**, 768 프레임 기준. 767px 이하에서는 긴 문장만 자연스럽게 줄바꿈되도록 보정한다.
- 고정 좌표나 `transform: scale()`이 아니라 Flex/Grid 흐름으로 배치했다. 겹침·장식 요소만 `absolute`를 쓴다.
- 크기 단위 `--u` = (본문 너비 ÷ 프레임 너비). 본문 너비는 container query(`cqw`)로 계산해 스크롤바 너비를 빼고, PC는 1920px에서 상한을 둔다. 덕분에 768px 시안을 휴대폰에서 768 CSS px로 고정하지 않고 360~1023px 사이에서 비율대로 이어진다.
- 작은 화면에서 글자가 지나치게 작아지지 않도록 최소 글자 크기를 둔다. 실측 결과 최소 본문 크기는 1024px에서 약 10~11px, 360px에서 약 10~11px이다(장식용 원형 텍스트는 7.5px까지 작아진다, `aria-hidden`). 가독성 기준을 높일지는 확인 필요.
- 페이지 전체 가로 스크롤은 없고(`overflow-x: clip`), 카드 슬라이더 내부만 가로로 스크롤된다.

## 7. 폰트 파일과 적용 방법

| 폰트 | 상태 | 경로 |
|---|---|---|
| **Dream Avenue / Regular** | **not_found** (파일 미제공) | `component/font/DreamAvenue/` (비어 있음) |
| Noto Serif KR (가변, wght 200–900) | 제공됨, Chromium에서 로드 확인 | `component/font/NotoSerifKR/NotoSerifKR-VF.ttf` |
| Big Caslon / Medium, Big Caslon FB / Bold | not_found | 사용하지 않음 (아래 참고) |
| Pretendard / Regular | not_found | 사용하지 않음. 시안에서 글자 크기 0px인 감싸는 레이어에만 지정되어 있고, 실제 글자는 Noto Serif KR로 지정되어 있다 |

- `figma fonts resolve`로 시안 폰트 9종을 조회한 결과(재확인 시점): Noto Serif KR 5종(Bold/Light/Medium/Regular/SemiBold)은 resolved, Dream Avenue·Big Caslon·Big Caslon FB·Pretendard는 `not_found`.
- **시안과 rule.md의 폰트 차이(확인 필요):** 피그마 레이어상 다음 4개 문구는 Dream Avenue가 아니라 Big Caslon 계열이다. rule.md 7항("영문 제목·버튼은 DreamAvenue")에 따라 현재는 Dream Avenue 스택(현재는 serif 폴백)으로 표시한다.
  - `Timeless`, `Green Grove` (brand_identity 3:133·3:134 / 3:486·3:487, Big Caslon Medium)
  - `Grace in every moment` (brand_identity 박스 3:247 / 3:600, Big Caslon Medium)
  - `Personal Design Consultation` (Services_Designer 3:290 / 3:639, Big Caslon FB Bold)

  시안대로 Big Caslon을 쓸지 정해야 하며, 쓴다면 라이선스가 확인된 폰트 파일이 필요하다.

- 영문 제목·버튼(`.diheir-en`)은 `"DreamAvenue", serif`, 한글 본문은 `"NotoSerifKR", "Noto Serif KR", serif`를 쓴다. 두 `@font-face` 모두 `font-display: swap`.
- **현재 화면의 영문은 최종 폰트가 아니다.** Dream Avenue 파일이 없어 브라우저 기본 serif로 표시된다. 기본 serif는 Dream Avenue보다 글자 폭이 넓어서 `Diamond + Heirloom`, `Diheirspace`, `Quality Jewelry` 같은 큰 장식 글자가 시안보다 길어 보이고, 일부 문구 줄바꿈이 달라질 수 있다.
- 없는 파일을 요청하면 404가 나므로 현재 Dream Avenue는 `local("Dream Avenue")` 등 **로컬 설치본만** 찾는다. 파일이 없어도 네트워크 요청과 오류는 생기지 않는다.
- 라이선스가 확인된 파일을 확보하면:
  1. `component/font/DreamAvenue/font.woff2`, `font.woff`로 저장한다.
  2. `index.html` 상단 Dream Avenue `@font-face`의 `src`에서 `local(...)` 뒤에 다음을 추가한다.
     `url("component/font/DreamAvenue/font.woff2") format("woff2"), url("component/font/DreamAvenue/font.woff") format("woff")`
- Dream Avenue는 Regular(400) 1종만 쓰며 합성 볼드를 막아 두었다(`font-synthesis: none`).
- Noto Serif KR 파일은 원본 파일명이 `.woff2`였지만 실제로는 TrueType 가변 폰트(`fvar` 포함)여서 `.ttf`와 `format("truetype")`으로 연결했다. 용량이 약 23.8MB로 커서 운영 적용 전 서브셋·woff2 변환을 권장한다(확인 필요).

## 8. 이미지·영상 교체 방법

- 이미지는 같은 경로·파일명으로 덮어쓰면 된다. 비율이 바뀌면 해당 `<img>`의 `width`/`height` 속성(레이아웃 흔들림 방지용)도 맞춰 바꾼다.
- PC·모바일 이미지가 다른 곳은 `<picture><source media="(max-width: 1023px)">`로 나눴다.
- 첫 화면 home 배경은 즉시 로딩(`fetchpriority="high"`)하고, 나머지 이미지는 `loading="lazy"`다.
- **영상:** Services_core 가운데 패널에 diheir.com 운영 사이트의 Vimeo URL을 적용했다.
  - URL: `https://player.vimeo.com/video/1211853153?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1` (배경 모드, 자동재생·반복·음소거, 추적 안 함)
  - `<iframe class="diheir-core__video">`를 패널 안 문구 뒤에 두고, 16:9 영상이 패널을 빈틈없이 덮도록 중앙 정렬했다.
  - 장식용 배경이라 `aria-hidden`, `tabindex="-1"`, `pointer-events: none`으로 조작·포커스를 막았고, `loading="lazy"`로 지연 로딩한다.
  - iframe에는 포스터를 지정할 수 없고 별도 포스터 이미지도 받지 않아 포스터는 없다. 영상이 뜨기 전에는 Vimeo 플레이어의 기본 배경이 보인다.
  - 영상을 바꿀 때는 iframe `src`의 영상 ID만 바꾼다.
  - 재생 여부는 Vimeo 쪽 설정(삽입 허용 도메인, 공개 범위)에 따라 달라지므로 운영 도메인에서 확인해야 한다(17항).

## 9. 구현한 인터랙션

| 요소 | 동작 |
|---|---|
| Services_core (`data-name="Services_core"`) | **diheir.com 운영 사이트 사양 적용**: <br>• **PC(≥1024px)**: 3500px 스크롤 트랙 동안 `sticky` 고정. diheir.com 원본 수학 공식 기반으로 반응형 스테이지(`scale(min(1, vw/1920))`) 및 프레임(`scale(0.7 → 1.0)` + `clip-path` 확장) 적용. 초기 상태에서 중앙 비디오 및 문구가 0.7 배율로 축소되어 좌우 4개 사이드 이미지와 겹치지 않고 약 60px의 안정적인 여백 유지. 스크롤 진행에 따라 중앙 비디오가 100vw × 100vh로 화면을 빈틈없이 꽉 채우며 확장되고, 좌우 이미지들은 바깥으로 밀려나며 화면 밖으로 퇴장, 중앙 문구는 0.57~1.0 구간에서 부드럽게 페이드아웃.<br>• **모바일(<1024px)**: 500vh 스크롤 영역 동안 `sticky` 고정. 0~0.8 구간 4개 이미지 순차 크로스페이드 전환, 0.8 비디오 카드 등장, 0.9~1.0 구간 카드 형태에서 화면 전체(100vw × 100vh, `borderRadius 8px → 0px`)로 전면 확대. |
| Services_Designer 카드 슬라이더 | **diheir.com 원본 사양 적용 (무한 슬라이드 & 호버 오버레이)**: <br>• **무한 슬라이드**: 20세트 카드 복제 및 경계 감지 래핑 스크립트를 통해 좌우 어디로든 끝없이 이어지는 무한 슬라이드 구현. 초기 스크롤 중앙 정렬, 마우스 드래그 가로 스크롤(grab/grabbing), `snap-x mandatory` 스냅.<br>• **호버 시 설명 표시**: 카드 호버(또는 모바일 탭) 시 이미지 미세 줌(`scale 1.05`), 기본 타이틀 페이드아웃, 배경 블러 딤 레이어(`rgba(0,0,0,0.4)` + `blur 20px`)와 함께 영문 타이틀 및 상세 한글 스토리 설명 텍스트 노출.<br>• **모바일**: 터치 스와이프 및 이전/다음 화살표 버튼 연동, 탭 시 설명 토글. |
| Contact / 히어로 "쇼룸 방문 예약하기" | `#reservation`(diheirspace) 영역으로 이동 |
| Reservation 버튼 | 네이버 예약 새 창 |
| 지도 이미지 | 네이버 지도 장소 페이지 새 창 |
| floating 혜택 배너 카드(`.diheir-floating__card`) | 4종 혜택 슬라이드(상담 고객, 계약 고객, 당일 계약 고객, 디에르 제휴사 혜택). 좌우 화살표 버튼 또는 터치/마우스 드래그로 슬라이드 탐색. **카드 클릭 시 해당 혜택 식별자(`benefit=ID`) 및 `#benefits` 앵커가 포함된 예약 랜딩페이지 URL로 이동**하여 해당 혜택 아코디언이 자동으로 열린 상태로 표시됨. |
| floating Benefit 버튼 (PC `.diheir-floating__pill`, 모바일 `.diheir-floating__mo`) | 클릭 시 앵커/파라미터 없는 예약 랜딩페이지 기본 URL로 이동. |

- floating UI는 PC·모바일 모두 화면 우하단에 고정(`position: fixed`)되어 있다.
- nav는 사용자 요청에 따라 화면 상단에 고정(`position: fixed`)했고, 글라스 효과(반투명 흰 배경 0.1 + 배경 흐림)를 넣었다. 밝은 배경 섹션(`.diheir-identity`, `.diheir-heritage`) 진입 시 nav 로고가 다크 로고(`component/img/logo/Diheir Logo.png`)로, Contact 버튼이 `#383629`로 자동 전환되며, 섹션 이탈 시 기본 흰색 로고로 자연스럽게 복귀한다. 피그마 export에는 흐림 수치가 없어 페이지의 다른 글라스 요소와 같은 값(blur 20, 1920 기준)을 썼다. 크기 계산용 `.diheir-main`(container query) 안에서는 fixed가 화면 기준이 되지 않아 nav를 그 바깥(`#deheir_page` 바로 아래)에 둔다. 360~1920 전 너비에서 Contact로 `#reservation` 이동 시 제목이 nav에 가려지지 않음을 확인했다.

## 10. 메뉴·카드·문의·예약 버튼의 연결 경로

| 요소 | 연결 | 근거 |
|---|---|---|
| nav Contact | `#reservation` | 운영 사이트와 같은 동작(쇼룸 영역 이동) |
| 히어로 "쇼룸 방문 예약하기"(`.diheir-home__cta`) | `https://booking.naver.com/booking/6/bizes/1551859` (새 창, `rel="noopener noreferrer"`) | 사용자 요청 네이버 예약 연결 |
| Reservation | `https://booking.naver.com/booking/6/bizes/1551859` (새 창, `rel="noopener noreferrer"`) | 운영 사이트(diheir.com)에서 쓰는 네이버 예약 URL |
| 지도 이미지 | `https://map.naver.com/p/entry/place/2036509182` (새 창) | 확인된 네이버 지도 장소 URL |
| 로고 (호버·클릭 시 Drop_Menu) | 드롭다운 메뉴 (`#home`, `#brand`, `#service`, `#collection`, `#reservation`) | 피그마 Drop_Menu 시안 적용. 글라스 효과 및 각 섹션 스무스 스크롤 이동 |
| 디자이너 카드·컬렉션 카드 | 링크 없음 | 시안에 목적지·모달 지정 없음 |
| footer "[사업자정보확인]" | 텍스트만 | 연결 URL(공정위 사업자정보 조회 등) 미제공. 확인 필요 |
| floating pill (`.diheir-floating__pill`) | `https://www.diheir.com/board/board.html?code=diheir_board3&page=1&board_cate=&type=i&utm_source=diheir_web&utm_medium=referral&utm_campaign=reservation&utm_content=floating_banner` | 예약 랜딩페이지 기본 진입 (앵커 없음) |
| floating mo (`.diheir-floating__mo`) | `https://www.diheir.com/board/board.html?code=diheir_board3&page=1&board_cate=&type=i&utm_source=diheir_web&utm_medium=referral&utm_campaign=reservation&utm_content=floating_banner` | 예약 랜딩페이지 기본 진입 (앵커 없음) |
| floating 카드: 1. 상담 고객 (`consultation`) | `https://www.diheir.com/board/board.html?code=diheir_board3&page=1&board_cate=&type=i&utm_source=diheir_web&utm_medium=referral&utm_campaign=reservation&utm_content=floating_banner&benefit=consultation#benefits` | 랜딩페이지 `#benefits` 이동 + 1번 혜택(상담 고객: 벨벳 보석함·룸스프레이) 자동 열림 |
| floating 카드: 2. 계약 고객 (`contract`) | `https://www.diheir.com/board/board.html?code=diheir_board3&page=1&board_cate=&type=i&utm_source=diheir_web&utm_medium=referral&utm_campaign=reservation&utm_content=floating_banner&benefit=contract#benefits` | 랜딩페이지 `#benefits` 이동 + 2번 혜택(계약 고객: 14K 가드링·키링) 자동 열림 |
| floating 카드: 3. 당일 계약 고객 (`sameday`) | `https://www.diheir.com/board/board.html?code=diheir_board3&page=1&board_cate=&type=i&utm_source=diheir_web&utm_medium=referral&utm_campaign=reservation&utm_content=floating_banner&benefit=sameday#benefits` | 랜딩페이지 `#benefits` 이동 + 3번 혜택(당일 계약 고객: 20%·10% 할인) 자동 열림 |
| floating 카드: 4. 제휴사 혜택 (`partner`) | `https://www.diheir.com/board/board.html?code=diheir_board3&page=1&board_cate=&type=i&utm_source=diheir_web&utm_medium=referral&utm_campaign=reservation&utm_content=floating_banner&benefit=partner#benefits` | 랜딩페이지 `#benefits` 이동 + 4번 혜택(제휴사: 와인·식사권/에스테틱/한복) 자동 열림 |

- 예약폼은 시안에 없어서 만들지 않았다. 예약 랜딩페이지 콘텐츠도 넣지 않았다.
- 외부 링크 URL은 새로 만들지 않았고 위의 확인된 값만 사용했다. 실제 접속 결과(예약 화면 표시 여부)는 이 작업 환경에서 확인하지 않았다.

## 11. 메이크샵 삽입 위치와 공통 헤더·푸터 처리 범위

- **메이크샵 적용은 하지 않았고 확인하지도 않았다.** "메이크샵 연동 완료" 상태가 아니다.
- `index.html` 안의 `[메이크샵 삽입 범위 시작]` ~ `[메이크샵 삽입 범위 끝]` 주석 사이(`<style>`, `#deheir_page` 블록, `<script>`)가 본문 코드다. `<html>`/`<head>` 메타는 쇼핑몰 공통 템플릿 것을 쓰면 된다.
- 에셋 경로는 `component/...` 상대경로다. 메이크샵에 업로드한 위치에 맞춰 경로 앞부분을 바꿔야 한다. 폰트를 다른 도메인에 올리면 CORS 설정이 필요할 수 있다(확인 필요).
- 이 페이지에는 자체 nav(로고 + Contact)와 사업자 정보 footer가 있다. 메이크샵 공통 헤더·푸터와 겹쳐 두 번 나오지 않도록 다음 중 하나를 정해야 한다(확인 필요).
  1. 공통 헤더·푸터를 숨기는 전용 레이아웃에 넣는다.
  2. 공통 헤더·푸터를 유지하고 이 페이지의 `.diheir-nav` / `.diheir-footer`를 뺀다.
- 메이크샵 전용 치환 코드는 확인하지 못해 쓰지 않았다.
- 충돌 방지: 모든 스타일은 `#deheir_page` 하위 선택자로 범위를 제한했고, 클래스는 `diheir-` 접두사를 쓴다. 전역 `a`/`button`/`body` 스타일은 없다. JS는 즉시 실행 함수 안에서 `#deheir_page` 하위만 탐색하며, 전역 변수를 만들지 않고 기존 이벤트를 덮어쓰지 않는다.

## 12. 정적 미리보기와 실제 운영 연동의 차이

- 로컬 정적 미리보기: 레이아웃, 슬라이더, 내부 앵커, 외부 링크 열기가 동작한다.
- 운영 환경에서 별도로 확인할 것: 메이크샵 템플릿 안에서의 CSS 우선순위, 공통 스크립트와의 간섭, 업로드 경로, 폰트 서빙(CORS), 이미지 용량.

## 13. 폼

- 시안에 문의·예약폼이 없어 폼을 구현하지 않았다. 개인정보를 수집하거나 전송하지 않는다.

## 14. UTM 및 플로팅 배너 랜딩페이지 연동

- 플로팅 배너 이동 링크에 사용자 지정 쿼리 및 UTM 4종(`utm_source=diheir_web&utm_medium=referral&utm_campaign=reservation&utm_content=floating_banner`)을 적용했다.
- 카드 배너의 경우 UTM 뒤에 혜택 식별 쿼리(`&benefit=consultation`, `&benefit=contract`, `&benefit=sameday`, `&benefit=partner`)와 해시(`#benefits`)를 함께 배치했다.
- 도착지인 예약 랜딩페이지(`public/diheir_landing/index.html` 및 `diheir_landing.html`)에서 `benefit` 파라미터를 읽어 해당 혜택 아코디언을 자동으로 열고 `#benefits` 영역으로 부드럽게 스크롤하도록 처리했다.
- 파라미터가 없거나 알 수 없는 값이 전달된 일반 진입 시에는 기존 기본 상태(1번 혜택 열림)가 그대로 유지된다.

## 15. 미제공 에셋 및 추가 확인 사항

- **Dream Avenue / Regular: not_found.** `component/font/DreamAvenue/font.woff2`, `font.woff`가 필요하다(7항).
- **Big Caslon 문구 4개의 폰트:** 시안(Big Caslon)과 rule.md(DreamAvenue)가 다르다. 어느 쪽을 따를지 확인 필요(7항).
- **Services_core 영상:** 사용자가 제공한 Vimeo URL로 적용했다(8항). 실제 재생은 미확인이다(17항).
- **footer:** 피그마 footer 프레임(높이 540, `overflow: clip`) 안에서 메뉴(home, Information, Privacy Policy, Terms of Use, Quality Care, contact)와 SNS(YouTube·Instagram 아이콘)는 top 760px에 있어 **잘려서 보이지 않는다.** 그래서 보이는 내용(사업자 정보, 저작권, 로고)만 구현했다. 메뉴·SNS를 노출할지, 링크 주소는 무엇인지 확인 필요.
- **시안 원문 그대로 둔 문구(오탈자일 수 있음):** heritage의 "2st Generation"(모바일)·"3st Generation", collection 문구의 띄어쓰기 등. `index.html`에 주석으로 표시했다. 수정 여부 확인 필요.
- 히어로 CTA의 최종 목적지(내부 `#reservation`인지, 별도 예약 랜딩페이지인지), 로고·floating Benefit·화살표 동작, floating의 푸터 진입 시 동작은 확인 필요.
- 히어로 원형 회전 텍스트는 피그마에서 export할 수 없는 요소라 인라인 SVG `textPath`로 다시 만들었다(정지 상태, 회전 애니메이션 없음).

## 16. 확인한 댓글과 아직 확인하지 못한 요청

- **피그마 댓글은 확인하지 못했다.** 이 작업 환경에서 댓글 API 접근이 확인되지 않았다. 반영할 댓글이 있으면 텍스트나 캡처로 전달받아야 한다.
- 따라서 댓글로만 지정된 수정 요청이 있다면 반영되지 않았다.

## 17. 실제 수행한 검수와 미확인 항목

검사 도구: 로컬 Chromium(headless) + DevTools Protocol 스크립트. `file://.../deheir_page/index.html`을 직접 열어 확인했다.

| 뷰포트 | 문서 너비 = 화면 너비(가로 넘침 없음) | 깨진 이미지 | 콘솔 오류·예외 | 실패한 요청 | 페이지 높이 |
|---|---|---|---|---|---|
| 360×844 | 통과 (360) | 0 | 0 | 0 | 6,577px |
| 390×844 | 통과 (390) | 0 | 0 | 0 | 6,957px |
| 768×1024 | 통과 (768) | 0 | 0 | 0 | 12,498px (모바일 시안 12,489px) |
| 1024×1080 | 통과 (1024) | 0 | 0 | 0 | 8,206px |
| 1440×1080 | 통과 (1440) | 0 | 0 | 0 | 11,093px |
| 1920×1080 | 통과 (1920) | 0 | 0 | 0 | 14,429px |

- 폰트 상태(`document.fonts`): Noto Serif KR `loaded`. Dream Avenue는 로컬 설치본이 없어 `error`(미적용)이고, 네트워크 요청과 콘솔 오류는 없다.
- 슬라이더(CDP 실측): 768·390에서 처음에 가운데 카드(Craftsmanship), 다음 버튼 → Jewelry As Legacy, 이전 버튼 2회 → Craftsmanship. 1440에서 마우스 드래그 200px만큼 가로 스크롤.
- Contact 클릭 시 `#reservation` 영역이 화면 최상단(top 0)으로 이동.
- 1920, 1024, 768, 390, 360 섹션별 캡처를 보고 피그마 스크린샷과 구성·배치를 비교했다. 차이는 주로 Dream Avenue 대신 쓰인 기본 serif의 글자 폭 때문이다.
- `index.html`이 참조하는 모든 `component/` 경로가 실제 파일과 일치함을 확인했다.
- React/JSX/TS/프레임워크 의존성 없음, 외부 CSS·JS 파일 없음을 확인했다.

미확인 항목:

- Services_core Vimeo 영상의 실제 재생: 검사 환경에서 외부 HTTPS 인증서를 신뢰하지 않아(`net::ERR_CERT_AUTHORITY_INVALID`) 플레이어를 불러오지 못했다. 영상 영역의 크기와 위치(16:9 유지, 패널 완전히 덮음, 페이지 가로 넘침 없음)는 1920·390에서 확인했다.
- Chromium 외 브라우저(Safari/iOS, Firefox, Samsung Internet)와 실제 기기 터치 동작
- Dream Avenue 적용 후의 최종 줄바꿈·글자 폭
- 네이버 예약·지도 링크의 실제 접속 결과
- 메이크샵 운영 환경 적용, 공통 CSS·JS와의 실제 충돌 여부
- 피그마 댓글 반영 여부(16항)
- 스크린리더 실기기 테스트
- 결과물 압축 파일(`deheir_page.zip`)은 만들지 않았다. 필요하면 `deheir_page/` 폴더를 그대로 압축하면 된다.

## 18. 플로팅 배너 및 예약 랜딩페이지 연결 검수 결과

| 항목 | 대상 | 검수 결과 |
|---|---|---|
| 기본 진입 | `.diheir-floating__pill`, `.diheir-floating__mo` | 앵커 없이 `https://www.diheir.com/board/board.html?code=diheir_board3&page=1&board_cate=&type=i&utm_source=diheir_web&utm_medium=referral&utm_campaign=reservation&utm_content=floating_banner` 동일 탭 이동 확인 |
| 카드 1 (상담 고객) | `.diheir-floating__slide[data-benefit="consultation"]` | `...&benefit=consultation#benefits` 이동 및 랜딩페이지 상담 고객 혜택 열림 확인 |
| 카드 2 (계약 고객) | `.diheir-floating__slide[data-benefit="contract"]` | `...&benefit=contract#benefits` 이동 및 랜딩페이지 계약 고객 혜택 열림 확인 |
| 카드 3 (당일 계약) | `.diheir-floating__slide[data-benefit="sameday"]` | `...&benefit=sameday#benefits` 이동 및 랜딩페이지 당일 계약 혜택 열림 확인 |
| 카드 4 (제휴사) | `.diheir-floating__slide[data-benefit="partner"]` | `...&benefit=partner#benefits` 이동 및 랜딩페이지 제휴사 혜택 열림 확인 |
| 드래그 간섭 | `.diheir-floating__card` | 좌우 드래그/스와이프 시에는 페이지 이동이 차단되고 슬라이드 전환만 동작. 클릭/탭 시에만 이동. 이전/다음 버튼 클릭 시 버블링 차단 유지 |
| 랜딩페이지 수신 | `public/diheir_landing/index.html` (및 `diheir_landing.html`) | `benefit` 쿼리 파라미터 파싱 → 해당 혜택 아코디언 자동 열림(`aria-expanded="true"`) → 레이아웃 반영 후 `#benefits` 영역으로 부드럽게 스크롤. 파라미터 없거나 오류 시 기본 혜택 화면 유지 |
