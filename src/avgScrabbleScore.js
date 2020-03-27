let scrabbleScore = require('./scrabbleScore');
["cat", "dog", "snake"]
/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  let scores = 0;

  for(let word of words) {
    console.log("score of " + word + " is " + scrabbleScore(word));
    scores += scrabbleScore(word);
    console.log("scores is " + scores);
  }

  return scores/(words.length);
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');

  console.log(avgScrabbleScore(['aaa', 'cat', 'dog',])===13/3);

}

module.exports = avgScrabbleScore;
