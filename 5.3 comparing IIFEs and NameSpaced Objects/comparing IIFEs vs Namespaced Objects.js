/*
* There are two ways to avoid any naming conflict especially when multiple js files are being used, or when the same file is being used to create a prog but the code snippets are being written by multiple devs

1)  Either use NameSpace Objects i.e. wrap every variable & function within an object and then call using "." notation or obj["prop"]
2)  Use IIFEs 

*/

// 
// let objectNS = {
//     name: "Object NameSpace",
//     init: function () {
//         objectNS.name = "new Value";
//         // objectNS.action();   or
//         this.action()
//     },
//     action: function () {
//         console.log("This gets invoked")
//     }
// }

// objectNS.init()


let objIIFE = function () {
    let myPrivateVar = "hidden Value";
    let myPrivateFunc = function () {
        console.log("Private Fuction running")
    };
    let x = function () {

        console.log(myPrivateVar)

    };
    x();

    return {
        /* The presence of return and the objIIFE being an IIFE creates an object - "objIIFE" with its props n values being what is there in "return"   */
        name: "Object IIFE",
        init: x,
        action: function () {
            myPrivateFunc()
        }
    };

}();

console.log(objIIFE);

objIIFE.init()
objIIFE.action()