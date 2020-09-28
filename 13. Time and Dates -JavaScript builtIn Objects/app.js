/*
*   REFER TO MDN MOZILLA for more details

*   Date objects in Javascripts

*   Javascript has a bulit in datatype : date and Time to keep track of dates and time.
*   It doesnt do the maths like difference between dates and similar stuff. For doing those calculations, we have a Javascript library called "moment.js"... Explore that


*/



// !    Creating a new Date Object through a constructor
let d = new Date()
/* 
*   the variable 'd' holds the date object representing current time and date from my computer 
*   its a constructor function because keyword 'new' is being used to create a Date object

*/
console.log(d)
console.dir(d)


// !    Creating a new Date Stamp   : Means how much seconds have passed since the Unix Epoch e.g. we are finding what is the date n time object since 1.5 Trillion seconds after Unix Epoch.
//!     Unix Epoch is the hard coded date n time stamp which is taken as starting ref in all languages for date n time calculations.


let d1 = new Date(1500000000000)
// Unix Epoch Jan1 00:00:00:000 1970
console.log(d1)


// !    If you'd like to calculate say 50 years from the UNIX EPOCH

let num = 1000 * 60 * 60 * 24 * 365.25 * 50 
/*  1000 milli seconds * 60 seconds * 60 Mins * 24 hrs * no.of days in an year * 50 Years*/

let d2 = new Date(num)  /** Gives you a date n time stamp for num */

console.log(d2)
console.dir(d2)

// !    If you'd provide a date as string and also NO time value, it still will converts

let str = "20 July 2012"

let d3 = new Date(str)
console.log(d3);

let d4 = new Date(2020, 0)
console.log(d4);
