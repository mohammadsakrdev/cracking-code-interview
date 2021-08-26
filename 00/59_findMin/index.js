// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) {
    return nums[0];
  }

  while (left <= right) {
    let leftValue = nums[left];

    let mid = Math.floor((left + right) / 2);

    let midValue = nums[mid];

    let leftOfMid = nums[mid - 1];
    let rightOfMid = nums[mid + 1];

    if (midValue > rightOfMid) {
      return rightOfMid;
    } else if (leftOfMid > midValue) {
      return midValue;
    }

    if (midValue > left) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

module.exports = findMin;
