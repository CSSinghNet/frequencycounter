// Write a function isAnagram(str1, str2) that determines whether two given strings are anagrams of each other.

// Two strings are considered anagrams if:

// They contain the same characters

// Each character appears the same number of times in both strings

// The order of characters can be different

// The function should:

// Return false if the lengths of both strings are different.

// Count how many times each character appears in the first string.

// Compare those counts with the characters in the second string.

// Return true if all characters match in frequency, otherwise return false.

// Examples:

// Input: "listen", "silent"
// Output: true

// Input: "hello", "olelh"
// Output: true

// Input: "hello", "world"
// Output: false

// Expected Output:
// A boolean value:

// true → if both strings are anagrams

// false → if they are not anagrams

// Constraints:

// Strings contain only characters (no special preprocessing required).

// Case sensitivity depends on implementation (can be treated as same or different).

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq = {};

  // count characters of first string
  for (const char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // compare with second string
  for (const char of str2) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
}

// tests
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "olelh"));   // true
console.log(isAnagram("hello", "world"));   // false
