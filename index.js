/* ============================================================
   LESSON 8 — OBJECTS: EXERCISES + TEST CASES  (EASY EDITION)
   ------------------------------------------------------------
   You know variables, operators, if, loops, strings, and
   functions. Now you bundle related data under ONE name with
   labels: an object. A string is letters in a row; an object is
   VALUES behind KEYS you choose.

       const user = { name: "Sam", age: 20 };
       user.name        // "Sam"   (dot access — key you know)
       user["age"]      // 20      (bracket — key in a variable)

   30 exercises, easy -> hard. 1–24 build the core skills one at a
   time. 25–30 are the CHALLENGE block: LeetCode-style counting and
   a nested mini-project that makes you COMPOSE earlier ideas.

   How to use:
   - Read the exercise, write your function where you see
     // your code here. The test call sits right below, COMMENTED:
         // console.log(makeUser());
     Delete the leading "// " to switch it on, run the file, compare.
   - Blank exercises never crash the file — only switched-on lines
     run. Do the exercises in ANY order, one at a time.
   - Each exercise has 3 TEST CASES: INPUT -> the EXACT value back.
     Run: node lesson-8-objects-tests-easy.js
   - All 3 match = exercise correct.

   COMPARING OBJECTS: two different objects are NEVER === even with
   the same contents. To check an object answer by eye, the test
   shows the expected SHAPE. To check in code, compare
   JSON.stringify(yours) to JSON.stringify(expected).

   Tools you MAY use (new this lesson):
     obj.key / obj["key"]      read & write a property
     key in obj                true if that key exists
     delete obj.key            remove a property
     for (const k in obj) {}   visit every key
     Object.keys(obj)          the keys, e.g. ["name","age"]
     Object.values(obj)        the values
     { ...a, ...b }            spread: copy/merge objects
     .split(" ")               cut a sentence into words
   Plus everything from before: loops, if, %, String()/Number(),
   Math.floor, Math.max/Math.min, function, return.

   THE OBJECT RULE: a key is a LABEL, a value is what sits behind it.
   Reading a missing key gives `undefined` (not an error) — check
   with `in` before you trust a value.

   MUTATE vs COPY: setAge/addField/removeField CHANGE the object you
   pass in. copyObject/omitField/doubleValues hand back a NEW object
   and leave the original alone. Know which kind you are writing.

   NOTE: every exercise uses a DIFFERENT function name, so all your
   answers live in this one file with no clashes.
   ============================================================ */

/* ============================================================
   PART A — MAKE & READ
   ============================================================ */

// ----- 1. Build an object -----
// Write `makeUser()` that takes NO input and RETURNS the object { name: "Sam", age: 20 }.
// your code here
function makeUser() {
  return { name: "Sam", age: 20 };
}

console.log(makeUser().name);
console.log(makeUser().age);
console.log(typeof makeUser());
// TEST 1:  makeUser().name      ->  "Sam"
// TEST 2:  makeUser().age       ->  20
// TEST 3:  typeof makeUser()    ->  "object"

// ----- 2. Read with a dot -----
// Write `getName(user)` that RETURNS the `name` property of the object passed in.
// your code here
function getName(user) {
  return user.name;
}
console.log(getName({ name: "Ada", age: 30 }));
console.log(getName({ name: "Bo", age: 30 }));
console.log(getName({ name: "" }));
// TEST 1:  getName({ name: "Ada", age: 30 })  ->  "Ada"
// TEST 2:  getName({ name: "Bo" })            ->  "Bo"
// TEST 3:  getName({ name: "" })              ->  ""

// ----- 3. Read with a variable key (bracket) -----
// Write `getValue(obj, key)` that RETURNS the value behind `key`. The key is in a
// variable, so you MUST use bracket access obj[key] (dot would look for "key" literally).
// your code here
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue({ a: 1, b: 2 }, "b"));
console.log(getValue({ color: "red" }, "color"));
console.log(getValue({ a: 1 }, "missing"));
// TEST 1:  getValue({ a: 1, b: 2 }, "b")        ->  2
// TEST 2:  getValue({ color: "red" }, "color")  ->  "red"
// TEST 3:  getValue({ a: 1 }, "missing")        ->  undefined

