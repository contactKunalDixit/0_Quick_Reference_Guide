/*

*   Array High order Method: 

?   array.forEach() 
?   array.map()
?   array.filter()
?   array.reduce()
?   array.sort()
?   array.concat()
?   array.includes()
?   array.some()
?   array.every()

*   Array now has a built in method forEach which just works the same way as forEach loop, Just that it is a built-in method

*   forEach() can run an callback anonymous function for each item of the ARRAY but does NOT return anything to us. it just goes through and lets us do something to each element of the array BUT it is NOT effecting the ORIGINAL ARRAY. IT WILL NOT RETURN

*   map()  : passes an callback anonymous function for each item of the existing array and RETURNS the new set of values in 'ARRAY' format to the NEW variable. SO it DOES NOT change the original array but creates a NEW one. It's ought to have a return statement within. IT WILL 'RETURN' and whatever we return becomes the content of the new ARRAY.

*   .filter(): similar to map() ,because it also creates a brand new array from the host array, calls a callback function and runs it through each of the array items and returns an new array but the function only returns a true or false for each of those items in the array........... IF the item that is being checked by the function RETURNS true, it qualifies to be part of new ARRAY and IF it doesnt, then it DOES NOT gets passed in.

*   .reduce() : passes a callback function like previous methods but in addition, this one has an additional paramater which gets used by the callback. So the callback function would run on each item of the array and will be resulting in a SINGLE VALUE......Reduces the array to a single value from LEFT to RIGHT....... Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function...If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.....



*  .sort()  :   it works similar to other functions and it sorts. takes a callback function 
???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

??????                  ADD More


*   .concat() :   allows you to combine 2 arrays. let c = a.concat(b) allows you to combine content of b after a and store all together in c.

*   .includes() :   it checks to see if something is inside an array. this method RETURNS an BOOLEAN value

*   indexOf()   :   The substring to search for in the string. Returns the position of the first occurance of the substring. If the item is not found amongst the array items, it results in -1. The indexOf() is case sensitive    

*   .some() :       The some() method checks if any of the elements in an array pass a test (provided as a function). it is similar to array.includes() method. just that includes() has been added recently and hence has limited support in browsers. array.some() follows the same functional approach as other methods discussed i.e. it runs a callback function for each item of the Array just like forEach(), sort(), map(), reduce() etc. BUT only runs it till it finds something. after that it stops running it....it can come handy for filter task on apps when used in conjuction with indexOf(). The some() method executes the function once for each element present in the array: (a)    If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values) (b) Otherwise it returns false......Note: some() does not execute the function for array elements without values....Note: some() does not change the original array. 

*   .every()    :   Determines whether all the members of an array satisfy the specified test.....quite similar to .some in functional approach. But .some() checks for every element TILL it finds the element which fulfils the condition, The ARRAY.every() ensures that every element in the array meets the condition...The ARRAY.every() method executes the function once for each element present in the array: (a)    If all array elemeents fulfile the conditionm, then it returns the TRUE (b) Otherwise it returns false......Note: some() does not execute the function for array elements without values....Note: some() does not change the original array. 


*/


//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//? Array.forEach()

let names = ["Kunal", "Sonal", "Amaira", "Joby", "Jason", "Thor", "Rahul"]

names.forEach((item, index) => {
    if (item === "Thor") {
        item = item.toUpperCase()
        console.log(`${index}: ${item}`)

    } else {
        item = item.toLowerCase()
        console.log(`${index}: ${item}`)

    }

})

console.log(names)
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//? array.map()
/*
*   Array.map
    Array.map(function(item,index,array){
    .....
    })
*/

// 
let namesMap = ["C3PO", "Kunal", "Sonal", "Amaira", "Joby", "Jason", "Thor", "Rahul", "R2D2"]


let x = namesMap.map(function (item, index) {
    return (`${index}: ${item.length}`)
})

let y = namesMap.forEach(function (item, index) {
    return (`${index}: ${item.length}`)
})
console.log(namesMap)
console.log(x)
console.log(y)

//  another example:

let data = [{
        company: "Finance",
        start: 1982,
        end: 2003
    },
    {
        company: "Retail",
        start: 1922,
        end: 2023
    },
    {
        company: "Auto",
        start: 1999,
        end: 2034
    },
    {
        company: "Media",
        start: 2001,
        end: 2020
    }
]

let modData = data.map((item) => {
    return item.company
})
console.log(modData)


