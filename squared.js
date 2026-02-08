// Problem Statement
// You are given two arrays of numbers, arr1 and arr2.
// Write a function same(arr1, arr2) that checks whether every value in arr1 has its corresponding square present in arr2, and the frequency (count) of each squared value matches.

// Rules
// Both arrays must have the same length.
// Each value in arr1 should have its square in arr2.
// The number of occurrences must be the same.
// (Example: if 2 appears twice in arr1, then 4 must appear twice in arr2.)
// The function should return:
// true → if all squared values exist with matching frequency
// false → otherwise

// Input:squared([1,2,3],[4,1,9])
// Output :true

function squared(arr1, arr2) {
  // check length
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (value of arr1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }

  for (value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }

  for (key in frequencyCounter1) {
    const squared = Number(key) * Number(key);

    if (!(squared in frequencyCounter2)) return false;
    if (frequencyCounter2[squared] !== frequencyCounter1[key]) return false;
    return true;
  }
}

console.log(squared([1,2,3],[4,1,9]));

