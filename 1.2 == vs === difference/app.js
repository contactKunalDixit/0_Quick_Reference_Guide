/*

*   Equality:

== Means comparing values. Hence, known as value equivalence check   

=== Means comapring object types. Hence, known as object equivalence check

The negative versions are !=    and !==

If 2 elements which are being compared come true for ===, they will always be true for ==

*/


let a, b, obj1, obj2, copy1, copy2, html1, html2;


// !    Primitive data types: checking for value equivalency (==)

let doubleEq = (msg, a, b) => {
    if (a == b) {
        console.log(`${msg} ${a} and ${b} are equal`)
    } else {
        console.log(`${msg} ${a} and ${b} are NOT equal`)
    }
}

doubleEq("DoubEquivalency Check: ", 5, 5)           /*num vs num */
doubleEq("DoubEquivalency Check: ", 5, 6)       
doubleEq("DoubEquivalency Check: ", true, true)     /*bool vs bool */
doubleEq("DoubEquivalency Check: ", true, false)
doubleEq("DoubEquivalency Check: ", true, 1)        /*bool vs num */
doubleEq("DoubEquivalency Check: ", true, 2)
doubleEq("DoubEquivalency Check: ", false, 0)
doubleEq("DoubEquivalency Check: ", true, "1")      /*bool vs Str */
doubleEq("DoubEquivalency Check: ", true, "Kunal")
doubleEq("DoubEquivalency Check: ", "kunal", "Kunal")
doubleEq("DoubEquivalency Check: ", "Kunal", "Kunal")


// !    Primitive data types:   checking for data type and value equivalency (===). hence, considered more strict equivalency

let tripEq = (msg, a, b) => {
    if (a === b) {
        console.log(`${msg} ${a} and ${b} are equal`)
    } else {
        console.log(`${msg} ${a} and ${b} are NOT equal`)
    }
}

tripEq("tripEquivalancy Check:", 5, 5)
tripEq("tripEquivalancy Check:", 5, 6)
tripEq("tripEquivalancy Check:", true, true)
tripEq("tripEquivalancy Check:", true, false)
tripEq("tripEquivalancy Check:", true, 1)
tripEq("tripEquivalancy Check:", true, 2)
tripEq("tripEquivalancy Check:", false, 0)
tripEq("tripEquivalancy Check:", true, "1");
tripEq("tripEquivalancy Check:", true, "Kunal");
tripEq("tripEquivalancy Check:", "kunal", "Kunal");
tripEq("tripEquivalancy Check:", "Kunal", "Kunal")

// !    Objects: checking for value Equivalency and Data Equivalency

/*
* In case of Objects:
*    while comparing value types(==) OR data Types(===), NO two objects can have same value. They are all unique and indipendant EVEN thoguh they may hold same key/value pairs and look same.

*    Note: The specific values, the key holds if comapared, can come out to be same 
*/

obj1 = {
    name: "Kunal"
};

obj2 = {
    name: "Kunal"
};

obj3 = {
    name: "Sonal"
};

obj4 = {
    prop: "Kunal"
};


doubleEq("DoubEquivalency Check: ", obj1, obj2) /* objects can never be the same */
doubleEq("DoubEquivalency Check: ", obj1.name, obj2.name) /* there values in key/value pair can be same */
doubleEq("DoubEquivalency Check: ", obj1.name, obj3.name)
doubleEq("DoubEquivalency Check: ", obj1.name, obj4.prop) /* there values in key/value pair can be same */


tripEq("tripEquivalancy Check:", obj1, obj2)
tripEq("tripEquivalancy Check:", obj1.name, obj2.name)
tripEq("tripEquivalancy Check:", obj1.name, obj3.name)
tripEq("tripEquivalancy Check:", obj1.name, obj4.prop)


// !    2 different COPIES of the SAME ONE OBJECT: 

/*
 *`Because both copies POINT to the same object (same memory slot), hence both would be same for both value Equivalency check and Data Type Equivalency check
 */

copy1 = obj1;
copy2 = obj1;

doubleEq("DoubEquivalency Check: ", copy1, copy2)
doubleEq("DoubEquivalency Check: ", copy1.name, obj2.name)
doubleEq("DoubEquivalency Check: ", copy1.name, obj3.name)
doubleEq("DoubEquivalency Check: ", copy1.name, obj4.prop)

tripEq("tripEquivalancy Check:", copy1, copy2)
tripEq("tripEquivalancy Check:", copy1.name, obj2.name)
tripEq("tripEquivalancy Check:", copy1.name, obj3.name)
tripEq("tripEquivalancy Check:", copy1.name, obj4.prop)



// !    2 different variables (COPIES) pointing to the same  HTML object(html tag):

html1 = document.querySelector("h1");
html2 = document.querySelector("h1");

doubleEq("DoubEquivalency Check: ", html1, html2)
tripEq("tripEquivalancy Check:", html1, html2)