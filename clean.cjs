const fs = require('fs');

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const importRegex = /^import\s+([a-zA-Z0-9_]+)\s+from\s+['"].+['"];/;
  
  const toDelete = [];
  
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(importRegex);
    if (match) {
      const varName = match[1];
      // Check if varName is used elsewhere
      // We use a regex that matches the word boundary to avoid partial matches
      const varRegex = new RegExp(`\\b${varName}\\b`, 'g');
      const matches = content.match(varRegex);
      if (matches && matches.length === 1) {
        // Only used in the import statement
        toDelete.push(i);
      }
    }
  }
  
  const newLines = lines.filter((_, i) => !toDelete.includes(i));
  if (toDelete.length > 0) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    console.log(`Cleaned ${toDelete.length} unused imports from ${filePath}`);
  } else {
    console.log(`No unused imports found in ${filePath}`);
  }
}

cleanFile('src/app/components/diheir/DiheirPage.tsx');
cleanFile('src/imports/DiheirPage/index.tsx');
