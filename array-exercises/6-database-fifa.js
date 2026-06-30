/* ============================================================
   ARRAYS 6 — FIFA PLAYERS DATABASE (final boss: GROUPING)
   ------------------------------------------------------------
   187 players. Files 3–5 grouped with a hand-written loop.
   THIS file does grouping the array-method way: reduce builds
   an OBJECT, then Object.entries turns it back into an array
   you can sort. No `for` loops anywhere — methods only.
   Run:  node 6-database-fifa.js
   ============================================================ */

// const { log } = require("console");

// ---- DATA (generated with array methods, 100% deterministic) ----
// Fields: id, name, nation, club, position (GK/DEF/MID/FWD),
//         age, rating (60-99), goals, value (millions €)
const NATIONS = [
  "Brazil",
  "France",
  "Argentina",
  "Spain",
  "England",
  "Germany",
  "Portugal",
  "Netherlands",
];
const CLUBS = [
  "Madrid",
  "Barca",
  "City",
  "Bayern",
  "PSG",
  "Liverpool",
  "Juventus",
  "Milan",
];
function positionFor(i) {
  const r = (i * 7) % 10; // spreads 0-9 evenly
  return r < 2 ? "GK" : r < 5 ? "DEF" : r < 8 ? "MID" : "FWD";
}
const players = Array.from({ length: 187 }, (_, i) => {
  const rating = 60 + ((i * 17) % 40);
  return {
    id: i + 1,
    name: `Player ${i + 1}`,
    nation: NATIONS[(i * 7) % NATIONS.length],
    club: CLUBS[(i * 3) % CLUBS.length],
    position: positionFor(i),
    age: 18 + ((i * 13) % 20),
    rating,
    goals: (i * 11) % 35,
    value: (rating - 50) * 3 + ((i * 11) % 35),
  };
});

/* ============================================================
   GROUPING CHEAT SHEET (the only new idea in this file)
   ------------------------------------------------------------
   Grouping = turn a flat ARRAY into an OBJECT keyed by a field.
   The engine is reduce: start with {}, fold each item in.

   // COUNT per key:  {} -> { key: howMany }
   // arr.reduce((acc, x) => {
   //   acc[x.field] = (acc[x.field] || 0) + 1;   // +1 each time
   //   return acc;                                // ALWAYS return acc
   // }, {});

   // SUM per key:  swap the +1 for + x.someNumber
   //   acc[x.field] = (acc[x.field] || 0) + x.amount;

   // BUCKET per key:  collect the whole items into arrays
   //   (acc[x.field] ||= []).push(x);   // ||= makes the [] first time

   // OBJECT <-> ARRAY bridge (so you can sort groups):
   //   Object.keys(o)     -> ["GK","DEF",...]
   //   Object.values(o)   -> [38, 56, ...]
   //   Object.entries(o)  -> [["GK",38], ["DEF",56], ...]   <-- pairs!
   //   Object.fromEntries(pairs) -> back to an object
   //
   //   "sort groups by their number, biggest first":
   //   Object.entries(o).sort((a,b) => b[1] - a[1]).map(([k]) => k)
   ============================================================ */

/* ============================================================
   BUILD THE 12   (3 cases each — all must pass)
   ============================================================ */
console.log("==1==");

// ----- 1. bucket per key (WORKED EXAMPLE) -----
// Group players into { position: [those players] }.
function groupByPosition(db) {
  return db.reduce((acc, p) => {
    (acc[p.position] ||= []).push(p);
    return acc;
  }, {});
}
console.log(groupByPosition(players).GK.length); // 38
console.log(groupByPosition(players)); // 38
// TEST 1:  groupByPosition(players).GK.length            ->  38
// TEST 2:  groupByPosition(players).DEF.length           ->  56
// TEST 3:  Object.keys(groupByPosition(players)).length  ->  4
console.log("==2==");

// ----- 2. count per key — clubs -----
// Write `countByClub(db)` -> { club: howMany players }.
// your code here
function countByClub(db) {
  let total = {};
  for (let player of db) {
    total[player.club] = (total[player.club] || 0) + 1;
  }
  return total;
}
console.log(countByClub(players).Madrid);
console.log(countByClub(players).Liverpool);
console.log(Object.keys(countByClub(players)).length);
// TEST 1:  countByClub(players).Madrid             ->  24
// TEST 2:  countByClub(players).Liverpool          ->  23
// TEST 3:  Object.keys(countByClub(players)).length ->  8
console.log("==3==");

