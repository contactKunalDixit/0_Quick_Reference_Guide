/* 
*       Keyboard events in the browser


*       ev.char || ev.charcode || ev.which      - Depends and differs on different browsers..on some its char or charcode or which, hence including all through "or"

*       keydown     keyup   keypress

 */


/*
?   GAME LOGIC: the logic used in switch() is the same logic used in games for registering the particular button press and making particular calls accordingly

*/


let log = console.log;

document.addEventListener("DOMContentLoaded", init)

function init() {
    let txt = document.querySelector("#txt")
    txt.addEventListener("keydown", anyKey)
    document.body.addEventListener("keydown", anyKey) /* the body event listener gets triggered when INPUT is triggered */

}

function anyKey(ev) {
    // ev.stopPropagation()
    log(ev)
    log(ev.type, ev.target.value)
    let target = ev.currentTarget,
        tag = target.tagName,
        char = ev.char || ev.charcode || ev.which /*Depends and differs on different browsers..on some its char or charcode or which, hence including all through "or" */
    log(char, tag)

    let s = String.fromCharCode(char) /* window function String.fromCharCode() converts a charCode numeric value to its equivalent string*/
    log(s)

    switch (char) {
        case 37:
            log("LEFT");
            break;
        case 40:
            log("DOWN");
            break;


    }

}