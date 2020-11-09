/*
*   Throwing Errors and Exceptions

*   using Try...Catch to handle thrown Errors and Exceptions

!   Built-in Error Types: 
*   new Error() is the generic parent of all types of below built-in Errors objects

    EvalError:      you get if you are working with the Eval statement

    InternalError:  something that caused the V8 engine to crash e.g. too much recursion
    RangeError:     the code expects something to be passed as an arguement to a method or a function and you're outside of values that could be considered
    ReferenceError: You are referncing something that doesnt exists
    SyntaxError:    If the syntax is invalid
    TypeError:      When you are passing a value which is of different type.i.e. wrong data type value being passed e.g. It was expecting a boolean but you passed an string, 
    URIError:       When something is wrong with the URI/ URL 

*   /* The usage of kwyword "Throw" is to make a breakPoint for Javascript so that No further processing happens thereafter. and the execution skips to catch

*   So in this case, the exception is thrown at throw"Javelin" beyond which the code that follows console.log("Hello") doesnt execute ...

*   The keyword throw can be followed by a string or a numerical, OBJECT */






// throw "Javelin" /* 
/*
*   Throw really creates an exception saying that you cannot go beyond this because something wrong has happened. 

*   It says we are trying something and if something goes wrong, then catch it....else the code execution continues...

*   So how would you ensure that this only shows up when there actually occurs a prob....Thats through try and catch functionality. It is quite similar to 'if' consitional functionality
*   try this condition, and if it throw is truthy, then cease everything that follows AND instead skip to the instructions present in catch(err)
*   If there is no error thrown, then continue with the instruction exuiting in try and SKIP catch(err) all together.

*   Throw returned value can be anything, string , boolean, number and the same will be passed as a parameter in catch

* finally - says run this condition irrespective of how the flow has been till now. i.e. throw err > catch(err) or normal execution


*/
// ! Eg1   thrw - passing a value

try {
    // throw "This is an Error";
    console.log("Hello")
} catch (err) {

    console.log("Caught", err)
} finally {
    console.log("Took you a long time")
}
console.log("ENd")

/*
 *  BreakUp of above code snippet: 
 *  try : initiates execution
 *  throw is TRUTHY i.e. of throw has an value:: throw an err with return value "This is an Error",.. and stop all the code execution after this and switch to catch (err)
 * if throw is FALSY i.e. means doesnt exist:: continue execution of the rest of the code within 'Try' and SKIP the catch as there's NO error to catch really.
 * AND then when you're out of the try block code, execute the rest of the program normally.
 * IF you dont use "try & catch" and error occurs, the prog execution stops there abruptly but with 'try n catch', even if the error has occured, the prog continues
 * 
 * and the final "finally" runs the final statement irrespectve of how the previous execution has been. wether there was an error n catch or normal execution that happened before "finally"
 * 
 *  */

 //! passing an object as in Throw and then using its property in catch phase

 //! When we pass an object which has been manually created, it is known as EXCEPTION
 

try {
    
    throw {name:"Bubba", message:"Salmon"}   /*When we pass an object which has been manually created, it is known as EXCEPTION */
    
    console.log("Hello")
} catch (err) {
    console.log("caught: ",err.name, err.message)
    

} finally {

    console.log("This gets printed neverthless")

}
console.log("This is the END")

/*
 * * IF you dont use "try & catch" and error occurs, the prog execution stops there abruptly but with 'try n catch', even if the error has occured, the prog continues

*   CONCLUSION: catch(err) only gets activated if throw is truthy, ELSE, the flow skips catch and resumes on with the rest of the code
 */

 //! We CAN use a BUILT-IN Error object,

 try {
    throw new Error("A Stick")  /* Error is the object Error.name, "A Stick" is the object Error.message */
    console.log("Hello")
} catch (err) {
    console.log("caught: ", err.name,err.message)
    

} finally {

    console.log("This gets printed neverthless")

}
console.log("This is the END")


 //! BUILT-IN Error object, USAGE IN REAL LIFE CASES:

// ! The BROWSER will not crash even in case of error IF we keep the code within Try

try {
    let url = "http://jsonplaceholder.typicode.com";
    fetch(url).then((response)=>{})
    console.log("Hello")
    
} catch (error) {
    console.log("Caught", error.name, error.message)
}finally{
    console.log("Took you a long time");
}
console.log("END")