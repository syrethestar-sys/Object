/* ============================================================
   LESSON 7 — FUNCTIONS: FRESH EXERCISES
   ------------------------------------------------------------
   Focus: parameters, return, default values, and CALLING one
   function from inside another (composition). Tools: everything
   from lessons 1-6. NO arrays.

   Run:  node 7-functions.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Add three -----
// Write `addThree(a, b, c)` that RETURNS the sum of all three.
// your code here

// console.log(addThree(1, 2, 3));
// TEST 1:  addThree(1, 2, 3)   ->  6
// TEST 2:  addThree(10, 0, 5)  ->  15
// TEST 3:  addThree(-1, 1, 0)  ->  0

// ----- 2. Greet with default -----
// Write `greet(name)` that RETURNS "Hello, " + name. If name is not given,
// default it to "friend". (Use a default parameter.)
// your code here

// console.log(greet("Sam"));
// TEST 1:  greet("Sam")  ->  "Hello, Sam"
// TEST 2:  greet()       ->  "Hello, friend"
// TEST 3:  greet("Ada")  ->  "Hello, Ada"

// ----- 3. Max of two -----
// Write `maxTwo(a, b)` that RETURNS the larger of the two.
// your code here

// console.log(maxTwo(3, 9));
// TEST 1:  maxTwo(3, 9)    ->  9
// TEST 2:  maxTwo(10, 2)   ->  10
// TEST 3:  maxTwo(5, 5)    ->  5

// ----- 4. Max of three (compose #3) -----
// Write `maxThree(a, b, c)` that RETURNS the largest, by CALLING maxTwo twice.
// your code here

// console.log(maxThree(3, 9, 5));
// TEST 1:  maxThree(3, 9, 5)    ->  9
// TEST 2:  maxThree(8, 2, 4)    ->  8
// TEST 3:  maxThree(1, 1, 7)    ->  7

// ----- 5. Is even (helper) -----
// Write `even(n)` that RETURNS true when n is even.
// your code here

// console.log(even(4));
// TEST 1:  even(4)  ->  true
// TEST 2:  even(7)  ->  false
// TEST 3:  even(0)  ->  true

// ----- 6. Label parity (compose #5) -----
// Write `parityLabel(n)` that RETURNS "even" or "odd" by CALLING even(n).
// your code here

// console.log(parityLabel(7));
// TEST 1:  parityLabel(7)  ->  "odd"
// TEST 2:  parityLabel(4)  ->  "even"
// TEST 3:  parityLabel(0)  ->  "even"

// ----- 7. Rectangle area -----
// Write `area(w, h)` that RETURNS w * h.
// your code here

// console.log(area(3, 4));
// TEST 1:  area(3, 4)  ->  12
// TEST 2:  area(5, 5)  ->  25
// TEST 3:  area(1, 9)  ->  9

// ----- 8. Total cost (compose #7) -----
// Write `tileCost(w, h, pricePerTile)` that RETURNS area(w, h) * pricePerTile.
// your code here

// console.log(tileCost(2, 3, 5));
// TEST 1:  tileCost(2, 3, 5)   ->  30
// TEST 2:  tileCost(4, 4, 2)   ->  32
// TEST 3:  tileCost(1, 1, 10)  ->  10

// ----- 9. Clamp -----
// Write `clamp(n, low, high)` that RETURNS low if n < low, high if n > high,
// otherwise n.
// your code here

// console.log(clamp(15, 0, 10));
// TEST 1:  clamp(15, 0, 10)  ->  10
// TEST 2:  clamp(-3, 0, 10)  ->  0
// TEST 3:  clamp(5, 0, 10)   ->  5

// ----- 10. Count down to string -----
// Write `countdown(n)` that RETURNS a string of n down to 1 joined by spaces,
// using a loop inside the function. countdown(3) -> "3 2 1".
// your code here

// console.log(countdown(3));
// TEST 1:  countdown(3)  ->  "3 2 1"
// TEST 2:  countdown(5)  ->  "5 4 3 2 1"
// TEST 3:  countdown(1)  ->  "1"
