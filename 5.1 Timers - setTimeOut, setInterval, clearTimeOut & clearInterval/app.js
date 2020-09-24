
//  *   setTimeOut() allows you to set the minimum duration for which the function would wait in queue BEFORE it gets executed. the first parameter is the callback function which needs to run, followed by the minimum duration after which it gets executed , the rest of the parameters are the arguements whh will be passed in the callback function  

// *    clearTimeOut() Stops the setTimeOut() function's execution. For this to work, you SHOULD store the setTimeOut() in a variable and the same reference is then passed as an arguement in clearTimeOut()

// *    setInterval() works the same way as setTimeOut() BUT continues to execute the function for the defined interval so it is like an INFINTE Loop which never ends. The 'parameters' funcdamentals are same as setTimeOut()

// *    clearInterval() works to stop the above mentioned "Infinte loop". the concept for this function's execution stays same as clearTimeOut()






let log1 = (msg)=>{
console.log(msg)


}

let timeOut= setTimeout(log1,1000,"Hello World")




let log2 = (msg)=>{
    console.log(msg)
    
    clearInterval(intOut)
    }

let intOut = setInterval(log2,2000,"HOla World")    /* This only would print it once because of the presence of clearInterval() within log2, which clears the setInterval() */