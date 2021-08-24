const mapOfNumbers = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function getLetterCombinations(digits, previousCombinations) {
  // Initialise an array to store the possibilties for this digit
  let newPossibilities = [];

  // Loop through the previous iteration's combinations
  for (let previousCombination of previousCombinations) {
    // Loop through the possible letters for this number
    for (let possibleLetter of mapOfNumbers[digits[0]]) {
      // Add a combination of the previous set with the current letters to the array
      newPossibilities.push(previousCombination.concat(possibleLetter));
    }
  }

  // If there are more digits, run the function again, otherwise return the combinations
  return digits.length > 1
    ? getLetterCombinations(digits.slice(1), newPossibilities)
    : newPossibilities;
}

/**
 * @param {string} s
 * @return {number}
 */
function letterCombinations(digits) {
  if (!digits.length) {
    return [];
  }

  return getLetterCombinations(digits.toString(), ['']);
}

function letterCombinations_1(digits) {
  // Return early if no digits were supplied
  if (!digits.length) {
    return [];
  }

  // Initialise an array to store all possible letter combinations up to the previous digit
  let lastDigitPossibilities = [''];

  // Loop through each digit
  for (let i = 0; i < digits.length; i++) {
    // Initialise an array to store the possibilties for this digit
    let newPossibilities = [];

    // Loop through the last set of possibilities
    for (let x = 0; x < lastDigitPossibilities.length; x++) {
      // Loop through the possible letters for the current number
      for (let letter of mapOfNumbers[digits[i]]) {
        // Add the current number to each of the last set of possibilities
        newPossibilities.push(lastDigitPossibilities[x].concat(letter));
      }
    }

    lastDigitPossibilities = newPossibilities;
  }

  return lastDigitPossibilities;
}

module.exports = letterCombinations;
