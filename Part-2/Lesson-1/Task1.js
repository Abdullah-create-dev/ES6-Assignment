console.log(" map vs forEach vs reduce")
console.log("Map")
const marks = [20, 60, 50, 40, 70]
const mapresult = marks.map((value, index) => {
    console.log(`map value ${value} at index ${index}`)
    const newValue = value + 5;
    console.log(`map return ${newValue}` )
    return newValue;
})
console.log(`map new array ${mapresult}`)


const forEachResult = [];
marks.forEach((value, index) => {
    console.log(`forEach ke value, ${value} at index ${index}`);
    const updateValue = value + 5;
    console.log(`foreach push ${updateValue}`);
    forEachResult.push(updateValue);
});



console.log("Reduce");
const reduceresult = marks.reduce((accumulator, value, index) => {
    console.log(`reduce accumuletor ${accumulator}`)
    console.log(`reduce current value is ${value} at index ${index}`);
    const updatedValue = value + 5;
    accumulator.push(updatedValue);
    return accumulator;

},[]
);
console.log(`reduce final array is ${reduceresult}`)