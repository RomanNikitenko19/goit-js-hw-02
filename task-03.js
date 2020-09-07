const findLongestWord = function (string) {
  let arrayWord = string.split(' ');
  let longestWord = '';
  // console.log(arrayWord);
  // let longesWord = arrayWord[0];
  // let wordLength = arrayWord[0].length
  // for (let i = 1; i < arrayWord.length; i++) {
  //   // console.log(arrayWord[i]);
  //   // console.log(arrayWord[i].length);
  //   if (wordLength < arrayWord[i].length) {
  //     wordLength = arrayWord[i].length
  //     // console.log(wordLength);
  //     longesWord = arrayWord[i];
  //     // console.log(longesWord);
  //   }
  // }
  // return longesWord;



  for (let word of arrayWord) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }
  return longestWord
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'