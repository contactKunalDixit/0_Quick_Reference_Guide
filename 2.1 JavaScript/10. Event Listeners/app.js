/*

*   Javascript Event Listeners:
*   Event-driven programming: your programming waits for events and uses them as triggers to run the next function(s)

*   object.addEventListener(event,callbackfunction)

*   DOMContentLoaded : This is a good practice: you can encapsulate all the event triggers together in an function init() which gets triggered only after the entire content has been loaded
*/



document.addEventListener("DOMContentLoaded", init)

function init() {
    let btn = document.querySelector("#btn")
    let lnk = document.querySelector("#lnk")
    let txt = document.querySelector("#text")


    btn.addEventListener("click", buttonClicked)
    lnk.addEventListener("click", linkClicked)
    txt.addEventListener("input", (ev) => {
        // console.log(ev)
        console.log(ev.target.value)

        txt.addEventListener("change", (ev) => {
            console.log(ev)
            console.log(ev.type, ev.target.value)
        })

        txt.addEventListener("blur", (ev) => {
            console.log(ev)
            console.log(ev.type, ev.target.value)
        })

    })

}

function buttonClicked(ev) {
    console.log(ev)
    console.log(ev.type, ev.target, ev.currentTarget)
}


function linkClicked(ev) {
    ev.preventDefault() /* built in method preventDefault() exists for every object event....stop the link from being followed*/
    console.log(ev)
    console.log(ev.type, ev.target, ev.currentTarget)

}