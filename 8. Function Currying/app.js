/*

*   Function Currying:

*   In JavaScript specifically, functions are first-class Objects just like String, Number, Boolean....This means that they can be passed to other functions and/or can be RETURNED  from functions.



*   Currying uses "RETURNED"      

*/






// Passing a function y into function x

function x(a){
    console.log("x")
a()
return a
}

function y(){
console.log('y')
}

//  x(y)        /* Executing a function */

let b = x(y)

b()



//  currying example: 


function greet(msg,name){
    console.log(`${msg}:  ${name}`)
}

greet("Hi", "Kunal")


/* Case: If we go by above e.g. we'll Need to write 4 different msgs in 4 different languages  ....This is where 'currying' simplifies things ...we can write one function with a parameter and then make it return another function(with parameter)*/

function greet1(msg){
    return (function(name){
console.log(`${msg}:  ${name}`)
    }
    )}

let english = greet1("Hi")  /* The resulting 'returned function' gets stored in variable "English" and then ..since english has been stored with a function and has become function itself, can be passed with another parameter ...this is known as currying*/
let svenska = greet1("Hej")
let espanol = greet1("Hola")
let deutsch = greet1("Tag")

english("Kunal")
svenska("Inga")
espanol("Carlos")
deutsch("Mattias")



