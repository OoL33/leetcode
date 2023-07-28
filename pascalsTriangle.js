// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

//     1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */ 

var generate = function(numRows) {
  let output = [];

  for (i = 0; i < numRows; i++) {
    let rowArray = [];
    
    if (i === 0) {
      output.push([1]);
      continue;
    }
    if (i === 1) {
      output.push([1, 1]);
      continue;
    }

    for (j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) {
        rowArray.push(1);
        continue;
      }
      const firstNum = output[i-1][j-1];
      const secondNum = output[i-1][j];
      const currentNum = firstNum + secondNum;
      rowArray.push(currentNum);
    };
    output.push(rowArray);
  }
  return output;
};

const test = () => {
  const result1 = generate(5);
  const expectedResult1 = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
  console.log(`Test 1 expecting: ${expectedResult1} | Actual result: ${result1}`);

  const result2 = generate(1);
  const expectedResult2 = [[1]];
  console.log(`Test 2 expecting: ${expectedResult2} | Actual result: ${result2}`);
}

test();
