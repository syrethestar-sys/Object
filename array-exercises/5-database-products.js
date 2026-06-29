/* ============================================================
   ARRAYS 5 — PRODUCTS DATABASE (boss level)
   ------------------------------------------------------------
   Online store data. Same tools again. Final twist: reduce two
   fields together (price * stock = inventory value).
   Run:  node 5-database-products.js
   ============================================================ */

// 15 products. Fields:
//   name (string), category (string), price (number),
//   stock (number), rating (0-5), onSale (boolean)
const products = [
  {
    name: "Laptop",
    category: "electronics",
    price: 1200,
    stock: 5,
    rating: 4.5,
    onSale: false,
  },
  {
    name: "Phone",
    category: "electronics",
    price: 800,
    stock: 12,
    rating: 4.7,
    onSale: true,
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 150,
    stock: 30,
    rating: 4.3,
    onSale: true,
  },
  {
    name: "Desk",
    category: "furniture",
    price: 300,
    stock: 8,
    rating: 4.1,
    onSale: false,
  },
  {
    name: "Chair",
    category: "furniture",
    price: 120,
    stock: 20,
    rating: 4.4,
    onSale: true,
  },
  {
    name: "Lamp",
    category: "furniture",
    price: 45,
    stock: 50,
    rating: 4.0,
    onSale: false,
  },
  {
    name: "Notebook",
    category: "stationery",
    price: 5,
    stock: 200,
    rating: 4.6,
    onSale: false,
  },
  {
    name: "Pen",
    category: "stationery",
    price: 2,
    stock: 500,
    rating: 4.2,
    onSale: true,
  },
  {
    name: "Backpack",
    category: "accessories",
    price: 60,
    stock: 40,
    rating: 4.5,
    onSale: true,
  },
  {
    name: "Watch",
    category: "accessories",
    price: 250,
    stock: 15,
    rating: 4.8,
    onSale: false,
  },
  {
    name: "Monitor",
    category: "electronics",
    price: 400,
    stock: 10,
    rating: 4.6,
    onSale: true,
  },
  {
    name: "Keyboard",
    category: "electronics",
    price: 80,
    stock: 25,
    rating: 4.4,
    onSale: false,
  },
  {
    name: "Mug",
    category: "kitchen",
    price: 12,
    stock: 100,
    rating: 4.1,
    onSale: false,
  },
  {
    name: "Bottle",
    category: "kitchen",
    price: 18,
    stock: 80,
    rating: 4.3,
    onSale: true,
  },
  {
    name: "Blender",
    category: "kitchen",
    price: 90,
    stock: 0,
    rating: 4.0,
    onSale: false,
  },
];

/* ============================================================
   BUILD THE 11   (3 cases each — all must pass)
   ============================================================ */
console.log("==1==");

