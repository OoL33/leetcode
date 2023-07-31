// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

// Return the selected integer.

// Example 1:

// Input: nums = [3,2,1,4]
// Output: 2
// Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.

// Example 2:

// Input: nums = [1,2]
// Output: -1
// Explanation: Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.

// Example 3:

// Input: nums = [2,1,3]
// Output: 2
// Explanation: Since 2 is neither the maximum nor the minimum value in nums, it is the only valid answer.

// Constraints:

//     1 <= nums.length <= 100
//     1 <= nums[i] <= 100
//     All values in nums are distinct

/**
 * @param {number[]} nums
 * @return {number}
 */

var findNonMinOrMax = function (nums) {
  const getHighestNum = Math.max(...nums);
  const getLowestNum = Math.min(...nums);

  let output = -1;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] < getHighestNum && nums[i] > getLowestNum) {
      output = nums[i];
    }
  }
  return output;
};

const test = () => {
  const result1 = findNonMinOrMax([3, 2, 1, 4]);
  const expectedResult1 = 2;
  console.log(
    `Test 1 expecting: ${expectedResult1} | Actual result: ${result1}`
  );

  const result2 = findNonMinOrMax([6, 4]);
  const expectedResult2 = -1;
  console.log(
    `Test 1 expecting: ${expectedResult2} | Actual result: ${result2}`
  );
};

test();
