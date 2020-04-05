let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  let totalScore = 0;

  for (word of words) {
    totalScore += scrabbleScore(word);
  }

  if (totalScore <= 0) {
    return "No score";
  }
  else {
    return totalScore/words.length;
  }
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
  console.log(avgScrabbleScore(['cat','dog','ant','den']) === 4.25);
  console.log(avgScrabbleScore(['cat']) === 5)
  console.log(avgScrabbleScore(['this','is','hard','to','check']) === 7);
  console.log(avgScrabbleScore([]) === "No Score");
}

module.exports = avgScrabbleScore;
