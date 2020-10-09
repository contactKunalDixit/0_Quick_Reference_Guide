/* 
 *   Falsey values:
 *   false, undefined,null 0,"",'',NaN
 *   Else, everything else is truthy
 */

/*
*   Ternary: Ternary statements are alternative to If Statements but saves typing. Use "Ternary" if there is only one/two options

*   if: Use "if" if there are few options

*   Switch: If there are many options, then choose "Switch". Switch always have a DEFAULT case at very end....just like the "else" statement.
*   Also using keyword "break" is mandatory else, whatever follows when a condition comes true gets executed

*/

// E.g.1

let first = true;
let last = false;
let age

// If Statement
if (first === last) {
    console.log("This is true")
} else {
    console.log("This is FALSE")
}

/*

*   Ternary Statement is much shorter syntax. It is generally used when there is one command to be executed either ways
*/
(first === last) ? console.log("This is true"): console.log("This is FALSE")



//  Ternary statement - a nested if within an If
first === last ? console.log("This is true") : (age) ? console.log(`Age value exists and is ${age}`) : console.log("This is FALSE")


/* 
*   Switch E.g. 

*  Scenario:  The function below mimics a possible response from the server and generates a random response. Basis the response recieved, conditionals statements follow. Since there are many options in this scenario, we are using "Switch" statement:

*/

/*

let fetch = () => {
    let codes = [{
            "code": 200,
            "text": "ok"
        },
        {
            "code": 201,
            "text": "Created"
        },
        {
            "code": 304,
            "text": "Not Modified"
        },
        {
            "code": 400,
            "text": "Bad Request"
        },
        {
            "code": 401,
            "text": "Unauthorized"
        },
        {
            "code": 403,
            "text": "Forbidden"
        },
        {
            "code": 404,
            "text": "File Not Found"
        },
        {
            "code": 405,
            "text": "Method Not Allowed"
        },
        {
            "code": 500,
            "text": "Internal Server Error"
        }, {
            "code": 503,
            "text": "Service Unavailable"
        },
        {
            "code":600, "text":"NOT A REAL CODE"
        }
    ]

    let num = Math.floor(Math.random() * codes.length);
    return codes[num]

}

let response = fetch();
console.log(response)
console.log(response.code)
switch (response.code) {
    case 200:
    case 201:
        console.log("All is good: ", response.text);
        break; /* The keyword "break" indicatees the code to stop and Exit ...else since the condtion has come out to be true, the code will continue to run below */
/*
    case 304:
        console.log("Redirect:", response.text)
        break;
    case 400:
    case 401:
    case 403:
    case 404:
    case 405:
        console.log("Problem", response.text)
        break;
    case 500:
    case 503:
        console.log("Server Error: ", response.text)
        break;

    default:
        console.log(response.code, response.text)
}
*/




/*
todo:   ANOTHER SCENARIO: CREATING A CUSTOMISED FUNCTION as ARRAY PROTOTYPE WHICH CAN THEN BE USED WITH ANY ARRAY....AND THEN USING SWITCH statement.....ref file - "Practical use of prototypes with arrays"...
*/
let codes = [{
        "code": 200,
        "text": "ok"
    },
    {
        "code": 201,
        "text": "Created"
    },
    {
        "code": 304,
        "text": "Not Modified"
    },
    {
        "code": 400,
        "text": "Bad Request"
    },
    {
        "code": 401,
        "text": "Unauthorized"
    },
    {
        "code": 403,
        "text": "Forbidden"
    },
    {
        "code": 404,
        "text": "File Not Found"
    },
    {
        "code": 405,
        "text": "Method Not Allowed"
    },
    {
        "code": 500,
        "text": "Internal Server Error"
    }, {
        "code": 503,
        "text": "Service Unavailable"
    }
]

// todo: CREATING A CUSTOMISED FUNCTION IN ARRAY PROTOTYPE:
Array.prototype.fetch = function () {


    let num = Math.floor(Math.random() * this.length);
    return this[num]

}

console.log(codes)
let newRespo = codes.fetch();
console.log(newRespo.code, "::", newRespo.text);


// todo: SWITCH IS A FUNCTION IN ITSELF:
switch (newRespo.code) {
    case 200:
    case 201:
        console.log("All is good : ", newRespo.text);
        break;
    case 304:
        console.log("Redirect : ", newRespo.text);
        break;
    case 400:
    case 401:
    case 403:
    case 404:
    case 405:
        console.log("Problem : ", newRespo.text);
        break;
    case 500:
    case 503:
        console.log("Server Error : ", newRespo.text);
        break;
    default:
}