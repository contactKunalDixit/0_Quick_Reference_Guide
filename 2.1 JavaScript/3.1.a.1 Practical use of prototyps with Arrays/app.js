/*
sort(): will do sorting, "CHANGE the ORIGINAL" result and return the value in new Variable. 

*/


let names = ["Kunal", "Sonal", "Amaira", "Rahul", "Joby"]       /* Original Array */

let sorted = names.sort();     /* "sorted" is the Sorted array */
console.log(sorted)            /* Both sorted and names will give the same result */     
console.log(names)


/*
?   ***********         PRACTICAL USE:          ***********

?   We CANNOT add a method like we do to an object even though Array is an object too i.e. we cannot do soething like:
?   Array.abc = function(){...}  -  This is NOT possible.....BUT what we CAN do is to add a method/ function to the prototype of an array and then use it thereafter.
?   All the Arrays in the file will have this property/ method and can make use of it.


*/
// Create a new Array method called shuffleCustomised on the Array Prototype

Array.prototype.shuffleCustomised = function () {
    /* USE regular functions only AND NOT ARROW FUNCTIONS because they will change the scope of 'this' */
    let len = this.length;          /* 'this' refers to the object with which this function will be called i.e in this case, names.shuffleCustomised(), 'this' will refer to the Array "names" */
    for  (let i = 0; i < len; i++) {
            let temp = "".concat(this[i]);
            let pos = Math.floor(Math.random()*len);
            let other = "".concat(this[pos]);
                this[i] = other;
                this[pos]=temp;
    }
    return this;        /* This function will not change the original array but will return the modified copy in the the valriable "shuffles"..ref below */
}

let shuffled = names.shuffleCustomised()
console.log(shuffled)

/* Because we are returning an array by doing "return this", we are returning a NEW valued ARRAY everytime and thus, we can use shuffleCustomised() as chaining and it'll still work i.e.*/

names.shuffleCustomised().shuffleCustomised().shuffleCustomised()
console.log(shuffled)