/* ============================================================
   PART B — CHANGE PROPERTIES (add / update / remove / check)
   ============================================================ */

// ----- 4. Update a property -----
// Write `setAge(user, newAge)` that sets user.age to newAge and RETURNS the same user.
// your code here
function setAge(user, newAge) {
  user.age = newAge;
  return user;
}
console.log(setAge({ name: "Sam", age: 20 }, 21).age);
console.log(setAge({ name: "Sam", age: 20 }, 21).name);
console.log(setAge({ age: 5 }, 0).age);
// TEST 1:  setAge({ name: "Sam", age: 20 }, 21).age  ->  21
// TEST 2:  setAge({ name: "Sam", age: 20 }, 21).name ->  "Sam"   (other keys untouched)
// TEST 3:  setAge({ age: 5 }, 0).age                 ->  0

// ----- 5. Add a property with a variable key -----
// Write `addField(obj, key, value)` that adds key = value to obj and RETURNS obj.
// Use bracket set: obj[key] = value.
// your code here
function addField(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(addField({ name: "Sam" }, "age", 20).age);
console.log(addField({}, "x", 5).x);
console.log(addField({ a: 1 }, "a", 9).a);

// TEST 1:  addField({ name: "Sam" }, "age", 20).age   ->  20
// TEST 2:  addField({}, "x", 5).x                      ->  5
// TEST 3:  addField({ a: 1 }, "a", 9).a                ->  9     (existing key gets overwritten)

// ----- 6. Remove a property -----
// Write `removeField(obj, key)` that deletes that key from obj and RETURNS obj.
// Hint: delete obj[key].
// your code here
function removeField(obj, key) {
  delete obj[key];
  return obj;
}
console.log("a" in removeField({ a: 1, b: 2 }, "a"));
console.log("b" in removeField({ a: 1, b: 2 }, "a"));
console.log(removeField({ a: 1, b: 2 }, "a").b);
// TEST 1:  "a" in removeField({ a: 1, b: 2 }, "a")     ->  false
// TEST 2:  "b" in removeField({ a: 1, b: 2 }, "a")     ->  true
// TEST 3:  removeField({ a: 1, b: 2 }, "a").b          ->  2

// ----- 7. Does the key exist? -----
// Write `hasField(obj, key)` that RETURNS true if the key exists, false otherwise.
// Hint: key in obj.  (Note: a key holding undefined still counts as existing — use `in`.)
// your code here
function hasField(obj, key) {
  return key in obj;
}
console.log(hasField({ a: 1 }, "a"));
console.log(hasField({ a: 1 }, "b"));
console.log(hasField({ a: undefined }, "a"));
// TEST 1:  hasField({ a: 1 }, "a")        ->  true
// TEST 2:  hasField({ a: 1 }, "b")        ->  false
// TEST 3:  hasField({ a: undefined }, "a") ->  true

// ----- 8. Increment a counter field -----
// Write `incrementField(obj, key)` that adds 1 to obj[key] and RETURNS obj. If the key
// is missing, treat it as 0 first (so it becomes 1).
// Hint: obj[key] = (obj[key] || 0) + 1.
// your code here
function incrementField(obj, key) {
  obj[key] = (obj[key] || 0) + 1;
  return obj;
}
console.log(incrementField({ a: 1 }, "a").a);
console.log(incrementField({}, "new").new);
console.log(incrementField({ a: 0 }, "a").a);
// TEST 1:  incrementField({ a: 1 }, "a").a       ->  2
// TEST 2:  incrementField({}, "new").new         ->  1     (missing key starts at 0)
// TEST 3:  incrementField({ a: 0 }, "a").a       ->  1

/* ============================================================
   PART C — NESTED, DEFAULTS, METHODS (`this`)
   ============================================================ */

// ----- 9. Reach into a nested object -----
// Write `getCity(user)` that RETURNS user.address.city (an object inside an object).
// your code here
function getCity(user) {
  return user.address.city;
}
console.log(getCity({ name: "Sam", address: { city: "Lagos" } }));
console.log(getCity({ address: { city: "Paris" } }));
console.log(getCity({ address: { city: "", zip: "0" } }));
// console.log(getCity({ name: "Sam", address: { city: "Lagos", zip: "100001" } }));
// TEST 1:  getCity({ name: "Sam", address: { city: "Lagos" } })  ->  "Lagos"
// TEST 2:  getCity({ address: { city: "Paris" } })               ->  "Paris"
// TEST 3:  getCity({ address: { city: "", zip: "0" } })          ->  ""

// ----- 10. Value or fallback -----
// Write `valueOr(obj, key, fallback)` that RETURNS obj[key] if the key EXISTS, else fallback.
// Hint: if (key in obj) return obj[key]; else return fallback.
// your code here
function valueOr(obj, key, fallback) {
  if (key in obj) {
    return obj[key];
  } else {
    return fallback;
  }
}
console.log(valueOr({ a: 1 }, "a", 0));
console.log(valueOr({ a: 1 }, "b", 0));
console.log(valueOr({ a: 0 }, "a", 99));
// TEST 1:  valueOr({ a: 1 }, "a", 0)          ->  1
// TEST 2:  valueOr({ a: 1 }, "b", 0)          ->  0
// TEST 3:  valueOr({ a: 0 }, "a", 99)         ->  0     (key exists, so 0 wins over the fallback)

// ----- 11. A counter object with a method (`this`) -----
// Write `makeCounter()` that RETURNS an object with count: 0 and a method inc()
// that adds 1 to its OWN count and RETURNS the new count.
// Hint: { count: 0, inc() { this.count++; return this.count; } }  — `this` is the object.
// your code here
function makeCounter() {
  return {
    count: 0,
    inc() {
      this.count++;
      return this.count;
    },
  };
}

const c = makeCounter();
console.log(c.inc());
console.log(makeCounter().count);
const a = makeCounter();
a.inc();
a.inc();
console.log(a.count);
const b = makeCounter();
b.inc();
console.log(b.count);
// const c = makeCounter(); console.log(c.inc());
// TEST 1:  makeCounter().count        ->  0
// TEST 2:  const a = makeCounter(); a.inc(); a.inc();  a.count   ->  2
// TEST 3:  const b = makeCounter(); b.inc()                       ->  1

// ----- 12. A bank account with deposit/withdraw -----
// Write `makeBank(start)` that RETURNS an object with balance: start and two methods:
// deposit(n) adds n to the balance, withdraw(n) subtracts n; both RETURN the new balance.
// your code here
function makeBank(start) {
  return {
    balance: start,
    deposit(n) {
      this.balance += n;
      return this.balance;
    },
    withdraw(n) {
      this.balance -= n;
      return this.balance;
    },
  };
}
const acct = makeBank(100);
console.log(acct.deposit(50));
console.log(makeBank(100).deposit(50));
const x = makeBank(100);
x.deposit(50);
x.withdraw(30);
console.log(x.balance);
console.log(makeBank(0).balance);

// const acct = makeBank(100); console.log(acct.deposit(50));
// TEST 1:  makeBank(100).deposit(50)   ->  150
// TEST 2:  const x = makeBank(100); x.deposit(50); x.withdraw(30); x.balance   ->  120
// TEST 3:  makeBank(0).balance         ->  0

/* ============================================================
   PART D — LOOP OVER AN OBJECT (for...in / Object.keys / values)
   ============================================================ */

// ----- 13. Count the keys -----
// Write `countKeys(obj)` that RETURNS how many keys the object has.
// Hint: loop `for (const k in obj) count++`  OR  Object.keys(obj).length.
// your code here
function countKeys(obj) {
  let count = 0;
  for (key in obj) {
    count++;
  }
  return count;
}
console.log(countKeys({ a: 1, b: 2, c: 3 }));
console.log(countKeys({}));
console.log(countKeys({ x: 5 }));

// console.log(countKeys({ a: 1, b: 2, c: 3 }));
// TEST 1:  countKeys({ a: 1, b: 2, c: 3 })  ->  3
// TEST 2:  countKeys({})                    ->  0
// TEST 3:  countKeys({ x: 5 })              ->  1

// ----- 14. Sum the values -----
// Write `sumValues(obj)` that RETURNS the sum of all (numeric) values.
// Hint: total = 0; for (const k in obj) total += obj[k].
// your code here
function sumValues(obj) {
  let total = 0;
  for (key in obj) {
    total += obj[key];
  }
  return total;
}
console.log(sumValues({ a: 1, b: 2, c: 3 }));
console.log(sumValues({ x: 10 }));
console.log(sumValues({}));

// console.log(sumValues({ a: 1, b: 2, c: 3 }));
// TEST 1:  sumValues({ a: 1, b: 2, c: 3 })  ->  6
// TEST 2:  sumValues({ x: 10 })             ->  10
// TEST 3:  sumValues({})                    ->  0

// ----- 15. Biggest value -----
// Write `maxValue(obj)` that RETURNS the largest value. Assume at least one key.
// Hint: start `best` from -Infinity, then compare each value.
// your code here
function maxValue(obj) {
  let best = -Infinity;
  for (let key in obj) {
    if (obj[key] > best) {
      best = obj[key];
    }
  }
  return best;
}
console.log(maxValue({ a: 5, b: 9, c: 2 }));
console.log(maxValue({ x: 7 }));
console.log(maxValue({ a: -3, b: -1 }));
// console.log(maxValue({ a: 5, b: 9, c: 2 }));
// TEST 1:  maxValue({ a: 5, b: 9, c: 2 })     ->  9
// TEST 2:  maxValue({ x: 7 })                 ->  7
// TEST 3:  maxValue({ a: -3, b: -1 })         ->  -1

// ----- 16. Key with the biggest value -----
// Write `keyOfMax(obj)` that RETURNS the KEY whose value is largest (first one if tied).
// Hint: track both bestKey and bestVal as you loop.
// your code here
function keyOfMax(obj) {
  let bestKey = "";
  let bestVal = -Infinity;
  for (let key in obj) {
    if (obj[key] > bestVal) {
      bestVal = obj[key];
      bestKey = key;
    }
  }
  return bestKey;
}
console.log(keyOfMax({ math: 80, art: 95, gym: 88 }));
console.log(keyOfMax({ a: 5, b: 9, c: 2 }));
console.log(keyOfMax({ only: 1 }));
// TEST 1:  keyOfMax({ math: 80, art: 95, gym: 88 })  ->  "art"
// TEST 2:  keyOfMax({ a: 5, b: 9, c: 2 })            ->  "b"
// TEST 3:  keyOfMax({ only: 1 })                     ->  "only"

// ----- 17. Average of the values -----
// Write `averageValue(obj)` that RETURNS the mean of the values (sum divided by count).
// Hint: total and count together in one loop, then total / count.
// your code here
function averageValue(obj) {
  let total = 0;
  let count = 0;
  for (let key in obj) {
    count++;
    total += obj[key];
  }
  return total / count;
}
console.log(averageValue({ a: 2, b: 4, c: 6 }));
console.log(averageValue({ x: 10 }));
console.log(averageValue({ a: 1, b: 2 }));
// TEST 1:  averageValue({ a: 2, b: 4, c: 6 })  ->  4
// TEST 2:  averageValue({ x: 10 })             ->  10
// TEST 3:  averageValue({ a: 1, b: 2 })        ->  1.5

// ----- 18. Double every value (new object) -----
// Write `doubleValues(obj)` that RETURNS a NEW object with the same keys but every
// value times 2. The original must stay untouched.
// Hint: out = {}; for (const k in obj) out[k] = obj[k] * 2.
// your code here
function doubleValues(obj) {
  let out = {};
  for (const key in obj) {
    out[key] = obj[key] * 2;
  }
  return out;
}
console.log(doubleValues({ a: 1, b: 2 }));
console.log(doubleValues({ x: 0 }));
console.log(doubleValues({}));
// TEST 1:  doubleValues({ a: 1, b: 2 })  ->  { a: 2, b: 4 }
// TEST 2:  doubleValues({ x: 0 })        ->  { x: 0 }
// TEST 3:  doubleValues({})              ->  {}

// ----- 19. Render key=value pairs -----
// Write `toPairs(obj)` that RETURNS "key=value" for each pair, joined by ", ".
// Hint: build a string; add ", " before every pair except the first.
// your code here
function toPairs(obj) {
  let pair = "";
  for (let key in obj) {
    if (pair !== "") {
      pair += ", ";
    }
    pair += key + "=" + obj[key];
  }
  return pair;
}
console.log(toPairs({ a: 1, b: 2 }));
console.log(toPairs({ x: 5 }));
console.log(toPairs({}));
// TEST 1:  toPairs({ a: 1, b: 2 })  ->  "a=1, b=2"
// TEST 2:  toPairs({ x: 5 })        ->  "x=5"
// TEST 3:  toPairs({})              ->  ""

/* ============================================================
   PART E — OBJECT AS A MAP / COUNTER
   The object stops being a fixed record and becomes a lookup
   table you build as you go — the classic "frequency counter".
   ============================================================ */

// ----- 20. Letter count -----
// Write `letterCount(word)` that RETURNS an object mapping each letter to how many
// times it appears. Hint: counts = {}; for each char, if missing start at 0, then +1.
//   if (counts[ch] === undefined) counts[ch] = 0;  counts[ch]++;
// your code here
function letterCount(word) {
  let counts = {};
  for (const char of word) {
    if (counts[char] === undefined) counts[char] = 0;
    counts[char]++;
  }
  return counts;
}
console.log(letterCount("hello"));
console.log(letterCount("aaa"));
console.log(letterCount(""));
console.log("--21--");

// TEST 1:  letterCount("hello")  ->  { h: 1, e: 1, l: 2, o: 1 }
// TEST 2:  letterCount("aaa")    ->  { a: 3 }
// TEST 3:  letterCount("")       ->  {}     (empty word, empty object)

// ----- 21. Length of each word -----
// Write `wordLengths(sentence)` that RETURNS an object mapping each word to its length.
// Hint: sentence.split(" ") gives the words; loop them, set obj[word] = word.length.
// your code here
function wordLengths(sentence) {
  let count = {};
  let words = sentence.split(" ");
  for (const word of words) {
    count[word] = word.length;
  }
  return count;
}

console.log(wordLengths("the cat sat"));
// TEST 1:  wordLengths("the cat sat")  ->  { the: 3, cat: 3, sat: 3 }
// TEST 2:  wordLengths("hi there")     ->  { hi: 2, there: 5 }
// TEST 3:  wordLengths("one")          ->  { one: 3 }
console.log("--22--");
// ----- 22. Flip keys and values -----
// Write `invert(obj)` that RETURNS a new object where each value becomes a key and
// each key becomes its value. Assume values are unique strings/numbers.
// Hint: out = {}; for (const k in obj) out[obj[k]] = k.
// your code here
function invert(obj) {
  let out = {};
  for (const key in obj) {
    out[obj[key]] = key;
  }
  return out;
}
console.log(invert({ a: "x", b: "y" }));
// TEST 1:  invert({ a: "x", b: "y" })   ->  { x: "a", y: "b" }
// TEST 2:  invert({ one: 1 })           ->  { "1": "one" }   (number value becomes a key)
// TEST 3:  invert({})                   ->  {}

/* ============================================================
   PART F — COPY (new object, original untouched)
   ============================================================ */
console.log("--23--");
// ----- 23. Shallow copy -----
// Write `copyObject(obj)` that RETURNS a NEW object with the same keys and values.
// Changing the copy must NOT change the original. Hint: { ...obj }.
// your code here
function copyObject(obj) {
  return { ...obj };
}
console.log(copyObject({ a: 1, b: 2 }).a);
const o = { a: 1 };
console.log(copyObject(o) === o);
console.log(copyObject({}));
// TEST 1:  copyObject({ a: 1, b: 2 }).a   ->  1
// TEST 2:  const o = { a: 1 }; copyObject(o) === o   ->  false   (a NEW object, not the same one)
// TEST 3:  copyObject({})                 ->  {}
console.log("--24--");
// ----- 24. Omit a key WITHOUT mutating (reuse copyObject) -----
// Write `omitField(obj, key)` that RETURNS a NEW object with that key removed, leaving
// the original untouched. (Contrast removeField in ex 6, which mutates.)
// Hint: copyObject first, then delete the key from the copy.
// your code here
function omitField(obj, key) {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
}
console.log(omitField({ a: 1, b: 2 }, "a"));
const p = { a: 1, b: 2 };
console.log(omitField(p, "a"));
console.log("a" in o);
console.log(omitField({ a: 1 }, "a"));
// TEST 1:  omitField({ a: 1, b: 2 }, "a")                  ->  { b: 2 }
// TEST 2:  const o = { a: 1, b: 2 }; omitField(o, "a"); "a" in o   ->  true   (original kept)
// TEST 3:  omitField({ a: 1 }, "a")                        ->  {}

/* ============================================================
   PART G — CHALLENGE BLOCK (25–30)  (the object is your tool)
   Same hash-map trick the real LeetCode problems lean on: count
   things in an object, then read the counts back. The last two
   COMPOSE earlier functions over nested data — the real test.
   ============================================================ */
console.log("--25--");
// ----- 25. First Unique Character  (LeetCode 387 lite) -----
// Write `firstUniqueChar(word)` -> the FIRST character that appears exactly once.
// If none, RETURN "". Hint: count every char into an object, then walk the word again
// and return the first char whose count is 1.
// your code here
function firstUniqueChar(word) {
  let counts = {};
  for (let char of word) {
    if (counts[char] === undefined) counts[char] = 0;
    counts[char]++;
  }
  for (const ch of word) {
    if (counts[ch] === 1) {
      return ch;
    }
  }
  return "";
}
console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("swiss"));
console.log(firstUniqueChar("aabb"));
// EXAMPLE 1:  firstUniqueChar("leetcode")  ->  "l"
// EXAMPLE 2:  firstUniqueChar("swiss")     ->  "w"
// EXAMPLE 3:  firstUniqueChar("aabb")      ->  ""    (every char repeats)

