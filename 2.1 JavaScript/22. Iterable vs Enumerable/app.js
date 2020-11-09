/*
*   Iterable and Enumerable are different things in JavaScript.

*   When you add properties to an object, they can be defined as enumerable or not.

*   Some object types like Arrays, Strings, Maps, Sets, and nodeLists also have Iterators which are objects that let you access certain values from the object ARRAY.
*   Iterators only work specifically for values within an ARRAY

*   We'll dicsuss the difference between the two and how the for..in and for..of loops take advantage of the difference.   



?       ARRAYS are Iterable but OBJECTS are not Iterable. They can only be enumerable i.e. we can access te properties which in thier descriptor have been defined as enumerable:true.
       
?       Iteration can be used on an OBJECT if we convert them into ARRAYS tthrough Object.key(), Object.value(), Object.entries() after which they can be iterated. 

*/

let names = ['Kunal','Sonal',"Amaira","Rahul","Ditya"]; /* Ths can be iterated because these are values within an Array */

names.prop1 = "Zagoooka";   /**   This will not be iterated even if it is part of the Object because it is not a part of ARRAY */

Object.defineProperty(names,"Hobby",{value:"Learning",enumerable:false})
console.log(names)

for(let p in names){
    console.log("in names", p)
}

/* For.. in considers only those properties/ keys which are enumerable: true, thus it doesnt considers prop "Hobby" - if it is enumerable 'false' but considers the specific property "Hobby" if it is enumerable - 'true' */

Object.defineProperty(names,"Hobby2",{value:"Learning2",enumerable:true})
for (let i in names){
    console.log(i)
}
console.log(names)


/* 
Another Example: another object "middleEarth" has 4 properties named towns, races, creator and age. Though the first three are default enumerable, the last one "age" is NOT, hence even though it is very much part of the object, the for(in) loop ignores its presence.
*/

/*
todo:   Thus this is what "enumerable" means. When you are accessing all the properties or Keys of an object, all the properties which have enumerable : true will get counted.
*/


let middleEarth = {
    "towns":["Yushan","Beltrad"],
    "races":["Singaporean", "indian", "Malays"]

}

middleEarth.creator = "Kunal Dixit";
Object.defineProperty(middleEarth,"age",{
    value:"120 Yrs",
    enumerable:false
})

for(let it in middleEarth){
    console.log(it)
}


for (const iter of middleEarth.towns) { 
    console.log(iter)
}

/* thus, for (let i of middleEarth){...} will NOT WORK because middleEarth is an object and is NOT iterable but middleEarth.towns can be iterated */

/*

?   CONSLUSION:    ARRAYS are Iterable but OBJECTS are not Iterable. They can only be enumerable i.e. we can access te properties which in thier descriptor have been defined as enumerable:true.
?                   Iteration can be used on an OBJECT if we convert them into ARRAYS tthrough Object.key(), Object.value(), Object.entries() after which they can be iterated. 

*/