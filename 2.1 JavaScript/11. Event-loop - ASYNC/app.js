// ?   YOUTUBE:  What the heck is the event loop anyway? | Philip Roberts | JSConf EU  

// !    What is callStack and how does it function ?

let foo = ()=>{
    console.log("Actually I'll be called first")
}

let bar = ()=>{
    foo()
    console.log("Hi")
}

let baz = ()=>{
bar()
console.log("Bye")
}
baz()

/*
/*
The above is a set of few defination and a certain code sequence: function clearly states the call stack sequence flow:

below is the response in console log:

/
Actually I'll be called first              app.js:2 
Hi                                         app.js:7
Bye                                        app.js:12


*   The main sequence file is known as the main() stack and the function gets added per the sequence execution
*   baz() gets called   first and sits at the base
*   which calls bar()   which sits on the top of baz()
*   which calls foo()   which sits on top of bar() and calls the console.log(), then takes foo() OFF the stack
*   which then brings the control back to bar() and calls console.log("Hi"), then takes bar() OFF from the stack
*   which then brings control back to baz() and callsconsole.log("Bye"), then takes baz() OFF the stack

*   The MAIN CALL STACK also clears OFF because it is empty now.


*/
// 
// 
// let foo1 = ()=>{
//   
// throw new Error("Oops")
// }
// 
// let bar1 = ()=>{
//     foo1()
//     console.log("Hi")
// }
// 
// let baz1 = ()=>{
// bar1()
// console.log("Bye")
// }
// baz1()

/*
The above is a set of few defination and a certain code sequence: function clearly states the call stack sequence flow:

below is the response in console log:

    /*     Uncaught Error: Oops
    /*              at foo1 (app.js:28)                           foo @ app.js:28 */
    /*              at bar1 (app.js:32)                           bar @ app.js:32*/
    /*              at baz1 (app.js:37)                          baz @ app.js:37*/
    /*              at app.js:40                                (anonymous) @ app.js:40 


the above is the response from console log and it shows that 
an anonymous function was called at 40
which called baz1 @line37
which called bar1 @line32
which called foo1 @line28       ...which gave an threw an Error "Oops"


*/


// ?    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// !    Q:  What is blocking    ?

/*
Blcoking isnt precisly a defination of what it can or cannot be.    Anything say a function which when on main() call stack slows down the execution sequence can contribute to blocking. e.g. a network request donw in a sequence manner and not Asynchronously can be an eg of blocking.

Consider below code snippet:

let foo = $.getSync("//foo.com")
let bar = $.getSync("//bar.com")
let qux = $.getSync("//qux.com")

console.log(foo)
console.log("bar")
console.log("qux")


*   This will add console.log(foo) to the main() callStack and calls it and then waits for the response from the server...post wwaiting and receiving the response, it takes the console.log("foo") OFF the main stack ... AND THEN..


*   This will add console.log(bar) to the main() callStack and calls it and then waits for the response from the server...post wwaiting and receiving the response, it takes the console.log("bar") OFF the main stack... AND THEN..

*   This will add console.log(qux) to the main() callStack and calls it and then waits for the response from the server...post wwaiting and receiving the response, it takes the console.log("qux") OFF the main stack and EMPTIES the MAIN CALL STACK QUEUE

*/
//!  So why is this a problem? 
/*

Because of the browsers. Browsers arent configured to run multiple code sequences because JAvascript is an single thread language. thus, if they are sending a request to the servers (ref above e.g.), the browser would be completely engaged with the execution of sending these jQuery request through console.log() and appear as "STUCK" to the user. NOT A DESIRABLE USER EXPERIENCE.

The solution    -   "ASYNCHRONOUS CALLBACKS"        

*/

// ?    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//  !                   // Async Callbacks & the Call Stack


  console.log("Hi")

  setTimeout(()=>{
console.log("I am being slow coz I immitate server response ...and Even though I was added to Call Stack earlier than the next console.log() that follows, I am being actually executed after it...BEcause I had to wait in the call Queue")

  },5000)

  console.log("Even though, I'm after setTimeOut() in sequence, I am getting called prior to it ...BUT this is an mere visual dillusion really...WAIT for 5 seconds")




