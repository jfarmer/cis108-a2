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
  let score = 0;
  let words = fs.readFileSync(fileName, 'utf-8');
  words = words.split('\n');
  score += avgScrabbleScore(words);
  return score
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');
  console.log(avgScrabbleScoreFromFile("./sample-words.txt"))
  console.log(avgScrabbleScoreFromFile("./more-words.txt"))
}

module.exports = avgScrabbleScoreFromFile;
