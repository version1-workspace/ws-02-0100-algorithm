export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const totalLength = nums1.length + nums2.length;
  const halfLength = Math.floor((totalLength + 1) / 2);
  let left = 0;
  let right = nums1.length;

  while (left <= right) {
    const partition1 = Math.floor((left + right) / 2);
    const partition2 = halfLength - partition1;

    const maxLeft1 =
      partition1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partition1 - 1];
    const minRight1 =
      partition1 === nums1.length ? Number.POSITIVE_INFINITY : nums1[partition1];
    const maxLeft2 =
      partition2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partition2 - 1];
    const minRight2 =
      partition2 === nums2.length ? Number.POSITIVE_INFINITY : nums2[partition2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if (totalLength % 2 === 1) {
        return Math.max(maxLeft1, maxLeft2);
      }

      return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
    }

    if (maxLeft1 > minRight2) {
      right = partition1 - 1;
    } else {
      left = partition1 + 1;
    }
  }

  return 0;
}
