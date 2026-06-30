/* ============================================================
   ARRAYS — COUNTRIES DATABASE (100 real countries)
   ------------------------------------------------------------
   100 hand-typed country objects (real places, real capitals,
   real-ish 2023 figures). Each has:
     name (string), capital (string), continent (string),
     population (millions, number), area (km^2, number),
     landlocked (boolean)

   Solve every exercise with ARRAY METHODS — map, filter, find,
   reduce, sort — NOT hand-written for loops (you proved you can
   loop already; this file is about the methods).

   How to use:
   - Write your function where you see  // your code here
   - Delete the "// " on the console.log line to switch it on
   - Run:  node 7-database-countries.js  and match all 3 tests

   The exercises go EASY -> HARD top to bottom. Each later one
   leans on a method from the one before.
   ============================================================ */

// population in millions, area in km^2
const countries = [
  { name: "Nigeria", capital: "Abuja", continent: "Africa", population: 223.8, area: 923768, landlocked: false },
  { name: "Ethiopia", capital: "Addis Ababa", continent: "Africa", population: 126.5, area: 1104300, landlocked: true },
  { name: "Egypt", capital: "Cairo", continent: "Africa", population: 112.7, area: 1002450, landlocked: false },
  { name: "DR Congo", capital: "Kinshasa", continent: "Africa", population: 102.3, area: 2344858, landlocked: false },
  { name: "Tanzania", capital: "Dodoma", continent: "Africa", population: 67.4, area: 945087, landlocked: false },
  { name: "South Africa", capital: "Pretoria", continent: "Africa", population: 60.4, area: 1221037, landlocked: false },
  { name: "Kenya", capital: "Nairobi", continent: "Africa", population: 55.1, area: 580367, landlocked: false },
  { name: "Uganda", capital: "Kampala", continent: "Africa", population: 48.6, area: 241550, landlocked: true },
  { name: "Algeria", capital: "Algiers", continent: "Africa", population: 45.6, area: 2381741, landlocked: false },
  { name: "Sudan", capital: "Khartoum", continent: "Africa", population: 48.1, area: 1886068, landlocked: false },
  { name: "Morocco", capital: "Rabat", continent: "Africa", population: 37.8, area: 446550, landlocked: false },
  { name: "Angola", capital: "Luanda", continent: "Africa", population: 36.7, area: 1246700, landlocked: false },
  { name: "Ghana", capital: "Accra", continent: "Africa", population: 34.1, area: 238533, landlocked: false },
  { name: "Mozambique", capital: "Maputo", continent: "Africa", population: 33.9, area: 801590, landlocked: false },
  { name: "Madagascar", capital: "Antananarivo", continent: "Africa", population: 30.3, area: 587041, landlocked: false },
  { name: "Cameroon", capital: "Yaounde", continent: "Africa", population: 28.6, area: 475442, landlocked: false },
  { name: "Niger", capital: "Niamey", continent: "Africa", population: 27.2, area: 1267000, landlocked: true },
  { name: "Mali", capital: "Bamako", continent: "Africa", population: 23.3, area: 1240192, landlocked: true },
  { name: "Zambia", capital: "Lusaka", continent: "Africa", population: 20.6, area: 752612, landlocked: true },
  { name: "Zimbabwe", capital: "Harare", continent: "Africa", population: 16.7, area: 390757, landlocked: true },
  { name: "Senegal", capital: "Dakar", continent: "Africa", population: 17.7, area: 196722, landlocked: false },
  { name: "Chad", capital: "N'Djamena", continent: "Africa", population: 18.3, area: 1284000, landlocked: true },
  { name: "Tunisia", capital: "Tunis", continent: "Africa", population: 12.4, area: 163610, landlocked: false },
  { name: "Rwanda", capital: "Kigali", continent: "Africa", population: 14.0, area: 26338, landlocked: true },
  { name: "Botswana", capital: "Gaborone", continent: "Africa", population: 2.7, area: 581730, landlocked: true },
  { name: "China", capital: "Beijing", continent: "Asia", population: 1425.7, area: 9596961, landlocked: false },
  { name: "India", capital: "New Delhi", continent: "Asia", population: 1428.6, area: 3287263, landlocked: false },
  { name: "Indonesia", capital: "Jakarta", continent: "Asia", population: 277.5, area: 1904569, landlocked: false },
  { name: "Pakistan", capital: "Islamabad", continent: "Asia", population: 240.5, area: 881912, landlocked: false },
  { name: "Bangladesh", capital: "Dhaka", continent: "Asia", population: 172.9, area: 147570, landlocked: false },
  { name: "Japan", capital: "Tokyo", continent: "Asia", population: 123.3, area: 377975, landlocked: false },
  { name: "Philippines", capital: "Manila", continent: "Asia", population: 117.3, area: 300000, landlocked: false },
  { name: "Vietnam", capital: "Hanoi", continent: "Asia", population: 98.9, area: 331212, landlocked: false },
  { name: "Iran", capital: "Tehran", continent: "Asia", population: 89.2, area: 1648195, landlocked: false },
  { name: "Turkey", capital: "Ankara", continent: "Asia", population: 85.8, area: 783562, landlocked: false },
  { name: "Thailand", capital: "Bangkok", continent: "Asia", population: 71.8, area: 513120, landlocked: false },
  { name: "Myanmar", capital: "Naypyidaw", continent: "Asia", population: 54.6, area: 676578, landlocked: false },
  { name: "South Korea", capital: "Seoul", continent: "Asia", population: 51.7, area: 100210, landlocked: false },
  { name: "Iraq", capital: "Baghdad", continent: "Asia", population: 45.5, area: 438317, landlocked: false },
  { name: "Afghanistan", capital: "Kabul", continent: "Asia", population: 42.2, area: 652230, landlocked: true },
  { name: "Saudi Arabia", capital: "Riyadh", continent: "Asia", population: 36.9, area: 2149690, landlocked: false },
  { name: "Uzbekistan", capital: "Tashkent", continent: "Asia", population: 35.6, area: 447400, landlocked: true },
  { name: "Malaysia", capital: "Kuala Lumpur", continent: "Asia", population: 34.3, area: 330803, landlocked: false },
  { name: "Nepal", capital: "Kathmandu", continent: "Asia", population: 30.9, area: 147181, landlocked: true },
  { name: "Sri Lanka", capital: "Colombo", continent: "Asia", population: 21.9, area: 65610, landlocked: false },
  { name: "Kazakhstan", capital: "Astana", continent: "Asia", population: 19.6, area: 2724900, landlocked: true },
  { name: "Cambodia", capital: "Phnom Penh", continent: "Asia", population: 16.9, area: 181035, landlocked: false },
  { name: "Jordan", capital: "Amman", continent: "Asia", population: 11.3, area: 89342, landlocked: false },
  { name: "Israel", capital: "Jerusalem", continent: "Asia", population: 9.2, area: 20770, landlocked: false },
  { name: "Mongolia", capital: "Ulaanbaatar", continent: "Asia", population: 3.4, area: 1564110, landlocked: true },
  { name: "Russia", capital: "Moscow", continent: "Europe", population: 144.4, area: 17098242, landlocked: false },
  { name: "Germany", capital: "Berlin", continent: "Europe", population: 83.3, area: 357114, landlocked: false },
  { name: "United Kingdom", capital: "London", continent: "Europe", population: 67.7, area: 242495, landlocked: false },
  { name: "France", capital: "Paris", continent: "Europe", population: 64.8, area: 551695, landlocked: false },
  { name: "Italy", capital: "Rome", continent: "Europe", population: 58.9, area: 301340, landlocked: false },
  { name: "Spain", capital: "Madrid", continent: "Europe", population: 47.5, area: 505992, landlocked: false },
  { name: "Ukraine", capital: "Kyiv", continent: "Europe", population: 36.7, area: 603500, landlocked: false },
  { name: "Poland", capital: "Warsaw", continent: "Europe", population: 41.0, area: 312696, landlocked: false },
  { name: "Romania", capital: "Bucharest", continent: "Europe", population: 19.0, area: 238397, landlocked: false },
  { name: "Netherlands", capital: "Amsterdam", continent: "Europe", population: 17.6, area: 41850, landlocked: false },
  { name: "Belgium", capital: "Brussels", continent: "Europe", population: 11.7, area: 30528, landlocked: false },
  { name: "Czechia", capital: "Prague", continent: "Europe", population: 10.5, area: 78867, landlocked: true },
  { name: "Greece", capital: "Athens", continent: "Europe", population: 10.3, area: 131957, landlocked: false },
  { name: "Portugal", capital: "Lisbon", continent: "Europe", population: 10.2, area: 92090, landlocked: false },
  { name: "Sweden", capital: "Stockholm", continent: "Europe", population: 10.6, area: 450295, landlocked: false },
  { name: "Hungary", capital: "Budapest", continent: "Europe", population: 9.6, area: 93028, landlocked: true },
  { name: "Austria", capital: "Vienna", continent: "Europe", population: 8.9, area: 83879, landlocked: true },
  { name: "Switzerland", capital: "Bern", continent: "Europe", population: 8.8, area: 41285, landlocked: true },
  { name: "Bulgaria", capital: "Sofia", continent: "Europe", population: 6.7, area: 110879, landlocked: false },
  { name: "Serbia", capital: "Belgrade", continent: "Europe", population: 6.6, area: 88361, landlocked: true },
  { name: "Denmark", capital: "Copenhagen", continent: "Europe", population: 5.9, area: 43094, landlocked: false },
  { name: "Finland", capital: "Helsinki", continent: "Europe", population: 5.5, area: 338424, landlocked: false },
  { name: "Norway", capital: "Oslo", continent: "Europe", population: 5.5, area: 385207, landlocked: false },
  { name: "Ireland", capital: "Dublin", continent: "Europe", population: 5.1, area: 70273, landlocked: false },
  { name: "Croatia", capital: "Zagreb", continent: "Europe", population: 3.9, area: 56594, landlocked: false },
  { name: "United States", capital: "Washington", continent: "North America", population: 339.9, area: 9833517, landlocked: false },
  { name: "Mexico", capital: "Mexico City", continent: "North America", population: 128.5, area: 1964375, landlocked: false },
  { name: "Canada", capital: "Ottawa", continent: "North America", population: 38.8, area: 9984670, landlocked: false },
  { name: "Guatemala", capital: "Guatemala City", continent: "North America", population: 18.1, area: 108889, landlocked: false },
  { name: "Cuba", capital: "Havana", continent: "North America", population: 11.2, area: 109884, landlocked: false },
  { name: "Haiti", capital: "Port-au-Prince", continent: "North America", population: 11.7, area: 27750, landlocked: false },
  { name: "Dominican Republic", capital: "Santo Domingo", continent: "North America", population: 11.3, area: 48671, landlocked: false },
  { name: "Honduras", capital: "Tegucigalpa", continent: "North America", population: 10.6, area: 112492, landlocked: false },
  { name: "Nicaragua", capital: "Managua", continent: "North America", population: 7.0, area: 130373, landlocked: false },
  { name: "Panama", capital: "Panama City", continent: "North America", population: 4.5, area: 75417, landlocked: false },
  { name: "Brazil", capital: "Brasilia", continent: "South America", population: 216.4, area: 8515767, landlocked: false },
  { name: "Colombia", capital: "Bogota", continent: "South America", population: 52.1, area: 1141748, landlocked: false },
  { name: "Argentina", capital: "Buenos Aires", continent: "South America", population: 45.8, area: 2780400, landlocked: false },
  { name: "Peru", capital: "Lima", continent: "South America", population: 34.4, area: 1285216, landlocked: false },
  { name: "Venezuela", capital: "Caracas", continent: "South America", population: 28.8, area: 916445, landlocked: false },
  { name: "Chile", capital: "Santiago", continent: "South America", population: 19.6, area: 756102, landlocked: false },
  { name: "Ecuador", capital: "Quito", continent: "South America", population: 18.2, area: 256370, landlocked: false },
  { name: "Bolivia", capital: "Sucre", continent: "South America", population: 12.4, area: 1098581, landlocked: true },
  { name: "Paraguay", capital: "Asuncion", continent: "South America", population: 6.9, area: 406752, landlocked: true },
  { name: "Uruguay", capital: "Montevideo", continent: "South America", population: 3.4, area: 176215, landlocked: false },
  { name: "Australia", capital: "Canberra", continent: "Oceania", population: 26.4, area: 7692024, landlocked: false },
  { name: "Papua New Guinea", capital: "Port Moresby", continent: "Oceania", population: 10.3, area: 462840, landlocked: false },
  { name: "New Zealand", capital: "Wellington", continent: "Oceania", population: 5.2, area: 270467, landlocked: false },
  { name: "Fiji", capital: "Suva", continent: "Oceania", population: 0.9, area: 18274, landlocked: false },
  { name: "Solomon Islands", capital: "Honiara", continent: "Oceania", population: 0.7, area: 28896, landlocked: false },
];

