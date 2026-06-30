/* ============================================================
   LESSON 1 — VARIABLES: FRESH EXERCISES
   ------------------------------------------------------------
   Tools allowed: const / let, reassignment, + - * / , and
   joining strings with + . Nothing else yet.

   How to use:
   - Write your function where you see  // your code here
   - The test call sits below it, COMMENTED OUT. Delete the
     leading "// " to switch it on, then run:  node 1-variables.js
   - Each exercise has 3 TEST CASES: INPUT -> the EXACT value
     you must RETURN. All 3 match = correct.

   Every function has a DIFFERENT name, so all answers live here.
   ============================================================ */
console.log("==1==");
// ----- 1. Running total -----
// Write `runningTotal()` (no input). Start let sum = 0, add 8, add 8,
// subtract 1, then RETURN sum.
// your code here
function runningTotal() {
  let sum = 0;
  sum += 8 + 8 - 1;
  return sum;
}
console.log(runningTotal());
console.log(runningTotal() + 5);
console.log(runningTotal() * 2);
// TEST 1:  runningTotal()      ->  15
// TEST 2:  runningTotal() + 5  ->  20
// TEST 3:  runningTotal() * 2  ->  30
console.log("==2==");

// ----- 2. Swap into a label -----
// Write `swapLabel(a, b)` that RETURNS b + "-" + a (the two joined,
// swapped, with a dash between).
// your code here
function swapLabel(a, b) {
  return b + "-" + a;
}
console.log(swapLabel("left", "right"));
console.log(swapLabel("1", "2"));
console.log(swapLabel("a", "b"));
// TEST 1:  swapLabel("left", "right")  ->  "right-left"
// TEST 2:  swapLabel("1", "2")         ->  "2-1"
// TEST 3:  swapLabel("a", "b")         ->  "b-a"
console.log("==3==");
// ----- 3. Triple then bump -----
// Write `tripleBump(n)`. Set let x = n * 3, then add 1 to x, then RETURN x.
// your code here
function tripleBump(n) {
  let x = n * 3;
  x += 1;
  return x;
}
console.log(tripleBump(4));
console.log(tripleBump(0));
console.log(tripleBump(10));
// TEST 1:  tripleBump(4)   ->  13
// TEST 2:  tripleBump(0)   ->  1
// TEST 3:  tripleBump(10)  ->  31
console.log("==4==");

// ----- 4. Full name -----
// Write `fullName(first, last)` that RETURNS the two joined with one space.
// your code here
function fullName(first, last) {
  return first + " " + last;
}
console.log(fullName("Ada", "Lovelace"));
console.log(fullName("Sam", "Lee"));
console.log(fullName("A", "B"));
// TEST 1:  fullName("Ada", "Lovelace")  ->  "Ada Lovelace"
// TEST 2:  fullName("Sam", "Lee")       ->  "Sam Lee"
// TEST 3:  fullName("A", "B")           ->  "A B"
console.log("==5==");

// ----- 5. Price with tax -----
// Write `withTax(price)`. Use const TAX = 0.1, then RETURN price plus
// price * TAX.
// your code here
function withTax(price) {
  const TAX = 0.1;
  return price + price * TAX;
}
console.log(withTax(100));
console.log(withTax(50));
console.log(withTax(0));
// TEST 1:  withTax(100)  ->  110
// TEST 2:  withTax(50)   ->  55
// TEST 3:  withTax(0)    ->  0
console.log("==6==");

// ----- 6. Count up by one, three times -----
// Write `countUp3(start)`. Set let c = start, then c++ three times, RETURN c.
// your code here
function countUp3(start) {
  let c = start;
  c++;
  return c;
}
console.log(countUp3(7));
console.log(countUp3(0));
console.log(countUp3(-3));
// TEST 1:  countUp3(7)   ->  10
// TEST 2:  countUp3(0)   ->  3
// TEST 3:  countUp3(-3)  ->  0
console.log("==7==");

// ----- 7. Average of two -----
// Write `avgTwo(a, b)` that RETURNS the average of a and b.
// your code here
function avgTwo(a, b) {
  return (a + b) / 2;
}
console.log(avgTwo(4, 8));
console.log(avgTwo(10, 20));
console.log(avgTwo(3, 3));
// TEST 1:  avgTwo(4, 8)    ->  6
// TEST 2:  avgTwo(10, 20)  ->  15
// TEST 3:  avgTwo(3, 3)    ->  3
console.log("==8");

// ----- 8. Rectangle area then double -----
// Write `doubleArea(w, h)`. Set let area = w * h, then reassign
// area = area * 2, RETURN area.
// your code here
function doubleArea(w, h) {
  let area = w * h;
  area = area * 2;
  return area;
}
console.log(doubleArea(3, 4));
console.log(doubleArea(5, 2));
console.log(doubleArea(1, 1));
// TEST 1:  doubleArea(3, 4)  ->  24
// TEST 2:  doubleArea(5, 2)  ->  20
// TEST 3:  doubleArea(1, 1)  ->  2
