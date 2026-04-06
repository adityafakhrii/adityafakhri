const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function generateHash(str) {
  return "k_" + crypto.createHash('md5').update(str).digest('hex').substr(0, 8);
}

const dir = 'd:/Projects/adityafakhri/app';
const translationsPath = 'd:/Projects/adityafakhri/lib/translations.ts';

let newIdStrings = {};
let newEnStrings = {};

// We need a robust regex to find: t('language') === 'id' ? "id string" : "en string"
// Also for: t('language') === 'id' ? 'id string' : 'en string'
// And accounting for multi-lines

function processFile(filePath) {
  if (fs.statSync(filePath).isDirectory()) {
    const files = fs.readdirSync(filePath);
    files.forEach(f => processFile(path.join(filePath, f)));
    return;
  }
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  if (filePath === translationsPath) return;

  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Regex strategy: match t('language') === 'id'\s*\?\s*(['"`])(.*?)\1\s*:\s*(['"`])(.*?)\3
  // Wait, JSX might contain nested tags, but string literals won't have elements inside them.
  // We'll process both single/double quotes, and backticks.
  // Using \s* to handle spacing and newlines. [\s\S]*? for non-greedy multiline string matching.
  
  const regex = /t\('language'\)\s*===\s*'id'\s*\?\s*(["'`])([\s\S]*?)\1\s*:\s*(["'`])([\s\S]*?)\3/g;

  content = content.replace(regex, (match, q1, idStr, q2, enStr) => {
    // Generate a unique key based on the english string
    const key = generateHash(enStr);
    newIdStrings[key] = idStr;
    newEnStrings[key] = enStr;
    
    // Return the replaced code
    return `t('${key}')`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated: ' + filePath);
  }
}

// Start processing
console.log('Scanning files...');
processFile(dir);

// Now read translations.ts and add the new strings
const transContent = fs.readFileSync(translationsPath, 'utf-8');

let idEntries = Object.keys(newIdStrings).map(k => `    ${k}: ${JSON.stringify(newIdStrings[k])},`).join('\n');
let enEntries = Object.keys(newEnStrings).map(k => `    ${k}: ${JSON.stringify(newEnStrings[k])},`).join('\n');

if (Object.keys(newIdStrings).length > 0) {
  console.log(`Found ${Object.keys(newIdStrings).length} strings to replace.`);
  
  // Quick and dirty insertion
  // We know translations.ts has "id: {" and "en: {"
  let newTransContent = transContent.replace(/id:\s*\{/, "id: {\n" + idEntries);
  newTransContent = newTransContent.replace(/en:\s*\{/, "en: {\n" + enEntries);
  
  fs.writeFileSync(translationsPath, newTransContent, 'utf-8');
  console.log('Updated translations.ts');
} else {
  console.log('No matches found.');
}
