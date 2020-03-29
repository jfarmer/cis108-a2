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
  let fileWords = fs.readFileSync(fileName, 'utf-8');
  let splittedFileWords = fileWords.split('\r\n');

  let answer = avgScrabbleScore(splittedFileWords);
  // console.log(splittedFileWords)
  return answer;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');
  console.log(avgScrabbleScoreFromFile('./sample-words.txt'));
  console.log(avgScrabbleScoreFromFile('./words.txt') === 14);
  console.log(avgScrabbleScoreFromFile('./wordsVol2.txt') === 12);
  console.log(avgScrabbleScoreFromFile('./wordsVol3.txt') === 12.25);

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScoreFromFile;
