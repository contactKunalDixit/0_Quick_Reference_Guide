/*
AJAX is the techniques for javascript code to make request for new files to be sent to the browser. but the key is that when they arrive from the browser, they dont replace the current page that you are looking at, But instead you can decide what you'd like to keep and what you'd like to discard from the new file that is being passed to the javascript. You can choose and pick what you'd like to see on the page rather than discarding the current page entirely and replaceing it with new page.

AJAX techniques work with Asynchronous Javascript:  that means the user can continue doing his work while the Asychronous request is made to the server through browser

There are 2 ways to process AJAX request:   

                    old method:     xhr = new XMLHttpRequest()

                    new method:     fetch(url)
*/
// **********************************************************************


// Old version AJAX:

let xhr = new XMLHttpRequest()

xhr.open("GET",url,true)

xhr.addEventListener("load",function(response){
// handle response from the server
let data = response.responseText             /*or response XML*/
let json = JSON,parse(data)                  /* JSON object */   
console.log("XMLHTTPRequest: ", data);
});

xhr.addEventListener("error", function(err){
    // error handling network request
})
xhr.send(null)



// ***********************************************************************

//  new Version AJAX:

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(err){
    // error handling netwrok request
});
