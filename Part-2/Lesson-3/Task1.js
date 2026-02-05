//                     Section 3: Destructuring, Rest & Spread Operators


//Task 3.1 – Destructuring with Defaults
const myObj = {
    name : "Aaliyan" , 
    batch : 16 ,
    course : "Modern & webapplication" ,
}
const { name, age,  grade = "Not Assigned",  city = "Unknown" } = myObj;

console.log(name);
console.log(age);
console.log(grade);
console.log(city);


//Task 3.2 – Rest Operator in Functions
function sumNumbers (...numbers) {
    if(numbers.length === 0) {return};
    let num = numbers.reduce((first , second) => first + second , 0);
    console.log(`Numbers Are : ${numbers.join(",")}`)
    console.log(`And Thier Sum Is : ${num}`);

}

sumNumbers(2 , 4 , 5)
sumNumbers(13 , 32 , 51)
sumNumbers(2 , 85)


//Task 3.3 – Spread Operator & References 
const orignalObject = {
    name : "Muhammad Aaliyan" , 
    skills : {
        frontend : "Html",
        backend : "javascript" ,
    }
}
const firstCopy = orignalObject;
const secondCopy = {...orignalObject};

firstCopy.skills.backend = "React.JS" ;
firstCopy.name = "Aaliyan" ;
secondCopy.skills.backend = "JavaScript" ; 
secondCopy.name = "Khan" ;

console.log("Orignal : " , orignalObject);
console.log("Direct Copy : " , firstCopy);
console.log("Spread Copy : " , secondCopy);