// ----- 3. count per key — positions -----
// Write `countByPosition(db)` -> { position: howMany }.
// your code here
function countByPosition(db) {
  let count = {};
  for (let player of db) {
    count[player.position] = (count[player.position] || 0) + 1;
  }
  return count;
}
console.log(countByPosition(players).MID);
console.log(countByPosition(players).GK);
console.log(countByPosition(players).FWD);
// TEST 1:  countByPosition(players).GK    ->  38
// TEST 2:  countByPosition(players).MID   ->  56
// TEST 3:  countByPosition(players).FWD   ->  37
console.log("==4==");

// ----- 4. sum per key — goals per nation -----
// Write `goalsByNation(db)` -> { nation: total goals }.
// your code here
function goalsByNation(db) {
  let total = {};
  for (let goal of db) {
    total[goal.nation] = (total[goal.nation] || 0) + goal.goals;
  }
  return total;
}

console.log(goalsByNation(players).Portugal);
console.log(goalsByNation(players).Germany);
console.log(goalsByNation(players).Brazil);
// TEST 1:  goalsByNation(players).Portugal   ->  456
// TEST 2:  goalsByNation(players).Germany    ->  343
// TEST 3:  goalsByNation(players).Brazil     ->  348
console.log("==5==");

// ----- 5. sum per key — squad value per club -----
// Write `valueByClub(db)` -> { club: total value }.
// your code here
function valueByClub(db) {
  let total = {};
  for (let v of db) {
    total[v.club] = (total[v.club] || 0) + v.value;
  }
  return total;
}
console.log(valueByClub(players).Liverpool);
console.log(valueByClub(players).Madrid);
console.log(valueByClub(players).City);
// TEST 1:  valueByClub(players).Liverpool   ->  2770
// TEST 2:  valueByClub(players).Madrid      ->  2196
// TEST 3:  valueByClub(players).City        ->  2599
console.log("==6==");

// ----- 6. group THEN average — rating per position -----
// Write `avgRatingByPosition(db)` -> { position: avg rating, Math.round }.
// Hint: groupByPosition first, then Object.fromEntries(Object.entries(...).map(...)).
// your code here
function avgRatingByPosition(db) {
  return Object.fromEntries(
    Object.entries(groupByPosition(db)).map(([pos, group]) => {
      let sum = group.reduce((acc, player) => acc + player.rating, 0);
      let avg = Math.round(sum / group.length);
      return [pos, avg];
    }),
  );
}
console.log(avgRatingByPosition(players).FWD);
// TEST 1:  avgRatingByPosition(players).FWD   ->  84
// TEST 2:  avgRatingByPosition(players).GK    ->  76
// TEST 3:  avgRatingByPosition(players).DEF   ->  78
console.log("==7==");

// ----- 7. group THEN pick max — best player per position -----
// Write `bestByPosition(db)` -> { position: NAME of highest-rated player }.
// Hint: per group, v.reduce((best,p) => p.rating > best.rating ? p : best).name
// your code here
function bestByPosition(db) {
  return Object.fromEntries(
    Object.entries(groupByPosition(db)).map(([pos, group]) => {
      let bestRate = group.reduce((best, p) =>
        p.rating > best.rating ? p : best,
      ).name;
      return [pos, bestRate];
    }),
  );
}
console.log(bestByPosition(players).FWD);
// TEST 1:  bestByPosition(players).FWD   ->  "Player 8"
// TEST 2:  bestByPosition(players).DEF   ->  "Player 3"
// TEST 3:  bestByPosition(players).GK    ->  "Player 24"
console.log("==8==");

