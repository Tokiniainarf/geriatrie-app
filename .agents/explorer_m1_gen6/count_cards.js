const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = 'C:\\Users\\tokin\\.gemini\\antigravity\\scratch\\geriatrie-app';

const targetFiles = [
  'flashcards.js',
  'flashcards-batch-A.js',
  'flashcards-batch-B.js',
  'flashcards-batch-C.js',
  'flashcards-memos.js',
  'flashcards-expanded.js',
  'mega-flashcards.js',
  'mega-flashcards-2.js',
  'mega-flashcards-3.js',
  'mega-flashcards-4.js',
  'mega-flashcards-5.js',
  'mega-flashcards-6.js',
  'mega-flashcards-7.js',
  'mega-flashcards-8.js',
  'mega-flashcards-9.js',
  'mega-flashcards-10.js',
  'revision-aids.js'
];

const results = {};
const globalChapters = {};

targetFiles.forEach(fileName => {
  const filePath = path.join(baseDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${fileName}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace const/let with var to allow vm.runInContext to expose them on sandbox
  content = content.replace(/(?:const|let)\s+(\w+)\s*=/g, 'var $1 =');
  
  // Create a clean sandbox
  const sandbox = {
    document: { addEventListener: () => {}, querySelector: () => null, getElementById: () => null, readyState: 'complete' },
    window: { addEventListener: () => {} },
    localStorage: { getItem: () => null, setItem: () => {} },
    setTimeout,
    globalThis: {}
  };
  vm.createContext(sandbox);
  
  try {
    vm.runInContext(content, sandbox);
  } catch (err) {
    console.error(`Error running ${fileName}:`, err.message);
  }
  
  // Find arrays
  const arrayVars = Object.keys(sandbox).filter(key => Array.isArray(sandbox[key]));
  
  results[fileName] = {
    arrays: {}
  };
  
  arrayVars.forEach(arrName => {
    const arr = sandbox[arrName];
    // Check if it's a flashcard array (contains objects with at least question and answer, or chapter)
    const isFlashcardArray = arr.length > 0 && arr.every(item => item && (item.question || item.answer || item.chapter));
    
    if (isFlashcardArray) {
      const chapterCounts = {};
      arr.forEach(fc => {
        const ch = fc.chapter || 'unknown';
        chapterCounts[ch] = (chapterCounts[ch] || 0) + 1;
        globalChapters[ch] = (globalChapters[ch] || 0) + 1;
      });
      
      results[fileName].arrays[arrName] = {
        total: arr.length,
        chapters: chapterCounts
      };
    }
  });
});

const outputData = JSON.stringify({ results, globalChapters }, null, 2);
fs.writeFileSync(path.join(__dirname, 'card_counts.json'), outputData, 'utf8');
console.log('Successfully wrote counts to card_counts.json');

