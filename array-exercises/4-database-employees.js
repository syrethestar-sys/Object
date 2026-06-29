/* ============================================================
   ARRAYS 4 — EMPLOYEES DATABASE (boss level)
   ------------------------------------------------------------
   HR data. Same tools as the movies file. New twist at the end:
   group AND total a field per group (payroll by department).
   Run:  node 4-database-employees.js
   ============================================================ */

// 15 employees. Fields:
//   name (string), dept (string), salary (number),
//   age (number), years (number at company), remote (boolean)
const employees = [
  {
    name: "Sara",
    dept: "engineering",
    salary: 95000,
    age: 29,
    years: 4,
    remote: true,
  },
  {
    name: "Ali",
    dept: "engineering",
    salary: 110000,
    age: 35,
    years: 7,
    remote: false,
  },
  {
    name: "Omar",
    dept: "sales",
    salary: 60000,
    age: 41,
    years: 10,
    remote: false,
  },
  {
    name: "Lina",
    dept: "sales",
    salary: 72000,
    age: 38,
    years: 6,
    remote: true,
  },
  {
    name: "Maya",
    dept: "marketing",
    salary: 68000,
    age: 27,
    years: 2,
    remote: true,
  },
  {
    name: "Jon",
    dept: "engineering",
    salary: 130000,
    age: 45,
    years: 12,
    remote: false,
  },
  {
    name: "Eva",
    dept: "design",
    salary: 80000,
    age: 31,
    years: 5,
    remote: true,
  },
  {
    name: "Tom",
    dept: "design",
    salary: 75000,
    age: 28,
    years: 3,
    remote: false,
  },
  {
    name: "Nia",
    dept: "marketing",
    salary: 90000,
    age: 33,
    years: 6,
    remote: false,
  },
  {
    name: "Sam",
    dept: "sales",
    salary: 55000,
    age: 24,
    years: 1,
    remote: true,
  },
  {
    name: "Kim",
    dept: "engineering",
    salary: 105000,
    age: 39,
    years: 8,
    remote: true,
  },
  {
    name: "Leo",
    dept: "support",
    salary: 50000,
    age: 26,
    years: 2,
    remote: false,
  },
  {
    name: "Ada",
    dept: "support",
    salary: 58000,
    age: 30,
    years: 4,
    remote: true,
  },
  {
    name: "Max",
    dept: "design",
    salary: 88000,
    age: 36,
    years: 9,
    remote: false,
  },
  {
    name: "Zoe",
    dept: "marketing",
    salary: 72000,
    age: 25,
    years: 1,
    remote: true,
  },
];

/* ============================================================
   BUILD THE 11   (3 cases each — all must pass)
   ============================================================ */
console.log("==1==");

