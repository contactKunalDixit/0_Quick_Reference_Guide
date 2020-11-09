/*          *   REVISIT THE TOPIC AGAIN:  https://www.youtube.com/watch?v=_D6ilsRB9tw&list=PLyuRouwmQCjkYdv4VjuIbvcMZVWSdOm58&index=101
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

 * In order to access a method on an instance of an Object, we use get() and set() followed by mwntioning the object instance i.e. in case of car:  car.wheels()

 * But if you'd like to call a function from the class INSTANCE itself (..and when its NOT present in the prototype section of the class)i.e. in case below, if you'd like to call a function from the class 'vehicle' instance itself, then use the keyword "static" that you'll have to use while defining that function during class formation. If you need to draw similarilty, it is just like adding a method in the prototype of an object constructor, which can be then be accessed by all instances that get created from that object constructor
 

 */


 class Vehicle{ 
        constructor(_wheels){
            this.numWheels = _wheels;
        }
        get wheels(){
            return this.numWheels;
        }
        set wheels(_wheels){
            this.numWheels = _wheels;
        }
        static accelerate(){
            console.log("go fast")
        }
        static deAccelerate(){
            console.log("go slow")
        }
 }



 
 let car = new Vehicle(4)
 let car1= new Vehicle(5)
 let car2 = new Vehicle(6)
 console.log(car)
 console.log(car1.wheels)

 Vehicle.accelerate()
 Vehicle.deAccelerate()

console.dir(Vehicle)
console.dir(car1)


class CarClass extends Vehicle{
    constructor(_wheels,_make,_model,_year){
        super(_wheels);
        this.make = _make;
        this.model=_model;
        this.year = _year;
    }

    info(){
console.log(`The ${this.make} ${this.model} has ${this.wheels} wheels and was manufatured in ${this.year}`)
    }
}

let ferrari = new CarClass(4,"Ferrari", "Testarossa",1993);
console.dir(ferrari)
ferrari.info()