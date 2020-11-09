/*      Array of Objects
        Effeciently combining and chaining Array methods and Arrow Functions
        person.email.indexOf("replicant.io")> -1
        Find the names of all the people who have "replicant.io" emails
*/

let people = [{
                "id": 123,
                "name": "Rick Deckard",
                "email": "rick@bladerunner.org"
        },
        {
                "id": 456,
                "name": "Roy Batty",
                "email": "roy@replicant.io"
        },
        {
                "id": 789,
                "name": "J.F.Sebastian",
                "email": "j.f@tyler.com"
        },
        {
                "id": 258,
                "name": "Pris",
                "email": "pris@replicant.io"
        }
];

//Case: have an array of names which have the email id as replicant.io
// 2 step process:
// filter to a new array, then map() a new array with just names from the objects which qualified thrugh previous array.filter() method

let replicants = people.filter((person) => {
        return person.email.indexOf("replicant.io") > -1;
})


let repNames = replicants.map((person) => {
        return person.name
})

console.log("List of replicant Names",repNames)




// IMPROVISED PROCEEDURE : CHAINING ARRAY METHODS:

let repNamesChained = people.filter((person) => {
        return person.email.indexOf("replicant.io") > -1
}).map((person) => {
        return person.name
})

console.log("List of replicant Names",repNamesChained)