let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  let totalScore = 0;
  for (let letter of words) {
    totalScore += scrabbleScore(letter);
  }
  totalScore = totalScore / words.length;
  return totalScore;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
  console.log(avgScrabbleScore(['class', 'word', 'scrabble', 'easy']) === 9);
  console.log(avgScrabbleScore(['clasmatocyte', 'unfrosted', 'connexity', 'disregardfulness', 'inconfusion']) === 18.6);

}

module.exports = avgScrabbleScore;
