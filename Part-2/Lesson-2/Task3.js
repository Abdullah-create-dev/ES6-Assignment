console.log("2task closures");
function createCounter() {
    let count = 0;
    console.log("Counter initialized at " + count)
    return function() {
        count = count + 1; 
        console.log("Current count in memory" + count);};
}
const myCounter = createCounter();
console.log("Calliung mycounter first time");
myCounter();
console.log("Calling myCounter second time");
myCounter(); 
console.log("Calling mycounter third time");
myCounter(); 