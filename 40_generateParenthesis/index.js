// Time Complexity: O((2 * N)!/(N! * N!) reflecting the 2N choose N possible arrangements of parentheses
// Space Complexity: O(N) for the recursion stack and res
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  let ans = [],
    m = 2 * n;

  const dfs = (pos, open, seq) => {
    if (pos === m) {
      let res = new Array(m);
      for (let i = 0; i < m; i++) res[i] = seq & (1 << i) ? '(' : ')';
      ans.push(res.join(''));
      return;
    }
    if (open) dfs(pos + 1, open - 1, seq);
    if (m - pos > open) dfs(pos + 1, open + 1, seq | (1 << pos));
  };

  dfs(0, 0, 0);
  return ans;
}

module.exports = generateParenthesis;
