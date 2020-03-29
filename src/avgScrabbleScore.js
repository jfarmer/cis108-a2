// let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
let SCRABBLE_TILE_SCORES = {
  a: 1, b: 3, c: 3, d: 2, e: 1,  f: 4,
  g: 2, h: 4, i: 1, j: 8, k: 5,  l: 1,
  m: 3, n: 1, o: 1, p: 3, q: 10, r: 1,
  s: 1, t: 1, u: 1, v: 4, w: 4,  x: 8,
  y: 4, z: 10,
};

function scrabbleScore(word) {

  let pointCount = 0;
  let letters = Object.keys(SCRABBLE_TILE_SCORES);
  let values = Object.values(SCRABBLE_TILE_SCORES);

  for (let j = 0; j <= word.length ; j++ ) {

    for (let i = 0; i <= 25; i++ ) {

      if (word.charAt(j) === letters[i]){

        pointCount += values[i];
      }
    }
  }
  // console.log(`The score of ${word} is ${pointCount}`);
  return pointCount;
}

function avgScrabbleScore(words) {

  let pointSum = 0;
  let currentWord;
  for (let j = 0; j <= words.length - 1; j++) {

    currentWord = words[j];

    let wordPoints = scrabbleScore(currentWord);
    // console.log(`This is pointSum before addition of ${currentWord} : ${pointSum}`)
    pointSum += wordPoints;
    // console.log(`This is pointSum after addition ${pointSum}`)

  }

  let pointAvg = pointSum / words.length;
// console.log (`This is pointAvg ${pointAvg} and this is words.length ${words.length}`)
  return pointAvg;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
console.log(avgScrabbleScore(['apple' , 'melon' , 'equalize']) === 14)
console.log(avgScrabbleScore(['apple' , 'melon' , 'equalize', 'melon']) === 12.25)
console.log(avgScrabbleScore(['apple' , 'melon' , 'equalize', 'apple', 'apple']) === 12)
console.log(avgScrabbleScore( ['equalize']) === 26);

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

// module.exports = avgScrabbleScore;
