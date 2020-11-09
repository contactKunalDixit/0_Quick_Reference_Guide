/*
!  Need to revisit the topic
*   Deep Copying vs Shallow Copying

When trying to create copies of the values inside variables in JavaScript, it is very important to understand the difference between passing by value and passing by reference.



*/

let shallowArr = [123, "bob", true, null, undefined]
let deepArray = [123,"Kunal",true, ["Hank","Bryan","Palooza"],{"pet":"Dog","breed":"Alsatian","age":"5"}]

let deepObj = {
    "characters": ["Wanda", "Davis", "Emma", "Karen"],
    "places": ["Corner Gas", "Ruby", "Food Mart"],
    "grad68": false,
    "seasons": 5
}
/*******************************************
 Deep Copy Methods examples:    

 1. JSON.parse(JSON.stringify())
 2. Service Workers postMessage() onmessage
 3. Histpry API history.pushState(obj,title) history.state
 4. Notification API new Notification ("title",{data:obj}).data
 5. Build a custom recursive function

 Deep copy methods to be used when u have objects comprising of a mix of primitive and non primitive data types:

let deepArray = [123,"Kunal",true, ["Hank","Bryan","Palooza"],{"pet":"Dog","breed":"Alsatian","age":"5"}]


*/


// Creating copy of the obj
let newObj = {...deepObj};
newObj.places[0] = "ottawa" /* changed inside reference */

newObj.places = ["Ottawa","calcutta"]   /* the old entire reference was destroyed ans was replaced by new value*/
console.log(newObj,deepObj)

/*******************************************
Shallow Copy Method examples:

1.  arr1.slice(0) 
2.  arr1.concat(arr2)
3.  Spread Operator
4.  Object.create({},obj)
5.  Object.assign({},obj)
6.  Array.from(arr1)


Shallow methods to be used when u have objects comprising of only primitive data types:
e.g. 

let shallowArray = [123,"Kunal",true, null,undefined]

 */


/*In JavaScript, you are always passing values by reference UNLESS we are dealing with PRIMITIVE data types */

let k = "kunal";

let d = k;

k = "New Value";
console.log(k, d)

/*But if we are NOT dealing with NON primitive and the repeat the same above sequence, it will not work the same way because the values get passed as reference, and thus impacts the original element...e.g. */

let name = ["Kunal", "Dixit", 1982];

nameNew = name; /*  (variable 'nameNew' will just become a reference for 'name'...and NOT an independent variable like 'd' above...this is just because this is a an Array, which is a NON primitive element and thus values are not copies BUT are passed by reference)  */



/* But if we apply a shallow copy method: Array.from(), it will be passed by value */
nameNew = Array.from(name)

nameNew[0] = "Sonal";


console.log(name)
console.log(nameNew)