/* ============================================================
   BUILD THE 15   (3 test cases each — all must pass)
   Difficulty climbs: length -> map -> filter -> find -> reduce
   -> sort -> chains -> grouping. Don't skip ahead.
   ============================================================ */

// ----- 1. Count them (WORKED EXAMPLE) -----
function countCountries(db) {
  return db.length;
}
console.log(countCountries(countries)); // 100
// TEST 1:  countCountries(countries)        ->  100
// TEST 2:  countCountries([])               ->  0
// TEST 3:  countCountries([countries[0]])   ->  1

// ----- 2. map — every name -----
// Write `allNames(db)` -> array of just the name strings.
// your code here

// console.log(allNames(countries)[0]);
// TEST 1:  allNames(countries)[0]       ->  "Nigeria"
// TEST 2:  allNames(countries)[99]      ->  "Solomon Islands"
// TEST 3:  allNames(countries).length   ->  100

// ----- 3. map — every capital -----
// Write `allCapitals(db)` -> array of just the capital strings.
// your code here

// console.log(allCapitals(countries)[0]);
// TEST 1:  allCapitals(countries)[0]      ->  "Abuja"
// TEST 2:  allCapitals(countries).length  ->  100
// TEST 3:  allCapitals([countries[25]])[0] -> "Beijing"

