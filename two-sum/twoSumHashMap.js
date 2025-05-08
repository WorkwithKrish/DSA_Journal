/**
 * @param {numbers[]} arr
 * @param {number} target
 * @return {number[]}
 * HashMap approach
 */
function twoSum(arr, target) {
  const arrMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let comp = target - arr[i];
    if (arrMap.has(comp)) {
      return [i, arrMap.get(comp)];
    }
    arrMap.set(arr[i], i);
  }
}
/**
 * Test cases
 */
console.log(twoSum([2, 7, 11, 15], 9)); //expecting output [0,1]
console.log(twoSum([3, 2, 4], 6)); //expecting output [1,2]
