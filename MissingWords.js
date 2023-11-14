fs = require('fs');

fs.readFile('words.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
  
    // Split the content into an array of words
    const wordsArray = data.split(/\s+/);
  
    // Get the first and last words
    const firstWord = wordsArray[0];
    const lastWord = wordsArray[wordsArray.length - 1];
  
    // Display the result
    console.log('First word:', firstWord);
    console.log('Last word:', lastWord);
  });