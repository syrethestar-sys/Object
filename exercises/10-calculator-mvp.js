/* ============================================================
   MVP — BUILD A CALCULATOR'S LOGIC (no HTML, no styling)
   ------------------------------------------------------------
   This file is one long ladder. Each rung is a small exercise
   that becomes a PIECE of a real calculator. By the last rung
   you will have written every part of how a calculator thinks:

     digits -> operators -> apply one op -> read an expression
     -> compute it -> chain many ops left to right.

   Tools: functions, return, if, loops, strings, arrays,
   .split(" "), Number()/String(), %, Math. Each function uses a
   DIFFERENT name and may CALL the earlier ones you wrote.

   Run:  node 10-calculator-mvp.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

/* ---------- STAGE 1: the four button operations ---------- */

// ----- 1. add -----
// Write `add(a, b)` that RETURNS a + b.
// your code here

// console.log(add(2, 3));
// TEST 1:  add(2, 3)    ->  5
// TEST 2:  add(-1, 1)   ->  0
// TEST 3:  add(10, 0)   ->  10

// ----- 2. subtract -----
// Write `subtract(a, b)` that RETURNS a - b.
// your code here

// console.log(subtract(5, 3));
// TEST 1:  subtract(5, 3)   ->  2
// TEST 2:  subtract(0, 4)   ->  -4
// TEST 3:  subtract(9, 9)   ->  0

// ----- 3. multiply -----
// Write `multiply(a, b)` that RETURNS a * b.
// your code here

// console.log(multiply(4, 3));
// TEST 1:  multiply(4, 3)   ->  12
// TEST 2:  multiply(7, 0)   ->  0
// TEST 3:  multiply(-2, 5)  ->  -10

// ----- 4. divide (guard the zero) -----
// Write `divide(a, b)` that RETURNS a / b — BUT a real calculator must not
// crash on divide-by-zero. When b is 0, RETURN the string "Error".
// your code here

// console.log(divide(10, 2));
// TEST 1:  divide(10, 2)   ->  5
// TEST 2:  divide(7, 0)    ->  "Error"
// TEST 3:  divide(9, 3)    ->  3

/* ---------- STAGE 2: recognizing operators ---------- */

// ----- 5. isOperator -----
// Write `isOperator(token)` that RETURNS true when token is one of
// "+", "-", "*", "/".
// your code here

// console.log(isOperator("+"));
// TEST 1:  isOperator("+")  ->  true
// TEST 2:  isOperator("/")  ->  true
// TEST 3:  isOperator("9")  ->  false

/* ---------- STAGE 3: the heart — apply ONE operation ---------- */

// ----- 6. applyOp (the dispatcher) -----
// Write `applyOp(a, op, b)` that looks at op and RETURNS the right result by
// CALLING add / subtract / multiply / divide. If op is not a known operator,
// RETURN "Error".
// your code here

// console.log(applyOp(6, "*", 7));
// TEST 1:  applyOp(6, "*", 7)   ->  42
// TEST 2:  applyOp(8, "/", 0)   ->  "Error"
// TEST 3:  applyOp(10, "?", 2)  ->  "Error"

/* ---------- STAGE 4: reading what the user typed ---------- */

// ----- 7. tokenize -----
// A calculator gets a flat string like "3 + 4". Write `tokenize(expr)` that
// RETURNS an array of its pieces split on spaces: ["3", "+", "4"].
// your code here

// console.log(tokenize("3 + 4"));
// TEST 1:  tokenize("3 + 4")        ->  ["3", "+", "4"]
// TEST 2:  tokenize("12 * 5")       ->  ["12", "*", "5"]
// TEST 3:  tokenize("8 - 2 + 1")    ->  ["8", "-", "2", "+", "1"]

/* ---------- STAGE 5: compute a single "a op b" string ---------- */

// ----- 8. calcOne -----
// Write `calcOne(expr)` for a 3-token expression like "3 + 4". Tokenize it,
// turn the two ends into numbers, and RETURN applyOp(left, op, right).
// your code here

// console.log(calcOne("3 + 4"));
// TEST 1:  calcOne("3 + 4")    ->  7
// TEST 2:  calcOne("10 / 0")   ->  "Error"
// TEST 3:  calcOne("6 * 7")    ->  42

/* ---------- STAGE 6: the full engine — chain left to right ---------- */

// ----- 9. calculate (the MVP) -----
// Write `calculate(expr)` for any length like "8 - 2 + 1" or "2 * 3 * 4".
// Tokenize it. Start the running result at the first number. Then walk the
// rest in pairs (operator, number), folding each into the result with
// applyOp. RETURN the final number. (No operator precedence — strictly left
// to right, exactly how a basic phone calculator works.)
// If any step returns "Error", RETURN "Error".
// your code here

// console.log(calculate("8 - 2 + 1"));
// TEST 1:  calculate("8 - 2 + 1")   ->  7
// TEST 2:  calculate("2 * 3 * 4")   ->  24
// TEST 3:  calculate("10 / 0 + 5")  ->  "Error"

/* ---------- STAGE 7: the polish a real calculator needs ---------- */

// ----- 10. round2 (money-friendly display) -----
// Floating point makes 0.1 + 0.2 ugly. Write `round2(n)` that RETURNS n
// rounded to 2 decimal places as a NUMBER. (Math.round(n * 100) / 100.)
// your code here

// console.log(round2(5.005));
// TEST 1:  round2(5.005)        ->  5.01
// TEST 2:  round2(3)            ->  3
// TEST 3:  round2(2.71828)      ->  2.72

// ----- 11. percent -----
// The % key on a calculator turns a number into its fraction of 100.
// Write `percent(n)` that RETURNS n / 100.
// your code here

// console.log(percent(50));
// TEST 1:  percent(50)   ->  0.5
// TEST 2:  percent(200)  ->  2
// TEST 3:  percent(0)    ->  0

// ----- 12. clearToZero (the C button) -----
// Pressing Clear resets the display. Write `clearToZero()` (no input) that
// RETURNS the number 0 — the calculator's starting state.
// your code here

// console.log(clearToZero());
// TEST 1:  clearToZero()        ->  0
// TEST 2:  typeof clearToZero() ->  "number"
// TEST 3:  clearToZero() + 5    ->  5

/* ============================================================
   When 1-12 all pass, calculate(expr) IS a working calculator
   engine. The HTML/buttons would only collect a string and hand
   it to calculate() — every bit of the THINKING lives here.
   ============================================================ */
