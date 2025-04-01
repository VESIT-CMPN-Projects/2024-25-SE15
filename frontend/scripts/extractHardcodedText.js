const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

// Directories to scan
const directories = [
  path.join(__dirname, '../src/pages'),
  path.join(__dirname, '../src/components')
];

// Store found text by component
const textByComponent = {};

// Helper to determine if string should be ignored
const shouldIgnore = (str) => {
  // Ignore very short strings, JS keywords, props, CSS classes, etc.
  const ignorePatterns = [
    /^[a-z0-9_]+$/, // camelCase variables and properties
    /^[A-Z][a-zA-Z]*$/, // Component names
    /^[\.#][a-zA-Z-]+/, // CSS selectors
    /^\s*$/, // Empty strings
    /^(https?|ftp):\/\//, // URLs
    /^\d+(\.\d+)?$/, // Numbers
  ];
  
  return str.length < 3 || 
         ignorePatterns.some(pattern => pattern.test(str));
};

// Process a single file
const processFile = (filePath) => {
  try {
    const componentName = path.basename(filePath, path.extname(filePath));
    const code = fs.readFileSync(filePath, 'utf-8');
    
    textByComponent[componentName] = [];
    
    // Skip non-JS/JSX files
    if (!filePath.endsWith('.js') && !filePath.endsWith('.jsx')) {
      return;
    }
    
    // Parse the code into an AST
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript']
    });
    
    // Traverse the AST to find string literals
    traverse(ast, {
      StringLiteral(path) {
        const { value } = path.node;
        if (!shouldIgnore(value) && !value.includes('filepath:')) {
          textByComponent[componentName].push(value);
        }
      },
      JSXText(path) {
        const value = path.node.value.trim();
        if (value && !shouldIgnore(value)) {
          textByComponent[componentName].push(value);
        }
      }
    });
    
    // Remove duplicates
    textByComponent[componentName] = [...new Set(textByComponent[componentName])];
    
    if (textByComponent[componentName].length === 0) {
      delete textByComponent[componentName];
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
};

// Process all files recursively
const processDirectory = (dir) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else if (stats.isFile()) {
      processFile(filePath);
    }
  });
};

// Main function
const extractText = () => {
  directories.forEach(processDirectory);
  
  // Output to a structured JSON file
  const outputPath = path.join(__dirname, '../hardcoded-text.json');
  fs.writeFileSync(outputPath, JSON.stringify(textByComponent, null, 2));
  
  console.log(`Extracted text has been saved to ${outputPath}`);
  console.log(`Found text in ${Object.keys(textByComponent).length} components`);
  
  // Generate translation keys structure
  const translationKeys = {};
  
  for (const [component, texts] of Object.entries(textByComponent)) {
    translationKeys[component.toLowerCase()] = {};
    
    texts.forEach((text, i) => {
      // Create a sensible key from the text
      let key = text.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '_')
        .substring(0, 30);
      
      // Ensure no duplicate keys
      if (translationKeys[component.toLowerCase()][key]) {
        key = `${key}_${i}`;
      }
      
      translationKeys[component.toLowerCase()][key] = text;
    });
  }
  
  // Output translation keys structure
  const translationKeysPath = path.join(__dirname, '../translation-keys.json');
  fs.writeFileSync(translationKeysPath, JSON.stringify(translationKeys, null, 2));
  
  console.log(`Translation keys structure has been saved to ${translationKeysPath}`);
};

extractText();
