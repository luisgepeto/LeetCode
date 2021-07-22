const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void => {
  let i = m - 1;
  let j = n - 1;
  for (let outIndex = m + n - 1; outIndex >= 0; outIndex--) {
    let firstElement = nums1[i] ?? Number.MIN_SAFE_INTEGER;
    let secondElement = nums2[j] ?? Number.MIN_SAFE_INTEGER;
    if (firstElement < secondElement) {
      nums1[outIndex] = secondElement;
      j--;
    } else {
      nums1[outIndex] = firstElement;
      i--;
    }
    if (j < 0) break;
  }
};

const nums1 = [1];
merge(nums1, 1, [], 0);
console.log(nums1);
