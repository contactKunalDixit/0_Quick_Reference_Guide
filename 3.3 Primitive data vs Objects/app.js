/*
*   In JavaScript, all variables either hold one of six primitive types OR an object. Everything that is not one of the primitive is an Object.
*   If you call the typeOf command on any primitive, you will be told what kind of wrapper it would get.

*   The six types of primitives are:
    boolean
    number
    string
    null
    undefined
    symbol  (added in ES6)

*   REMEMBER: Primitives are just immutable values in memory. i.e. they cannot be changed.
*   Objects are values in memory that can be referenced by an identifier.

*   WHen you store a primitive in a variable i.e. say:

    let nm1 = "Kunal"

    It is stored in memory as just a value which is primitive(string in this case) and doesnt have any properties or methods or events it can be associated with because it is NOT an OBJECT but is a different data type.
    BUT when you'd like to use a method say .toUppeCase(), it will allow that because of something known as "AUTOBOX" which is a process through which the JavaScript by itslef automatically checks for which object wrapper should the value be wrapped under. In this case, it senses that it should be wrapped in wrapper String Object. hence, all the relevant string object relevant methods become available. But it will temporarely changes the value of the variable

*   Auto-Boxing: Putting a primitive value into a wrapper of the correct type. JS does this by itself.
    so, a string primitive would go inside the string wrapper object
        a number primitive would go inside the number wrapper object
        a boolean primitive would go inside the boolean wrapper object and so on and so forth..


*/

let nm1 = 'Kunal'
let nm2Obj = nm1.toUpperCase()

console.log(typeof nm1, nm1)
console.log(typeof nm2Obj, nm2Obj, nm1)