// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time

// Input: nums = [100, 4, 200, 1, 3, 2];
// Output: 4;
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4
/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  var map = {};
  var max = 0;
  var start = 0;
  var end = 0;
  var num = 0;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    num = nums[i];
    if (map[num]) continue;
    start = map[num - 1] ? map[num - 1].start : num;
    end = map[num + 1] ? map[num + 1].end : num;
    map[num] = { start: num, end: num };
    map[start].end = end;
    map[end].start = start;
    max = Math.max(end - start + 1, max);
  }
  return max;
}
module.exports = longestConsecutive;
