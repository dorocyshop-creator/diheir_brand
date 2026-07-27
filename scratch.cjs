const fs = require('fs');
const path = './src/app/components/diheir/DiheirPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Wrap inline fontSize clamp() with max(12px, ...)
content = content.replace(/fontSize:\s*"(clamp\([^"]+\))"/g, 'fontSize: "max(12px, $1)"');

// Wrap Tailwind text-[clamp(...)] with max(12px, ...)
content = content.replace(/text-\[(clamp\([^\]]+\))\]/g, 'text-[max(12px,$1)]');

// Wrap Tailwind text-[Xvw] with max(12px, Xvw)
content = content.replace(/text-\[([0-9.]+vw)\]/g, 'text-[max(12px,$1)]');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed fonts in DiheirPage.tsx');
