/*

*   Hoisting

*   its a process through which javascript understands what your file is trying to do

*   its a process through which Javascript declares the variables & functions and puts them at the top of the file aka hoist them at the top.

var a;              the var 'a' gets declared but has not been assigned, hence it returns undefined

var b= 4;           The var 'b' gets declared and is hoisted at the top of the file but only gets assigned value at this step 11. Thus, if you try console.log(b) before tis step, it gives 'undefined' as the result

console.log(d)      This will give 'undefined' because it has just been hoisted but not been assigned a value as yet. Its value gets assigned only at step 20

c()

function c(){
    function decleration:   with this function getting declared at step 18 and getting hoisted at top of the file, you can execute this function anywhere - even before its decleration 

var d = 5;  

e();        gives 'undefined' because variable 'e' even being hoisted at the top is being assigned a function value only on step 24. thus can only work after step 24.

var e = function (){
    function expression
}

e(); this works

CONCLUSION: 

        Every variable gets hoisted at the top but what impacts is when in the sequence is it getting assigned a value. Its only after a variable gets assigned a value will it ever be returning an actual value and NOT undefined.

        Function decleration works better than function expression
        If a function has been defined through decleration, it can be used even before it has been defined because it would already been hoisted.
        If a function has been defined through expression variable, then it can be used only after the variable has been assigned the function's value and NOT BEFORE.

        THUS, ALWAYS use function DECLERATION over function expression
*/




/*

'var' gets a global scope and a local scope

'let' gets a global scope and local scope and bloc scope - value can be reassigned

'const' gets a global, local and block and its value can never be reassigned 


*/

// create global variables:
var ranger = "Kunal";
let elf = "Legolas";
const DWARF = "Gimli";
const name = "SOnal"


function a (){
    for(var i=0;i<100;i++){
        // i is a local scoped variable because it has been assigned a value  using 'var'
        const name ="Kunal";
        console.log(name)
    }

    for (let c=0;c<100;c++){
        // c is also a block scoped variable hence more strict because tit has been assigned a value using 'let' the variable is only visible within this block
        console.log( c)
    }
    console.log('i', i)
    // console.log('c',c)
    


}

a()
console.log(name)

console.log({"names":"Kunal"})


