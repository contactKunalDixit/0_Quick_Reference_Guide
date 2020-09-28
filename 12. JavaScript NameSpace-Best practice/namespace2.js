//  nameSpace2.js

// 
// let colorDiv,divB;
// 
// divB = document.querySelector("#output")
// divB.addEventListener("mouseover",colorDiv)
// 
// function colorDiv(ev){
//     let target = ev.currentTarget;
//     target.style.backgroundColor = "olive"
//     target.style.color = "#333"
// }

/*

*   Changing this too into object oriented approach
*/


let ColHighlight = {
    colorDiv: function(ev){
        let target = ev.currentTarget;
            target.style.backgroundColor = "olive";
            target.style.color = "#333";
    },

    init:function(){
        divB = document.querySelector("#output")
        divB.addEventListener("mouseover",this.colorDiv)
    }
}
/*  just using 'colorDiv' and Not 'this.colorDiv' will not work because it has NOT been defined locally within the function init() but is a different function altogether */

/* The this in 'this.colorDiv' points to the object that is calling colorDiv which in this case is the object - "ColHighlight*/

ColHighlight.init()