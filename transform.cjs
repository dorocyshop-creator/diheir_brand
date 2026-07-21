const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/imports/DiheirPage/index.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. BrandIdentity
content = content.replace(
  '<div id="brand" className="bg-[#f7f7ec] h-[2756px] overflow-clip relative shrink-0 w-full" data-name="brand_identity">',
  '<div id="brand" className="w-full relative shrink-0 bg-[#f7f7ec]" data-name="brand_identity"><div className="mx-auto w-[1920px] h-[2756px] overflow-clip relative">'
).replace(
  '      <FadeUp delay={0.2} className="[word-break:break-word] absolute capitalize font-serif leading-[0] left-[807px] not-italic text-[#383629] text-[0px] top-[420px] whitespace-nowrap">\n        <span className="leading-[normal] text-[220px]">h</span>\n        <span className="leading-[normal] text-[#bdbea7] text-[220px]">eritage</span>\n      </FadeUp>\n    </div>',
  '      <FadeUp delay={0.2} className="[word-break:break-word] absolute capitalize font-serif leading-[0] left-[807px] not-italic text-[#383629] text-[0px] top-[420px] whitespace-nowrap">\n        <span className="leading-[normal] text-[220px]">h</span>\n        <span className="leading-[normal] text-[#bdbea7] text-[220px]">eritage</span>\n      </FadeUp>\n    </div>\n    </div>'
);

// 2. BrandHeritage
content = content.replace(
  '<div className="bg-[#f7f7ec] h-[2339px] overflow-clip relative shrink-0 w-[1920px]" data-name="brand_heritage">',
  '<div className="w-full relative shrink-0 bg-[#f7f7ec]" data-name="brand_heritage"><div className="mx-auto w-[1920px] h-[2339px] overflow-clip relative">'
).replace(
  '        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle50} />\n      </div>\n    </div>',
  '        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgRectangle50} />\n      </div>\n    </div>\n    </div>'
);

// 3. ServicesDesigner
content = content.replace(
  '<div id="services" className="bg-[#f7f7ec] h-[2550px] relative shrink-0 w-[1920px]" data-name="Services_Designer">\n      <div className="absolute h-[1224px] left-[-1px] top-0 w-[1920px]">',
  '<div id="services" className="w-full relative shrink-0 bg-[#f7f7ec]" data-name="Services_Designer">\n      <div className="absolute h-[1224px] left-[calc(50%-50vw)] top-0 w-[100vw] overflow-hidden flex justify-center">\n         <img alt="" className="absolute inset-0 min-w-[1920px] w-full max-w-none object-cover pointer-events-none size-full" src={imgRectangle30} />\n      </div>\n      <div className="mx-auto w-[1920px] h-[2550px] relative overflow-clip">\n      <div className="absolute h-[1224px] left-[-1px] top-0 w-[1920px] hidden">'
).replace(
  '      <div className="absolute h-[2550px] left-0 top-0 w-[1920px]">\n        <Frame52 />\n      </div>\n    </div>',
  '      <div className="absolute h-[2550px] left-0 top-0 w-[1920px]">\n        <Frame52 />\n      </div>\n    </div>\n    </div>'
);

// 4. ServicesCore
// Let's just do w-[100vw] on its sticky background
content = content.replace(
  '<div className="sticky top-0 w-[1920px] overflow-hidden" style={{ height: `${vh}px`, backgroundImage: "linear-gradient(90deg, rgb(159, 159, 139) 0%, rgb(159, 159, 139) 100%), linear-gradient(90deg, rgb(247, 247, 236) 0%, rgb(247, 247, 236) 100%)" }}>',
  '<div className="sticky top-0 w-[1920px] overflow-visible" style={{ height: `${vh}px` }}>\n        <div className="absolute inset-y-0 left-[calc(50%-50vw)] w-[100vw] -z-10" style={{ backgroundImage: "linear-gradient(90deg, rgb(159, 159, 139) 0%, rgb(159, 159, 139) 100%), linear-gradient(90deg, rgb(247, 247, 236) 0%, rgb(247, 247, 236) 100%)" }} />'
);

