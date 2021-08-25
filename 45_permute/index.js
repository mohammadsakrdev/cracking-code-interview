// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// https://leetcode.com/problems/permutations/discuss/276363/javascript-solution
//

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  let sol = [];
  if (nums.length < 1) {
    return [[]];
  } else if (nums.length == 1) {
    return [[nums[0]]];
  }
  for (let i = 0; i < nums.length; i++) {
    let numsCopy = [...nums];
    numsCopy.splice(i, 1);
    let rtnVal = permute(numsCopy);
    for (let j = 0; j < rtnVal.length; j++) {
      sol.push([nums[i], ...rtnVal[j]]);
    }
  }
  return sol;
}

module.exports = permute;
