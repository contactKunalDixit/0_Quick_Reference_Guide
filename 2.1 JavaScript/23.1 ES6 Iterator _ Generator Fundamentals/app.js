/** REVISIT THE TOPIC: 
 * https://www.youtube.com/watch?v=NoUPIQobeLw&list=PLyuRouwmQCjkYdv4VjuIbvcMZVWSdOm58&index=99
 * 
 *  ES6 Iterators and Generators
 * 
 * Iterators are built-in object in certain data types like Arrays, Strings, Maps, Sets, NodeLists.
 * 
 * Iterator built-in Object's job is to act as a hold by which inner properties of the data types can be revealed or exposed (and returned)
 
 *  {Object} =>      Iterator    => Generator
 */

 let characters = ["Finn", "Poe","Rey", "Kylo","Luke","Leia"]

 function* genny(){
yield "a";
}

let iter = genny()
console.log(iter)

console.dir(iter.next())