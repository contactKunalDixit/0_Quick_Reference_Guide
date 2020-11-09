/*
 * Null Vs Undefined
 * 
 * Null means nothing, void, emptiness and is INTENTIONALLY set
 * 
 * undefined means the container variable shell exists but hasnt been given a value yet. Functions with no RETURN statement will return undefined by default
 * 
 */

console.log(typeof null);
console.log(typeof undefined);

console.log(null === undefined); /*false, means they are NOT object equivalent, because it fails the object equivalence test '==='*/

console.log(null == undefined); /* True, means that both are value equivalent as they pass the value equivalence test "==" */



console.log(null === null); /* True, passes the object equivalence test */
console.log(null == null); /* True, passes the value equivalence test */
console.log(undefined === undefined); /* True, passes the object equivalence test */
console.log(undefined == undefined); /* True, passes the value equivalence test */


//  Negation statements:

console.log(!null); /* true, Opposite of falsy is Truthy */
console.log(isNaN(1 + null)) /* false,  means it will not be equivalent of NaN because it will be like adding numerical 1 to nothing(or 0) , which'll make overall value as 1*/
console.log(isNaN(1 + undefined))   /* True, means it will still be equivalent to Nothingness*/