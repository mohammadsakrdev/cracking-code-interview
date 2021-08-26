function mergeSortedArrays(nums1, nums2) {
  const result = [];

  // check input
  if (!nums1.length) return nums2;
  if (!nums2.length) return nums1;

  let nums1Item = nums1[0];
  let nums2Item = nums2[0];
  let i = 1;
  let j = 1;

  while (nums1Item || nums2Item) {
    if (!nums2Item || nums1Item < nums2Item) {
      result.push(nums1Item);
      nums1Item = nums1[i];
      i++;
    } else {
      result.push(nums2Item);
      nums2Item = nums2[j];
      j++;
    }
  }

  return result;
}

module.exports = mergeSortedArrays;
