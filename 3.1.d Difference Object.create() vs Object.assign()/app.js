/*
 *   Object.create()     vs      Object.assign()
 */

let target1 = {};

let target2 = {};

let obj1 = Object.create(target1,{myProp:{value:1}});
let obj2 = Object.assign(target2,{myProp:1});

console.log(obj1)
console.log(obj2)

/*
*   Protypical Chain:   

*   Object.create creates a new Object with the specified [[Prototype]], and Object.assign assigns the properties directly onto the specified object.

*/

console.log(obj1 ===target1)
console.log(obj2===target2)

/*
The prototypical chains of Obj1 and Obj2 look like:

obj1    --> target1 --> Object.prototype    --> null
obj2        ------->    Object.prototype -->    null

*/

/*
*   Properties:

*   Object.create defines properties and Object.assign only assigns them.

    When creating a property, assignments will create it as configurable, writable and enumerable. When defining a property, you can specify those flags, but by default it's not configurable, nor writable and not enumerable.

*   Object.assign() provides shallow copying(Only properties and methods) and it will override the method and property declared. while Object.create() provides Deep copying provides prototype chain.

*/

let objKu={
    name:"Kunal",
    id:123
}
let objSo = {
    name:"Sonal",
    id:456
}
let objAmaira1 = Object.assign({relationship:"Daughter"},objKu)
console.log(objAmaira1)

/*
 {relationship: "Daughter", name: "Kunal", id: 123}
id: 123
name: "Kunal"
relationship: "Daughter"
__proto__: Object 
  ....
 */

let objAmaira2 = Object.create(objSo,{relationship:{configurable: true,
    enumerable: true,
    writable:true,
    value:"Daughter"}})
console.log(objAmaira2)

/*
{relationship: "Daughter"}
relationship: "Daughter"
__proto__:
id: 456
name: "Sonal"
__proto__: Object
....
*/