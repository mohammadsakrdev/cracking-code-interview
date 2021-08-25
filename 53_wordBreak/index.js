// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one
// or more dictionary words
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  var len = wordDict.length;
  var dp = Array(len);
  var map = {};
  for (var i = 0; i < len; i++) {
    map[wordDict[i]] = true;
  }
  return find(s, map, dp, 0);
}

var find = function (s, map, dp, index) {
  if (dp[index] !== undefined) return dp[index];

  var str = '';
  var res = false;
  var len = s.length;

  if (index === len) return true;

  for (var i = index; i < len; i++) {
    str = s.substring(index, i + 1);
    if (map[str] && find(s, map, dp, i + 1)) {
      res = true;
      break;
    }
  }

  dp[index] = res;
  return res;
};

module.exports = wordBreak;
