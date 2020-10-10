/*
!  ES5

*   The for...in statement iterates over the ENUMBERABLE properties/keys of an object, in an arbitrary order.


! ES6

*  The better way to loop through objects is :
    1)  to convert the object into an iterable Object(Array)
    2)  then, you loop through an array

    Convert an Object into an Array with :
    a)  Object.keys :   creates an iterable Object(array) 
 that captures the properties(aka keys) of an object.

    b)  Object.values   :   creates an iterable object(array) that captures the values of every property/key in an object

    c)  Objct.entries    :  creates an iterable object(array) of arrays. Each inner array has two items. The first item is the property; the second item is the value.

    todo:   Once and object has been converted into an interable Object(array), all the built-in methods of Array object can be used i.e.: you can use: ...for(let prop of arr)...forEach()...filter()...map()...reduce()..etc
    


*/

const family = {
    "father": "Kunal",
    "mother": "Sonal",
    "daughter": "Amaira"
}

// 1 Loop ES5 : for (in)            

let loop1 = (obj) => {
    for (key in obj) {
        console.log(`The ${key} in family is ${obj[key]}`)
    }
}

loop1(family)

/*
 *  Loop ES6: 
    *   Object.keys() 
    *   Object.values() 
    *   Object.entries()
 */

let keys = Object.keys(family)
console.log(keys)

let values = Object.values(family)
console.log(values)

let entries = Object.entries(family)
console.log(entries);

let entriesFunc = (arr) => {
    arr.forEach((item) => {
        console.log(`The ${item[0]} in the family is ${item[1]}`)
    })

}
entriesFunc(entries)

