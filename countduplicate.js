// Count Duplicates

// Write a function that counts how many times each duplicate element appears.

// Example:
// Input: [1, 2, 3, 1, 2, 1]
// Output:

// 1 → 3 times
// 2 → 2 times

function countDuplicates(arr) {
  if (!arr.length) return {};

  const frequency = new Map();

  // count all values
  for (let value of arr) {
    frequency.set(value, (frequency.get(value) || 0) + 1);
  }

  // keep only duplicates
  const duplicates = {};
  for (let [key, count] of frequency) {
    if (count > 1) {
      duplicates[key] = count;
    }
  }

  return duplicates;
}

console.log(countDuplicates([1, 2, 3, 1, 2, 1]));