// ----- 26. Valid Anagram  (LeetCode 242) -----
// Write `areAnagrams(a, b)` -> true if b is a rearrangement of a (same letters, same
// counts). Hint: if lengths differ -> false; count a into an object; walk b subtracting;
// any count going negative or a missing key -> false.
// your code here

// console.log(areAnagrams("listen", "silent"));
// EXAMPLE 1:  areAnagrams("listen", "silent")  ->  true
// EXAMPLE 2:  areAnagrams("hello", "world")    ->  false
// EXAMPLE 3:  areAnagrams("a", "aa")           ->  false   (different lengths)

// ----- 27. Can Form a Palindrome  (LeetCode 266 lite) -----
// Write `canFormPalindrome(word)` -> true if the letters can be rearranged into a
// palindrome. Rule: at most ONE letter may have an odd count. Hint: build counts,
// then count how many counts are odd; ok if that total is 0 or 1.
// your code here

// console.log(canFormPalindrome("aabb"));
// EXAMPLE 1:  canFormPalindrome("aabb")     ->  true    (aabb -> "abba")
// EXAMPLE 2:  canFormPalindrome("abc")      ->  false   (three odd counts)
// EXAMPLE 3:  canFormPalindrome("racecar")  ->  true    (only e is odd)

// ----- 28. Merge Keeping the Max -----
// Write `mergeMax(a, b)` -> a NEW object with every key from both; when a key is in
// BOTH, keep the LARGER value. Hint: copy a, then for each key in b use Math.max if the
// key already exists, else just take b's value.
// your code here

