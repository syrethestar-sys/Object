/* ============================================================
   LESSON 5 — STRINGS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: .length, [i], .toUpperCase/.toLowerCase, .includes,
   .indexOf, .slice, .trim, + , String()/Number()/isNaN, if.
   NO loops, NO functions-inside beyond these. Each RETURNS a value.

   Run:  node 5-strings.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */
let exerciseNum = 1;

function logTask() {
  console.log("==" + "Дасгал: " + exerciseNum);
  exerciseNum++;
}
logTask();
// ----- 1. Shout it -----
// Write `shout(text)` that RETURNS text in ALL CAPS.
// your code here
function shout(text) {
  return text.toUpperCase();
}
console.log(shout("hi"));
console.log(shout("Code"));
console.log(shout("a"));
// TEST 1:  shout("hi")     ->  "HI"
// TEST 2:  shout("Code")   ->  "CODE"
// TEST 3:  shout("a")      ->  "A"
logTask();
// ----- 2. First letter -----
// Write `firstLetter(word)` that RETURNS the character at index 0.
// your code here
function firstLetter(word) {
  return word[0];
}
console.log(firstLetter("hello"));
console.log(firstLetter("zebra"));
console.log(firstLetter("x"));
// TEST 1:  firstLetter("hello")  ->  "h"
// TEST 2:  firstLetter("Zebra")  ->  "Z"
// TEST 3:  firstLetter("x")      ->  "x"
logTask();
// ----- 3. Last letter -----
// Write `lastLetter(word)` that RETURNS the last character of any length word.
// your code here
function lastLetter(word) {
  return word[word.length - 1];
}
console.log(lastLetter("hello"));
console.log(lastLetter("cat"));
console.log(lastLetter("z"));
// TEST 1:  lastLetter("hello")  ->  "o"
// TEST 2:  lastLetter("cat")    ->  "t"
// TEST 3:  lastLetter("z")      ->  "z"
logTask();
// ----- 4. Initials -----
// Write `initials(first, last)` that RETURNS the two first letters,
// uppercased, joined with a dot: "M.J".
// your code here
function initials(first, last) {
  let firstL = first.toUpperCase()[0];
  let lastL = last.toUpperCase()[0];
  return firstL + "." + lastL;
}
console.log(initials("maria", "jones"));
console.log(initials("sam", "lee"));
console.log(initials("a", "b"));
// TEST 1:  initials("maria", "jones")  ->  "M.J"
// TEST 2:  initials("sam", "lee")      ->  "S.L"
// TEST 3:  initials("a", "b")          ->  "A.B"
logTask();
// ----- 5. Capitalize -----
// Write `capitalize(word)` that RETURNS the word with the first letter
// uppercased and the rest unchanged.
// your code here
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
console.log(capitalize("maria"));
console.log(capitalize("code"));
console.log(capitalize("x"));
// TEST 1:  capitalize("maria")  ->  "Maria"
// TEST 2:  capitalize("code")   ->  "Code"
// TEST 3:  capitalize("x")      ->  "X"
logTask();
// ----- 6. Looks like an email -----
// Write `isEmail(text)` that RETURNS true when text includes "@", else false.
// your code here
function isEmail(text) {
  if (text.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmail("sam@mail.com"));
console.log(isEmail("sam.com"));
console.log(isEmail("@"));
// TEST 1:  isEmail("sam@mail.com")  ->  true
// TEST 2:  isEmail("sam.com")       ->  false
// TEST 3:  isEmail("@")             ->  true
logTask();
// ----- 7. Valid username length -----
// Write `validUsername(name)` that RETURNS "Valid" when length is >= 3
// AND <= 15, otherwise "Invalid".
// your code here
function validUsername(name) {
  if (name.length >= 3 && name.length <= 15) {
    return "Valid";
  } else {
    return "Invalid";
  }
}
console.log(validUsername("jordan"));
console.log(validUsername("jo"));
console.log(validUsername("a"));
// TEST 1:  validUsername("jordan")  ->  "Valid"
// TEST 2:  validUsername("jo")      ->  "Invalid"
// TEST 3:  validUsername("a")       ->  "Invalid"
logTask();
// ----- 8. Area code -----
// Write `areaCode(phone)` (10-char string) that RETURNS the first 3 chars.
// your code here
function areaCode(phone) {
  return phone.slice(0, 3);
}
console.log(areaCode("5551234567"));
console.log(areaCode("21212412515"));
console.log(areaCode("00000000000"));
// TEST 1:  areaCode("5551234567")  ->  "555"
// TEST 2:  areaCode("2129998888")  ->  "212"
// TEST 3:  areaCode("0000000000")  ->  "000"
logTask();
// ----- 9. Same word ignoring case -----
// Write `sameWord(a, b)` that RETURNS true when a and b match ignoring case.
// your code here
function sameWord(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
console.log(sameWord("Hello", "hello"));
console.log(sameWord("cat", "dog"));
console.log(sameWord("ABC", "abc"));
// TEST 1:  sameWord("Hello", "hello")  ->  true
// TEST 2:  sameWord("cat", "dog")      ->  false
// TEST 3:  sameWord("ABC", "abc")      ->  true
logTask();
// ----- 10. Clean and measure -----
// Write `cleanLength(raw)` that trims the spaces off both ends and RETURNS
// the length of what is left.
// your code here
function cleanLength(raw) {
  return raw.trim(" ").length;
}
console.log(cleanLength("  hi  "));
console.log(cleanLength("  hello  "));
console.log(cleanLength("x"));
// TEST 1:  cleanLength("  hi  ")      ->  2
// TEST 2:  cleanLength("  hello   ")  ->  5
// TEST 3:  cleanLength("x")           ->  1
logTask();
// ----- 11. Pad the clock -----
// Write `padClock(minute)` (0-59 number). RETURN a 2-char string, adding a
// leading "0" when it is a single digit: 5 -> "05", 42 -> "42".
// your code here
function padClock(minute) {
  if (minute <= 59 && minute >= 10) {
    return minute;
  } else if (minute > 0 && minute <= 9) {
    return 0 + minute;
  } else {
    return "Invalid Minute";
  }
}
console.log(padClock(5));
console.log(padClock(42));
console.log(padClock(0));
// TEST 1:  padClock(5)   ->  "05"
// TEST 2:  padClock(42)  ->  "42"
// TEST 3:  padClock(0)   ->  "00"
logTask()
// ----- 12. Cents to price tag -----
// Write `priceTag(cents)` (3+ digit whole number). RETURN "$D.CC" where CC
// is the last 2 digits and D is the rest: 150 -> "$1.50", 905 -> "$9.05".
// your code here
function priceTag(cents){
   return "$"+(cents / 100).toFixed(2)
}
console.log(priceTag(150));
console.log(priceTag(905));
console.log(priceTag(1299));
// TEST 1:  priceTag(150)  ->  "$1.50"
// TEST 2:  priceTag(905)  ->  "$9.05"
// TEST 3:  priceTag(1299) ->  "$12.99"
