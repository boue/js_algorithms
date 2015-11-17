function findLongestWord(str) {
  var wordsArr = str.split(' ');
  var longest = 0;
  for (var i = 0; i < wordsArr.length; i++){
    if (wordsArr[i].length > longest) {
      longest = wordsArr[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");