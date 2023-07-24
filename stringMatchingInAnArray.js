// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.

// Constraints:

//     1 <= words.length <= 100
//     1 <= words[i].length <= 30
//     words[i] contains only lowercase English letters.
//     All the strings of words are unique.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  let resultArray = [];

  // iterate over each element in words array
  words.forEach(element => {
    // while sitting at each element in array, iterate over each `word` inside words array
    words.forEach(word => {
      // if check to make sure the current element is not the same as the word, and that the element contains the word
      if (element != word && element.includes(word) && !resultArray.includes(word)) {
        resultArray.push(word);
      };
    });
  });
  return resultArray;
};

const test = () => {
  const result1 = stringMatching(["mass","as","hero","superhero"]);
  const expectedResult1 = ["as","hero"];
  console.log(`Test 2 expecting: ${expectedResult1}, Actual result: ${result1}`);;

  const result2 = stringMatching(["leetcode","et","code"]);
  const expectedResult2 = ["et","code"];
  console.log(`Test 2 expecting: ${expectedResult2}, Actual result: ${result2}`);

  const result3 = stringMatching(["blue","green","bu"]);
  const expectedResult3 = [];
  console.log(`Test 3 expecting: ${expectedResult3}, Actual result: ${result3}`);

  const result4 = stringMatching(["leetcoder","leetcode","od","hamlet","am"])
  const expectedResult4 = ["leetcode","od","am"]
  console.log(`Test 4 expecting: ${expectedResult4}, Actual result: ${result4}`);
}

test();
