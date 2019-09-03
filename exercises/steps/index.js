// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (i = 0; i < n; i++) {
//     let stair = "";
//     for (j = 0; j < n; j++) {
//       if (j <= i) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

function steps(n, row = 0, stair = "") {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  stair.length <= row ? (stair += "#") : (stair += " ");
  steps(n, row, stair);
}

console.log(steps(5));

module.exports = steps;
