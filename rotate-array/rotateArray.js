/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything,modify nums in-place instead
 */

var rotateArray = (nums, k) => {
  let newK = k % nums.length;
  let removedItem = nums.splice(nums.length - newK, newK);
  nums.splice(0, 0, ...removedItem);
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2));