// console.log(mergeMax({ a: 1, b: 5 }, { a: 3, b: 2, c: 9 }));
// EXAMPLE 1:  mergeMax({ a: 1, b: 5 }, { a: 3, b: 2, c: 9 })  ->  { a: 3, b: 5, c: 9 }
// EXAMPLE 2:  mergeMax({}, { x: 1 })                          ->  { x: 1 }
// EXAMPLE 3:  mergeMax({ k: 4 }, { k: 2 })                    ->  { k: 4 }

/* ------------------------------------------------------------
   NESTED MINI-PROJECT (29–30): one BIG object, three levels deep.
   THE RULE FOR DEEP DATA: build BOTTOM-UP. Write the small brick
   first (studentAverage), then the next function CALLS it
   (classAverage). Each layer trusts the layer below.

   SCHOOL is real data below (NOT commented) so the tests run.
   Do NOT edit it — your functions must work on it as-is.
   ------------------------------------------------------------ */

const SCHOOL = {
  name: "Lagos High",
  passMark: 70,
  classes: {
    jss1: {
      teacher: "Mr. Ade",
      students: {
        ana: { math: 90, english: 80, science: 70 }, // average 80
        ben: { math: 60, english: 50, science: 40 }, // average 50
      },
    },
    jss2: {
      teacher: "Ms. Bola",
      students: {
        cleo: { math: 100, english: 90, science: 80 }, // average 90
        dare: { math: 60, english: 60, science: 60 }, // average 60
      },
    },
  },
};

