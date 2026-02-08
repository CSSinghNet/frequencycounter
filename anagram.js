// // Anagram Problem (Using Frequency Counter)

// // Problem Statement:
// // Write a function that checks whether two strings are anagrams of each other using the frequency counter approach.

// // Two strings are called anagrams if they contain the same characters with the same frequency, but possibly in a different order.

// // Example 1:
// // Input: "listen", "silent"
// // Output: true

// // Example 2:
// // Input: "hello", "world"
// // Output: false

// // Constraints:

// // Ignore case sensitivity (e.g., "Listen" and "silent" should be considered anagrams).

// // Spaces can be ignored if required.

// function isAnagram(str1, str2) {
//   // normalize (lowercase + remove spaces)
//   str1 = str1.toLowerCase().replace(/\s/g, "");
//   str2 = str2.toLowerCase().replace(/\s/g, "");

//   if (str1.length !== str2.length) return false;

//   const sorted1 = str1.split('').sort().join('');
//   const sorted2 = str2.split('').sort().join('');

//   return sorted1 === sorted2;
// }

// // Examples
// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world"));   // false
// console.log(isAnagram("Dormitory", "Dirty room")); // true


function isAnagram(str1, str2) {
  // helper to convert uppercase to lowercase manually
  function toLower(ch) {
    const code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(code + 32);
    }
    return ch;
  }

  // count characters manually
  function buildCount(str) {
    const count = new Array(256);
    for (let i = 0; i < 256; i++) count[i] = 0;

    for (let i = 0; i < str.length; i++) {
      let ch = str[i];

      // ignore spaces
      if (ch === ' ') continue;

      ch = toLower(ch);
      const ascii = ch.charCodeAt(0);
      count[ascii]++;
    }
    return count;
  }

  const count1 = buildCount(str1);
  const count2 = buildCount(str2);

  // compare both frequency arrays
  for (let i = 0; i < 256; i++) {
    if (count1[i] !== count2[i]) {
      return false;
    }
  }

  return true;
}

// Examples
console.log(isAnagram("listen", "silent"));        // true
console.log(isAnagram("hello", "world"));          // false
console.log(isAnagram("Dormitory", "Dirty room")); // true
