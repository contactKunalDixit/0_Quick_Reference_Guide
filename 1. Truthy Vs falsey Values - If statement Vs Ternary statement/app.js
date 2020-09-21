

/* 
*   Falsey values:
*   false, undefined,null 0,"",'',NaN
*   Else, everything else is truthy
*/

/*
Ternary statements are alternative to If Statements but saves typing
*/

// E.g.1

let first = true;
let last = false;
let age

// If Statement
if(first===last){
    console.log("This is true")
}else{
    console.log("This is FALSE")
}

// Ternary Statement is much shorter syntax. It is generally used when there is one command to be executed either ways
(first===last)?console.log("This is true") :console.log("This is FALSE")
//  ternary statement - a nested if within an If

first===last?console.log("This is true"):(age)?console.log(`Age value exists and is ${age}`):console.log("This is FALSE")