// ----- 4. filter — by continent -----
// Write `byContinent(db, continent)` -> array of countries on that continent.
// your code here

// console.log(byContinent(countries, "Asia").length);
// TEST 1:  byContinent(countries, "Asia").length      ->  25
// TEST 2:  byContinent(countries, "Oceania").length   ->  5
// TEST 3:  byContinent(countries, "Antarctica").length -> 0

// ----- 5. filter — boolean field -----
// Write `landlockedOnly(db)` -> array of countries where landlocked is true.
// your code here

// console.log(landlockedOnly(countries).length);
// TEST 1:  landlockedOnly(countries).length                       ->  21
// TEST 2:  landlockedOnly(countries).every(x => x.landlocked)     ->  true
// TEST 3:  landlockedOnly([countries[0]]).length                  ->  0

// ----- 6. filter — numeric threshold -----
// Write `biggerThan(db, millions)` -> countries with population > millions.
// your code here

// console.log(biggerThan(countries, 100).length);
// TEST 1:  biggerThan(countries, 100).length   ->  15
// TEST 2:  biggerThan(countries, 200).length   ->  7
// TEST 3:  biggerThan(countries, 5000).length  ->  0

// ----- 7. find — one country by name -----
// Write `findByName(db, name)` -> the single country object, or undefined.
// your code here

