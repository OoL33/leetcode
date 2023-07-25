// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // For each index i
  for (let i = 0; i < nums.length; i++) {
    // And for each index j
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        const sum = nums[i] + nums[j];
        let indexValues = [i, j];
        console.log(
          `[i] : ${i} | [j] : ${j} | nums[i] : ${nums[i]} | nums[j]: ${nums[j]} | total: ${sum} | target: ${target}`
        );
        if (nums[i] + nums[j] === target) {
          return indexValues;
        }
      }
    }
  }
};

const test = () => {
  const result1 = twoSum([2, 7, 11, 15], 9);
  const expectedResult1 = [0, 1];
  console.log(
    `Test 1 expecting: ${expectedResult1} | Actual result: ${result1}`
  );

  const result2 = twoSum([3, 2, 4], 6);
  const expectedResult2 = [1, 2];
  console.log(
    `Test 2 expecting: ${expectedResult2} | Actual result: ${result2}`
  );

  const result3 = twoSum([3, 3], 6);
  const expectedResult3 = [0, 1];
  console.log(
    `Test 3 expecting: ${expectedResult3} | Actual result: ${result3}`
  );
};

test();
