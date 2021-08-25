// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively

// Input: nums = [2, 0, 2, 1, 1, 0];
// Output: [0, 0, 1, 1, 2, 2];
// https://baffinlee.com/leetcode-javascript/problem/sort-colors.html

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  if (!nums || nums.length === 0) return nums;
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length && i <= right; i++) {
    if (nums[i] == '0') {
      let tmp = nums[left];
      nums[left] = 0;
      nums[i] = tmp;
      left++;
    } else if (nums[i] == '2') {
      let tmp = nums[right];
      nums[right] = 2;
      nums[i] = tmp;
      right--;
      i--;
    }
  }

  return nums;
}
module.exports = sortColors;
