console.log("1.3")
const mynumbers = [10,20,30];
function simulatemap (arr, callback) {
    const resultARr = [];
    console.log (`map simulation start`)
    for (let i = 0; i < arr.length; i++){
        const transformevalue = callback(arr[i], i)
        console.log("callback executed for element at index " + i + arr[i] + "transforme to" + transformevalue)
        resultARr.push(transformevalue)
    }
    return resultARr
}
const doubleIt = function(num) {
    return num * 2
}
console.log("testing a function")
const customoutput = simulatemap (mynumbers, doubleIt);
console.log("custom simulation result", customoutput)

const realoutput = mynumbers.map(doubleIt)
console.log("Real method result", realoutput)
console.log("Does it match? ", JSON.stringify(customoutput) === JSON.stringify(realoutput));