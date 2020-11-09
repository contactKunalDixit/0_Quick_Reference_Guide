/*
 *   Object.create(prototype, propertiesObject) method
 *   propertiesObject same as 2nd arguement from Object.defineProperties()
 */



/* object obj will be used as a base object */

let obj = {
    name: "The Dude"
};

let obj2 = Object.create({}) /* Creates an empty object with no properties of its own and nothing being prototypes*/
console.log(obj2)

let obj3 = Object.create(obj, {}) /* Creates an empty object not having its own properties - prototyped the object "obj" i.e. inherited properties from obj in its proto section */
console.log(obj3)
console.log(obj3.name)

// !    Create an object prototyped on obj3(which was protyped on obj (this demos protypal inheritance))
//!     this object also will have its own properties

let obj5 = Object.create(obj3, {
    fullName: {
        
        // configurable: true,
        // enumerable: true,
        // writable:true,
        value: "Kunal Dixit"
    },
    canBowl:{
        configurable: true,
        enumerable: true,
        writable:true,
        value:true
    }
})
console.log(obj5);
console.log(obj5.fullName);
console.log(obj5.canBowl);
console.log(obj5.name);

/*
these are known as property descriptors : which define things about the properties
        configurable: true,
        enumerable: true,
        writable:true,
        value:  < Actual value >
*/