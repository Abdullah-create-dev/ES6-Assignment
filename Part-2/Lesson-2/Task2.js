console.log("Task 2 Callstack");
function thirdStep() {
    console.log("enter third step")
    console.log("inside third step doing work");
    console.log("exit third step")
}function secondstep() {
    console.log("Enter second step")
    thirdStep()
    console.log("Exit Second Step");
}



function firstStep() {
    console.log("Enter first step");
     setTimeout(function() {
        console.log("timer finish i am asynchronous");
    }, 0);

    secondstep()
    console.log("Exit first step");
}
firstStep(); 