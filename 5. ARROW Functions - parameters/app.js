/*
*   ES^ : ARROW aka FAT arrow functions

    *   Works best in callback scenarios
    *   parenthesis around arguements if more than one
    *   curly braces around function bosy if more than one line/ command
    *   'return' only needed if more than one line of code. if only one line, 'returns' automatically 
*/

let numbers = [123, 234, 345, 456, 567]
let names = ["Kunal", "Sonal", "Amaira", "Rahul", "Joby"]


let big = numbers.filter(function (item) {
    return item > 300
})

let bigA = numbers.filter((item)=>item>300)


console.log(big)
console.log(bigA)


names.forEach((item,index)=>{

console.log (`${index} :  ${item}`)
})
