/*

*   Event Bubbling and Propagation

*   element.addEventListener(type, function, useCapture)

Q   What is event bubbling in JavaScript ?
Q   What is the difference between the bubbling and the capture phase for events ?
Q   How do you stop events from bubbling ?
Q   How to control multiple listeners on the same object ?

*   Capture is opposite to Bubbling and Capture is set to false by default .i.e. default behaviour for events is to bubble up the chain.

*   stopPropagation: Only stops the bubbling up the chain

*   stopImmediatePropagation() will do two things: 
*               Stop bubbling up the chain  ...AND
*               Stop any other event listener (that follows thereafter) to work with this object




*/

let m = document.querySelector("#m"),
    d = document.querySelector("#d"),
    p = document.querySelector("#p"),
    s = document.querySelector("#s"),
    log = console.log;

let highlight = (ev) => {
    ev.stopPropagation();   /* Stops bubbling for all events because stopPropagation has been added in function "highlight" which is being used by all object events coz of [m,d,p,s].forEach() */
    let target = ev.currentTarget;
    target.className = "pink";

    reset(target)


}
d.addEventListener("click", (ev) => {
    ev.stopImmediatePropagation();
    /* ev.stopImmediatePropogation() will stop the click event being passed from this to others above i.e. stop bubbling 
    AND 
    
    also will stop other click event associated with this object 'd' i.e. hence, in this case, highlight will never be called  */
    log("Hi I \'m a Div")

});


let reset = (_element) => {
    setTimeout(() => {
        _element.className = ""
    }, 2000)
}

[m, d, p, s].forEach((element) => {
    element.addEventListener("click", highlight)
});