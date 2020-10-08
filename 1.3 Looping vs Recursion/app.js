/*

*   Looping vs Recursion 

*   Looping and recursion are often told to do the same thing..i.e. both keep on repeating a code until a condition becomes false after which the loop stops

But they have specific advantages for certain situations...this article explains the same


Important Note: Asynchronous Calls: 
In case of AJAX, Promises, SetTimeOut, SetInterval, calls to Databases, the code runs on a seperate thread than the main stack because the time taken to fetch the results back isn't known and can vary.

So ALways remember, that Asynchronous calls CANNOT work effectively when used within the loops or Recursions because in a loop or Recursion, the Asynchronous calls made to the third party API would keep on waiting for the results from the other end and thus, would only SLOW down the entire response. Hence, it will lose the very reason for why they are known as ASYNCHRONOUS..
*/
count = 0;
//  Looping
// 
// console.log("Start the loop")
// for (let i=0;i<10;i++){
//     console.log("inside loop",i)
//     count++
// }
// console.log("End the loop")



// Recursion function

let recur = function () {

    console.log("inside Recur", count)
    count++;
    if (count < 10) {
        recur()
    }
}

console.log("Start the Recursion loop")
recur()
console.log("End the loop")


// Another eg of Recusrion: REAL CASE Scenario: can be used to animate

let countSize = 50;

let countDown = function (size) {
    console.log("X".repeat(size));
    size = Math.floor(size * 0.90)
    if (size > 2) {
        countDown(size)
    }
}

countDown(countSize)

/*
*   Practical use of Recursion is when you'd like to decrease a loop or increase a loop and would like to do something with the new value like animation with it, or you'd like something to shrink away..like what you see in gambling..showing a number and reducing it to a lower and lower number so fast that it looks like a blur and then it stops finally at the winning number.

*/

/*Asynchronous methods:
// AJAX, Database, Promises, Timers...

*/

let fetch = require("node-fetch");
let url = "http://jsonplaceholder.typecode.com/comments?postId=42";


console.log("About to Fetch")
fetch(url)
.then(response=>response.json())
.then(data=>{console.log("data", JSON.stringify(data))})
console.log("after fetch ??")