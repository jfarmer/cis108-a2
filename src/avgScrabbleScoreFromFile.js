let fs = require('fs');
let avgScrabbleScore = require('./avgScrabbleScore');

/**
 * Returns the average scrabble score of all the words the
 * given text file.
 *
 * Use fs.readFileSync to read the contents.
 *
 * Create some sample files yourself. We also supplied
 * sample-words.txt.
 */
function avgScrabbleScoreFromFile(fileName) {
  // This is your job. :)
  let text = fs.readFileSync(`${fileName}`, 'utf-8');
  let refinedText = '';
  for (let element of text) {
    if(element !== '\n' && element !== '\r') {
      refinedText += element;
    }
  }
  return avgScrabbleScore(refinedText);
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');
  console.log('The avg of the test file is:', avgScrabbleScoreFromFile('test.txt'));
  console.log('The avg of the sample-words file is:', avgScrabbleScoreFromFile('sample-words.txt'))
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScoreFromFile;
