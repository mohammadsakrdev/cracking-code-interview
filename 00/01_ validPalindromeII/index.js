function isValidPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindromeII(s) {
  s = s.replace(/[\W_]/g, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isValidPalindrome(s, left + 1, right) ||
        isValidPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
}

module.exports = validPalindromeII;
