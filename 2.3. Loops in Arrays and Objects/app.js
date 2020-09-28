// Notes also added https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript   

/*
*   Kinds of LOOPS for ARRAYS:

*   for (let i = 0; i < arr.length; ++i)
*   for (let i in arr)
*   arr.forEach((v, i) => {  ...  })
*   for (const v of arr)

*   WHILE LOOPS: 2 variations : while VS do while

*/

// ?    NOTE: The 'for' and 'for/in' looping constructs give you access to the index in the array, NOT the actual elements. With the other two loops i.e. forEach() and for(of), you get access to the actual value of the Key within the Object or an array. Refer below examples:

let names = ["Kunal Dixit", "Sonal Dixit", "Amaira Dixit", "Joby Abraham", "Megha Abraham", "Rahul Sharma", "Ditya Sharma"]



//! 1.  For Loop:           INCREMENT


for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// Extension of the above -  For Loop:           e.g. of DECREMENT

for (let i = names.length - 1; i > 0; i--) {
    console.log(names[i])
}


//! 2.  For (in) Loop:   Is preffered for ARRAYS and OBJECTS

for (let i in names) {
    console.log(names[i])
}

//! 3.  forEach Loop:     /* forEach CAN facilitate access to the array index, but is optional..*/

names.forEach((item) => {
    console.log(item)
}) /* only elements */

names.forEach((item, i) => console.log(i, item)) /* Elements and index number */



//! 4.   for (of) Loop:   for(of) only allows you to access elements. You can't access index numbers through for(of) loop  in an array*/

for (let elem of names) {
    console.log(elem)
}



// ?    SPECIAL NOTE:   JavaScripts ARRAYS are special objects which get presented as numerical listed form with key's being the index numbers. That also means, that being objects, they have the ability to hold Non-Numeric properties aka Keys.

names.test = "bad"
console.log(names) // will print out below:

/*
0: "Kunal Dixit"
1: "Sonal Dixit"
2: "Amaira Dixit"
3: "Joby Abraham"
4: "Megha Abraham"
5: "Rahul Sharma"
6: "Ditya Sharma"
test: "bad"
*/

/*
*    NOTE: 3 out of 4 LOOPS will rightly and correctly discard iterating and considering the key/value pair -  test:"bad" but ONLY for (in) would consider it.Ideally, you'd not like to do this because it really defies the whole purpose of it being an ARRAY. that's why, forEach is preferred mostly over other loop methods.


*   EMPTY Elements: forEach() and for/in skip empty elements in the array, for and for/of do not. The forEach() behavior may cause problems, however, holes in JavaScript arrays are generally rare because they are not supported in JSON. So you don't have to worry about holes in user data, unless you give your users access to the full JavaScript runtime.(which you'll ideally NOT)


*   KEYWORD 'this' -    for, for/in, and for/of retain the outside scope's value of "this", but the forEach() callback will have a different this unless you use an arrow function. THUS, ALWAYS n ALWAYS  - Use arrow functions with forEach(). 

*/



//*    Kinds of LOOPS for Objects



/*
*   The for(let i=0;i<arr.length;i++){} loop is used when we can count the number of items which is only possible in the case of ARRAYs since they come listed numbered. and you can use the -   '.length'

*   When dealing with OBJECTS, since they are non numbered objects, the array length property doesnt work hence the normal "for" also, woud'nt be applicable. 


*/
// ? using for(in) with OBJECTS

const monsters = {
    "Canada": "Sasquatch",
    "Nepal": "Yeti",
    "Scotland": "LochNess monster"
}


console.log(monsters)
for (item in monsters) {
    /*  for(in) targets the element, NOT the index */
    console.log(item) /*  prop is a peoperty name */
    console.log(monsters[item]) /*   monsters.prop (dot notation) wont work because prop is a property "variable" */
    console.log(`In country ${item}, lives a monster named ${monsters[item]}`)
}


// ? using for(in) with ARRAYS     /* in ARRAYs, item rather than denoting the name of the property, denotes the index number */

const pets = ["Woody", "Roxy", "Bob"]

for (item in pets) {
    console.log(item)
    console.log(pets[item])
    console.log(`In pets sequence ${item}, lives a pet named ${pets[item]}`)

}


// ? using for(of) with OBJECTS : For(of) can be used with the objects BUT ONLY on the 'ITERABLE' OBJECTS..Not all



let superNatural = {
    "actors": ["Jared", "Sonali", "chaka", "Misha", "Mark"],
    "characters": ["Sam Winchester", "Dean Wnchester", "R2D2", "Robot23", "Luke"],
    "seasons": 12
}




for (const key in superNatural) {
    console.log(key);
    console.log(key, superNatural[key])

}

// further looping elements within an nested array "actors"

for (let i in superNatural.actors){
    console.log(i,":",superNatural.actors[i])
}

// for (const i of superNatural) {          
//     console.log(superNatural[i])
// }
for ( value of superNatural.actors) {
    console.log(value)
}


/*
*   Difference between for...of and for...in: 
*   Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.
*   
*   The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.

*   The for...of statement iterates over values that the 'iterable' object defines to be iterated over.

*/