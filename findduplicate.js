// Problem Statement: Duplicate Detection in Data

// You are given an input (array or string). Your task is to identify duplicate elements and perform different operations based on the requirement.

// 1) Find First Duplicate

// Write a function that returns the first element that appears more than once in the given input.

// If no duplicate exists, return null or -1.

// Example:
// Input: [2, 5, 1, 2, 3, 5, 1]
// Output: 2
// (2 is the first element that repeats)

function hasDuplicate(arr) {
  if (!arr.length) return null;

  const checkDuplicateData = new Set();

  for (const value of arr) {
    if (checkDuplicateData.has(value)) {
      return value;
    }
    checkDuplicateData.add(value);
  }

  return null;
}

// function firstDuplicate(arr) {
//   if (!arr || arr.length === 0) return null;

//   const visited = {};

//   for (const value of arr) {
//     if (visited[value]) {
//       return value;
//     }
//     visited[value] = true;
//   }

//   return null;
// }

// console.log(hasDuplicate([2, 5, 1, 2, 3, 5, 1])); // 2
// console.log(hasDuplicate([2, 5, 1]));
