/*
*   what are property Descriptors: Its extra information about properties inside the respective objects

Property Descriptors Methods and Usage:

* 1   Object.defineProperty(obj,propName,{})              
    Adds a prop to an object or modifies it

* 2   Object.defineProperties(obj, props)                 
    Adds one or more properties to an object or modifies it

* 3   Object.getOwnPropertyNames(obj)                     
    Returns the names of the own properties of an object. The own properties of an object are those that are defined directly on that object, and are not inherited from the object's prototype. 

* 4   Object.getOwnPropertyDescriptor(obj,prop)
    Gets the own property descriptor of the specified object. An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
    
* 5   Object.getOwnPropertyDescriptors(obj)



* 6   Object.keys(obj)                   
    Returns an ARRAY of the names of the enumerable string properties and methods of an object.

* 7   Object.values(obj)              
    Returns an ARRAY of the VALUE of the enumerable string properties and methods of an object.

* 8   Object.entries(obj)
    Returns an ARRAY of the enumerable prop/key and its subsequent values 

    ?   Checking for specific property in the specific Object - obj

? 9   obj.hasOwnProperty(prop)
    The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).


? 10   obj.propertyIsEnumerable(prop)
    The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable and is the object's own property.


Objects can be:
*   1.  Extensible -    new properties can be added
*   2.  Frozen  -       props cannot be changed in any way
*   3.  Sealed  -       props can't be deleted or configured but are still writable


Essential Object PROPERTIES can be:
?   1.  Writable    -       change the value
?   2.  Enumerable  -       seen and picked through a for(in) loop else, have to be accessed through a "." notation. 
?   3.  Configurable    -   change the property descriptors

* 11    Object.isExtensible(obj)
        method determines if an object is extensible (whether it can have new properties added to it).

* 12    Object.isFrozen(obj)
        checks for a boolean value. An object is frozen if and only if it is not extensible, all its properties are non-configurable, and all its data properties (that is, properties which are not accessor properties with getter or setter components) are non-writable.

* 13    Object.isSealed(obj)
        checks for a boolean value. An object is sealed if it is not extensible and if all its properties are non-configurable and therefore not removable (but not necessarily non-writable).
        

* 14    Object.preventExtensions(obj)
        method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).  An object is extensible if new properties can be added to it. Object.preventExtensions() marks an object as no longer extensible, so that it will never have properties beyond the ones it had at the time it was marked as non-extensible. Note that the properties of a non-extensible object, in general, may still be deleted. Attempting to add new properties to a non-extensible object will fail, either silently or by throwing a TypeError (most commonly, but not exclusively, when in strict mode).

       ! Object.preventExtensions() only prevents addition of own properties. Properties can still be added to the object prototype.

       !   There is no way to make an object extensible again once it has been made non-extensible.


* 15    Object.freeze(obj)
        The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

* 16    Object.seal(obj)
        The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
        Sealing an object prevents new properties from being added and marks all existing properties as non-configurable. This has the effect of making the set of properties on the object fixed. Making all properties non-configurable also prevents them from being converted from data properties to accessor properties and vice versa, but it does not prevent the values of data properties from being changed. Attempting to delete or add properties to a sealed object, or to convert a data property to accessor or vice versa, will fail, either silently or by throwing a TypeError (most commonly, although not exclusively, when in strict mode code).

        The prototype chain remains untouched. However, the __proto__ property is sealed as well.

*DIFFERENCE BETWEEN  .Object.seal()    and       Object.freeze()
Existing properties in objects frozen with Object.freeze() are made immutable. Objects sealed with Object.seal() can have their existing properties changed.

DESCRIPTORS GROUPS:

!       DATA descriptors        ACCESSOR descriptors
!       value                   get
!       writable                set
!       configurable            configurable
!       enumerable              enumerable

* You can either use Data Descriptors while defining extra info about the properties/ keys or you can use Accessor Descriptors - But you cannot use a combination of the two groups.


*/

let obj = {
    name: "Kunal",
    age: 38
}

console.log(obj)
/*
*   When you create an object and you add a property(key)/ pair, the process automatically adds data descriptors with thier default value. i.e. 
the value is the value of the property
value           : defined by user else shows undefined 
writable        : true  (default value 'true' means you are allowed to change this value)
configurable    : true  (means that its allowed to change the other associated properties at the back, like writable,value and enumerable)    
enumerable      : true  (means 'for' Loop works and it will loop through all the properties that have been defined in the object. 
If it is false for a particular property, then that prop will NOT be shown(considered) while looping). NOTE: It can still be retrieved if specifically asked i.e. obj.test or obj["test"]



*   Accessor Descriptors:

* get will "retrieve it" and set will "update" the value of the property. If we are using the Accessor descriptors, then we arent allowed to make use of DATA descriptors like value or writable.



*/

for (let prop in obj) {
    console.log(`${prop}: ${obj[prop]}`)
}

//  the above 'for' loop function loops through the properties but what if we'd like to have some control and ensure a particular property does remain in the object, ..is writable that means its value CAN be changed, BUT doesn't show up and hides while looping 


//! E.g. of DATA Descriptors

Object.defineProperty(obj, "test", {
    value: "Shagadelic",
    writable: true,
    configurable: true,
    enumerable: true
})
console.log(obj)

obj.value = "Shagedalic baby";
for (prop in obj) {
    console.log(`${prop}: ${obj[prop]}`)
}
console.log(obj.test)


//!  E.g. of ACCESSOR Descriptors

Object.defineProperty(obj, "testAccessD", {
    configurable: true,
    enumerable: true,
    get: () => {
        return this.value;
    },
    set: (_val) => {
        this.value = _val + "Changaaa";
    }
});

obj.testAccessD = "Changa";
console.log(obj)
console.log(obj.testAccessD)


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Practice:


let family = {
    father: "Kunal",
    mother: "Sonal",
    daughter: "Amaira"
};
console.log(family);

let ExtendFam = Object.create(family, {
    grandFather: {
        value: "Ashok Dixit",
        writable: true,
        configurable: true,
        enumerable: true
    },

    grandMother: {
        value: "Kiran Dixit",
        writable: true,
        enumerable: true,
        configurabe: true
    }

});

console.log(ExtendFam);

let ownDesc = Object.getOwnPropertyNames(family)
let ownDescExtendFam = Object.getOwnPropertyNames(ExtendFam)
console.log(ownDesc)
console.log(ownDescExtendFam)

Object.defineProperties(family, {
    helper: {
        configurable: true,
        enumerable: true,
        get: () => {
            return this.value;
        },
        set: (_val) => {
            return this.value = _val;
        }

    }
})
// Initiating a value for helper through "." notation:
family.helper = "Jyoti";


console.log(family)

console.log(Object.getOwnPropertyDescriptor(ExtendFam, "grandFather"));
console.log(Object.getOwnPropertyDescriptor(family, "father"));
console.log(Object.keys(ExtendFam));
console.log(Object.values(family))
console.log(Object.entries(family))
console.log(Object.entries(ExtendFam))

console.log(ExtendFam.hasOwnProperty("father"))
console.log(ExtendFam.hasOwnProperty("grandFather"))
console.log(Object.isExtensible(ExtendFam))
console.log(Object.isFrozen(ExtendFam))
console.log()