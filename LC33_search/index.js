function findMinIdx(arr) {
  let left = 0;
  let right = arr.length - 1;

  if (arr.length === 1 || arr[left] < arr[right]) {
    return 0;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid - 1]) {
      return mid;
    }

    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }

    if (arr[mid] < arr[left]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

function binarySearch(nums, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function search(nums, target) {
  const midIdx = findMinIdx(nums);

  const left = binarySearch(nums, target, 0, midIdx - 1);
  const right = binarySearch(nums, target, midIdx, nums.length - 1);

  return Math.max(left, right);
}

module.exports = search;
