// https://leetcode.com/problems/backspace-string-compare/

function buildString(str) {
  const res = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '#') {
      res.push(str[i]);
    } else {
      res.pop();
    }
  }

  return res.join('');
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  return buildString(s) === buildString(t);
}

module.exports = backspaceCompare;