/*
*   step by step BREAKUP of code sequence in an actual scenario:

*   Main callStack() gets initiated

*   console.log("Hi") gets added to main Call Stack and gets taken OFF after its execution

*   setTimeOut() gets added to main CallStack 

*   setTimeOut comprises of setTimeOut(callback,delayTimer) 
*   
*   the Delay timer() gets transitioned to the webAPIS QUEUE because DelayTimer is an API provided to us by the browser because it doesnt live in the V8 source but is an extra functionality provided by the browser, so it gets transitioned to the webAPI queue, post which the browser triggers the DELAY timer(). The browser handles the count down for you.

*   in the meanwhile, since the setTimeOut() in itself has been processed, is therefore taken OFF the Main callStack, 
*   The next console.log("Even though, I'm.....") gets added to the Main CallStack, Gets called and executed, and taken OFF the MainCall stack as normal sequence.
*   The Main callStack also completes all the code execution as per the code sequence, and CONCLUDES.


*  NOW, since the webAPI QUEUE was processing the Delaytimer functionality, thus it holds on to to callback function for 5 seconds and delays its execution. for 5 seconds.

*   BUT in the meanwhile, had there been more code to run in MainCallStack and MaincallStack would have been busy executing the codes, You'd NOT want the webAPIs to enforce its result mid way the code execution, and this is RIGHTLY SO because, it'll mess the entire execution sequence if the callback function gets added and executed midway in the MainCallStack.
*   THUS, after the DelayTimer delays the result for 5 seconds, the 'callBack()' gets trsnsitioned to "TASK QUEUE" and WAITS for its turn to get added - through "EVENT LOOP" - to MAIN CALL STACK   
*   The event Loop can be looked up as a little functionality whose main job is continuosly check for MainCallStack run and if it finds the MainCallStack is empty, then to add the first item on task Queue to the MainCallStacknwhich effectively runs it.

*   Since, the event loop  found the MainCallStack to be empty, it now transitions the callBack() to MainCallStack. So, virtually, the callBack() returns to the jAvaScript V8 landscape.

*   the Main Callstack re-initiates
*   so now our callBack() runs and the console.log("I am being slow coz I ...) gets console logged. after which it is taken OFF the MaincallStack

*   Finally, since all the sequence has executes, the main() call stack also CONCLUDES again


*   LESSON: REMEMBER, THATS HOW ALL THE WEBAPIs WORK e.g. AJAX and others
*/

// ! ANOTHER EXAMPLE DEMO-ING THE aSYNC BEHAVIOUR WITH AJAX REQUESTs  

/*
console.log("Hi")

$.get("url",function cb(data){
    console.log(data)
})

console.log("BYE")
*/

/*
* BREAKUP of above Async code   

*   1.  MainCallStack initates
*   2.  console.log("Hi")  gets added to MainCallStack,.. then gets executed,...then is taken OFF the MainCallStack

*   3.  the AJAX request $get("url", function cb(data){..}) gets added to the MainCallStack.

*   4.  BUT the code for running this AJAX request doesnt live in V8 runtime, but lives in BROWSER as the WEB APIs, hence the XHR (url,callBack func) request gets transitioned to the WEB APIs queue FROM THE MAIN CALLSTACK

*   5.  On the MainCallStack, the next code which is console.log("BYE") gets added and then is executed POST which gets removed from the MainCallStack.

*   6.  On the WEb APISs QUEUE, The AJAX request continues to execute and fetch for result from the server. It may seek results or may continue to fetch it forEver. BUT when the results appear from the server for the AJAX request, the callback function gets added to the "task QUEUE".

*   7.  the "EVENT LOOP" checks if the MainCallStack is empty or waits for it to be empty

*   8.  the callBack function gets added to the MainCallStack by "EVENT LOOP"...Gets Executed and is fimally taken OFF the MainCallStack

*   9.  The MainCallStack CONCLUDES


*/

// ! FETCH API

// ! This is promise .then() approach

const url = `https://jsonplaceholder.typicode.com/todos/1`
// // console.log(fetch(url))
// fetch(url)
//   .then((res) => {
//   return res.json()
//   })
//   .then((data) => {
//   console.log(data)
//   })
//   .catch((err) => {
//   console.error(err)
//   })


  // ! This is Async and Await approach




// const loadData = async () => {
//   try {
//     const url2 = `https://jsonplaceholder.typicode.com/todos/1`;
//     const res = await fetch(url2)
//     console.log(res)
//     console.log(res.ok)
//     const data = await res.json()
//     // console.log(data)
//    return data
//   } catch {
//     ((err) => {
//       console.error(err)
//     })
//   }
// }

// ! Async() also returns Promise, amd in order to retrive the 'returned' output, we can either do .then ()
// const data = loadData()
// console.log(data)


// loadData().then((data) => { console.log(data) });

// ! or another hack using IIFE functions, if you's like to just use Async Await

  // (async () => {
  //   const data = await loadData();
  //   console.log(data)
  // })()


// Promise.all can be used when there are multiple fetch requests being sought
const loadData2 = async () => {
  try{
  const url3 = `https://jsonplaceholder.typicode.com/todos/3`;
  const url4 = `https://jsonplaceholder.typicode.com/todos/4`;
  const url5 = `https://jsonplaceholder.typicode.com/todos/5`;

  const results = await Promise.all([
    fetch(url3),
    fetch(url4),
    fetch(url5)
  ])
  const groupRes =results.map((result) => {return result.json() })
  const groupData = await Promise.all(groupRes)
    return groupData
  } catch {
    (err) => { console.error(err)}
  }
}
// console.log(loadData2())
(async () => {
  const data = await loadData2()
  console.log(data)
})
()

  