// ----- 29. One student's average (the bottom brick) -----
// Write `studentAverage(scores)` where scores is a plain { subject: number } object.
// RETURN the mean of the values. Everything in the next exercise calls this.
// Hint: total + count in one for...in loop, then total / count (like ex 17).
// your code here

// console.log(studentAverage({ math: 90, english: 80, science: 70 }));
// TEST 1:  studentAverage({ math: 90, english: 80, science: 70 })  ->  80
// TEST 2:  studentAverage({ math: 60, english: 60, science: 60 })  ->  60
// TEST 3:  studentAverage({ a: 1, b: 2 })                          ->  1.5

// ----- 30. A class average (CALL studentAverage) -----
// Write `classAverage(school, classId)` that RETURNS the mean of the students' averages
// in that class. Loop the students with for...in, CALL studentAverage on each one's
// scores, total them, divide by the count. This is the COMPOSE finale.
// your code here

// console.log(classAverage(SCHOOL, "jss1"));
// TEST 1:  classAverage(SCHOOL, "jss1")  ->  65    (80 + 50, / 2)
// TEST 2:  classAverage(SCHOOL, "jss2")  ->  75    (90 + 60, / 2)
// TEST 3:  classAverage({ classes: { x: { students: { p: { a: 10 }, q: { a: 20 } } } } }, "x")  ->  15

/* ============================================================
   All 3 tests match for an exercise = you got it right.
   Any mismatch = a bug to hunt. Happy object-ing!
   ============================================================ */
