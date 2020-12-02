const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
/*
    ! Important*/


// Have width size of one of the slides and then all the following slides will be made to have the same size

// getBoundingClientRect() methods reutrns the size of an element and its position relative to the viewport.
// This method returns a DOMRect object with eight properties : left, top, right, bottom, x, y, width, height.

const slideSize = slides[0].getBoundingClientRect();
/*
    ! Important*/

const slideWidth = slideSize.width;
/*
    ! Important*/


// arrange the slides next to one another : 

// alternative 1
// slides[0].style.left = `${slideWidth * 0}px`;   /* This gives 0 px*/
// slides[1].style.left = `${slideWidth * 1}px`;
// slides[2].style.left = `${slideWidth * 2}px`;

// alternative 2 : using forEach()

const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
    /* 
     ! Important */
};
// Applying forEach() to every element in slides array, call back function
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    /*
       ! Important*/

    // To make flow continue to work, follow
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}




// When I click to right, Move slides ot the right
nextButton.addEventListener("click", e => {
    // We need to know what are current slide is
    const currentSlide = track.querySelector(".current-slide");
    /*
      ! Important*/

    // We need to know what are next slide is
    const nextSlide = currentSlide.nextElementSibling;

    // But in order to move to the next slide, we need to know how much do we need to move by
    /*
    const amountToMove = nextSlide.style.left;

    // move to the next slide on each click
    track.style.transform = 'translateX(-' + amountToMove + ')';

    // To make flow continue to work, follow
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");

    console.log(amountToMove);*/
    moveToSlide(track, currentSlide, nextSlide)

})


// When I click left, move slides to the left: 
prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;


    moveToSlide(track, currentSlide, prevSlide)
})


// When I click nav indicators, move to that slide;

dotsNav.addEventListener("click", e => {
    //What indicator was clicked on
    const targetDot = e.target.closest("button");
    /*
    ! Important*/

    // console.log(targetDot)

    if (!targetDot) return; /* This function will only work if clicked on one of the dots */
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    /* This is going to give an array because you've defined the contant 'dots' to be an array  */
    const targetIndex = dots.findIndex(dot =>
        dot === targetDot
        /*
    ! Important*/
        /* This finds the 1st truthy statement and returns its index number */
    )

    /* target index willlet us find target slide */
    const targetSlide = slides[targetIndex];

    /* clicking on the particular dot will take you to that particular image */

    moveToSlide(track, currentSlide, targetSlide)
})