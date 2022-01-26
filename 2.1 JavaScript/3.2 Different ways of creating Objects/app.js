/*

*   Creating Objects:

*        1.  Object literals
*        2.  Object.create() with descriptors
*        3.  function + "new" keyword  (constructor)      
?            new prop/key or method cannot be added in constructor through '.'  notification. You'll have to specifically store it under obj.prototype.function ..ref below for more details
*        4.  Factory function with CLOSURES
*        5.  JS class

*/

//! 1.   Object Literals: You literally write out the properties and hence, the name Object literals

let obj1 = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: function () {
		console.log(this.prop1);
	},
};
console.log('Object Literals');
console.log(1, obj1);
obj1.prop3();
console.log('------------------------------------------------------');

//! 2a.  Object.create(): with descriptors:

/* a. new Object being created WITH an existing object prototype   */
let protoCustomised = {
	prop3: function () {
		console.log(
			'Object.create:: This Object is being created WITH preexisting object as prototype: ',
			this.prop1
		);
	},
};
let obj2 = Object.create(protoCustomised, {
	/* Using precreated protoCustomised as the prototype for obj2*/
	prop1: {
		value: 'value1',
		enumerable: true,
		writable: true,
		configurable: true,
	},
	prop2: {
		value: 'value2',
		enumerable: true,
		writable: true,
		configurable: true,
	},
});

console.log(obj2);
obj2.prop3();

/*
! 2b. new Object being created WITHOUT existing object prototype or being created through null object. prop3 will NOT be stored in prototype   */

let obj3 = Object.create(
	{},
	{
		prop1: {
			value: 'value1',
			enumerable: true,
			writable: true,
			configurable: true,
		},
		prop2: {
			value: 'value2',
			enumerable: true,
			writable: true,
			configurable: true,
		},
	}
);

obj3.prop3 = function () {
	console.log(
		'this Object is being created WITHOUT any Prototype : ',
		this.prop1
	);
};

console.log(obj3);
obj3.prop3();

console.log('------------------------------------------------------');

//! 3.  new + function (constructor)

// ?   Create a constructor function:

let Obj = function (v1, v2) {
	this.prop1 = v1;
	this.prop2 = v2;
	this.prop3 = function () {
		console.log(this.prop1);
	};
};

// ?    Create an Object using Constructor function:

let objConst = new Obj('value1', 'value2');
console.log(objConst);
objConst.prop3();

//?  Now as an extension, if you'd like to add another prop/ method to prototype section of this constructor function; you cant do Obj.prop4. This will NOT WORK...

// ?    Add the function in the "prototype" of Constructor so that it gets picked up by all objects which are based on this constructor

Obj.prototype.prop4 = function () {
	console.log('Wild Attempt');
};

objConst.prop4();
console.log(objConst);

console.log('------------------------------------------------------');

//! 4.  factory functions with CLOSURES

// TO be revisited

console.log('------------------------------------------------------');

//! 5.  JS Class            Detailed explaination of JS classes concept in next file

// JS class is just a syntantic sugar syntax for a constructor function functionality dicussed above in option3
// Whatever you define in the construct function becomes part of specific instance of the object and the rest becomes part of the prototype
class ObjC {
	constructor(v1, v2) {
		this.prop1 = v1;
		this.prop2 = v2;
	}
	prop3() {
		console.log(this.prop1);
	}
}

let obj5 = new ObjC('value1', 'value2');

console.log(obj5);
obj5.prop3();
