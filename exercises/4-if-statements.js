/* ============================================================
   LESSON 4 — IF STATEMENTS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: if / else if / else, plus everything before.
   Each function RETURNS a value chosen by a decision.

   Run:  node 4-if-statements.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */
console.log("==1==");

// ----- 1. Pass or fail -----
// Write `passFail(score)` that RETURNS "Pass" when score >= 60, else "Fail".
// your code here
function passFail(score) {
  if (score >= 60) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(passFail(72));
console.log(passFail(60));
console.log(passFail(40));
// TEST 1:  passFail(72)  ->  "Pass"
// TEST 2:  passFail(60)  ->  "Pass"
// TEST 3:  passFail(40)  ->  "Fail"
console.log("==2==");
// ----- 2. Sign of a number -----
// Write `signOf(n)` that RETURNS "positive", "negative", or "zero".
// your code here
function signOf(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(signOf(-4));
console.log(signOf(0));
console.log(signOf(9));
// TEST 1:  signOf(-4)  ->  "negative"
// TEST 2:  signOf(0)   ->  "zero"
// TEST 3:  signOf(9)   ->  "positive"
console.log("==3==");

// ----- 3. Letter grade -----
// Write `grade(score)`: 90+ "A", 80-89 "B", 70-79 "C", below 70 "F".
// your code here
function grade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else {
    return "F";
  }
}
console.log(grade(95));
console.log(grade(85));
console.log(grade(50));
// TEST 1:  grade(95)  ->  "A"
// TEST 2:  grade(85)  ->  "B"
// TEST 3:  grade(50)  ->  "F"
console.log("==4==");

// ----- 4. Bigger of two -----
// Write `bigger(a, b)` that RETURNS the larger, or "equal" when they match.
// your code here
function bigger(a, b) {
  if (a > b) {
    return a;
  }
  if (b > a) {
    return b;
  } else {
    return "equal";
  }
}
console.log(bigger(14, 9));
console.log(bigger(3, 8));
console.log(bigger(4, 4));
// TEST 1:  bigger(14, 9)  ->  14
// TEST 2:  bigger(3, 8)   ->  8
// TEST 3:  bigger(5, 5)   ->  "equal"
console.log("==5==");

// ----- 5. Ticket price -----
// Write `ticketPrice(age)`: under 12 -> 5, 12 to 64 -> 12, 65+ -> 8.
// your code here
function ticketPrice(age) {
  if (age < 12) {
    return "5";
  } else if (age >= 12 && age < +64) {
    return "12";
  } else {
    return "8";
  }
}
console.log(ticketPrice(8));
console.log(ticketPrice(30));
console.log(ticketPrice(70));
// TEST 1:  ticketPrice(8)   ->  5
// TEST 2:  ticketPrice(30)  ->  12
// TEST 3:  ticketPrice(70)  ->  8
console.log("==6==");

// ----- 6. Traffic light -----
// Write `light(color)`: "green" -> "Go", "yellow" -> "Slow", "red" -> "Stop",
// anything else -> "Invalid".
// your code here
function light(color) {
  if (color === "green") {
    return "Go";
  } else if (color === "yellow") {
    return "Slow";
  } else if (color === "red") {
    return "Stop";
  } else {
    return "Invalid";
  }
}
console.log(light("red"));
console.log(light("green"));
console.log(light("purple"));
console.log(light("yellow"));
// TEST 1:  light("green")   ->  "Go"
// TEST 2:  light("red")     ->  "Stop"
// TEST 3:  light("purple")  ->  "Invalid"
console.log("==7==");

// ----- 7. FizzBuzz of one number -----
// Write `fizzbuzz(n)`: divisible by 3 and 5 -> "FizzBuzz", by 3 -> "Fizz",
// by 5 -> "Buzz", else the number n itself.
// your code here
function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n;
  }
}
console.log(fizzbuzz(15));
console.log(fizzbuzz(9));
console.log(fizzbuzz(7));
// TEST 1:  fizzbuzz(15)  ->  "FizzBuzz"
// TEST 2:  fizzbuzz(9)   ->  "Fizz"
// TEST 3:  fizzbuzz(7)   ->  7
console.log("==8==");

// ----- 8. Temperature advice -----
// Write `clothes(temp)`: above 28 -> "Shorts", 15 to 28 -> "Jacket",
// below 15 -> "Coat".
// your code here
function clothes(temp) {
  if (temp > 28) {
    return "Shorts";
  } else if (temp > 15 && temp <= 28) {
    return "Jacket";
  } else {
    return "Coat";
  }
}
console.log(clothes(30));
console.log(clothes(20));
console.log(clothes(5));
// TEST 1:  clothes(30)  ->  "Shorts"
// TEST 2:  clothes(20)  ->  "Jacket"
// TEST 3:  clothes(5)   ->  "Coat"
console.log("==9==");

// ----- 9. Login result -----
// Write `login(user, pass)` that RETURNS "Welcome" when user is "admin"
// AND pass is "1234", otherwise "Denied".
// your code here
function login(user, pass) {
  if (user === "admin" && pass === "1234") {
    return "Welcome";
  } else {
    return "Denied";
  }
}
console.log(login("admin", "1234"));
console.log(login("admin", "0000"));
console.log(login("admin", "1234"));
// TEST 1:  login("admin", "1234")  ->  "Welcome"
// TEST 2:  login("admin", "0000")  ->  "Denied"
// TEST 3:  login("guest", "1234")  ->  "Denied"
console.log("==10==");

// ----- 10. Absolute value -----
// Write `absValue(n)` that RETURNS n when n >= 0, otherwise -n.
// your code here
function absValue(n) {
  if (n < 0) {
    return -n;
  } else {
    return n;
  }
}
console.log(absValue(-7));
console.log(absValue(7));
console.log(absValue(0));
// TEST 1:  absValue(-7)  ->  7
// TEST 2:  absValue(7)   ->  7
// TEST 3:  absValue(0)   ->  0
