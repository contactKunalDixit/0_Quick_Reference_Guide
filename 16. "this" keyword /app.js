let box = document.querySelector(".box");

let myFunc = function(){
    console.log("1",this)
};

let myFunc2 = ()=>{
    console.log("2",this);
};

//! box.addEventListener("mousedown",myFunc);   
/* 'this' generally points to the object that calls the 'this's parent function. Unless in Arrow function, where it points to where its parent function has been declared.
    In this case, when clicked, the 'this' points to the object(html tag) that triggered the event. Hence logs <div class="box">The BOX</div>  */


//! box.addEventListener("mouseup",myFunc2); 
/* Since this is an Arrow function, hence, lexical scope applies. When clicked, the 'this' checks where its parent function was declared. Since, the parent function was declared in global/ window space, Hence, 'this' also refers to the window object in window or global in Node */


//! myFunc()
/* 'this' has been used in a regular function, hence will check for the reference/object with which the function is being called and will represent the same.
In this case will refer to window object, since the myFunc is being called in window space */

//! myFunc2()
/* 'this' has been used in Arrow function, Hence it will check where the parent function was declared, and Hence will point to the same scope/object.
In this case, since myFunc2() was declared in window object, hence, it points to window object */

//! myFunc.call(window)
 /* func.call(): call() calls a func/or method of an object with reference to another object*/
 /* Since, in this case, myFunc is being called with ref to window object,'this' also refers to the window object */

//! myFunc.call(box)
 /* Since, myFunc is being called with ref to "box" object, hence, "this" refers to box object */


//!  myFunc2.call(window)
//!  myFunc2.call(box)
 /* Since myFunc2 is an arrow function, 'this' will always refer to the lexical scope and will point to the object where its parent function was declared, hence in the current scenario, it will always be "window" object because that's where the parent function - myFunc2 was declared*/

//! myFunc.apply(window)
//! myFunc.apply(box)
/*works the same way as call() */

// ! Using this within a nested Parent function:

//todo-          Regular Function                               ****

let myFunc3 = function(){
console.log("3",this)               /* # */

setTimeout (()=>{
    console.log("nested timed Out", this)     /* $ */
},1000)
}

//! box.addEventListener("mouseup",myFunc3); 

/*  #   'this' refers to the box object, because that is what triggers the function

    $   Since 'this' is ddefined in an arrow function, which is always in lexical scope, Hence, the "this" here refers to where the parent function was declared (which is the function above) that is #'this'. and hence, $"this" also refers to what #"this" ponits to...i.e. the object 'box' 
*/
//todo-          Arrow function                                 ****

let myFunc4 = ()=>{
    console.log("4",this)       /*  @ */
    
    setTimeout (()=>{
        console.log("nested", this)     /*  % */
    },1000)
    
    }

 //!  box.addEventListener("mouseup",myFunc4); 

/*
@   'this' being in an arrow function, indicates to where the parent function was declared.In this case it was window scope,. Hence, 'this' refers to window scope  

%   'this' being in an arrow function points and refer to where its parent function setTimeOut() was declared. In this case, it points to myFunc4() which also being an arrow function, the @ 'this' points to window. So that is what %'this' will also point too.
 */


//!    myFunc3.apply(box)
/*
#   'this' refers to the object box 
$   'this' refers to the @'this'. Hence, the object box
 */

//!   myFunc4.apply(box)
 /*
 @   "this" being in a lexical scope coz of being in arrow function, refers to where the parent function was defined, which is the window object
 %  'this' being in a lexical scope coz of being in an arrow function, refers to where the parent function was defined which is the myFunc4(whose  parent function itself was defined and points to window object). Hence, % 'this' also points to window object. 
 
  */