// ----- 1. Count them (WORKED EXAMPLE) -----
function countEmployees(db) {
  return db.length;
}
console.log(countEmployees(employees)); // 15
console.log(countEmployees([]));
console.log(countEmployees([employees[0]]));
// TEST 1:  countEmployees(employees)   ->  15
// TEST 2:  countEmployees([])          ->  0
// TEST 3:  countEmployees([employees[0]]) -> 1
console.log("==2==");
// ----- 2. filter by department -----
// Write `byDept(db, dept)` -> array of employees in that department.
// your code here
function byDept(db, dept) {
  return db.filter((n) => n.dept === dept);
}
console.log(byDept(employees, "engineering").length);
console.log(byDept(employees, "support").length);
console.log(byDept(employees, "legal").length);
// TEST 1:  byDept(employees,"engineering").length   ->  4
// TEST 2:  byDept(employees,"support").length       ->  2
// TEST 3:  byDept(employees,"legal").length         ->  0
console.log("==3==");
// ----- 3. filter + condition — high earners -----
// Write `highEarners(db)` -> employees with salary > 90000.
// your code here
function highEarners(db) {
  return db.filter((n) => n.salary > 90000);
}
console.log(highEarners(employees).length);
console.log(
  highEarners(employees)
    .map((e) => e.name)
    .includes("Jon"),
);
console.log(
  highEarners(employees)
    .map((e) => e.name)
    .includes("Omar"),
);
// TEST 1:  highEarners(employees).length                            ->  4
// TEST 2:  highEarners(employees).map(e => e.name).includes("Jon")  ->  true
// TEST 3:  highEarners(employees).map(e => e.name).includes("Omar") ->  false
console.log("==4==");
// ----- 4. map — just the names -----
// Write `allNames(db)` -> array of every employee name.
// your code here
function allNames(db) {
  return db.map((n) => n.name);
}
console.log(allNames(employees)[0]);
console.log(allNames(employees).length);
console.log(allNames(employees)[14]);
// TEST 1:  allNames(employees)[0]       ->  "Sara"
// TEST 2:  allNames(employees).length   ->  15
// TEST 3:  allNames(employees)[14]      ->  "Zoe"
console.log("==5==");
// ----- 5. find by name -----
// Write `findEmployee(db, name)` -> the one object, or undefined.
// your code here
function findEmployee(db, name) {
  return db.find((n) => n.name === name);
}
console.log(findEmployee(employees, "Eva").dept);
console.log(findEmployee(employees, "Eva").salary);
console.log(findEmployee(employees, "Ghost"));
// TEST 1:  findEmployee(employees,"Eva").dept     ->  "design"
// TEST 2:  findEmployee(employees,"Eva").salary   ->  80000
// TEST 3:  findEmployee(employees,"Ghost")        ->  undefined
console.log("==6==");
// ----- 6. reduce — total payroll -----
// Write `totalPayroll(db)` -> sum of every salary.
// your code here
function totalPayroll(db) {
  return db.reduce((acc, n) => acc + n.salary, 0);
}
console.log(totalPayroll(employees));
console.log(totalPayroll([]));
console.log(totalPayroll([{ salary: 100 }]));
// TEST 1:  totalPayroll(employees)         ->  1208000
// TEST 2:  totalPayroll([])                ->  0
// TEST 3:  totalPayroll([{salary:100}])    ->  100
console.log("==7==");
// ----- 7. average salary -----
// Write `averageSalary(db)` -> mean salary, rounded with Math.round.
// your code here
function averageSalary(db) {
  return Math.round(db.reduce((acc, n) => acc + n.salary, 0) / db.length);
}
console.log(averageSalary(employees));
console.log(averageSalary([{ salary: 100 }, { salary: 200 }]));
console.log(averageSalary([{ salary: 50 }]));
// TEST 1:  averageSalary(employees)                       ->  80533
// TEST 2:  averageSalary([{salary:100},{salary:200}])     ->  150
// TEST 3:  averageSalary([{salary:50}])                   ->  50
console.log("==8==");
// ----- 8. filter boolean — remote workers -----
// Write `remoteWorkers(db)` -> employees where remote is true.
// your code here
function remoteWorkers(db) {
  return db.filter((n) => n.remote === true);
}
console.log(remoteWorkers(employees).length);
console.log(
  remoteWorkers(employees)
    .map((e) => e.name)
    .includes("Sara"),
);
console.log(
  remoteWorkers(employees)
    .map((e) => e.name)
    .includes("Ali"),
);
// TEST 1:  remoteWorkers(employees).length                            ->  8
// TEST 2:  remoteWorkers(employees).map(e => e.name).includes("Sara") ->  true
// TEST 3:  remoteWorkers(employees).map(e => e.name).includes("Ali")  ->  false
console.log("==9==");
// ----- 9. sort — highest paid first -----
// Write `topPaid(db)` -> NEW array sorted by salary, highest first.
// Hint: [...db].sort((a,b) => b.salary - a.salary)
// your code here
function topPaid(db) {
  let top = [...db].sort((a, b) => b.salary - a.salary);
  return top;
}
console.log(topPaid(employees)[0].name);
console.log(topPaid(employees)[0].salary);
console.log(topPaid(employees)[14].name);
// TEST 1:  topPaid(employees)[0].name      ->  "Jon"
// TEST 2:  topPaid(employees)[0].salary    ->  130000
// TEST 3:  topPaid(employees)[14].name     ->  "Leo"
console.log("==10==");
// ----- 10. chain — filter + sort + map -----
// Write `engineerNamesByPay(db)` -> engineers, sorted highest-paid first, names only.
// your code here
function engineerNamesByPay(db) {
  return db
    .filter((n) => n.dept === "engineering")
    .sort((a, b) => b.salary - a.salary)
    .map((n) => n.name);
}
console.log(engineerNamesByPay(employees));
console.log(engineerNamesByPay(employees)[0]);
console.log(engineerNamesByPay(employees).length);
console.log(engineerNamesByPay(employees)[3]);
// TEST 1:  engineerNamesByPay(employees)[0]       ->  "Jon"
// TEST 2:  engineerNamesByPay(employees).length   ->  4
// TEST 3:  engineerNamesByPay(employees)[3]       ->  "Sara"
console.log("==11==");
// ----- 11. GROUP + TOTAL — object of sums (the hard one) -----
// Write `payrollByDept(db)` -> object mapping each dept to its TOTAL salary.
// Hint: result = {}; loop; result[e.dept] = (result[e.dept] || 0) + e.salary.
// your code here
function payrollByDept(db) {
  let result = {};
  for (let n of db) {
    result[n.dept] = (result[n.dept] || 0) + n.salary
  }
  return result;
}
console.log(payrollByDept(employees));
console.log(payrollByDept(employees).engineering);
console.log(payrollByDept(employees).support);
console.log(payrollByDept(employees).sales);
// TEST 1:  payrollByDept(employees).engineering   ->  440000
// TEST 2:  payrollByDept(employees).support       ->  108000
// TEST 3:  payrollByDept(employees).sales         ->  187000
