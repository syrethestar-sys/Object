/* ============================================================
   LESSON 6 — LOOPS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: for / while, % , Math.floor, strings, if. NO arrays.
   Each function RETURNS its answer (a number, string, or boolean).

   Run:  node 6-loops.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */
let exerciseNumSix = 1;

function logTask() {
  console.log("==" + "Дасгал: " + exerciseNumSix);
  exerciseNumSix++;
}
logTask();
// ----- 1. Sum to n -----
// Write `sumTo(n)` that RETURNS 1 + 2 + ... + n.
// your code here
function sumTo(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    count += i;
  }
  return count;
}
console.log(sumTo(5));
console.log(sumTo(1));
console.log(sumTo(10));
// TEST 1:  sumTo(5)    ->  15
// TEST 2:  sumTo(1)    ->  1
// TEST 3:  sumTo(10)   ->  55
logTask();
// ----- 2. Count multiples of 4 -----
// Write `countFours(max)` that RETURNS how many numbers 1..max divide by 4.
// your code here
function countFours(max) {
  let count = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 4 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countFours(20));
console.log(countFours(7));
console.log(countFours(3));
// TEST 1:  countFours(20)  ->  5
// TEST 2:  countFours(7)   ->  1
// TEST 3:  countFours(3)   ->  0
logTask();
// ----- 3. Factorial -----
// Write `factorial(n)` that RETURNS 1 * 2 * ... * n.
// your code here
function factorial(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    count *= i;
  }
  return count;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));
// TEST 1:  factorial(5)  ->  120
// TEST 2:  factorial(3)  ->  6
// TEST 3:  factorial(1)  ->  1
logTask();
// ----- 4. Power without ** -----
// Write `power(base, exp)` that RETURNS base multiplied by itself exp times,
// using a loop. (power(2,3) = 8.) exp is 0 or more; exp 0 -> 1.
// your code here
function power(base, exp) {
  let sum = 1;
  for (let i = 0; i < exp; i++) {
    sum *= base;
  }
  return sum;
}
console.log(power(2, 3));
console.log(power(5, 2));
console.log(power(7, 0));
// TEST 1:  power(2, 3)   ->  8
// TEST 2:  power(5, 2)   ->  25
// TEST 3:  power(7, 0)   ->  1
logTask();
// ----- 5. Count the digits -----
// Write `digitCount(n)` (n >= 0) that RETURNS how many digits n has,
// using Math.floor(n / 10) in a loop.
// your code here
function digitCount(n) {
  let count = 0;
  if (n === 0) return 1;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}
console.log(digitCount(7384));
console.log(digitCount(50));
console.log(digitCount(0));
// TEST 1:  digitCount(7384)  ->  4
// TEST 2:  digitCount(50)    ->  2
// TEST 3:  digitCount(0)     ->  1
logTask();
// ----- 6. Sum of digits -----
// Write `digitSum(n)` that RETURNS the sum of n's digits.
// your code here
function digitSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(digitSum(1234));
console.log(digitSum(999));
console.log(digitSum(5));
// TEST 1:  digitSum(1234)  ->  10
// TEST 2:  digitSum(999)   ->  27
// TEST 3:  digitSum(5)     ->  5
logTask();
// ----- 7. Count a letter -----
// Write `countLetter(text, letter)` that RETURNS how many times letter
// appears in text.
// your code here
function countLetter(text, letter) {
  let count = 0;
  for (let i = 0; i <= text.length; i++) {
    if (text[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(countLetter("banana", "a"));
console.log(countLetter("hello", "l"));
console.log(countLetter("dog", "z"));
// TEST 1:  countLetter("banana", "a")  ->  3
// TEST 2:  countLetter("hello", "l")   ->  2
// TEST 3:  countLetter("dog", "z")     ->  0
logTask();
// ----- 8. Reverse a string -----
// Write `reverse(text)` that RETURNS text backwards, building it in a loop.
// your code here
function reverse(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i];
  }
  return reversed;
}
console.log(reverse("code"));
console.log(reverse("abc"));
console.log(reverse("x"));
// TEST 1:  reverse("code")  ->  "edoc"
// TEST 2:  reverse("abc")   ->  "cba"
// TEST 3:  reverse("x")     ->  "x"
logTask();
// ----- 9. Count vowels -----
// Write `countVowels(text)` that RETURNS how many vowels (a,e,i,o,u) are in text.
// your code here
function countVowels(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if ("aeiou".includes(text[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("javascript"));
console.log(countVowels("aeaaoiouu"));
console.log(countVowels("xyz"));
// TEST 1:  countVowels("javascript")  ->  3
// TEST 2:  countVowels("aeiou")       ->  5
// TEST 3:  countVowels("xyz")         ->  0
logTask();
// ----- 10. Is it prime? -----
// Write `isPrime(n)` (n >= 2) that RETURNS true when n has no divisor
// between 2 and n-1.
// your code here
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(13));
console.log(isPrime(15));
console.log(isPrime(2));
// TEST 1:  isPrime(13)  ->  true
// TEST 2:  isPrime(15)  ->  false
// TEST 3:  isPrime(2)   ->  true
logTask();
// ----- 11. Steps to zero -----
// Write `stepsToZero(n)`. While n > 0: if even, halve it; if odd, subtract 1.
// RETURN the number of steps to reach 0.
// your code here
function stepsToZero(n) {
  let count = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n - 1;
    }
    count++;
  }

  return count;
}
console.log(stepsToZero(14));
console.log(stepsToZero(8));
console.log(stepsToZero(1));

// TEST 1:  stepsToZero(14)  ->  6
// TEST 2:  stepsToZero(8)   ->  4
// TEST 3:  stepsToZero(1)   ->  1
logTask();
// ----- 12. Number palindrome -----
// Write `isNumPalindrome(n)` (n >= 0) that RETURNS true when n reads the same
// forwards and backwards. Build the reverse with a loop, then compare.
// your code here
function isNumPalindrome(n) {
  let palindrome = "";
  let str = String(n);
  for (let i = str.length - 1; i >= 0; i--) {
    palindrome += str[i];
  }
  if (palindrome === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumPalindrome(121));
console.log(isNumPalindrome(123));
console.log(isNumPalindrome(7));
// TEST 1:  isNumPalindrome(121)  ->  true
// TEST 2:  isNumPalindrome(123)  ->  false
// TEST 3:  isNumPalindrome(7)    ->  true