// 5. Collection
content = content.replace(
  '<div className="h-[1200px] overflow-clip relative shrink-0 w-[1920px]" data-name="collection">\n      <div aria-hidden className="absolute inset-0 pointer-events-none">\n        <div className="absolute bg-[#383629] inset-0" />\n        <div className="absolute inset-0 overflow-hidden">\n          <img alt="" className="absolute h-[133.33%] left-[-0.02%] max-w-none top-[-12.46%] w-full" src={imgCollection} />\n        </div>\n        <div className="absolute inset-0 overflow-hidden">\n          <img alt="" className="absolute h-[120%] left-[0.02%] max-w-none top-[-7.22%] w-full" src={imgCollection1} />\n        </div>\n      </div>',
  '<div className="w-full relative shrink-0 bg-[#383629]" data-name="collection">\n      <div aria-hidden className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden">\n        <img alt="" className="absolute h-[133.33%] top-[-12.46%] min-w-[1920px] w-full max-w-none object-cover" src={imgCollection} />\n        <img alt="" className="absolute h-[120%] top-[-7.22%] min-w-[1920px] w-full max-w-none object-cover" src={imgCollection1} />\n      </div>\n      <div className="mx-auto w-[1920px] h-[1200px] relative overflow-clip">'
).replace(
  '        <span className="leading-[normal] text-[#f7f7ec] text-[20px]">ollection</span>\n      </FadeUp>\n    </div>',
  '        <span className="leading-[normal] text-[#f7f7ec] text-[20px]">ollection</span>\n      </FadeUp>\n    </div>\n    </div>'
);

// 6. Diheirspace
content = content.replace(
  '<div id="reservation" className="bg-[#383629] h-[2073px] overflow-clip relative shrink-0 w-[1920px]" data-name="diheirspace">',
  '<div id="reservation" className="w-full relative shrink-0 bg-[#383629]" data-name="diheirspace"><div className="mx-auto w-[1920px] h-[2073px] overflow-clip relative">'
).replace(
  '        <Frame53 />\n      </div>\n    </div>',
  '        <Frame53 />\n      </div>\n    </div>\n    </div>'
);

// 7. Footer
content = content.replace(
  '<div className="h-[1405px] overflow-clip relative shrink-0 w-[1920px]" data-name="footer">\n      <div aria-hidden className="absolute inset-0 pointer-events-none">\n        <div className="absolute bg-[#383629] inset-0" />\n        <FadeUp duration={1.5} y={30} className="absolute inset-0 overflow-hidden">\n          <img alt="" className="absolute opacity-12 h-[108.83%] left-[19.07%] max-w-none top-[-0.04%] w-[79.64%]" src={imgFooter} />\n        </FadeUp>\n      </div>',
  '<div className="w-full relative shrink-0 bg-[#383629]" data-name="footer">\n      <div className="mx-auto w-[1920px] h-[1405px] overflow-clip relative">\n      <div aria-hidden className="absolute inset-0 pointer-events-none">\n        <FadeUp duration={1.5} y={30} className="absolute inset-0 overflow-hidden">\n          <img alt="" className="absolute opacity-12 h-[108.83%] left-[19.07%] max-w-none top-[-0.04%] w-[79.64%]" src={imgFooter} />\n        </FadeUp>\n      </div>'
).replace(
  '      <FadeUp duration={1.0} delay={0.2} className="absolute h-[562px] left-[372px] top-[805px] w-[1548px]" data-name="Diheir_Logo_og 1">\n        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDiheirLogoOg1} />\n      </FadeUp>\n      <Frame54 />\n    </div>',
  '      <FadeUp duration={1.0} delay={0.2} className="absolute h-[562px] left-[372px] top-[805px] w-[1548px]" data-name="Diheir_Logo_og 1">\n        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDiheirLogoOg1} />\n      </FadeUp>\n      <Frame54 />\n    </div>\n    </div>'
);

fs.writeFileSync(filePath, content);
console.log('Successfully transformed index.tsx');
