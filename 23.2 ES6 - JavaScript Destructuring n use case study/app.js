/*
 *  ES6 Destructuring 
 *  Extracting values from objects and arrays and assigning them to multiple variables
 *  Where is destructuring mainly used...
 
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

/*3.    extracting 1st value and all the remaining values should be extracted in another Array..say named 'rest' */
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

const funcDestr = ({
    id,
    name,
    planet,
    star = "sol"
}) => {
    /* star="sol" allows you to define a default value to parameter "star" in case there has none that gets passed as a value */
    console.log(name, id, planet, star)
}

funcDestr(personObj)

// ???????????????????????????????????????????????????????????????????????????????


// !    Use case : Where Destructuring is useful : You can save a certain object obtained and stringify it (..to convert it into JSON) and save it to the local storage



let person = {
    id: 123,
    name: "Kunal",
    dob: new Date("1982-01-01").valueOf(),
    age: 44,
    salary: 55000,
    department: "Parks and Recreation",
    hometown: "Pawnee"
};

console.log(person.dob)

// savePersonES5(person)

// ! Creating a function to convert/ have the first three properties of the object converted into JSON before storing it in local storage. 

// !A    ES5 way: function being creaed basis ES5   -   NO DESTRUCTURING

function savePersonES5(someObj) {
    let id = Date.now();
    if (someObj.id) {
        /* "if" statements check if the specific property exists ,if not, then we are restting ther values thereafter through 'conditions' */
        id = someObj.id;
    }
    let name = someObj.name;
    if (!name) {
        name = "Blank";
    }
    let dob = someObj.dob ? someObj.dob : new Date("2000-01-01").valueOf() /* Ternary statement */
    // save it in local storage for later use
    const KEY = "someRandomUniqueString";
    let jsonStr = JSON.stringify({
        id: id,
        name: name,
        dob: dob
    });
    localStorage.setItem(KEY, jsonStr)
}

// !B    ES6 way: function being creaed basis ES6       -       DESTRUCTURING

// ! Benefit using Destructring is that all "if" statements are taken care off..., also you can set the default value right as blow through parameters..so there's a lot of less coding required
function savePersonES6({
    id = Date.now(),
    name = "Blank",
    dob = new Date("2001-01-01").valueOf()
}) {
    const KEY = "someRandomUniqueString";
    let jsonStr = JSON.stringify({
        /* also, if the property names and variables names are same, then NO NEED to repeat the values..this is additional feature of ES6 ...not particular to DESTRUCTURINg */
        id,
        name,
        dob
    });
    localStorage.setItem(KEY, jsonStr)  
}

savePersonES6(person)