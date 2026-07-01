// const { useTransition } = require("react");

/* ============================================================
   LESSON 9 — ARRAYS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: [ ], arr[i], arr.length, push/pop/unshift/shift,
   includes/indexOf, and a for loop over the items. Plus before.

   Run:  node 9-arrays.js
   Comparing arrays by eye: the test shows the expected list.
   To check in code, compare JSON.stringify(yours) to expected.
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */
let exerciseNumNine = 1;

function logTask() {
  console.log("==" + "Дасгал: " + exerciseNumNine);
  exerciseNumNine++;
}
logTask();
// ----- 1. First item -----
// Write `firstItem(arr)` that RETURNS the item at index 0.
// your code here
function firstItem(arr) {
  return arr[0];
}
console.log(firstItem([10, 20, 30]));
console.log(firstItem(["a", "b"]));
console.log(firstItem([7]));
// TEST 1:  firstItem([10, 20, 30])  ->  10
// TEST 2:  firstItem(["a", "b"])    ->  "a"
// TEST 3:  firstItem([7])           ->  7
logTask();
// ----- 2. Sum all -----
// Write `sumAll(arr)` (numbers) that RETURNS the total of every item.
// your code here
function sumAll(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll([1, 2, 3, 4]));
console.log(sumAll([]));
console.log(sumAll([5]));
// TEST 1:  sumAll([1, 2, 3, 4])  ->  10
// TEST 2:  sumAll([])            ->  0
// TEST 3:  sumAll([5])           ->  5
logTask();
// ----- 3. Biggest number -----
// Write `maxOf(arr)` (numbers) that RETURNS the largest item.
// your code here
function maxOf(arr) {
  arr.sort((a, b) => b - a);
  return arr[0];
}
console.log(maxOf([3, 9, 5]));
console.log(maxOf([-1, -5, -2]));
console.log(maxOf([7]));
// TEST 1:  maxOf([3, 9, 5])      ->  9
// TEST 2:  maxOf([-1, -5, -2])   ->  -1
// TEST 3:  maxOf([7])            ->  7
logTask();
// ----- 4. Count occurrences -----
// Write `countOf(arr, target)` that RETURNS how many items equal target.
// your code here
function countOf(arr, target) {
  let count = 0;
  for (let n in arr) {
    if (arr[n] === target) {
      count++;
    }
  }
  return count;
}
console.log(countOf([1, 2, 2, 3, 2], 2));
console.log(countOf(["a", "b", "a"], "a"));
console.log(countOf([1, 2, 3], 9));
// TEST 1:  countOf([1, 2, 2, 3, 2], 2)        ->  3
// TEST 2:  countOf(["a", "b", "a"], "a")      ->  2
// TEST 3:  countOf([1, 2, 3], 9)              ->  0
logTask();
// ----- 5. Add to end -----
// Write `append(arr, item)` that pushes item and RETURNS arr.
// your code here
function append(arr, item) {
  arr.push(item);
  return arr;
}
console.log(append([1, 2], 3));
console.log(append([], "hi").length);
console.log(append(["a"], "b"));
// TEST 1:  append([1, 2], 3)          ->  [1, 2, 3]
// TEST 2:  append([], "hi").length    ->  1
// TEST 3:  append(["a"], "b")         ->  ["a", "b"]
logTask();
// ----- 6. Remove first -----
// Write `removeFirst(arr)` that shifts off the first item and RETURNS arr.
// your code here
function removeFirst(arr) {
  arr.shift();
  return arr;
}
console.log(removeFirst([1, 2, 3]));
console.log(removeFirst([0]).length);
console.log(removeFirst(["a", "b", "c"]));
// TEST 1:  removeFirst([1, 2, 3])        ->  [2, 3]
// TEST 2:  removeFirst([9]).length       ->  0
// TEST 3:  removeFirst(["a", "b", "c"])  ->  ["b", "c"]
logTask();
// ----- 7. Contains -----
// Write `contains(arr, item)` that RETURNS true when item is in arr.
// your code here
function contains(arr, item) {
  return arr.includes(item);
}
console.log(contains(["cat", "dog"], "dog"));
console.log(contains([1, 2, 3], 9));
console.log(contains([], "x"));
// TEST 1:  contains(["cat", "dog"], "dog")   ->  true
// TEST 2:  contains([1, 2, 3], 9)            ->  false
// TEST 3:  contains([], "x")                 ->  false
logTask();
// ----- 8. Count even numbers -----
// Write `countEven(arr)` (numbers) that RETURNS how many items are even.
// your code here
function countEven(arr) {
   return even = arr.filter((n)=>n%2===0)
}
console.log(countEven([1, 2, 3, 4, 6]));
console.log(countEven([1, 3, 5]));
console.log(countEven([2, 4]));
// TEST 1:  countEven([1, 2, 3, 4, 6])  ->  3
// TEST 2:  countEven([1, 3, 5])        ->  0
// TEST 3:  countEven([2, 4])           ->  2
logTask();
// ----- 9. Join with dashes -----
// Write `dashJoin(arr)` that RETURNS the items joined into one string with
// "-" between them, built with a loop. dashJoin(["a","b","c"]) -> "a-b-c".
// your code here
function dashJoin(arr) {
  let joined = "";
  for (let key in arr) {
    joined += "-" + arr[key];
  }
  return joined.slice(1);
}
console.log(dashJoin(["a", "b", "c"]));
console.log(dashJoin(["one"]));
console.log(dashJoin([1, 2]));
// TEST 1:  dashJoin(["a", "b", "c"])  ->  "a-b-c"
// TEST 2:  dashJoin(["one"])          ->  "one"
// TEST 3:  dashJoin([1, 2])           ->  "1-2"
logTask();
// ----- 10. Average -----
// Write `average(arr)` (numbers) that RETURNS the mean of the items.
// your code here
function average(arr) {
  return arr.reduce((acc, n) => acc + n, 0) / arr.length;
}
console.log(average([2, 4, 6]));
console.log(average([10, 20]));
console.log(average([5]));
// TEST 1:  average([2, 4, 6])    ->  4
// TEST 2:  average([10, 20])     ->  15
// TEST 3:  average([5])          ->  5
logTask();
// ----- 11. Reverse into a new array -----
// Write `reverseArr(arr)` that RETURNS a NEW array with the items reversed.
// Do not change the original.
// your code here
function reverseArr(arr) {
  let copy = [...arr].reverse();
  return copy;
}
console.log(reverseArr([1, 2, 3]));
// TEST 1:  reverseArr([1, 2, 3])        ->  [3, 2, 1]
// TEST 2:  reverseArr(["a", "b"])       ->  ["b", "a"]
// TEST 3:  reverseArr([7])              ->  [7]
logTask();
// ----- 12. Only the evens (build a new array) -----
// Write `evensOnly(arr)` that RETURNS a NEW array with only the even numbers,
// in the same order.
// your code here
function evensOnly(arr) {
  return arr.filter((n) => n % 2 === 0)
}
console.log(evensOnly([1, 2, 3, 4, 5, 6]));
console.log(evensOnly([1, 3, 5]));
console.log(evensOnly([2, 4]));
// TEST 1:  evensOnly([1, 2, 3, 4, 5, 6])  ->  [2, 4, 6]
// TEST 2:  evensOnly([1, 3, 5])           ->  []
// TEST 3:  evensOnly([2, 4])              ->  [2, 4]
