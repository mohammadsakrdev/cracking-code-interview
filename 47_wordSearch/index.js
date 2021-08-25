// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  var res = [];
  helper(nums, res, [], 0);
  return res;
}

var helper = function (nums, res, arr, start) {
  var len = nums.length;

  res.push(Array.from(arr));

  if (start === len) return;

  for (var i = start; i < len; i++) {
    arr.push(nums[i]);
    helper(nums, res, arr, i + 1);
    arr.pop();
  }
};

module.exports = subsets;
