/*
CallBack Function:

when we call one function, and tell it to run another function. That 'another' function is known as  callback function.




*/

/* 1st example of a callback - custom built function*/

function doThing(docallBack) {
    let x = 7
    console.log(`This value ${x} is the result of the fiesst function `)
    docallBack()
}

function docallBack() {
    console.log("This is the call back function getting executed")
}

doThing(docallBack)



/* 2nd example of a callback - setTimeOut 3 seconds - built-in method*/

function twoSecondsDelay(x,y) {
    setTimeout(() => {
        x(y)
    }, 3000)
}


twoSecondsDelay(doThing, docallBack)


/* 3rd Example:     set time out function calls a callback function with paramter*/

setTimeout(hello,3000,"Kunal")


function hello(nm,index,arr){
console.log(`Hello, ${nm}`)
}


/* 4th Example:     forEach function calls a callback function with paramter*/

let names =["Inga","Kunal","Mattias","Carlos"]

names.forEach(hello)

