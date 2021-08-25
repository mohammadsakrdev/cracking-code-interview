// Given an array, rotate the array to the right by k steps, where k is non-negative
// https://dev.to/urfan/leetcode-rotate-array-with-javascript-3j5h

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  var reverse = function (nums, start, end) {
    while (start < end) {
      var temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };

  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

module.exports = rotate;
