/**
 Do not return anything, modify nums in-place instead.
 */

const findNextLastPosition = (
  nums: number[],
  elementToSearch: number,
  lastPosition: number
): number => {
  while (nums[lastPosition] === elementToSearch) lastPosition--;
  return lastPosition;
};

const sortColorsHelper = (
  nums: number[],
  elementToSearch: number,
  lastPosition: number
): number => {
  lastPosition = findNextLastPosition(nums, elementToSearch, lastPosition);
  nums.map((n, i) => {
    if (i <= lastPosition) {
      if (n === elementToSearch) {
        nums[i] = nums[lastPosition];
        nums[lastPosition] = elementToSearch;
        lastPosition = findNextLastPosition(
          nums,
          elementToSearch,
          lastPosition
        );
      }
    }
  });
  return lastPosition;
};

const sortColors = (nums: number[]): void => {
  let lastPosition = nums.length - 1;
  lastPosition = sortColorsHelper(nums, 2, lastPosition);
  sortColorsHelper(nums, 1, lastPosition);
};
