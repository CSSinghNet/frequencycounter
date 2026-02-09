# Frequency Counter Pattern

## 📌 What is the Frequency Counter Pattern?

The Frequency Counter Pattern is a problem‑solving technique where we
count how many times elements appear in a dataset (array, string, or
object) and store those counts in an object or map.

It helps optimize comparisons and avoids using nested loops.

------------------------------------------------------------------------

## ⚙️ Steps to Solve Using the Frequency Counter Pattern

1.  Identify the input (array/string/object).
2.  Create an empty object or map.
3.  Loop through the data and store the occurrence count of each
    element.
4.  Repeat the process for another input (if it's a comparison problem).
5.  Compare both frequency objects.
6.  Return the result.

------------------------------------------------------------------------

## 🧠 Example

### Problem:

Check whether two strings are anagrams.

### TypeScript Code:

``` ts
function isAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const freq: Record<string, number> = {};

  for (const char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
}
```

------------------------------------------------------------------------

## 🚀 Benefits

-   Avoids nested loops
-   Improves time complexity (O(n))
-   Clean and readable logic
-   Efficient for large datasets
-   Commonly used in coding interviews

------------------------------------------------------------------------

## 🏢 Real‑World Use Cases

### 1. Search Analytics

Track how many times users search for a keyword.

### 2. Log Analysis

Identify the most frequent system errors.

### 3. E‑commerce

Find the most purchased products.

### 4. Text Processing

Detect most frequent words (NLP tasks).

### 5. Fraud Detection

Identify repeated or suspicious transactions.

### 6. Voting / Poll Systems

Efficiently count votes.

------------------------------------------------------------------------

## ⏱️ Time Complexity

  Approach            Time Complexity
  ------------------- -----------------
  Nested Loop         O(n²)
  Frequency Counter   O(n)

------------------------------------------------------------------------

## 📌 When to Use

Use the frequency counter pattern when:

-   You need to count occurrences
-   You need to detect duplicates
-   You are solving anagram problems
-   You need to find a majority element
-   You are comparing arrays or strings

------------------------------------------------------------------------

## 🔑 Interview Trigger Keywords

-   Count occurrences
-   Duplicates
-   Anagram
-   Frequency comparison
-   Majority element
-   First non‑repeating element
-   Same elements with transformation
