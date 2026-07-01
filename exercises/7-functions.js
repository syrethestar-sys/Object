/* ============================================================
   LESSON 7 — FUNCTIONS: FRESH EXERCISES
   ------------------------------------------------------------
   Focus: parameters, return, default values, and CALLING one
   function from inside another (composition). Tools: everything
   from lessons 1-6. NO arrays.

   Run:  node 7-functions.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */
let exerciseNumSeven = 1;

function logTask() {
  console.log("==" + "Дасгал: " + exerciseNumSeven);
  exerciseNumSeven++;
}
logTask();
// ----- 1. Add three -----
// Write `addThree(a, b, c)` that RETURNS the sum of all three.
// your code here
function addThree(a, b, c) {
  return a + b + c;
}
console.log(addThree(1, 2, 3));
console.log(addThree(10, 0, 5));
console.log(addThree(-1, 1, 0));
// TEST 1:  addThree(1, 2, 3)   ->  6
// TEST 2:  addThree(10, 0, 5)  ->  15
// TEST 3:  addThree(-1, 1, 0)  ->  0
logTask();
// ----- 2. Greet with default -----
// Write `greet(name)` that RETURNS "Hello, " + name. If name is not given,
// default it to "friend". (Use a default parameter.)
// your code here
function greet(name) {
  if (name === undefined) {
    return "Hello, " + "friend";
  } else {
    return "Hello, " + name;
  }
}
console.log(greet("Sam"));
console.log(greet());
console.log(greet("Ada"));
// TEST 1:  greet("Sam")  ->  "Hello, Sam"
// TEST 2:  greet()       ->  "Hello, friend"
// TEST 3:  greet("Ada")  ->  "Hello, Ada"
logTask();
// ----- 3. Max of two -----
// Write `maxTwo(a, b)` that RETURNS the larger of the two.
// your code here
function maxTwo(a, b) {
  if (a < b) {
    return b;
  } else {
    return a;
  }
}
console.log(maxTwo(3, 9));
console.log(maxTwo(10, 2));
console.log(maxTwo(5, 5));
// TEST 1:  maxTwo(3, 9)    ->  9
// TEST 2:  maxTwo(10, 2)   ->  10
// TEST 3:  maxTwo(5, 5)    ->  5
logTask();
// ----- 4. Max of three (compose #3) -----
// Write `maxThree(a, b, c)` that RETURNS the largest, by CALLING maxTwo twice.
// your code here
function maxThree(a, b, c) {
  return maxTwo(maxTwo(a, b), c);
}
console.log(maxThree(3, 9, 5));
console.log(maxThree(1, 1, 7));
console.log(maxThree(8, 2, 4));
// TEST 1:  maxThree(3, 9, 5)    ->  9
// TEST 2:  maxThree(8, 2, 4)    ->  8
// TEST 3:  maxThree(1, 1, 7)    ->  7
logTask();
// ----- 5. Is even (helper) -----
// Write `even(n)` that RETURNS true when n is even.
// your code here
function even(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(even(4));
console.log(even(7));
console.log(even(0));
// TEST 1:  even(4)  ->  true
// TEST 2:  even(7)  ->  false
// TEST 3:  even(0)  ->  true
logTask();
// ----- 6. Label parity (compose #5) -----
// Write `parityLabel(n)` that RETURNS "even" or "odd" by CALLING even(n).
// your code here
function parityLabel(n) {
  let parityFirst = even(n);
  if (parityFirst === true) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(parityLabel(7));
console.log(parityLabel(4));
console.log(parityLabel(0));
// TEST 1:  parityLabel(7)  ->  "odd"
// TEST 2:  parityLabel(4)  ->  "even"
// TEST 3:  parityLabel(0)  ->  "even"
logTask();
// ----- 7. Rectangle area -----
// Write `area(w, h)` that RETURNS w * h.
// your code here
function area(w, h) {
  return w * h;
}
console.log(area(3, 4));
console.log(area(5, 5));
console.log(area(1, 9));
// TEST 1:  area(3, 4)  ->  12
// TEST 2:  area(5, 5)  ->  25
// TEST 3:  area(1, 9)  ->  9
logTask();
// ----- 8. Total cost (compose #7) -----
// Write `tileCost(w, h, pricePerTile)` that RETURNS area(w, h) * pricePerTile.
// your code here
function tileCost(w, h, pricePerTile) {
  let costPertile = area(w, h);
  return costPertile * pricePerTile;
}
console.log(tileCost(2, 3, 5));
console.log(tileCost(4, 4, 2));
console.log(tileCost(1, 1, 10));
// TEST 1:  tileCost(2, 3, 5)   ->  30
// TEST 2:  tileCost(4, 4, 2)   ->  32
// TEST 3:  tileCost(1, 1, 10)  ->  10
logTask();
// ----- 9. Clamp -----
// Write `clamp(n, low, high)` that RETURNS low if n < low, high if n > high,
// otherwise n.
// your code here
function clamp(n, low, high) {
  if (n < low) {
    return low;
  } else if (n > high) {
    return high;
  } else {
    return n;
  }
}
console.log(clamp(15, 0, 10));
console.log(clamp(-3, 0, 10));
console.log(clamp(5, 0, 10));
// TEST 1:  clamp(15, 0, 10)  ->  10
// TEST 2:  clamp(-3, 0, 10)  ->  0
// TEST 3:  clamp(5, 0, 10)   ->  5
logTask();
// ----- 10. Count down to string -----
// Write `countdown(n)` that RETURNS a string of n down to 1 joined by spaces,
// using a loop inside the function. countdown(3) -> "3 2 1".
// your code here
function countdown(n) {
  let cDown = "";
  for (let i = n; i > 0; i--) {
    cDown += i + " ";
  }
  return cDown;
}
console.log(countdown(3));
console.log(countdown(5));
console.log(countdown(1));
// TEST 1:  countdown(3)  ->  "3 2 1"
// TEST 2:  countdown(5)  ->  "5 4 3 2 1"
// TEST 3:  countdown(1)  ->  "1"
