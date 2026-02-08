// 4) Find Duplicates in a String

// Write a function that finds duplicate characters in a string and returns them along with their frequency.

// Example:
// Input: "programming"
// Output:

// r → 2  
// g → 2  
// m → 2

function findDuplicateChars(str) {
  const freq = {};

  // Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Filter duplicates
  const duplicates = {};
  for (let key in freq) {
    if (freq[key] > 1) {
      duplicates[key] = freq[key];
    }
  }

  return duplicates;
}

const result = findDuplicateChars("chandrashekhar");
// const result = findDuplicateChars("programming");
// const result = findDuplicateChars("xyz");

for (let char in result) {
  console.log(`${char} → ${result[char]}`);
}
