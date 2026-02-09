# Frequency Counter Pattern

## 📌 What is Frequency Counter Pattern?

Frequency Counter Pattern ek problem-solving technique hai jisme hum
data (array/string/object) ke elements ki **occurrence count** store
karte hain --- usually object ya map me.

Isse comparisons fast ho jate hain aur nested loops avoid ho jate hain.

------------------------------------------------------------------------

## ⚙️ Steps to Solve Using Frequency Counter

1.  Input identify karo (array/string).
2.  Ek empty object/map create karo.
3.  Loop chala kar har element ka count store karo.
4.  Dusre input ke liye bhi same process repeat karo (agar comparison
    problem ho).
5.  Dono frequency objects compare karo.
6.  Result return karo.

------------------------------------------------------------------------

## 🧠 Example

### Problem:

Check karo do strings anagram hain ya nahi.

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

-   Nested loops avoid hote hain
-   Time complexity improve hoti hai (O(n))
-   Clean aur readable logic
-   Large datasets par efficient
-   Interview me commonly use hota hai

------------------------------------------------------------------------

## 🏢 Real-world Use Cases

### 1. Search Analytics

User ne kitni baar kaunsa keyword search kiya.

### 2. Log Analysis

System me kaunsi error sabse zyada aa rahi hai.

### 3. E-commerce

Kaunsa product sabse zyada purchase ho raha hai.

### 4. Text Processing

Most frequent words detect karna (NLP).

### 5. Fraud Detection

Repeated transactions detect karna.

### 6. Voting / Poll Systems

Votes count karna efficiently.

------------------------------------------------------------------------

## ⏱️ Time Complexity

  Approach            Time Complexity
  ------------------- -----------------
  Nested Loop         O(n²)
  Frequency Counter   O(n)

------------------------------------------------------------------------

## 📌 When to Use

Use frequency counter jab:

-   occurrences count karni ho
-   duplicates detect karne ho
-   anagram problems ho
-   majority element find karna ho
-   comparison between arrays/strings ho

------------------------------------------------------------------------

## 🔑 Trigger Keywords (Interview)

-   count occurrences
-   duplicates
-   anagram
-   frequency compare
-   majority element
-   first non-repeating element
-   same elements with transformation
