// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element
// https://baffinlee.com/leetcode-javascript/problem/kth-largest-element-in-an-array.html

var quickSelect = function (nums, left, right, k) {
  var le = left;
  var ri = right;
  var mid = nums[right];
  while (le < ri) {
    if (nums[le++] > mid) swap(nums, --le, --ri);
  }
  swap(nums, le, right);
  var len = right - le;
  if (len === k - 1) return nums[le];
  else if (len < k - 1) return quickSelect(nums, left, le - 1, k - len - 1);
  else return quickSelect(nums, le + 1, right, k);
};

var swap = function (nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k);
};

module.exports = findKthLargest;
