// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack
// haystack = "hello", needle = "ll"
// Time complexity : O(n*m). Space complexity : O(1).
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (!needle.length) return 0;
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (i + j === haystack.length) return -1;
      if (haystack[i + j] !== needle[j]) break;
      if (j === needle.length - 1) return i;
    }
  }
  return -1;
}

module.exports = strStr;
