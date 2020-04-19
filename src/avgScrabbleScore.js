let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  let scoreTotal= 0;
  for (let word of words){
    console.log("Score of " + word + "is " + scrabbleScore(word));
    scoreTotal += scrabbleScore(word);
    console.log("Total score is " + scoreTotal);
  }
  return scoreTotal/(words.length)
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
  console.log(avgScrabbleScore(['dog','cat','rock']) === 20/3)
}

module.exports = avgScrabbleScore;
