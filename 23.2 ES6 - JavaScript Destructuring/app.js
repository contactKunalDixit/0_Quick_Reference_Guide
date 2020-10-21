/*
 *  ES6 Destructuring 
 *  Extracting values from objects and arrays
 *  and assigning them to multiple variables
 
 */

let name, id, nm, num, star, planet, rest;

let personObj = {
    name: "Arthur Dent",
    id: 42,
    planet: "Earth"
};

/*          Destructuring with Arrays        */

let personArr = ["Zaphod", 123, "BetelGeuse"];

/*1.     extracting 1st and 2nd values from array ..and assigning them to the variables*/
[nm, num] = personArr;
console.log(nm, num);

/*2.     extracting 1st and 3rd values from array ..and assig*/
[nm, , star] = personArr;
console.log(nm, star);

/*3.    extracting 1st value and all the remaining values should be extracted in another Array..say names 'rest' */
[nm, ...rest] = personArr;
console.log(nm, rest) /* rest is an array in itself and all methods relevant to arrays will apply */
console.log(nm, rest.length)
console.log(nm, rest[1]);


/*          Destructuring with Objects        */

/*1.     extracting the specific properties from the object and assigning them into the declared variables*/
/* The system just looks for the same named property and assigns its value to the corresponding declared variable */
({
    name,
    id
} = personObj); /* While doing destructuring for the objects, Pls observe the use of brackets  */

console.log(name, id);

({
    name,
    planet
} = personObj);
console.log(name, planet);

const funcDestr = ({id,name,planet,star="sol"}) => {    /* star="sol" allows you to define a default value to parameter "star" in case there has none that has been defined before */
console.log(name,id,planet,star)
}

funcDestr(personObj)