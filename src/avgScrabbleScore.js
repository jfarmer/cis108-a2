let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  let totalScore = 0;
  let wordScore = 0;
  let avg;

  for (let i=0;i<words.length;i++) {
    wordScore = scrabbleScore(words[i]);
    totalScore = totalScore + wordScore;
  }
  avg = totalScore/words.length;
  return avg;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
  console.log(avgScrabbleScore(['cat','dog','ant','den']) === 4.25);
  console.log(avgScrabbleScore(['cat']) === 5)
  console.log(avgScrabbleScore(['this','is','hard','to','check']) === 7);
}

module.exports = avgScrabbleScore;