// ----- 8. count into custom buckets — age brackets -----
// Write `countByAgeBracket(db)` -> { u21, prime, vet }.
//   age <= 21 -> "u21",  22..29 -> "prime",  30+ -> "vet"
// Hint: compute the bracket string, then the same count pattern.
// your code here
function countByAgeBracket(db) {
  let result = {};
  let bracket = "";
  for (let player of db) {
    if (player.age <= 21) {
      bracket = "u21";
    } else if (player.age >= 22 && player.age <= 29) {
      bracket = "prime";
    } else {
      bracket = "vet";
    }
    result[bracket] = (result[bracket] || 0) + 1;
  }
  return result;
}
console.log(countByAgeBracket(players));
console.log(countByAgeBracket(players).u21);
console.log(countByAgeBracket(players).prime);
console.log(countByAgeBracket(players).vet);
// TEST 1:  countByAgeBracket(players).u21     ->  37
// TEST 2:  countByAgeBracket(players).prime   ->  74
// TEST 3:  countByAgeBracket(players).vet     ->  76
console.log("==9==");
// ----- 9. group -> entries -> filter — clubs with a big squad -----
// Write `clubsWithAtLeast(db, n)` -> array of club names having n+ players.
// Hint: Object.entries(countByClub(db)).filter(([,c]) => c >= n).map(([k]) => k)
// your code here
function clubsWithAtLeast(db, n) {
  return Object.entries(countByClub(db))
    .filter(([, c]) => c >= n)
    .map(([k]) => k);
}
console.log(clubsWithAtLeast(players, 24));
console.log(clubsWithAtLeast(players, 24).length);
console.log(clubsWithAtLeast(players, 23).length);
console.log(clubsWithAtLeast(players, 99).length);
// TEST 1:  clubsWithAtLeast(players, 24).length   ->  3
// TEST 2:  clubsWithAtLeast(players, 23).length   ->  8
// TEST 3:  clubsWithAtLeast(players, 99).length   ->  0
console.log("==10==");
// ----- 10. group -> entries -> sort -> map — leaderboard -----
// Write `nationsByGoals(db)` -> nation names sorted by total goals, most first.
// your code here
function nationsByGoals(db) {
  return Object.entries(goalsByNation(db))
    .sort((a, b) => b[1] - a[1])
    .map(([nation]) => nation);
}
console.log(nationsByGoals(players)[0]);
console.log(nationsByGoals(players)[7]);
console.log(nationsByGoals(players).length);
// TEST 1:  nationsByGoals(players)[0]       ->  "Portugal"
// TEST 2:  nationsByGoals(players)[7]       ->  "Germany"
// TEST 3:  nationsByGoals(players).length   ->  8
console.log("==11==");

// ----- 11. group -> entries -> sort -> take one — the winner -----
// Write `richestClub(db)` -> the single club name with the highest total value.
// your code here
function richestClub(db) {
  return Object.entries(valueByClub(db))
    .sort((a, b) => b[1] - a[1])
    .map(([nation]) => nation)[0];
}
console.log(richestClub(players));
console.log(richestClub([{ club: "X", value: 5 }]));
console.log(
  richestClub([
    { club: "A", value: 1 },
    { club: "B", value: 9 },
  ]),
);
// TEST 1:  richestClub(players)                       ->  "Liverpool"
// TEST 2:  richestClub([{club:"X",value:5}])          ->  "X"
// TEST 3:  richestClub([{club:"A",value:1},{club:"B",value:9}]) -> "B"
console.log("==12==");

// ----- 12. NESTED report — object of objects (the hard one) -----
// Write `positionReport(db)` -> { position: { count, avgRating, totalGoals } }.
// Group once, then map each group to its three stats. Real dashboards look exactly like this.
// your code here
function positionReport(db) {
  return Object.fromEntries(
    Object.entries(groupByPosition(db)).map(([pos, group]) => {
      let count = group.length;
      let totalRating = group.reduce((best, p) => best + p.rating, 0);
      let avgRating = Math.round(totalRating / count);
      let totalGoals = group.reduce((acc, c) => acc + c.goals, 0);
      return [pos, { count, avgRating, totalGoals }];
    }),
  );
}
console.log(positionReport(players));
console.log(positionReport(players).FWD.count);
console.log(positionReport(players).MID.avgRating);
console.log(positionReport(players).DEF.totalGoals);
// TEST 1:  positionReport(players).FWD.count       ->  37
// TEST 2:  positionReport(players).MID.avgRating   ->  81
// TEST 3:  positionReport(players).DEF.totalGoals  ->  959

/* ============================================================
   HOW GROUPING IS USED IN REAL LIFE
   ------------------------------------------------------------
   This IS the SQL `GROUP BY` you'll meet in every backend job:
       SELECT position, COUNT(*), AVG(rating)
       FROM players GROUP BY position;
   ...is exactly exercise 12, done in JS instead of the database.

   You reach for grouping whenever raw rows must become a summary:
   • Dashboards  — "players per club", "goals per nation" (charts
     are just grouped counts/sums fed to a bar chart).
   • Leaderboards / rankings — group, total, sort (ex. 10 & 11).
   • Reports & KPIs — averages and totals per category (ex. 6, 12).
   • Filters / facets — the "(24)" next to each club on a shop's
     sidebar is countByClub.
   • Buckets / histograms — age brackets, price ranges (ex. 8).
   Master reduce-into-an-object and you can summarize ANY dataset.
   ============================================================ */
