/* 
 * 
 * Objects
 *
 * Arrays are ordered numbered list whereas Objects are unordered list with key, property pair values 
 * 
 * Arrays can hold other arrays and Objects as its items
 * 
 * Objects too can hold other arrays and objects as its key value pairs
 * 
 */

//  Objects
var dog = {
    "name": "Woody",
    "type": "dog"
}

var cat = {
    "name":"Bob",
    "type":"cat"
}

console.log(dog,cat)


// Array:                   make an Array of objects
var pets = [dog,cat]
console.log(pets)

pets.push({"name":"Roxy","type":"dog"})     /* Add another object literal to that array. This objects gets added as the last item */
console.log(pets)
console.log(pets[2])

cat.age = 3                 /* Adding another key 'age' with value 3 to object 'cat' */
dog["age"] = 12

console.log(pets)

pets[0].age = 14    
pets[2].age = 6
console.log(pets)

pets[1].age = 31
console.log(pets)

pets[1].hungry = true       /* Adding another property/key - 'hungry' with boolean value true to array item 1 which is the object cat with key "name" value as "bob" */
console.log(pets)
console.log(cat)


