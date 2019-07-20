// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
  return (
    stringA
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("") ===
    stringB
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  );
};

module.exports = anagrams;

/* NOTES */

// word.replace(/[^\w]/g, "");
/*
const obj = {
    a: 1,
    b: 1,
    c: 1
};

Object.keys(obj).length;
*/

/* 
const numbers = [10, 30, 5, -90, 10000];
numbers = ["z", "c", "b", "d", "y"]
numbers.sort()
*/

/* SOLUTIONS */

// const anagrams = (stringA, stringB) => {
//     const charMapA = buildCharMap(stringA);
//     const charMapB = buildCharMap(stringB);

//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//       return false;
//     }

//     for (let char in charMapA) {
//       if (charMapA[char] !== charMapB[char]) {
//         return false;
//       }
//     }

//     return true;
//   };

//   function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
//   }
