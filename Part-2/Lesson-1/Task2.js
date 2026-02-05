console.log("1.2")
const student = [
    {name : "Maaz", score: 40, subject: "maths" },
    {name: "Zain", score: 80, subject: "science"},
    {name : "subhan", score: 75, subject: "pakistanstudies"},
    {name: "farhan", score: 90, subject: "maths"},
    {name: "hamza", score: 30, subject: "physics"},

];
console.log("1 Math student");
const mathtotal = student.filter(
    function(s) {
        const ismath = s.subject === "math";
        console.log(`checking ${s.subject} ${ismath}`)
        return ismath;

    }
)
.reduce(function (accumulator, s) {
    console.log(`add store ${s.score} to current total ${accumulator}`)
    return accumulator + s.score
}, 0);
console.log(`math total scorea ${mathtotal}`)

console.log("passing student (score > 50")
const passingtotal = student.filter(function(s){
    const passed = s.score > 50;
    console.log(`is ${s.name} passing? ${passed}`)
    return accumulator + s.score
}, 0)
console.log(` passing student total is ${passingtotal}`)