console.log("Hoisting check")
console.log("1function hoisting")
console.log("say hi before declaration")
try{
    sayHi();
}
catch (err) {
    console.log("Error in sayhi" + err.message);

}

function sayHi () {
    console.log("Hey i am hoisting")
}

console.log("var hoisting")
console.log("var a before declaration: " + a)
var a = 20;
console.log("var a after declearation" + a)

console.log("Accessing let b before declaration");
try {
    console.log(b)

} catch (err) {
    console.log("Error with let " + err.message)
}
let b = 20;

console.log("Accessing const 'c' before declaration:");
try {
    console.log(c);
} catch (err) {
    console.log("Error with 'const': " + err.message);
}
const c = 30;