// ----- 1. Count them (WORKED EXAMPLE) -----
function countProducts(db) {
  return db.length;
}
console.log(countProducts(products)); // 15
// TEST 1:  countProducts(products)   ->  15
// TEST 2:  countProducts([])         ->  0
// TEST 3:  countProducts([products[0]]) -> 1
console.log("==2==");
// ----- 2. filter by category -----
// Write `byCategory(db, cat)` -> array of products in that category.
// your code here
function byCategory(db, cat) {
  return db.filter((n) => n.category === cat);
}
console.log(byCategory(products, "electronics").length);
console.log(byCategory(products, "kitchen").length);
console.log(byCategory(products, "toys").length);
// TEST 1:  byCategory(products,"electronics").length   ->  5
// TEST 2:  byCategory(products,"kitchen").length       ->  3
// TEST 3:  byCategory(products,"toys").length          ->  0
console.log("==3==");
// ----- 3. filter + condition — in stock -----
// Write `inStock(db)` -> products with stock > 0.
// your code here
function inStock(db) {
  return db.filter((n) => n.stock > 0);
}
console.log(inStock(products).length);
console.log(
  inStock(products)
    .map((p) => p.name)
    .includes("Pen"),
);
console.log(
  inStock(products)
    .map((p) => p.name)
    .includes("Blender"),
);
// TEST 1:  inStock(products).length                            ->  14
// TEST 2:  inStock(products).map(p => p.name).includes("Pen")  ->  true
// TEST 3:  inStock(products).map(p => p.name).includes("Blender") -> false
console.log("==4==");
// ----- 4. map — just the names -----
// Write `allNames(db)` -> array of every product name.
// your code here
function allNames(db) {
  return db.map((n) => n.name);
}
console.log(allNames(products)[0]);
console.log(allNames(products).length);
console.log(allNames(products)[14]);
// TEST 1:  allNames(products)[0]       ->  "Laptop"
// TEST 2:  allNames(products).length   ->  15
// TEST 3:  allNames(products)[14]      ->  "Blender"
console.log("==5==");
// ----- 5. find by name -----
// Write `findProduct(db, name)` -> the one object, or undefined.
// your code here
function findProduct(db, name) {
  return db.find((n) => n.name === name);
}
console.log(findProduct(products, "Watch").price);
console.log(findProduct(products, "Watch").rating);
console.log(findProduct(products, "Nope"));
// TEST 1:  findProduct(products,"Watch").price    ->  250
// TEST 2:  findProduct(products,"Watch").rating   ->  4.8
// TEST 3:  findProduct(products,"Nope")           ->  undefined
console.log("==5==");
// ----- 6. reduce — total stock -----
// Write `totalStock(db)` -> sum of every product's stock.
// your code here
function totalStock(db) {
  return db.reduce((acc, n) => acc + n.stock, 0);
}
console.log(totalStock(products));
console.log(totalStock([]));
console.log(totalStock([{ stock: 3 }, { stock: 4 }]));
// TEST 1:  totalStock(products)          ->  1095
// TEST 2:  totalStock([])                ->  0
// TEST 3:  totalStock([{stock:3},{stock:4}]) -> 7
console.log("==7==");
// ----- 7. filter boolean — on sale -----
// Write `onSaleItems(db)` -> products where onSale is true.
// your code here
function onSaleItems(db) {
  return db.filter((n) => n.onSale === true);
}
console.log(onSaleItems(products).length);
console.log(
  onSaleItems(products)
    .map((p) => p.name)
    .includes("Phone"),
);
// TEST 1:  onSaleItems(products).length                             ->  7
// TEST 2:  onSaleItems(products).map(p => p.name).includes("Phone") ->  true
// TEST 3:  onSaleItems(products).map(p => p.name).includes("Laptop")-> false
console.log("==8==");
// ----- 8. filter + condition — expensive -----
// Write `expensive(db)` -> products with price > 200.
// your code here
function expensive(db) {
  return db.filter((n) => n.price > 200);
}
console.log(expensive(products).length);
console.log(
  expensive(products)
    .map((p) => p.name)
    .includes("Watch"),
);
console.log(
  expensive(products)
    .map((p) => p.name)
    .includes("Lamp"),
);

// TEST 1:  expensive(products).length                              ->  5
// TEST 2:  expensive(products).map(p => p.name).includes("Watch")  ->  true
// TEST 3:  expensive(products).map(p => p.name).includes("Lamp")   ->  false
console.log("==9==");
// ----- 9. sort — cheapest first -----
// Write `cheapest(db)` -> NEW array sorted by price, lowest first.
// Hint: [...db].sort((a,b) => a.price - b.price)
// your code here
function cheapest(db) {
  return [...db].sort((a, b) => a.price - b.price);
}
console.log(cheapest(products)[0].name);
console.log(cheapest(products)[0].price);
console.log(cheapest(products)[14].name);
// TEST 1:  cheapest(products)[0].name     ->  "Pen"
// TEST 2:  cheapest(products)[0].price    ->  2
// TEST 3:  cheapest(products)[14].name    ->  "Laptop"
console.log("==10==");
// ----- 10. chain — filter + sort + map -----
// Write `electronicsOnSaleByPrice(db)` -> electronics that are on sale,
// sorted most-expensive first, names only.
// your code here
function electronicsOnSaleByPrice(db) {
  return db
    .filter((n) => n.onSale === true)
    .sort((a, b) => b.price - a.price)
    .map((n) => n.name);
}
console.log(electronicsOnSaleByPrice(products));
console.log(electronicsOnSaleByPrice(products)[0]);
console.log(electronicsOnSaleByPrice(products).length);
console.log(electronicsOnSaleByPrice(products)[2]);
// TEST 1:  electronicsOnSaleByPrice(products)[0]       ->  "Phone"
// TEST 2:  electronicsOnSaleByPrice(products).length   ->  3
// TEST 3:  electronicsOnSaleByPrice(products)[2]       ->  "Headphones"
console.log("==11==");
// ----- 11. reduce TWO fields — inventory value (the hard one) -----
// Write `inventoryValue(db)` -> sum of (price * stock) across all products.
// Hint: db.reduce((acc, p) => acc + p.price * p.stock, 0)
// your code here
function inventoryValue(db) {
  return db.reduce((acc, n) => acc + n.price * n.stock, 0);
}
console.log(inventoryValue(products));
console.log(inventoryValue([]));
console.log(inventoryValue([{price:10,stock:2}]));
// TEST 1:  inventoryValue(products)                  ->  43940
// TEST 2:  inventoryValue([])                        ->  0
// TEST 3:  inventoryValue([{price:10,stock:2}])      ->  20
