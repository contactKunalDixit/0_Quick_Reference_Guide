//* NameSpace USAGE to avoid Name Conflicts

//!  Open these 2 js files simultaneously to read the concept


//  nameSpace1.js


/*
let colorDiv,divA;

colorDiv = function(ev){

    let target = ev.currentTarget;
    target.style.backgroundColor = 'Purple';
    target.style.color="white";
}

divA = document.querySelector("#output")

divA.addEventListener("mouseout",colorDiv)
*/

/*
 *  The above code alogwith the code in namespace2.js file uses the same variable name "colorDiv" which contradicts in the Global Workspace because the same variable CANNOT be Re-DECLARED in the common Global workspace.

*   Had someone used "var" instread of "Let", then the code sequence wouldve SILENTLY overWritten the value of the common variable - "colorDiv" but who can guarantee that!

 *   This variable Name contridictions can become a commonly faced problem especially when multiple different JS scripts are being added by different individuals. 


 *  The Solution lies in the way the code gets written
 * 
 * The same code can be written in Object oriented wayin both the files...refer below:
 * This definately is a good pratice
 */

 let Kunal = {
     colorDiv: function(ev){
        let target = ev.currentTarget;
        target.style.backgroundColor = 'Purple';
        target.style.color="white"
     },
     init: function(){
        let divA = document.querySelector("#output");

        divA.addEventListener("mouseout",this.colorDiv);
     }
 }

 Kunal.init()

 /*  just using 'colorDiv' and Not 'this.colorDiv' will not work because it has NOT been defined locally within the function init() but is a different function altogether and defined under Object - "Kunal" */


 /* The this in 'this.colorDiv' points to the object that is calling colorDiv which in this case is the Object - "Kunal". writing "Kunal.colorDiv" wouldve been a hard coded but wouldve worked the same way*/


 /* The possiblity of Object names being same is less than using all variables from Global Scope. Innstead , in here, you are restricting the scope thorugh binding the variables through these Objects */