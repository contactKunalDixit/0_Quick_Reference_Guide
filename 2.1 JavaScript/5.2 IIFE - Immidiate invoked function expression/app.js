// IIFE:    Immidiately Invoked function expression

(function doSomething (){
    console.log("This is just a function decleration and NOT going to execute by itself")
// })()    Adding () at the end of decleration or expression invokes that function immidiately
})



let somethingElse = (function(name){
    console.log("This is also a function expression and not going to execute by itself")
return {
    "name":name,
    "id":123,
    x:function(){
        console.log("This is a nested function in an object")
    }
}


})("Kunal");

console.log(somethingElse)
console.log(somethingElse.id)   /* this is viable because we returned an object into the variable and hence can now console.log(id or name property of the object through '.' notation) */
console.log(somethingElse.name) /* this is viable because we returned an object into the variable and hence can now console.log(id or name property of the object through '.' notation) */

somethingElse.x()
