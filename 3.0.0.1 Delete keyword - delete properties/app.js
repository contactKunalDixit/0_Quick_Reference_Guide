/*
DELETES the particular prop/ key from the Object
*/


let obj1 = {
    name:"Kunal",
    Learning: "Programming",
    "will stop learning" : false,
    "succeed": true
}

console.dir(obj1)

delete obj1["will stop learning"]
console.dir(obj1)

/*
*   Delete Specific Property from Objects:
    *   2 options: 
    *   Either you can manually set the property value to "undefined" through "." notation.
    *   or delete family.father also deletes.


*/

let family = {
    "father":"Kunal Dixit",
    "mother":"Sonal Dixit",
    Daughter:"Amaira",
    relation:()=>{
console.log("We are family")
    }
}

console.log(family.father, family.mother,family.Daughter,family.relation())


family.father = undefined;
console.log(family);
delete family.father;
console.log(family.father)
console.log(family)

