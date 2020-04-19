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
  let wordsArray = fs.readFileSync(`../src/${fileName}`, 'utf-8').split('\n'); //newline
  console.log(wordsArray);
  let avgScore= avgScrabbleScore(wordsArray);
  return avgScore;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');

  console.log(avgScrabbleScoreFromFile('sample-words.txt'));
}

module.exports = avgScrabbleScoreFromFile;
