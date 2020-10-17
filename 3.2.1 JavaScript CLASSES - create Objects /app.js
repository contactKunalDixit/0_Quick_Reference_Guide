/*
 *Intro to Classes in JS

!   Javascript has been and still is an "PROTOTYPE" based language and NOT a Class based language but the "class" feature was added in ES6 for convenience of developers who are coming in from differnet languages where class concept is prevalent.

todo:   THUS, the CLASS functionality is still just a syntantic wrapper around Objects and the JavaScript Prototype chain...Even the syntax looks like an Object

*   Defining a class is just like defining a BLUEPRINT of an Object. Just like in JavaScript, Prototype has been treated as defining a BluePrint before ES6

 ************   JAVASCRIPT STILL USES PROTOTYPES    ******** 

A class is JavaScript uses the below 7 keywords:

 class
 extends
 constructor
 super
 get
 set
 static
 

 */


 class Vehicle{ 
        constructor(_wheels){
            this.numWheels = _wheels;
        }
        
 }



 
 let car = new Vehicle(4)
 console.log(car)
//  console.log(car.wheels)
//  Vehicle.accelerate()