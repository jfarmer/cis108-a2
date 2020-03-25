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
  words = fs.readFileSync(`./${fileName}`, 'utf8')
  words = words.slice(0,words.length - 1).split('\n')
  average = avgScrabbleScore(words)
  return average

}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');
  console.log(avgScrabbleScoreFromFile('moreSample.txt') === 14);
  console.log(avgScrabbleScoreFromFile('sample-words.txt'));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScoreFromFile;
