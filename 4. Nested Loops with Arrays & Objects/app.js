// * *  This  is a kind of data you get from AJAX calls: you get multidimensional objects i.e. Objects within objects and arrays within arrays and objects within arrays and arrays within objects


//  Nested loops and multi-dimensional objects
//  We can use nested loops to access all the elements
//  inside multi-dimensional arrays or objectshis is a kind 

let twoD = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 10, 5, 6, 3, 22, 6, 42],
    [123, 54, 12, 11, 9, 15]
];

let bigHero = {
    characters: [{
            name: "Hiro",
            voice: "Ryan Potter"
        },
        {
            name: "Baymax",
            voice: "Scott Adsit"
        },
        {
            name: "Go Go Tamago",
            voice: "Jamie Chung"
        },
        {
            name: "Fred",
            voice: "T.J. Miller"
        },
    ]


}

//  nested for loops: one for loop within another for loop


for (let i = 0; i < twoD.length; i++) {
    //     i.forEach((n)=>{
    console.log(i, twoD[i])
    //     })

    for (let n = 0; n < twoD.length; n++) {
        console.log(n, twoD[i][n])
    }
}


let chars = bigHero.characters
console.log(chars)
//

/*  This could be one way */


// for(let i=0;i<chars.length;i++){
//     console.log(`the name is ${chars[i].name} and the voice over was dne by ${chars[i].voice}`)
// }


/* Using for (in) loop */
for(let i = 0; i < chars.length; i++) {

    for (let prop in chars[i]) {
        // console.log(`The name is ${chars[i][prop]}: and the voice is ${chars[i][prop]} `)
        console.log(prop,": ", chars[i][prop])          /* Only brackets would work and NOT dot notation as prop is a variable adn with variables, '.' notation doesn't work */

    }
}