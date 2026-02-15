// console.log("Hello Three Assignment");
// console.log("===== SET BEHAVIOR TASK ====__");

// // Step 1: Create Set
// const mySet = new Set();
// console.log("Initial Set:", mySet);

// // Step 2: Add different values
// let num = 10;
// let str = "Hello";
// let obj = { name: "Zaheer" };
// let arr = [1, 2, 3];

// mySet.add(num);
// mySet.add(str);
// mySet.add(obj);
// mySet.add(arr);

// console.log("\nAfter adding different types:");
// console.log(mySet);

// mySet.add(10);          
// mySet.add("Hello");     
// mySet.add(obj);         
// mySet.add(arr);         

// console.log("\nAfter adding duplicates:");
// console.log(mySet);

// mySet.add({ name: "Zaheer" }); 
// mySet.add([1, 2, 3]);         

// console.log("\nAfter adding new object & array (same values but new reference):");
// console.log(mySet);

// obj.name = "Ali";

// console.log("\nAfter modifying object:");
// console.log(mySet);

// console.log("\nFinal Set values:");
// mySet.forEach((value) => {
//   console.log(value);
// });


// _______________________________________
// console.log("===== MAP vs OBJECT TASK =====");

// let keyObj = { id: 1 };

// // ---------- OBJECT ----------
// const myObj = {};

// console.log("\n--- OBJECT ---");

// myObj.name = "Zaheer";
// myObj.age = 18;
// myObj[keyObj] = "Object Key Value"; 

// console.log("Object after adding values:");
// console.log(myObj);

// console.log("\nGet values from Object:");
// console.log("name:", myObj.name);
// console.log("age:", myObj.age);

// // Problem: _-object key convert ho jata hai string me
// console.log("object key:", myObj[keyObj]); 

// // ---------- MAP ----------
// const myMap = new Map();

// console.log("\n--- MAP ---");

// myMap.set("name", "Zaheer");
// myMap.set("age", 18);
// myMap.set(keyObj, "Object Key Value");

// console.log("Map after adding values:");
// console.log(myMap);

// console.log("\nGet values from Map:");
// console.log("name:", myMap.get("name"));
// console.log("age:", myMap.get("age"));
// console.log("object key:", myMap.get(keyObj));

// console.log("\nSize comparison:");
// console.log("Object size:", Object.keys(myObj).length);
// console.log("Map size:", myMap.size);
// +_______________________________
// console.log("===== DEFAULT VALUE TRAP =====");

// function test(a = 10) {
//   console.log("Value of a:", a);
// }

// console.log("\nCase 1: Passing undefined");
// test(undefined);

// console.log("\nCase 2: Passing null");
// test(null);

// console.log("\nCase 3: Passing real value (5)");
// test(5);
// _______________________________________________


// console.log("===== SIMPLE TASK =====");

// function test(
//   fn = () => console.log("Default function"),
//   obj = { name: "Zaheer" }
// ) {
//   fn(); // functin call

//   obj.name = "Ali"; // object change
//   console.log("Inside function:", obj);
// }

// test();


// let myObj = { name: "Initial" };

// test(() => console.log("Custom function"), myObj);

// console.log("Outside function:", myObj);

// ___________________________________
// console.log("===== FUNCTIONS AS DATA =====");

// // 1. Function in variable
// const greet = function () {
//   return "Hello Zaheer";
// };

// console.log("Function stored in variable:", greet());

// // 2. Function as argument
// function runFunction(fn) {
//   return fn();
// }

// console.log("Function passed as argument:", runFunction(greet));

// // 3. Function returned from another function
// function outer() {
//   return function () {
//     return "Function returned successfully";
//   };
// }

// const returnedFunc = outer();

// console.log("Function returned from function:", returnedFunc());


// ____________________________________________________(

// function runTask(task, times) {
//   for (let i = 1; i <= times; i++) {
//     console.log("Run:", i);
//     task();
//   }
// }

// // Different functions
// function sayHello() {
//   console.log("Hello");
// }

// function sayBye() {
//   console.log("Bye");
// }

// // Pass different functions
// console.log("\nRun Hello 2 times:");
// runTask(sayHello, 2);

// console.log("\nRun Bye 3 times:");
// runTask(sayBye, 3);

// _______________________________________________________________________
console.log("===== SYNCHRONOUs CALLBACK --=====");

function step1() {
  console.log("Step 1");
}

function step2() {
  console.log("Step 2");
}

// Callback use
function startProcess(callback1, callback2) {
  console.log("Start");

  callback1();
  callback2();

  console.log("End");
}

// Normal order
console.log("\n--- Normal Order ---");
startProcess(step1, step2);

// Changed order
console.log("\n--- Changed Order ---");
startProcess(step2, step1);


// sir 

console.log("===== ASYNC CALLBACK =====");

function getTime() {
  return new Date().toLocaleTimeString();
}

console.log("Start:", getTime());

setTimeout(() => {
  console.log("Step 1 (after 2 sec):", getTime());
}, 2000);

setTimeout(() => {
  console.log("Step 2 (after 1 sec):", getTime());
}, 1000);

console.log("End:", getTime());