// Return All Duplicates

// Write a function that returns a list of all elements that appear more than once.

// Example:
// Input: [4, 3, 2, 7, 8, 2, 3, 1]
// Output: [2, 3]

function getAllDuplicates(arr) {
  const freq = new Map();
  const duplicates = [];

  for (let value of arr) {
    let count = freq.get(value);

    if (count) {
      freq.set(value, count + 1);
    } else {
      freq.set(value, 1);
    }
    // freq.set(value, (freq.get(value) || 0) + 1);
  }

  for (let [key, count] of freq) {
    if (count > 1) duplicates.push(key);
  }

  return duplicates;
}

console.log(getAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(getAllDuplicates([4, 3, 2]));
