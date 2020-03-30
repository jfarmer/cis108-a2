let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  // This is your job. :)
  let sum = 0;
  let totalChar = 0;
  for (let i = 0; i < words.length; i++) {
    sum += scrabbleScore(words[i]);
    totalChar += words[i].length;
  }
  return sum / totalChar;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
  console.log(avgScrabbleScore(['AaA', 'trEE', 'ICE']) === (12/10));
  console.log(avgScrabbleScore(['YAY']) === 3);
  console.log(avgScrabbleScore(['stay', '', 'hey']) === (16/7));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScore;
