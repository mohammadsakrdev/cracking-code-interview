// Given two strings s and p, return an array of all the start indices of p's anagrams in s.
// You may return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  // Sliding Window Technique
  let hashMap = new Map();
  for (let i = 0; i < p.length; i++) {
    if (hashMap.has(p[i])) {
      hashMap.set(p[i], hashMap.get(p[i]) + 1);
    } else {
      hashMap.set(p[i], 1);
    }
  }

  let res = new Array();
  let start = 0,
    end = 0;
  while (end < s.length) {
    // if hashMap of s[end] is greater than 0, subtract 1 from it and increase end
    if (hashMap.get(s[end]) > 0) {
      hashMap.set(s[end], hashMap.get(s[end]) - 1);
      end++;
      if (end - start == p.length) {
        res.push(start);
      }
    } else if (start == end) {
      start++;
      end++;
    } else {
      hashMap.set(s[start], hashMap.get(s[start]) + 1);
      start++;
    }
  }
  return res;
}

module.exports = findAnagrams;
