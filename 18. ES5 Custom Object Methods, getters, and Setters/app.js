/*
*   REVISIT this topic after private variables discussion

There is a new shorter syntax for adding methods and properties to Objects in ES6 
This video covers that new syntax as well as how you can add getter and setter methods for your object properties.
*/

let obj = {
    prop1:1979,
    prop2:"Alien",
    prop3(){
console.log("called Prop")
    }
}

obj.prop3()

// let obj = {
//     prop1:1979,
//     prop2:"Alien",
//     prop3:function(){
//         
//     }
// }