// another Element.g.:          USING double MAP

let ages = [2, 3, 4, 5, 6, 7, 8, 9]

let ageSqrt = ages
    .map(item => {
        return Math.sqrt(item)
    })
    .map(item => {
        return item * 2
    })
console.log(ageSqrt)

//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//? array.filter()

let numbers1 = [23, 45, 14, 66, 94, 33, 4, 9]
let breakpoint = 30;

let smallNumbers = numbers1.filter((item) => {
    return (item < breakpoint)
})
console.log(smallNumbers)

let bigNumbers = numbers1.filter((item) => {
    return (item > breakpoint)
})
console.log(bigNumbers)

let oddNumbers = numbers1.filter((item) => {
    if (item % 2 !== 0) {
        return item
    }
})


console.log(oddNumbers)


//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//? array.reduce()

let numbersSum = [12, 34, 56, 78, 91]
let sum = numbersSum.reduce(function (passedIn, item) {
    console.log(passedIn, item)
    return passedIn + item
}, 0)

console.log(sum)

// compares each of the movie titles and chooses the one with high numeric value as it goes on in comparison

let movies = ["star Wars", "Star trek", "Jaws", "Jurassic Park", "Gross Pointe Blank", "Eternal Sunshine of the spotless mind", "Memnto", "Dog Soldiers", "The Host", "Gran Torino", "Close Encounters of the third kind"]

let first = movies.reduce(function (current, item) {
    console.log("comparing", current, "to", item)
    return (current < item) ? current : item

}, "\u0434")

console.log(first)


//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//? array.sort()

let data1 = [{
        company: "Finance",
        start: 1982,
        end: 2003
    },
    {
        company: "Retail",
        start: 1922,
        end: 2023
    },
    {
        company: "Auto",
        start: 1999,
        end: 2034
    },
    {
        company: "Media",
        start: 2001,
        end: 2020
    }
]


//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ?    array.concat()

let a = [1, 2, 3, 4]

let b = [5, 6, 7]

let c = [8, 9, 10, 1, 2, 3, 4]
let d = a.concat(b).concat(c)
console.log(d)


// another else.g.  slight variation...create a new array and then store the value in it.

let e = [].concat(a, b, c).sort() /* sort() numerically sorts the array */

console.log(e)
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// ?    array.includes()

let dwarves = ["Grumpy", "Sneezy", "Happy", "Bashful", "Doc", "Dopey", "Sleepy"]

let name1 = "Peter Dinklage"
let name2 = "Kenny Baker"
let name3 = "Happy"

let hasPeter = dwarves.includes(name1, 0)
let hasKenny = dwarves.includes(name2, 0)
let hasHappy = dwarves.includes(name3, 0)



console.log("Has Peter: ", hasPeter);
console.log("Has Kenny: ", hasKenny);
console.log("Has Happy: ", hasHappy);


//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ?    array.some()

let moviesSome = ["Star Wars", "Star treks", "Jaws", 'Jurassic Park', "Gross Pointe Blank", "Eternal sunshine of the spotless mind", "Layer Cake", "Memento", "Dog soldiers", "the Host"]

let keyword1 = "Star"; /* Appears more than once */
let keyword2 = "Cake"; /* appears once */
let keyword3 = "Max"; /* not in the list */

let test1 = moviesSome.some((item, index) => {
    console.log(index, item)                            /*Prints all the elements untill the keyword1 appears..including the keyword1*/
    return item.indexOf(keyword1) > -1
})

let test2 = moviesSome.some((title, index) => {
    console.log(index, title)                           /*Prints all the elements untill the keyword1 appears..including the keyword2*/
    return title.indexOf(keyword2) > -1
})

let test3 = moviesSome.some((title, index) =>{
    console.log(index, title)                           /*Prints all the elements untill the keyword1 appears..including the keyword3*/
    return title.indexOf(keyword3) > -1
})

console.log(test1)      /*Prints true as the item exists*/
console.log(test2)      /*Prints true as the item exists*/
console.log(test3)      /*Prints true as the item exists*/

//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//! * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ?    array.every()

let numbers= [40,16,67,345,22,23,142,63,59,283]

let greaterThan20 = numbers.every((num)=>{
    console.log(numbers)
    return num>20
})
console.log(greaterThan20)

let greaterThan10 = numbers.every((item)=>{
return item>10
})
console.log(greaterThan10)