/**
 * @param {string} s
 * @return {number}
 */
function longestCommonPrefix(strs) {
  // Return early on empty input
  if (!strs.length) return '';

  // Loop through the letters of the first word
  for (let i = 0; i <= strs[0].length; i++) {
    // Check if this character is present in the same position of every string
    if (!strs.every((string) => string[i] === strs[0][i])) {
      // If not, return the string up to and including the previous character
      return strs[0].slice(0, i);
    }
  }

  return strs[0];
}

var longestCommonPrefix_2 = function (strs) {
  let prefix = '';
  if (strs === null || strs.length === 0) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]; // loop through all characters of the very first string.

    for (let j = 1; j < strs.length; j++) {
      // loop through all other strings in the array
      if (strs[j][i] !== char) return prefix;
    }
    prefix = prefix + char;
  }

  return prefix;
};

module.exports = longestCommonPrefix;
