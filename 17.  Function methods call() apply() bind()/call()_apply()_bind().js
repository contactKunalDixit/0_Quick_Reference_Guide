//! These functions are used with Closures and partial applications...Find out more about the usage and watch the tutorial again
/* 
*   Functions all share three methods - call( ), apply( ), and bind( ).


*   WITHOUT STRICT MODE, "this" will default to the Global/Window Object. In Pragma"Strict mode", "this" if used in global/ window space refers to "undefined".

*   These methods let you call functions while letting you specify the context for calling the function. This lets you define what the "this" keyword will represent. 

*   call( ) and apply( ) let you pass in parameters to the functions when you call them too.

*   bind( ) will let you set the context, pass in parameters, and return a copy of the function with the context and those values saved to be used later.

*/


/*bob is a function with parameters num and str
bill is an object with own properties, one of which is a method - myMethod */

let bob = function(num,str){
    console.log("bob", num, str,this);
    return true;
}

let bill = {
    name:"Bill Murray",
    movie:"Lost in transalation",
    myMethod:function(fn){
        let n = arguments[1]
        let s = arguments[2]
fn.apply(bill,[n,s])            
    }
}


// bob(1,"Hello")
/* regular function bob is being called in global/window object. Hence, "this" points to global/window object */


// bill.myMethod(bob)
/* 
shows bob undefined undefined Window {parent: Window, op......}

because we havent provided any mandatory arguements to the function bob.

in order to make it work, we'll have to modify the object bill and have to hard code it in below manner:
let bill = {
    name:"Bill Murray",
    movie:"Lost in transalation",
    myMethod:function(fn){
fn(2,"Hello AGain")                             HardCoding arguements; but this isnt feasable for obvious reasons 
    }
}

*/

//! call()

// bob.call(bill,3,"I'm back")
/* function "bob" is being called in reference to object "bill", and "this" will refer to object - "bill" now */


//! apply()
// let arr = [4,"Hola"]
// bob.apply(bill,arr)

/* .apply() is used just like .call() but in case of arrays
use case: when an array is being dynamically updated with push, pop, etc, then .apply() can be used to run a function in context of a certain 'object' with that dynamic array
*/

bill.myMethod(bob,4,"ciao")


//! bind()

let fred = bob.bind(bill,5,"Hasta La Vista")

fred()

/*
*   So bind() works the same way as call() and apply(). The only important difference is that the entire function bind can be stored in a variable , which can be called later or as per the need. It doesnt execute right there but can be called later.*/