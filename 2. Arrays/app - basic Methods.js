/*

ARRAY

An array is a number list of items stored together
An array is a special kind of object with key being the iterator and values being the actual items it holds

*/

var characters = ["Kunal", "Sonal", "Amaira"]

console.log(characters)
console.log(characters.length)
console.log(characters[0])

//  * Check inhertited properties in prototype */

//! Add an item
characters[3] = "Mom"
console.log(characters)
// You can add an item by below action but for this, you'll always have to be sure of the iterator at which you'd like to place this item which may not be feasable at all items - like in case if you'd have unknown no. of items in an array

//! Add an Item at the end:             push()

characters.push("papa")
console.log(characters)

//!  DELETE the LAST item:              pop()
characters.pop()
console.log(characters)

//!  unshift: add item as the first element:                unshift()
characters.unshift("Brother")
console.log(characters)

//!  DELETE the first element:          shift()
characters.shift()
console.log(characters)

// Extension to above: we can save the element that is being removed and console.log it as req i.e.
let delItem = characters.shift(); /* This deletes the 1st item in the array AND then saves the same in variable delItem which then can be used later */
console.log(delItem)
console.log(characters)


//! delete and occasianally replace (add) a particular item or items in an Array:               splice(0,2)

//  takes 2 arguements, 1st tells you item iterator position that needs to be taken off  and 2nd is the no of elements from that iterator that needs to be deleted.
//  3rd parameter is optional and allows you to add new items in the array

characters.splice(0,1,"R2D2","Luke","C3PO")
console.log(characters)


//! sorting all items in an ARRAY in ALPHABATICAL ORDER:                    Sort()

characters.sort()
console.log(characters)

//! Reversing the order of the array:                       Reverse()

characters.reverse()
console.log(characters)


//! Search if ARRAY has a particular item:                  indexOf()
    // If true, then returns the index of the 1st occurance of the item
    // if false, returns -1

console.log(characters.indexOf("kunal"))

//!                                                          lastIndexOf()
    //  Searches the same with above logic BUT starts from last item and moves towards first 
console.log(characters.lastIndexOf("C3PO"))


