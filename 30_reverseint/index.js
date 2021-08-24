// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reverse =
    parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);

  if (reverse < Math.pow(2, 31) * -1 || reverse > Math.pow(2, 31) - 1) return 0;

  return reverse;
}

module.exports = reverseInt;
