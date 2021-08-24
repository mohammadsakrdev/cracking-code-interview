// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

function twoSum(arr, target) {
  const visited = {};
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (visited[complement] !== undefined) {
      res.push(i);
      res.push(visited[complement]);
    }

    visited[num] = i;
  }

  return res;
}

module.exports = twoSum;
