
/*
! Converting String to ARRAY and array to STRING

*   string.split(" ") : splits a spring basis the character specified in arguement and returns an array 
*   Array.join()    :  converts Array to String - does the opposite to above



*/

let statement = "Hello, My name is Iniya Montero"

let statArray= statement.split(" ")

//  You may do let statArray = statement.split(" ").sort() : In order to split and sort - capital lettered words and then small lettered words in alphabatical order

console.log(statArray)

let state = statArray.join("-")
console.log(state)

//  Another e.g.

let x = statement.split(" ").sort().join(" ")       /*string converts to array through split(), then array gets sorted throguh sort(), then array gets converted to string again - the entire result returns to variable 'x'  */
console.log(x)