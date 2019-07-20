function reverseWords(str) {
  const words = str.split(" ");
  const temp = [];
  for (word of words) {
    temp.push(word.split("").reduce((rev, char) => char + rev, ""));
    debugger;
  }
  return temp.join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); //'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords("apple")); //'elppa');
console.log(reverseWords("a b c d")); //'a b c d');
console.log(reverseWords("double  spaced  words")); //'elbuod  decaps  sdrow');
