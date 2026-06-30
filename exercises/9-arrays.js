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

// ----- 1. First item -----
// Write `firstItem(arr)` that RETURNS the item at index 0.
// your code here

// console.log(firstItem([10, 20, 30]));
// TEST 1:  firstItem([10, 20, 30])  ->  10
// TEST 2:  firstItem(["a", "b"])    ->  "a"
// TEST 3:  firstItem([7])           ->  7

// ----- 2. Sum all -----
// Write `sumAll(arr)` (numbers) that RETURNS the total of every item.
// your code here

// console.log(sumAll([1, 2, 3, 4]));
// TEST 1:  sumAll([1, 2, 3, 4])  ->  10
// TEST 2:  sumAll([])            ->  0
// TEST 3:  sumAll([5])           ->  5

// ----- 3. Biggest number -----
// Write `maxOf(arr)` (numbers) that RETURNS the largest item.
// your code here

// console.log(maxOf([3, 9, 5]));
// TEST 1:  maxOf([3, 9, 5])      ->  9
// TEST 2:  maxOf([-1, -5, -2])   ->  -1
// TEST 3:  maxOf([7])            ->  7

// ----- 4. Count occurrences -----
// Write `countOf(arr, target)` that RETURNS how many items equal target.
// your code here

// console.log(countOf([1, 2, 2, 3, 2], 2));
// TEST 1:  countOf([1, 2, 2, 3, 2], 2)        ->  3
// TEST 2:  countOf(["a", "b", "a"], "a")      ->  2
// TEST 3:  countOf([1, 2, 3], 9)              ->  0

// ----- 5. Add to end -----
// Write `append(arr, item)` that pushes item and RETURNS arr.
// your code here

// console.log(append([1, 2], 3));
// TEST 1:  append([1, 2], 3)          ->  [1, 2, 3]
// TEST 2:  append([], "hi").length    ->  1
// TEST 3:  append(["a"], "b")         ->  ["a", "b"]

// ----- 6. Remove first -----
// Write `removeFirst(arr)` that shifts off the first item and RETURNS arr.
// your code here

// console.log(removeFirst([1, 2, 3]));
// TEST 1:  removeFirst([1, 2, 3])        ->  [2, 3]
// TEST 2:  removeFirst([9]).length       ->  0
// TEST 3:  removeFirst(["a", "b", "c"])  ->  ["b", "c"]

// ----- 7. Contains -----
// Write `contains(arr, item)` that RETURNS true when item is in arr.
// your code here

// console.log(contains(["cat", "dog"], "dog"));
// TEST 1:  contains(["cat", "dog"], "dog")   ->  true
// TEST 2:  contains([1, 2, 3], 9)            ->  false
// TEST 3:  contains([], "x")                 ->  false

// ----- 8. Count even numbers -----
// Write `countEven(arr)` (numbers) that RETURNS how many items are even.
// your code here

// console.log(countEven([1, 2, 3, 4, 6]));
// TEST 1:  countEven([1, 2, 3, 4, 6])  ->  3
// TEST 2:  countEven([1, 3, 5])        ->  0
// TEST 3:  countEven([2, 4])           ->  2

// ----- 9. Join with dashes -----
// Write `dashJoin(arr)` that RETURNS the items joined into one string with
// "-" between them, built with a loop. dashJoin(["a","b","c"]) -> "a-b-c".
// your code here

// console.log(dashJoin(["a", "b", "c"]));
// TEST 1:  dashJoin(["a", "b", "c"])  ->  "a-b-c"
// TEST 2:  dashJoin(["one"])          ->  "one"
// TEST 3:  dashJoin([1, 2])           ->  "1-2"

// ----- 10. Average -----
// Write `average(arr)` (numbers) that RETURNS the mean of the items.
// your code here

// console.log(average([2, 4, 6]));
// TEST 1:  average([2, 4, 6])    ->  4
// TEST 2:  average([10, 20])     ->  15
// TEST 3:  average([5])          ->  5

// ----- 11. Reverse into a new array -----
// Write `reverseArr(arr)` that RETURNS a NEW array with the items reversed.
// Do not change the original.
// your code here

// console.log(reverseArr([1, 2, 3]));
// TEST 1:  reverseArr([1, 2, 3])        ->  [3, 2, 1]
// TEST 2:  reverseArr(["a", "b"])       ->  ["b", "a"]
// TEST 3:  reverseArr([7])              ->  [7]

// ----- 12. Only the evens (build a new array) -----
// Write `evensOnly(arr)` that RETURNS a NEW array with only the even numbers,
// in the same order.
// your code here

// console.log(evensOnly([1, 2, 3, 4, 5, 6]));
// TEST 1:  evensOnly([1, 2, 3, 4, 5, 6])  ->  [2, 4, 6]
// TEST 2:  evensOnly([1, 3, 5])           ->  []
// TEST 3:  evensOnly([2, 4])              ->  [2, 4]
