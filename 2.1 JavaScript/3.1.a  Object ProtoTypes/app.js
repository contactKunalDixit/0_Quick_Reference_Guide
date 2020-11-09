/*

*   JavaScript is an 'Prototype' based language and NOT 'class' based language.

*   In JavaScript, when we create an Object, the JS builds it on the prototype blueprint it has stored within. This 'prototype' blueprint comes preloaded with few default inbuild methods.
*   Every Single object 'INHERITS' these methods(or properties) and can use them freely.

*   Every time a method of an object is called, JS goes and checks if the method exists in the actual object and if not, THEN checks its PROTOTYPE section to check if it has inhertited the same from its parent, and still not able to find, goes and checks for the parent's parent prototype and so on and so on. 

*   this is known as " PROTOTYPAL INHERITANCE ".

todo:   IMPORTANT: ANY CHANGE OR MODIFICATION WE DO IN THE PARENT OBJECT will get AUTO picked up by  those objects which have inheriited parent object as thier prtotype and there lies the true power of the Prototypal concept

*   If you check for an object prototype and it says 'null' means that you have reached the end of the object's prototype and there's no further chained up parent objects.


?   Object.setPrototypeOf(obj2, obj1)
?   Object.getpropertyOf(obj2)

?   Object.getOwnPropertyNames()

Some other ways to create new Objects:
Object.create()
Object.assign()


*/

let objEmpty1 = {
    prop1: () => {
        console.log("prop1")
    }
}

// objEmpty.prop1()
// console.log(typeof (objEmpty.toString()))        /* toString() is a default inerited method */
// console.log(typeof objEmpty)
// console.dir(objEmpty)

let objEmpty2 = {
    prop2: () => console.log("prop2")
}

objEmpty1.prop1()
// objEmpty2.prop1()        
//? cant access 'prop1' because it is not a method in objEmpty2*/

//? BUT after setting the proptotype linking...
Object.setPrototypeOf(objEmpty2, objEmpty1) /*Set Prototype of "object2" as "object1" */


objEmpty2.prop1()
//? CAN access 'prop1' because "objEmpty2" has "objEmpty1" as its prototype and hence has access to all "ObjEmpty1" methods and properties    */
console.log(objEmpty1)
console.log(objEmpty2)


/*

Some properties in JS are enumerable and some are not, so while running for (in) loop, only enumerable properties will get shown i.e.

        in objEmpty2, the current AND the inherited properties will get shown BUT not the default properties of the object constructor 
*/

for (let key in objEmpty1) {
    console.log("objEmpty1 keys: ", key)
}

for (const key in objEmpty2) {

    console.log("objEmpty2 keys: ", key)

}


console.log(Object.getPrototypeOf(objEmpty2))

/*  The "Object.getprototypeOf(objEmpty2)" is SAME as writing AND POINTS TO "objEmpty1" because that is the prototype blueprint of "objEmpty2" */

/* Thus it can act as a pointer to call its property.. the below is equivalent of writing "objEmpty1.prop1()" */
Object.getPrototypeOf(objEmpty2).prop1()

/* We were able to do this because we went to the specific prototype and got its method */

/*
getOwnPropertyNames gives you the self owned property names. It will not show you the "inherited" property names
*/

console.log(Object.getOwnPropertyNames(objEmpty1))
console.log(Object.getOwnPropertyNames(objEmpty2))

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(objEmpty1)))