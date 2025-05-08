/**
 * @param {numbers[]} arr
 * @param {number} target
 * @return {number[]}
 * Brute force approach -Time complexity O(n^2)  Space complexity 0(1)
 */
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (target - arr[i] === arr[j]) {
        return [i, j];
      }
    }
  }
}
/**
 * Test cases
 */
console.log(twoSum([2, 7, 11, 15], 9)); //expecting output [0,1]
console.log(twoSum([3, 2, 4], 6)); //expecting output [1,2]