// console.log(findByName(countries, "Japan").capital);
// TEST 1:  findByName(countries, "Japan").capital      ->  "Tokyo"
// TEST 2:  findByName(countries, "Brazil").population   ->  216.4
// TEST 3:  findByName(countries, "Atlantis")            ->  undefined

// ----- 8. reduce — total population -----
// Write `totalPopulation(db)` -> sum of every population, rounded to 1 decimal.
// your code here

// console.log(totalPopulation(countries));
// TEST 1:  totalPopulation(countries)              ->  7554.1
// TEST 2:  totalPopulation([])                     ->  0
// TEST 3:  totalPopulation([{population: 10}, {population: 5}]) -> 15

// ----- 9. reduce — average area -----
// Write `averageArea(db)` -> mean of .area, rounded to a whole number.
// your code here

// console.log(averageArea(countries));
// TEST 1:  averageArea(countries)                       ->  1222408
// TEST 2:  averageArea([{area: 100}, {area: 200}])      ->  150
// TEST 3:  averageArea([{area: 50}])                    ->  50

// ----- 10. sort — largest by area -----
// Write `largestByArea(db)` -> NEW array sorted by area, biggest first.
// your code here

// console.log(largestByArea(countries)[0].name);
// TEST 1:  largestByArea(countries)[0].name   ->  "Russia"
// TEST 2:  largestByArea(countries)[1].name   ->  "Canada"
// TEST 3:  largestByArea(countries)[2].name   ->  "United States"

