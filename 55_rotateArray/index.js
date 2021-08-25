// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and
// it will automatically contact the police if two adjacent houses were broken into on the same night.

// https://dev.to/urfan/leetcode-house-robber-with-javascript-4ogn

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums == null || nums.length == 0) {
    return 0;
  }

  dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[nums.length - 1];
}

module.exports = rob;
