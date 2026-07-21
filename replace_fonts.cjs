const fs = require('fs');
const path = 'src/imports/DiheirPage/index.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace Dream_Avenue
content = content.replace(/font-\['Dream_Avenue:Regular',sans-serif\]/g, 'font-serif');
content = content.replace(/font-\['Dream_Avenue:Regular',_'Big_Caslon',_serif\]/g, 'font-serif');

// Replace Pretendard
content = content.replace(/font-\['Pretendard:Light',sans-serif\]/g, 'font-sans font-light');
content = content.replace(/font-\['Pretendard:Regular',sans-serif\]/g, 'font-sans');
content = content.replace(/font-\['Pretendard',sans-serif\]/g, 'font-sans');

fs.writeFileSync(path, content, 'utf8');
console.log('Replaced successfully');
