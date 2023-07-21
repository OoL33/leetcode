// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// Example 3:

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

// Constraints:

//     1 <= n <= 500
//     nums.length == 2n
//     1 <= nums[i] <= 10^3

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  // Split array in half to make two new arrays
  const firstHalf = nums.splice(0, n);
  const secondHalf = nums;
  // Merge two sorted arrays
  let sortedArray = [];
  
  for (i = 0; i < n; i++) {
    sortedArray.push(firstHalf[i], secondHalf[i]);
  }
  return sortedArray
};


const test = () => {
  const result1 = shuffle([1,2,3,4,4,3,2,1], 4);
  const expectedResult1 = [1,4,2,3,3,2,4,1];
  console.log(`Test 1 expecting: ${expectedResult1}, Actual result: ${result1}`);

  const result2 = shuffle([1,1,2,2], 2);
  const expectedResult2 = [1,2,1,2];
  console.log(`Test 2 expecting: ${expectedResult2}, Actual result: ${result2}`)
}

test();