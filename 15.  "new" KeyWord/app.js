/*
*       With the key word "new" you turn a function into a constructor - something that builds other objects and you are changing what the function returns by default, into that newly created object.

*       "this" can be used inside the newly created objects to refer to themselves

*   "new" does 4 things:

    *   new object created
    *   new object is prototype linked
    *   new object set as "this" binding
    *   if No RETURN statement exists, then a COPY of the object is returned
    
*/


function Car(make, model) {
    // console.log(this);      /* "this" refers to the context in which the function is being called */
    let props = {
        make,
        model
    };
    let info = function () {
        return this.props;
    }
}

let c1 = Car("Honda", "Accord") /* Since "this" refers to the context in which the function is being called. Hence, In this case, it is "window" since there's NO keyword "new" preceding the function, - pointing to new Object */
let c2 = new Car("Tesla", "Model 3") /*Because, the presence of the keyword "new" creates a new Object, the keyword "this" within the function will point to this new object */

console.log(c1) /* undefined, since there was NO return statement in the function */
console.log(c2)
/* This gives a new Object because the function Car has been used as a constructor,
It will also have a prototypal inheritance
 */


//*    Now, even if a new object is being constructed through the constructor "Car", still that new object can't access the properties present inside the constructor "Car". Why?

//*   Because, when the keyword "new" creates a new object 'c2'  by calling the function "Car", the properties within the function(constructor) "Car" still remain function scoped because they are binded locally.

// console.log(c1.props)   /* it gives undefined */
// console.log(c2.info)    /* also undefined */

/* 
c1.props gives "undefined" because c1 is just a variable storing the result of the function Car run and SINCE "No Return statement", it doesnt return anything. if it doesnt return anything, then there's NO reference object to associate .info or .props to. Hence, "undefined".  
c2.info gives "undefined" because c2 though is a newly constructed object still doesnt have access to its properties. this is so because , the function "Car"'s properties "props" and "info" have been defined in function scope by using assigner "let", thus the variables 'props' and 'info' can only be accessed within that particular "Function" but not outside. Thus, when a new object - c2 - is created, its unable to access those properties as its 'key's.
THE SOLUTION LIES IN DEFINING THESE PROPERTIES IN A WAY THAT THEY GET ASSOCIATED WITH ANYTHING THAT CALLS THEM. The new "OBJECT" in this case.

*   solution keyword - "This"

*/

function Car1(make, model) {
    // console.log(this);      /* "this" refers to the context in which the function is being called */
    this.props = {
        make,
        model
    };
    this.info = function () {
        return this.props;
    }
}


let c3 = new Car1("Suzuki", "Ciaz")
console.log(c3)
console.log(c3.info)
console.log(c3.props)


/*
*  One alternative to above is to set a function straight in the prototype section of the constructor - "Car". 

Car.prototype.info = function(){
    return props
}

*   This way, all the future objects created through this constructor, would have 'inherited' this function in thier proto section
*/

function CarProto(make, model) {
   this.props = {
        make,
        model
    }
}
CarProto.prototype.info = function(){
    return props
}

let c4 = new CarProto("Maruti","Baleno")
console.log(c4)


//! General Reminder: No 2 objects (even with the same prop/value set are equal) in value or data equivalancy check
//! the copy made of an object is same as the object. 