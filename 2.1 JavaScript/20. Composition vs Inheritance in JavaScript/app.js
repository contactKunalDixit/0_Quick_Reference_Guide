//!      REVISIT THIS TOPIC
/*
*   This is more of an intermediate topic in JavaScript. Understanding the implications of how you architect your applications will help you down the road as your application becomes more mature and requires updates.
*   Inheritance and Composition are two approaches to designing your Objects to be maintainable.
*   This video focuses on the weakness of Inheritance when your objects start to morph in the future.

*   The examples in this video are built without Classes. They use Object.create and Object.assign to show the more standard JavaScript syntax.

*/


//  Inheritance vs Composition

/*  Inheritance 
 *       Character   >   Human   >   Sam
 *       Character   >   Robot   >   x73
 */

const Character = {
    talk: function (...msg) {
        console.log(msg.join(" "))
    }
};

const Human = Object.create(Character, {
    speed: {
        value: 3
    },
    name: {
        value: "Hector"
    }
});

Human.walk = function () {
    this.talk(this.name, "walking")
};

Human.eat = function () {
    this.talk(this.name, "eating")
};

const Robot = Object.create(Character, {
    speed: {
        value: 8
    },
    id: {
        value: "THX1138"
    }
});

Robot.drive = function () {
    this.talk(this.id, "\u26A1", "driving")
};

Robot.wifi = function () {
    this.talk(this.id, '\u26A1', "Connecting")
};
const sam = Object.create(Human, {
    name: {
        value: "Kunal"
    }
});

sam.walk()
sam.talk("Hello from Kunal");

const x73 = Object.create(Robot, {
    id: {
        value: "x73"
    }
});

x73.drive()
x73.wifi();

// What about a Cybernetically enhanced human with wifi?

