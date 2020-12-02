/* controls multiple elements with class ".slide" and put them into nodelist which is like an ARRAY */
const slides = document.querySelectorAll(".slide");
console.log(slides)

/* control the buttons */
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

/* to have the automatic functionality */
const auto = false; /* value to make it slide NOT automatically  */
const intervalTime = 3000; /* value in milliSec by which it'll be moving automatically when auto != false; */
let slideInterval; /* variable initialised to keep a track of variable intervalTime */


//  2 methods : one for next arrow and another for previous arrow;

// Method 1
const nextSlide = () => {
    // get current class
    const current = document.querySelector(".current");
    // remove current class
    current.classList.remove("current");

    // check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add("current")
    } else {
        // add current to the 1st slide
        slides[0].classList.add("current");
    }






    /*
    ! Check for below, though dioesnt seem that its required considering that we are anyways manually removing the current class in step 2, but check if its required in case of automation navigation loop
     */

    /** We could use below setTimeout callback function in case of manually removing class "current" through classList.remove() */



    // setTimeout(() => {
    //     current.classList.remove("current");
    // }, 2000);

}

// Method 2
const prevSlide = () => {
    // get current class
    const current = document.querySelector(".current");
    // remove current class
    current.classList.remove("current");
    // check for previous slide
    if (current.previousElementSibling) {
        // Add the class current to previous sibling
        current.previousElementSibling.classList.add("current")
    } else {
        // add class "current" to the last slide
        slides[slides.length - 1].classList.add("current");
    }

       /** We could use below setTimeout callback function in case of manually removing class "current" through classList.remove() */

    // setTimeout(() => {
    //     current.classList.remove("current");
    // })

}

/* Adding Event listener */

next.addEventListener("click", (e) => {
    console.log(e);
    nextSlide();


    // If auto value is set to true AND the click event happens, the below will clear Interval and then reset it again to the value of intervalTime 
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime)
    }
})

prev.addEventListener("click", (e) => {
    console.dir(e);
    prevSlide();
     // If auto value is set to true AND the click event happens, the below will clear Interval and then reset it again to the value of intervalTime 
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime)
    }

})


// Auto Slide:

if(auto){
    // run next slide at interval time
    slideInterval = setInterval(nextSlide,intervalTime);
}