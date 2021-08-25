// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity
// https://dev.to/seanpgallivan/solution-find-first-and-last-position-of-element-in-sorted-array-2fg0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  const find = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  };
  let Tleft = find(target, nums);
  if (nums[Tleft] !== target) return [-1, -1];
  return [Tleft, find(target + 1, nums, Tleft) - 1];
}

module.exports = searchRange;
