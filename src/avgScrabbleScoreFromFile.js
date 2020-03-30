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
  let words = fs.readFileSync(fileName, 'utf-8').split("\n");
  let avg = avgScrabbleScore(words);
  let score = avg.toFixed(2);
  return score;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');
  console.log(avgScrabbleScoreFromFile('./sample-words.txt') == 15.94);
}

module.exports = avgScrabbleScoreFromFile;
