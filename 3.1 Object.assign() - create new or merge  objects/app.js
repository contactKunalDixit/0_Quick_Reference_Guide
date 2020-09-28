/*
 *   object.assign()
 *       1. Creates a new object and RETURNS the value
 *       2. Copies content of one object into another and Returns the value
 *       3. Merges two objects together and RETURNS the value
 * 
 *  The object that has been used to merge or whose copy has been created doesnt get effected and stays unaltered. its only the target object (wether new or preexisting) that get altered.
 */


let obj1 = {
    "arms": true,
    "armCount": 12
};
console.log(obj1);


let obj2 = {
    "weapons":["missile Launcher","reciprocating saw"]
}
console.log(obj2);

let obj3 = {
    "canMove":true,
    "legs":0,
    "treads":true
}
console.log(obj3)

//!     Merging or copying content of obj2 into obj1

Object.assign(obj1,obj2);
console.log(obj1);


//!    creating a new object and merging/ copying content of another object - Both objects would be copy of each other

let copiedObj = Object.assign({},obj2)
console.log(copiedObj)


//!     creating a new object holding certain key/value pairs and then merging another object's content

let newObj = Object.assign({"name":"R2D2",  "canMove":34},obj3)
console.log(newObj);
/*
canMove: true
legs: 0
name: "R2D2"
treads: true

*   Observe, how the "canMove" values changes to boolean "true" from a numeric 34 that was manually passed. this is because the values of the object that is being merged/ copied OVERRIDES any preexisting value

*/
