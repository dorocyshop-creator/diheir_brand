const fs = require('fs');
const path = require('path');

const filesToRemove = [
  '0fd786dd9ccc53298c1e4563dda47d3e0fe76ff5',
  '05f82a08005a73ec12adaac9024fdaa2a8561a53',
  '6da6efef1bd105a442f258fa1c69a58a1c0e3b9e',
  '7b4847eb3b70aa6c950d8c0a99d5e9d65020736e',
  '7f861cbe047e3416f9ef1ce171b951d3673257a6',
  '8d5f1fbbe62a4f0dad74eb1cda60623ed43b461f',
  '48c1a41ecbf53b79a81ec159489fccd6a950109b',
  '60d3b967594c3f9b4e5cb10e82c78e8eaef102cc',
  '88ea27b2777c1421cad2903ae4bc26702d861192',
  '1737e05b9e3e913f53d06449d2d1e12005c3a99b',
  '0196438ee351bad6e621bc694c3c4fe6ef047f32',
  '7116551fc77e8e74ffac985596b8727be0d14354',
  '9340202c3cd21d9164e557370a5ae877f0a49e6e',
  'd5c1d2100b9a6dcfa8bf3f0a60b5fe5cfd4d41a9',
  'd228ad0703d949dc5b2bbdd884d5d247cf9c0046',
  'd607e82960f594901d1144ba4728728d07dbd59a',
  'e5e6f92efb68cbcb68654f09bb6a678e2d261c95'
];

const targets = [
  'src/app/components/diheir/DiheirPage.tsx',
  'src/imports/DiheirPage/index.tsx'
];

targets.forEach(target => {
  let content = fs.readFileSync(target, 'utf8');
  let lines = content.split('\n');
  const varsToRemove = new Set();
  
  // Find which variables are assigned to these images
  for (let i = 0; i < lines.length; i++) {
    for (const file of filesToRemove) {
      if (lines[i].includes(file) && lines[i].startsWith('import')) {
        const match = lines[i].match(/import\s+([a-zA-Z0-9_]+)\s+from/);
        if (match) {
          varsToRemove.add(match[1]);
        }
      }
    }
  }

  // Remove the imports and any JSX that uses these variables
  const newLines = [];
  for (let i = 0; i < lines.length; i++) {
    let shouldKeep = true;
    for (const v of varsToRemove) {
      if (lines[i].includes(v)) {
        shouldKeep = false;
        break;
      }
    }
    if (shouldKeep) {
      newLines.push(lines[i]);
    }
  }

  fs.writeFileSync(target, newLines.join('\n'), 'utf8');
  console.log(`Cleaned ${lines.length - newLines.length} lines from ${target}`);
});
