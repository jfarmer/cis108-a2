let scrabbleScore = require('./scrabbleScore');
console.log(scrabbleScore)

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  let count = 0;
  for (let word of words) {
    count = count + scrabbleScore(word)
  }

  avgScore = count / words.length
  return avgScore



}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
  console.log(avgScrabbleScore(['aaa','aaa','aaa']) === 3);
  console.log(avgScrabbleScore(['aaa','qqq','ccc']) === 14);

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScore;
