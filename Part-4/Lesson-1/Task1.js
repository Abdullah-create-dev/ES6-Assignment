console.log("Hello Assignment Four");


 const user = {
     name: "Abduullah",
     greet: function () {
         console.log("Hello " + this.name);
     }
 };
 user.greet();
// _______________________________02)
 function introduce(city, country) {
     console.log(
         "My name is " + this.name +
         ", I am " + this.age +
         ", from " + city + ", " + country
     );
 }

 const person = {
     name: "Abduullah",
     age: 18
 };

 // call karna 
 introduce.call(person, "Karachi", "Pakistan");
// ____________________________________03
 const user = {
   name: "Abduullah",
   greet: function () {     console.log("Hello " + this.name);
   }
 };
 setTimeout(user.greet, 3000)

// ----------------------
 function counter() {
   let count = 0; 

   return function () {
     count++;
     console.log("Count:", count);
   };
 }

 const myCounter = counter();

 myCounter(); //  1
 myCounter(); //  2
 myCounter(); //  3 result aai ga
 ____________________________________
// Task 3.2 and 3.3 sir ye simj nhi aya hai // Task 3.2 me rest operator use krke function me multiple arguments pass kr skte hain aur unka sum nikal skte hain
 ______________________________
 console.log("Start"); 

 setTimeout(() => {
     console.log("Timeout 1"); 
 }, 0);

 console.log("Middle"); 

 setTimeout(() => {
     console.log("Timeout 2");
 }, 100);

 console.log("End"); 


// 4.2 karta hn

 {___}