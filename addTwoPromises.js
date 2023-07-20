// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// Example 1:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

// Example 2:

// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

// Constraints:

//     promise1 and promise2 are promises that resolve with a number

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

let promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50))
let promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))

var addTwoPromises = async function(promise1, promise2) {
  let result1;
    try {result1 = await promise1}
    catch{
        (error)=>{console.log(error)}
    }

    let result2;
    try {result2 = await promise2}
        catch{(error)=>{console.log(error)}
    }
    return result1 + result2;
};

console.log('addTwoPromises:')
console.log(addTwoPromises());

const testWithAsyncAwaitSyntax =  async() => {
  
  // Test 1
  let result;
  try{
    result = await addTwoPromises(Promise.resolve(2), Promise.resolve(2));
  } catch (error){
    console.log(error)
  }
  console.log(`Test 1: result should be 4, and the actual result is ${result}`)

  // Test 2
  let result2 
  try{
    result2 = await addTwoPromises(Promise.resolve(8), Promise.resolve(10))
  } catch (error) {
    console.log(error)
  }
  console.log(`Test 2: result should be 18, and the actual result is ${result2}`)
}


console.log ("\n Running test with Async and Await Syntax")
testWithAsyncAwaitSyntax();