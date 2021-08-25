/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  nums.sort();
  for (var i = 0; i < nums.length; i += 2) {
    if (nums[i] != nums[i + 1]) {
      return nums[i];
    }
  }
}

module.exports = singleNumber;