// ----- 11. sort + map — most populous names -----
// Write `mostPopulousNames(db)` -> NEW array of NAMES, highest population first.
// your code here

// console.log(mostPopulousNames(countries)[0]);
// TEST 1:  mostPopulousNames(countries)[0]      ->  "India"
// TEST 2:  mostPopulousNames(countries)[1]      ->  "China"
// TEST 3:  mostPopulousNames(countries).length  ->  100

// ----- 12. chain — filter + sort + map -----
// Write `biggestIn(db, continent)` -> names of that continent's countries,
// most populous first.
// your code here

// console.log(biggestIn(countries, "Europe")[0]);
// TEST 1:  biggestIn(countries, "Europe")[0]            ->  "Russia"
// TEST 2:  biggestIn(countries, "South America")[1]     ->  "Colombia"
// TEST 3:  biggestIn(countries, "Oceania").length       ->  5

// ----- 13. reduce to OBJECT — count by continent -----
// Write `countByContinent(db)` -> object mapping each continent to how many.
// your code here

// console.log(countByContinent(countries).Asia);
// TEST 1:  countByContinent(countries).Asia      ->  25
// TEST 2:  countByContinent(countries).Oceania   ->  5
// TEST 3:  countByContinent(countries)["North America"] -> 10

// ----- 14. reduce to OBJECT — population by continent -----
// Write `populationByContinent(db)` -> object mapping each continent to its
// total population, rounded to 1 decimal.
// your code here

// console.log(populationByContinent(countries).Asia);
// TEST 1:  populationByContinent(countries).Asia      ->  4545.5
// TEST 2:  populationByContinent(countries).Oceania   ->  43.5
// TEST 3:  populationByContinent(countries).Europe    ->  700.7

// ----- 15. THE BOSS — densest country -----
// Density = people per km^2 = (population * 1,000,000) / area.
// Write `densest(db)` -> the NAME of the country with the highest density.
// your code here

// console.log(densest(countries));
// TEST 1:  densest(countries)                                      ->  "Bangladesh"
// TEST 2:  densest([{name:"A",population:1,area:1000000},{name:"B",population:2,area:1000000}]) -> "B"
// TEST 3:  densest([countries[49]])                                ->  "Mongolia"

/* ============================================================
   All 3 pass on all 15 = you can drive real data with array
   methods. That is the whole job of a back-end query layer.
   ============================================================ */
