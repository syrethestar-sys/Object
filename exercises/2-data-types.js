/* ============================================================
   LESSON 2 — DATA TYPES: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: typeof, Number(), String(), Boolean(), + - * / ,
   and the types number / string / boolean / undefined.

   Run:  node 2-data-types.js
   Switch on a test by deleting its leading "// ".
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */
console.log("==1==");

// ----- 1. What type is it? -----
// Write `whatType(value)` that RETURNS the typeof string of value.
// your code here
function whatType(value) {
  return typeof value;
}
console.log(whatType(42));
console.log(whatType("hi"));
console.log(whatType(true));
// TEST 1:  whatType(42)      ->  "number"
// TEST 2:  whatType("hi")    ->  "string"
// TEST 3:  whatType(true)    ->  "boolean"
console.log("==2==");
// ----- 2. String to number -----
// Write `toNumber(text)` that RETURNS text turned into a real number.
// your code here
function toNumber(text) {
  return Number(text);
}
console.log(toNumber("42"));
console.log(toNumber("7") + 1);
console.log(toNumber("100") * 2);
// TEST 1:  toNumber("42")        ->  42
// TEST 2:  toNumber("7") + 1     ->  8
// TEST 3:  toNumber("100") * 2   ->  200
console.log("==3==");

// ----- 3. Number to string -----
// Write `toText(n)` that RETURNS n turned into a string.
// your code here
function toText(n) {
  return String(n);
}
console.log(toText(42));
console.log(typeof toText(5));
console.log(toText(9) + "!");
// TEST 1:  toText(42)            ->  "42"
// TEST 2:  typeof toText(5)      ->  "string"
// TEST 3:  toText(9) + "!"       ->  "9!"
console.log("==4==");

// ----- 4. The string-plus-number trap -----
// Write `mix(a, b)` where a is a number and b is a string. RETURN a + b.
// (Find out what JS does when you add a number to a string.)
// your code here
function mix(a, b) {
  return a + b;
}
console.log(mix(5, "5"));
console.log(mix(1, "0"));
console.log(typeof (2, "x"));
// TEST 1:  mix(5, "5")       ->  "55"
// TEST 2:  mix(1, "0")       ->  "10"
// TEST 3:  typeof mix(2, "x") ->  "string"
console.log("==5==");

// ----- 5. Is it a real number? -----
// Write `isRealNumber(text)` that RETURNS true if Number(text) is a valid
// number, false if it is NaN.
// your code here
function isRealNumber(text) {
  return !isNaN(text);
}
console.log(isRealNumber("42"));
console.log(isRealNumber("hello"));
console.log(isRealNumber("3.14"));
// TEST 1:  isRealNumber("42")    ->  true
// TEST 2:  isRealNumber("hello") ->  false
// TEST 3:  isRealNumber("3.14")  ->  true
console.log("==6==");

// ----- 6. Force a boolean -----
// Write `asBoolean(value)` that RETURNS value turned into a true/false
// with Boolean(value).
// your code here
function asBoolean(value) {
  return Boolean(value);
}
console.log(asBoolean(0));
console.log(asBoolean(1));
console.log(asBoolean(""));
// TEST 1:  asBoolean(0)    ->  false
// TEST 2:  asBoolean(1)    ->  true
// TEST 3:  asBoolean("")   ->  false
console.log("==7==");

// ----- 7. Undefined check -----
// Write `isMissing(value)` that RETURNS true when value is undefined.
// your code here
function isMissing(value) {
  return value === undefined;
}
console.log(isMissing(undefined));
console.log(isMissing(0));
console.log(isMissing("x"));
// TEST 1:  isMissing(undefined)  ->  true
// TEST 2:  isMissing(0)          ->  false
// TEST 3:  isMissing("x")        ->  false
console.log("==8==");

// ----- 8. Round-trip a digit -----
// Write `firstDigitType(n)`. Turn n into a string, take its first
// character, RETURN the typeof that character.
// your code here
function firstDigitType(n) {
  let str = String(n);
  let firstChar = str[0];
  return typeof(firstChar)
}
console.log(firstDigitType(42));
console.log(firstDigitType(7));
console.log(firstDigitType(900));
// TEST 1:  firstDigitType(42)   ->  "string"
// TEST 2:  firstDigitType(7)    ->  "string"
// TEST 3:  firstDigitType(900)  ->  "string"
